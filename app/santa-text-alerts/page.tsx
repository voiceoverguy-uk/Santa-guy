import type { Metadata } from "next";
import Link from "next/link";
import { Bell, Smartphone, Music } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: {
    absolute: "Santa Text Alerts | Festive Messages from Santa",
  },
  description:
    "Sign up for festive Santa text alerts and Christmas messages from the voice of Father Christmas, Guy Harris.",
  alternates: { canonical: "https://www.santaguy.co.uk/santa-text-alerts" },
  openGraph: {
    title: "Santa Text Alerts | Festive Messages from Santa",
    description:
      "Sign up for festive Santa text alerts and Christmas messages from the voice of Father Christmas, Guy Harris.",
    url: "https://www.santaguy.co.uk/santa-text-alerts",
    siteName: "SantaGuy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Santa Text Alerts | Festive Messages from Santa",
    description:
      "Sign up for festive Santa text alerts and Christmas messages from the voice of Father Christmas, Guy Harris.",
    site: "@voiceoverman",
    creator: "@voiceoverman",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Santa Text Alerts",
  description: "Sign up for festive Santa text alerts and Christmas messages from the voice of Father Christmas, Guy Harris.",
  url: "https://www.santaguy.co.uk/santa-text-alerts",
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
      name: "Santa Text Alerts",
      item: "https://www.santaguy.co.uk/santa-text-alerts",
    },
  ],
};

export default function SantaTextAlertsPage() {
  return (
    <>
      <StructuredData data={pageSchema} />
      <StructuredData data={breadcrumbSchema} />

      <Hero
        title="Santa Text Alerts"
        subtitle="Make every message notification festive with free Santa text alert tones featuring the real voice of Santa. Download and set as your notification sound."
        compact
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Festive Text Alert Sounds"
            subtitle="Short, fun notification tones from the real voice of Santa"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Alert Tones",
                description: "Short festive notification sounds perfect for text messages and app alerts.",
                icon: Bell,
              },
              {
                title: "Easy to Use",
                description: "Simple download and setup. Works on most smartphones and devices.",
                icon: Smartphone,
              },
              {
                title: "Multiple Options",
                description: "Choose from a range of different Santa alert sounds to match your mood.",
                icon: Music,
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

          <div className="bg-santa-cream rounded-xl p-8 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Downloads Coming Soon</h3>
            <p className="text-gray-600 text-sm max-w-lg mx-auto">
              Santa text alert tones will be available for free download shortly.
              In the meantime, check out the Santa Ringtones for full-length festive ringtones.
            </p>
            <Link
              href="/santa-ringtones"
              className="inline-flex items-center mt-4 text-sm font-medium text-santa-red hover:text-santa-red-dark transition-colors"
            >
              Browse Santa Ringtones &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 leading-relaxed">
            Want more festive fun? Explore{" "}
            <Link href="/santa-apps" className="text-santa-red hover:text-santa-red-dark font-medium">
              Santa Apps
            </Link>{" "}
            and{" "}
            <Link href="/santa-ringtones" className="text-santa-red hover:text-santa-red-dark font-medium">
              Santa Ringtones
            </Link>{" "}
            for the full collection of free Christmas downloads. Learn more about{" "}
            <Link href="/guy-harris-santa-voice" className="text-santa-red hover:text-santa-red-dark font-medium">
              Guy Harris, the voice of Santa
            </Link>{" "}
            or{" "}
            <Link href="/santa-guy-message" className="text-santa-red hover:text-santa-red-dark font-medium">
              get a personalised Santa message
            </Link>. Visit the{" "}
            <Link href="/" className="text-santa-red hover:text-santa-red-dark font-medium">
              Santa voice
            </Link>{" "}
            homepage for more.
          </p>
        </div>
      </section>

      <CTASection
        title="Need the Santa Voice for Your Project?"
        description="Hire Guy Harris for professional Santa voiceover. Trusted by the UK's biggest broadcasters and brands."
        primaryCTA={{ label: "Check Availability", href: "/hire-santa-voice" }}
        secondaryCTA={{ label: "Contact", href: "/contact-santa-guy" }}
      />
    </>
  );
}
