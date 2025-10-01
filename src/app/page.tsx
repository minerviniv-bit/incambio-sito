// src/app/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import dynamic from "next/dynamic";

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
        url: "/hero/hero-1920.png",
        width: 1920,
        height: 1080,
        alt: "Trasforma il tuo prodotto in visibilità – InCambio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InCambio – Pubblicità in cambio merce",
    description:
      "Media barter serio: converti merce e servizi in campagne su TV, Radio e Digital.",
    images: ["/hero/hero-1920.png"],
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

      {/* HERO responsive */}
      <section className="relative w-full h-[calc(100vh-72px)] md:h-[calc(100vh-88px)] overflow-hidden">
        <img
          src="/hero/hero-2560.png"
          srcSet="
            /hero/hero-1080.png 1080w,
            /hero/hero-1920.png 1920w,
            /hero/hero-2560.png 2560w
          "
          sizes="100vw"
          alt="Calice di vino – Trasforma il tuo prodotto in visibilità"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <h1 className="sr-only">TRASFORMA IL TUO PRODOTTO IN VISIBILITÀ</h1>
        <p className="sr-only">
          Pubblicità in cambio merce. Semplice, misurabile, veloce.
        </p>
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
