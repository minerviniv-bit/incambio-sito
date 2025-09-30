// src/components/BelowFold.tsx
"use client";

import dynamic from "next/dynamic";

const MediaLogos    = dynamic(() => import("./MediaLogos"),    { ssr: false, loading: () => null });
const Steps         = dynamic(() => import("./Steps"),         { ssr: false, loading: () => null });
const CasesShowcase = dynamic(() => import("./CasesShowcase"), { ssr: false, loading: () => null });
const ClientLogos   = dynamic(() => import("./ClientLogos"),   { ssr: false, loading: () => null });

export default function BelowFold() {
  return (
    <>
      {/* LOGHI MEDIA */}
      <MediaLogos />

      {/* COME FUNZIONA */}
      <section id="come-funziona">
        <Steps />
      </section>

      {/* CASI REALI */}
      <section id="casi">
        <CasesShowcase />
      </section>

      {/* CLIENTI */}
      <ClientLogos />
    </>
  );
}
