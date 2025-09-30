// src/app/pubblicita-cambio-merce/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Pubblicità in cambio merce (media barter) | inCambio",
  description:
    "Trasforma prodotti o servizi in visibilità: pubblicità in cambio merce su TV, Radio, Digital e affissioni. Valutazione stock, pianificazione media, KPI e ottimizzazione.",
  keywords: [
    "pubblicità in cambio merce",
    "cambio merce pubblicità",
    "baratto pubblicitario",
    "media barter",
    "permute pubblicitarie",
    "compensazione merce",
  ],
  alternates: { canonical: "https://www.incambio.eu/pubblicita-cambio-merce" },
  openGraph: {
    title: "Pubblicità in cambio merce (media barter) | inCambio",
    description:
      "Media barter: converti prodotti/servizi in campagne su TV, Radio, Digital e affissioni. Strategia, creatività, KPI e report.",
    url: "https://www.incambio.eu/pubblicita-cambio-merce",
    siteName: "inCambio",
    type: "article",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pubblicità in cambio merce (media barter) | inCambio",
    description:
      "Trasforma stock in visibilità: campagne TV, Radio e Digital in compensazione merce. Report KPI e ottimizzazione.",
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
        name: "Come funziona la pubblicità in cambio merce?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Valutiamo il tuo stock o i tuoi servizi e li convertiamo in un credito media. Con quel credito pianifichiamo campagne su TV, Radio, Digital e affissioni. Tu non immobilizzi cassa e ottieni visibilità misurabile.",
        },
      },
      {
        "@type": "Question",
        name: "Che cosa posso dare in cambio?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Prodotti finiti, servizi, voucher o notti camere/ristorazione. Valutiamo caso per caso la rivendibilità e la logistica.",
        },
      },
      {
        "@type": "Question",
        name: "È vantaggioso rispetto all’acquisto tradizionale?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Sì se hai stock o capacità produttiva: trasformi beni in visibilità senza out-of-pocket immediato, mantenendo pianificazione e KPI come in un acquisto cash.",
        },
      },
      {
        "@type": "Question",
        name: "Posso misurare i risultati?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Certo: definiamo KPI (reach, GRP/OTS, lead, vendite, ricerche brand) e inviamo report periodici con ottimizzazioni.",
        },
      },
      {
        "@type": "Question",
        name: "Su quali media posso investire?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "TV locali/nazionali, Radio, Digital (search, social, display), affissioni. Costruiamo un mix su obiettivi e target.",
        },
      },
    ],
  };

  // Breadcrumb structured data
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incambio.eu/" },
      { "@type": "ListItem", position: 2, name: "Pubblicità in cambio merce", item: "https://www.incambio.eu/pubblicita-cambio-merce" },
    ],
  };

  return (
    <main className="min-h-screen bg-black text-zinc-100">
      {/* JSON-LD */}
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
        <h1 className="text-3xl font-bold text-[#e6d39a]">Pubblicità in cambio merce</h1>

        <p className="mt-4 text-zinc-300">
          Con il <strong>media barter</strong> trasformi <strong>prodotti o servizi</strong> in
          <strong> spazi pubblicitari</strong>. Valutiamo lo stock e lo convertiamo in un credito
          media per campagne su <strong>TV</strong>, <strong>Radio</strong>, <strong>Digital</strong> e{" "}
          <strong>affissioni</strong>. KPI chiari, report e ottimizzazioni continue.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-white">Come lavoriamo</h2>
        <ul className="mt-4 list-disc pl-5 text-zinc-300">
          <li>Valutazione stock/servizi e definizione del <strong>credito media</strong>.</li>
          <li>Strategia e pianificazione sui canali più efficaci per il tuo target.</li>
          <li>Creatività, formati e adattamenti tecnici (spot TV/radio, asset digital, affissioni).</li>
          <li>Acquisto spazi, flighting e gestione <strong>GRP/OTS</strong>, reach e frequenza.</li>
          <li>Report KPI e ottimizzazione dei risultati.</li>
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
          <h2 className="text-2xl font-semibold">Baratto pubblicitario: vantaggi</h2>
          <p className="text-zinc-300">
            Il <strong>baratto pubblicitario</strong> permette di attivare campagne anche quando il
            budget cash è limitato. Converti beni a magazzino, servizi o capacità inutilizzata in
            visibilità. Mantieni la qualità della pianificazione e ottieni <strong>report KPI</strong> come in un acquisto tradizionale.
          </p>

          <h3 className="text-xl font-semibold">Esempi pratici</h3>
          <p className="text-zinc-300">
            Aziende del food & wine convertiscono lotti in <strong>spot TV e radio</strong>; strutture
            ricettive usano voucher per <strong>campagne digital</strong> geo-targettizzate; retailer
            valorizzano stock stagionali in <strong>affissioni</strong> e awareness locale.
          </p>

          <h3 className="text-xl font-semibold">Controllo e misurazione</h3>
          <p className="text-zinc-300">
            Definiamo obiettivi e misuriamo <strong>reach, GRP/OTS, lead, vendite, ricerche brand</strong>.
            Ottimizziamo flight, formati e canali per massimizzare il ROI del tuo credito media.
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
          <a href="/pubblicita-tv" className="underline decoration-[#e6d39a]/70">
            pubblicità TV
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
