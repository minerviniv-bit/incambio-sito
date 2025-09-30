// /src/app/api/valutazione/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // evita edge: Nodemailer vuole Node

function env(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing ENV ${name}`);
  return v;
}

async function parseBody(req: NextRequest) {
  const ct = req.headers.get("content-type") || "";
  if (ct.includes("application/json")) {
    return await req.json();
  }
  if (
    ct.includes("application/x-www-form-urlencoded") ||
    ct.includes("multipart/form-data")
  ) {
    const fd = await req.formData();
    const obj: Record<string, any> = {};
    fd.forEach((v, k) => (obj[k] = v));
    return obj;
  }
  // fallback
  try {
    return await req.json();
  } catch {
    return {};
  }
}

export async function POST(req: NextRequest) {
  // 🔹 PING TEMPORANEO
  console.log(
    "[VALUTAZIONE] start",
    req.method,
    req.headers.get("content-type")
  );
  return NextResponse.json({ ok: true, ping: true }, { status: 200 });
  // --- tutto il resto sotto per ora non verrà eseguito ---

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
    } = body ?? {};

    const SMTP_HOST = env("SMTP_HOST");
    const SMTP_PORT = parseInt(env("SMTP_PORT"), 10);
    const SMTP_USER = env("SMTP_USER");
    const SMTP_PASS = env("SMTP_PASS");
    const MAIL_FROM = env("MAIL_FROM");
    const MAIL_TO = env("MAIL_TO");

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465, // 465=SSL, 587=STARTTLS
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.verify();

    const subject = `Valutazione — ${company ?? "Azienda"} — ${name ?? "N/D"}`;
    const rows = [
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
      rows.map(([k, v]) => `<p><b>${k}:</b> ${v ?? ""}</p>`).join("");

    const text =
      `Richiesta valutazione\n` +
      rows.map(([k, v]) => `${k}: ${v ?? ""}`).join("\n");

    const info = await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: email || MAIL_FROM,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true, id: info.messageId });
  } catch (err: any) {
    console.error("[VALUTAZIONE] ERROR:", err?.message || err);
    return NextResponse.json(
      { ok: false, error: err?.message || "Send failed" },
      { status: 500 }
    );
  }
}
