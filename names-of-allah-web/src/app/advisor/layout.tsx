import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feeling Advisor — Find Comfort in Allah's Names",
  description:
    "Tell us how you're feeling and discover a Name of Allah that speaks to your heart. Whether you're struggling, seeking guidance, grateful, or reflecting — find comfort through His beautiful names.",
  keywords: [
    "Islamic guidance",
    "feeling sad Islam",
    "comfort in Allah names",
    "Allah name for anxiety",
    "Allah name for hope",
    "which name of Allah",
    "Islamic emotional support",
    "dua for sadness",
    "dua for anxiety",
    "feeling lost Islam",
    "spiritual guidance Islam",
  ],
  openGraph: {
    title: "Feeling Advisor — Find Comfort in Allah's Names",
    description:
      "Tell us how you're feeling and discover a Name of Allah that speaks to your heart.",
    url: "/advisor",
  },
  alternates: {
    canonical: "/advisor",
  },
};

export default function AdvisorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
