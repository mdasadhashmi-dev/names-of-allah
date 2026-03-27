"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Search, Sparkles, BookOpen, Star } from "lucide-react";
import { getNameById, getDisplayNumber } from "@/data/names";
import feelingsData from "@/data/feelings.json";
import { useSemanticColors } from "@/hooks/useSemanticColors";

interface FeelingLink {
  nameId: string;
  priority: number;
  rationale: string;
}

interface Feeling {
  id: string;
  primaryLabel: string;
  aliases: string[];
  description: string;
  category: string;
  linkedNames: FeelingLink[];
}

const feelings = feelingsData.feelings as Feeling[];

const STOPWORDS = new Set([
  "i", "am", "feeling", "feel", "very", "really", "so", "just",
  "a", "an", "the", "bit", "little", "quite", "extremely",
  "somewhat", "today", "lately", "right", "now", "like", "kind", "of",
]);

function normalizeInput(text: string): string[] {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length > 0 && !STOPWORDS.has(word));
}

function levenshtein(a: string, b: string): number {
  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b[i - 1] === a[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

function findMatch(tokens: string[]): Feeling | null {
  const query = tokens.join(" ");

  const exact = feelings.find((f) => tokens.includes(f.primaryLabel));
  if (exact) return exact;

  const alias = feelings.find((f) =>
    f.aliases.some(
      (a) => tokens.includes(a) || a.includes(query) || query.includes(a)
    )
  );
  if (alias) return alias;

  for (const feeling of feelings) {
    for (const token of tokens) {
      if (levenshtein(token, feeling.primaryLabel) <= 2) return feeling;
      for (const a of feeling.aliases) {
        if (levenshtein(token, a) <= 2) return feeling;
      }
    }
  }

  const categoryKeywords: Record<string, string[]> = {
    struggling: ["sad", "pain", "hurt", "bad", "wrong", "hard", "difficult"],
    seeking: ["want", "need", "search", "find", "looking", "more"],
    grateful: ["happy", "thankful", "blessed", "good", "wonderful"],
    reflecting: ["think", "wonder", "question", "why", "how", "meaning"],
  };
  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    if (tokens.some((t) => keywords.includes(t))) {
      const match = feelings.find((f) => f.category === category);
      if (match) return match;
    }
  }

  return null;
}

const categories = [
  { key: "struggling", label: "When life feels heavy", icon: "☁️" },
  { key: "seeking", label: "Searching for more", icon: "✨" },
  { key: "grateful", label: "Counting blessings", icon: "❤️" },
  { key: "reflecting", label: "Looking inward", icon: "🍃" },
];

export default function AdvisorPage() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [result, setResult] = useState<Feeling | null>(null);
  const { isPro, styles } = useSemanticColors();

  const handleSearch = () => {
    if (!input.trim()) return;
    const tokens = normalizeInput(input);
    const match = findMatch(tokens);
    setResult(match || feelings[0]);
  };

  const handleFeelingClick = (feeling: Feeling) => {
    setResult(feeling);
    setInput(feeling.primaryLabel);
  };

  const handleReset = () => {
    setResult(null);
    setInput("");
    setSelectedCategory(null);
  };

  const categoryFeelings = selectedCategory
    ? feelings.filter((f) => f.category === selectedCategory)
    : [];

  return (
    <div className="min-h-screen relative">
      {!isPro && <div className="fixed inset-0 bg-gradient-to-b from-dark-bg to-black" />}

      {/* Desktop: side-by-side. Mobile: stacked */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">

        {/* ── LEFT PANEL: Input + Categories ── */}
        <div
          className="w-full lg:w-[380px] lg:flex-shrink-0 px-6 py-8 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto"
          style={{
            borderRight: "1px solid var(--article-divider)",
          }}
        >
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-1">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "var(--article-btn-bg)" }}
              >
                <Heart size={18} style={{ color: "var(--article-accent)" }} />
              </div>
              <div>
                <h1 className="text-lg font-semibold" style={styles.text}>Feeling Advisor</h1>
                <p className="text-xs" style={styles.textSubtle}>Find comfort in His names</p>
              </div>
            </div>
          </div>

          {/* Intro text */}
          <p className="text-sm font-serif leading-relaxed mb-6" style={styles.textMuted}>
            Tell us how you&apos;re feeling, and we&apos;ll guide you to a Name of
            Allah that speaks to your heart.
          </p>

          {/* Search input */}
          <div className="relative mb-6">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="How are you feeling today?"
              className="w-full py-3 px-4 pr-12 rounded-xl outline-none focus:ring-1"
              style={{
                background: "var(--article-interactive-bg)",
                border: "1px solid var(--article-interactive-border)",
                color: "var(--article-text-inline-muted)",
              }}
            />
            <button
              onClick={handleSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              style={{ background: "var(--article-btn-bg-strong)" }}
            >
              <Search size={16} style={{ color: "var(--article-accent)" }} />
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px" style={{ background: "var(--article-divider-alt)" }} />
            <span className="text-xs text-white/25">or browse</span>
            <div className="flex-1 h-px" style={{ background: "var(--article-divider-alt)" }} />
          </div>

          {/* Category chips */}
          <div className="flex flex-col gap-2 mb-4">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() =>
                  setSelectedCategory(selectedCategory === cat.key ? null : cat.key)
                }
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all text-left"
                style={{
                  background:
                    selectedCategory === cat.key
                      ? "var(--article-card-bg-alt)"
                      : "var(--article-surface-alt)",
                  border:
                    selectedCategory === cat.key
                      ? "1px solid var(--article-cta-border-strong)"
                      : "1px solid var(--article-divider)",
                  color:
                    selectedCategory === cat.key
                      ? "var(--article-accent)"
                      : "var(--article-text-inline)",
                }}
              >
                <span className="text-base">{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Feeling chips within selected category */}
          <AnimatePresence>
            {categoryFeelings.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="flex flex-wrap gap-2 overflow-hidden"
              >
                {categoryFeelings.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => handleFeelingClick(f)}
                    className="px-3 py-1.5 rounded-lg text-sm text-white/65 hover:text-white/90 transition-all"
                    style={{
                      background: "var(--article-interactive-bg)",
                      border: "1px solid var(--article-interactive-border)",
                    }}
                  >
                    {f.primaryLabel}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Reset link (mobile only — desktop has button in results panel) */}
          {result && (
            <button
              onClick={handleReset}
              className="mt-6 lg:hidden text-sm text-white/35 hover:text-white/55 transition-colors"
            >
              ← Try another feeling
            </button>
          )}
        </div>

        {/* ── RIGHT PANEL: Results ── */}
        <div className="flex-1 px-6 py-8 lg:py-10 lg:px-10 lg:overflow-y-auto">
          <AnimatePresence mode="wait">
            {!result ? (
              /* Empty state */
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full flex flex-col items-center justify-center text-center py-16 lg:py-0 lg:min-h-[60vh]"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: "var(--article-card-bg-alt)", border: "1px solid var(--article-card-border)" }}
                >
                  <Heart size={32} style={{ color: "var(--article-accent-dim)" }} />
                </div>
                <h2 className="text-xl font-serif text-white/60 mb-3">
                  Your guidance will appear here
                </h2>
                <p className="text-sm text-white/30 max-w-xs leading-relaxed">
                  Type how you&apos;re feeling or choose a category on the left to
                  discover a Name of Allah that speaks to your situation.
                </p>

                {/* Sample prompts */}
                <div className="mt-8 flex flex-wrap gap-2 justify-center max-w-sm">
                  {["hopeless", "anxious", "grateful", "lost", "content"].map((word) => (
                    <button
                      key={word}
                      onClick={() => {
                        setInput(word);
                        const tokens = normalizeInput(word);
                        const match = findMatch(tokens);
                        setResult(match || feelings[0]);
                      }}
                      className="px-3 py-1.5 rounded-full text-xs transition-all"
                      style={{
                        background: "var(--article-card-bg-alt)",
                        border: "1px solid var(--article-card-border)",
                        color: "var(--article-accent-muted)",
                      }}
                    >
                      {word}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              /* Results */
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="max-w-2xl"
              >
                {/* Description */}
                <p className="text-sm text-white/55 italic font-serif mb-6 leading-relaxed">
                  {result.description}
                </p>

                {/* Name cards */}
                <div className="space-y-4">
                  {result.linkedNames
                    .sort((a, b) => a.priority - b.priority)
                    .map((link, idx) => {
                      const name = getNameById(link.nameId);
                      if (!name) return null;
                      const isPrimary = idx === 0;

                      return (
                        <motion.div
                          key={link.nameId}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.12 }}
                          className={`rounded-2xl overflow-hidden ${isPrimary ? "p-6" : "p-5"}`}
                          style={{
                            background: isPrimary
                              ? "var(--article-card-bg-alt)"
                              : "var(--article-surface-alt)",
                            border: isPrimary
                              ? "1px solid var(--article-cta-border)"
                              : "1px solid var(--article-divider-alt)",
                          }}
                        >
                          {isPrimary && (
                            <div className="flex items-center gap-1.5 mb-4">
                              <Sparkles size={12} style={{ color: "var(--article-accent)" }} />
                              <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--article-accent)" }}>
                                Primary Guidance
                              </span>
                            </div>
                          )}

                          <div className="flex items-start justify-between gap-4 mb-3">
                            <div>
                              <div
                                className={`arabic-text font-bold ${isPrimary ? "text-3xl" : "text-2xl"} mb-1`}
                                style={{ color: "var(--article-accent)" }}
                              >
                                {name.arabic}
                              </div>
                              <div className="font-semibold text-white/85">
                                {name.transliteration}
                              </div>
                              <div className="text-sm text-white/45">{name.meaning}</div>
                            </div>
                            <div
                              className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                              style={{
                                background: "var(--article-badge-bg)",
                                color: "var(--article-accent-muted)",
                                border: "1px solid var(--article-cta-border)",
                              }}
                            >
                              {getDisplayNumber(name.nameId) || name.number}
                            </div>
                          </div>

                          <p className="text-sm text-white/60 font-serif leading-relaxed mb-4">
                            {link.rationale}
                          </p>

                          {name.hasContent && (
                            <div className="flex gap-2 flex-wrap">
                              <button
                                onClick={() => router.push(`/story/${name.nameId}`)}
                                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all"
                                style={{
                                  background: "var(--article-badge-bg)",
                                  color: "var(--article-accent)",
                                  border: "1px solid var(--article-cta-border)",
                                }}
                              >
                                <Star size={13} /> Read Story
                              </button>
                              <button
                                onClick={() => router.push(`/learn/${name.nameId}`)}
                                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm transition-all text-white/50 hover:text-white/75"
                                style={{
                                  background: "var(--article-interactive-bg)",
                                  border: "1px solid var(--article-interactive-border)",
                                }}
                              >
                                <BookOpen size={13} /> Deep Learning
                              </button>
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                </div>

                {/* Reset */}
                <button
                  onClick={handleReset}
                  className="mt-6 text-sm text-white/35 hover:text-white/55 transition-colors"
                >
                  ← Try another feeling
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
