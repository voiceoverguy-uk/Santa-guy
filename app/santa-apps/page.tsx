import type { Metadata } from "next";
import Link from "next/link";
import { Smartphone, Radio, Phone, Star } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Santa Apps — Free Christmas Apps from SantaGuy",
  description:
    "Download free Santa apps including Santa Radio, Santa Voicemail, and more. Fun festive apps for the whole family, created by Guy Harris — the UK's trusted voice of Santa.",
  alternates: { canonical: "/santa-apps" },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Santa Apps",
  description: "Free Christmas apps from SantaGuy including Santa Radio and Santa Voicemail.",
  url: "https://santaguy.co.uk/santa-apps",
};

const apps = [
  {
    title: "Santa Radio App",
    description:
      "Listen to non-stop Christmas music hosted by the real voice of Santa. Available on iOS and Android with festive features and live streaming.",
    icon: Radio,
    features: [
      "Non-stop Christmas music",
      "Live hosted shows from Santa",
      "Festive news and updates",
      "Free to download and use",
    ],
  },
  {
    title: "Santa Voicemail App",
    description:
      "Let Santa answer your phone with a selection of fun festive voicemail greetings. Choose from different Santa messages and surprise your callers.",
    icon: Phone,
    features: [
      "Multiple Santa voicemail greetings",
      "Easy setup and customisation",
      "Fun for the whole family",
      "Free festive voicemail messages",
    ],
  },
  {
    title: "More Santa Apps",
    description:
      "Explore the full range of SantaGuy Christmas apps and tools. From ringtones to text alerts, there's something festive for everyone.",
    icon: Smartphone,
    features: [
      "Santa Ringtones",
      "Santa Text Alerts",
      "Festive tools and features",
      "Regular updates each Christmas season",
    ],
  },
];

export default function SantaAppsPage() {
  return (
    <>
      <StructuredData data={pageSchema} />

      <Hero
        title="Santa Apps"
        subtitle="Free Christmas apps created by the real voice of Santa. Download Santa Radio, Santa Voicemail, and more festive fun for the whole family."
        primaryCTA={{ label: "Listen to Santa Radio", href: "/santa-radio" }}
        secondaryCTA={{ label: "Contact Santa Guy", href: "/contact-santa-guy" }}
        compact
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Free Christmas Apps"
            subtitle="Fun, festive, and free — powered by the UK's trusted voice of Santa"
          />

          <div className="space-y-12">
            {apps.map((app) => (
              <div
                key={app.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="p-8 sm:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-santa-cream rounded-xl flex items-center justify-center">
                        <app.icon className="w-6 h-6 text-santa-red" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{app.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">{app.description}</p>
                    <ul className="space-y-2 mb-8">
                      {app.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <Star className="w-3.5 h-3.5 text-santa-gold flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-3">
                      <div className="px-5 py-2.5 bg-gray-900 text-white text-sm rounded-lg font-medium">
                        App Store — placeholder
                      </div>
                      <div className="px-5 py-2.5 bg-gray-900 text-white text-sm rounded-lg font-medium">
                        Google Play — placeholder
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 flex items-center justify-center min-h-[200px] lg:min-h-0">
                    <p className="text-gray-400 text-sm">App screenshot placeholder</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Looking for Santa ringtones or text alerts? Check out the{" "}
            <Link href="/santa-ringtones" className="text-santa-red hover:text-santa-red-dark font-medium">
              Santa Ringtones
            </Link>{" "}
            and{" "}
            <Link href="/santa-text-alerts" className="text-santa-red hover:text-santa-red-dark font-medium">
              Santa Text Alerts
            </Link>{" "}
            pages for more free festive downloads.
          </p>
        </div>
      </section>

      <CTASection
        title="Want Santa for Your Campaign?"
        description="The voice behind the apps is available for hire. Book Guy Harris for your next Christmas project."
        primaryCTA={{ label: "Check Availability", href: "/hire-santa-voice" }}
        secondaryCTA={{ label: "Contact", href: "/contact-santa-guy" }}
      />
    </>
  );
}
