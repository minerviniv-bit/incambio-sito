import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-72px)] md:h-[calc(100vh-88px)] overflow-hidden">
      <Image
        src="/hero/hero-2560.png"
        alt="Calice di vino – Trasforma il tuo prodotto in visibilità"
        fill
        priority
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 1920px"
        quality={85}
      />
      <h1 className="sr-only">TRASFORMA IL TUO PRODOTTO IN VISIBILITÀ</h1>
      <p className="sr-only">Pubblicità in cambio merce. Semplice, misurabile, veloce.</p>
    </section>
  );
}
