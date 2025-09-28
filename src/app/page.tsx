import Header from "../components/Header";
import Footer from "../components/Footer";
import MediaLogos from "../components/MediaLogos";
import Steps from "../components/Steps";
import CasesShowcase from "../components/CasesShowcase";
import ClientLogos from "../components/ClientLogos";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <Header />

      {/* HERO */}
      <section className="relative isolate overflow-hidden pt-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#8b5c20_0%,transparent_55%)] opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 pb-16">
          <div className="mx-auto text-center">
            <img
              src="/images/Settembre-2025.png"
              alt="Calice di vino"
              className="mx-auto w-full max-w-6xl object-contain"
            />

            {/* L’immagine ha già il titolo: mostralo solo su mobile per SEO/accessibilità */}
            <h1 className="font-serif text-2xl tracking-wide text-[#e6d39a] md:hidden">
              TRASFORMA IL TUO PRODOTTO IN VISIBILITÀ
            </h1>
            <p className="mt-3 text-zinc-300 md:hidden">
              Pubblicità in cambio merce. Semplice, misurabile, veloce.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="#come-funziona"
                className="rounded-2xl border border-[#e6d39a]/50 bg-[#e6d39a]/10 px-6 py-3 text-sm font-semibold text-[#e6d39a] hover:bg-[#e6d39a]/20 transition"
              >
                Scopri come funziona
              </a>
              <a
                href="#media"
                className="rounded-2xl bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
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
