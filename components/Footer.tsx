import Link from "next/link";
import EmailButton from "./EmailButton";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "About Santa Guy", href: "/guy-harris-santa-voice" },
  { label: "Hire Santa Voice", href: "/hire-santa-voice" },
  { label: "Santa Apps", href: "/santa-apps" },
  { label: "Santa Radio", href: "/santa-radio" },
  { label: "Contact", href: "/contact-santa-guy" },
];

const supportLinks = [
  { label: "Santa Message", href: "/santa-guy-message" },
  { label: "Santa Voice Demo", href: "/santa-voice-demo" },
  { label: "Santa Ringtones", href: "/santa-ringtones" },
  { label: "Santa Text Alerts", href: "/santa-text-alerts" },
];

const externalLinks = [
  { label: "VoiceoverGuy", href: "https://www.voiceoverguy.co.uk", external: true },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="inline-block mb-4">
              <img
                src="/santaguy-logo-white.png"
                alt="SantaGuy"
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
              Pages
            </h3>
            <ul className="space-y-2">
              {mainLinks.map((link) => (
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
              More
            </h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
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
            <div className="mt-6">
              <EmailButton
                label="Email Santa Guy"
                className="text-sm text-gray-400 hover:text-white transition-colors underline hover:no-underline cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} SantaGuy / Guy Harris. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
