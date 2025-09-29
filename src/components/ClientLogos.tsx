import Image from "next/image";

type ClientItem = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  scale?: number;   // 1 = base, <1 più piccolo, >1 più grande
};

export default function ClientLogos() {
  const clients: ClientItem[] = [
    { src: "/clienti/granapadano.png", alt: "Logo Grana Padano", width: 320, height: 160, scale: 1.1 },
    { src: "/clienti/parconaturaviva.png", alt: "Logo Parco Natura Viva", width: 320, height: 160, scale: 1 },
    { src: "/clienti/shulz.png", alt: "Logo Shulz", width: 320, height: 160, scale: 1.5 },
    { src: "/clienti/pivagroup.png", alt: "Logo Piva Group", width: 320, height: 160, scale: 1.1 },
    { src: "/clienti/askoll.png", alt: "Logo Askoll", width: 320, height: 160, scale: 1 },
    { src: "/clienti/safariravenna.png", alt: "Logo Safari Ravenna", width: 320, height: 160, scale: 0.8 },
    { src: "/clienti/fiabilandia.png", alt: "Logo Fiabilandia", width: 320, height: 160, scale: 0.8 },
    { src: "/clienti/cinecittaworld.png", alt: "Logo Cinecittà World", width: 320, height: 160, scale: 1.15 },
  ];

  return (
    <section id="clienti" className="py-16 bg-black">
      <h2 className="text-center font-serif text-2xl text-[#f0e2a0] font-bold mb-12">
        Alcuni clienti
      </h2>

      <div className="mx-auto max-w-6xl px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center justify-items-center">
        {clients.map((c) => {
          const scale = c.scale ?? 1;
          return (
            <div key={c.alt} className="h-16 sm:h-20 md:h-24 flex items-center justify-center">
              <div className="relative" style={{ height: `${scale * 100}%` }}>
                <Image
                  src={c.src}
                  alt={c.alt}
                  width={c.width ?? 320}
                  height={c.height ?? 160}
                  loading="lazy"
                  sizes="(max-width: 640px) 40vw, (max-width: 768px) 30vw, 200px"
                  style={{ height: "100%", width: "auto", objectFit: "contain" }}
                  draggable={false}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
