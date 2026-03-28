import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import HirePageDemos from "@/components/HirePageDemos";
import CTASection from "@/components/CTASection";
import VideoCard from "@/components/VideoCard";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: {
    absolute: "Santa Voice Demo | Hear the Voice of Father Christmas",
  },
  description:
    "Listen to the official Santa voice of Guy Harris. Hear festive Father Christmas voiceovers used in TV, radio promotions and Christmas campaigns.",
  alternates: { canonical: "https://www.santaguy.co.uk/santa-voice-demo" },
  openGraph: {
    title: "Santa Voice Demo | Hear the Voice of Father Christmas",
    description:
      "Listen to the official Santa voice of Guy Harris. Hear festive Father Christmas voiceovers used in TV, radio promotions and Christmas campaigns.",
    url: "https://www.santaguy.co.uk/santa-voice-demo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Santa Voice Demo | Hear the Voice of Father Christmas",
    description:
      "Listen to the official Santa voice of Guy Harris. Hear festive Father Christmas voiceovers used in TV, radio promotions and Christmas campaigns.",
    site: "@voiceoverman",
    creator: "@voiceoverman",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Santa Voice Demo | Hear the Voice of Father Christmas",
  description: "Listen to the official Santa voice of Guy Harris. Hear festive Father Christmas voiceovers used in TV, radio promotions and Christmas campaigns.",
  url: "https://www.santaguy.co.uk/santa-voice-demo",
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
      name: "Santa Voice Demo",
      item: "https://www.santaguy.co.uk/santa-voice-demo",
    },
  ],
};

const audioSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "AudioObject",
    name: "Santa Voice Demo 1",
    description: "Professional Santa voice showreel performed by Guy Harris.",
    contentUrl: "https://www.santaguy.co.uk/demos/Santa-voice-Guy-Demo-1.mp3",
    uploadDate: "2024-01-01T08:00:00+00:00",
  },
  {
    "@context": "https://schema.org",
    "@type": "AudioObject",
    name: "Santa Voice Demo 2",
    description: "Santa voice demo featuring Guy Harris on BBC Radio 2 Naughty and Nice list.",
    contentUrl: "https://www.santaguy.co.uk/demos/Santa-voice-Guy-Demo-2.mp3",
    uploadDate: "2024-01-01T08:00:00+00:00",
  },
  {
    "@context": "https://schema.org",
    "@type": "AudioObject",
    name: "Santa Voice Demo 3",
    description: "Guy Harris as Santa chatting with Zoe Ball on BBC Radio 2 Breakfast Show.",
    contentUrl: "https://www.santaguy.co.uk/demos/Santa-voice-Guy-Demo-3.mp3",
    uploadDate: "2024-01-01T08:00:00+00:00",
  },
];


export default function SantaVoiceDemoPage() {
  return (
    <>
      <StructuredData data={pageSchema} />
      <StructuredData data={breadcrumbSchema} />
      {audioSchemas.map((schema, i) => (
        <StructuredData key={`audio-${i}`} data={schema} />
      ))}

      <Hero
        title="Santa Voice Demo"
        subtitle="Hear the Santa voice trusted by the BBC, ITV, Heart, Capital, and leading brands. Listen to showreel clips and demo recordings from the UK's most established Santa voice artist."
        primaryCTA={{ label: "Check Availability", href: "/hire-santa-voice" }}
        secondaryCTA={{ label: "Contact", href: "/contact-santa-guy" }}
        compact
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Listen to Santa Voice Demos"
            subtitle="Broadcast-quality Santa voice recordings from Guy Harris's professional studio"
          />

          <HirePageDemos />

          <div className="mt-12 bg-santa-cream rounded-xl p-6 sm:p-8 text-center">
            <h3 className="font-semibold text-gray-900 mb-2">Video Showreel</h3>
            <p className="text-sm text-gray-600 mb-4">
              Watch the full Santa Guy video showreel with highlights from campaigns and appearances.
            </p>
            <div className="max-w-2xl mx-auto">
              <VideoCard id="P44bGiUI0vE" title="Santa Guy Video Showreel" thumbnail="/santa-guy-santa-voice-over.webp" alt="Santa voiceover showreel — Voice of Santa highlights from campaigns and appearances by Guy Harris" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 leading-relaxed">
            Want to hear more or discuss a specific requirement?{" "}
            <Link href="/contact-santa-guy" className="text-santa-red hover:text-santa-red-dark font-medium">
              Get in touch
            </Link>{" "}
            and Guy will be happy to provide bespoke demo material for your project. You can also{" "}
            <Link href="/hire-santa-voice" className="text-santa-red hover:text-santa-red-dark font-medium">
              learn more about hiring the Santa voice
            </Link>. Find out about{" "}
            <Link href="/guy-harris-santa-voice" className="text-santa-red hover:text-santa-red-dark font-medium">
              Guy Harris, the voice of Santa
            </Link>{" "}
            or send a{" "}
            <Link href="/santa-guy-message" className="text-santa-red hover:text-santa-red-dark font-medium">
              personalised Santa message
            </Link>. Return to the{" "}
            <Link href="/" className="text-santa-red hover:text-santa-red-dark font-medium">
              Santa voice
            </Link>{" "}
            homepage for more.
          </p>
        </div>
      </section>

      <CTASection
        title="Like What You Hear?"
        description="Hire the UK's most trusted Santa voice for your next project. Broadcast-quality recordings delivered fast."
        primaryCTA={{ label: "Check Availability", href: "/hire-santa-voice" }}
        secondaryCTA={{ label: "Contact Santa Guy", href: "/contact-santa-guy" }}
      />
    </>
  );
}
