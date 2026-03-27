"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HandHeart, Sparkles, Copy, CheckCheck, RotateCcw } from "lucide-react";
import { duasByName, fallbackDua, type NameDua } from "@/data/duas";
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
  "my", "me", "im", "ive", "been", "have", "has", "is", "it", "in",
  "and", "or", "but", "to", "do", "did", "not", "no", "for", "with",
  "about", "want", "need", "help", "please", "always", "never",
]);

function normalizeInput(text: string): string[] {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length > 1 && !STOPWORDS.has(word));
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

function findMatchedFeelings(tokens: string[]): Feeling[] {
  const query = tokens.join(" ");
  const matched: Feeling[] = [];

  // Exact primary label
  const exact = feelings.find((f) => tokens.includes(f.primaryLabel));
  if (exact && !matched.includes(exact)) matched.push(exact);

  // Alias match
  const alias = feelings.find((f) =>
    f.aliases.some(
      (a) => tokens.includes(a) || a.includes(query) || query.includes(a)
    )
  );
  if (alias && !matched.includes(alias)) matched.push(alias);

  // Fuzzy match
  for (const feeling of feelings) {
    if (matched.length >= 3) break;
    for (const token of tokens) {
      if (token.length < 3) continue;
      if (levenshtein(token, feeling.primaryLabel) <= 2) {
        if (!matched.includes(feeling)) matched.push(feeling);
        break;
      }
      for (const a of feeling.aliases) {
        if (levenshtein(token, a) <= 2) {
          if (!matched.includes(feeling)) matched.push(feeling);
          break;
        }
      }
    }
  }

  // Category fallback
  if (matched.length === 0) {
    const categoryKeywords: Record<string, string[]> = {
      struggling: ["sad", "pain", "hurt", "bad", "wrong", "hard", "difficult", "cry", "tired", "weak", "fail", "lost", "broken", "heavy", "burden"],
      seeking: ["want", "hope", "find", "looking", "more", "career", "job", "success", "goal", "dream", "future", "rizq", "provision"],
      grateful: ["happy", "thankful", "blessed", "good", "wonderful", "alhamdulillah", "grateful", "joy"],
      reflecting: ["think", "wonder", "question", "why", "how", "meaning", "purpose", "confused", "understand"],
    };
    for (const [category, keywords] of Object.entries(categoryKeywords)) {
      if (tokens.some((t) => keywords.includes(t))) {
        const match = feelings.find((f) => f.category === category);
        if (match) matched.push(match);
        break;
      }
    }
  }

  // Ultimate fallback — mercy is universal
  if (matched.length === 0) {
    const mercy = feelings.find((f) => f.id === "hopeless") ?? feelings[0];
    matched.push(mercy);
  }

  return matched.slice(0, 3);
}

interface BuiltDua {
  feeling: Feeling;
  link: FeelingLink;
  dua: NameDua;
}

function buildDuas(input: string): BuiltDua[] {
  const tokens = normalizeInput(input);
  const matchedFeelings = findMatchedFeelings(tokens);

  const results: BuiltDua[] = [];
  const seenNames = new Set<string>();

  for (const feeling of matchedFeelings) {
    const topLinks = [...feeling.linkedNames]
      .sort((a, b) => a.priority - b.priority)
      .slice(0, 2);

    for (const link of topLinks) {
      if (seenNames.has(link.nameId)) continue;
      seenNames.add(link.nameId);

      const dua = duasByName[link.nameId];
      if (!dua) continue;

      results.push({ feeling, link, dua });
      if (results.length >= 3) break;
    }
    if (results.length >= 3) break;
  }

  return results;
}

function buildFullDuaText(duas: BuiltDua[]): string {
  const lines: string[] = [
    "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    "In the name of Allah, the Most Merciful, the Most Compassionate",
    "",
  ];

  for (const { dua } of duas) {
    lines.push(`— ${dua.nameTransliteration} (${dua.nameMeaning}) —`);
    lines.push(dua.arabicText);
    lines.push(dua.transliteration);
    lines.push(`"${dua.translation}"`);
    lines.push(`Source: ${dua.source}`);
    lines.push("");
  }

  lines.push("آمِين");
  return lines.join("\n");
}

const PROMPTS = [
  "I feel overwhelmed and don't know where to turn",
  "I'm struggling financially and need provision",
  "I feel distant from Allah and want to reconnect",
  "I'm anxious about the future",
  "I want to be more grateful for my blessings",
  "I feel lonely and need strength",
];

export default function DuaPage() {
  const [input, setInput] = useState("");
  const [duas, setDuas] = useState<BuiltDua[] | null>(null);
  const [copied, setCopied] = useState(false);
  const { isPro, styles } = useSemanticColors();

  const handleGenerate = () => {
    if (!input.trim()) return;
    setDuas(buildDuas(input));
  };

  const handleReset = () => {
    setDuas(null);
    setInput("");
    setCopied(false);
  };

  const handleCopy = () => {
    if (!duas) return;
    const text = buildFullDuaText(duas);
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const handlePrompt = (prompt: string) => {
    setInput(prompt);
    setDuas(buildDuas(prompt));
  };

  return (
    <div className="min-h-screen relative">
      {!isPro && <div className="fixed inset-0 bg-gradient-to-b from-[#0a1030] via-[#0d142e] to-black" />}

      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">

        {/* ── LEFT PANEL ── */}
        <div
          className="w-full lg:w-[400px] lg:flex-shrink-0 px-6 py-8 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto"
          style={{ borderRight: "1px solid var(--article-divider)" }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "var(--article-btn-bg)" }}
            >
              <HandHeart size={20} style={{ color: "var(--article-accent)" }} />
            </div>
            <div>
              <h1 className="text-lg font-semibold" style={styles.text}>Dua Builder</h1>
              <p className="text-xs" style={styles.textSubtle}>Call on Allah by His beautiful names</p>
            </div>
          </div>

          <p className="text-sm text-white/50 font-serif leading-relaxed mb-6 mt-3">
            Share what&apos;s in your heart — your struggles, hopes, or gratitude — and
            receive authentic duas from the Quran and Sunnah, personalised to your situation.
          </p>

          {/* Arabic opener */}
          <div
            className="text-center py-4 mb-5 rounded-xl"
            style={{ background: "var(--article-card-bg)", border: "1px solid var(--article-card-border-med)" }}
          >
            <p className="arabic-text text-xl" style={{ color: "var(--article-accent)" }}>
              وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَى فَادْعُوهُ بِهَا
            </p>
            <p className="text-xs text-white/35 mt-2 font-serif italic">
              &ldquo;And to Allah belong the best names, so invoke Him by them.&rdquo; — Qur&apos;an 7:180
            </p>
          </div>

          {/* Textarea */}
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) handleGenerate();
            }}
            placeholder="What's in your heart? Describe your situation, need, or feeling..."
            className="w-full min-h-[140px] p-4 rounded-xl resize-none outline-none text-white placeholder-white/25 font-serif text-sm leading-relaxed mb-3"
            style={{
              background: "var(--article-interactive-bg)",
              border: "1px solid var(--article-interactive-border)",
            }}
          />

          <div className="flex gap-2 mb-6">
            <button
              onClick={handleGenerate}
              disabled={!input.trim()}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              style={{
                background: "var(--article-btn-bg)",
                border: "1px solid var(--article-btn-border)",
                color: "var(--article-accent)",
              }}
            >
              <Sparkles size={16} />
              Build My Dua
            </button>
            {duas && (
              <button
                onClick={handleReset}
                className="p-3 rounded-xl transition-all text-white/35 hover:text-white/60"
                style={{
                  background: "var(--article-surface-alt)",
                  border: "1px solid var(--article-interactive-border)",
                }}
                title="Start over"
              >
                <RotateCcw size={16} />
              </button>
            )}
          </div>

          {/* Example prompts */}
          {!duas && (
            <div>
              <p className="text-xs text-white/25 uppercase tracking-wider mb-3">Examples</p>
              <div className="flex flex-col gap-2">
                {PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handlePrompt(prompt)}
                    className="text-left text-sm text-white/45 hover:text-white/70 py-2 px-3 rounded-lg transition-all"
                    style={{
                      background: "var(--article-surface)",
                      border: "1px solid var(--article-divider)",
                    }}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="flex-1 px-6 py-8 lg:py-10 lg:px-10 lg:overflow-y-auto">
          <AnimatePresence mode="wait">
            {!duas ? (
              /* Empty state */
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center text-center py-20 lg:min-h-[60vh]"
              >
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: "var(--article-card-bg-alt)", border: "1px solid var(--article-card-border)" }}
                >
                  <HandHeart size={36} style={{ color: "var(--article-accent-dim)" }} />
                </div>
                <h2 className="text-xl font-serif mb-3" style={{ color: "var(--article-accent-muted)" }}>
                  Your personalised duas will appear here
                </h2>
                <p className="text-sm text-white/30 max-w-sm leading-relaxed font-serif">
                  Describe what&apos;s in your heart and we&apos;ll find duas from the
                  Quran and Sunnah that speak directly to your situation, invoking
                  Allah by His most beautiful names.
                </p>
              </motion.div>
            ) : (
              /* Results */
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="max-w-2xl"
              >
                {/* Bismillah header */}
                <div className="text-center mb-8">
                  <p
                    className="arabic-text text-3xl lg:text-4xl mb-2"
                    style={{ color: "var(--article-accent)" }}
                  >
                    بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                  </p>
                  <p className="text-xs text-white/35 font-serif italic">
                    In the name of Allah, the Most Merciful, the Most Compassionate
                  </p>
                </div>

                {/* Dua cards */}
                <div className="space-y-6 mb-8">
                  {duas.map(({ dua, link }, idx) => (
                    <motion.div
                      key={dua.nameId + idx}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.15 }}
                      className="rounded-2xl overflow-hidden"
                      style={{
                        background: idx === 0
                          ? "var(--article-card-bg)"
                          : "var(--article-surface-alt)",
                        border: idx === 0
                          ? "1px solid var(--article-badge-border)"
                          : "1px solid var(--article-divider-alt)",
                      }}
                    >
                      {/* Name header */}
                      <div
                        className="px-6 pt-5 pb-4"
                        style={{ borderBottom: "1px solid var(--article-divider)" }}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <div>
                            <span
                              className="arabic-text text-2xl lg:text-3xl font-bold"
                              style={{ color: "var(--article-accent)" }}
                            >
                              {dua.nameArabic}
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-white/85 text-sm">
                              {dua.nameTransliteration}
                            </div>
                            <div className="text-xs text-white/40">{dua.nameMeaning}</div>
                          </div>
                        </div>
                        <p className="text-xs text-white/45 font-serif mt-2 leading-relaxed">
                          {link.rationale}
                        </p>
                      </div>

                      {/* Dua body */}
                      <div className="px-6 py-5">
                        {/* Arabic */}
                        <p
                          className="arabic-text text-lg lg:text-xl leading-loose text-center mb-4"
                          style={{ color: "var(--article-accent)" }}
                        >
                          {dua.arabicText}
                        </p>

                        {/* Transliteration */}
                        <p className="text-xs text-white/40 italic text-center mb-4 leading-relaxed">
                          {dua.transliteration}
                        </p>

                        {/* Translation */}
                        <p
                          className="text-sm font-serif text-white/80 text-center leading-relaxed mb-4"
                          style={{
                            borderTop: "1px solid var(--article-divider)",
                            paddingTop: "1rem",
                          }}
                        >
                          &ldquo;{dua.translation}&rdquo;
                        </p>

                        {/* Source + connection */}
                        <div
                          className="flex flex-col gap-1 pt-3"
                          style={{ borderTop: "1px solid var(--article-divider)" }}
                        >
                          <span className="text-xs text-white/35">{dua.source}</span>
                          <span className="text-xs text-white/50 font-serif italic">{dua.connection}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Amin footer */}
                <div className="text-center mb-6">
                  <p
                    className="arabic-text text-2xl"
                    style={{ color: "var(--article-accent-dim)" }}
                  >
                    آمِين
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 flex-wrap">
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all"
                    style={{
                      background: copied ? "rgba(34,197,94,0.12)" : "var(--article-btn-bg)",
                      border: copied ? "1px solid rgba(34,197,94,0.25)" : "1px solid var(--article-btn-border)",
                      color: copied ? "rgb(34,197,94)" : "var(--article-accent)",
                    }}
                  >
                    {copied ? <CheckCheck size={15} /> : <Copy size={15} />}
                    {copied ? "Copied!" : "Copy Full Dua"}
                  </button>

                  <button
                    onClick={handleReset}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm transition-all text-white/40 hover:text-white/70"
                    style={{
                      background: "var(--article-surface-alt)",
                      border: "1px solid var(--article-interactive-border)",
                    }}
                  >
                    <RotateCcw size={15} />
                    Build Another Dua
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
