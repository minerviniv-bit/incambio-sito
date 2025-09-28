export const metadata = {
  title: "Contatti | inCambio",
  description: "Contatta In Cambio S.r.L. per informazioni e richieste",
};

export default function ContattiPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 flex items-center justify-center">
      <section className="w-full max-w-3xl px-6 py-20 text-center">
        {/* Titolo */}
        <h1 className="mb-8 text-3xl font-bold text-yellow-500">Contatti</h1>

        {/* Dati centrati */}
        <div className="space-y-4 text-lg leading-relaxed mb-12">
          <p>
            <strong>In Cambio S.r.L.</strong>
          </p>
          <p>
            Viale di Villa Grazioli 1<br />
            00198 Roma (RM)
          </p>
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

        {/* Mappa Google centrata */}
        <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-zinc-800 mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.155259501139!2d12.49627!3d41.92228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f60ec7d6f3e9b%3A0xa8f0bb1c91e1e44!2sViale%20di%20Villa%20Grazioli%2C%201%2C%2000198%20Roma%20RM!5e0!3m2!1sit!2sit!4v1696600000000!5m2!1sit!2sit"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
