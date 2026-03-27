import type { Metadata } from "next";
import Link from "next/link";
import { getNameById, allNames, type AllahName } from "@/data/names";
import {
  getExtendedLearning,
  type ExtendedLearning,
} from "@/data/extended-learning";
import { getDuaForName, type NameDua } from "@/data/duas";
import { getScholarlyExplanation } from "@/data/scholarly-explanations";
import {
  BookOpen,
  Star,
  PenLine,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Quote,
  Lightbulb,
  HandHeart,
  Heart,
  Sparkles,
  Clock,
  ScrollText,
} from "lucide-react";
import { ScrollProgressBar } from "@/components/shared/ScrollProgressBar";

function estimateReadingTime(
  name: AllahName,
  learning: ExtendedLearning | undefined,
  dua: NameDua | null
): number {
  let wordCount = 0;
  wordCount += name.meaning?.split(/\s+/).length || 0;
  wordCount += name.reflectionQuestion?.split(/\s+/).length || 0;
  wordCount += name.storyTitle?.split(/\s+/).length || 0;

  if (learning) {
    for (const h of learning.hadiths) {
      wordCount += h.translation.split(/\s+/).length;
      wordCount += h.context.split(/\s+/).length;
    }
    for (const i of learning.scholarlyInsights) {
      wordCount += i.insight.split(/\s+/).length;
    }
    for (const a of learning.realLifeApplications) {
      wordCount += a.split(/\s+/).length;
    }
  }

  if (dua) {
    wordCount += dua.translation.split(/\s+/).length;
  }

  return Math.max(1, Math.ceil(wordCount / 200));
}

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://namesofallah.app";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ nameId: string }>;
}): Promise<Metadata> {
  const { nameId } = await params;
  const name = getNameById(nameId);

  if (!name) return { title: "Name Not Found" };

  const title = `${name.transliteration} (${name.arabic}) — ${name.meaning} | Name #${name.number} of 99`;
  const description = [
    `${name.transliteration} (${name.arabic}) is one of the 99 Beautiful Names of Allah (Asma ul Husna), meaning "${name.meaning}".`,
    name.storyTitle ? `Story: "${name.storyTitle}".` : "",
    name.quranicReference ? `Quranic reference: ${name.quranicReference}.` : "",
    `Explore hadiths, scholarly insights, authentic duas, and reflections on this divine name.`,
  ]
    .filter(Boolean)
    .join(" ");

  return {
    title,
    description,
    keywords: [
      name.transliteration,
      `${name.transliteration} meaning`,
      `${name.transliteration} in Arabic`,
      `${name.transliteration} benefits`,
      `${name.transliteration} dua`,
      `${name.transliteration} hadith`,
      name.arabic,
      name.meaning,
      `name of Allah ${name.transliteration}`,
      `Allah name #${name.number}`,
      "99 names of Allah",
      "Asma ul Husna",
      "beautiful names of Allah",
      name.quranicReference || "",
    ].filter(Boolean),
    openGraph: {
      title: `${name.transliteration} — ${name.meaning} | 99 Names of Allah`,
      description,
      url: `${SITE_URL}/name/${nameId}`,
      type: "article",
      siteName: "Names of Allah",
    },
    twitter: {
      card: "summary_large_image",
      title: `${name.transliteration} (${name.arabic}) — ${name.meaning}`,
      description,
    },
    alternates: {
      canonical: `/name/${nameId}`,
    },
  };
}

export function generateStaticParams() {
  return allNames
    .filter((n) => n.approved)
    .map((n) => ({ nameId: n.nameId }));
}

export default async function NameSEOPage({
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

  const learning = getExtendedLearning(nameId);
  const dua = getDuaForName(nameId);
  const scholarly = getScholarlyExplanation(nameId);
  const readingTime = estimateReadingTime(name, learning, dua);
  const approvedNames = allNames.filter((n) => n.approved);
  const currentIndex = approvedNames.findIndex((n) => n.nameId === nameId);
  const prevName = currentIndex > 0 ? approvedNames[currentIndex - 1] : null;
  const nextName =
    currentIndex < approvedNames.length - 1
      ? approvedNames[currentIndex + 1]
      : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${name.transliteration} (${name.arabic}) — ${name.meaning}`,
    description: `${name.transliteration} is one of the 99 Beautiful Names of Allah, meaning "${name.meaning}".`,
    author: { "@type": "Organization", name: "Names of Allah" },
    publisher: { "@type": "Organization", name: "Names of Allah" },
    inLanguage: ["en", "ar"],
    mainEntityOfPage: `${SITE_URL}/name/${nameId}`,
    about: {
      "@type": "Thing",
      name: name.transliteration,
      alternateName: name.arabic,
      description: name.meaning,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What does ${name.transliteration} mean?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${name.transliteration} (${name.arabic}) means "${name.meaning}". It is name #${name.number} of the 99 Beautiful Names of Allah (Asma ul Husna).`,
        },
      },
      name.quranicReference
        ? {
            "@type": "Question",
            name: `Where is ${name.transliteration} mentioned in the Quran?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `${name.transliteration} is referenced in ${name.quranicReference}.`,
            },
          }
        : null,
      name.reflectionQuestion
        ? {
            "@type": "Question",
            name: `How to reflect on ${name.transliteration}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: name.reflectionQuestion,
            },
          }
        : null,
    ].filter(Boolean),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <ScrollProgressBar />
      <div className="min-h-screen relative">
        <div className="fixed inset-0 bg-gradient-to-b from-[#030510] via-[#0a1028] to-black dark-bg-overlay" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8">
          {/* ── Breadcrumb ── */}
          <nav className="pt-6 pb-4" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/30">
              <li>
                <Link href="/names" className="hover:text-white/60 transition-colors">
                  99 Names
                </Link>
              </li>
              <li>/</li>
              <li className="text-white/50">
                {name.transliteration}
              </li>
            </ol>
          </nav>

          {/* ══════════════════════════════════════════
              HERO SECTION
          ══════════════════════════════════════════ */}
          <header className="text-center pt-8 pb-12 lg:pt-14 lg:pb-16">
            {/* Number badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-8"
              style={{
                background: "rgba(217,191,140,0.08)",
                border: "1px solid rgba(217,191,140,0.18)",
                color: "rgb(217,191,140)",
              }}
            >
              <Sparkles size={12} />
              Name #{name.number} of 99
            </div>

            {/* Arabic name — large */}
            <h1
              className="arabic-text text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight"
              style={{
                color: "rgb(217, 191, 140)",
                textShadow: "0 0 40px rgba(217, 191, 140, 0.2)",
              }}
            >
              {name.arabic}
            </h1>

            {/* Transliteration */}
            <p className="text-2xl md:text-3xl font-serif mb-2 text-white/90">
              {name.transliteration}
            </p>

            {/* Meaning */}
            <p className="text-lg md:text-xl text-white/50 font-serif italic mb-8">
              &ldquo;{name.meaning}&rdquo;
            </p>

            {/* Divider */}
            <div
              className="w-24 h-px mx-auto mb-8"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgb(217,191,140), transparent)",
              }}
            />

            {/* Quranic reference */}
            {name.quranicReference && (
              <p className="text-sm text-white/40 font-serif">
                Quranic Reference:{" "}
                <span className="text-white/60">{name.quranicReference}</span>
              </p>
            )}

            {/* Reading time */}
            <div className="inline-flex items-center gap-1.5 text-xs text-white/35 mt-4">
              <Clock size={12} />
              <span>{readingTime} min read</span>
            </div>
          </header>

          {/* Compact TOC */}
          <nav className="mb-12 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-white/30">
            {scholarly && (
              <a href="#scholarly" className="hover:text-white/60 transition-colors">
                Scholarly Explanation
              </a>
            )}
            {name.reflectionQuestion && (
              <a href="#reflection" className="hover:text-white/60 transition-colors">
                Reflection
              </a>
            )}
            {learning && learning.hadiths.length > 0 && (
              <a href="#hadiths" className="hover:text-white/60 transition-colors">
                Hadiths
              </a>
            )}
            {learning && learning.scholarlyInsights.length > 0 && (
              <a href="#scholars" className="hover:text-white/60 transition-colors">
                Scholars
              </a>
            )}
            {dua && (
              <a href="#dua" className="hover:text-white/60 transition-colors">
                Dua
              </a>
            )}
            {learning && learning.realLifeApplications.length > 0 && (
              <a href="#applications" className="hover:text-white/60 transition-colors">
                Applications
              </a>
            )}
          </nav>

          {/* ── CTA: Enter the Story ── */}
          {name.hasContent && (
            <section className="mb-12 lg:mb-16">
              <Link
                href={`/story/${nameId}`}
                className="block rounded-2xl p-8 lg:p-10 text-center transition-all hover:scale-[1.01]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(217,191,140,0.08), rgba(217,191,140,0.03))",
                  border: "1px solid rgba(217,191,140,0.2)",
                }}
              >
                {name.storyTitle && (
                  <p
                    className="text-xs font-medium uppercase tracking-widest mb-3"
                    style={{ color: "rgb(217,191,140)" }}
                  >
                    Interactive Story
                  </p>
                )}
                <h2 className="text-2xl lg:text-3xl font-serif text-white mb-3">
                  {name.storyTitle || `The Story of ${name.transliteration}`}
                </h2>
                <p className="text-sm text-white/45 max-w-md mx-auto mb-6 leading-relaxed">
                  Experience this name through an immersive narrative journey
                  with Quranic verses, animations, and guided reflection.
                </p>
                <span
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-medium transition-all"
                  style={{
                    background: "rgba(217,191,140,0.18)",
                    border: "1px solid rgba(217,191,140,0.3)",
                    color: "rgb(217,191,140)",
                  }}
                >
                  <Star size={16} />
                  Begin the Story
                  <ArrowRight size={16} />
                </span>
              </Link>
            </section>
          )}

          {/* ══════════════════════════════════════════
              SCHOLARLY EXPLANATION (as-Sa'di)
          ══════════════════════════════════════════ */}
          {scholarly && (
            <section id="scholarly" className="mb-12 lg:mb-16">
              <div className="flex items-center gap-2 mb-6">
                <ScrollText size={16} style={{ color: "rgb(217,191,140)" }} />
                <h2
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "rgb(217,191,140)" }}
                >
                  Scholarly Explanation
                </h2>
              </div>

              <article
                className="rounded-2xl p-6 lg:p-8"
                style={{
                  background: "rgba(217,191,140,0.04)",
                  border: "1px solid rgba(217,191,140,0.12)",
                }}
              >
                {/* Main explanation */}
                <p className="text-sm lg:text-base text-white/80 font-serif leading-relaxed mb-6">
                  {scholarly.explanation}
                </p>

                {/* Quranic verses */}
                {scholarly.quranicVerses.length > 0 && (
                  <div className="space-y-4">
                    {scholarly.quranicVerses.map((verse, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl p-4 lg:p-5"
                        style={{
                          background: "rgba(217,191,140,0.06)",
                          border: "1px solid rgba(217,191,140,0.08)",
                        }}
                      >
                        <p className="text-sm text-white/70 font-serif italic leading-relaxed mb-2">
                          &ldquo;{verse.text}&rdquo;
                        </p>
                        <p
                          className="text-xs font-medium"
                          style={{ color: "rgba(217,191,140,0.7)" }}
                        >
                          [{verse.reference}]
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Source attribution */}
                <div
                  className="mt-6 pt-4 text-xs text-white/30 italic"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <p>
                    From &ldquo;Explanation to the Beautiful and Perfect Names of
                    Allah&rdquo; — Shaykh as-Sa&rsquo;di (d.1376H)
                  </p>
                </div>
              </article>
            </section>
          )}

          {/* ── Reflection Question ── */}
          {name.reflectionQuestion && (
            <section id="reflection" className="mb-12 lg:mb-16">
              <div
                className="rounded-2xl p-8 text-center"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <PenLine
                  size={20}
                  className="mx-auto mb-4"
                  style={{ color: "rgba(217,191,140,0.6)" }}
                />
                <h2 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "rgb(217,191,140)" }}>
                  Reflect on This Name
                </h2>
                <blockquote className="font-serif text-lg lg:text-xl italic text-white/75 leading-relaxed max-w-2xl mx-auto mb-6">
                  &ldquo;{name.reflectionQuestion}&rdquo;
                </blockquote>
                <Link
                  href={`/reflect/${nameId}`}
                  className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
                >
                  <PenLine size={14} />
                  Write your reflection
                </Link>
              </div>
            </section>
          )}

          {/* ══════════════════════════════════════════
              HADITHS SECTION
          ══════════════════════════════════════════ */}
          {learning && learning.hadiths.length > 0 && (
            <section id="hadiths" className="mb-12 lg:mb-16">
              <div className="flex items-center gap-2 mb-6">
                <Quote size={16} style={{ color: "rgb(217,191,140)" }} />
                <h2
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "rgb(217,191,140)" }}
                >
                  Prophetic Traditions
                </h2>
              </div>

              <div className="space-y-4">
                {learning.hadiths.map((hadith, idx) => (
                  <article
                    key={idx}
                    className="rounded-2xl p-6 lg:p-8"
                    style={{
                      background: "rgba(217,191,140,0.04)",
                      border: "1px solid rgba(217,191,140,0.1)",
                    }}
                  >
                    <p
                      className="arabic-text text-xl lg:text-2xl leading-loose text-center mb-4 pb-4"
                      style={{
                        color: "rgb(217,191,140)",
                        borderBottom: "1px solid rgba(217,191,140,0.1)",
                      }}
                    >
                      {hadith.arabicText}
                    </p>
                    <p className="text-base text-white/80 font-serif leading-relaxed mb-3 italic">
                      &ldquo;{hadith.translation}&rdquo;
                    </p>
                    <p className="text-sm text-white/50 mb-4 leading-relaxed">
                      {hadith.context}
                    </p>
                    <div
                      className="flex items-center justify-between text-xs text-white/35 pt-3 flex-wrap gap-2"
                      style={{
                        borderTop: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <div>
                        <span className="text-white/50">{hadith.narrator}</span>
                        <span className="mx-2">&middot;</span>
                        <span>{hadith.reference}</span>
                      </div>
                      <span
                        className="px-2 py-0.5 rounded-full text-xs font-medium"
                        style={{
                          background: "rgba(34,197,94,0.12)",
                          color: "rgb(34,197,94)",
                        }}
                      >
                        {hadith.grading}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* ══════════════════════════════════════════
              SCHOLARLY INSIGHTS
          ══════════════════════════════════════════ */}
          {learning && learning.scholarlyInsights.length > 0 && (
            <section id="scholars" className="mb-12 lg:mb-16">
              <div className="flex items-center gap-2 mb-6">
                <Lightbulb size={16} style={{ color: "rgb(217,191,140)" }} />
                <h2
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "rgb(217,191,140)" }}
                >
                  Scholarly Insights
                </h2>
              </div>

              <div className="space-y-4">
                {learning.scholarlyInsights.map((insight, idx) => (
                  <article
                    key={idx}
                    className="rounded-2xl p-6"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    {insight.arabicQuote && (
                      <p
                        className="arabic-text text-lg leading-loose mb-3 text-right"
                        style={{ color: "rgba(217,191,140,0.75)" }}
                      >
                        {insight.arabicQuote}
                      </p>
                    )}
                    <p className="text-sm lg:text-base text-white/70 font-serif leading-relaxed mb-3">
                      {insight.insight}
                    </p>
                    <div className="flex items-center justify-between text-xs text-white/35">
                      <span className="font-medium text-white/50">
                        {insight.scholar}
                      </span>
                      <span>{insight.source}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* ── Mid-article Story CTA ── */}
          {name.hasContent && (
            <section className="my-16">
              <div
                className="relative rounded-2xl overflow-hidden p-10 lg:p-12 text-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(217,191,140,0.12) 0%, rgba(217,191,140,0.04) 100%)",
                  border: "1px solid rgba(217,191,140,0.25)",
                }}
              >
                <div className="absolute top-4 right-4 flex gap-1 opacity-30">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "rgb(217,191,140)" }}
                    />
                  ))}
                </div>

                <p
                  className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
                  style={{ color: "rgb(217,191,140)" }}
                >
                  Experience This Name
                </p>
                <h3 className="text-xl lg:text-2xl font-serif text-white/90 mb-3">
                  {name.storyTitle ||
                    `The Story of ${name.transliteration}`}
                </h3>
                <p className="text-sm text-white/45 max-w-lg mx-auto mb-8 leading-relaxed">
                  Continue your journey with an immersive interactive
                  narrative, complete with Quranic recitation, animations, and
                  guided reflection.
                </p>
                <Link
                  href={`/story/${nameId}`}
                  className="inline-flex items-center gap-2 px-10 py-3.5 rounded-full text-sm font-medium transition-all hover:scale-105"
                  style={{
                    background: "rgba(217,191,140,0.2)",
                    border: "1px solid rgba(217,191,140,0.35)",
                    color: "rgb(217,191,140)",
                  }}
                >
                  <Star size={16} />
                  Begin the Story
                  <ArrowRight size={16} />
                </Link>
              </div>
            </section>
          )}

          {/* ══════════════════════════════════════════
              DUA SECTION
          ══════════════════════════════════════════ */}
          {dua && (
            <section id="dua" className="mb-12 lg:mb-16">
              <div className="flex items-center gap-2 mb-6">
                <HandHeart size={16} style={{ color: "rgb(217,191,140)" }} />
                <h2
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "rgb(217,191,140)" }}
                >
                  Supplication
                </h2>
              </div>

              <article
                className="rounded-2xl p-6 lg:p-8"
                style={{
                  background: "rgba(217,191,140,0.04)",
                  border: "1px solid rgba(217,191,140,0.12)",
                }}
              >
                <p
                  className="arabic-text text-xl lg:text-2xl leading-loose text-center mb-4"
                  style={{ color: "rgb(217,191,140)" }}
                >
                  {dua.arabicText}
                </p>
                <p className="text-xs text-white/40 italic text-center mb-4 leading-relaxed">
                  {dua.transliteration}
                </p>
                <p
                  className="text-sm lg:text-base font-serif text-white/80 text-center leading-relaxed mb-4 pt-4"
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  &ldquo;{dua.translation}&rdquo;
                </p>
                <div
                  className="flex flex-col gap-1 text-xs text-white/35 pt-3 text-center"
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span>{dua.source}</span>
                  <span className="text-white/50 font-serif italic">
                    {dua.connection}
                  </span>
                </div>
              </article>
            </section>
          )}

          {/* ══════════════════════════════════════════
              REAL-LIFE APPLICATIONS
          ══════════════════════════════════════════ */}
          {learning && learning.realLifeApplications.length > 0 && (
            <section id="applications" className="mb-12 lg:mb-16">
              <div className="flex items-center gap-2 mb-6">
                <Heart size={16} style={{ color: "rgb(217,191,140)" }} />
                <h2
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "rgb(217,191,140)" }}
                >
                  Living With {name.transliteration}
                </h2>
              </div>

              <div
                className="rounded-2xl p-6 lg:p-8"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <ul className="space-y-4">
                  {learning.realLifeApplications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                        style={{
                          background: "rgba(217,191,140,0.12)",
                          color: "rgb(217,191,140)",
                        }}
                      >
                        {idx + 1}
                      </span>
                      <p className="text-sm lg:text-base text-white/70 font-serif leading-relaxed">
                        {app}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* ── Quick Links ── */}
          <section className="mb-12 lg:mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {name.hasContent && (
                <Link
                  href={`/story/${nameId}`}
                  className="flex items-center gap-3 p-4 rounded-xl transition-all hover:scale-[1.02]"
                  style={{
                    background: "rgba(217,191,140,0.06)",
                    border: "1px solid rgba(217,191,140,0.15)",
                  }}
                >
                  <Star
                    size={18}
                    style={{ color: "rgb(217,191,140)" }}
                  />
                  <div>
                    <p className="text-sm font-medium text-white/85">
                      Read Story
                    </p>
                    <p className="text-xs text-white/35">
                      Interactive experience
                    </p>
                  </div>
                </Link>
              )}
              <Link
                href={`/learn/${nameId}`}
                className="flex items-center gap-3 p-4 rounded-xl transition-all hover:scale-[1.02]"
                style={{
                  background: "rgba(102,153,230,0.06)",
                  border: "1px solid rgba(102,153,230,0.15)",
                }}
              >
                <BookOpen
                  size={18}
                  style={{ color: "rgb(102,153,230)" }}
                />
                <div>
                  <p className="text-sm font-medium text-white/85">
                    Deep Learning
                  </p>
                  <p className="text-xs text-white/35">
                    Hadiths &amp; scholars
                  </p>
                </div>
              </Link>
              <Link
                href={`/reflect/${nameId}`}
                className="flex items-center gap-3 p-4 rounded-xl transition-all hover:scale-[1.02]"
                style={{
                  background: "rgba(102,204,153,0.06)",
                  border: "1px solid rgba(102,204,153,0.15)",
                }}
              >
                <PenLine
                  size={18}
                  style={{ color: "rgb(102,204,153)" }}
                />
                <div>
                  <p className="text-sm font-medium text-white/85">
                    Reflect
                  </p>
                  <p className="text-xs text-white/35">
                    Personal journal
                  </p>
                </div>
              </Link>
            </div>
          </section>

          {/* ── Prev / Next Navigation ── */}
          <nav className="pb-16 lg:pb-20">
            <div
              className="h-px mb-8"
              style={{ background: "rgba(255,255,255,0.06)" }}
            />
            <div className="flex items-center justify-between">
              {prevName ? (
                <Link
                  href={`/name/${prevName.nameId}`}
                  className="flex items-center gap-3 group"
                >
                  <ChevronLeft
                    size={20}
                    className="text-white/25 group-hover:text-white/60 transition-colors"
                  />
                  <div>
                    <p className="text-xs text-white/30">Previous</p>
                    <p className="text-sm text-white/60 group-hover:text-white/90 transition-colors">
                      {prevName.transliteration}
                    </p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              <Link
                href="/names"
                className="text-xs text-white/25 hover:text-white/50 transition-colors"
              >
                All 99 Names
              </Link>

              {nextName ? (
                <Link
                  href={`/name/${nextName.nameId}`}
                  className="flex items-center gap-3 group text-right"
                >
                  <div>
                    <p className="text-xs text-white/30">Next</p>
                    <p className="text-sm text-white/60 group-hover:text-white/90 transition-colors">
                      {nextName.transliteration}
                    </p>
                  </div>
                  <ChevronRight
                    size={20}
                    className="text-white/25 group-hover:text-white/60 transition-colors"
                  />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
