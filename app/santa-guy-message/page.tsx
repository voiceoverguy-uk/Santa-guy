import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, PoundSterling, Star, ExternalLink } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: {
    absolute: "Santa Message | Order a Christmas Santa call today",
  },
  description:
    "Guy Harris, the UK's most recognisable Santa voice, delivers personalised Santa messages and Santa calls that delight children and adults alike.",
  alternates: { canonical: "https://www.santaguy.co.uk/santa-guy-message" },
  openGraph: {
    title: "Santa Message | Order a Christmas Santa call today",
    description:
      "Guy Harris, the UK's most recognisable Santa voice, delivers personalised Santa messages and Santa calls that delight children and adults alike.",
    url: "https://www.santaguy.co.uk/santa-guy-message",
    type: "website",
    locale: "en_GB",
    siteName: "SantaGuy",
    images: [
      {
        url: "https://www.santaguy.co.uk/santa-guy-logo-og.png",
        width: 1200,
        height: 630,
        alt: "Santa Message — Personalised Santa Messages from Guy Harris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Santa Message | Order a Christmas Santa call today",
    description:
      "Guy Harris, the UK's most recognisable Santa voice, delivers personalised Santa messages and Santa calls that delight children and adults alike.",
    images: ["https://www.santaguy.co.uk/santa-guy-logo-og.png"],
    site: "@voiceoverman",
    creator: "@voiceoverman",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Personalised Santa Messages",
  serviceType: "Personalised Santa Messages / Santa Calls",
  description:
    "Guy Harris, the UK's most recognisable Santa voice, delivers personalised Santa messages and Santa calls that delight children and adults alike.",
  url: "https://www.santaguy.co.uk/santa-guy-message",
  provider: {
    "@type": "Person",
    name: "Guy Harris",
    alternateName: "Santa Guy",
    url: "https://www.santaguy.co.uk",
  },
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
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
      name: "Santa Message",
      item: "https://www.santaguy.co.uk/santa-guy-message",
    },
  ],
};

export default function SantaMessagePage() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={breadcrumbSchema} />

      <Hero
        title="Personalised Santa Messages"
        subtitle="Bespoke video messages from the real voice of Santa, 2 films to choose from. North Pole Tour and Fix the Sleigh. Your children's name is spoken by Santa. Not using AI."
        primaryCTA={{ label: "Enquire About Santa Messages", href: "/contact-santa-guy" }}
        compact
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                A Message from Santa, Personally for You
              </h2>
              <div className="mt-4 w-16 h-1 bg-santa-red rounded-full" />
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Imagine receiving a personalised video message with the real Voice of Santa, the same
                  voice trusted by the BBC, ITV, and the UK&apos;s biggest brands. That&apos;s exactly what
                  Festive Studio delivers.
                </p>
                <p>
                  Take a tour of the North Pole or join in the catchy song Fix the Sleigh. The videos
                  can be downloaded in minutes after your personalisation.
                </p>
                <p>
                  Or for something even quicker a{" "}
                  <a
                    href="https://festivestudio.com/store/santa-radio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-santa-red hover:text-santa-red-dark font-medium"
                  >
                    personalised Audio Message
                  </a>
                  . Custom build a message to your child from over 12,000 names available. Download in
                  seconds and share on social media.
                </p>
                <p>
                  If you are looking for a truly memorable gift for someone close to you, then a
                  personalised Santa Video or Audio message is the premium choice.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://festivestudio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-santa-red text-white font-semibold rounded-lg hover:bg-santa-red-dark transition-colors"
                >
                  <ExternalLink size={16} />
                  Enquire About Festive Studio
                </a>
                <Link
                  href="/contact-santa-guy"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-lg hover:border-santa-red hover:text-santa-red transition-colors"
                >
                  Enquire Directly
                </Link>
              </div>
            </div>

            <img
              src="/images/message-from-santa.webp"
              alt="Personalised Santa messages from Guy Harris — Voice of Father Christmas and Santa voiceover artist"
              className="rounded-2xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Who Are Santa Messages For?"
            subtitle="Perfect for brands, agencies, and anyone who wants something truly special"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Brands & Agencies",
                description: "Create unforgettable festive moments for your clients and campaigns with a premium bespoke Santa message.",
                icon: Star,
              },
              {
                title: "Kids Advent Gifts",
                description: "Pick a day in December and let a message from Santa be a great bonus Advent gift. Surprise the kids when they hear their own name by Santa.",
                icon: CalendarDays,
              },
              {
                title: "Costs",
                description: "Audio messages from £3, Video messages from £10 and Custom bespoke messages please enquire and lets make it a magical Christmas.",
                icon: PoundSterling,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm text-center"
              >
                <div className="w-12 h-12 bg-santa-cream rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-santa-red" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Santa messages are delivered by{" "}
            <Link href="/guy-harris-santa-voice" className="text-santa-red hover:text-santa-red-dark font-medium">Guy Harris</Link>
            , the{" "}
            <Link href="/" className="text-santa-red hover:text-santa-red-dark font-medium">UK&apos;s Official Voice of Santa</Link>.
          </p>
        </div>
      </section>

      <CTASection
        title="Ready to Order a Personalised Santa Message?"
        description={<>Visit Festive Studio to create your bespoke Father Christmas video, from the UK&apos;s best{" "}<a href="https://www.voiceoverguy.co.uk/voice-of-santa-guy-harris" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-gray-200 transition-colors">Voice of Santa</a>.</>}
        primaryCTA={{ label: "Enquire About Santa Messages", href: "/contact-santa-guy" }}
      />
    </>
  );
}
