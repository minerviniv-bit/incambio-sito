// components/MediaLogos.tsx
import Image from "next/image";

type LogoItem = {
  src: string;
  alt: string;
  /** 1 = dimensione base; <1 più piccolo; >1 più grande */
  scale?: number;
};

export default function MediaLogos() {
  const logos: LogoItem[] = [
    { src: "/logos/netflix.jpg", alt: "Netflix", scale: 1 },
    { src: "/logos/sky.png", alt: "Sky", scale: 1 },
    { src: "/logos/primevideo.png", alt: "Prime Video", scale: 1 },
    { src: "/logos/rai-pubblicita.png", alt: "RAI Pubblicità", scale: 1 },
    { src: "/logos/radioitalia.png", alt: "Radio Italia", scale: 1 },
    { src: "/logos/rds.png", alt: "RDS", scale: 1 },
    { src: "/logos/adr.png", alt: "Aeroporti di Roma", scale: 1 },
    { src: "/logos/grandi-stazioni.png", alt: "Grandi Stazioni", scale: 1 },
    { src: "/logos/fb.png", alt: "Facebook", scale: 1 },
    { src: "/logos/istagram.png", alt: "Instagram", scale: 0.78 },   // ↓ più piccolo
    { src: "/logos/tiktok.png", alt: "TikTok", scale: 1 },
    { src: "/logos/youtube.png", alt: "YouTube", scale: 1 },
    { src: "/logos/spotify.png", alt: "Spotify", scale: 0.75 },       // ↓ più piccolo
    { src: "/logos/igp.png", alt: "Igp Decaux", scale: 1.28 },        // ↑ più grande
    { src: "/logos/sole.png", alt: "Il Sole 24 Ore", scale: 1.22 },   // ↑ più grande
    { src: "/logos/ilmessaggero.jpg", alt: "Il Messaggero", scale: 1.35 }, // ↑ più grande
  ];

  return (
    <section id="media" className="py-16 bg-black">
      <h2 className="text-center font-serif text-2xl text-[#e6d39a] mb-12">
        I nostri media partner
      </h2>

      {/* Griglia responsive, celle con altezza fissa: niente CLS */}
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center justify-items-center">
        {logos.map((logo) => {
          const scale = logo.scale ?? 1;
          return (
            <div key={logo.alt} className="h-16 sm:h-20 md:h-24 flex items-center justify-center">
              {/* wrapper che applica la scala in altezza mantenendo proporzioni */}
              <div className="relative" style={{ height: `${scale * 100}%` }}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={320}
                  height={160}
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
