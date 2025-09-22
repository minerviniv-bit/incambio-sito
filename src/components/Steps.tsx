import Link from "next/link";

export default function Steps() {
  const steps = [
    {
      n: "1",
      title: "Valutazione",
      text:
        "Analizziamo insieme a voi i prodotti, i canali di vendita e il piano media più efficace.",
    },
    {
      n: "2",
      title: "Fatturazione",
      text:
        "Come funziona a livello fiscale?",
    },
    {
      n: "3",
      title: "On-Air",
      text:
        "Stabilito tutto siamo pronti ad uscire sui media concordati.",
    },
  ];

  return (
    <section id="come-funziona" className="relative py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="sr-only">Come funziona</h2>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <Link
              key={s.n}
              href={
                s.n === "2"
                  ? "/fatturazione"
                  : s.n === "1"
                  ? "/valutazione"
                  : "#"
              }
              aria-label={`Vai alla pagina dello step ${s.n} ${s.title}`}
              className="group block rounded-2xl border border-white/10 bg-zinc-900/90 p-8 text-center transition
                         hover:border-[#e6d39a]/50 hover:bg-zinc-900/95 focus:outline-none focus-visible:ring
                         focus-visible:ring-[#e6d39a]/40"
            >
              <div className="text-4xl font-semibold text-[#e6d39a]">{s.n}</div>
              <div className="mt-3 text-xl font-bold">{s.title}</div>
              <p className="mt-3 text-zinc-300 leading-relaxed">{s.text}</p>

              {s.n === "1" && (
                <span className="mt-5 inline-block text-sm text-[#e6d39a] opacity-0
                               transition-opacity group-hover:opacity-100">
                  Clicca per chiedere la valutazione →
                </span>
              )}
              {s.n === "2" && (
                <span className="mt-5 inline-block text-sm text-[#e6d39a] opacity-0
                               transition-opacity group-hover:opacity-100">
                  Scopri come funziona fiscalmente →
                </span>
              )}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/valutazione"
            className="rounded-2xl border border-[#e6d39a]/60 bg-[#e6d39a]/10 px-6 py-3 text-sm font-semibold
                       text-[#e6d39a] hover:bg-[#e6d39a]/20 transition focus:outline-none focus-visible:ring
                       focus-visible:ring-[#e6d39a]/40"
          >
            Chiedi una valutazione
          </Link>
        </div>
      </div>
    </section>
  );
}
