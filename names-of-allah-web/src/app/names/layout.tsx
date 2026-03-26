import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All 99 Names of Allah — Complete List with Meanings",
  description:
    "Browse the complete list of 99 Beautiful Names of Allah (Asma ul Husna) with Arabic text, transliteration, and English meanings. Search by name, meaning, or number. Includes Ar-Rahman, Ar-Raheem, Al-Malik, and more.",
  keywords: [
    "99 names of Allah list",
    "all names of Allah",
    "Asma ul Husna list",
    "Allah names with meaning",
    "99 names of Allah in English",
    "99 names of Allah in Arabic",
    "names of Allah transliteration",
    "beautiful names of Allah complete list",
  ],
  openGraph: {
    title: "All 99 Names of Allah — Complete List with Meanings",
    description:
      "Browse the complete list of 99 Beautiful Names of Allah with Arabic text, transliteration, and English meanings.",
    url: "/names",
  },
  alternates: {
    canonical: "/names",
  },
};

export default function NamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
