import type { MetadataRoute } from "next";
import { currentSpeakers, generateSlug } from "@/lib/speakers-constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mitbitcoinexpo.org";

  const speakerPages: MetadataRoute.Sitemap = currentSpeakers.map((speaker) => ({
    url: `${baseUrl}/speakers/${generateSlug(speaker.name)}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/hackathon`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/speakers`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...speakerPages,
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
