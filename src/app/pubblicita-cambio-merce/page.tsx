// src/app/pubblicita-cambio-merce/page.tsx

export const metadata = {
  title: "Pubblicità in cambio merce | inCambio",
  description:
    "Trasformiamo prodotti e servizi in campagne pubblicitarie misurabili: TV, Radio e Digital. Paghi in merce, ottieni visibilità.",
  alternates: { canonical: "https://www.incambio.eu/pubblicita-cambio-merce" },
  openGraph: {
    title: "Pubblicità in cambio merce | inCambio",
    description:
      "Barter advertising: converti stock e servizi in budget media. Pianificazione su TV, Radio e Digital con KPI.",
    url: "https://www.incambio.eu/pubblicita-cambio-merce",
    siteName: "inCambio",
    locale: "it_IT",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <section className="mx-auto max-w-4xl px-6 pt-28 pb-16">
        <h1 className="text-3xl font-bold text-[#e6d39a]">
          Pubblicità in cambio merce
        </h1>

        <p className="mt-4 text-zinc-300">
          Con inCambio trasformi prodotti e servizi in{" "}
          <strong>campagne pubblicitarie</strong> misurabili. È il{" "}
          <strong>barter advertising</strong>: paghi gli spazi media in{" "}
          <strong>cambio merce</strong>, riduci l’esborso di cassa e ottieni
          visibilità su TV, Radio e Digital.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-white">
          Come funziona
        </h2>
        <ul className="mt-4 list-disc pl-5 text-zinc-300">
          <li>Valutazione merce e definizione del budget media equivalente.</li>
          <li>
            Scelta canali:{" "}
            <a
              href="/pubblicita-tv"
              className="underline decoration-[#e6d39a]/70"
            >
              TV
            </a>
            ,{" "}
            <a
              href="/pubblicita-radio"
              className="underline decoration-[#e6d39a]/70"
            >
              Radio
            </a>
            , Digital.
          </li>
          <li>
            Pianificazione e report con KPI (pressione, reach, stime
            conversioni).
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold text-white">
          Perché conviene
        </h2>
        <p className="mt-4 text-zinc-300">
          Smaltisci stock, ottieni <strong>visibilità</strong> e{" "}
          <strong>nuovi clienti</strong> senza pesare sul cash-flow.
        </p>

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
          Correlati:{" "}
          <a
            href="/cambio-merce"
            className="underline decoration-[#e6d39a]/70"
          >
            cambio merce
          </a>{" "}
          •{" "}
          <a
            href="/baratto-pubblicita"
            className="underline decoration-[#e6d39a]/70"
          >
            baratto pubblicitario
          </a>
        </p>
      </section>
    </main>
  );
}
