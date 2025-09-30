// src/app/pubblicita-cambio-merce/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// ---------- METADATA ----------
export const metadata: Metadata = {
  title: "Pubblicità in cambio merce | inCambio",
  description:
    "Trasforma i tuoi prodotti o servizi in visibilità: campagne pubblicitarie TV, Radio e Digital in cambio merce. Strategia, KPI e ottimizzazione.",
  alternates: { canonical: "https://www.incambio.eu/pubblicita-cambio-merce" },
  openGraph: {
    title: "Pubblicità in cambio merce | inCambio",
    description:
      "Scambia i tuoi prodotti o servizi con spot pubblicitari: TV, Radio, Digital e affissioni. KPI chiari e ROI misurabile.",
    url: "https://www.incambio.eu/pubblicita-cambio-merce",
    siteName: "inCambio",
    type: "article",
    images: [
      {
        url: "https://www.incambio.eu/images/Settembre-2025.png",
        width: 1200,
        height: 630,
        alt: "inCambio – Pubblicità in cambio merce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pubblicità in cambio merce | inCambio",
    description:
      "Campagne pubblicitarie senza esborso di cassa: TV, Radio, Digital e affissioni in cambio merce.",
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
  name: "Pubblicità in cambio merce",
  serviceType: "Advertising barter (TV, Radio, Digital)",
  description:
    "Con la pubblicità in cambio merce puoi pagare campagne media cedendo prodotti o servizi. Pianificazione e KPI chiari, con possibilità di ROI misurabile.",
  areaServed: [{ "@type": "Country", name: "Italia" }],
  url: "https://www.incambio.eu/pubblicita-cambio-merce",
  provider: { "@id": "https://www.incambio.eu/#org" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incambio.eu/" },
    { "@type": "ListItem", position: 2, name: "Pubblicità in cambio merce", item: "https://www.incambio.eu/pubblicita-cambio-merce" },
  ],
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Che cos’è la pubblicità in cambio merce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "È una formula barter: cedi prodotti o servizi in cambio di spazi pubblicitari su TV, Radio, Digital e affissioni.",
      },
    },
    {
      "@type": "Question",
      name: "Quali vantaggi ha la pubblicità in cambio merce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Riduci l’esborso di cassa, valorizzi gli stock, ottieni campagne su misura con KPI misurabili e report periodici.",
      },
    },
    {
      "@type": "Question",
      name: "Quali canali posso acquistare?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TV locali e nazionali, Radio, Digital (Google, social, display) e affissioni. Pianificazione personalizzata.",
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
          <li><Link href="/" className="hover:text-white">Home</Link></li>
          <li aria-hidden>›</li>
          <li className="text-zinc-300">Pubblicità in cambio merce</li>
        </ol>
      </nav>

      {/* HERO */}
      <section className="mx-auto max-w-5xl px-6 pb-10 pt-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#e6d39a]">
          Pubblicità in cambio merce
        </h1>

        <p className="mt-4 max-w-3xl text-zinc-300">
          Con la <strong>pubblicità in cambio merce</strong> trasformi il valore
          dei tuoi prodotti o servizi in <strong>budget media</strong> da
          utilizzare su <strong>TV</strong>, <strong>radio</strong>,{" "}
          <strong>digital</strong> e affissioni, senza esborso diretto di cassa.
        </p>

        <div className="mt-8">
          <Image
            src="/images/Settembre-2025.png"
            alt="Campagna pubblicitaria in cambio merce"
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
        <h2 className="text-2xl font-semibold text-white">Come funziona</h2>
        <ul className="mt-4 list-disc pl-5 text-zinc-300">
          <li>Definizione delle quantità e del valore della merce/servizi.</li>
          <li>Pianificazione media coerente con il target e gli obiettivi.</li>
          <li>Gestione creatività e coordinamento con i partner media.</li>
          <li>Report KPI e ottimizzazione in corso d’opera.</li>
        </ul>

        {/* Link interni */}
        <p className="mt-6 text-zinc-300">
          Potrebbero interessarti:{" "}
          <Link href="/cambio-merce" className="underline decoration-[#e6d39a]/70">
            cambio merce
          </Link>{" "}
          •{" "}
          <Link href="/pubblicita-tv" className="underline decoration-[#e6d39a]/70">
            pubblicità TV
          </Link>{" "}
          •{" "}
          <Link href="/pubblicita-radio" className="underline decoration-[#e6d39a]/70">
            pubblicità Radio
          </Link>{" "}
          •{" "}
          <Link href="/baratto-pubblicita" className="underline decoration-[#e6d39a]/70">
            baratto pubblicitario
          </Link>
          .
        </p>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="text-2xl font-semibold text-white">Domande frequenti</h2>
        <div className="mt-6 space-y-5">
          <details className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
            <summary className="cursor-pointer text-white">
              Che cos’è la pubblicità in cambio merce?
            </summary>
            <p className="mt-3 text-zinc-300">
              È una formula barter che ti permette di ottenere visibilità
              pubblicitaria cedendo prodotti o servizi invece che denaro.
            </p>
          </details>
          <details className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
            <summary className="cursor-pointer text-white">
              Quali sono i vantaggi?
            </summary>
            <p className="mt-3 text-zinc-300">
              Eviti esborso di cassa, valorizzi stock e ottieni report KPI con
              misurazioni chiare.
            </p>
          </details>
          <details className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
            <summary className="cursor-pointer text-white">
              Quali canali posso acquistare?
            </summary>
            <p className="mt-3 text-zinc-300">
              TV locali e nazionali, Radio, Digital (Google, social, display) e
              affissioni. Il mix viene calibrato in base al tuo target.
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
