import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.santaguy.co.uk";

  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/guy-harris-santa-voice`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/hire-santa-voice`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/santa-voice`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/santa-apps`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/santa-radio`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact-santa-guy`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/santa-guy-message`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/santa-voice-demo`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/santa-ringtones`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/santa-tracker`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/santa-text-alerts`, changeFrequency: "monthly", priority: 0.4 },
  ];
}
