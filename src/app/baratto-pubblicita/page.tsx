// src/app/baratto-pubblicita/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Baratto pubblicitario (media barter) | inCambio",
  description:
    "Baratto pubblicitario: paghi campagne TV, Radio e Digital con i tuoi prodotti o servizi. Una soluzione barter con KPI chiari, report e ottimizzazione.",
  keywords: [
    "baratto pubblicitario",
    "pubblicità barter",
    "media barter",
    "cambio merce pubblicità",
    "permute pubblicitarie",
  ],
  alternates: { canonical: "https://www.incambio.eu/baratto-pubblicita" },
  openGraph: {
    title: "Baratto pubblicitario (media barter) | inCambio",
    description:
      "Trasforma stock e servizi in visibilità: campagne pubblicitarie barter su TV, Radio e Digital. KPI e ROI misurabili.",
    url: "https://www.incambio.eu/baratto-pubblicita",
    siteName: "inCambio",
    type: "article",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baratto pubblicitario (barter) | inCambio",
    description:
      "Paga la pubblicità con prodotti o servizi: campagne barter su TV, Radio, Digital e affissioni.",
  },
};

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Che cos’è il baratto pubblicitario?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "È una forma di media barter: paghi campagne pubblicitarie cedendo prodotti o servizi, invece di utilizzare cassa.",
        },
      },
      {
        "@type": "Question",
        name: "Quali media posso acquistare con il baratto pubblicitario?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "TV locali e nazionali, Radio, Digital (Google, social, display) e affissioni. Pianifichiamo un mix su misura.",
        },
      },
      {
        "@type": "Question",
        name: "Il baratto pubblicitario è misurabile?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Sì: definiamo KPI chiari (reach, GRP/OTS, vendite, lead) e forniamo report periodici come in un acquisto tradizionale.",
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
        name: "Baratto pubblicitario",
        item: "https://www.incambio.eu/baratto-pubblicita",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <Script
        id="faq-barter-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id="breadcrumb-barter-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="mx-auto max-w-4xl px-6 pt-28 pb-16">
        <h1 className="text-3xl font-bold text-[#e6d39a]">Baratto pubblicitario</h1>

        <p className="mt-4 text-zinc-300">
          Il <strong>baratto pubblicitario</strong> (o <em>media barter</em>) ti consente di
          pagare la pubblicità cedendo <strong>prodotti o servizi</strong>. In questo modo ottieni
          campagne <strong>TV</strong>, <strong>radio</strong>, <strong>digital</strong> e{" "}
          <strong>affissioni</strong> senza immobilizzare liquidità.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-white">Vantaggi</h2>
        <ul className="mt-4 list-disc pl-5 text-zinc-300 space-y-2">
          <li>Monetizzi stock o servizi trasformandoli in visibilità.</li>
          <li>
            Accedi a <strong>campagne media</strong> di qualità senza esborso cash.
          </li>
          <li>Ottieni report KPI e ottimizzazioni come in un acquisto tradizionale.</li>
          <li>Snellisci logistica e amministrazione con processi semplici.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold text-white">Esempi pratici</h2>
        <p className="mt-4 text-zinc-300">
          Aziende del settore <strong>food & beverage</strong> hanno convertito stock in spot TV
          nazionali; strutture ricettive hanno ceduto voucher per campagne{" "}
          <strong>social e Google Ads</strong>; retailer hanno valorizzato merce stagionale in
          affissioni a Roma e Milano.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/valutazione"
            className="rounded-2xl border border-[#e6d39a]/60 bg-[#e6d39a]/10 px-6 py-3 text-[#e6d39a] hover:bg-[#e6d39a]/20"
          >
            Richiedi una valutazione gratuita
          </Link>
          <Link href="/contatti" className="rounded-2xl bg-white/5 px-6 py-3 hover:bg-white/10">
            Contattaci
          </Link>
        </div>

        <p className="mt-10 text-sm text-zinc-400">
          Correlati:{" "}
          <Link href="/cambio-merce" className="underline decoration-[#e6d39a]/70">
            cambio merce
          </Link>{" "}
          •{" "}
          <Link href="/pubblicita-cambio-merce" className="underline decoration-[#e6d39a]/70">
            pubblicità in cambio merce
          </Link>{" "}
          •{" "}
          <Link href="/pubblicita-tv" className="underline decoration-[#e6d39a]/70">
            pubblicità TV
          </Link>{" "}
          •{" "}
          <Link href="/pubblicita-radio" className="underline decoration-[#e6d39a]/70">
            pubblicità Radio
          </Link>
        </p>
      </section>
    </main>
  );
}
