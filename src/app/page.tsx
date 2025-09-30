// app/page.tsx
import Image from "next/image";
import dynamic from "next/dynamic";

import Header from "../components/Header";
import Footer from "../components/Footer";

// Blocchi sotto la piega -> code-splitting / lazy
const MediaLogos = dynamic(() => import("../components/MediaLogos"), { loading: () => null });
const Steps = dynamic(() => import("../components/Steps"), { loading: () => null });
const CasesShowcase = dynamic(() => import("../components/CasesShowcase"), { loading: () => null });
const ClientLogos = dynamic(() => import("../components/ClientLogos"), { loading: () => null });

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <Header />

      {/* HERO */}
      <section className="relative isolate overflow-hidden pt-24 md:pt-28">
        {/* Radiale alleggerita su mobile (meno paint) */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#8b5c20_0%,transparent_55%)] opacity-20 md:opacity-40" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6 pb-12 md:pb-16">
          <div className="mx-auto text-center">
            {/* IMMAGINE HERO FULLSCREEN con focus alto */}
            <div className="relative w-full h-[100svh] md:h-[80vh]">
              <Image
                src="/images/Settembre-2025.png"
                alt="Calice di vino – Trasforma il tuo prodotto in visibilità"
                fill
                priority
                fetchPriority="high"
                sizes="100vw"
                className="object-cover object-top md:object-contain md:object-center"
              />
            </div>

            {/* Titolo e testo solo mobile (SEO + accessibilità) */}
            <h1 className="font-serif text-2xl tracking-wide text-[#e6d39a] md:hidden mt-2">
              TRASFORMA IL TUO PRODOTTO IN VISIBILITÀ
            </h1>
            <p className="mt-2 text-zinc-300 md:hidden">
              Pubblicità in cambio merce. Semplice, misurabile, veloce.
            </p>

            <div className="mt-6 md:mt-8 flex items-center justify-center gap-3 md:gap-4">
              <a
                href="#come-funziona"
                aria-label="Vai alla sezione Come funziona"
                className="rounded-2xl border border-[#e6d39a]/60 bg-[#e6d39a]/20 px-5 py-2.5 text-sm font-semibold text-[#e6d39a] hover:bg-[#e6d39a]/30 transition"
              >
                Scopri come funziona
              </a>
              <a
                href="#media"
                aria-label="Vai alla sezione Media partner"
                className="rounded-2xl bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition"
              >
                Vedi i media partner
              </a>
              <a
                href="#casi"
                aria-label="Vai alla sezione Casi reali"
                className="text-sm text-zinc-200 underline decoration-[#e6d39a]/80 underline-offset-4 hover:text-white"
              >
                Casi reali
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LOGHI MEDIA */}
      <MediaLogos />

      {/* COME FUNZIONA */}
      <section id="come-funziona">
        <Steps />
      </section>

      {/* CASI REALI */}
      <section id="casi">
        <CasesShowcase />
      </section>

      {/* CLIENTI */}
      <ClientLogos />

      <Footer />
    </main>
  );
}
