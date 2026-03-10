import type { Metadata } from "next";
import Link from "next/link";
import { Radio, Music, Gift, Headphones } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import StructuredData from "@/components/StructuredData";
import SantaRadioPlayer from "@/components/SantaRadioPlayer";

export const metadata: Metadata = {
  title: "Santa Radio — Christmas Music Hosted by the Real Voice of Santa",
  description:
    "Listen to Santa Radio — non-stop Christmas music hosted by the real voice of Santa, Guy Harris. Stream free online or via the Santa Radio app on iOS and Android.",
  alternates: { canonical: "/santa-radio" },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Santa Radio",
  description:
    "Non-stop Christmas music hosted by the real voice of Santa. Listen free online or via app.",
  url: "https://santaguy.co.uk/santa-radio",
};

const features = [
  {
    title: "Non-Stop Christmas Music",
    description: "The best Christmas songs from classic favourites to modern festive hits, playing 24/7.",
    icon: Music,
  },
  {
    title: "Hosted by the Real Santa",
    description: "Santa Radio is hosted by the real voice of Santa, Guy Harris — bringing warmth and authenticity.",
    icon: Headphones,
  },
  {
    title: "Festive Fun & Content",
    description: "Christmas stories, festive facts, seasonal news, and all the magic of the holiday season.",
    icon: Gift,
  },
  {
    title: "Listen Anywhere",
    description: "Stream free online, or download the Santa Radio app on iOS and Android to listen on the go.",
    icon: Radio,
  },
];

export default function SantaRadioPage() {
  return (
    <>
      <StructuredData data={pageSchema} />

      <Hero
        title="Santa Radio"
        subtitle="Non-stop Christmas music hosted by the real voice of Santa. The UK's favourite festive radio station — listen free online or via the Santa Radio app."
        primaryCTA={{ label: "Listen Live", href: "#listen" }}
        secondaryCTA={{ label: "Download the App", href: "/santa-apps" }}
        logoSrc="/santa-radio-logo.png"
        compact
      />

      <section id="listen" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Listen to Santa Radio"
            subtitle="Christmas music, festive fun, and the voice of Santa — all in one place"
          />

          <SantaRadioPlayer />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm text-center"
              >
                <div className="w-12 h-12 bg-santa-cream rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-santa-red" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Get the Santa Radio App
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Download the free Santa Radio app and take Christmas music with you wherever you go.
          </p>
          <div className="flex items-center justify-center">
            <a
              href="https://apps.apple.com/us/app/santa-radio/id1021183593"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Download on the App Store
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Want to explore all Santa apps?{" "}
            <Link href="/santa-apps" className="text-santa-red hover:text-santa-red-dark font-medium">
              View all Santa Apps &rarr;
            </Link>
          </p>
        </div>
      </section>

      <CTASection
        title="Want Santa on Your Radio Station?"
        description="Hire the real voice of Santa for your station's Christmas campaign, imaging, or guest appearances."
        primaryCTA={{ label: "Check Availability", href: "/hire-santa-voice" }}
        secondaryCTA={{ label: "Contact", href: "/contact-santa-guy" }}
      />
    </>
  );
}
