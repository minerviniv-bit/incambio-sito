// src/app/api/valutazione/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer, { type SentMessageInfo } from "nodemailer";

export const runtime = "nodejs"; // assicura runtime Node per nodemailer

// Helpers per leggere .env in modo tipizzato
const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  MAIL_FROM,
  MAIL_TO,
} = process.env;

if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !MAIL_FROM || !MAIL_TO) {
  // In build/exec, se mancano le variabili, è meglio far fallire chiaramente
  // (Oppure potresti fare console.warn e rispondere 500)
  // Qui lancio errore per avere log chiari in Vercel.
  throw new Error("Missing required SMTP/Mailer environment variables.");
}

// Tipi dei campi che ci aspettiamo dal form
interface ValutazionePayload {
  company: string;
  website?: string;
  name: string;
  email: string;
  phone?: string;

  asset: string;
  qty?: string;
  value?: string;
  deadline?: string;

  goals?: string;
  channels: string[];

  // eventuale file allegato
  file?: File | null;
}

/** Raccoglie i campi dal FormData con tipi sicuri */
function parseFormData(fd: FormData): ValutazionePayload {
  const getStr = (k: string): string | undefined => {
    const v = fd.get(k);
    return typeof v === "string" ? v : undefined;
  };

  const channels = fd.getAll("channels").map(String); // → string[]

  const payload: ValutazionePayload = {
    company: getStr("company") ?? "",
    website: getStr("website"),
    name: getStr("name") ?? "",
    email: getStr("email") ?? "",
    phone: getStr("phone"),

    asset: getStr("asset") ?? "",
    qty: getStr("qty"),
    value: getStr("value"),
    deadline: getStr("deadline"),

    goals: getStr("goals"),
    channels,

    file: (fd.get("file") as File | null) ?? null,
  };

  return payload;
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const data = parseFormData(formData);

    // **Validazione minima** (puoi renderla più severa)
    if (!data.company || !data.name || !data.email || !data.asset) {
      return NextResponse.json(
        { ok: false, error: "Dati obbligatori mancanti." },
        { status: 400 }
      );
    }

    // Preparo testo email
    const lines: string[] = [
      "Nuova richiesta di VALUTAZIONE",
      "",
      "— DATI AZIENDA/CONTATTO —",
      `Azienda/Brand: ${data.company}`,
      `Sito web: ${data.website ?? "-"}`,
      `Nome e cognome: ${data.name}`,
      `Email: ${data.email}`,
      `Telefono: ${data.phone ?? "-"}`,
      "",
      "— MERCE/SERVIZIO —",
      `Cosa: ${data.asset}`,
      `Quantità: ${data.qty ?? "-"}`,
      `Valore stimato: ${data.value ?? "-"}`,
      `Scadenza/tempo di utilizzo: ${data.deadline ?? "-"}`,
      "",
      "— OBIETTIVI & MEDIA —",
      `Obiettivi: ${data.goals ?? "-"}`,
      `Canali preferiti: ${data.channels.length ? data.channels.join(", ") : "-"}`,
      "",
    ];

    // Config transporter SMTP
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465, // di solito 465 = SSL
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Allegato (se presente)
    const attachments: { filename: string; content: Buffer }[] = [];
    if (data.file && data.file.size > 0) {
      const arrayBuffer = await data.file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      attachments.push({
        filename: data.file.name || "allegato",
        content: buffer,
      });
    }

    const info: SentMessageInfo = await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      subject: `Valutazione – ${data.company} – ${data.name}`,
      text: lines.join("\n"),
      attachments,
      replyTo: data.email, // utile per rispondere al contatto
    });

    // Risposta OK
    return NextResponse.json({ ok: true, id: info.messageId });
  } catch (err) {
    // Tipizzazione sicura dell'errore
    const message =
      err instanceof Error ? err.message : "Unknown error during email send.";
    console.error("Valutazione API error:", message);

    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
