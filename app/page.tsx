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
import GoogleReviews from "@/components/GoogleReviews";
import StructuredData from "@/components/StructuredData";
import DemoCards from "@/components/DemoCards";
import VideoCard from "@/components/VideoCard";

export const metadata: Metadata = {
  title: {
    absolute: "Santa Voice | Guy Harris | Voice of Father Christmas",
  },
  description:
    "Looking for a Santa voice or Father Christmas voice for your next TV advert, radio promo or event? Welcome to SantaGuy, home of Guy Harris.",
  alternates: { canonical: "https://www.santaguy.co.uk/" },
  openGraph: {
    title: "Santa Voice | Guy Harris | Voice of Father Christmas",
    description:
      "Looking for a Santa voice or Father Christmas voice for your next TV advert, radio promo or event? Welcome to SantaGuy, home of Guy Harris.",
    url: "https://www.santaguy.co.uk/",
    type: "website",
    locale: "en_GB",
    siteName: "SantaGuy",
    images: [
      {
        url: "https://www.santaguy.co.uk/santa-guy-logo-og.png",
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
    images: ["https://www.santaguy.co.uk/santa-guy-logo-og.png"],
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
  alternateName: "Santa Guy",
  url: "https://www.santaguy.co.uk",
  description:
    "The UK's trusted voice of Santa. Professional Santa voiceover for radio, TV, podcasts, brands and Christmas campaigns by Guy Harris.",
  inLanguage: "en-GB",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "SantaGuy",
  url: "https://www.santaguy.co.uk",
  logo: "https://www.santaguy.co.uk/santa-guy-logo-og.png",
  image: "https://www.santaguy.co.uk/santa-guy-logo-og.png",
  description:
    "SantaGuy is the home of Guy Harris, the UK's trusted Voice of Santa. Professional Santa voiceover trusted by BBC Radio 1, BBC Radio 2, Heart, Capital, ITV, Tesco, Butlins, CBeebies, Poundland, Center Parcs, GB News, Bauer, and leading brands across the UK.",
  founder: {
    "@type": "Person",
    name: "Guy Harris",
    url: "https://www.santaguy.co.uk/guy-harris-santa-voice",
  },
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  knowsAbout: [
    "Santa Voiceover",
    "Father Christmas Voice",
    "Christmas Radio Imaging",
    "Festive Broadcasting",
    "Christmas Campaign Voiceover",
    "Personalised Santa Messages",
  ],
  sameAs: [
    "https://www.voiceoverguy.co.uk",
    "https://x.com/voiceoverman",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Santa Voiceover Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Santa Voiceover for Radio, TV & Brands",
          serviceType: "Broadcast Santa Voiceover",
          description: "Broadcast-quality Santa voiceover for commercials, promos, jingles, and branded content. Trusted by BBC, ITV, Heart, Capital, Tesco, and leading UK brands.",
          provider: { "@type": "Person", name: "Guy Harris", url: "https://www.santaguy.co.uk" },
          areaServed: { "@type": "Country", name: "United Kingdom" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Personalised Santa Messages & Santa Calls",
          serviceType: "Personalised Santa Messages",
          description: "Bespoke personalised Santa messages and Santa video calls recorded by Guy Harris, the UK's Voice of Santa.",
          provider: { "@type": "Person", name: "Guy Harris", url: "https://www.santaguy.co.uk" },
          areaServed: { "@type": "Country", name: "United Kingdom" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Podcast & Radio Guest Appearances",
          serviceType: "Santa Guest Appearance",
          description: "Santa guest appearances on podcasts, radio shows, and live broadcasts for festive specials and Christmas programming.",
          provider: { "@type": "Person", name: "Guy Harris", url: "https://www.santaguy.co.uk" },
          areaServed: { "@type": "Country", name: "United Kingdom" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Radio Station Christmas Imaging",
          serviceType: "Radio Station Christmas Imaging",
          description: "Dedicated Santa check-ins, jingle packages, and seasonal imaging for radio stations across the UK and worldwide.",
          provider: { "@type": "Person", name: "Guy Harris", url: "https://www.santaguy.co.uk" },
          areaServed: { "@type": "Country", name: "United Kingdom" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Christmas Campaign Voiceover",
          serviceType: "Christmas Campaign Voiceover",
          description: "Premium Santa voiceover for national and regional Christmas campaigns, from high street retailers to online brands.",
          provider: { "@type": "Person", name: "Guy Harris", url: "https://www.santaguy.co.uk" },
          areaServed: { "@type": "Country", name: "United Kingdom" },
        },
      },
    ],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Guy Harris",
  alternateName: ["Santa Guy", "The Voice of Santa", "Voice of Father Christmas"],
  jobTitle: "Voice of Santa",
  description:
    "Guy Harris is the UK's trusted Voice of Santa, known for festive voiceovers for BBC Radio 1, BBC Radio 2, Heart, Capital, ITV, Tesco, Butlins, CBeebies, Poundland, Center Parcs, GB News, Bauer, and Santa Radio. He is the most established Santa voice artist in British broadcasting.",
  url: "https://www.santaguy.co.uk",
  image: "https://www.santaguy.co.uk/guy-harris-uk-voice-of-santa.webp",
  nationality: {
    "@type": "Country",
    name: "United Kingdom",
  },
  worksFor: {
    "@type": "ProfessionalService",
    name: "SantaGuy",
    url: "https://www.santaguy.co.uk",
  },
  knowsAbout: [
    "Santa Voiceover",
    "Father Christmas Voice",
    "Christmas Radio",
    "Festive Broadcasting",
    "Voice Acting",
    "Radio Imaging",
  ],
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
  sameAs: [
    "https://www.voiceoverguy.co.uk",
    "https://x.com/voiceoverman",
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Santa Voice | Guy Harris | Voice of Father Christmas",
  url: "https://www.santaguy.co.uk",
  description:
    "Looking for a Santa voice or Father Christmas voice for your next TV advert, radio promo or event? Welcome to SantaGuy, home of Guy Harris.",
  inLanguage: "en-GB",
};

const reviewSchemas = [
  {
    author: "Simon Borszowski",
    role: "Producer, BBC",
    body: "Guy IS Santa. I'd rather cancel Christmas than use anyone else.",
  },
  {
    author: "Matt Lomax",
    role: "Head of Sound Design, Heart",
    body: "The most convincing Santa voice we have ever had on our promos and liners. If you're looking for the real Santa, I'm pretty sure he's outsourced the job to Guy Harris.",
  },
  {
    author: "Liam Hadley",
    role: "Creative Audio Producer, BBC",
    body: "A Father Christmas who delivers every single year, even those last minute panic buys are no bother! Whether your list to him requires something spoken, sung or simply a bit of improvised flair, this Guy will oblige!",
  },
  {
    author: "Dan Riedo",
    role: "The Property Podcast Producer",
    body: "After 20+ years in the industry and having heard thousands of voices. Guy is the undisputed gold standard Santa. It's not even close!",
  },
  {
    author: "Jay Espindola",
    role: "Producer, ITV / GB News",
    body: "Guy is top of my Christmas list each year, and the festive season wouldn't be the same without him. His Santa is not just a seasonal audio treat, it's a Christmas miracle.",
  },
  {
    author: "Russell Featherstone",
    role: "Production Manager, ARN Dubai",
    body: "We use Guy regularly during the Christmas season at ARN in Dubai, and his Santa voice is absolutely spot on. Warm, authentic and full of festive character. Truly one of the best Santa voices in the world.",
  },
  {
    author: "Carl Woods",
    role: "Creative Producer, Bauer",
    body: "Such a warm, authentic Santa voice - instantly puts a smile on your face.",
  },
].map((r) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: {
    "@type": "ProfessionalService",
    name: "SantaGuy",
    url: "https://www.santaguy.co.uk",
  },
  author: {
    "@type": "Person",
    name: r.author,
    jobTitle: r.role,
  },
  reviewBody: r.body,
  reviewRating: {
    "@type": "Rating",
    ratingValue: 5,
    bestRating: 5,
  },
}));

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "SantaGuy",
  url: "https://www.santaguy.co.uk",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "119",
    bestRating: "5",
    worstRating: "1",
  },
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
      {reviewSchemas.map((schema, i) => (
        <StructuredData key={`review-${i}`} data={schema} />
      ))}
      <StructuredData data={aggregateRatingSchema} />

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
                Meet The Voice Behind Santa
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
                src="/guy-harris-uk-voice-of-santa.webp"
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

      <GoogleReviews />

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
