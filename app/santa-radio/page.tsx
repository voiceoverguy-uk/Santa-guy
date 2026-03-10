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
    "Listen to Santa Radio — non-stop Christmas music hosted by the real voice of Santa, Guy Harris. Stream free online or via the Santa Radio app on iOS.",
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
    description: "Stream free online, or download the Santa Radio app on iOS to listen on the go.",
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
              className="inline-block"
            >
              <img
                src="/images/available-on-the-app-store.webp"
                alt="Download Santa Radio on the App Store"
                className="h-12 w-auto hover:opacity-80 transition-opacity"
              />
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
