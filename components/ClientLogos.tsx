"use client";

import { useMemo } from "react";

const clients = [
  { name: "BBC Radio 1", src: "/clients/bbc-1.png" },
  { name: "BBC Radio 2", src: "/clients/bbc-2.png" },
  { name: "Heart", src: "/clients/heart.png" },
  { name: "Capital", src: "/clients/capital.png" },
  { name: "ITV", src: "/clients/itv.png" },
  { name: "CBeebies", src: "/clients/cbeebies.png" },
  { name: "Tesco", src: "/clients/tesco.png" },
  { name: "Sainsbury's", src: "/clients/sainsburys.png" },
  { name: "Morrisons", src: "/clients/morrisons.png" },
  { name: "Coca-Cola", src: "/clients/coca-cola.png" },
  { name: "Butlins", src: "/clients/butlins.png" },
  { name: "Centre Parcs", src: "/clients/centre-parcs.png" },
  { name: "Smyths Toys", src: "/clients/smyths-toys.png" },
  { name: "P&O Cruises", src: "/clients/p-and-o.png" },
  { name: "The Range", src: "/clients/the-range.png" },
  { name: "Asda", src: "/clients/asda.png" },
  { name: "Global", src: "/clients/global.png" },
  { name: "Bauer Media", src: "/clients/bauer.png" },
  { name: "GB News", src: "/clients/gb-news.png" },
  { name: "SnowDome", src: "/clients/snowdome.png" },
];

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function LogoSet({ logos, ariaHidden }: { logos: typeof clients; ariaHidden?: boolean }) {
  return (
    <div className="marquee-logo-set" aria-hidden={ariaHidden || undefined}>
      {logos.map((client) => (
        <div key={client.name} className="marquee-logo-wrapper">
          <img
            src={client.src}
            alt={ariaHidden ? "" : `${client.name} — Guy Harris, Voice of Santa and Santa Voiceover Artist`}
            className="marquee-logo"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

export default function ClientLogos() {
  const shuffled = useMemo(() => shuffle(clients), []);

  return (
    <section className="py-10 sm:py-14 bg-gray-50 border-y border-gray-100" aria-label="Client logos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-widest text-gray-400 font-medium mb-8">
          Trusted as the Voice of Santa by leading broadcasters and global brands
        </p>
      </div>

      <div className="marquee-container">
        <div className="marquee-track">
          <LogoSet logos={shuffled} />
          <LogoSet logos={shuffled} ariaHidden />
        </div>
      </div>
    </section>
  );
}
