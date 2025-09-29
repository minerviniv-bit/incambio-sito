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
            <Image
              src="/images/Settembre-2025.png"
              alt="Calice di vino – Trasforma il tuo prodotto in visibilità"
              width={1080}
              height={1350}
              priority
              fetchPriority="high"
              sizes="(max-width: 640px) 100vw, (max-width: 1200px) 80vw, 1080px"
              className="mx-auto w-full max-w-6xl object-contain"
            />

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
                className="rounded-2xl border border-[#e6d39a]/50 bg-[#e6d39a]/10 px-5 py-2.5 text-sm font-semibold text-[#e6d39a] hover:bg-[#e6d39a]/20 transition"
              >
                Scopri come funziona
              </a>
              <a
                href="#media"
                className="rounded-2xl bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Vedi i media partner
              </a>
              <a
                href="#casi"
                className="text-sm text-zinc-300 underline decoration-[#e6d39a]/70 underline-offset-4 hover:text-white"
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
