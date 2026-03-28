import type { Metadata } from "next";
import Link from "next/link";
import { Award, Mic, Monitor, Globe } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: {
    absolute: "The UK's Official Voice of Santa | About SantaGuy.co.uk",
  },
  description:
    "Discover Guy Harris, the UK's Official Voice of Santa. Learn how his award-winning voice brings festive magic to BBC, ITV, Heart, Tesco, and Santa Radio.",
  alternates: { canonical: "https://www.santaguy.co.uk/guy-harris-santa-voice" },
  openGraph: {
    title: "The UK's Official Voice of Santa | About SantaGuy.co.uk",
    description:
      "Discover Guy Harris, the UK's Official Voice of Santa. Learn how his award-winning voice brings festive magic to BBC, ITV, Heart, Tesco, and Santa Radio.",
    url: "https://www.santaguy.co.uk/guy-harris-santa-voice",
    type: "website",
    locale: "en_GB",
    siteName: "SantaGuy",
    images: [
      {
        url: "https://www.santaguy.co.uk/santa-guy-logo-og.png",
        width: 1200,
        height: 630,
        alt: "The UK's Official Voice of Santa — Guy Harris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The UK's Official Voice of Santa | About SantaGuy.co.uk",
    description:
      "Discover Guy Harris, the UK's Official Voice of Santa. Learn how his award-winning voice brings festive magic to BBC, ITV, Heart, Tesco, and Santa Radio.",
    images: ["https://www.santaguy.co.uk/santa-guy-logo-og.png"],
    site: "@voiceoverman",
    creator: "@voiceoverman",
  },
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "About Guy Harris — The Voice of Santa",
  url: "https://www.santaguy.co.uk/guy-harris-santa-voice",
  description:
    "Discover Guy Harris, the UK's Official Voice of Santa. Learn how his award-winning voice brings festive magic to BBC, ITV, Heart, Tesco, and Santa Radio.",
  inLanguage: "en-GB",
  mainEntity: {
    "@type": "Person",
    name: "Guy Harris",
    alternateName: ["Santa Guy", "The Voice of Santa", "Voice of Father Christmas"],
    jobTitle: "Voice of Santa",
    url: "https://www.santaguy.co.uk/guy-harris-santa-voice",
    image: "https://www.santaguy.co.uk/images/santa-guy-voice-over-2.jpg",
    description:
      "Guy Harris is the UK's Official Voice of Santa, trusted by BBC Radio 1, BBC Radio 2, Heart, Capital, ITV, Tesco, Butlins, CBeebies, Poundland, Center Parcs, GB News, Bauer, and ARN Dubai. He is the creator and voice of Santa Radio and the most established Santa voice artist in British broadcasting.",
    nationality: {
      "@type": "Country",
      name: "United Kingdom",
    },
    worksFor: {
      "@type": "ProfessionalService",
      name: "SantaGuy",
      url: "https://www.santaguy.co.uk",
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Santa Voice Actor",
      description: "Professional voice artist specialising in Santa Claus and Father Christmas character voiceover for broadcast, brands, and campaigns.",
      occupationLocation: {
        "@type": "Country",
        name: "United Kingdom",
      },
    },
    knowsAbout: [
      "Santa Voiceover",
      "Father Christmas Voice",
      "Christmas Radio",
      "Festive Broadcasting",
      "Voice Acting",
      "Radio Imaging",
      "Personalised Santa Messages",
    ],
    sameAs: [
      "https://www.voiceoverguy.co.uk",
      "https://x.com/voiceoverman",
    ],
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
      name: "About Guy Harris",
      item: "https://www.santaguy.co.uk/guy-harris-santa-voice",
    },
  ],
};

const awards = [
  "Trusted Santa voice for BBC Radio 2 and BBC Radio 1",
  "Featured Santa voice on Heart and Capital FM",
  "ITV Christmas campaign voice artist",
  "Voice of Santa for Tesco, Butlins, and CBeebies",
  "Creator and host of Santa Radio",
  "Established professional voiceover career spanning multiple decades",
];

const capabilities = [
  {
    title: "Broadcast-Quality Studio",
    description:
      "Guy records from a purpose-built professional studio, delivering pristine broadcast-quality audio every time. No background noise, no compromise.",
    icon: Mic,
  },
  {
    title: "Remote Sessions Available",
    description:
      "Available for remote directed sessions via Cleanfeed, Source-Connect, Zoom, Teams and other industry-standard platforms. Work with Guy from anywhere, anytime.",
    icon: Monitor,
  },
  {
    title: "Fast Turnaround",
    description:
      "Standard projects delivered within 24 hours. Same-day and urgent turnaround available. Guy understands the pace of broadcast and agency deadlines.",
    icon: Globe,
  },
];

export default function AboutPage() {
  return (
    <>
      <StructuredData data={profilePageSchema} />
      <StructuredData data={breadcrumbSchema} />

      <Hero
        title="The UK's Official Voice of Santa"
        subtitle="The UK's most established and trusted professional Santa voice artist. Trusted by the BBC, ITV, Heart, Capital, Tesco, CBeebies, and leading brands across the country."
        compact
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                The Voice Behind Christmas
              </h2>
              <div className="mt-4 w-16 h-1 bg-santa-red rounded-full" />
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Guy Harris is one of the UK&apos;s most recognisable and trusted voice artists. His warm, authentic
                  Santa voice has become synonymous with British Christmas broadcasting, heard every year by millions
                  across national radio, television, and major brand campaigns.
                </p>
                <p>
                  As a professional voiceover artist, Guy brings decades of broadcast experience to every Santa
                  recording. He is not a seasonal hobbyist or part-time entertainer, he is an established voice
                  professional whose Santa characterisation is rooted in years of craft, trusted by the UK&apos;s
                  most demanding agencies, producers, and broadcasters.
                </p>
                <p>
                  Beyond voiceover, Guy created and hosts{" "}
                  <Link href="/santa-radio" className="text-santa-red hover:text-santa-red-dark font-medium">Santa Radio</Link>,
                  a dedicated online Christmas radio station that brings festive cheer to listeners worldwide.
                  He also developed a suite of popular Christmas apps and offers{" "}
                  <Link href="/santa-guy-message" className="text-santa-red hover:text-santa-red-dark font-medium">personalised Santa video messages</Link>.
                </p>
                <p>
                  Guy&apos;s wider voiceover career spans commercial, corporate, narration, and character work. He is
                  also known as VoiceoverGuy and Voice of God, visit{" "}
                  <a
                    href="https://www.voiceoverguy.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-santa-red hover:text-santa-red-dark underline"
                  >
                    voiceoverguy.co.uk
                  </a>{" "}
                  to learn more about his full voiceover services.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <img
                src="/images/santa-guy-voice-over-2.jpg"
                alt="Guy Harris — Voice of Santa and Father Christmas voice artist in his professional recording studio"
                className="rounded-2xl w-full aspect-[4/3] object-cover"
              />
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/voiceover-cartoon-santa-style.png"
                  alt="Cartoon of Guy Harris performing Santa voiceover in the studio — Voice of Father Christmas"
                  className="rounded-xl w-full aspect-square object-cover"
                />
                <img
                  src="/images/voiceover-cartoon-santa-calls.png"
                  alt="Cartoon of Guy Harris making live Father Christmas voice calls — Santa voiceover artist"
                  className="rounded-xl w-full aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Awards & Recognition"
            subtitle="A track record of trust with the UK's biggest names in broadcasting and brands"
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {awards.map((award) => (
              <div
                key={award}
                className="flex items-start gap-4 bg-white rounded-xl border border-gray-100 p-5 shadow-sm"
              >
                <Award className="w-5 h-5 text-santa-gold flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 font-medium">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Professional Recording Options"
            subtitle="Flexible, fast, and built for broadcast"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm text-center"
              >
                <div className="w-12 h-12 bg-santa-cream rounded-lg flex items-center justify-center mx-auto mb-4">
                  <cap.icon className="w-6 h-6 text-santa-red" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{cap.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src="/images/santa-guy-montage.jpg"
            alt="Guy Harris montage — Voice of Santa, Santa voiceover artist, and Voice of Father Christmas"
            className="rounded-xl w-full object-cover"
          />
        </div>
      </section>

      <CTASection
        title="Ready to Work with the UK's Trusted Santa Voice?"
        description="Hire Guy Harris for your next Christmas campaign, radio appearance, or festive voiceover project."
        primaryCTA={{ label: "Check Availability", href: "/hire-santa-voice" }}
        secondaryCTA={{ label: "Get in Touch", href: "/contact-santa-guy" }}
      />
    </>
  );
}
