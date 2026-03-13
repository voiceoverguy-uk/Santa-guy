import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import SantaTrackerClient from "@/components/SantaTrackerClient";

export const metadata: Metadata = {
  title: {
    absolute: "Santa Tracker | Track Santa's Journey Around the World",
  },
  description:
    "Track Santa's magical Christmas Eve journey around the world. Live route updates, countdown, festive facts, and family fun — powered by SantaGuy.co.uk.",
  alternates: { canonical: "https://santaguy.co.uk/santa-tracker" },
  openGraph: {
    title: "Santa Tracker | Track Santa's Journey Around the World",
    description:
      "Track Santa's magical Christmas Eve journey around the world. Live route updates, countdown, festive facts, and family fun.",
    url: "https://santaguy.co.uk/santa-tracker",
    type: "website",
    locale: "en_GB",
    siteName: "SantaGuy",
    images: [
      {
        url: "https://santaguy.co.uk/santa-guy-logo-og.png",
        width: 1200,
        height: 630,
        alt: "Santa Tracker — Track Santa's Journey Around the World",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Santa Tracker | Track Santa's Journey Around the World",
    description:
      "Track Santa's magical Christmas Eve journey around the world. Live route updates, countdown, festive facts, and family fun.",
    images: ["https://santaguy.co.uk/santa-guy-logo-og.png"],
    site: "@voiceoverman",
    creator: "@voiceoverman",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Santa Tracker | Track Santa's Journey Around the World",
  description:
    "Track Santa's magical Christmas Eve journey around the world with live updates, countdowns, route progress, festive facts, and family fun.",
  url: "https://santaguy.co.uk/santa-tracker",
  isPartOf: {
    "@type": "WebSite",
    name: "SantaGuy",
    url: "https://santaguy.co.uk",
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
      item: "https://santaguy.co.uk",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Santa Tracker",
      item: "https://santaguy.co.uk/santa-tracker",
    },
  ],
};

export default function SantaTrackerPage() {
  return (
    <>
      <StructuredData data={webPageSchema} />
      <StructuredData data={breadcrumbSchema} />
      <SantaTrackerClient />
    </>
  );
}
