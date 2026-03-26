import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { LayoutProvider } from "@/providers/LayoutProvider";
import { LayoutShellSwitch } from "@/components/layout/LayoutShellSwitch";
import "@/styles/globals.css";
import "@/styles/light-branding.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://namesofallah.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Names of Allah — Learn the 99 Beautiful Names (Asma ul Husna)",
    template: "%s | Names of Allah",
  },
  description:
    "Discover the 99 Beautiful Names of Allah (Asma ul Husna) through interactive Quranic stories, authentic hadiths, scholarly insights, personalised duas, and guided reflections. Learn Ar-Rahman, Ar-Raheem, Al-Malik and all 99 names.",
  keywords: [
    "99 names of Allah",
    "Asma ul Husna",
    "beautiful names of Allah",
    "names of God in Islam",
    "Ar-Rahman",
    "Ar-Raheem",
    "Al-Malik",
    "Allah names meaning",
    "Allah names with meaning",
    "learn names of Allah",
    "99 names of Allah list",
    "99 names of Allah with meaning",
    "Islamic names of God",
    "Quran names of Allah",
    "dua with Allah names",
    "Allah attributes",
    "Islamic learning",
    "Quran study",
    "hadith",
    "Islamic reflection",
    "أسماء الله الحسنى",
  ],
  authors: [{ name: "Names of Allah" }],
  creator: "Names of Allah",
  publisher: "Names of Allah",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Names of Allah",
    title: "Names of Allah — Learn the 99 Beautiful Names (Asma ul Husna)",
    description:
      "Discover the 99 Beautiful Names of Allah through interactive Quranic stories, authentic hadiths, personalised duas, and guided reflections.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Names of Allah — Learn the 99 Beautiful Names (Asma ul Husna)",
    description:
      "Discover the 99 Beautiful Names of Allah through interactive Quranic stories, authentic hadiths, personalised duas, and guided reflections.",
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "education",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Names of Allah",
    alternateName: "Asma ul Husna",
    url: SITE_URL,
    description:
      "Learn the 99 Beautiful Names of Allah through interactive stories, reflections, and guided learning.",
    inLanguage: ["en", "ar"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/names?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Names of Allah",
    url: SITE_URL,
    description:
      "An interactive platform for learning the 99 Beautiful Names of Allah (Asma ul Husna) through Quranic stories, hadiths, and reflections.",
    sameAs: [],
  };

  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#d9bf8c" />
        <link rel="canonical" href={SITE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <LayoutProvider>
            <LayoutShellSwitch>{children}</LayoutShellSwitch>
          </LayoutProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
