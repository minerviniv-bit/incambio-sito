// src/app/chi-siamo/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

/* ======= SEO / Social ======= */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.incambio.eu"),
  title: "Chi siamo | InCambio",
  description:
    "InCambio è un’agenzia specializzata nella pianificazione di campagne pubblicitarie nazionali e locali. Core business: cambio merce pubblicitario. Attivi in Food & Beverage, biglietteria, parchi divertimento, casa e mobilità.",
  alternates: { canonical: "https://www.incambio.eu/chi-siamo" },
  openGraph: {
    title: "Chi siamo | InCambio",
    description:
      "Specialisti nel cambio merce pubblicitario. Campagne su TV, Radio, Stampa, Digital e Outdoor.",
    url: "https://www.incambio.eu/chi-siamo",
    siteName: "InCambio",
    type: "website",
    locale: "it_IT",
    images: [
      {
        url: "https://www.incambio.eu/hero/hero-1920.png",
        width: 1920,
        height: 1080,
        alt: "InCambio – Pubblicità in cambio merce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chi siamo | InCambio",
    description:
      "Specialisti nel cambio merce pubblicitario. Campagne su TV, Radio, Stampa, Digital e Outdoor.",
    images: ["https://www.incambio.eu/hero/hero-1920.png"],
  },
};

export default function ChiSiamoPage() {
  // JSON-LD (Organization, Breadcrumb, FAQ)
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "InCambio",
    url: "https://www.incambio.eu/",
    logo: "https://www.incambio.eu/logo.png",
    sameAs: [
      "https://www.facebook.com/incambio",
      "https://www.instagram.com/incambio",
    ],
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incambio.eu/" },
      { "@type": "ListItem", position: 2, name: "Chi siamo", item: "https://www.incambio.eu/chi-siamo" },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Cos'è la pubblicità in cambio merce?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "È una formula di barter in cui prodotti o servizi vengono convertiti in spazi pubblicitari su TV, Radio, Digital e Stampa.",
        },
      },
      {
        "@type": "Question",
        name: "Per quali settori lavorate più spesso?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Food & Beverage, biglietteria, parchi divertimento e a tema, mondo casa (pavimenti, rivestimenti, serramenti, arredo), ed anche mobilità: auto, moto, scooter, biciclette e monopattini.",
        },
      },
      {
        "@type": "Question",
        name: "Come scegliete i canali di vendita della merce presa in cambio?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Definiamo insieme ai clienti i canali di vendita per ogni prodotto o servizio preso in cambio, con clausole chiare e concordate.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black text-zinc-100 py-24 px-6">
      {/* JSON-LD */}
      <Script id="ld-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      <Script id="ld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <div className="mx-auto max-w-5xl text-center">
        {/* Logo */}
        <Image
          src="/logos/incambio.png"
          alt="InCambio"
          width={220}
          height={80}
          className="mx-auto mb-8"
          priority
        />
        <span className="block h-1 w-24 bg-[#e6d39a] mx-auto mb-10" />

        {/* Descrizione */}
        <div className="text-lg leading-relaxed text-zinc-300 space-y-4 mb-16">
          <p>
            <strong>InCambio</strong> è un’agenzia specializzata nella pianificazione di
            campagne pubblicitarie nazionali e locali.
          </p>
          <p>
            Il nostro core business è il{" "}
            <span className="text-[#e6d39a] font-semibold">cambio merce pubblicitario</span>,
            una formula che consente alle aziende di trasformare prodotti e servizi
            in visibilità sui media.
          </p>
          <p>
            Siamo particolarmente attivi nei settori <strong>Food &amp; Beverage</strong>,
            biglietteria di ogni genere, parchi divertimento e a tema, e in tutto ciò
            che riguarda la <strong>casa</strong>: pavimenti, rivestimenti, serramenti,
            arredo giardino, arredamento, cucine, mobili, elettrodomestici, climatizzazione,
            TV e impianti hi-fi.
          </p>
          <p>
            Operiamo inoltre nella <strong>mobilità</strong>, collaborando con brand di auto, moto,
            scooter, biciclette e monopattini.
          </p>
          <p className="font-semibold text-[#e6d39a]">
            Valutiamo con attenzione ogni richiesta che ci venga inoltrata,
            costruendo insieme soluzioni pubblicitarie efficaci e trasparenti.
          </p>
        </div>

        {/* Tre card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="rounded-2xl bg-zinc-900/90 border border-white/10 p-8 shadow-lg hover:border-[#e6d39a]/50 transition">
            <div className="text-3xl mb-4">✔️</div>
            <h3 className="text-xl font-bold text-[#e6d39a]">Pubblicità al prezzo di mercato</h3>
            <p className="mt-2 text-zinc-300">
              Ogni campagna viene pianificata e venduta ai normali prezzi di mercato.
            </p>
          </div>

          <div className="rounded-2xl bg-zinc-900/90 border border-white/10 p-8 shadow-lg hover:border-[#e6d39a]/50 transition">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-[#e6d39a]">Canali sempre concordati</h3>
            <p className="mt-2 text-zinc-300">
              Definiamo insieme i canali di vendita di ogni prodotto o servizio preso in cambio di pubblicità.
            </p>
          </div>

          <div className="rounded-2xl bg-zinc-900/90 border border-white/10 p-8 shadow-lg hover:border-[#e6d39a]/50 transition">
            <div className="text-3xl mb-4">⭐</div>
            <h3 className="text-xl font-bold text-[#e6d39a]">Media di primo livello</h3>
            <p className="mt-2 text-zinc-300">
              Collaboriamo con i principali brand di TV, radio, stampa, digital e outdoor sia nazionali che locali.
            </p>
          </div>
        </div>

        {/* CTA → form valutazione */}
        <Link
          href="/valutazione"
          className="inline-block rounded-xl border border-[#e6d39a]/60 bg-[#e6d39a]/10 px-8 py-4 text-lg font-semibold
                     text-[#e6d39a] hover:bg-[#e6d39a]/20 transition focus:outline-none focus-visible:ring
                     focus-visible:ring-[#e6d39a]/40"
        >
          👉 Richiedi la tua valutazione gratuita
        </Link>
      </div>
    </main>
  );
}
