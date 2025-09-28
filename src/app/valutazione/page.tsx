import ValutazioneForm from "../../components/ValutazioneForm";

export const metadata = {
  title: "Valutazione | inCambio",
  description:
    "Chiedi una valutazione: trasformiamo il tuo prodotto in pubblicità.",
};

export default function ValutazionePage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      {/* HERO */}
      <section className="relative isolate overflow-hidden pt-28 pb-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#8b5c20_0%,transparent_55%)] opacity-40" />
        <div className="relative mx-auto max-w-5xl px-6">
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide text-[#e6d39a]">
            Chiedi una valutazione
          </h1>
          <p className="mt-4 text-zinc-300 max-w-3xl">
            Raccontaci che merce/servizi vuoi scambiare e gli obiettivi di
            comunicazione. Ti rispondiamo con una proposta di campagna in
            cambio merce, chiara e misurabile.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <ValutazioneForm />
        </div>
      </section>
    </main>
  );
}
