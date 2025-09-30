// /src/app/api/valutazione/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // Nodemailer richiede Node

function env(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing ENV ${name}`);
  return v;
}

function toStr(v: unknown): string {
  if (v === null || v === undefined) return "";
  return typeof v === "string" ? v : String(v);
}

async function parseBody(req: NextRequest): Promise<Record<string, string>> {
  const ct = req.headers.get("content-type") || "";
  // JSON
  if (ct.includes("application/json")) {
    const data = (await req.json()) as Record<string, unknown>;
    const out: Record<string, string> = {};
    Object.keys(data || {}).forEach((k) => (out[k] = toStr(data[k])));
    return out;
  }
  // Form (multipart/urlencoded)
  if (ct.includes("application/x-www-form-urlencoded") || ct.includes("multipart/form-data")) {
    const fd = await req.formData();
    const obj: Record<string, string> = {};
    fd.forEach((value, key) => {
      if (typeof value === "string") obj[key] = value;
    });
    return obj;
  }
  // Fallback
  try {
    const data = (await req.json()) as Record<string, unknown>;
    const out: Record<string, string> = {};
    Object.keys(data || {}).forEach((k) => (out[k] = toStr(data[k])));
    return out;
  } catch {
    return {};
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await parseBody(req);

    const {
      name,
      email,
      phone,
      company,
      website,
      item,
      value,
      quantity,
      media,
      area,
      period,
      message,
      privacy,
    } = body;

    // ENV
    const SMTP_HOST = env("SMTP_HOST");
    const SMTP_PORT = parseInt(env("SMTP_PORT"), 10);
    const SMTP_USER = env("SMTP_USER");
    const SMTP_PASS = env("SMTP_PASS");
    const MAIL_FROM = env("MAIL_FROM");
    const MAIL_TO = env("MAIL_TO");

    // Transport (Register/Webnode: certificato su securemail.pro)
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465, // 465=SSL, 587=STARTTLS
      auth: { user: SMTP_USER, pass: SMTP_PASS },
      tls: { servername: "authsmtp.securemail.pro" },
    });

    await transporter.verify();

    const subject = `Valutazione — ${toStr(company) || "Azienda"} — ${toStr(name) || "N/D"}`;
    const rows: Array<[string, unknown]> = [
      ["Azienda", company],
      ["Nome", name],
      ["Email", email],
      ["Telefono", phone],
      ["Sito", website],
      ["Cosa scambiare", item],
      ["Quantità", quantity],
      ["Valore stimato", value],
      ["Media/Canali", media],
      ["Area", area],
      ["Periodo", period],
      ["Messaggio", message],
      ["Privacy", privacy],
    ];

    const html =
      `<h2>Richiesta valutazione</h2>` +
      rows.map(([k, v]) => `<p><b>${k}:</b> ${toStr(v)}</p>`).join("");

    const text =
      `Richiesta valutazione\n` +
      rows.map(([k, v]) => `${k}: ${toStr(v)}`).join("\n");

    const info = await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: toStr(email) || MAIL_FROM,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true, id: info.messageId });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
