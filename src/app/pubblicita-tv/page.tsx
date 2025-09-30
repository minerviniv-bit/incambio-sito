// src/app/pubblicita-tv/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Pubblicità TV: spot televisivi locali e nazionali | inCambio",
  description:
    "Pianificazione pubblicità TV su emittenti locali e nazionali: strategia, palinsesti, GRP, creatività e produzione spot. Possibilità di cambio merce.",
  keywords: [
    "pubblicità TV",
    "spot televisivi",
    "pubblicità televisiva",
    "emittenti locali",
    "emittenti nazionali",
    "GRP TV",
    "prime time",
    "produzione spot TV",
    "pianificazione TV",
    "cambio merce TV",
  ],
  alternates: { canonical: "https://www.incambio.eu/pubblicita-tv" },
  openGraph: {
    title: "Pubblicità TV: spot televisivi locali e nazionali | inCambio",
    description:
      "Pianifichiamo pubblicità televisiva efficace: selezione emittenti e palinsesti, creatività, KPI e ottimizzazione. Anche in cambio merce.",
    url: "https://www.incambio.eu/pubblicita-tv",
    siteName: "inCambio",
    type: "article",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pubblicità TV: spot televisivi locali e nazionali | inCambio",
    description:
      "Strategia TV, palinsesti, creatività e produzione spot. Pianificazione su emittenti locali e nazionali con KPI e ottimizzazione.",
  },
};

export default function Page() {
  // FAQ structured data
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quanto costa uno spot in TV?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Dipende da emittente, durata, fascia oraria (prime time vs. daytime), formati e frequenza. Sulle TV locali si può partire da poche centinaia di euro a flight; sulle nazionali i costi sono più elevati. Con il cambio merce puoi compensare parte dell’investimento con i tuoi prodotti/servizi.",
        },
      },
      {
        "@type": "Question",
        name: "Meglio TV locale o nazionale?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Se l’obiettivo è la copertura territoriale e la prossimità, la TV locale è ideale. Per awareness ampia e target specifici a livello country, valutiamo palinsesti nazionali. In molti casi funziona un mix calibrato su GRP, copertura e frequenza.",
        },
      },
      {
        "@type": "Question",
        name: "Che durata deve avere uno spot TV?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "I formati più diffusi sono 15” e 30”. La scelta dipende dal messaggio, dalla pressione media e dal budget. Possiamo produrre lo spot e adattarlo ai diversi formati richiesti dalle emittenti.",
        },
      },
      {
        "@type": "Question",
        name: "Posso pagare la pubblicità TV in cambio merce?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Sì. inCambio valorizza stock o servizi trasformandoli in pianificazioni TV: ideale per aziende che vogliono investire senza immobilizzare cassa.",
        },
      },
    ],
  };

  // Breadcrumb structured data
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.incambio.eu/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pubblicità TV",
        item: "https://www.incambio.eu/pubblicita-tv",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black text-zinc-100">
      {/* JSON-LD */}
      <Script
        id="faq-tv-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id="breadcrumb-tv-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="mx-auto max-w-4xl px-6 pt-28 pb-16">
        <h1 className="text-3xl font-bold text-[#e6d39a]">Pubblicità TV</h1>

        <p className="mt-4 text-zinc-300">
          Pianifichiamo <strong>pubblicità TV</strong> su emittenti{" "}
          <strong>locali e nazionali</strong>, selezionando palinsesti, fasce e
          programmi in linea con il tuo target. Gestiamo <strong>GRP</strong>,
          copertura e frequenza per dare efficienza allo spend e curiamo{" "}
          <strong>creatività e produzione spot</strong>, con report KPI e
          ottimizzazioni continue. Possibilità di <strong>cambio merce</strong>.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-white">
          Cosa facciamo
        </h2>
        <ul className="mt-4 list-disc pl-5 text-zinc-300">
          <li>Analisi obiettivi e target, definizione GRP e KPI.</li>
          <li>
            Pianificazione palinsesti su <strong>emittenti locali</strong> e{" "}
            <strong>nazionali</strong>.
          </li>
          <li>Creatività, storyboard e produzione spot TV (15”/30”).</li>
          <li>Acquisto spazi, flighting, rotazioni e posizionamento negli spot break.</li>
          <li>Reportistica e ottimizzazione di copertura/frequenza.</li>
          <li>Opzione <strong>baratto pubblicitario</strong> (cambio merce).</li>
        </ul>

        <div className="mt-8 flex flex-wrap gap-4">
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

        {/* --- TESTO SEO ESTESO --- */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-semibold">
            Spot televisivi: locale vs nazionale
          </h2>
          <p className="text-zinc-300">
            La <strong>pubblicità televisiva</strong> resta un mezzo capace di
            generare forte <strong>awareness</strong> e di sostenere le
            performance digitali. Con le <strong>TV locali</strong> ottieni
            prossimità e frequenza sul territorio; con le{" "}
            <strong>TV nazionali</strong> amplifichi copertura e prestigio del
            brand. Spesso il mix è la soluzione migliore: calibrato su budget e
            obiettivi, ottimizza <strong>GRP</strong>, reach e ROI.
          </p>

          <h3 className="text-xl font-semibold">Produzione spot TV</h3>
          <p className="text-zinc-300">
            Realizziamo lo spot in <strong>15”</strong> o <strong>30”</strong> con
            adattamenti per le emittenti. Dalla scrittura del{" "}
            <em>copy</em> alla post-produzione, curiamo un messaggio chiaro e
            memorabile, rispettando le specifiche tecniche e i formati richiesti.
          </p>

          <h3 className="text-xl font-semibold">KPI e ottimizzazione</h3>
          <p className="text-zinc-300">
            Tracciamo performance della campagna TV e il suo impatto su ricerche
            di brand e lead. La combinazione tra TV e canali digitali (search e
            social) aumenta la conversione: per questo proponiamo sempre un
            coordinamento media integrato.
          </p>

          <h3 className="text-xl font-semibold">Cambio merce TV</h3>
          <p className="text-zinc-300">
            Con il <strong>cambio merce</strong> trasformiamo stock o servizi in
            visibilità televisiva, ottimizzando l’impiego di risorse. Valutiamo il
            tuo inventario e lo convertiamo in pianificazioni su TV locali o
            nazionali, mantenendo qualità ed efficacia.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/valutazione"
              className="rounded-2xl border border-[#e6d39a]/60 bg-[#e6d39a]/10 px-6 py-3 text-[#e6d39a] hover:bg-[#e6d39a]/20"
            >
              Richiedi una valutazione gratuita
            </a>
            <a
              href="/pubblicita-roma"
              className="underline decoration-[#e6d39a]/70 underline-offset-4"
            >
              Pubblicità a Roma
            </a>
            <span className="text-zinc-500">•</span>
            <a
              href="/pubblicita-radio"
              className="underline decoration-[#e6d39a]/70 underline-offset-4"
            >
              Pubblicità Radio
            </a>
          </div>
        </section>

        {/* Link contestuali finali */}
        <p className="mt-10 text-sm text-zinc-400">
          Vedi anche:{" "}
          <a href="/pubblicita-roma" className="underline decoration-[#e6d39a]/70">
            pubblicità a Roma
          </a>{" "}
          •{" "}
          <a href="/pubblicita-radio" className="underline decoration-[#e6d39a]/70">
            pubblicità Radio
          </a>{" "}
          •{" "}
          <a href="/valutazione" className="underline decoration-[#e6d39a]/70">
            valutazione campagna
          </a>
        </p>
      </section>
    </main>
  );
}
