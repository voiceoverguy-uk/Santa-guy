import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";
import TestimonialSlider from "@/components/TestimonialSlider";
import CTASection from "@/components/CTASection";
import SantaTrackerBanner from "@/components/SantaTrackerBanner";
import FAQSection from "@/components/FAQSection";
import StructuredData from "@/components/StructuredData";
import DemoCards from "@/components/DemoCards";
import VideoCard from "@/components/VideoCard";

export const metadata: Metadata = {
  title: {
    absolute: "Santa Voice | Guy Harris | Voice of Father Christmas",
  },
  description:
    "Looking for a Santa voice or Father Christmas voice for your next TV advert, radio promo or event? Welcome to SantaGuy, home of Guy Harris.",
  alternates: { canonical: "https://santaguy.co.uk/" },
  openGraph: {
    title: "Santa Voice | Guy Harris | Voice of Father Christmas",
    description:
      "Looking for a Santa voice or Father Christmas voice for your next TV advert, radio promo or event? Welcome to SantaGuy, home of Guy Harris.",
    url: "https://santaguy.co.uk/",
    type: "website",
    locale: "en_GB",
    siteName: "SantaGuy",
    images: [
      {
        url: "https://santaguy.co.uk/santa-guy-logo-og.png",
        width: 1200,
        height: 630,
        alt: "SantaGuy — Santa Voice | Guy Harris | Voice of Father Christmas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Santa Voice | Guy Harris | Voice of Father Christmas",
    description:
      "Looking for a Santa voice or Father Christmas voice for your next TV advert, radio promo or event? Welcome to SantaGuy, home of Guy Harris.",
    images: ["https://santaguy.co.uk/santa-guy-logo-og.png"],
    site: "@voiceoverman",
    creator: "@voiceoverman",
  },
};

const services = [
  {
    title: "Santa Voiceover",
    description: (
      <>
        Professional <a href="https://www.voiceoverguy.co.uk/santa-voice" target="_blank" rel="noopener noreferrer" className="text-santa-red hover:text-santa-red-dark font-medium transition-colors">Santa voice</a> for radio, TV, and web campaigns. Broadcast-quality recordings delivered fast from a professional studio.
      </>
    ),
  },
  {
    title: "Podcast & Radio Appearances",
    description:
      "Santa guest appearances for podcasts, radio shows, and live broadcasts. Perfect for festive specials and Christmas countdowns.",
  },
  {
    title: "Personalised Santa Videos",
    description: (
      <>
        Bespoke <a href="/santa-guy-message" className="text-santa-red hover:text-santa-red-dark font-medium transition-colors">personalised Santa messages</a> via Festive Studio. Perfect for brands, events, and special occasions.
      </>
    ),
  },
  {
    title: "Santa Apps",
    description:
      "Free Christmas apps including Santa Radio, Santa voicemail, and more. Fun festive tools for the whole family.",
  },
  {
    title: "Santa Radio",
    description: (
      <>
        Non-stop Christmas music and festive fun hosted by the real voice of Santa. <a href="/santa-radio" className="text-santa-red hover:text-santa-red-dark font-medium transition-colors">Listen live</a> online or via the app.
      </>
    ),
  },
  {
    title: "Santa Voice Demo",
    description:
      "Listen to Santa voice demos and showreel clips. Hear the voice trusted by the UK's biggest broadcasters and brands.",
  },
];

const videos = [
  {
    title: "Voice of Santa for BBC Radio 2",
    id: "5o9Va4YsI3g",
    thumbnail: "/images/santa-voice-bbc-radio-2.webp",
    alt: "Guy Harris performing the voice of Santa for BBC Radio 2",
  },
  {
    title: "CBeebies Santa for the Go Jetters",
    id: "yi-4Fm40nmE",
    thumbnail: "/images/santa-cbeebies-go-jetters.webp",
    alt: "Santa voice by Guy Harris for CBeebies Go Jetters",
  },
  {
    title: "Santa on Zoe Ball Breakfast Show",
    id: "Qqu-HDA2KJE",
    thumbnail: "/images/santa-zoe-ball-bbc-radio-2.webp",
    alt: "Guy Harris as Santa on the Zoe Ball BBC Radio 2 Christmas show",
  },
  {
    title: "Voice of Santa for P&O Ferries Christmas Campaign",
    id: "Jjj1as7mpUw",
    thumbnail: "/images/santa-po-ferries-christmas-ad.webp",
    alt: "Santa voiceover by Guy Harris for the P&O Ferries Christmas campaign",
  },
];

const faqs = [
  {
    question: "Who is the voice of Santa in the UK?",
    answer:
      "Guy Harris is widely recognised as the UK's trusted voice of Santa, heard on BBC Radio 2, BBC Radio 1, Heart, Capital, ITV, Tesco, Butlins and CBeebies.",
  },
  {
    question: "Can I hire the voice of Santa?",
    answer:
      "Yes. Guy Harris provides professional Santa voiceovers for radio, TV, podcasts, advertising campaigns, festive events and brand promotions.",
  },
  {
    question: "Who does the Santa voice for BBC Radio?",
    answer:
      "Guy Harris has performed as the voice of Santa for BBC Radio 2 and other UK broadcasters, as well as brands and Christmas campaigns.",
  },
  {
    question: "What is a Santa voiceover used for?",
    answer:
      "Santa voiceovers are used for Christmas advertising, radio promotions, TV campaigns, festive events, podcasts, brand marketing and seasonal entertainment.",
  },
];

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SantaGuy",
  url: "https://santaguy.co.uk",
  description:
    "The UK's trusted voice of Santa. Professional Santa voiceover for radio, TV, podcasts, brands and Christmas campaigns.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SantaGuy",
  url: "https://santaguy.co.uk",
  logo: "https://santaguy.co.uk/santa-guy-logo-og.png",
  sameAs: ["https://www.voiceoverguy.co.uk"],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Guy Harris",
  alternateName: "Santa Guy",
  jobTitle: "Voice Actor",
  description:
    "Guy Harris is the UK's Official Voice of Santa, known for festive voiceovers for BBC, ITV, Heart, Tesco and Santa Radio.",
  url: "https://santaguy.co.uk",
  sameAs: ["https://www.voiceoverguy.co.uk"],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Santa Voice | Guy Harris | Voice of Father Christmas",
  url: "https://santaguy.co.uk",
};

const videoSchemas = videos.map((video) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: video.title,
  description: `Guy Harris performing as the voice of Santa — ${video.title}.`,
  thumbnailUrl: `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`,
  uploadDate: "2024-01-01T08:00:00+00:00",
  embedUrl: `https://www.youtube.com/embed/${video.id}`,
}));

const audioSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "AudioObject",
    name: "Santa Voice Demo 1",
    description: "Professional Santa voice showreel performed by Guy Harris.",
    contentUrl: "https://santaguy.co.uk/demos/Santa-voice-Guy-Demo-1.mp3",
    uploadDate: "2024-01-01T08:00:00+00:00",
  },
  {
    "@context": "https://schema.org",
    "@type": "AudioObject",
    name: "Santa Voice Demo 2",
    description: "Santa voice demo featuring Guy Harris on BBC Radio 2 Naughty and Nice list.",
    contentUrl: "https://santaguy.co.uk/demos/Santa-voice-Guy-Demo-2.mp3",
    uploadDate: "2024-01-01T08:00:00+00:00",
  },
  {
    "@context": "https://schema.org",
    "@type": "AudioObject",
    name: "Santa Voice Demo 3",
    description: "Guy Harris as Santa chatting with Zoe Ball on BBC Radio 2 Breakfast Show.",
    contentUrl: "https://santaguy.co.uk/demos/Santa-voice-Guy-Demo-3.mp3",
    uploadDate: "2024-01-01T08:00:00+00:00",
  },
];

export default function HomePage() {
  return (
    <>
      <StructuredData data={websiteSchema} />
      <StructuredData data={organizationSchema} />
      <StructuredData data={personSchema} />
      <StructuredData data={webPageSchema} />
      {videoSchemas.map((schema, i) => (
        <StructuredData key={`video-${i}`} data={schema} />
      ))}
      {audioSchemas.map((schema, i) => (
        <StructuredData key={`audio-${i}`} data={schema} />
      ))}

      <Hero
        title="Santa Voiceover by Guy Harris"
        subtitle="Guy Harris is the voice of Santa trusted by BBC Radio 2, BBC Radio 1, Heart, Capital, ITV, Tesco, Butlins, CBeebies, and leading brands across the UK. Available for radio, TV, podcasts, campaigns, and festive voiceover."
        primaryCTA={{ label: "Hear Santa", href: "#hear-santa" }}
        secondaryCTA={{ label: "Check Availability", href: "/hire-santa-voice" }}
        logoSrc="/santaguy-logo-white.png"
      />

      <ClientLogos />

      <section id="hear-santa" className="py-16 sm:py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Hear the Voice of Santa"
            subtitle="Listen to real Santa voice demos recorded in the studio by Guy Harris, the UK's most trusted Santa voice artist"
          />
          <DemoCards />
          <div className="text-center mt-10">
            <Link
              href="/santa-voice-demo"
              className="text-sm font-medium text-santa-red hover:text-santa-red-dark transition-colors"
            >
              Listen to more demos &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Watch Santa Guy in Action"
            subtitle="See why BBC Radio 1 & 2, Heart, ITV, CBeebies, ASDA, Zoe Ball, and P&O Ferries trust Guy Harris as the voice of Santa for their biggest festive moments"
          />
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 -mt-4 leading-relaxed">
            From national radio broadcasts to major brand campaigns, Guy Harris has delivered the definitive Santa voice across television, radio, and digital platforms. Watch highlights from some of his most recognised festive voiceover work.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {videos.map((video) => (
              <VideoCard key={video.id} id={video.id} title={video.title} thumbnail={video.thumbnail} alt={video.alt} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <img
          src="/images/santa-guy-can-do-bg.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.07] pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            title="What Santa Guy Can Do"
            subtitle="From broadcast voiceover to live radio appearances, Guy Harris delivers the definitive Santa voice for every platform"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card
                key={service.title}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                Meet Guy Harris, The Voice Behind Santa
              </h2>
              <div className="mt-4 w-16 h-1 bg-santa-red rounded-full" />
              <p className="mt-6 text-gray-600 leading-relaxed">
                <a href="https://www.voiceoverguy.co.uk" target="_blank" rel="noopener noreferrer" className="text-santa-red font-semibold hover:text-santa-red-dark underline underline-offset-2 transition-colors">Guy Harris</a> is one of the UK&apos;s most established and trusted voice artists. His Santa voice has
                become a staple of British Christmas broadcasting, heard on national radio, television, and
                major brand campaigns every festive season.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                With {new Date().getFullYear() - 2000} years of professional voiceover experience and a purpose-built{" "}
                <a href="https://www.voiceoverguy.co.uk/voiceover-studio" target="_blank" rel="noopener noreferrer" className="text-santa-red font-semibold hover:text-santa-red-dark underline underline-offset-2 transition-colors">broadcast studio</a>, Guy
                delivers authentic, warm, and instantly recognisable Santa recordings for agencies,
                producers, and brands who demand the best.
              </p>
              <Link
                href="/guy-harris-santa-voice"
                className="inline-flex items-center mt-6 text-sm font-medium text-santa-red hover:text-santa-red-dark transition-colors"
              >
                Read the full story &rarr;
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/guy-santa-voice-over.jpg"
                alt="Guy Harris — Voice of Santa and Santa voiceover artist in his professional recording studio"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-black/55 via-black/25 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-santa-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Clients Say"
            subtitle="Trusted by agencies, broadcasters, and brands across the UK"
          />
          <TestimonialSlider />
        </div>
      </section>

      <SantaTrackerBanner />

      <CTASection
        title="Ready to Hire the UK's Trusted Voice of Santa?"
        description="Whether you need Santa voiceover for a national campaign, a podcast guest appearance, or festive radio imaging, Guy delivers broadcast-quality recordings fast."
        primaryCTA={{ label: "Check Availability", href: "/hire-santa-voice" }}
        secondaryCTA={{ label: "Get in Touch", href: "/contact-santa-guy" }}
        dark={false}
      />

      <FAQSection faqs={faqs} />
    </>
  );
}
