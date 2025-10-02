// src/app/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import dynamic from "next/dynamic";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Blocchi sotto la piega -> lazy
const MediaLogos = dynamic(() => import("@/components/MediaLogos"), { loading: () => null });
const Steps = dynamic(() => import("@/components/Steps"), { loading: () => null });
const CasesShowcase = dynamic(() => import("@/components/CasesShowcase"), { loading: () => null });
const ClientLogos = dynamic(() => import("@/components/ClientLogos"), { loading: () => null });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.incambio.eu"),
  title: "InCambio – Pubblicità in cambio merce (media barter)",
  description:
    "Trasforma prodotti e servizi in campagne su TV, Radio e Digital. Barter trasparente con KPI, report e ottimizzazione. Valutazione gratuita.",
  keywords: [
    "pubblicità in cambio merce",
    "baratto pubblicitario",
    "media barter",
    "cambio merce pubblicità",
    "permute pubblicitarie",
    "campagne radio TV digital",
  ],
  alternates: { canonical: "https://www.incambio.eu/" },

  // ✅ FACEBOOK / LINKEDIN
  openGraph: {
    title: "InCambio – Pubblicità in cambio merce (media barter)",
    description:
      "Trasforma i tuoi stock in visibilità: campagne misurabili su TV, Radio e Digital con KPI e report.",
    url: "https://www.incambio.eu/",
    siteName: "InCambio",
    type: "website",
    locale: "it_IT",
    images: [
      {
        url: "https://www.incambio.eu/hero/hero-1920.png", // immagine social orizzontale
        width: 1920,
        height: 1080,
        alt: "Trasforma il tuo prodotto in visibilità – InCambio",
      },
    ],
  },

  // ✅ TWITTER / X
  twitter: {
    card: "summary_large_image",
    title: "InCambio – Pubblicità in cambio merce",
    description: "Media barter serio: converti merce e servizi in campagne su TV, Radio e Digital.",
    images: ["https://www.incambio.eu/hero/hero-1920.png"],
  },
};

export default function HomePage() {
  // JSON-LD (Organization + WebSite)
  const orgJsonLd = {
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

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "InCambio",
    url: "https://www.incambio.eu/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.incambio.eu/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <main className="min-h-screen bg-black text-zinc-100">
      {/* JSON-LD */}
      <Script
        id="ld-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Script
        id="ld-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      {/* HEADER */}
      <Header />

      {/* HERO (centrato, non tagliato, responsive) */}
      <section className="bg-black flex items-center justify-center pt-8 pb-10 md:pt-14 md:pb-16">
        {/* box con proporzione fissa → zero CLS */}
        <div className="relative w-[min(90vw,720px)] aspect-[2/3]">
          <Image
            src="/hero/hero-1080.png" // verticale
            alt="Calice di vino – Trasforma il tuo prodotto in visibilità"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 720px"
            className="object-contain select-none"
          />
        </div>

        <h1 className="sr-only">TRASFORMA IL TUO PRODOTTO IN VISIBILITÀ</h1>
        <p className="sr-only">Pubblicità in cambio merce. Semplice, misurabile, veloce.</p>
      </section>

      {/* LOGHI MEDIA */}
      <MediaLogos />

      {/* COME FUNZIONA */}
      <section id="come-funziona" className="scroll-mt-24">
        <Steps />
      </section>

      {/* CASI REALI */}
      <section id="casi" className="scroll-mt-24">
        <CasesShowcase />
      </section>

      {/* CLIENTI */}
      <ClientLogos />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
