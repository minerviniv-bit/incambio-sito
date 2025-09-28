// src/app/baratto-pubblicita/page.tsx

export const metadata = {
  title: "Baratto pubblicitario (barter) | inCambio",
  description:
    "Baratto applicato alla pubblicità: paghi spot e campagne con i tuoi prodotti o servizi. Una soluzione barter con KPI chiari e misurabili.",
  alternates: { canonical: "https://www.incambio.eu/baratto-pubblicita" },
  openGraph: {
    title: "Baratto pubblicitario (barter) | inCambio",
    description:
      "Con il baratto pubblicitario trasformi stock e servizi in visibilità: TV, Radio e Digital senza esborso di cassa.",
    url: "https://www.incambio.eu/baratto-pubblicita",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <section className="mx-auto max-w-4xl px-6 pt-28 pb-16">
        <h1 className="text-3xl font-bold text-[#e6d39a]">
          Baratto pubblicitario
        </h1>

        <p className="mt-4 text-zinc-300">
          Il <strong>baratto pubblicitario</strong> (barter) ti permette di
          pagare la pubblicità con merce o servizi. In questo modo puoi ottenere
          campagne <strong>TV, radio e digital</strong> senza esborso immediato
          di cassa.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-white">Vantaggi</h2>
        <p className="mt-4 text-zinc-300">
          Con il baratto pubblicitario ottimizzi gli stock, aumenti la tua
          visibilità e mantieni il controllo sui KPI. La soluzione si integra
          con la tua logistica e la tua amministrazione senza complicazioni.
        </p>

        <p className="mt-10 text-sm text-zinc-400">
          Correlati:{" "}
          <a
            href="/cambio-merce"
            className="underline decoration-[#e6d39a]/70"
          >
            cambio merce
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
