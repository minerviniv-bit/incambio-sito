"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logos/incambio.png"
            alt="InCambio"
            width={120}     // scegli larghezza reale del tuo logo
            height={40}     // scegli altezza reale del tuo logo
            priority        // carica subito (essendo il logo è critico)
            className="h-25 w-auto"
          />
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-6 text-sm text-white">
          <Link href="/#come-funziona" className="hover:text-[#e6d39a] transition">
            Come funziona
          </Link>
          <Link href="/#casi" className="hover:text-[#e6d39a] transition">
            Casi
          </Link>
          <Link
            href="/valutazione"
            className="rounded-lg border border-[#e6d39a]/50 px-4 py-2 text-[#e6d39a] hover:bg-[#e6d39a]/10 transition"
          >
            Richiedi valutazione
          </Link>
          <Link href="/contatti" className="hover:text-[#e6d39a] transition">
            Contatti
          </Link>
        </nav>
      </div>
    </header>
  );
}
