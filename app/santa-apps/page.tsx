import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Santa Apps — 7 Free Christmas Apps from SantaGuy",
  description:
    "Download 7 free Santa apps for iOS including Santa Radio, Santa Voicemail, Santa Messages, Christmas Radio, Sleeps til Santa, Santa Text, and Santa Dash. Created by Guy Harris — the UK's trusted voice of Santa.",
  alternates: { canonical: "/santa-apps" },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Santa Apps",
  description:
    "7 free Christmas apps for iOS from SantaGuy including Santa Radio, Santa Voicemail, Santa Messages, and more.",
  url: "https://santaguy.co.uk/santa-apps",
};

const apps = [
  {
    title: "Santa Radio",
    description:
      "Non-stop Christmas music hosted by the real voice of Santa. Leave messages, play the Santa Soundboard, and enjoy festive fun all season long.",
    image: "/images/apps/santa-radio.png",
    alt: "Santa Radio iOS app showing the main player screen",
    storeUrl: "https://apps.apple.com/us/app/santa-radio/id1021183593",
    features: [
      "Leave a message for Santa",
      "Playback your child\u2019s message",
      "Santa Soundboard with festive phrases",
      "Send a message to Santa",
      "100% FREE with no adverts",
      "Listen to Santa Radio live",
    ],
  },
  {
    title: "Santa Voicemail",
    description:
      "Let your child leave a FREE voicemail message for Santa. Call Santa, call the workshop, or try the Naughty List Hotline.",
    image: "/images/apps/santa-voicemail.png",
    alt: "Santa Voicemail iOS app showing call options",
    storeUrl: "https://itunes.apple.com/us/app/santa-voicemail/id586387813",
    features: [
      "Leave a voicemail for Santa",
      "Playback your child\u2019s message",
      "Santa Soundboard with fun phrases",
      "Send a message and read replies",
      "100% FREE with no adverts",
      "Listen to Santa Radio from the app",
    ],
  },
  {
    title: "Santa Messages",
    description:
      "Santa has a personal message just for your child. Find their name, play the message, and share the magic.",
    image: "/images/apps/santa-messages.png",
    alt: "Santa Messages iOS app showing personalised name selection",
    storeUrl: "https://itunes.apple.com/gb/app/santa-messages/id1062532143",
    features: [
      "Find your child\u2019s name",
      "Share your child\u2019s message",
      "Over 600 boys and girls names",
      "Schedule a surprise message",
      "FREE with no annoying adverts",
      "Listen to Santa Radio live",
    ],
  },
  {
    title: "Christmas Radio",
    description:
      "A simpler version of our radio app. Christmas music 24/7, 365 days a year \u2014 the classics to today\u2019s hits.",
    image: "/images/apps/christmas-radio.png",
    alt: "Christmas Radio iOS app showing the music player",
    storeUrl:
      "https://itunes.apple.com/gb/app/christmas-radio-uk/id1157967613",
    features: [
      "Christmas music 24/7",
      "Record a message for Santa",
      "Share who\u2019s playing on social media",
      "Send a message \u2014 Santa replies in 24 hours",
      "100% FREE and commercial free",
      "Background player to save battery",
    ],
  },
  {
    title: "Sleeps til Santa",
    description:
      "How many sleeps til Santa arrives? Count down to Christmas with a catchy tune and share the excitement.",
    image: "/images/apps/sleeps-til-santa.png",
    alt: "Sleeps til Santa iOS app showing the countdown",
    storeUrl: "https://itunes.apple.com/gb/app/sleeps-to-santa/id949843943",
    features: [
      "See how many sleeps til Santa",
      "Play the catchy Sleeps to Santa song",
      "See the lyrics and sing along",
      "Share on Facebook and Twitter",
      "100% FREE with no adverts",
    ],
  },
  {
    title: "Santa Text",
    description:
      "Text Santa and the Father Christmas auto-bot will reply. Have a full text chat, send postcards, and enjoy free festive fun.",
    image: "/images/apps/santa-text.png",
    alt: "Santa Text iOS app showing text chat options",
    storeUrl: "https://itunes.apple.com/gb/app/santa-text/id1024535991",
    features: [
      "Have a full text chat with Santa",
      "Free festive fun \u2014 see what Santa says",
      "No charges \u2014 replies by the auto-bot",
      "No call charges or internet needed",
      "Listen to Santa Radio from the app",
      "Unlock extras with secret code words",
    ],
  },
  {
    title: "Santa Dash",
    description:
      "A great free festive game for all ages. Help Santa jump over the buildings and collect the mince pies!",
    image: "/images/apps/santa-dash.png",
    alt: "Santa Dash iOS game showing Santa running across rooftops",
    storeUrl:
      "https://itunes.apple.com/gb/app/santa-dash-from-santa-guy/id1057048397",
    landscape: true,
    features: [
      "Fun free game for all ages",
      "Jump over buildings and collect mince pies",
      "See how far you can get",
      "Links to all our other apps",
    ],
  },
];

export default function SantaAppsPage() {
  return (
    <>
      <StructuredData data={pageSchema} />

      <Hero
        title="Free iOS Santa Apps"
        subtitle="7 free Christmas apps for iOS created by the real voice of Santa. Download Santa Radio, Santa Voicemail, Santa Messages, Santa Dash and more festive fun for the whole family."
        primaryCTA={{ label: "Listen to Santa Radio", href: "/santa-radio" }}
        secondaryCTA={{
          label: "Contact Santa Guy",
          href: "/contact-santa-guy",
        }}
        compact
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Free Christmas Apps"
            subtitle="Fun, festive, and free on iOS — powered by the UK's trusted voice of Santa"
          />

          <div className="space-y-16">
            {apps.map((app, index) => {
              const imageFirst = index % 2 === 0;
              const isLandscape = "landscape" in app && app.landscape;

              return (
                <div
                  key={app.title}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
                      !imageFirst ? "lg:[direction:rtl]" : ""
                    }`}
                  >
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8 sm:p-12 lg:[direction:ltr]">
                      <img
                        src={app.image}
                        alt={app.alt}
                        className={
                          isLandscape
                            ? "w-full max-w-md object-contain"
                            : "h-[400px] sm:h-[480px] object-contain drop-shadow-xl"
                        }
                      />
                    </div>

                    <div className="p-8 sm:p-10 lg:[direction:ltr]">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {app.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {app.description}
                      </p>
                      <ul className="space-y-3 mb-8">
                        {app.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-sm text-gray-600"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-santa-red flex-shrink-0 mt-1.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={app.storeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <img
                          src="/images/available-on-the-app-store.webp"
                          alt={`Download ${app.title} on the App Store`}
                          className="h-12 w-auto hover:opacity-80 transition-opacity"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Looking for Santa ringtones or text alerts? Check out the{" "}
            <Link
              href="/santa-ringtones"
              className="text-santa-red hover:text-santa-red-dark font-medium"
            >
              Santa Ringtones
            </Link>{" "}
            and{" "}
            <Link
              href="/santa-text-alerts"
              className="text-santa-red hover:text-santa-red-dark font-medium"
            >
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
