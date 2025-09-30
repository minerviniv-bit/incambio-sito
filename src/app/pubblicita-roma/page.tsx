// src/app/pubblicita-roma/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

// ---------- METADATA (title, description, canonical, OG, Twitter, robots) ----------
export const metadata: Metadata = {
  title: "Pubblicità a Roma (TV, Radio, Digital) | inCambio",
  description:
    "Campagne pubblicitarie a Roma: pianificazione su media locali e nazionali (TV, Radio, Digital), anche in cambio merce. Strategia, KPI e ottimizzazione.",
  alternates: { canonical: "https://www.incambio.eu/pubblicita-roma" },
  openGraph: {
    title: "Pubblicità a Roma (TV, Radio, Digital) | inCambio",
    description:
      "Strategia locale e nazionale, acquisto spazi, creatività e KPI. Possibilità di cambio merce per aziende con stock o servizi.",
    url: "https://www.incambio.eu/pubblicita-roma",
    siteName: "inCambio",
    type: "article",
    images: [
      {
        url: "https://www.incambio.eu/images/Settembre-2025.png",
        width: 1200,
        height: 630,
        alt: "inCambio – Pubblicità a Roma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pubblicità a Roma (TV, Radio, Digital) | inCambio",
    description:
      "Pianificazione media su Roma e provincia. TV, Radio e Digital anche in cambio merce.",
    images: ["https://www.incambio.eu/images/Settembre-2025.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ---------- piccola utility per stampare JSON-LD ----------
function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      // NOTE: JSON.stringify senza spazi rende il payload più snello
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// ---------- SCHEMA.ORG (Service + BreadcrumbList + FAQPage) ----------
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Pubblicità a Roma",
  "serviceType": "Local advertising planning (TV, Radio, Digital) in Rome",
  "description":
    "Pianificazione di campagne pubblicitarie su media locali e nazionali nell'area di Roma, con misurazione KPI e possibilità di cambio merce.",
  "areaServed": [
    { "@type": "City", "name": "Roma" },
    { "@type": "Country", "name": "Italia" }
  ],
  "url": "https://www.incambio.eu/pubblicita-roma",
  "provider": { "@id": "https://www.incambio.eu/#org" }
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.incambio.eu/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Pubblicità a Roma",
      "item": "https://www.incambio.eu/pubblicita-roma"
    }
  ]
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quanto costa fare pubblicità a Roma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il budget varia in base a obiettivi, canali (TV, Radio, Digital), target e stagionalità. Definiamo un piano su misura e condividiamo KPI e stime ROI."
      }
    },
    {
      "@type": "Question",
      "name": "Posso pagare la pubblicità con il cambio merce?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sì. Se hai stock o servizi valorizzabili, possiamo impostare una formula di cambio merce (barter) integrata con amministrazione e logistica."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto dura una campagna locale su Roma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dipende dal settore e dagli obiettivi. In genere partiamo da flight di 2-4 settimane e ottimizziamo in corso d'opera con report KPI."
      }
    }
  ]
};

// ---------- PAGINA ----------
export default function Page() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      {/* Breadcrumb visivo + link interni */}
      <nav
        aria-label="breadcrumb"
        className="mx-auto max-w-5xl px-6 pt-24 text-sm text-zinc-400"
      >
        <ol className="flex gap-2">
          <li>
            <a href="/" className="hover:text-white">
              Home
            </a>
          </li>
          <li aria-hidden>›</li>
          <li className="text-zinc-300">Pubblicità a Roma</li>
        </ol>
      </nav>

      {/* HERO / INTRO */}
      <section className="mx-auto max-w-5xl px-6 pb-10 pt-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#e6d39a]">
          Pubblicità a Roma
        </h1>

        <p className="mt-4 max-w-3xl text-zinc-300">
          Siamo a Roma e pianifichiamo <strong>TV, Radio e Digital</strong> su
          media locali e nazionali. Offriamo anche soluzioni di{" "}
          <strong>cambio merce</strong> per aziende con stock o servizi da
          valorizzare. Definiamo strategia, acquistiamo spazi e misuriamo i{" "}
          <abbr title="Key Performance Indicators">KPI</abbr> con stime di{" "}
          <abbr title="Return On Investment">ROI</abbr>.
        </p>

        {/* immagine con alt descrittivo (opzionale ma utile) */}
        <div className="mt-8">
          <Image
            src="/images/Settembre-2025.png"
            alt="Campagna pubblicitaria locale a Roma su TV, Radio e Digital"
            width={1200}
            height={630}
            className="w-full h-auto rounded-xl border border-white/10"
            priority
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/valutazione"
            className="rounded-2xl border border-[#e6d39a]/60 bg-[#e6d39a]/10 px-5 py-2.5 text-[#e6d39a] hover:bg-[#e6d39a]/20 transition"
          >
            Richiedi una valutazione
          </a>
          <a
            href="/contatti"
            className="rounded-2xl bg-white/5 px-5 py-2.5 text-white hover:bg-white/10 transition"
          >
            Contattaci
          </a>
        </div>
      </section>

      {/* CONTENUTO SEO */}
      <section className="mx-auto max-w-5xl px-6 pb-14">
        <h2 className="text-2xl font-semibold text-white">
          Cosa facciamo (Roma e provincia)
        </h2>
        <ul className="mt-4 list-disc pl-5 text-zinc-300">
          <li>Strategia locale e nazionale in funzione del tuo target.</li>
          <li>Acquisto spazi e coordinamento creativo.</li>
          <li>Report KPI, ottimizzazioni e stime ROI.</li>
          <li>Soluzioni di <strong>pubblicità in cambio merce</strong>.</li>
        </ul>

        <h3 className="mt-10 text-xl font-semibold text-white">
          Canali: TV, Radio e Digital
        </h3>
        <p className="mt-3 text-zinc-300">
          In base agli obiettivi scegliamo i canali con il miglior rapporto
          costo/contatto. Lavoriamo su <strong>TV</strong> generaliste e locali,
          <strong> Radio</strong> e <strong>Digital</strong> (video, display,
          social e native), con flight ottimizzati su Roma e hinterland.
        </p>

        {/* Link interni (silo tematico) */}
        <p className="mt-6 text-zinc-300">
          Approfondisci:{" "}
          <a href="/pubblicita-tv" className="underline decoration-[#e6d39a]/70">
            pubblicità TV
          </a>
          {" • "}
          <a
            href="/pubblicita-radio"
            className="underline decoration-[#e6d39a]/70"
          >
            pubblicità Radio
          </a>
          {" • "}
          <a
            href="/pubblicita-cambio-merce"
            className="underline decoration-[#e6d39a]/70"
          >
            pubblicità in cambio merce
          </a>
          {" • "}
          <a
            href="/baratto-pubblicita"
            className="underline decoration-[#e6d39a]/70"
          >
            baratto pubblicitario
          </a>
          .
        </p>
      </section>

      {/* FAQ (visibili + schema) */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="text-2xl font-semibold text-white">Domande frequenti</h2>
        <div className="mt-6 space-y-5">
          <details className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
            <summary className="cursor-pointer text-white">
              Quanto costa fare pubblicità a Roma?
            </summary>
            <p className="mt-3 text-zinc-300">
              Il budget dipende da canali, formati e stagionalità. Ti
              proponiamo un piano su misura con KPI e stime ROI prima di partire.
            </p>
          </details>

          <details className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
            <summary className="cursor-pointer text-white">
              Posso pagare la pubblicità con il cambio merce?
            </summary>
            <p className="mt-3 text-zinc-300">
              Sì: se hai stock o servizi valorizzabili, impostiamo una formula
              barter integrata con amministrazione e logistica.
            </p>
          </details>

          <details className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
            <summary className="cursor-pointer text-white">
              Quanto dura una campagna locale su Roma?
            </summary>
            <p className="mt-3 text-zinc-300">
              In genere da 2 a 4 settimane, con ottimizzazioni in corso
              d’opera basate sui dati raccolti.
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
