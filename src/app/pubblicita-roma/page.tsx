// src/app/pubblicita-roma/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Pubblicità a Roma (TV, Radio, Digital) | inCambio",
  description:
    "Campagne pubblicitarie a Roma: pianificazione su media locali e nazionali (TV, Radio, Digital e affissioni), anche in cambio merce. Strategia, creatività, KPI e ottimizzazione.",
  keywords: [
    "pubblicità a Roma",
    "agenzia pubblicitaria Roma",
    "pubblicità TV Roma",
    "pubblicità radio Roma",
    "pubblicità online Roma",
    "affissioni Roma",
    "cambio merce Roma",
    "baratto pubblicitario Roma",
  ],
  alternates: { canonical: "https://www.incambio.eu/pubblicita-roma" },
  openGraph: {
    title: "Pubblicità a Roma (TV, Radio, Digital) | inCambio",
    description:
      "Strategia locale e nazionale, acquisto spazi, creatività e report KPI. Possibilità di cambio merce per aziende con stock o servizi.",
    url: "https://www.incambio.eu/pubblicita-roma",
    siteName: "inCambio",
    type: "article",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pubblicità a Roma (TV, Radio, Digital) | inCambio",
    description:
      "Pianificazione media a Roma su TV, Radio, Digital e affissioni. Anche in cambio merce. Strategia, creatività e KPI.",
  },
};

export default function Page() {
  // Dati strutturati FAQ + breadcrumb
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quanto costa fare pubblicità a Roma?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Variabile in base al canale e alla copertura: TV e radio locali possono partire da poche centinaia di euro al mese, le affissioni e il digital dipendono da formati e durata. Con il cambio merce puoi compensare parte del budget con i tuoi prodotti/servizi.",
        },
      },
      {
        "@type": "Question",
        name: "Posso fare pubblicità in cambio merce a Roma?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Sì. inCambio valorizza stock o servizi trasformandoli in spazi pubblicitari a Roma su TV, Radio, Digital e affissioni. È una soluzione utile per generare visibilità senza immobilizzare cassa.",
        },
      },
      {
        "@type": "Question",
        name: "Che canali consigliate per una campagna locale?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Dipende dal target. In generale abbinare TV e radio locali a digital (ricerche brand e social) garantisce copertura e frequenza. Le affissioni aiutano sulla presenza territoriale.",
        },
      },
    ],
  };

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
        name: "Pubblicità a Roma",
        item: "https://www.incambio.eu/pubblicita-roma",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black text-zinc-100">
      {/* JSON-LD (server-safe) */}
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="mx-auto max-w-4xl px-6 pt-28 pb-16">
        <h1 className="text-3xl font-bold text-[#e6d39a]">
          Pubblicità a Roma
        </h1>

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
          <h2 className="text-2xl font-semibold">Agenzia pubblicitaria a Roma</h2>
          <p className="text-zinc-300">
            La città di Roma offre opportunità uniche per chi desidera far
            crescere il proprio brand. Noi di <strong>inCambio</strong> siamo un’
            <strong>agenzia pubblicitaria a Roma</strong> specializzata nella
            pianificazione di campagne su <strong>TV</strong>,{" "}
            <strong>radio</strong>, <strong>digital</strong> e{" "}
            <strong>affissioni</strong>, con un approccio misurabile orientato al
            ROI.
          </p>
          <p className="text-zinc-300">
            Con il <strong>baratto pubblicitario</strong> (cambio merce)
            valorizziamo i tuoi prodotti o servizi trasformandoli in{" "}
            <strong>spazi pubblicitari a Roma</strong>: una soluzione ideale
            quando vuoi investire in visibilità senza immobilizzare liquidità.
          </p>

          <h3 className="text-xl font-semibold">Pubblicità TV e Radio a Roma</h3>
          <p className="text-zinc-300">
            Per la <strong>pubblicità televisiva a Roma</strong> selezioniamo
            emittenti e palinsesti in linea con il tuo target e i tuoi obiettivi.
            La <strong>pubblicità radio a Roma</strong> permette frequenza e
            copertura con spot nelle fasce di massimo ascolto, abbinabili a
            sponsorizzazioni di programmi e rubriche.
          </p>

          <h3 className="text-xl font-semibold">Digital e Affissioni</h3>
          <p className="text-zinc-300">
            Realizziamo campagne di <strong>pubblicità online a Roma</strong> su
            Google, social e portali locali, con tracciamento KPI (lead, vendite,
            chiamate). Le <strong>affissioni a Roma</strong> completano la
            strategia con copertura territoriale: metropolitana, bus, stazioni,
            quartieri ad alto traffico.
          </p>

          <h3 className="text-xl font-semibold">Perché inCambio</h3>
          <ul className="list-disc pl-5 text-zinc-300 space-y-2">
            <li>Conoscenza del mercato romano e delle sue specificità.</li>
            <li>
              Soluzioni in <strong>cambio merce</strong> per massimizzare il
              budget media.
            </li>
            <li>Report dettagliati, KPI chiari e ottimizzazioni continue.</li>
          </ul>

          <p className="text-zinc-300">
            Con <strong>inCambio</strong> ottieni una strategia completa e
            scalabile che trasforma la visibilità in crescita reale. Vuoi capire
            quale mix di canali è più adatto al tuo caso?
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/valutazione"
              className="rounded-2xl border border-[#e6d39a]/60 bg-[#e6d39a]/10 px-6 py-3 text-[#e6d39a] hover:bg-[#e6d39a]/20"
            >
              Richiedi una valutazione gratuita
            </a>
            <a
              href="/pubblicita-tv"
              className="underline decoration-[#e6d39a]/70 underline-offset-4"
            >
              Pubblicità TV
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

        {/* Link contestuali in fondo (rinforzo internal linking) */}
        <p className="mt-10 text-sm text-zinc-400">
          Vedi anche:{" "}
          <a href="/pubblicita-tv" className="underline decoration-[#e6d39a]/70">
            pubblicità TV
          </a>{" "}
          •{" "}
          <a
            href="/pubblicita-radio"
            className="underline decoration-[#e6d39a]/70"
          >
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
