import Image from "next/image";

export default function CasesShowcase() {
  const cases = [
    {
      img: "/cases/vino.png",
      alt: "Bottiglia di vino",
      number: "2.000",
      title: "BOTTIGLIE DI VINO",
      text: "Trasformate in pubblicità su Radio Italia",
    },
    {
      img: "/cases/pasta.png",
      alt: "Pasta",
      number: "80.000 KG",
      title: "DI PASTA",
      text: "Trasformate in pubblicità su Sky",
    },
    {
      img: "/cases/bici.png",
      alt: "Bicicletta elettrica",
      number: "300",
      title: "BICICLETTE ELETTRICHE",
      text: "Trasformate in pubblicità su Il Messaggero",
    },
    {
      img: "/cases/biglietto.png",
      alt: "Biglietti parco",
      number: "100.000",
      title: "BIGLIETTI INGRESSO AI PARCHI",
      text: "Trasformati in pubblicità televisiva",
    },
    {
      img: "/cases/hotel.png",
      alt: "Hotel",
      number: "15.000",
      title: "PERNOTTAMENTI IN HOTEL",
      text: "Trasformati in pubblicità Radiofonica",
    },
    {
      img: "/cases/finestre.png",
      alt: "Finestre",
      number: "3.000",
      title: "FINESTRE",
      text: "Trasformate in pubblicità su Affissione",
    },
  ];

  return (
    <section id="casi" className="relative py-20 bg-black">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-serif text-[#e6d39a] mb-12">Casi reali</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {cases.map((c) => (
            <div
              key={c.title}
              className="bg-zinc-900 rounded-[20px] overflow-hidden border border-zinc-800 shadow-lg"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={c.img}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                  className="object-cover"
                />
              </div>

              <div className="px-6 py-6 bg-black">
                <p className="text-3xl font-bold text-[#e6d39a]">{c.number}</p>
                <h3 className="mt-2 text-lg font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-zinc-400">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
