// src/app/chi-siamo/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

/* ========== SEO / METADATA ========== */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.incambio.eu"),
  title: "Perché scegliere inCambio | Chi siamo",
  description:
    "Pubblicità al prezzo di mercato, canali di vendita concordati e media di primo livello. Scopri perché scegliere inCambio.",
  alternates: { canonical: "https://www.incambio.eu/chi-siamo" },
  openGraph: {
    title: "Perché scegliere inCambio | Chi siamo",
    description:
      "Pubblicità al prezzo di mercato, canali concordati e media di primo livello.",
    url: "https://www.incambio.eu/chi-siamo",
    siteName: "InCambio",
    type: "article",
    locale: "it_IT",
    images: [
      {
        url: "/hero/hero-1920.png",
        width: 1920,
        height: 1080,
        alt: "InCambio – Perché sceglierci",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perché scegliere inCambio | Chi siamo",
    description:
      "Pubblicità al prezzo di mercato, canali concordati e media di primo livello.",
    images: ["/hero/hero-1920.png"],
  },
};

/* Icone semplici (SVG inline, nessuna libreria) */
function IconCheck() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-8 w-8 flex-none"
      fill="none"
      stroke="#e6d39a"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
function IconUsers() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-8 w-8 flex-none"
      fill="none"
      stroke="#e6d39a"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function IconStar() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-8 w-8 flex-none"
      fill="none"
      stroke="#e6d39a"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2" />
    </svg>
  );
}

export default function ChiSiamoPage() {
  const points = [
    {
      icon: <IconCheck />,
      title: "Pubblicità al prezzo di mercato",
      text:
        "Ogni campagna viene pianificata e venduta ai normali prezzi di mercato.",
    },
    {
      icon: <IconUsers />,
      title: "Canali di vendita sempre concordati con il cliente",
      text:
        "La tua merce o i tuoi servizi non finiscono dove capita: scegliamo insieme le destinazioni con clausole chiare.",
    },
    {
      icon: <IconStar />,
      title: "Media di primo livello",
      text:
        "Collaboriamo con i principali brand di TV, radio, stampa, digital e outdoor sia nazionali che locali.",
    },
  ];

  // JSON-LD per la pagina (WebPage)
  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Perché scegliere inCambio | Chi siamo",
    url: "https://www.incambio.eu/chi-siamo",
    description:
      "Pubblicità al prezzo di mercato, canali concordati e media di primo livello.",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incambio.eu/" },
        { "@type": "ListItem", position: 2, name: "Chi siamo", item: "https://www.incambio.eu/chi-siamo" },
      ],
    },
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* JSON-LD */}
      <Script
        id="ld-webpage-chi-siamo"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }}
      />

      {/* Hero semplice (titolo) */}
      <section className="max-w-5xl mx-auto px-6 pt-28 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-[#e6d39a] font-bold">
          Perché scegliere inCambio
        </h1>
      </section>

      {/* Tre punti */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="space-y-10">
          {points.map((p, i) => (
            <div key={i} className="flex items-start gap-5">
              {p.icon}
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">{p.title}</h2>
                <p className="mt-2 text-zinc-300 leading-relaxed">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA finale – fascia oro */}
      <section className="bg-[#e6d39a] text-black text-center py-12">
        <p className="text-2xl md:text-3xl font-bold">
          Richiedi la tua valutazione gratuita su{" "}
          <Link href="/valutazione" className="underline hover:text-zinc-800">
            incambio.eu
          </Link>{" "}
          oppure{" "}
          <Link href="/contatti" className="underline hover:text-zinc-800">
            incontriamoci
          </Link>
        </p>
      </section>
    </main>
  );
}
