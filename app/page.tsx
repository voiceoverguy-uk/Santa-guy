import type { Metadata } from "next";
import Link from "next/link";
import { Mic, Radio, Video, Smartphone, Music, Headphones } from "lucide-react";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";
import TestimonialSlider from "@/components/TestimonialSlider";
import CountdownTimer from "@/components/CountdownTimer";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import StructuredData from "@/components/StructuredData";
import DemoCards from "@/components/DemoCards";
import VideoCard from "@/components/VideoCard";

export const metadata: Metadata = {
  title: "SantaGuy | The UK's Trusted Voice of Santa — Guy Harris",
  description:
    "Guy Harris is the UK's trusted voice of Santa. Professional Santa voiceover artist for radio, TV, podcasts, brands, and Christmas campaigns. Trusted by BBC Radio 2, Heart, Capital, ITV, Tesco, CBeebies and more.",
  alternates: { canonical: "/" },
};

const services = [
  {
    title: "Santa Voiceover",
    description:
      "Professional Santa voice for radio, TV, and web campaigns. Broadcast-quality recordings delivered fast from a professional studio.",
    icon: Mic,
    href: "/hire-santa-voice",
  },
  {
    title: "Podcast & Radio Appearances",
    description:
      "Santa guest appearances for podcasts, radio shows, and live broadcasts. Perfect for festive specials and Christmas countdowns.",
    icon: Headphones,
    href: "/hire-santa-voice",
  },
  {
    title: "Personalised Santa Videos",
    description:
      "Bespoke personalised video messages from Santa via Festive Studio. Perfect for brands, events, and special occasions.",
    icon: Video,
    href: "/santa-guy-message",
  },
  {
    title: "Santa Apps",
    description:
      "Free Christmas apps including Santa Radio, Santa voicemail, and more. Fun festive tools for the whole family.",
    icon: Smartphone,
    href: "/santa-apps",
  },
  {
    title: "Santa Radio",
    description:
      "Non-stop Christmas music and festive fun hosted by the real voice of Santa. Listen live online or via the app.",
    icon: Radio,
    href: "/santa-radio",
  },
  {
    title: "Santa Voice Demo",
    description:
      "Listen to Santa voice demos and showreel clips. Hear the voice trusted by the UK's biggest broadcasters and brands.",
    icon: Music,
    href: "/santa-voice-demo",
  },
];

const videos = [
  {
    title: "Voice of Santa for BBC Radio 2",
    id: "5o9Va4YsI3g",
  },
  {
    title: "CBeebies Santa for the Go Jetters",
    id: "yi-4Fm40nmE",
  },
  {
    title: "Santa on Zoe Ball Breakfast Show",
    id: "Qqu-HDA2KJE",
  },
  {
    title: "Voice of Santa for P&O Ferries Christmas Campaign",
    id: "Jjj1as7mpUw",
  },
];

const faqs = [
  {
    question: "Who is SantaGuy?",
    answer:
      "SantaGuy is the professional name for Guy Harris's Santa voiceover work. Guy is an established UK voice artist whose Santa voice has been trusted by BBC Radio 2, BBC Radio 1, Heart, Capital, ITV, Tesco, Butlins, CBeebies, and many more leading broadcasters and brands.",
  },
  {
    question: "What can I hire the Santa voice for?",
    answer:
      "You can hire Guy's Santa voice for radio and TV commercials, podcast appearances, radio station Christmas campaigns, branded content, web videos, personalised Santa messages, and any festive voiceover project. He works with agencies, producers, radio stations, and brands across the UK.",
  },
  {
    question: "How quickly can Santa voiceover be delivered?",
    answer:
      "Guy records from a professional broadcast-quality studio and can typically deliver Santa voiceover within 24 hours for standard projects. Same-day turnaround is available for urgent bookings. Remote session recording via ISDN, Source-Connect, and other platforms is also available.",
  },
  {
    question: "Is the Santa voice available for live radio or podcast appearances?",
    answer:
      "Yes. Guy regularly appears as Santa on national and regional radio stations, podcasts, and live broadcasts during the festive season. He can join remotely or in person depending on the project requirements.",
  },
  {
    question: "Can I get a personalised Santa video message?",
    answer:
      "Yes. Personalised Santa video messages are available through Festive Studio. These are perfect for brands, corporate events, and special occasions. Visit the Santa Message page for more details.",
  },
  {
    question: "What is Santa Radio?",
    answer:
      "Santa Radio is a free online Christmas radio station hosted by the real voice of Santa. It plays non-stop Christmas music and festive content, and is available to listen online or via the free Santa Radio app.",
  },
];

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SantaGuy",
  url: "https://santaguy.co.uk",
  description:
    "The UK's trusted voice of Santa. Professional Santa voiceover for radio, TV, podcasts, brands, and festive campaigns.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SantaGuy",
  url: "https://santaguy.co.uk",
  description:
    "Professional Santa voice artist Guy Harris — the UK's trusted voice of Santa for broadcasters, agencies, and brands.",
  sameAs: ["https://www.voiceoverguy.co.uk"],
};

export default function HomePage() {
  return (
    <>
      <StructuredData data={websiteSchema} />
      <StructuredData data={organizationSchema} />

      <Hero
        title="The UK's Trusted Voice of Santa"
        subtitle="Guy Harris is the voice of Santa trusted by BBC Radio 2, BBC Radio 1, Heart, Capital, ITV, Tesco, Butlins, CBeebies, and leading brands across the UK. Available for radio, TV, podcasts, campaigns, and festive voiceover."
        primaryCTA={{ label: "Check Availability", href: "/hire-santa-voice" }}
        secondaryCTA={{ label: "Contact Santa Guy", href: "/contact-santa-guy" }}
        logoSrc="/santaguy-logo-white.png"
      />

      <ClientLogos />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Hear the Voice of Santa"
            subtitle="Listen to real Santa voice demos recorded in the studio by Guy Harris — the UK's most trusted Santa voice artist"
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
            subtitle="See why BBC Radio 2, CBeebies, Zoe Ball, and P&O Ferries trust Guy Harris as the voice of Santa for their biggest festive moments"
          />
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 -mt-4 leading-relaxed">
            From national radio broadcasts to major brand campaigns, Guy Harris has delivered the definitive Santa voice across television, radio, and digital platforms. Watch highlights from some of his most recognised festive voiceover work.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {videos.map((video) => (
              <VideoCard key={video.id} id={video.id} title={video.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                icon={service.icon}
                href={service.href}
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
                Meet Guy Harris — The Voice Behind Santa
              </h2>
              <div className="mt-4 w-16 h-1 bg-santa-red rounded-full" />
              <p className="mt-6 text-gray-600 leading-relaxed">
                Guy Harris is one of the UK&apos;s most established and trusted voice artists. His Santa voice has
                become a staple of British Christmas broadcasting, heard on national radio, television, and
                major brand campaigns every festive season.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                With years of professional voiceover experience and a purpose-built{" "}
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
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/santa-guy-voice-over-1.jpg"
                alt="Guy Harris as Santa in his professional voiceover studio"
                className="w-full h-auto object-cover"
              />
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

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-widest text-gray-400 font-medium mb-6">
            Countdown to Christmas
          </p>
          <CountdownTimer />
        </div>
      </section>

      <CTASection
        title="Ready to Hire the UK's Trusted Voice of Santa?"
        description="Whether you need Santa voiceover for a national campaign, a podcast guest appearance, or festive radio imaging — Guy Harris delivers broadcast-quality recordings fast."
        primaryCTA={{ label: "Check Availability", href: "/hire-santa-voice" }}
        secondaryCTA={{ label: "Get in Touch", href: "/contact-santa-guy" }}
      />

      <FAQSection faqs={faqs} />
    </>
  );
}
