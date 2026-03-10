import type { Metadata } from "next";
import Link from "next/link";
import { Mic, Radio, MessageCircle, Play, Star, Tv } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: {
    absolute: "Santa Voice | Hire the Voice of Father Christmas",
  },
  description:
    "Hire the UK's leading Santa voice. Guy Harris provides Father Christmas voiceovers for TV, radio, events, personalised messages and festive campaigns.",
  alternates: { canonical: "https://santaguy.co.uk/santa-voice" },
  openGraph: {
    title: "Santa Voice | Hire the Voice of Father Christmas",
    description:
      "Hire the UK's leading Santa voice. Guy Harris provides Father Christmas voiceovers for TV, radio, events, personalised messages and festive campaigns.",
    url: "https://santaguy.co.uk/santa-voice",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Santa Voice | Hire the Voice of Father Christmas",
    description:
      "Hire the UK's leading Santa voice. Guy Harris provides Father Christmas voiceovers for TV, radio, events, personalised messages and festive campaigns.",
    site: "@voiceoverman",
    creator: "@voiceoverman",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Santa Voice | Hire the Voice of Father Christmas",
  description:
    "Hire the UK's leading Santa voice. Guy Harris provides Father Christmas voiceovers for TV, radio, events, personalised messages and festive campaigns.",
  url: "https://santaguy.co.uk/santa-voice",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Guy Harris",
  alternateName: "Santa Guy",
  jobTitle: "Voice Actor",
  url: "https://santaguy.co.uk/guy-harris-santa-voice",
};

const faqs = [
  {
    question: "Who is the voice of Santa in the UK?",
    answer:
      "Guy Harris is widely recognised as the UK's leading voice of Santa. His Father Christmas voice has been heard on BBC Radio 2, BBC Radio 1, Heart, Capital, ITV, and in major campaigns for brands including Tesco and Butlins. He is also the voice behind Santa Radio, the world's biggest Christmas radio station.",
  },
  {
    question: "Can I hire a professional Santa voice actor?",
    answer:
      "Yes. Guy Harris is available for Santa voiceover bookings throughout the year. Whether you need a Father Christmas voice for a TV advert, radio promotion, podcast, corporate event, or festive campaign, you can enquire directly through the SantaGuy website.",
  },
  {
    question:
      "What is the difference between a Santa voice and a Father Christmas voice?",
    answer:
      "In the UK, Santa Claus and Father Christmas are used interchangeably. A professional Santa voice actor such as Guy Harris provides the same warm, authoritative character whether the brief calls for 'Santa' or 'Father Christmas'. The performance adapts to the tone of the project.",
  },
  {
    question: "Can I order a personalised Santa message?",
    answer:
      "Yes. Guy Harris records personalised Santa messages and Santa calls for families, children, and brands. Each message is individually recorded in his professional studio and can include the recipient's name, personal details, and a bespoke festive greeting.",
  },
  {
    question: "Where can I hear a Santa voice demo?",
    answer:
      "You can listen to broadcast-quality Santa voice demos on the SantaGuy website. The demo page features showreel clips from TV, radio, and campaign work, giving you a clear sense of the voice before you book.",
  },
  {
    question: "What types of projects need a Santa voiceover?",
    answer:
      "Santa voiceovers are used in TV adverts, radio station imaging, retail campaigns, Christmas apps, podcast appearances, corporate greetings, live events, theme park attractions, and personalised messages for families. Any project that needs an authentic, professional Father Christmas voice is a good fit.",
  },
];

const services = [
  {
    icon: Tv,
    title: "TV & Radio",
    description: "Adverts, promos, station imaging, and broadcast campaigns",
  },
  {
    icon: Mic,
    title: "Events & Appearances",
    description: "Live events, theme parks, corporate parties, and retail",
  },
  {
    icon: MessageCircle,
    title: "Personalised Messages",
    description: "Bespoke Santa calls and messages for families and brands",
  },
  {
    icon: Radio,
    title: "Podcasts & Apps",
    description: "Hosting, guest spots, app voices, and interactive content",
  },
  {
    icon: Star,
    title: "Brand Campaigns",
    description: "National retail, e-commerce, and seasonal marketing",
  },
  {
    icon: Play,
    title: "Online & Social",
    description: "Video content, social media, and digital advertising",
  },
];

export default function SantaVoicePage() {
  return (
    <>
      <StructuredData data={webPageSchema} />
      <StructuredData data={personSchema} />

      <Hero
        title="Santa Voice"
        subtitle="Guy Harris is one of the UK's most recognised Santa voices, providing broadcast-quality Father Christmas voiceovers for television, radio, events, personalised messages, and festive campaigns nationwide."
        primaryCTA={{ label: "Order a Santa Message", href: "/santa-guy-message" }}
        secondaryCTA={{ label: "Enquire About Santa Voice", href: "/contact-santa-guy" }}
        compact
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Hire a Professional Santa Voice?"
            subtitle="The difference between a generic greeting and a performance that captures real festive magic"
          />

          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              There is a world of difference between a casual &ldquo;ho ho ho&rdquo; and a
              truly professional Santa voiceover. A skilled Santa voice actor brings warmth,
              authority, and genuine character to every line &mdash; the kind of performance
              that makes listeners believe they are hearing the real Father Christmas.
            </p>
            <p>
              Broadcasters, agencies, and brands trust a professional Santa voice because it
              elevates their campaigns. Whether the project is a national television advert,
              a regional radio promotion, a retail point-of-sale campaign, a Christmas app, a
              live shopping-centre event, or a{" "}
              <Link href="/santa-guy-message" className="text-santa-red hover:text-santa-red-dark font-medium">
                personalised Santa message
              </Link>{" "}
              for a family, the voice needs to be authentic, versatile, and delivery-ready.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-gray-50 rounded-xl border border-gray-100 p-5 text-center"
              >
                <div className="w-10 h-10 bg-santa-cream rounded-lg flex items-center justify-center mx-auto mb-3">
                  <service.icon className="w-5 h-5 text-santa-red" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{service.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Meet the UK's Official Voice of Santa"
            subtitle="Trusted by the biggest names in British broadcasting and beyond"
          />

          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              Guy Harris has been the go-to Santa voice for some of the UK&rsquo;s most
              recognisable brands and broadcasters for over two decades. His Father Christmas
              voiceover has featured on BBC Radio 2, BBC Radio 1, Heart, Capital, and ITV,
              as well as in campaigns for Tesco, Butlins, and CBeebies.
            </p>
            <p>
              As the creator and voice of{" "}
              <Link href="/santa-radio" className="text-santa-red hover:text-santa-red-dark font-medium">
                Santa Radio
              </Link>
              , the world&rsquo;s biggest Christmas radio station, Guy brings an unmatched
              depth of experience to every Santa voiceover project. His professional home
              studio delivers broadcast-quality recordings with fast turnaround, making him
              the first choice for agencies and production companies working to tight
              festive deadlines.
            </p>
            <p>
              Learn more about Guy&rsquo;s career, credentials, and the story behind
              SantaGuy on the{" "}
              <Link href="/guy-harris-santa-voice" className="text-santa-red hover:text-santa-red-dark font-medium">
                About Guy Harris
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Hear the Santa Voice Demo"
            subtitle="Listen before you book"
          />

          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              Hearing is believing. The{" "}
              <Link href="/santa-voice-demo" className="text-santa-red hover:text-santa-red-dark font-medium">
                Santa voice demo
              </Link>{" "}
              page features broadcast-quality showreel clips covering a range of styles
              &mdash; from warm, fatherly character reads to high-energy radio imaging and
              playful children&rsquo;s content. Whether your project calls for a classic
              British Father Christmas or a modern, upbeat Santa, you can hear exactly what
              Guy delivers before making an enquiry.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/santa-voice-demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-santa-red text-white font-semibold rounded-lg hover:bg-santa-red-dark transition-colors"
            >
              <Play className="w-4 h-4" />
              Listen to Santa Voice Demos
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Order a Personalised Santa Message"
            subtitle="A magical, bespoke greeting recorded just for your loved ones"
          />

          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              One of the most popular services on{" "}
              <Link href="/" className="text-santa-red hover:text-santa-red-dark font-medium">
                SantaGuy
              </Link>{" "}
              is the{" "}
              <Link href="/santa-guy-message" className="text-santa-red hover:text-santa-red-dark font-medium">
                personalised Santa message
              </Link>
              . Guy records each message individually in his professional studio, including the
              child&rsquo;s name, personal details you provide, and a warm festive greeting
              that sounds completely authentic. These are not generic, pre-recorded clips
              &mdash; every Santa call is a unique, one-off recording.
            </p>
            <p>
              Personalised Santa messages are available for families, schools, brands running
              festive promotions, and anyone who wants to create a genuinely magical Christmas
              moment. Orders are typically fulfilled within 24 to 48 hours during the festive
              season.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/santa-guy-message"
              className="inline-flex items-center gap-2 px-6 py-3 bg-santa-red text-white font-semibold rounded-lg hover:bg-santa-red-dark transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Order a Santa Message
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Listen to Santa Radio"
            subtitle="Non-stop Christmas music hosted by Santa himself"
          />

          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              <Link href="/santa-radio" className="text-santa-red hover:text-santa-red-dark font-medium">
                Santa Radio
              </Link>{" "}
              is the world&rsquo;s biggest{" "}
              <Link href="/santa-radio" className="text-santa-red hover:text-santa-red-dark font-medium">
                Christmas radio station
              </Link>
              , streaming festive music 24 hours a day, 365 days a year. Created and voiced
              by Guy Harris, it has become a beloved part of the Christmas season for
              millions of listeners worldwide. The station features classic Christmas hits,
              celebrity interviews, and plenty of festive fun &mdash; all hosted by the
              voice of Santa himself.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/santa-radio"
              className="inline-flex items-center gap-2 px-6 py-3 bg-santa-red text-white font-semibold rounded-lg hover:bg-santa-red-dark transition-colors"
            >
              <Radio className="w-4 h-4" />
              Listen to Santa Radio
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection
            faqs={faqs}
            title="Santa Voice — Frequently Asked Questions"
            subtitle="Common questions about hiring a professional Santa voice"
          />
        </div>
      </section>

      <CTASection
        title="Ready to Book the Santa Voice?"
        description={
          <>
            Whether you need a Santa voiceover for broadcast, a{" "}
            <Link href="/santa-guy-message" className="text-white underline hover:text-gray-200">
              personalised Santa message
            </Link>
            , or want to{" "}
            <Link href="/santa-voice-demo" className="text-white underline hover:text-gray-200">
              hear the demo
            </Link>{" "}
            first — get in touch and let&rsquo;s make your project sound like Christmas.
          </>
        }
        primaryCTA={{ label: "Check Availability", href: "/hire-santa-voice" }}
        secondaryCTA={{ label: "Contact Santa Guy", href: "/contact-santa-guy" }}
      />
    </>
  );
}
