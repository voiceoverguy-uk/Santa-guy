import type { Metadata } from "next";
import { Clock, Mic, Mail, Shield, Radio, Zap } from "lucide-react";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import EmailButton from "@/components/EmailButton";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Santa | Enquire About Santa Voiceovers",
  },
  description:
    "Contact Guy Harris, the UK's official Santa voice, to enquire about Santa voiceovers, Christmas campaigns, radio promotions or festive projects.",
  alternates: { canonical: "https://www.santaguy.co.uk/contact-santa-guy" },
  openGraph: {
    title: "Contact Santa | Enquire About Santa Voiceovers",
    description:
      "Contact Guy Harris, the UK's official Santa voice, to enquire about Santa voiceovers, Christmas campaigns, radio promotions or festive projects.",
    url: "https://www.santaguy.co.uk/contact-santa-guy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Santa | Enquire About Santa Voiceovers",
    description:
      "Contact Guy Harris, the UK's official Santa voice, to enquire about Santa voiceovers, Christmas campaigns, radio promotions or festive projects.",
    site: "@voiceoverman",
    creator: "@voiceoverman",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Santa | Enquire About Santa Voiceovers",
  description: "Contact Guy Harris, the UK's official Santa voice, to enquire about Santa voiceovers, Christmas campaigns, radio promotions or festive projects.",
  url: "https://www.santaguy.co.uk/contact-santa-guy",
  inLanguage: "en-GB",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.santaguy.co.uk",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact Santa",
      item: "https://www.santaguy.co.uk/contact-santa-guy",
    },
  ],
};

const trustBadges = [
  { label: "BBC Trusted", icon: Shield },
  { label: "Broadcast Quality", icon: Radio },
  { label: "Fast Response", icon: Zap },
];

export default function ContactPage() {
  return (
    <>
      <StructuredData data={pageSchema} />
      <StructuredData data={breadcrumbSchema} />

      <Hero
        title="Contact Santa"
        subtitle="Get in touch to discuss your campaign, broadcast, or festive project."
        compact
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-3 mb-6">
                {trustBadges.map((badge) => (
                  <span
                    key={badge.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-xs font-medium text-gray-600"
                  >
                    <badge.icon className="w-3.5 h-3.5 text-santa-red" />
                    {badge.label}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Check Availability
              </h2>
              <p className="text-gray-600 mb-2">
                Fill in the form below and Guy will reply quickly to confirm availability and discuss your project.
              </p>
              <p className="text-sm text-gray-500 mb-8">
                Guy Harris is the <a href="/guy-harris-santa-voice" className="text-santa-red hover:text-santa-red-dark font-medium">Voice of Santa</a> trusted by BBC Radio 2, BBC Radio 1, Heart, Capital, ITV, Tesco, Butlins and CBeebies. Learn more on the <a href="/" className="text-santa-red hover:text-santa-red-dark font-medium">Santa Guy homepage</a> or request a <a href="/santa-guy-message" className="text-santa-red hover:text-santa-red-dark font-medium">personalised Santa message</a>.
              </p>
              <ContactForm />
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-5 h-5 text-santa-red" />
                  <h3 className="font-semibold text-gray-900">Email Directly</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Prefer email? Send your project details directly to Guy.
                </p>
                <EmailButton />
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-santa-red" />
                  <h3 className="font-semibold text-gray-900">Fast Response</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Guy usually replies within a few hours during the festive season, and within 24 hours at other times. Urgent projects? Just mention it in your message.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Mic className="w-5 h-5 text-santa-red" />
                  <h3 className="font-semibold text-gray-900">Also Available As</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Need non-Santa voiceover too? Guy&apos;s{" "}
                  <a href="https://www.voiceoverguy.co.uk/apple-voice-style" target="_blank" rel="noopener noreferrer" className="text-santa-red hover:text-santa-red-dark font-medium">regular voice</a>,{" "}
                  <a href="https://www.voiceoverguy.co.uk/character-voiceover" target="_blank" rel="noopener noreferrer" className="text-santa-red hover:text-santa-red-dark font-medium">Characters</a>,{" "}
                  <a href="https://www.voiceoverguy.co.uk/david-attenborough-voice" target="_blank" rel="noopener noreferrer" className="text-santa-red hover:text-santa-red-dark font-medium">David Attenborough</a>,{" "}
                  <a href="https://www.voiceoverguy.co.uk/football-commentator-voice" target="_blank" rel="noopener noreferrer" className="text-santa-red hover:text-santa-red-dark font-medium">Football Commentator</a>, visit Guy&apos;s main VoiceoverGuy site:
                </p>
                <a
                  href="https://www.voiceoverguy.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-santa-red hover:text-santa-red-dark transition-colors"
                >
                  voiceoverguy.co.uk &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src="/images/santa-guy-montage.webp"
            alt="Guy Harris montage — Voice of Santa, Santa voiceover artist, and Voice of Father Christmas"
            className="rounded-xl w-full object-cover"
          />
        </div>
      </section>
    </>
  );
}
