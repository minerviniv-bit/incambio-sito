// src/app/pubblicita-radio/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

// ---------- METADATA ----------
export const metadata: Metadata = {
  title: "Pubblicità Radio: spot locali e nazionali | inCambio",
  description:
    "Pianificazione spot radio su emittenti locali e nazionali. Strategia media, acquisto spazi, copy e KPI. Possibile pagamento in cambio merce.",
  alternates: { canonical: "https://www.incambio.eu/pubblicita-radio" },
  openGraph: {
    title: "Pubblicità Radio: spot locali e nazionali | inCambio",
    description:
      "Acquisto spazi, pianificazione flight e copywriting spot. KPI chiari e ottimizzazioni. Anche in cambio merce.",
    url: "https://www.incambio.eu/pubblicita-radio",
    siteName: "inCambio",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Pubblicità Radio: spot locali e nazionali | inCambio",
    description:
      "Pianificazione spot radio con KPI e ottimizzazioni. Possibilità di cambio merce.",
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
  name: "Pubblicità Radio",
  serviceType: "Radio advertising (local & national)",
  description:
    "Pianificazione di spot radiofonici su emittenti locali e nazionali: strategia, acquisto spazi, copy, KPI e ottimizzazioni. Possibile pagamento in cambio merce.",
  areaServed: [{ "@type": "Country", name: "Italia" }],
  url: "https://www.incambio.eu/pubblicita-radio",
  provider: { "@id": "https://www.incambio.eu/#org" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incambio.eu/" },
    { "@type": "ListItem", position: 2, name: "Pubblicità Radio", item: "https://www.incambio.eu/pubblicita-radio" },
  ],
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quanto costa uno spot radio?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Dipende da emittente, fascia oraria, formato e periodo. Creiamo un planning con stime di copertura e frequenza prima dell’acquisto spazi.",
      },
    },
    {
      "@type": "Question",
      name: "Posso pagare con cambio merce (barter)?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Sì. In presenza di stock o servizi idonei, valutiamo formule in barter integrando amministrazione e logistica.",
      },
    },
    {
      "@type": "Question",
      name: "Che formati sono consigliati per gli spot?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "I formati più utilizzati sono 15”, 20” e 30”. Definiamo copy e durata in base agli obiettivi di campagna e al budget.",
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
          <li className="text-zinc-300">Pubblicità Radio</li>
        </ol>
      </nav>

      {/* HERO */}
      <section className="mx-auto max-w-5xl px-6 pb-10 pt-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#e6d39a]">
          Pubblicità Radio
        </h1>

        <p className="mt-4 max-w-3xl text-zinc-300">
          Pianifichiamo <strong>spot radio</strong> su emittenti locali e
          nazionali: <strong>strategia media</strong>, <strong>acquisto spazi</strong>,
          copy e <abbr title="Key Performance Indicators">KPI</abbr> con
          ottimizzazioni per obiettivi di copertura e frequenza. Se disponi di
          stock o servizi, possiamo valutare il <strong>cambio merce</strong>.
        </p>

        {/* CTA */}
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
        <h2 className="text-2xl font-semibold text-white">Cosa facciamo in Radio</h2>
        <ul className="mt-4 list-disc pl-5 text-zinc-300">
          <li>Analisi obiettivi e definizione <strong>strategia media</strong>.</li>
          <li>Planning e <strong>acquisto spazi</strong> su emittenti locali e nazionali.</li>
          <li>Copywriting <strong>spot radio</strong> (15–20–30″) e adattamenti.</li>
          <li>Report <strong>KPI</strong>, ottimizzazioni e stime <strong>ROI</strong>.</li>
          <li>Possibilità di <strong>cambio merce</strong> (barter).</li>
        </ul>

        <h3 className="mt-10 text-xl font-semibold text-white">
          Formati, flight e misurazione
        </h3>
        <p className="mt-3 text-zinc-300">
          Usiamo benchmark e dati storici per impostare flight efficaci e
          raggiungere i target con le fasce orarie più performanti. Monitoriamo
          KPI di copertura, frequenza e pressione pubblicitaria per ottimizzare
          la campagna in corso d’opera.
        </p>

        {/* Link interni */}
        <p className="mt-6 text-zinc-300">
          Potrebbero interessarti:{" "}
          <Link href="/pubblicita-tv" className="underline decoration-[#e6d39a]/70">
            pubblicità TV
          </Link>{" "}
          •{" "}
          <Link href="/pubblicita-roma" className="underline decoration-[#e6d39a]/70">
            pubblicità a Roma
          </Link>{" "}
          •{" "}
          <Link href="/pubblicita-cambio-merce" className="underline decoration-[#e6d39a]/70">
            pubblicità in cambio merce
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
              Quanto costa uno spot radio?
            </summary>
            <p className="mt-3 text-zinc-300">
              Il costo varia da emittente, fascia e durata. Ti forniamo un
              planning con stime di copertura e KPI attesi prima dell’acquisto.
            </p>
          </details>
          <details className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
            <summary className="cursor-pointer text-white">
              Posso pagare con cambio merce?
            </summary>
            <p className="mt-3 text-zinc-300">
              Sì, valutiamo formule barter in presenza di stock o servizi idonei.
            </p>
          </details>
          <details className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
            <summary className="cursor-pointer text-white">
              Qual è il formato migliore per lo spot?
            </summary>
            <p className="mt-3 text-zinc-300">
              15”, 20” e 30” sono i più usati. La scelta dipende da obiettivi,
              stile del messaggio e budget: ti supportiamo nella definizione.
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
