// src/app/pubblicita-radio/page.tsx

export const metadata = {
  title: "Pubblicità Radio (anche in cambio merce) | inCambio",
  description:
    "Campagne radio nazionali e locali: pianificazione, creatività, traffico e KPI. Possibilità di pagamento in cambio merce.",
  alternates: { canonical: "https://www.incambio.eu/pubblicita-radio" },
  openGraph: {
    title: "Pubblicità Radio (anche in cambio merce) | inCambio",
    description:
      "Analisi target e formati (spot, sponsorizzazioni), pianificazione palinsesto e report KPI. Soluzioni anche in cambio merce.",
    url: "https://www.incambio.eu/pubblicita-radio",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <section className="mx-auto max-w-4xl px-6 pt-28 pb-16">
        <h1 className="text-3xl font-bold text-[#e6d39a]">Pubblicità Radio</h1>

        <p className="mt-4 text-zinc-300">
          Progettiamo e gestiamo campagne su <strong>radio nazionali e locali</strong>.
          Con il <strong>cambio merce</strong> puoi pagare gli spazi con i tuoi
          prodotti o servizi, mantenendo leggero il cash flow.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-white">Processo</h2>
        <ul className="mt-4 list-disc pl-5 text-zinc-300">
          <li>Analisi target e scelta formati (spot, citazioni, sponsorizzazioni).</li>
          <li>Pianificazione palinsesto per copertura e frequenza ottimali.</li>
          <li>Produzione/adattamento copy e traffico materiali.</li>
          <li>Report KPI e ottimizzazioni in corso d’opera.</li>
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
            pubblicità in TV
          </a>{" "}
          •{" "}
          <a
            href="/pubblicita-cambio-merce"
            className="underline decoration-[#e6d39a]/70"
          >
            pubblicità in cambio merce
          </a>
        </p>
      </section>
    </main>
  );
}
