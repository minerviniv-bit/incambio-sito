import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ ok: false, message: "JSON mancante" }, { status: 400 });
    }

    // campi dal form (nuovi nomi)
    const {
      company, website, name, email, phone,
      asset, qty, value, deadline,
      goals, channels
    } = body as Record<string, any>;

    // validazione minima
    for (const [k, v] of Object.entries({ company, name, email, asset })) {
      if (!v || String(v).trim() === "") {
        return NextResponse.json({ ok: false, message: `Campo mancante: ${k}` }, { status: 400 });
      }
    }

    const {
      SMTP_HOST = "authsmtp.register.it",
      SMTP_PORT = "587",
      SMTP_USER,
      SMTP_PASS,
      MAIL_TO = "info@incambio.eu",
      MAIL_FROM = SMTP_USER || "no-reply@incambio.eu",
    } = process.env as Record<string, string>;

    if (!SMTP_USER || !SMTP_PASS) {
      console.error("[SMTP] ENV mancanti", { user: !!SMTP_USER, pass: !!SMTP_PASS });
      return NextResponse.json({ ok: false, message: "SMTP non configurato" }, { status: 500 });
    }

    const port = Number(SMTP_PORT) || 587;
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,      // 465 SSL, altrimenti STARTTLS
      auth: { user: SMTP_USER, pass: SMTP_PASS },
      tls: { rejectUnauthorized: false },
    });

    try { await transporter.verify(); console.log("[SMTP] Verify OK"); }
    catch (e) { console.warn("[SMTP] Verify fallita (continuo)", e); }

    const channelsText = Array.isArray(channels) ? channels.join(", ") : (channels || "-");

    const text = `
Nuova richiesta di valutazione

Azienda: ${company}
Referente: ${name}
Email: ${email}
Telefono: ${phone || "-"}

Sito web: ${website || "-"}

Cosa scambiare: ${asset}
Quantità: ${qty || "-"}
Valore stimato: ${value || "-"}
Scadenza/tempo di utilizzo: ${deadline || "-"}

Obiettivi: ${goals || "-"}
Canali preferiti: ${channelsText}
`.trim();

    const info = await transporter.sendMail({
      from: `"inCambio" <${MAIL_FROM}>`, // su Register conviene = SMTP_USER
      to: MAIL_TO,
      replyTo: email || MAIL_FROM,
      subject: `Richiesta valutazione – ${company} (${name})`,
      text,
    });

    console.log("[SMTP] Inviata", info.messageId);
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: any) {
    console.error("[VALUTAZIONE] Errore", err);
    return NextResponse.json({ ok: false, message: "Errore interno", error: err?.message }, { status: 500 });
  }
}
