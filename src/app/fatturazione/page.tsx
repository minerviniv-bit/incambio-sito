import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Fatturazione | inCambio",
};

export default function FatturazionePage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Header */}
      <Header />

      {/* Contenuto */}
      <main className="flex-grow">
        <section className="relative py-20">
          <div className="mx-auto max-w-5xl px-6 text-center">
            {/* Immagine slide */}
            <img
              src="/pagina-3.png"
              alt="Schema fatturazione InCambio"
              className="mx-auto mb-12 rounded-lg shadow-lg"
            />

            {/* Testo descrittivo */}
            <h1 className="text-4xl font-serif text-[#e6d39a] mb-6">
              Come funziona a livello fiscale?
            </h1>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              InCambio emetterà regolare <strong>fattura per la pubblicità</strong>.
              Tu emetterai regolare <strong>fattura per i tuoi beni o servizi</strong>.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed">
              In questo modo la permuta è trasparente, fiscalmente corretta e
              perfettamente in linea con la normativa IVA e contabile italiana.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
