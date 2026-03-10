import type { Metadata } from "next";
import Link from "next/link";
import { Video, Gift, Star, ExternalLink } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Personalised Santa Message — Video Messages from the Real Santa",
  description:
    "Get a personalised video message from the real voice of Santa, Guy Harris. Bespoke Santa video messages for brands, events, and special occasions via Festive Studio.",
  alternates: { canonical: "/santa-guy-message" },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Personalised Santa Message",
  description: "Personalised video messages from the real voice of Santa via Festive Studio.",
  url: "https://santaguy.co.uk/santa-guy-message",
};

export default function SantaMessagePage() {
  return (
    <>
      <StructuredData data={pageSchema} />

      <Hero
        title="Personalised Santa Messages"
        subtitle="Bespoke video messages from the real voice of Santa, recorded and delivered through Festive Studio. Perfect for brands, events, corporate gifts, and special occasions."
        primaryCTA={{ label: "Enquire About Santa Messages", href: "/contact-santa-guy" }}
        compact
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                A Message from Santa, Personally for You
              </h2>
              <div className="mt-4 w-16 h-1 bg-santa-red rounded-full" />
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Imagine receiving a personalised video message from the real voice of Santa — the same
                  voice trusted by the BBC, ITV, and the UK&apos;s biggest brands. That&apos;s exactly what
                  Festive Studio delivers.
                </p>
                <p>
                  Each message is individually recorded by Guy Harris in his professional studio,
                  ensuring broadcast-quality video and audio. Messages can be tailored to individuals,
                  families, corporate teams, or brand audiences.
                </p>
                <p>
                  Whether you&apos;re a brand looking for a unique festive touchpoint, an agency creating a
                  memorable client gift, or someone who wants to send something truly special — a
                  personalised Santa message from Guy Harris is the premium choice.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://festivestudio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-santa-red text-white font-semibold rounded-lg hover:bg-santa-red-dark transition-colors"
                >
                  <ExternalLink size={16} />
                  Enquire About Festive Studio
                </a>
                <Link
                  href="/contact-santa-guy"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-lg hover:border-santa-red hover:text-santa-red transition-colors"
                >
                  Enquire Directly
                </Link>
              </div>
            </div>

            <img
              src="/images/message-from-santa.png"
              alt="Santa and elves reading from the book of names — personalised Santa messages"
              className="rounded-2xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Who Are Santa Messages For?"
            subtitle="Perfect for brands, agencies, and anyone who wants something truly special"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Brands & Agencies",
                description: "Create unforgettable festive touchpoints for your clients and campaigns with a premium Santa message.",
                icon: Star,
              },
              {
                title: "Corporate & Events",
                description: "Send personalised Santa greetings to teams, clients, or event attendees for a memorable Christmas.",
                icon: Gift,
              },
              {
                title: "Special Occasions",
                description: "Surprise someone special with a video message from the real voice of Santa — a gift they'll never forget.",
                icon: Video,
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
        </div>
      </section>

      <CTASection
        title="Ready to Order a Personalised Santa Message?"
        description="Visit Festive Studio to create your bespoke Santa video, or get in touch directly for bulk bookings and brand enquiries."
        primaryCTA={{ label: "Enquire About Santa Messages", href: "/contact-santa-guy" }}
      />
    </>
  );
}
