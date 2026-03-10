import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://santaguy.co.uk";

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/guy-harris-santa-voice`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/hire-santa-voice`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/santa-voice`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/santa-apps`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/santa-radio`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact-santa-guy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/santa-guy-message`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/santa-voice-demo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/santa-ringtones`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/santa-text-alerts`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
  ];
}
