"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
<img src="/logos/incambio.png" alt="InCambio" className="h-30 w-auto" />
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-6 text-sm text-white">
          {/* Dropdown Media */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="hover:text-[#e6d39a] transition"
            >
              Media partner ▾
            </button>
            {open && (
              <div className="absolute left-0 mt-2 w-56 rounded-md !bg-black shadow-lg border border-zinc-800 z-50">
                <ul className="py-2 text-sm">
                  {[
                    "Netflix",
                    "Sky",
                    "Prime Video",
                    "RAI Pubblicità",
                    "Radio Italia",
                    "RDS",
                    "Aeroporti di Roma",
                    "Grandi Stazioni",
                  ].map((item) => (
                    <li key={item}>
                      <Link
                        href={"#" + item.toLowerCase().replace(/\s+/g, "-")}
                        className="block px-4 py-2 text-white hover:bg-[#e6d39a]/20 hover:text-[#e6d39a]"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link href="#come-funziona" className="hover:text-[#e6d39a] transition">
            Come funziona
          </Link>
          <Link href="#casi" className="hover:text-[#e6d39a] transition">
            Casi
          </Link>
          <Link
            href="/valutazione"
            className="rounded-lg border border-[#e6d39a]/50 px-4 py-2 text-[#e6d39a] hover:bg-[#e6d39a]/10 transition"
          >
            Contatti
          </Link>
        </nav>
      </div>
    </header>
  );
}
