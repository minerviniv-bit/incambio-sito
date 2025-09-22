// src/api/valutazione/route.ts
import { NextResponse } from "next/server";

// (opzionale) se vuoi usare nodemailer
// npm i nodemailer
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Honeypot
    if (body.website) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // Validazione minima server-side
    const required = ["company", "name", "email", "goods"];
    for (const k of required) {
      if (!body?.[k] || String(body[k]).trim() === "") {
        return NextResponse.json(
          { message: `Campo mancante: ${k}` },
          { status: 400 }
        );
      }
    }

    // Se vuoi inviare email, configuralo in .env
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      MAIL_TO = "info@incambio.it",
      MAIL_FROM = "no-reply@incambio.it",
    } = process.env as Record<string, string>;

    if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: Number(SMTP_PORT) === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      });

      const text = `
Nuova richiesta di valutazione:

Azienda: ${body.company}
Referente: ${body.name}
Email: ${body.email}
Telefono: ${body.phone || "-"}

Merce/Servizio: ${body.goods}
Valore: ${body.value || "-"}
Obiettivo media: ${body.goal || "-"}
Target: ${body.target || "-"}
Tempistiche: ${body.timing || "-"}
Note: ${body.notes || "-"}
`;

      await transporter.sendMail({
        from: `"inCambio" <${MAIL_FROM}>`,
        to: MAIL_TO,
        subject: `Valutazione da ${body.company} – ${body.name}`,
        text,
      });
    } else {
      // Fallback: nessun SMTP configurato → log in server
      console.log("[VALUTAZIONE] Richiesta:", body);
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Errore interno durante l'invio." },
      { status: 500 }
    );
  }
}
