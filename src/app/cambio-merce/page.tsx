// src/app/cambio-merce/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// ---------- METADATA ----------
export const metadata: Metadata = {
  title: "Cambio merce per la pubblicità | inCambio",
  description:
    "Trasforma prodotti o servizi in budget media: soluzioni di cambio merce per campagne su TV, Radio, Digital e affissioni con KPI misurabili.",
  alternates: { canonical: "https://www.incambio.eu/cambio-merce" },
  openGraph: {
    title: "Cambio merce per la pubblicità | inCambio",
    description:
      "Valutazione stock/servizi, credito media e pianificazione su TV, Radio, Digital. Report KPI e ottimizzazioni.",
    url: "https://www.incambio.eu/cambio-merce",
    siteName: "inCambio",
    type: "article",
    images: [
      {
        url: "https://www.incambio.eu/images/Settembre-2025.png",
        width: 1200,
        height: 630,
        alt: "inCambio — Cambio merce per la pubblicità",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cambio merce per la pubblicità | inCambio",
    description:
      "Con il cambio merce converti beni e servizi in visibilità su TV, Radio e Digital. KPI chiari e report.",
    images: ["https://www.incambio.eu/images/Settembre-2025.png"],
  },
  robots: { index: true, follow: true },
};

// ---------- JSON-LD utility ----------
function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// ---------- SCHEMA.ORG ----------
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cambio merce per la pubblicità",
  serviceType: "Media barter / cambio merce per campagne pubblicitarie",
  description:
    "Valutazione di stock o servizi e conversione in credito media per campagne su TV, Radio, Digital e affissioni. KPI e reportistica.",
  areaServed: [{ "@type": "Country", name: "Italia" }],
  url: "https://www.incambio.eu/cambio-merce",
  provider: { "@id": "https://www.incambio.eu/#org" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incambio.eu/" },
    { "@type": "ListItem", position: 2, name: "Cambio merce", item: "https://www.incambio.eu/cambio-merce" },
  ],
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Come funziona il cambio merce?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Valutiamo prodotti o servizi e li convertiamo in un credito media. Con questo credito pianifichiamo campagne su TV, Radio, Digital e affissioni, con KPI e report.",
      },
    },
    {
      "@type": "Question",
      name: "Che cosa posso cedere in cambio?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Prodotti finiti, servizi, voucher e capacità inutilizzata (es. notti hotel). La fattibilità dipende da rivendibilità e logistica.",
      },
    },
    {
      "@type": "Question",
      name: "È conveniente rispetto al cash?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Se hai stock o servizi valorizzabili, sì: attivi campagne senza esborso immediato, mantenendo qualità della pianificazione e controllo dei KPI.",
      },
    },
  ],
};

// ---------- PAGINA ----------
export default function Page() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      {/* Breadcrumb */}
      <nav
        aria-label="breadcrumb"
        className="mx-auto max-w-5xl px-6 pt-24 text-sm text-zinc-400"
      >
        <ol className="flex gap-2">
          <li>
            <Link href="/" className="hover:text-white">Home</Link>
          </li>
          <li aria-hidden>›</li>
          <li className="text-zinc-300">Cambio merce</li>
        </ol>
      </nav>

      {/* HERO / INTRO */}
      <section className="mx-auto max-w-5xl px-6 pb-10 pt-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#e6d39a]">
          Cambio merce per la pubblicità
        </h1>

        <p className="mt-4 max-w-3xl text-zinc-300">
          Con il <strong>cambio merce</strong> convertiamo il valore dei tuoi
          prodotti o servizi in un <strong>credito media</strong> da utilizzare
          per campagne su <strong>TV</strong>, <strong>Radio</strong>,{" "}
          <strong>Digital</strong> e <strong>affissioni</strong>. Definiamo KPI
          e forniamo report con ottimizzazioni in corso d’opera.
        </p>

        <div className="mt-8">
          <Image
            src="/images/Settembre-2025.png"
            alt="Cambio merce: conversione stock in credito media per pubblicità"
            width={1200}
            height={630}
            className="w-full h-auto rounded-xl border border-white/10"
            priority
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/valutazione"
            className="rounded-2xl border border-[#e6d39a]/60 bg-[#e6d39a]/10 px-5 py-2.5 text-[#e6d39a] hover:bg-[#e6d39a]/20 transition"
          >
            Richiedi una valutazione
          </Link>
          <Link
            href="/contatti"
            className="rounded-2xl bg-white/5 px-5 py-2.5 text-white hover:bg-white/10 transition"
          >
            Contattaci
          </Link>
        </div>
      </section>

      {/* CONTENUTO SEO */}
      <section className="mx-auto max-w-5xl px-6 pb-14">
        <h2 className="text-2xl font-semibold text-white">In pratica</h2>
        <ul className="mt-4 list-disc pl-5 text-zinc-300">
          <li>Valutazione di stock/servizi e definizione del <strong>credito media</strong>.</li>
          <li>Pianificazione su canali coerenti con target e obiettivi.</li>
          <li>Acquisto spazi, flighting e gestione pressione media.</li>
          <li>Reportistica e misurazione risultati (<strong>KPI</strong> e <strong>ROI</strong>).</li>
        </ul>

        {/* Link interni */}
        <p className="mt-6 text-zinc-300">
          Approfondisci:{" "}
          <Link href="/pubblicita-cambio-merce" className="underline decoration-[#e6d39a]/70">
            pubblicità in cambio merce
          </Link>{" "}
          •{" "}
          <Link href="/baratto-pubblicita" className="underline decoration-[#e6d39a]/70">
            baratto pubblicitario
          </Link>{" "}
          •{" "}
          <Link href="/pubblicita-tv" className="underline decoration-[#e6d39a]/70">
            pubblicità TV
          </Link>{" "}
          •{" "}
          <Link href="/pubblicita-radio" className="underline decoration-[#e6d39a]/70">
            pubblicità Radio
          </Link>
          .
        </p>
      </section>

      {/* FAQ (visibili) */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="text-2xl font-semibold text-white">Domande frequenti</h2>
        <div className="mt-6 space-y-5">
          <details className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
            <summary className="cursor-pointer text-white">Come funziona il cambio merce?</summary>
            <p className="mt-3 text-zinc-300">
              Convertiamo beni o servizi in un credito media e lo impieghiamo su
              TV, Radio, Digital e affissioni con KPI chiari e report.
            </p>
          </details>
          <details className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
            <summary className="cursor-pointer text-white">Cosa posso cedere in cambio?</summary>
            <p className="mt-3 text-zinc-300">
              Prodotti finiti, servizi, voucher o capacità inutilizzata.
            </p>
          </details>
          <details className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
            <summary className="cursor-pointer text-white">È conveniente rispetto al cash?</summary>
            <p className="mt-3 text-zinc-300">
              Se hai stock o servizi valorizzabili, puoi attivare campagne
              senza esborso immediato mantenendo qualità e controllo dei KPI.
            </p>
          </details>
        </div>
      </section>

      {/* JSON-LD */}
      <JsonLd data={SERVICE_JSON_LD} />
      <JsonLd data={BREADCRUMB_JSON_LD} />
      <JsonLd data={FAQ_JSON_LD} />
    </main>
  );
}
