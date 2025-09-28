// src/app/pubblicita-roma/page.tsx

export const metadata = {
  title: "Pubblicità a Roma (TV, Radio, Digital) | inCambio",
  description:
    "Campagne pubblicitarie a Roma: pianificazione su media locali e nazionali, anche in cambio merce. Strategia, KPI e ottimizzazione.",
  alternates: { canonical: "https://www.incambio.eu/pubblicita-roma" },
  openGraph: {
    title: "Pubblicità a Roma (TV, Radio, Digital) | inCambio",
    description:
      "Strategia locale e nazionale, acquisto spazi, creatività e report KPI. Possibilità di cambio merce per aziende con stock o servizi.",
    url: "https://www.incambio.eu/pubblicita-roma",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <section className="mx-auto max-w-4xl px-6 pt-28 pb-16">
        <h1 className="text-3xl font-bold text-[#e6d39a]">Pubblicità a Roma</h1>

        <p className="mt-4 text-zinc-300">
          Siamo a Roma e pianifichiamo <strong>TV, Radio e Digital</strong> su
          media locali e nazionali. Offriamo anche soluzioni di{" "}
          <strong>cambio merce</strong> per aziende con stock o servizi da
          valorizzare.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-white">
          Cosa facciamo
        </h2>
        <ul className="mt-4 list-disc pl-5 text-zinc-300">
          <li>Strategia locale (Roma e provincia) e nazionale.</li>
          <li>Acquisto spazi e coordinamento creativo.</li>
          <li>Report KPI, ottimizzazioni e stime ROI.</li>
        </ul>

        <div className="mt-10 flex gap-4">
          <a
            href="/valutazione"
            className="rounded-2xl border border-[#e6d39a]/60 bg-[#e6d39a]/10 px-6 py-3 text-[#e6d39a] hover:bg-[#e6d39a]/20"
          >
            Richiedi una valutazione
          </a>
          <a
            href="/contatti"
            className="rounded-2xl bg-white/5 px-6 py-3 hover:bg-white/10"
          >
            Contattaci
          </a>
        </div>

        <p className="mt-10 text-sm text-zinc-400">
          Vedi anche:{" "}
          <a
            href="/pubblicita-tv"
            className="underline decoration-[#e6d39a]/70"
          >
            pubblicità TV
          </a>{" "}
          •{" "}
          <a
            href="/pubblicita-radio"
            className="underline decoration-[#e6d39a]/70"
          >
            pubblicità Radio
          </a>
        </p>
      </section>
    </main>
  );
}
