"use client";

import { useState } from "react";

export const metadata = {
  title: "Valutazione | inCambio",
  description: "Chiedi una valutazione: trasformiamo il tuo prodotto in pubblicità.",
};

const channels = [
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

export default function ValutazionePage() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setOk(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/valutazione", {
        method: "POST",
        body: data,
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
    <main className="min-h-screen bg-black text-zinc-100">
      {/* HERO */}
      <section className="relative isolate overflow-hidden pt-28 pb-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#8b5c20_0%,transparent_55%)] opacity-40" />
        <div className="relative mx-auto max-w-5xl px-6">
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide text-[#e6d39a]">
            Chiedi una valutazione
          </h1>
          <p className="mt-4 text-zinc-300 max-w-3xl">
            Raccontaci che merce/servizi vuoi scambiare e gli obiettivi di
            comunicazione. Ti rispondiamo con una proposta di campagna in
            cambio merce, chiara e misurabile.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur"
          >
            <h2 className="text-xl font-semibold mb-6">Dati del progetto</h2>

            {/* Blocco 1: azienda & contatto */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-zinc-300 mb-2">
                  Ragione sociale / Brand
                </label>
                <input
                  name="company"
                  required
                  className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-[#e6d39a]/60"
                  placeholder="Es. Cantina Rossi srl"
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-300 mb-2">
                  Sito web (opzionale)
                </label>
                <input
                  name="website"
                  type="url"
                  className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-[#e6d39a]/60"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-sm text-zinc-300 mb-2">
                  Nome e cognome
                </label>
                <input
                  name="name"
                  required
                  className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-[#e6d39a]/60"
                  placeholder="Es. Mario Rossi"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-zinc-300 mb-2">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-[#e6d39a]/60"
                    placeholder="nome@azienda.it"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-300 mb-2">
                    Telefono
                  </label>
                  <input
                    name="phone"
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
                <label className="block text-sm text-zinc-300 mb-2">
                  Cosa vuoi scambiare?
                </label>
                <textarea
                  name="asset"
                  required
                  rows={4}
                  className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-[#e6d39a]/60"
                  placeholder="Descrivi prodotto/servizio, SKU, linee, eventuali limitazioni…"
                />
              </div>
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <label className="block text-sm text-zinc-300 mb-2">
                    Quantità disponibile
                  </label>
                  <input
                    name="qty"
                    className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-[#e6d39a]/60"
                    placeholder="Es. 2.000 bottiglie / 400 finestre / 3.000 camere"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-300 mb-2">
                    Valore stimato (totale merce)
                  </label>
                  <input
                    name="value"
                    className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-[#e6d39a]/60"
                    placeholder="Es. € 50.000"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-300 mb-2">
                    Scadenza / Tempo di utilizzo
                  </label>
                  <input
                    name="deadline"
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
                <label className="block text-sm text-zinc-300 mb-2">
                  Obiettivi di comunicazione
                </label>
                <textarea
                  name="goals"
                  rows={4}
                  className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-[#e6d39a]/60"
                  placeholder="Es. awareness nazionale, lanci regionali, performance…"
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-300 mb-2">
                  Canali preferiti
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {channels.map((c) => (
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
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-zinc-300 mb-2">
                  Allegato (opzionale)
                </label>
                <input
                  name="file"
                  type="file"
                  className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 file:mr-4 file:rounded-lg file:border-0 file:bg-white/10 file:px-3 file:py-2 file:text-zinc-200 hover:file:bg-white/20"
                />
                <p className="text-xs text-zinc-400 mt-1">
                  PDF/PNG/JPG – max ~5MB
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex items-center gap-4">
              <button
                disabled={loading}
                className="rounded-2xl border border-[#e6d39a]/60 bg-[#e6d39a]/10 px-6 py-3 text-sm font-semibold text-[#e6d39a] hover:bg-[#e6d39a]/20 transition disabled:opacity-60"
              >
                {loading ? "Invio in corso…" : "Invia richiesta"}
              </button>
              {ok === true && (
                <span className="text-emerald-400 text-sm">
                  Ricevuto! Ti ricontattiamo a breve.
                </span>
              )}
              {ok === false && (
                <span className="text-red-400 text-sm">
                  Errore di invio. Riprova.
                </span>
              )}
            </div>
          </form>

          {/* Contatti alternativi */}
          <div className="text-center text-sm text-zinc-400 mt-6">
            Preferisci? Scrivi a{" "}
            <a
              className="underline decoration-[#e6d39a]/70"
              href="mailto:info@incambio.it?subject=Richiesta%20valutazione"
            >
              info@incambio.it
            </a>{" "}
            o chiama{" "}
            <a className="underline decoration-[#e6d39a]/70" href="tel:+393288410612">
              +39 328 841 0612
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
