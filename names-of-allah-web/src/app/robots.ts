import { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://namesofallah.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/settings", "/quiz/play"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
