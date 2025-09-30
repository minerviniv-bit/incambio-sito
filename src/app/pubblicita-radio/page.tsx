// src/app/pubblicita-radio/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Pubblicità Radio: spot, sponsorizzazioni e jingle | inCambio",
  description:
    "Pianificazione pubblicità radio su emittenti locali e nazionali: spot 15”/30”, sponsorizzazioni, jingle. Strategia, frequenza/GRP e report KPI. Anche in cambio merce.",
  keywords: [
    "pubblicità radio",
    "spot radio",
    "sponsorizzazioni radio",
    "jingle pubblicitari",
    "radio locali",
    "radio nazionali",
    "GRP radio",
    "OTS radio",
    "pianificazione radio",
    "cambio merce pubblicità",
  ],
  alternates: { canonical: "https://www.incambio.eu/pubblicita-radio" },
  openGraph: {
    title: "Pubblicità Radio: spot, sponsorizzazioni e jingle | inCambio",
    description:
      "Strategia radio su emittenti locali e nazionali: spot 15”/30”, sponsorizzazioni e jingle. Pianificazione, KPI e ottimizzazione. Anche in cambio merce.",
    url: "https://www.incambio.eu/pubblicita-radio",
    siteName: "inCambio",
    type: "article",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pubblicità Radio: spot, sponsorizzazioni e jingle | inCambio",
    description:
      "Pianificazione radio, creatività, frequenza/GRP e report KPI. Campagne su radio locali e nazionali. Opzione cambio merce.",
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
        name: "Quanto costa la pubblicità in radio?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "I costi dipendono da emittente, orari, formato (15”/30”), periodo e frequenza. Le radio locali hanno accessi più economici, le nazionali richiedono budget maggiori. Con il cambio merce puoi compensare parte dell’investimento con prodotti/servizi.",
        },
      },
      {
        "@type": "Question",
        name: "Meglio radio locale o nazionale?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Se il target è territoriale, la radio locale offre prossimità e frequenza. Le nazionali garantiscono copertura ampia e posizionamento premium. Spesso funziona un mix calibrato su GRP/OTS e obiettivi.",
        },
      },
      {
        "@type": "Question",
        name: "Qual è la durata migliore per uno spot radio?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "I formati standard sono 15” e 30”. Il 15” punta al ricordo rapido con alta frequenza; il 30” consente storytelling e call to action più chiara. Scegliamo in base a messaggio, budget e pressione media.",
        },
      },
      {
        "@type": "Question",
        name: "Posso pagare la radio in cambio merce?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Sì. inCambio valorizza stock o servizi convertendoli in pianificazioni radio, ideale per investire in visibilità senza immobilizzare cassa.",
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
        name: "Pubblicità Radio",
        item: "https://www.incambio.eu/pubblicita-radio",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black text-zinc-100">
      {/* JSON-LD */}
      <Script
        id="faq-radio-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id="breadcrumb-radio-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="mx-auto max-w-4xl px-6 pt-28 pb-16">
        <h1 className="text-3xl font-bold text-[#e6d39a]">Pubblicità Radio</h1>

        <p className="mt-4 text-zinc-300">
          Pianifichiamo <strong>pubblicità radio</strong> su emittenti{" "}
          <strong>locali e nazionali</strong> con strategie orientate a{" "}
          <strong>frequenza</strong> e <strong>GRP/OTS</strong>. Gestiamo
          <strong> spot 15”/30”</strong>, <strong>sponsorizzazioni</strong>,
          <strong>citazioni in conduzione</strong> e <strong>jingle</strong>,
          coordinando creatività e pianificazione per massimizzare ricordo e
          call to action. Report KPI e ottimizzazioni continue. Opzione{" "}
          <strong>cambio merce</strong>.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-white">Cosa facciamo</h2>
        <ul className="mt-4 list-disc pl-5 text-zinc-300">
          <li>Analisi obiettivi, target e copertura/OTS richiesti.</li>
          <li>Pianificazione su <strong>radio locali</strong> e <strong>nazionali</strong>.</li>
          <li>Creatività spot 15”/30”, scripting, voiceover e sound design.</li>
          <li>Sponsorizzazioni, citazioni, promo e iniziative on-air.</li>
          <li>Report KPI, ottimizzazione frequenza e fasce orarie.</li>
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
          <h2 className="text-2xl font-semibold">Perché la radio funziona</h2>
          <p className="text-zinc-300">
            La <strong>pubblicità radio</strong> garantisce frequenza e prossimità:
            accompagna gli spostamenti, è contestuale e favorisce il ricordo del
            messaggio. Con una pianificazione corretta di <strong>fasce</strong> e{" "}
            <strong>rotazioni</strong>, lo spot raggiunge più volte lo stesso utente
            nelle ore di punta, sostenendo le performance digitali (ricerche brand,
            visite al sito, chiamate).
          </p>

          <h3 className="text-xl font-semibold">Formati e creatività</h3>
          <p className="text-zinc-300">
            Lavoriamo su <strong>spot 15”/30”</strong>, <strong>sponsorizzazioni</strong>,
            <strong>citazioni in conduzione</strong>, <strong>promo</strong> e{" "}
            <strong>concorsi</strong>. Scriviamo il copy, selezioniamo le voci e
            curiamo il sound design per uno spot memorabile con call to action chiara
            (telefono, indirizzo web, QR o keyword).
          </p>

          <h3 className="text-xl font-semibold">Locale vs nazionale</h3>
          <p className="text-zinc-300">
            Con le <strong>radio locali</strong> ottieni copertura territoriale e
            frequenza a budget sostenibili; le <strong>radio nazionali</strong> offrono
            reach e posizionamento premium. Spesso proponiamo un <em>mix</em>
            personalizzato, calibrato su <strong>GRP/OTS</strong> e obiettivi.
          </p>

          <h3 className="text-xl font-semibold">Cambio merce in radio</h3>
          <p className="text-zinc-300">
            Con il <strong>cambio merce</strong> convertiamo stock o servizi in investimenti
            media radiofonici: ideale per chi vuole accelerare la visibilità senza
            immobilizzare cassa. Valutiamo il tuo inventario e lo trasformiamo in
            pianificazioni efficaci su emittenti selezionate.
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
              href="/pubblicita-tv"
              className="underline decoration-[#e6d39a]/70 underline-offset-4"
            >
              Pubblicità TV
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
          <a href="/pubblicita-tv" className="underline decoration-[#e6d39a]/70">
            pubblicità TV
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
