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
            href="mailto:info@incambio.eu"
            className="text-[#e6d39a] hover:underline"
          >
            info@incambio.eu
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

        {/* LINK SEO */}
        <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-zinc-400">
          <a href="/pubblicita-cambio-merce" className="hover:text-[#e6d39a]">
            Pubblicità in cambio merce
          </a>
          <a href="/cambio-merce" className="hover:text-[#e6d39a]">
            Cambio merce
          </a>
          <a href="/baratto-pubblicita" className="hover:text-[#e6d39a]">
            Baratto pubblicitario
          </a>
          <a href="/pubblicita-roma" className="hover:text-[#e6d39a]">
            Pubblicità Roma
          </a>
          <a href="/pubblicita-tv" className="hover:text-[#e6d39a]">
            Pubblicità TV
          </a>
          <a href="/pubblicita-radio" className="hover:text-[#e6d39a]">
            Pubblicità Radio
          </a>
        </div>

        <p className="mt-6 text-xs text-zinc-500">
          © {new Date().getFullYear()} InCambio · Tutti i diritti riservati
        </p>
      </div>
    </footer>
  );
}
