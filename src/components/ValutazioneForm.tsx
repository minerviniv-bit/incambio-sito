"use client";

import { useState } from "react";

const CHANNELS = [
  "TV",
  "Radio",
  "Affissioni",
  "Stampa",
  "YouTube",
  "Meta (Facebook/Instagram)",
  "TikTok",
  "Spotify",
  "Programmatic/Display",
];

export default function ValutazioneForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setOk(null);

    const form = e.currentTarget;
    const fd = new FormData(form);

    // FormData -> JSON (includo i check multipli "channels")
    const data: Record<string, any> = Object.fromEntries(fd.entries());
    data.channels = fd.getAll("channels"); // array di canali
    // NB: il campo "file" al momento NON viene inviato (se vogliamo allegati serve multipart + backend dedicato)

    try {
      const res = await fetch("/api/valutazione", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setOk(res.ok);
      if (res.ok) form.reset();
    } catch {
      setOk(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur"
    >
      <h2 className="text-xl font-semibold mb-6">Dati del progetto</h2>

      {/* 1) Azienda & contatto */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-zinc-300 mb-2">Ragione sociale / Brand</label>
          <input name="company" required className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-[#e6d39a]/60" placeholder="Es. Cantina Rossi srl"/>
        </div>
        <div>
          <label className="block text-sm text-zinc-300 mb-2">Sito web (opz.)</label>
          <input name="website" type="url" className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-[#e6d39a]/60" placeholder="https://..."/>
        </div>

        <div>
          <label className="block text-sm text-zinc-300 mb-2">Nome e cognome</label>
          <input name="name" required className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-[#e6d39a]/60" placeholder="Es. Mario Rossi"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm text-zinc-300 mb-2">Email</label>
            <input name="email" type="email" required className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-[#e6d39a]/60" placeholder="nome@azienda.it"/>
          </div>
          <div>
            <label className="block text-sm text-zinc-300 mb-2">Telefono</label>
            <input name="phone" className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-[#e6d39a]/60" placeholder="+39 ..."/>
          </div>
        </div>
      </div>

      <hr className="my-8 border-white/10" />

      {/* 2) Merce / valore */}
      <h3 className="text-lg font-medium mb-4">Merce / Servizio</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-zinc-300 mb-2">Cosa vuoi scambiare?</label>
          <textarea name="asset" required rows={4} className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-[#e6d39a]/60" placeholder="Descrivi prodotto/servizio, SKU, linee, limitazioni…"/>
        </div>
        <div className="grid grid-cols-1 gap-5">
          <div>
            <label className="block text-sm text-zinc-300 mb-2">Quantità disponibile</label>
            <input name="qty" className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-[#e6d39a]/60" placeholder="Es. 2.000 bottiglie / 400 finestre"/>
          </div>
          <div>
            <label className="block text-sm text-zinc-300 mb-2">Valore stimato (totale merce)</label>
            <input name="value" className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-[#e6d39a]/60" placeholder="Es. € 50.000"/>
          </div>
          <div>
            <label className="block text-sm text-zinc-300 mb-2">Scadenza / Tempo di utilizzo</label>
            <input name="deadline" className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-[#e6d39a]/60" placeholder="Es. entro 6 mesi"/>
          </div>
        </div>
      </div>

      <hr className="my-8 border-white/10" />

      {/* 3) Obiettivi & media */}
      <h3 className="text-lg font-medium mb-4">Obiettivi & Media</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-zinc-300 mb-2">Obiettivi di comunicazione</label>
          <textarea name="goals" rows={4} className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-[#e6d39a]/60" placeholder="Es. awareness nazionale, lanci regionali, performance…"/>
        </div>
        <div>
          <label className="block text-sm text-zinc-300 mb-2">Canali preferiti</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {CHANNELS.map((c) => (
              <label key={c} className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2">
                <input type="checkbox" name="channels" value={c} className="accent-[#e6d39a]" />
                <span className="text-sm">{c}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Allegato (solo UI, al momento ignorato dall'invio JSON) */}
      <div className="mt-6">
        <label className="block text-sm text-zinc-300 mb-2">Allegato (opzionale)</label>
        <input
          name="file"
          type="file"
          className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 file:mr-4 file:rounded-lg file:border-0 file:bg-white/10 file:px-3 file:py-2 file:text-zinc-200 hover:file:bg-white/20"
        />
        <p className="text-xs text-zinc-400 mt-1">PDF/PNG/JPG – max ~5MB</p>
      </div>

      {/* CTA */}
      <div className="mt-8 flex items-center gap-4">
        <button
          disabled={loading}
          className="rounded-2xl border border-[#e6d39a]/60 bg-[#e6d39a]/10 px-6 py-3 text-sm font-semibold text-[#e6d39a] hover:bg-[#e6d39a]/20 transition disabled:opacity-60"
        >
          {loading ? "Invio in corso…" : "Invia richiesta"}
        </button>
        {ok === true && <span className="text-emerald-400 text-sm">Ricevuto! Ti ricontattiamo a breve.</span>}
        {ok === false && <span className="text-red-400 text-sm">Errore di invio. Riprova.</span>}
      </div>

      {/* fallback contatti */}
      <p className="text-center text-sm text-zinc-400 mt-6">
        Preferisci? Scrivi a{" "}
        <a className="underline decoration-[#e6d39a]/70" href="mailto:info@incambio.eu?subject=Richiesta%20valutazione">
          info@incambio.eu
        </a>{" "}
        o chiama{" "}
        <a className="underline decoration-[#e6d39a]/70" href="tel:+393288410612">
          +39 328 841 0612
        </a>
      </p>
    </form>
  );
}
