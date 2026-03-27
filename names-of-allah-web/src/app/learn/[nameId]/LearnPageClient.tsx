"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { BookOpen, Quote, Lightbulb, Heart, HandHeart, ExternalLink } from "lucide-react";
import { getNameById } from "@/data/names";
import { getExtendedLearning } from "@/data/extended-learning";

const SECTIONS = [
  { id: "hadiths", label: "Prophetic Traditions", icon: Quote },
  { id: "scholars", label: "Scholarly Insights", icon: Lightbulb },
  { id: "duas", label: "Supplications", icon: HandHeart },
  { id: "living", label: "Living With This Name", icon: Heart },
];

export default function LearnPageClient({ nameId }: { nameId: string }) {
  const router = useRouter();
  const name = getNameById(nameId);
  const learning = getExtendedLearning(nameId);

  if (!name) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-bg to-black">
        <p className="text-white/60">Name not found</p>
      </div>
    );
  }

  if (!learning) {
    return (
      <div className="min-h-screen relative">
        <div className="fixed inset-0 bg-gradient-to-b from-dark-bg to-black" />
        <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-lg font-semibold text-white">{name.transliteration}</h1>
            <p className="text-sm text-white/40">Extended Learning</p>
          </div>
          <div className="glass rounded-2xl p-10 text-center">
            <BookOpen size={48} className="mx-auto mb-4 opacity-40" style={{ color: "var(--article-accent)" }} />
            <h2 className="text-xl font-serif mb-2" style={{ color: "var(--article-accent)" }}>Coming Soon</h2>
            <p className="text-sm text-white/45 max-w-xs mx-auto leading-relaxed">
              Extended learning content for {name.transliteration} — including hadiths,
              scholarly insights, and duas — will be available soon.
            </p>
            <button
              onClick={() => router.back()}
              className="mt-6 text-sm text-white/35 hover:text-white/55 transition-colors"
            >
              &larr; Go back
            </button>
          </div>
        </div>
      </div>
    );
  }

  const availableSections = SECTIONS.filter((s) => {
    if (s.id === "hadiths") return learning.hadiths.length > 0;
    if (s.id === "scholars") return learning.scholarlyInsights.length > 0;
    if (s.id === "duas") return learning.duas.length > 0;
    if (s.id === "living") return learning.realLifeApplications.length > 0;
    return false;
  });

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-gradient-to-b from-dark-bg to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-10">
        {/* Name header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 lg:mb-10"
        >
          <div className="flex items-end gap-4 flex-wrap">
            <div
              className="arabic-text text-4xl lg:text-5xl font-bold"
              style={{ color: "var(--article-accent)" }}
            >
              {name.arabic}
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-semibold text-white">
                {name.transliteration}
              </h1>
              <p className="text-sm text-white/45">{name.meaning}</p>
            </div>
          </div>
          <div
            className="mt-4 h-px"
            style={{ background: "var(--article-badge-bg)" }}
          />
        </motion.div>

        {/* Two-column layout: main content + TOC sidebar */}
        <div className="flex gap-10">
          {/* Main content */}
          <div className="flex-1 min-w-0 space-y-10 pb-20">

            {/* Hadiths */}
            {learning.hadiths.length > 0 && (
              <motion.section
                id="hadiths"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="scroll-mt-8"
              >
                <SectionHeader icon={Quote} label="Prophetic Traditions" />
                <div className="space-y-4 mt-4">
                  {learning.hadiths.map((hadith, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl p-6"
                      style={{
                        background: "var(--article-card-bg)",
                        border: "1px solid var(--article-card-border-med)",
                      }}
                    >
                      <p
                        className="arabic-text text-xl lg:text-2xl leading-loose text-center mb-4 pb-4"
                        style={{
                          color: "var(--article-accent)",
                          borderBottom: "1px solid var(--article-card-border-med)",
                        }}
                      >
                        {hadith.arabicText}
                      </p>
                      <p className="text-base text-white/80 font-serif leading-relaxed mb-3 italic">
                        &ldquo;{hadith.translation}&rdquo;
                      </p>
                      <p className="text-sm text-white/50 mb-4 leading-relaxed">{hadith.context}</p>
                      <div
                        className="flex items-center justify-between text-xs text-white/35 pt-3"
                        style={{ borderTop: "1px solid var(--article-divider)" }}
                      >
                        <div>
                          <span className="text-white/50">{hadith.narrator}</span>
                          <span className="mx-2">&middot;</span>
                          <span>{hadith.reference}</span>
                          <span className="mx-2">&middot;</span>
                          <span>{hadith.source}</span>
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
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Scholarly Insights */}
            {learning.scholarlyInsights.length > 0 && (
              <motion.section
                id="scholars"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="scroll-mt-8"
              >
                <SectionHeader icon={Lightbulb} label="Scholarly Insights" />
                <div className="space-y-4 mt-4">
                  {learning.scholarlyInsights.map((insight, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl p-5"
                      style={{
                        background: "var(--article-surface-alt)",
                        border: "1px solid var(--article-divider-alt)",
                      }}
                    >
                      {insight.arabicQuote && (
                        <p
                          className="arabic-text text-lg leading-loose mb-3 text-right"
                          style={{ color: "var(--article-accent-muted)" }}
                        >
                          {insight.arabicQuote}
                        </p>
                      )}
                      <p className="text-sm lg:text-base text-white/70 font-serif leading-relaxed mb-3">
                        {insight.insight}
                      </p>
                      <div className="flex items-center justify-between text-xs text-white/35">
                        <span className="font-medium text-white/50">{insight.scholar}</span>
                        <span>{insight.source}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Duas */}
            {learning.duas.length > 0 && (
              <motion.section
                id="duas"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="scroll-mt-8"
              >
                <SectionHeader icon={HandHeart} label="Supplications" />
                <div className="space-y-4 mt-4">
                  {learning.duas.map((dua, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl p-6"
                      style={{
                        background: "var(--article-card-bg)",
                        border: "1px solid var(--article-card-border)",
                      }}
                    >
                      <p
                        className="arabic-text text-xl leading-loose text-center mb-3"
                        style={{ color: "var(--article-accent)" }}
                      >
                        {dua.arabicText}
                      </p>
                      <p className="text-sm text-white/40 italic text-center mb-3">
                        {dua.transliteration}
                      </p>
                      <p className="text-sm text-white/75 font-serif leading-relaxed text-center mb-4">
                        &ldquo;{dua.translation}&rdquo;
                      </p>
                      <div
                        className="flex items-center justify-between text-xs text-white/35 pt-3"
                        style={{ borderTop: "1px solid var(--article-divider)" }}
                      >
                        <span>{dua.occasion}</span>
                        <span>{dua.source}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Real-Life Applications */}
            {learning.realLifeApplications.length > 0 && (
              <motion.section
                id="living"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="scroll-mt-8"
              >
                <SectionHeader icon={Heart} label="Living With This Name" />
                <div
                  className="mt-4 rounded-2xl p-6"
                  style={{
                    background: "var(--article-surface)",
                    border: "1px solid var(--article-divider-alt)",
                  }}
                >
                  <ul className="space-y-4">
                    {learning.realLifeApplications.map((app, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span
                          className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                          style={{
                            background: "var(--article-num-bg)",
                            color: "var(--article-accent)",
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
              </motion.section>
            )}
          </div>

          {/* TOC Sidebar — desktop only */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-8">
              <p className="text-xs text-white/30 uppercase tracking-wider mb-4 font-medium">
                On this page
              </p>
              <nav className="space-y-1">
                {availableSections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-white/40 hover:text-white/70 hover:bg-white/5 transition-all group"
                    >
                      <Icon size={14} className="flex-shrink-0 group-hover:text-gold" style={{ color: "var(--article-accent-dim)" }} />
                      {section.label}
                    </a>
                  );
                })}
              </nav>

              {/* Reflect link */}
              <div
                className="mt-6 pt-6"
                style={{ borderTop: "1px solid var(--article-divider-alt)" }}
              >
                <a
                  href={`/reflect/${nameId}`}
                  className="flex items-center gap-2 text-xs text-white/30 hover:text-white/55 transition-colors"
                >
                  <ExternalLink size={12} />
                  Write your reflection
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <Icon size={16} style={{ color: "var(--article-accent)" }} />
      <h2
        className="text-xs font-semibold uppercase tracking-wider"
        style={{ color: "var(--article-accent)" }}
      >
        {label}
      </h2>
    </div>
  );
}
