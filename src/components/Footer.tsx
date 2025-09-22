export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/80 py-10 text-center text-sm text-zinc-400">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* LOGO IMMAGINE */}
        <div className="mb-4 flex justify-center">
          <img
            src="/logos/incambio.png"
            alt="InCambio"
            className="h-40 w-auto"
          />
        </div>

        <p className="mb-2 text-zinc-300">Pubblicità in cambio merce</p>

        {/* CONTATTI */}
        <p className="mb-1">
          Contatti:{" "}
          <a
            href="mailto:info@incambio.it"
            className="text-[#e6d39a] hover:underline"
          >
            info@incambio.it
          </a>{" "}
          ·{" "}
          <a
            href="tel:+393288410612"
            className="text-[#e6d39a] hover:underline"
          >
            +39 328 841 0612
          </a>
        </p>
        <p className="mb-1">
          Sede: Viale di Villa Grazioli 1, 00198 Roma
        </p>

        <p className="mt-6 text-xs text-zinc-500">
          © {new Date().getFullYear()} InCambio · Tutti i diritti riservati
        </p>
      </div>
    </footer>
  );
}
