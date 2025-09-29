import Image from "next/image";

export default function ClientLogos() {
  const clients = [
    { src: "/clienti/granapadano.png", alt: "Grana Padano", width: 160, height: 80 },
    { src: "/clienti/parconaturaviva.png", alt: "Parco Natura Viva", width: 160, height: 80 },
    { src: "/clienti/shulz.png", alt: "Shulz", width: 160, height: 80 },
    { src: "/clienti/pivagroup.png", alt: "Piva Group", width: 160, height: 80 },
    { src: "/clienti/askoll.png", alt: "Askoll", width: 160, height: 80 },
    { src: "/clienti/safariravenna.png", alt: "Safari Ravenna", width: 160, height: 80 },
    { src: "/clienti/fiabilandia.png", alt: "Fiabilandia", width: 160, height: 80 },
    { src: "/clienti/cinecittaworld.png", alt: "Cinecittà World", width: 160, height: 80 },
  ];

  return (
    <section id="clienti" className="py-16 bg-black">
      <h2 className="text-center font-serif text-2xl text-[#e6d39a] mb-12">
        Alcuni clienti
      </h2>
      <div className="mx-auto max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 items-center justify-items-center">
        {clients.map((client) => (
          <div
            key={client.alt}
            className="flex items-center justify-center w-40 h-24 bg-transparent"
          >
            <Image
              src={client.src}
              alt={client.alt}
              width={client.width}
              height={client.height}
              className="max-h-20 max-w-[160px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
