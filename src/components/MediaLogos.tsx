// components/MediaLogos.tsx
import Image from "next/image";

type LogoItem = {
  src: string;
  alt: string;
  scale?: number; // 1 = base; <1 più piccolo; >1 più grande
};

export default function MediaLogos() {
  const logos: LogoItem[] = [
    { src: "/logos/netflix.jpg", alt: "Logo Netflix", scale: 1 },
    { src: "/logos/sky.png", alt: "Logo Sky", scale: 1 },
    { src: "/logos/primevideo.png", alt: "Logo Prime Video", scale: 1 },
    { src: "/logos/rai-pubblicita.png", alt: "Logo RAI Pubblicità", scale: 1 },
    { src: "/logos/radioitalia.png", alt: "Logo Radio Italia", scale: 1 },
    { src: "/logos/rds.png", alt: "Logo RDS Radio Dimensione Suono", scale: 1 },
    { src: "/logos/adr.png", alt: "Logo Aeroporti di Roma", scale: 1 },
    { src: "/logos/grandi-stazioni.png", alt: "Logo Grandi Stazioni", scale: 1 },
    { src: "/logos/fb.png", alt: "Logo Facebook", scale: 1 },
    { src: "/logos/istagram.png", alt: "Logo Instagram", scale: 0.78 },
    { src: "/logos/tiktok.png", alt: "Logo TikTok", scale: 1 },
    { src: "/logos/youtube.png", alt: "Logo YouTube", scale: 1 },
    { src: "/logos/spotify.png", alt: "Logo Spotify", scale: 0.75 },
    { src: "/logos/igp.png", alt: "Logo IGP Decaux", scale: 1.28 },
    { src: "/logos/sole.png", alt: "Logo Il Sole 24 Ore", scale: 1.22 },
    { src: "/logos/ilmessaggero.jpg", alt: "Logo Il Messaggero", scale: 1.35 },
  ];

  return (
    <section id="media" className="py-16 bg-black">
      {/* CONTRASTO MIGLIORATO: colore più chiaro + font-bold */}
      <h2 className="text-center font-serif text-2xl text-[#f0e2a0] font-bold mb-12">
        I nostri media partner
      </h2>

      <div className="mx-auto max-w-6xl px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center justify-items-center">
        {logos.map((logo) => {
          const scale = logo.scale ?? 1;
          return (
            <div key={logo.alt} className="h-16 sm:h-20 md:h-24 flex items-center justify-center">
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
