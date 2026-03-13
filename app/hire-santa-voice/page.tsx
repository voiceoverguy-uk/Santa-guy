import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Mic, Radio, Headphones, Video, Megaphone, Star, CheckCircle } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import HirePageDemos from "@/components/HirePageDemos";
import CTASection from "@/components/CTASection";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Hire Santa Voice — Professional Santa Voiceover for Radio, TV & Brands",
  description:
    "Hire Guy Harris, the UK's trusted Santa voice, for radio, TV, podcasts, Christmas campaigns, and branded festive content. Broadcast-quality Santa voiceover delivered fast from a professional studio.",
  alternates: { canonical: "/hire-santa-voice" },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Hire Santa Voice",
  description:
    "Hire the UK's trusted Santa voice for radio, TV, podcasts, brands, and festive campaigns.",
  url: "https://santaguy.co.uk/hire-santa-voice",
};

const services = [
  {
    title: "Santa Voiceover for Radio, TV & Web",
    description:
      "Broadcast-quality Santa voiceover for commercials, promos, jingles, and branded content. Delivered fast from a professional studio with same-day turnaround available.",
    icon: Mic,
    image: "/images/santa-voiceover-recording-studio.webp",
    alt: "Animated Santa recording professional Santa voiceover in a studio booth — Guy Harris, Voice of Santa",
    badge: "BROADCAST QUALITY",
    badgeLeft: true,
    features: [
      "Radio commercials and station imaging",
      "TV commercials and promos",
      "Web and social media video voiceover",
      "Branded content and corporate Christmas messages",
    ],
  },
  {
    title: "Podcast & Radio Appearances",
    description:
      "Santa guest appearances on podcasts, radio shows, and live broadcasts. Perfect for festive specials, Christmas countdowns, and seasonal programming.",
    icon: Headphones,
    image: "/images/santa-podcast-radio-guest.webp",
    alt: "Animated Santa as a podcast and radio guest — Father Christmas voice by Guy Harris",
    badge: "PODCAST GUEST",
    features: [
      "Podcast guest appearances as Santa",
      "Live and pre-recorded radio appearances",
      "Christmas special co-hosting",
      "Festive phone-ins and listener interactions",
    ],
  },
  {
    title: "Radio Station Christmas Campaigns",
    description:
      "Dedicated Santa check-ins, jingle packages, and seasonal imaging for radio stations. Make your station the home of Christmas with the UK's most trusted Santa voice.",
    icon: Radio,
    image: "/images/santa-radio-station-imaging.webp",
    alt: "Animated Santa in a radio studio recording festive imaging — Voice of Father Christmas, Guy Harris",
    badge: "RADIO IMAGING",
    badgeLeft: true,
    features: [
      "Daily Santa check-ins and countdowns",
      "Custom jingle and imaging packages",
      "Presenter interactions and drops",
      "Christmas competition voiceovers",
    ],
  },
  {
    title: "Christmas Campaign Promos",
    description:
      "Powerful, premium Santa voiceover for national and regional Christmas campaigns. From high street retailers to online brands, give your campaign the definitive Santa voice.",
    icon: Megaphone,
    image: "/images/santa-christmas-campaign-voiceover.webp",
    alt: "Animated Santa flying over a snowy city — Santa voiceover for national Christmas campaigns by Guy Harris",
    badge: "CAMPAIGN VOICEOVER",
    features: [
      "National brand campaign voiceover",
      "Retail and e-commerce Christmas promos",
      "Event and venue Christmas promotions",
      "Charity and public sector festive campaigns",
    ],
  },
  {
    title: "Personalised Santa Videos",
    description: (
      <>
        Bespoke personalised video messages from Santa through{" "}
        <a href="https://festivestudio.com" target="_blank" rel="noopener noreferrer" className="text-santa-red hover:text-santa-red-dark font-medium transition-colors">Festive Studio</a>.
        Join Santa for a personalised tour around the North Pole! Meet the Elves and visit the toy workshop!
      </>
    ),
    icon: Video,
    image: "/images/santa-personalised-video-messages.webp",
    alt: "Animated Santa recording personalised video messages — Voice of Santa and Father Christmas, Guy Harris",
    badge: "PERSONALISED VIDEO",
    features: [
      "Personalised Santa video messages",
      "Amazing high quality Santa film",
      "Your children's names mentioned",
      "Available for immediate download",
    ],
  },
];

const voiceoverYears = new Date().getFullYear() - 2000;

const trustSignals = [
  "Trusted by BBC Radio 2, Radio 1, Heart, Capital, ITV, Butlins, Tesco and more",
  "Remote sessions via Cleanfeed, Source-Connect, Teams, Zoom",
  `${voiceoverYears} years of professional voiceover experience`,
  "Professional broadcast studio with high quality WAV audio files",
  "Same-day delivery available for urgent projects. Often within an hour.",
  "Very good at ad-libbing and thinking on feet. You really are chatting with Santa!",
];

export default function HireSantaVoicePage() {
  return (
    <>
      <StructuredData data={pageSchema} />

      <Hero
        title="Hire the UK's Trusted Santa Voice"
        subtitle="Professional Santa voiceover for agencies, producers, radio stations, podcasts, and brands. Broadcast-quality recordings delivered fast from Guy Harris — the definitive voice of Santa."
        primaryCTA={{ label: "Get in Touch", href: "/contact-santa-guy" }}
        secondaryCTA={{ label: "Hear Demos", href: "/santa-voice-demo" }}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Santa Voice Services"
            subtitle="Everything you need for a premium festive campaign, all from the UK's most trusted Santa voice"
          />

          <div className="space-y-12">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`flex flex-col lg:flex-row gap-8 items-end ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-santa-cream rounded-lg flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-santa-red" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-santa-green flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full lg:w-80 flex-shrink-0">
                  <div className="group/img relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="aspect-video">
                      <img
                        src={service.image}
                        alt={service.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-black/45 via-black/18 to-transparent pointer-events-none" />
                    <span className={`absolute top-3 ${service.badgeLeft ? "left-3" : "right-3"} px-2.5 py-1 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold tracking-wider uppercase rounded-full pointer-events-none`}>
                      {service.badge}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Choose SantaGuy?"
            subtitle="The trust signals that matter to agencies and producers"
          />
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trustSignals.map((signal) => (
              <div
                key={signal}
                className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 p-5 shadow-sm"
              >
                <Star className="w-5 h-5 text-santa-gold flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 font-medium">{signal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Listen to Santa Voice Demos"
            subtitle="Hear the quality that leading broadcasters and brands rely on"
          />
          <HirePageDemos />
          <div className="text-center mt-8">
            <Link
              href="/santa-voice-demo"
              className="text-sm font-medium text-santa-red hover:text-santa-red-dark transition-colors"
            >
              View full demo page &rarr;
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Make Your Christmas Campaign Unforgettable"
        description="Get in touch to discuss your project. Whether it's a national TV campaign or a festive podcast appearance, Guy Harris delivers the Santa voice your audience will trust."
        primaryCTA={{ label: "Contact Santa Guy", href: "/contact-santa-guy" }}
        secondaryCTA={{ label: "About Guy Harris", href: "/guy-harris-santa-voice" }}
      />
    </>
  );
}
