import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black/80 pt-6 pb-8 text-center text-sm text-zinc-200 !mt-0 overflow-x-hidden">
      <div className="mx-auto max-w-6xl px-6">

        {/* Logo */}
        <div className="mb-4 flex justify-center">
          <Image
            src="/logos/incambio.png"
            alt="InCambio"
            width={128}
            height={128}
            className="h-26 w-auto"
            priority
          />
        </div>

        {/* Contatti */}
        <div className="space-y-1 leading-tight mb-4">
          <p>
            Contatti:{" "}
            <a
              href="mailto:info@incambio.eu"
              className="text-[#e6d39a] underline-offset-2 hover:underline"
            >
              info@incambio.eu
            </a>{" "}
            ·{" "}
            <a
              href="tel:+393288410612"
              className="text-[#e6d39a] underline-offset-2 hover:underline"
            >
              +39 328 841 0612
            </a>
          </p>
          <p>Sede: Viale di Villa Grazioli 1, 00198 Roma</p>
        </div>

        {/* Link SEO */}
        <nav aria-label="Link utili" className="mt-4 mb-4">
          <ul className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs">
            <li><a href="/pubblicita-cambio-merce" className="hover:text-[#e6d39a]">Pubblicità in cambio merce</a></li>
            <li><a href="/cambio-merce" className="hover:text-[#e6d39a]">Cambio merce</a></li>
            <li><a href="/baratto-pubblicita" className="hover:text-[#e6d39a]">Baratto pubblicitario</a></li>
            <li><a href="/pubblicita-roma" className="hover:text-[#e6d39a]">Pubblicità Roma</a></li>
            <li><a href="/pubblicita-tv" className="hover:text-[#e6d39a]">Pubblicità TV</a></li>
            <li><a href="/pubblicita-radio" className="hover:text-[#e6d39a]">Pubblicità Radio</a></li>
          </ul>
        </nav>

        {/* Copyright */}
        <p className="mt-2 text-xs text-zinc-400">
          © {new Date().getFullYear()} InCambio · Tutti i diritti riservati
        </p>
      </div>
    </footer>
  );
}
