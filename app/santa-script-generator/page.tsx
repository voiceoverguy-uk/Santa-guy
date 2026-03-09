import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Wand2, ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Santa Script Generator — Create Festive Voiceover Scripts",
  description:
    "Use the Santa Script Generator to create festive voiceover scripts. A supporting tool from SantaGuy and VoiceoverGuy for agencies, producers, and brands.",
  alternates: { canonical: "/santa-script-generator" },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Santa Script Generator",
  description: "Create festive voiceover scripts with the Santa Script Generator.",
  url: "https://santaguy.co.uk/santa-script-generator",
};

export default function SantaScriptGeneratorPage() {
  return (
    <>
      <StructuredData data={pageSchema} />

      <Hero
        title="Santa Script Generator"
        subtitle="Need help crafting the perfect festive script? Use the Santa Script Generator to create professional voiceover scripts for your Christmas campaigns."
        compact
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <div className="w-12 h-12 bg-santa-cream rounded-lg flex items-center justify-center mb-5">
                <FileText className="w-6 h-6 text-santa-red" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Script Templates</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Browse ready-made festive script templates for radio commercials, podcast intros,
                brand messages, and more. Customise them for your project or use them as inspiration.
              </p>
              <p className="text-xs text-gray-400 italic">Coming soon</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <div className="w-12 h-12 bg-santa-cream rounded-lg flex items-center justify-center mb-5">
                <Wand2 className="w-6 h-6 text-santa-red" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Custom Script Help</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Need something bespoke? Get in touch and Guy can help craft the perfect Santa script
                for your campaign, tailored to your brand voice and objectives.
              </p>
              <Link
                href="/contact-santa-guy"
                className="inline-flex items-center text-sm font-medium text-santa-red hover:text-santa-red-dark transition-colors"
              >
                Get in touch <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>

          <div className="bg-santa-cream rounded-xl p-8 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              VoiceoverGuy Script Tools
            </h3>
            <p className="text-gray-600 text-sm max-w-lg mx-auto mb-4">
              For a wider range of voiceover script tools and resources, visit Guy&apos;s main
              voiceover site where you&apos;ll find additional tools for scriptwriting and production.
            </p>
            <a
              href="https://www.voiceoverguy.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-santa-red hover:text-santa-red-dark transition-colors"
            >
              Visit VoiceoverGuy <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Got Your Script Ready?"
        description="Send your script to Guy Harris and get broadcast-quality Santa voiceover delivered fast."
        primaryCTA={{ label: "Check Availability", href: "/hire-santa-voice" }}
        secondaryCTA={{ label: "Contact", href: "/contact-santa-guy" }}
      />
    </>
  );
}
