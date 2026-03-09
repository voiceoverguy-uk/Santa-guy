import type { Metadata } from "next";
import { Mail, Clock, Mic } from "lucide-react";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
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

export default function ContactPage() {
  return (
    <>
      <StructuredData data={pageSchema} />

      <Hero
        title="Contact Santa Guy"
        subtitle="Ready to hire the UK's trusted voice of Santa? Get in touch to discuss your project. Whether it's a national campaign, radio appearance, or festive voiceover — let's talk."
        compact
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Send an Enquiry
              </h2>
              <p className="text-gray-600 mb-8">
                Fill in the form below and Guy will get back to you as quickly as possible.
              </p>
              <ContactForm />
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-5 h-5 text-santa-red" />
                  <h3 className="font-semibold text-gray-900">Email Directly</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Prefer to email? Send your enquiry directly to:
                </p>
                <a
                  href="mailto:enquiries@voiceoverguy.co.uk"
                  className="text-sm font-medium text-santa-red hover:text-santa-red-dark transition-colors"
                >
                  enquiries@voiceoverguy.co.uk
                </a>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-santa-red" />
                  <h3 className="font-semibold text-gray-900">Fast Response</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Guy typically responds within a few hours during the festive season and within 24 hours at
                  other times. Urgent projects can often be accommodated — just mention it in your message.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Mic className="w-5 h-5 text-santa-red" />
                  <h3 className="font-semibold text-gray-900">Also Available As</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Looking for non-Santa voiceover? Visit Guy&apos;s main voiceover site:
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
