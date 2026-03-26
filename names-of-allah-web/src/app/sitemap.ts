import { MetadataRoute } from "next";
import { allNames } from "@/data/names";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://namesofallah.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/names`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/advisor`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/dua`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/quiz`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const approvedNames = allNames.filter((n) => n.approved);
  const namesWithContent = approvedNames.filter((n) => n.hasContent);

  // SEO landing pages — primary URL for each name (highest priority)
  const namePages: MetadataRoute.Sitemap = approvedNames.map((name) => ({
    url: `${SITE_URL}/name/${name.nameId}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.95,
  }));

  const storyPages: MetadataRoute.Sitemap = namesWithContent.map((name) => ({
    url: `${SITE_URL}/story/${name.nameId}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const learnPages: MetadataRoute.Sitemap = namesWithContent.map((name) => ({
    url: `${SITE_URL}/learn/${name.nameId}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const reflectPages: MetadataRoute.Sitemap = namesWithContent.map((name) => ({
    url: `${SITE_URL}/reflect/${name.nameId}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...namePages, ...storyPages, ...learnPages, ...reflectPages];
}
