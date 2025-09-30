import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/80 py-10 text-center text-sm text-zinc-200">
      <div className="mx-auto max-w-6xl px-6">
        {/* Logo */}
        <div className="mb-4 flex justify-center">
          <Image
            src="/logos/incambio.png"
            alt="InCambio"
            width={160}
            height={160}
            className="h-40 w-auto"
            priority
          />
        </div>

        <p className="mb-2 text-zinc-100">Pubblicità in cambio merce</p>

        {/* Contatti */}
        <p className="mb-1">
          Contatti:{" "}
          <a href="mailto:info@incambio.eu" className="text-[#e6d39a] underline-offset-2 hover:underline">
            info@incambio.eu
          </a>{" "}
          ·{" "}
          <a href="tel:+393288410612" className="text-[#e6d39a] underline-offset-2 hover:underline">
            +39 328 841 0612
          </a>
        </p>
        <p className="mb-1">Sede: Viale di Villa Grazioli 1, 00198 Roma</p>

        {/* Link SEO */}
        <nav aria-label="Link utili" className="mt-6">
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-zinc-200">
            <li><a href="/pubblicita-cambio-merce" className="hover:text-[#e6d39a]">Pubblicità in cambio merce</a></li>
            <li><a href="/cambio-merce" className="hover:text-[#e6d39a]">Cambio merce</a></li>
            <li><a href="/baratto-pubblicita" className="hover:text-[#e6d39a]">Baratto pubblicitario</a></li>
            <li><a href="/pubblicita-roma" className="hover:text-[#e6d39a]">Pubblicità Roma</a></li>
            <li><a href="/pubblicita-tv" className="hover:text-[#e6d39a]">Pubblicità TV</a></li>
            <li><a href="/pubblicita-radio" className="hover:text-[#e6d39a]">Pubblicità Radio</a></li>
          </ul>
        </nav>

        <p className="mt-6 text-xs text-zinc-300">
          © {new Date().getFullYear()} InCambio · Tutti i diritti riservati
        </p>
      </div>
    </footer>
  );
}
