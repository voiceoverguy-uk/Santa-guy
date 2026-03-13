const clients = [
  { name: "BBC Radio 2", src: "/clients/bbc-2.png" },
  { name: "BBC Radio 1", src: "/clients/bbc-radio-1.png" },
  { name: "Heart", src: "/clients/heart.png" },
  { name: "Capital", src: "/clients/capital.png" },
  { name: "ITV", src: "/clients/itv.png" },
  { name: "Global", src: "/clients/global.png" },
  { name: "Bauer Media", src: "/clients/bauer.png" },
  { name: "GB News", src: "/clients/gb-news.png" },
  { name: "CBeebies", src: "/clients/cbeebies.png" },
  { name: "The Masked Singer", src: "/clients/the-masked-singer.png" },
  { name: "Tesco", src: "/clients/tesco.png" },
  { name: "Sainsbury's", src: "/clients/sainsburys.png" },
  { name: "Asda", src: "/clients/asda.png" },
  { name: "Morrisons", src: "/clients/morrisons.png" },
  { name: "Poundland", src: "/clients/poundland.png" },
  { name: "Coca-Cola", src: "/clients/coca-cola.png" },
  { name: "Butlins", src: "/clients/butlins.png" },
  { name: "Smyths Toys", src: "/clients/smyths-toys.png" },
];

export default function ClientLogos() {
  return (
    <section className="py-10 sm:py-14 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-widest text-gray-400 font-medium mb-8">
          Trusted by leading broadcasters and brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 lg:gap-12">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center h-10 sm:h-12"
            >
              <img
                src={client.src}
                alt={`${client.name} — Guy Harris, Voice of Santa and Santa Voiceover Artist`}
                className="h-full w-auto max-w-[100px] sm:max-w-[120px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
