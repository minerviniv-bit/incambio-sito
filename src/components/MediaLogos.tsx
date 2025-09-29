import Image from "next/image";

export default function MediaLogos() {
  const logos = [
    { src: "/logos/netflix.jpg", alt: "Netflix" },
    { src: "/logos/sky.png", alt: "Sky" },
    { src: "/logos/primevideo.png", alt: "Prime Video" },
    { src: "/logos/rai-pubblicita.png", alt: "RAI Pubblicità" },
    { src: "/logos/radioitalia.png", alt: "Radio Italia" },
    { src: "/logos/rds.png", alt: "RDS" },
    { src: "/logos/adr.png", alt: "Aeroporti di Roma" },
    { src: "/logos/grandi-stazioni.png", alt: "Grandi Stazioni" },
    { src: "/logos/fb.png", alt: "Facebook" },
    { src: "/logos/istagram.png", alt: "Instagram" },
    { src: "/logos/tiktok.png", alt: "TikTok" },
    { src: "/logos/youtube.png", alt: "YouTube" },
    { src: "/logos/spotify.png", alt: "Spotify" },
    { src: "/logos/igp.png", alt: "Igp Decaux" },
    { src: "/logos/sole.png", alt: "Il Sole 24 Ore" },
    { src: "/logos/ilmessaggero.jpg", alt: "Il Messaggero" },
  ];

  return (
    <section id="media" className="py-16 bg-black">
      <h2 className="text-center font-serif text-2xl text-[#e6d39a] mb-12">
        I nostri media partner
      </h2>
      <div className="mx-auto max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 items-center justify-items-center">
        {logos.map((logo) => {
          const isSpecial =
            logo.alt === "Igp Decaux" || logo.alt === "Il Sole 24 Ore";

          return (
            <div
              key={logo.alt}
              className="flex items-center justify-center w-48 h-24 bg-transparent"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={180} // puoi regolare in base ai file reali
                height={isSpecial ? 100 : 80}
                className={`${isSpecial ? "max-h-32" : "max-h-24"} object-contain`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
