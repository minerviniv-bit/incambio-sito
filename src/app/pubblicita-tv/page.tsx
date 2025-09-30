// src/app/pubblicita-tv/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

/** ---------- JSON-LD types ---------- */
type JSONValue = string | number | boolean | null | { [k: string]: JSONValue } | JSONValue[];
type JSONLD = Record<string, JSONValue>;

/* ---------- METADATA (NO images) ---------- */
export const metadata: Metadata = {
  title: "Pubblicità TV | inCambio",
  description:
    "Pianificazione spot TV su reti locali e nazionali: strategia, acquisto spazi, creatività, KPI e ottimizzazione ROI. Possibilità di cambio merce.",
  alternates: { canonical: "https://www.incambio.eu/pubblicita-tv" },
  openGraph: {
    title: "Pubblicità TV | inCambio",
    description:
      "Strategia, pianificazione e acquisto spazi pubblicitari TV (locali e nazionali). Soluzioni in cambio merce.",
    url: "https://www.incambio.eu/pubblicita-tv",
    siteName: "inCambio",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Pubblicità TV | inCambio",
    description:
      "Spot televisivi su reti locali e nazionali. Pianificazione, creatività, KPI e cambio merce.",
  },
  robots: { index: true, follow: true },
};

/* ---------- JSON-LD utility ---------- */
function JsonLd({ data }: { data: JSONLD }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/* ---------- SCHEMA.ORG ---------- */
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pubblicità TV",
  serviceType: "Television advertising planning",
  description:
    "Pianificazione e gestione di spot televisivi su reti locali e nazionali, con KPI e ottimizzazione ROI. Possibilità di cambio merce.",
  areaServed: { "@type": "Country", name: "Italia" },
  url: "https://www.incambio.eu/pubblicita-tv",
  provider: { "@id": "https://www.incambio.eu/#org" },
} satisfies JSONLD;

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incambio.eu/" },
    { "@type": "ListItem", position: 2, name: "Pubblicità TV", item: "https://www.incambio.eu/pubblicita-tv" },
  ],
} satisfies JSONLD;

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Quanto costa uno spot TV?", acceptedAnswer: { "@type": "Answer", text: "Il costo dipende da rete, fascia e durata. Prepariamo un planning con stime di copertura e KPI attesi." } },
    { "@type": "Question", name: "Posso pagare con cambio merce?", acceptedAnswer: { "@type": "Answer", text: "Sì, valutiamo formule barter in presenza di stock o servizi idonei." } },
    { "@type": "Question", name: "Qual è il formato migliore?", acceptedAnswer: { "@type": "Answer", text: "I più diffusi sono 15”, 20” e 30”. La scelta dipende da obiettivi e creatività." } },
  ],
} satisfies JSONLD;

/* ---------- PAGINA (NO <Image>) ---------- */
export default function Page() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <nav aria-label="breadcrumb" className="mx-auto max-w-5xl px-6 pt-24 text-sm text-zinc-400">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:text-white">Home</Link></li>
          <li aria-hidden>›</li>
          <li className="text-zinc-300">Pubblicità TV</li>
        </ol>
      </nav>

      <section className="mx-auto max-w-5xl px-6 pb-10 pt-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#e6d39a]">Pubblicità TV</h1>
        <p className="mt-4 max-w-3xl text-zinc-300">
          Pianifichiamo <strong>spot TV</strong> su reti locali e nazionali: strategia media, <strong>acquisto spazi</strong>,
          coordinamento creativo e <abbr title="Key Performance Indicators">KPI</abbr> con ottimizzazioni per massimizzare
          <abbr title="Return On Investment"> ROI</abbr>. Se hai stock o servizi, valutiamo il <strong>cambio merce</strong>.
        </p>

        {/* CTA senza immagine */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/valutazione" className="rounded-2xl border border-[#e6d39a]/60 bg-[#e6d39a]/10 px-5 py-2.5 text-[#e6d39a] hover:bg-[#e6d39a]/20 transition">Richiedi una valutazione</Link>
          <Link href="/contatti" className="rounded-2xl bg-white/5 px-5 py-2.5 text-white hover:bg-white/10 transition">Contattaci</Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-14">
        <h2 className="text-2xl font-semibold text-white">Cosa facciamo in TV</h2>
        <ul className="mt-4 list-disc pl-5 text-zinc-300">
          <li>Analisi obiettivi e definizione <strong>strategia media</strong>.</li>
          <li>Planning e <strong>acquisto spazi</strong> su reti locali e nazionali.</li>
          <li>Coordinamento <strong>creatività</strong> (formati 15–20–30″).</li>
          <li>Report <strong>KPI</strong>, ottimizzazioni e stime <strong>ROI</strong>.</li>
          <li>Possibilità di <strong>cambio merce</strong> (barter).</li>
        </ul>

        <h3 className="mt-10 text-xl font-semibold text-white">Formati e flight</h3>
        <p className="mt-3 text-zinc-300">
          Definiamo flight per massimizzare copertura e frequenza con il budget disponibile. Usiamo stime di audience e benchmark per scegliere reti, fasce e break più performanti.
        </p>

        <p className="mt-6 text-zinc-300">
          Approfondisci:{" "}
          <Link href="/pubblicita-radio" className="underline decoration-[#e6d39a]/70">pubblicità Radio</Link> •{" "}
          <Link href="/pubblicita-roma" className="underline decoration-[#e6d39a]/70">pubblicità a Roma</Link> •{" "}
          <Link href="/pubblicita-cambio-merce" className="underline decoration-[#e6d39a]/70">pubblicità in cambio merce</Link> •{" "}
          <Link href="/baratto-pubblicita" className="underline decoration-[#e6d39a]/70">baratto pubblicitario</Link>.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="text-2xl font-semibold text-white">Domande frequenti</h2>
        <div className="mt-6 space-y-5">
          <details className="rounded-lg border border-white/10 bg-white/[0.02] p-4"><summary className="cursor-pointer text-white">Quanto costa uno spot TV?</summary><p className="mt-3 text-zinc-300">Il costo varia da rete, fascia e durata. Ti forniamo un planning con stime di copertura e KPI attesi prima dell’acquisto spazi.</p></details>
          <details className="rounded-lg border border-white/10 bg-white/[0.02] p-4"><summary className="cursor-pointer text-white">Posso pagare con cambio merce?</summary><p className="mt-3 text-zinc-300">Sì, valutiamo formule barter in presenza di stock/servizi idonei.</p></details>
          <details className="rounded-lg border border-white/10 bg-white/[0.02] p-4"><summary className="cursor-pointer text-white">Qual è il formato migliore?</summary><p className="mt-3 text-zinc-300">15”, 20” e 30” sono i più usati. La scelta dipende da obiettivi e creatività.</p></details>
        </div>
      </section>

      <JsonLd data={SERVICE_JSON_LD} />
      <JsonLd data={BREADCRUMB_JSON_LD} />
      <JsonLd data={FAQ_JSON_LD} />
    </main>
  );
}
