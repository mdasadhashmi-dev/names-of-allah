import type { Metadata } from "next";
import { getNameById, allNames } from "@/data/names";
import StoryPageClient from "./StoryPageClient";

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

  const title = `${name.transliteration} (${name.arabic}) — ${name.meaning}`;
  const description = name.storyTitle
    ? `${name.transliteration} (${name.arabic}) means "${name.meaning}". Read the story: "${name.storyTitle}". ${name.quranicReference ? `Quranic reference: ${name.quranicReference}.` : ""} Learn about this beautiful name of Allah through an interactive narrative.`
    : `${name.transliteration} (${name.arabic}) means "${name.meaning}". Discover the significance of this beautiful name of Allah through an interactive story, Quranic references, and guided reflection.`;

  return {
    title,
    description,
    keywords: [
      name.transliteration,
      name.arabic,
      name.meaning,
      `${name.transliteration} meaning`,
      `${name.transliteration} story`,
      `${name.transliteration} Quran`,
      `name of Allah ${name.transliteration}`,
      "99 names of Allah",
      "Asma ul Husna",
      name.quranicReference || "",
    ].filter(Boolean),
    openGraph: {
      title: `${name.transliteration} — ${name.meaning} | Names of Allah`,
      description,
      url: `${SITE_URL}/story/${nameId}`,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: `${name.transliteration} — ${name.meaning}`,
      description,
    },
    alternates: {
      canonical: `/story/${nameId}`,
    },
  };
}

export function generateStaticParams() {
  return allNames
    .filter((n) => n.hasContent && n.approved)
    .map((n) => ({ nameId: n.nameId }));
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ nameId: string }>;
}) {
  const { nameId } = await params;
  const name = getNameById(nameId);

  if (!name) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-bg to-black">
        <p className="text-white/60">Name not found</p>
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: name.storyTitle || `The Story of ${name.transliteration}`,
    description: `${name.transliteration} (${name.arabic}) — ${name.meaning}`,
    author: { "@type": "Organization", name: "Names of Allah" },
    publisher: { "@type": "Organization", name: "Names of Allah" },
    inLanguage: ["en", "ar"],
    about: {
      "@type": "Thing",
      name: name.transliteration,
      alternateName: name.arabic,
      description: name.meaning,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StoryPageClient nameId={nameId} />
    </>
  );
}
