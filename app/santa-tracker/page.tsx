import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import SantaTrackerClient from "@/components/SantaTrackerClient";

function isJulyNow(): boolean {
  return new Date().getUTCMonth() === 6;
}

export function generateMetadata(): Metadata {
  const inJuly = isJulyNow();
  const title = inJuly
    ? "Christmas in July | Santa Tracker — SantaGuy.co.uk"
    : "Santa Tracker | Track Santa's Journey Around the World";
  const description = inJuly
    ? "It's Christmas in July! See what Santa's up to mid-year — festive fun, holiday postcards, and countdown to the big night. Track Santa at SantaGuy.co.uk."
    : "Follow Santa's estimated Christmas Eve journey around the world, with a countdown, updating world map, festive facts and family fun from SantaGuy.";

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: "https://www.santaguy.co.uk/santa-tracker" },
    openGraph: {
      title,
      description,
      url: "https://www.santaguy.co.uk/santa-tracker",
      type: "website",
      locale: "en_GB",
      siteName: "SantaGuy",
      images: [
        {
          url: "https://www.santaguy.co.uk/santa-guy-logo-og.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://www.santaguy.co.uk/santa-guy-logo-og.png"],
      site: "@voiceoverman",
      creator: "@voiceoverman",
    },
  };
}

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.santaguy.co.uk/santa-tracker#webpage",
  inLanguage: "en-GB",
  name: "Santa Tracker | Track Santa's Journey Around the World",
  description:
    "Follow Santa's estimated Christmas Eve journey around the world, with a countdown, updating world map, festive facts and family fun from SantaGuy.",
  url: "https://www.santaguy.co.uk/santa-tracker",
  isPartOf: {
    "@id": "https://www.santaguy.co.uk/#website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.santaguy.co.uk",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Santa Tracker",
      item: "https://www.santaguy.co.uk/santa-tracker",
    },
  ],
};

export default function SantaTrackerPage() {
  return (
    <>
      <StructuredData data={webPageSchema} />
      <StructuredData data={breadcrumbSchema} />
      <SantaTrackerClient
        introduction={
          <>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Track Santa&apos;s Journey
              <br />
              <span className="text-santa-red">Around the World</span>
            </h1>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Follow Santa&apos;s estimated Christmas Eve journey around the world.
              Count down to his departure, follow his progress on the world map,
              and explore the estimated schedule for the big night.
            </p>
          </>
        }
      />
    </>
  );
}
