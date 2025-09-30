// src/app/pubblicita-roma/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pubblicità a Roma (TV, Radio, Digital) | inCambio",
  description:
    "Campagne pubblicitarie a Roma: pianificazione su media locali e nazionali, anche in cambio merce. Strategia, acquisto spazi, creatività, KPI e ottimizzazione.",
  keywords: [
    "pubblicità Roma",
    "agenzia pubblicità Roma",
    "campagne pubblicitarie Roma",
    "spot TV Roma",
    "pubblicità radio Roma",
    "pubblicità digitale Roma",
    "cambio merce pubblicità Roma",
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
      "Pianificazione pubblicitaria su TV, Radio e Digital a Roma e provincia. KPI, report e ottimizzazioni continue.",
  },
};

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Che canali pianificate a Roma?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "TV locali e nazionali con copertura su Roma, Radio principali e locali, digitale (Google, social, programmatic) e affissioni.",
        },
      },
      {
        "@type": "Question",
        name: "Lavorate anche in cambio merce?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Sì. Possiamo convertire prodotti o servizi in budget media, mantenendo KPI e report come in un acquisto tradizionale.",
        },
      },
      {
        "@type": "Question",
        name: "Cosa includono i report?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Definiamo KPI chiari (reach, GRP/OTS, click, lead, vendite) e condividiamo report periodici con insights e ottimizzazioni.",
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
      <Script
        id="faq-roma-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id="breadcrumb-roma-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="mx-auto max-w-4xl px-6 pt-28 pb-16">
        <h1 className="text-3xl font-bold text-[#e6d39a]">Pubblicità a Roma</h1>

        <p className="mt-4 text-zinc-300">
          Siamo a Roma e pianifichiamo <strong>TV, Radio e Digital</strong> su
          media locali e nazionali. Offriamo anche soluzioni di{" "}
          <strong>cambio merce</strong> per aziende con stock o servizi da
          valorizzare.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-white">Cosa facciamo</h2>
        <ul className="mt-4 list-disc pl-5 text-zinc-300 space-y-2">
          <li>Strategia locale (Roma e provincia) e nazionale.</li>
          <li>Acquisto spazi e coordinamento creativo.</li>
          <li>Report KPI, ottimizzazioni e stime ROI.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold text-white">Perché Roma</h2>
        <p className="mt-4 text-zinc-300">
          Conosciamo bene audience e inventory del territorio: TV e Radio con
          copertura cittadina, Digital iper-targettizzato per quartieri e
          interessi, affissioni strategiche su tratte ad alta visibilità.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/valutazione"
            className="rounded-2xl border border-[#e6d39a]/60 bg-[#e6d39a]/10 px-6 py-3 text-[#e6d39a] hover:bg-[#e6d39a]/20"
          >
            Richiedi una valutazione
          </Link>
          <Link href="/contatti" className="rounded-2xl bg-white/5 px-6 py-3 hover:bg-white/10">
            Contattaci
          </Link>
        </div>

        <p className="mt-10 text-sm text-zinc-400">
          Vedi anche:{" "}
          <Link href="/pubblicita-tv" className="underline decoration-[#e6d39a]/70">
            pubblicità TV
          </Link>{" "}
          •{" "}
          <Link href="/pubblicita-radio" className="underline decoration-[#e6d39a]/70">
            pubblicità Radio
          </Link>{" "}
          •{" "}
          <Link href="/pubblicita-cambio-merce" className="underline decoration-[#e6d39a]/70">
            pubblicità in cambio merce
          </Link>
        </p>
      </section>
    </main>
  );
}
