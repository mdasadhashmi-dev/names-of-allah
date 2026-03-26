import type { Metadata } from "next";
import { getNameById, allNames } from "@/data/names";
import LearnPageClient from "./LearnPageClient";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://namesofallah.app";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ nameId: string }>;
}): Promise<Metadata> {
  const { nameId } = await params;
  const name = getNameById(nameId);

  if (!name) {
    return { title: "Name Not Found" };
  }

  const title = `Learn ${name.transliteration} (${name.arabic}) — Hadiths, Scholars & Duas`;
  const description = `Deep dive into ${name.transliteration} (${name.arabic}), meaning "${name.meaning}". Explore authentic hadiths, scholarly insights from classical scholars, supplications (duas), and practical ways to live with this name of Allah.`;

  return {
    title,
    description,
    keywords: [
      `${name.transliteration} hadith`,
      `${name.transliteration} meaning`,
      `${name.transliteration} dua`,
      `${name.transliteration} scholarly`,
      name.transliteration,
      name.arabic,
      name.meaning,
      "hadith about Allah names",
      "scholarly insights Islam",
      "dua with Allah names",
      "99 names of Allah",
    ],
    openGraph: {
      title: `Learn ${name.transliteration} — Hadiths, Scholars & Duas`,
      description,
      url: `${SITE_URL}/learn/${nameId}`,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: `Learn ${name.transliteration} — Hadiths, Scholars & Duas`,
      description,
    },
    alternates: {
      canonical: `/learn/${nameId}`,
    },
  };
}

export function generateStaticParams() {
  return allNames
    .filter((n) => n.hasContent && n.approved)
    .map((n) => ({ nameId: n.nameId }));
}

export default async function LearnPage({
  params,
}: {
  params: Promise<{ nameId: string }>;
}) {
  const { nameId } = await params;
  const name = getNameById(nameId);

  const jsonLd = name
    ? {
        "@context": "https://schema.org",
        "@type": "Course",
        name: `Learn ${name.transliteration} (${name.arabic})`,
        description: `In-depth study of ${name.transliteration}, meaning "${name.meaning}". Includes hadiths, scholarly insights, duas, and real-life applications.`,
        provider: { "@type": "Organization", name: "Names of Allah" },
        inLanguage: ["en", "ar"],
        about: {
          "@type": "Thing",
          name: name.transliteration,
          alternateName: name.arabic,
          description: name.meaning,
        },
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <LearnPageClient nameId={nameId} />
    </>
  );
}
