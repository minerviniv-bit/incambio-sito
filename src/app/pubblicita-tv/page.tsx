// src/app/pubblicita-tv/page.tsx

export const metadata = {
  title: "Pubblicità in TV (anche in cambio merce) | inCambio",
  description:
    "Pianificazione spot TV nazionali e locali, creatività e KPI. Possibilità di pagamento in cambio merce.",
  alternates: { canonical: "https://www.incambio.eu/pubblicita-tv" },
  openGraph: {
    title: "Pubblicità in TV (anche in cambio merce) | inCambio",
    description:
      "Selezione emittenti, produzione spot, traffico e report KPI: GRP, reach e frequenza. Soluzioni anche in cambio merce.",
    url: "https://www.incambio.eu/pubblicita-tv",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <section className="mx-auto max-w-4xl px-6 pt-28 pb-16">
        <h1 className="text-3xl font-bold text-[#e6d39a]">Pubblicità in TV</h1>

        <p className="mt-4 text-zinc-300">
          Acquistiamo spazi su emittenti nazionali e locali. Con il{" "}
          <strong>cambio merce</strong> puoi finanziare la campagna con i tuoi
          prodotti o servizi, senza esborso diretto di cassa.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-white">
          Come lavoriamo
        </h2>
        <ul className="mt-4 list-disc pl-5 text-zinc-300">
          <li>Strategia, selezione emittenti e fasce orarie.</li>
          <li>Produzione o adattamento spot, traffico e messa in onda.</li>
          <li>Report KPI: GRP, reach, frequenza e stima dell’impatto.</li>
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
            href="/pubblicita-radio"
            className="underline decoration-[#e6d39a]/70"
          >
            pubblicità radio
          </a>
        </p>
      </section>
    </main>
  );
}
