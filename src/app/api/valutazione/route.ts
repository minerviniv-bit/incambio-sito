import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // Campi principali
    const company = formData.get("company") as string | null;
    const name = formData.get("name") as string | null;
    const email = formData.get("email") as string | null;
    const phone = formData.get("phone") as string | null;
    const website = formData.get("website") as string | null;
    const asset = formData.get("asset") as string | null;
    const qty = formData.get("qty") as string | null;
    const value = formData.get("value") as string | null;
    const deadline = formData.get("deadline") as string | null;
    const goals = formData.get("goals") as string | null;

    // 🔑 Checkbox multipli → array
    const channels = formData.getAll("channels") as string[];

    // 🔑 File allegato
    const file = formData.get("file") as File | null;
    let savedFilePath: string | null = null;

    if (file && file.size > 0) {
      if (file.size > 5 * 1024 * 1024) {
        return NextResponse.json(
          { ok: false, message: "File troppo grande (max 5MB)" },
          { status: 400 }
        );
      }

      if (
        !["application/pdf", "image/png", "image/jpeg"].includes(file.type)
      ) {
        return NextResponse.json(
          { ok: false, message: "Formato file non consentito" },
          { status: 400 }
        );
      }

      // Salvataggio locale (solo se serve — altrimenti puoi uploadare su S3 o simili)
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      savedFilePath = `./uploads/${Date.now()}-${file.name}`;
      await fs.promises.writeFile(savedFilePath, buffer);
    }

    // ✅ Controllo campi obbligatori
    if (!company || !name || !email || !asset) {
      return NextResponse.json(
        { ok: false, message: "Campi obbligatori mancanti" },
        { status: 400 }
      );
    }

    // Config SMTP
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      MAIL_TO = "info@incambio.eu",
      MAIL_FROM = SMTP_USER || "no-reply@incambio.eu",
    } = process.env as Record<string, string>;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      console.warn("[VALUTAZIONE] SMTP non configurato. Log dei dati:", {
        company,
        name,
        email,
        phone,
        website,
        asset,
        qty,
        value,
        deadline,
        goals,
        channels,
        file: savedFilePath,
      });
      return NextResponse.json({
        ok: true,
        message: "Richiesta acquisita ma SMTP non configurato.",
      });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const testo = `
Nuova richiesta di valutazione:

Azienda: ${company}
Nome: ${name}
Email: ${email}
Telefono: ${phone || "-"}
Sito web: ${website || "-"}

Merce: ${asset}
Quantità: ${qty || "-"}
Valore stimato: ${value || "-"}
Scadenza: ${deadline || "-"}

Obiettivi: ${goals || "-"}
Canali preferiti: ${channels.length > 0 ? channels.join(", ") : "-"}

File allegato: ${savedFilePath || "Nessuno"}
    `.trim();

    await transporter.sendMail({
      from: `"InCambio" <${MAIL_FROM}>`,
      to: MAIL_TO,
      replyTo: email || MAIL_FROM,
      subject: `Richiesta valutazione – ${company} (${name})`,
      text: testo,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[VALUTAZIONE] Errore generale:", err);
    return NextResponse.json(
      { ok: false, message: "Errore interno durante l'invio." },
      { status: 500 }
    );
  }
}
