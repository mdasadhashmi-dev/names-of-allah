import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dua Builder — Personalised Supplications from Quran & Sunnah",
  description:
    "Share what's in your heart and receive authentic duas from the Quran and Sunnah, personalised to your situation. Invoke Allah by His most beautiful names with verified supplications.",
  keywords: [
    "dua builder",
    "Islamic dua",
    "dua from Quran",
    "dua from Sunnah",
    "authentic duas",
    "personalised dua",
    "supplication Islam",
    "dua for stress",
    "dua for provision",
    "dua for forgiveness",
    "dua for guidance",
    "dua with Allah names",
    "Islamic prayer",
    "make dua",
  ],
  openGraph: {
    title: "Dua Builder — Personalised Supplications from Quran & Sunnah",
    description:
      "Receive authentic duas from the Quran and Sunnah, personalised to your situation, invoking Allah by His beautiful names.",
    url: "/dua",
  },
  alternates: {
    canonical: "/dua",
  },
};

export default function DuaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
