import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import RingtoneGrid from "@/components/RingtoneGrid";
import CTASection from "@/components/CTASection";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Santa Ringtones — Free Christmas Ringtones from SantaGuy",
  description:
    "Download free Santa ringtones for your phone. Festive Christmas ringtones featuring the real voice of Santa, Guy Harris. Available as free downloads.",
  alternates: { canonical: "/santa-ringtones" },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Santa Ringtones",
  description: "Free Christmas ringtones featuring the real voice of Santa.",
  url: "https://santaguy.co.uk/santa-ringtones",
};

const ringtones = [
  { title: "Santa's Greeting", description: "A warm festive greeting from Santa for your ringtone", file: "/ringtones/santa-guy-ringtone-1.zip", preview: "/ringtones/santa-guy-ringtone-1.mp3" },
  { title: "Ho Ho Ho!", description: "The classic Santa laugh — perfect for incoming calls", file: "/ringtones/santa-guy-ringtone-2.zip", preview: "/ringtones/santa-guy-ringtone-2.mp3" },
  { title: "Merry Christmas!", description: "Santa wishes you a Merry Christmas every time your phone rings", file: "/ringtones/santa-guy-ringtone-3.zip", preview: "/ringtones/santa-guy-ringtone-3.mp3" },
  { title: "Santa's Jingle", description: "A festive jingle with Santa's voice and sleigh bells", file: "/ringtones/santa-guy-ringtone-4.zip", preview: "/ringtones/santa-guy-ringtone-4.mp3" },
  { title: "Naughty or Nice?", description: "Santa checks his list — are you naughty or nice?", file: "/ringtones/santa-guy-ringtone-5.zip", preview: "/ringtones/santa-guy-ringtone-5.mp3" },
  { title: "Christmas Eve Alert", description: "Santa's on his way — a festive alert tone", file: "/ringtones/santa-guy-ringtone-6.zip", preview: "/ringtones/santa-guy-ringtone-6.mp3" },
];

export default function SantaRingtonesPage() {
  return (
    <>
      <StructuredData data={pageSchema} />

      <Hero
        title="Santa Ringtones"
        subtitle="Free Christmas ringtones featuring the real voice of Santa. Download festive ringtones for your phone and spread the Christmas cheer every time it rings."
        compact
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Free Santa Ringtone Downloads"
            subtitle="Six festive ringtones featuring the authentic voice of Santa, Guy Harris"
          />

          <RingtoneGrid ringtones={ringtones} />

          <div className="mt-10 bg-santa-cream rounded-xl p-6 sm:p-8">
            <h3 className="font-semibold text-gray-900 mb-3 text-center">How to Set Your Santa Ringtone</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-600">
              <div>
                <p className="font-medium text-gray-900 mb-1">Android</p>
                <p>Download the zip file and extract the MP3. Go to Settings &gt; Sounds and vibration &gt; Ringtone, tap the + icon in the top right corner, browse to your downloaded file, and tap Done.</p>
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-1">iPhone / Apple</p>
                <p>Download the zip file and extract the MP3. Save it to the Files app, long-press the file, tap Share, then select Use as Ringtone. You can also set it via Settings &gt; Sounds &amp; Haptics &gt; Ringtone.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 leading-relaxed">
            Love the ringtones? Check out the{" "}
            <Link href="/santa-apps" className="text-santa-red hover:text-santa-red-dark font-medium">
              Santa Apps
            </Link>{" "}
            for more festive fun, or explore{" "}
            <Link href="/santa-text-alerts" className="text-santa-red hover:text-santa-red-dark font-medium">
              Santa Text Alerts
            </Link>{" "}
            for festive message tones. Want to{" "}
            <Link href="/hire-santa-voice" className="text-santa-red hover:text-santa-red-dark font-medium">
              hire the Santa voice
            </Link>{" "}
            for your own project?
          </p>
        </div>
      </section>

      <CTASection
        title="Want the Santa Voice for Your Brand?"
        description="The voice behind the ringtones is available for professional voiceover. Hire Guy Harris for your Christmas campaign."
        primaryCTA={{ label: "Check Availability", href: "/hire-santa-voice" }}
        secondaryCTA={{ label: "Contact", href: "/contact-santa-guy" }}
      />
    </>
  );
}
