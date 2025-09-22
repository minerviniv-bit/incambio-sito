export default function ClientLogos() {
  const clients = [
    { src: "/clienti/granapadano.png", alt: "Grana Padano" },
    { src: "/clienti/parconaturaviva.png", alt: "Parco Natura Viva" },
    { src: "/clienti/shulz.png", alt: "Shulz" },
    { src: "/clienti/pivagroup.png", alt: "Piva Group" },
    { src: "/clienti/askoll.png", alt: "Askoll" },
    { src: "/clienti/safariravenna.png", alt: "Safari Ravenna" },
    { src: "/clienti/fiabilandia.png", alt: "Fiabilandia" },
    { src: "/clienti/cinecittaworld.png", alt: "Cinecittà World" },
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
            <img
              src={client.src}
              alt={client.alt}
              className="max-h-20 max-w-[160px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
