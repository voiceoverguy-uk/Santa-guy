import type { Metadata } from "next";
import { Clock, Mic, Mail, Shield, Radio, Zap } from "lucide-react";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import EmailButton from "@/components/EmailButton";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Contact Santa Guy — Hire the UK's Trusted Voice of Santa",
  description:
    "Get in touch with Guy Harris to hire the UK's trusted Santa voice for your next project. Contact Santa Guy for radio, TV, podcast, and brand Christmas campaigns.",
  alternates: { canonical: "/contact-santa-guy" },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Contact Santa Guy",
  description: "Get in touch with Guy Harris to hire the UK's trusted Santa voice.",
  url: "https://santaguy.co.uk/contact-santa-guy",
};

const trustBadges = [
  { label: "BBC Trusted", icon: Shield },
  { label: "Broadcast Quality", icon: Radio },
  { label: "Fast Response", icon: Zap },
];

export default function ContactPage() {
  return (
    <>
      <StructuredData data={pageSchema} />

      <Hero
        title="Ready to Book the UK's Trusted Voice of Santa?"
        subtitle="Get in touch to discuss your campaign, broadcast, or festive project."
        compact
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-3 mb-6">
                {trustBadges.map((badge) => (
                  <span
                    key={badge.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-xs font-medium text-gray-600"
                  >
                    <badge.icon className="w-3.5 h-3.5 text-santa-red" />
                    {badge.label}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Check Availability
              </h2>
              <p className="text-gray-600 mb-2">
                Fill in the form below and Guy will reply quickly to confirm availability and discuss your project.
              </p>
              <p className="text-sm text-gray-500 mb-8">
                Guy Harris is the Voice of Santa trusted by BBC Radio 2, BBC Radio 1, Heart, Capital, ITV, Tesco, Butlins and CBeebies.
              </p>
              <ContactForm />
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-5 h-5 text-santa-red" />
                  <h3 className="font-semibold text-gray-900">Email Directly</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Prefer email? Send your project details directly to Guy.
                </p>
                <EmailButton />
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-santa-red" />
                  <h3 className="font-semibold text-gray-900">Fast Response</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Guy usually replies within a few hours during the festive season, and within 24 hours at other times. Urgent projects can often be accommodated — just mention it in your message.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Mic className="w-5 h-5 text-santa-red" />
                  <h3 className="font-semibold text-gray-900">Also Available As</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Need non-Santa voiceover too? Visit Guy&apos;s main voiceover site:
                </p>
                <a
                  href="https://www.voiceoverguy.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-santa-red hover:text-santa-red-dark transition-colors"
                >
                  voiceoverguy.co.uk &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
