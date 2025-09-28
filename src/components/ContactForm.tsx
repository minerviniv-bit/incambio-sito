export const metadata = {
  title: "Contatti | inCambio",
  description: "Contatta In Cambio S.r.L. per informazioni e richieste",
};

export default function ContattiPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="mb-8 text-3xl font-bold text-yellow-500">Contatti</h1>

        <div className="space-y-4 text-lg leading-relaxed">
          <p>
            <strong>In Cambio S.r.L.</strong>
          </p>
          <p>Viale di Villa Grazioli 1<br/>00198 Roma (RM)</p>
          <p>P.IVA 16031581008</p>
          <p>
            Tel:{" "}
            <a
              href="tel:+393288410612"
              className="text-yellow-400 hover:underline"
            >
              328 8410612
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:info@incambio.eu"
              className="text-yellow-400 hover:underline"
            >
              info@incambio.eu
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
