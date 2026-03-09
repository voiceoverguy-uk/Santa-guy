const clients = [
  "BBC Radio 2",
  "BBC Radio 1",
  "Heart",
  "Capital",
  "ITV",
  "Tesco",
  "Butlins",
  "CBeebies",
];

export default function ClientLogos() {
  return (
    <section className="py-10 sm:py-14 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-widest text-gray-400 font-medium mb-8">
          Trusted by leading broadcasters and brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-14">
          {clients.map((client) => (
            <div
              key={client}
              className="px-4 py-2 bg-white rounded-lg border border-gray-100 shadow-sm"
            >
              <span className="text-sm font-medium text-gray-400">
                {client}
              </span>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-6 italic">
          Client logos placeholder — replace with actual logos
        </p>
      </div>
    </section>
  );
}
