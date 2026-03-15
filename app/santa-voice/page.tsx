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
  alternates: { canonical: "https://www.santaguy.co.uk/santa-voice" },
  openGraph: {
    title: "Santa Voice | Hire the Voice of Father Christmas",
    description:
      "Hire the UK's leading Santa voice. Guy Harris provides Father Christmas voiceovers for TV, radio, events, personalised messages and festive campaigns.",
    url: "https://www.santaguy.co.uk/santa-voice",
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
  url: "https://www.santaguy.co.uk/santa-voice",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Guy Harris",
  alternateName: "Santa Guy",
  jobTitle: "Voice Actor",
  url: "https://www.santaguy.co.uk/guy-harris-santa-voice",
};

const faqs = [
  {
    question: "Who is the voice of Santa in the UK?",
    answer:
      "Guy Harris is the UK's leading Santa voice. His Father Christmas voiceover has been heard on BBC Radio 2, BBC Radio 1, Heart, Capital, ITV, and in major campaigns for Tesco, Butlins, and CBeebies. He also created and voices Santa Radio, the world's biggest Christmas radio station.",
  },
  {
    question: "Can I hire a professional Santa voice actor?",
    answer:
      "Yes. Guy Harris is available for Santa voiceover bookings throughout the year. Whether you need a Father Christmas voice for a TV advert, radio promotion, podcast, corporate event, or festive campaign, you can enquire directly through the SantaGuy website to check availability and discuss your project.",
  },
  {
    question:
      "What is the difference between a Santa voice and a Father Christmas voice?",
    answer:
      "In the UK, Santa Claus and Father Christmas are used interchangeably to describe the same beloved character. A professional Santa voice actor provides the same warm, authoritative performance whichever name the brief uses. The delivery adapts to the tone and audience of each project.",
  },
  {
    question: "Can I order a personalised Santa message?",
    answer:
      "Yes. Guy Harris records personalised Santa messages and Santa calls featuring the recipient's name, personal details, and a bespoke festive greeting. Each message is individually recorded in his professional studio and typically delivered within 24 to 48 hours during the festive season.",
  },
  {
    question: "Where can I hear a Santa voice demo?",
    answer:
      "The Santa voice demo page on SantaGuy features broadcast-quality showreel clips from TV adverts, radio promotions, and campaign work. You can hear a range of styles and delivery before making an enquiry, so you know exactly what to expect when you book.",
  },
  {
    question: "What types of projects need a Santa voiceover?",
    answer:
      "Santa voiceovers are used in TV adverts, radio station imaging, retail campaigns, Christmas apps, podcast appearances, corporate greetings, live events, theme park attractions, and personalised family messages. Any project that needs an authentic, professional Father Christmas voice is a strong fit.",
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
        subtitle="Hire a professional Santa voice for your next campaign, broadcast, or event. Guy Harris provides Father Christmas voiceovers for TV, radio, retail promotions, personalised messages, and festive projects across the UK."
        primaryCTA={{ label: "Order a Santa Message", href: "/santa-guy-message" }}
        secondaryCTA={{ label: "Enquire About Santa Voice", href: "/contact-santa-guy" }}
        compact
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Hire a Professional Santa Voice?"
            subtitle="The difference between an impression and a broadcast-quality performance"
          />

          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              Anyone can attempt a &ldquo;ho ho ho&rdquo;, but a professional Santa
              voiceover delivers warmth, authority, and believable character that audiences
              trust. Broadcast-quality recordings make a measurable difference to TV adverts,
              radio promotions, retail campaigns, Christmas apps, live events, and{" "}
              <Link href="/santa-guy-message" className="text-santa-red hover:text-santa-red-dark font-medium">
                personalised Santa messages
              </Link>
              .
            </p>
            <p>
              A skilled Santa voice actor adapts to every brief &mdash; from a gentle,
              fatherly tone for children&rsquo;s content to punchy, high-energy delivery
              for station imaging. The result is a polished performance, recorded and
              delivered on deadline.
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
            subtitle="Trusted by the biggest names in British broadcasting"
          />

          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              Guy Harris has provided Santa voiceovers for BBC Radio 2, BBC Radio 1, Heart,
              Capital, ITV, Tesco, Butlins, and CBeebies. He created and voices{" "}
              <Link href="/santa-radio" className="text-santa-red hover:text-santa-red-dark font-medium">
                Santa Radio
              </Link>
              , and records from a professional home studio with fast turnaround for
              agencies and production companies on tight festive deadlines.
            </p>
            <p>
              <Link href="/guy-harris-santa-voice" className="text-santa-red hover:text-santa-red-dark font-medium">
                Learn more about the UK&rsquo;s Official Voice of Santa
              </Link>
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

          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed">
            <p>
              The{" "}
              <Link href="/santa-voice-demo" className="text-santa-red hover:text-santa-red-dark font-medium">
                Santa voice demo
              </Link>{" "}
              page features showreel clips covering warm character reads, high-energy radio
              imaging, and children&rsquo;s content. Hear exactly what Guy delivers before
              making an enquiry.
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
            subtitle="A bespoke festive greeting recorded just for your loved ones"
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
              . Each recording includes the child&rsquo;s name, personal details you
              provide, and a warm festive greeting &mdash; not a generic clip, but a unique,
              studio-recorded Santa call.
            </p>
            <p>
              Available for families, schools, and brands. Orders are typically fulfilled
              within 24 to 48 hours during the festive season.
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

          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed">
            <p>
              <Link href="/santa-radio" className="text-santa-red hover:text-santa-red-dark font-medium">
                Santa Radio
              </Link>{" "}
              streams Christmas hits 24 hours a day, 365 days a year. Created and voiced by
              Guy Harris, it features festive favourites, celebrity interviews, and plenty
              of seasonal fun &mdash; all hosted by the voice of Santa.
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
            title="Santa Voice: Frequently Asked Questions"
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
            first &mdash; get in touch and let&rsquo;s make your project sound like Christmas.
          </>
        }
        primaryCTA={{ label: "Check Availability", href: "/hire-santa-voice" }}
        secondaryCTA={{ label: "Contact Santa Guy", href: "/contact-santa-guy" }}
      />
    </>
  );
}
