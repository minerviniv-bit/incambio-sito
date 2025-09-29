"use client";

import { useState } from "react";

const MAX_FILE_BYTES = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "image/png",
  "image/jpeg",
  "image/jpg",
];

export default function ValutazioneForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [msg, setMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setOk(null);
    setMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: se è valorizzato, molto probabilmente è uno spam bot
    const honeypot = (data.get("website2") as string) || "";
    if (honeypot.trim().length > 0) {
      setOk(true); // fai finta che vada tutto bene per i bot
      setMsg("Richiesta inviata.");
      setLoading(false);
      form.reset();
      return;
    }

    // Validazione file lato client
    const file = data.get("file") as File | null;
    if (file && file.size > 0) {
      if (file.size > MAX_FILE_BYTES) {
        setOk(false);
        setMsg("Il file è troppo grande (max 5MB).");
        setLoading(false);
        return;
      }
      if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
        setOk(false);
        setMsg("Formato file non consentito (ammessi: PDF/PNG/JPG).");
        setLoading(false);
        return;
      }
    }

    try {
      const res = await fetch("/api/valutazione", {
        method: "POST",
        body: data,
      });
      setOk(res.ok);
      setMsg(res.ok ? "Ricevuto! Ti ricontattiamo a breve." : "Errore di invio. Riprova.");
      if (res.ok) form.reset();
    } catch (err) {
      setOk(false);
      setMsg("Errore di invio. Controlla la connessione e riprova.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur"
    >
      <h2 className="text-xl font-semibold mb-6">Dati del progetto</h2>

      {/* Honeypot anti-bot (visivamente nascosto ma accessibile) */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website2">Non compilare questo campo</label>
        <input id="website2" name="website2" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Blocco 1: azienda & contatto */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-zinc-300 mb-2" htmlFor="company">
            Ragione sociale / Brand
          </label>
          <input
            id="company"
            name="company"
            required
            autoComplete="organization"
            className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-[#e6d39a]/60"
            placeholder="Es. Cantina Rossi srl"
          />
        </div>
        <div>
          <label className="block text-sm text-zinc-300 mb-2" htmlFor="website">
            Sito web (opzionale)
          </label>
          <input
            id="website"
            name="website"
            type="url"
            autoComplete="url"
            className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-[#e6d39a]/60"
            placeholder="https://..."
          />
        </div>

        <div>
          <label className="block text-sm text-zinc-300 mb-2" htmlFor="name">
            Nome e cognome
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-[#e6d39a]/60"
            placeholder="Es. Mario Rossi"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm text-zinc-300 mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-[#e6d39a]/60"
              placeholder="nome@azienda.it"
            />
          </div>
          <div>
            <label className="block text-sm text-zinc-300 mb-2" htmlFor="phone">
              Telefono
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              pattern="^[0-9+\s().-]{6,}$"
              className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-[#e6d39a]/60"
              placeholder="+39 ..."
            />
          </div>
        </div>
      </div>

      <hr className="my-8 border-white/10" />

      {/* Blocco 2: merce & valore */}
      <h3 className="text-lg font-medium mb-4">Merce / Servizio</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-zinc-300 mb-2" htmlFor="asset">
            Cosa vuoi scambiare?
          </label>
          <textarea
            id="asset"
            name="asset"
            required
            rows={4}
            className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-[#e6d39a]/60"
            placeholder="Descrivi prodotto/servizio, SKU, linee, eventuali limitazioni…"
          />
        </div>
        <div className="grid grid-cols-1 gap-5">
          <div>
            <label className="block text-sm text-zinc-300 mb-2" htmlFor="qty">
              Quantità disponibile
            </label>
            <input
              id="qty"
              name="qty"
              autoComplete="off"
              className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-[#e6d39a]/60"
              placeholder="Es. 2.000 bottiglie / 400 finestre / 3.000 camere"
            />
          </div>
          <div>
            <label className="block text-sm text-zinc-300 mb-2" htmlFor="value">
              Valore stimato (totale merce)
            </label>
            <input
              id="value"
              name="value"
              autoComplete="off"
              className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-[#e6d39a]/60"
              placeholder="Es. € 50.000"
            />
          </div>
          <div>
            <label className="block text-sm text-zinc-300 mb-2" htmlFor="deadline">
              Scadenza / Tempo di utilizzo
            </label>
            <input
              id="deadline"
              name="deadline"
              autoComplete="off"
              className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-[#e6d39a]/60"
              placeholder="Es. entro 6 mesi"
            />
          </div>
        </div>
      </div>

      <hr className="my-8 border-white/10" />

      {/* Blocco 3: obiettivi & canali */}
      <h3 className="text-lg font-medium mb-4">Obiettivi & Media</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-zinc-300 mb-2" htmlFor="goals">
            Obiettivi di comunicazione
          </label>
          <textarea
            id="goals"
            name="goals"
            rows={4}
            className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-[#e6d39a]/60"
            placeholder="Es. awareness nazionale, lanci regionali, performance…"
          />
        </div>

        <fieldset className="rounded-xl">
          <legend className="block text-sm text-zinc-300 mb-2">
            Canali preferiti
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "TV",
              "Radio",
              "Affissioni",
              "Stampa",
              "YouTube",
              "Meta (Facebook/Instagram)",
              "TikTok",
              "Spotify",
              "Programmatic/Display",
            ].map((c) => (
              <label
                key={c}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2"
              >
                <input
                  type="checkbox"
                  name="channels"
                  value={c}
                  className="accent-[#e6d39a]"
                />
                <span className="text-sm">{c}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-zinc-300 mb-2" htmlFor="file">
            Allegato (opzionale)
          </label>
        </div>
        <div>
          <input
            id="file"
            name="file"
            type="file"
            accept=".pdf,.png,.jpg,.jpeg,application/pdf,image/png,image/jpeg"
            className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 file:mr-4 file:rounded-lg file:border-0 file:bg-white/10 file:px-3 file:py-2 file:text-zinc-200 hover:file:bg-white/20"
          />
          <p className="text-xs text-zinc-400 mt-1">PDF/PNG/JPG – max ~5MB</p>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <button
          disabled={loading}
          className="rounded-2xl border border-[#e6d39a]/60 bg-[#e6d39a]/10 px-6 py-3 text-sm font-semibold text-[#e6d39a] hover:bg-[#e6d39a]/20 transition disabled:opacity-60"
        >
          {loading ? "Invio in corso…" : "Invia richiesta"}
        </button>

        {/* area annunci per screen reader */}
        <span
          aria-live="polite"
          className={`text-sm ${
            ok === true
              ? "text-emerald-400"
              : ok === false
              ? "text-red-400"
              : "text-zinc-300"
          }`}
        >
          {msg}
        </span>
      </div>
    </form>
  );
}
