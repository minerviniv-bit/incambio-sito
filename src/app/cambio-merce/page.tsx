// src/app/cambio-merce/page.tsx

export const metadata = {
  title: "Cambio merce per la pubblicità | inCambio",
  description:
    "Scambia prodotti o servizi con spazi pubblicitari. Soluzione di cambio merce per TV, Radio e Digital con KPI misurabili.",
  alternates: { canonical: "https://www.incambio.eu/cambio-merce" },
  openGraph: {
    title: "Cambio merce per la pubblicità | inCambio",
    description:
      "Con il cambio merce trasformi i tuoi prodotti e servizi in budget media. Pianificazione su TV, Radio e Digital con KPI.",
    url: "https://www.incambio.eu/cambio-merce",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <section className="mx-auto max-w-4xl px-6 pt-28 pb-16">
        <h1 className="text-3xl font-bold text-[#e6d39a]">
          Cambio merce per la pubblicità
        </h1>

        <p className="mt-4 text-zinc-300">
          Con il <strong>cambio merce</strong> convertiamo il valore dei tuoi
          prodotti o servizi in un <strong>budget media</strong> da utilizzare
          per pianificare campagne su TV, radio e digitale.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-white">In pratica</h2>
        <ul className="mt-4 list-disc pl-5 text-zinc-300">
          <li>Definizione delle quantità e del valore concordato.</li>
          <li>Pianificazione media su canali coerenti con gli obiettivi.</li>
          <li>Reportistica e misurazione dei risultati.</li>
        </ul>

        <div className="mt-10">
          <a
            href="/pubblicita-cambio-merce"
            className="underline decoration-[#e6d39a]/70"
          >
            Scopri la pubblicità in cambio merce
          </a>
        </div>
      </section>
    </main>
  );
}
