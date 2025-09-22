"use client";

import { useEffect, useRef, useState } from "react";

/* ----------------------------- Opzioni media ----------------------------- */
type MediaOption = { value: string; label: string };
const MEDIA_OPTIONS: MediaOption[] = [
  { value: "tv", label: "TV" },
  { value: "radio", label: "Radio" },
  { value: "stampa", label: "Stampa" },
  { value: "youtube", label: "YouTube" },
  { value: "spotify", label: "Podcast/Spotify" },
  { value: "social", label: "Social / FB - IG - TikTok" },
  { value: "ooh", label: "Affissioni / OOH" },
];

/* -------------------------- Dropdown nero custom ------------------------- */
function MediaSelect({
  value,
  onChange,
  options,
  placeholder = "— Seleziona —",
  name = "media",
}: {
  value: string | null;
  onChange: (val: string) => void;
  options: MediaOption[];
  placeholder?: string;
  name?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const selected = options.find((o) => o.value === value) || null;

  return (
    <div className="relative" ref={ref}>
      {/* hidden input per l'invio del valore nel form */}
      <input type="hidden" name={name} value={value ?? ""} />

      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className="w-full rounded-lg bg-zinc-900 border border-[#e6d39a33] px-4 py-3 text-left outline-none focus:border-[#e6d39a]/70 transition"
      >
        <span className={selected ? "text-zinc-100" : "text-zinc-400"}>
          {selected ? selected.label : placeholder}
        </span>
        <span className="float-right text-zinc-400">▾</span>
      </button>

      {open && (
        <div className="absolute left-0 right-0 z-20 mt-2 max-h-64 overflow-auto rounded-md border border-zinc-800 bg-zinc-900 shadow-xl">
          {options.map((opt) => {
            const active = opt.value === value;
            return (
              <button
                type="button"
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 transition ${
                  active
                    ? "bg-zinc-800 text-white"
                    : "text-white/90 hover:bg-zinc-800"
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ------------------------------- Pagina form ------------------------------ */
export default function ValutazionePage() {
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  // stato per il dropdown custom
  const [media, setMedia] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setOk(null);
    setErr(null);
    setSending(true);

    const fd = new FormData(e.currentTarget);
    const body = {
      name: fd.get("name")?.toString().trim() ?? "",
      email: fd.get("email")?.toString().trim() ?? "",
      phone: fd.get("phone")?.toString().trim() ?? "",
      company: fd.get("company")?.toString().trim() ?? "",
      website: fd.get("website")?.toString().trim() ?? "",
      item: fd.get("item")?.toString().trim() ?? "",
      value: fd.get("value")?.toString().trim() ?? "",
      quantity: fd.get("quantity")?.toString().trim() ?? "",
      media: fd.get("media")?.toString().trim() ?? "",
      area: fd.get("area")?.toString().trim() ?? "",
      period: fd.get("period")?.toString().trim() ?? "",
      message: fd.get("message")?.toString().trim() ?? "",
      privacy: !!fd.get("privacy"),
    };

    try {
      // Qui potrai inviare a /api/valutazione quando vorrai:
      // const res = await fetch("/api/valutazione", { method: "POST", body: JSON.stringify(body) });

      await new Promise((r) => setTimeout(r, 700)); // finto invio
      setOk("Richiesta inviata con successo. Ti contatteremo al più presto!");
      (e.target as HTMLFormElement).reset();
      setMedia(null);
    } catch (e) {
      setErr("Si è verificato un errore. Riprova tra poco.");
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-zinc-100 pt-24 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="font-serif text-4xl text-[#e6d39a] mb-10">
          Richiedi una valutazione
        </h1>

        <form onSubmit={onSubmit} className="space-y-8">
          {/* SEZIONE 1: contatti */}
          <div>
            <h2 className="text-[#e6d39a] font-semibold mb-4">
              1) Dati di contatto
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm mb-2">Nome e Cognome</label>
                <input
                  name="name"
                  required
                  placeholder="Mario Rossi"
                  className="w-full rounded-lg bg-zinc-900 border border-[#e6d39a33] px-4 py-3 outline-none focus:border-[#e6d39a]/70 transition"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="nome@email.com"
                  className="w-full rounded-lg bg-zinc-900 border border-[#e6d39a33] px-4 py-3 outline-none focus:border-[#e6d39a]/70 transition"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Telefono</label>
                <input
                  name="phone"
                  placeholder="+39 ..."
                  className="w-full rounded-lg bg-zinc-900 border border-[#e6d39a33] px-4 py-3 outline-none focus:border-[#e6d39a]/70 transition"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Azienda</label>
                <input
                  name="company"
                  placeholder="Nome azienda"
                  className="w-full rounded-lg bg-zinc-900 border border-[#e6d39a33] px-4 py-3 outline-none focus:border-[#e6d39a]/70 transition"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm mb-2">Sito web</label>
                <input
                  name="website"
                  placeholder="https://..."
                  className="w-full rounded-lg bg-zinc-900 border border-[#e6d39a33] px-4 py-3 outline-none focus:border-[#e6d39a]/70 transition"
                />
              </div>
            </div>
          </div>

          {/* SEZIONE 2: merce da scambiare */}
          <div>
            <h2 className="text-[#e6d39a] font-semibold mb-4">
              2) Merce/servizi da scambiare
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <label className="block text-sm mb-2">Bene da scambiare</label>
                <input
                  name="item"
                  required
                  placeholder="Es. 2.000 bottiglie di vino, 400 finestre, 3.000 camere d'hotel…"
                  className="w-full rounded-lg bg-zinc-900 border border-[#e6d39a33] px-4 py-3 outline-none focus:border-[#e6d39a]/70 transition"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Valore indicativo (€)</label>
                <input
                  name="value"
                  type="number"
                  min="0"
                  placeholder="Es. 25.000"
                  className="w-full rounded-lg bg-zinc-900 border border-[#e6d39a33] px-4 py-3 outline-none focus:border-[#e6d39a]/70 transition"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Quantità</label>
                <input
                  name="quantity"
                  placeholder="Es. 2.000 unità / 3.000 notti / 400 pezzi"
                  className="w-full rounded-lg bg-zinc-900 border border-[#e6d39a33] px-4 py-3 outline-none focus:border-[#e6d39a]/70 transition"
                />
              </div>
            </div>
          </div>

          {/* SEZIONE 3: obiettivi media & dettagli */}
          <div>
            <h2 className="text-[#e6d39a] font-semibold mb-4">
              3) Obiettivi media
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm mb-2">Obiettivo media</label>
                <MediaSelect
                  value={media}
                  onChange={setMedia}
                  options={MEDIA_OPTIONS}
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Area geografica</label>
                <input
                  name="area"
                  placeholder="Italia / Regionale / Specifica città"
                  className="w-full rounded-lg bg-zinc-900 border border-[#e6d39a33] px-4 py-3 outline-none focus:border-[#e6d39a]/70 transition"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm mb-2">Periodo indicativo</label>
                <input
                  name="period"
                  placeholder="Es. Q2 2026 / Set-Dic 2025"
                  className="w-full rounded-lg bg-zinc-900 border border-[#e6d39a33] px-4 py-3 outline-none focus:border-[#e6d39a]/70 transition"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm mb-2">Messaggio</label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Scrivi qui i dettagli utili (obiettivi, target, vincoli logistici, tempistiche, ecc.)…"
                  className="w-full rounded-lg bg-zinc-900 border border-[#e6d39a33] px-4 py-3 outline-none focus:border-[#e6d39a]/70 transition"
                />
              </div>

              <label className="md:col-span-2 flex items-start gap-3 text-sm text-zinc-300">
                <input
                  type="checkbox"
                  name="privacy"
                  className="mt-1 h-4 w-4 rounded border-zinc-700 bg-zinc-900 text-[#e6d39a] focus:ring-0"
                  required
                />
                Dichiaro di aver letto l’informativa privacy e acconsento al
                trattamento dei dati per essere ricontattato.
              </label>
            </div>
          </div>

          {/* Alert */}
          {ok && (
            <p className="text-emerald-400 bg-emerald-400/10 border border-emerald-400/30 rounded-lg px-4 py-3">
              {ok}
            </p>
          )}
          {err && (
            <p className="text-red-400 bg-red-400/10 border border-red-400/30 rounded-lg px-4 py-3">
              {err}
            </p>
          )}

          {/* Submit */}
          <button
            disabled={sending}
            className="w-full rounded-xl border border-[#e6d39a66] bg-[#e6d39a14] px-6 py-4 text-[#e6d39a] font-semibold hover:bg-[#e6d39a22] transition disabled:opacity-60"
          >
            {sending ? "Invio in corso…" : "Invia richiesta"}
          </button>
        </form>
      </div>
    </main>
  );
}
