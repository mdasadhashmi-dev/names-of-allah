import type { Metadata } from "next";
import { getNameById, allNames } from "@/data/names";
import ReflectPageClient from "./ReflectPageClient";

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

  const title = `Reflect on ${name.transliteration} (${name.arabic}) — Personal Journal`;
  const description = name.reflectionQuestion
    ? `Reflect on ${name.transliteration}, "${name.meaning}". ${name.reflectionQuestion} Write your personal reflection and deepen your connection with this beautiful name of Allah.`
    : `Write your personal reflection on ${name.transliteration} (${name.arabic}), meaning "${name.meaning}". Deepen your understanding and connection with this beautiful name of Allah.`;

  return {
    title,
    description,
    keywords: [
      `${name.transliteration} reflection`,
      `reflect on ${name.transliteration}`,
      name.transliteration,
      name.arabic,
      name.meaning,
      "Islamic reflection",
      "spiritual journal",
      "reflect on Allah names",
    ],
    openGraph: {
      title: `Reflect on ${name.transliteration} — Personal Journal`,
      description,
      url: `${SITE_URL}/reflect/${nameId}`,
    },
    twitter: {
      card: "summary",
      title: `Reflect on ${name.transliteration}`,
      description,
    },
    alternates: {
      canonical: `/reflect/${nameId}`,
    },
  };
}

export function generateStaticParams() {
  return allNames
    .filter((n) => n.hasContent && n.approved)
    .map((n) => ({ nameId: n.nameId }));
}

export default async function ReflectPage({
  params,
}: {
  params: Promise<{ nameId: string }>;
}) {
  const { nameId } = await params;
  return <ReflectPageClient nameId={nameId} />;
}
