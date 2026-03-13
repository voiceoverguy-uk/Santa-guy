import Link from "next/link";

const moreLinks = [
  { label: "Santa Message", href: "/santa-guy-message" },
  { label: "Santa Voice Demo", href: "/santa-voice-demo" },
  { label: "Santa Ringtones", href: "/santa-ringtones" },
  { label: "Santa Text Alerts", href: "/santa-text-alerts" },
];

const externalLinks = [
  { label: "VoiceoverGuy", href: "https://www.voiceoverguy.co.uk" },
  { label: "Halloween Voice", href: "https://halloweenvoice.co.uk" },
  { label: "Voice of God", href: "https://www.voiceofgod.co.uk" },
  { label: "Pathe Voice", href: "https://www.pathevoice.co.uk" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <Link href="/" className="inline-block mb-4">
              <img
                src="/santaguy-logo-white.png"
                alt="Guy Harris — Voice of Santa | Santa Voiceover | Father Christmas Voice | Voice of Father Christmas | SantaGuy.co.uk"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              The UK&apos;s trusted voice of Santa. Professional Santa voiceover for
              radio, TV, podcasts, brands, and festive campaigns.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              More
            </h3>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {moreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Also By Guy Harris
            </h3>
            <ul className="space-y-2">
              {externalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label} &rarr;
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2000–{new Date().getFullYear()} SantaGuy / Guy Harris. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
