"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, ChevronUp, BookOpen, Play } from "lucide-react";
import { allNames, getApprovedNames, getUnapprovedNames } from "@/data/names";
import { NameCard } from "@/components/shared/NameCard";
import { useSemanticColors } from "@/hooks/useSemanticColors";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function NamesListPage() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [showUnapproved, setShowUnapproved] = useState(false);
  const { isPro, styles } = useSemanticColors();
  const [browseMode, setBrowseMode] = useLocalStorage<"story" | "text">(
    "browse_mode",
    "story"
  );

  const getNameUrl = (nameId: string) =>
    browseMode === "story" ? `/story/${nameId}` : `/name/${nameId}`;

  const filteredNames = useMemo(() => {
    const approved = getApprovedNames();
    const unapproved = getUnapprovedNames();
    const filterFn = (name: (typeof allNames)[0]) => {
      if (!searchText.trim()) return true;
      const query = searchText.toLowerCase();
      return (
        name.arabic.includes(searchText) ||
        name.transliteration.toLowerCase().includes(query) ||
        name.meaning.toLowerCase().includes(query) ||
        String(name.number).includes(query)
      );
    };
    return {
      approved: approved.filter(filterFn),
      unapproved: unapproved.filter(filterFn),
    };
  }, [searchText]);

  return (
    <div className="min-h-screen relative">
      {!isPro && <div className="fixed inset-0 bg-gradient-to-b from-dark-bg to-black" />}

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-6 lg:py-10">
        {/* Header */}
        <div className="mb-6 lg:mb-8 flex items-start justify-between gap-4">
          <div>
            <img
              src="/logo.svg"
              alt="99 Names of Allah"
              className="h-16 lg:h-20 w-auto object-contain mb-1"
            />
            <p className="text-sm" style={styles.textMuted}>
              The 99 Beautiful Names of Allah — click a name to begin{" "}
              {browseMode === "story" ? "its story" : "reading"}
            </p>
          </div>

          {/* Pill toggle (segmented control) */}
          <div
            className="flex items-center rounded-full p-1 flex-shrink-0"
            style={{
              background: isPro
                ? "var(--pro-surface)"
                : "rgba(255,255,255,0.05)",
              border: isPro
                ? "1px solid var(--pro-border)"
                : "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {(["text", "story"] as const).map((mode) => {
              const isActive = browseMode === mode;
              return (
                <button
                  key={mode}
                  onClick={() => setBrowseMode(mode)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200"
                  style={
                    isActive
                      ? {
                          background: isPro
                            ? "var(--pro-accent-light)"
                            : "rgba(217,191,140,0.15)",
                          color: isPro
                            ? "var(--pro-accent)"
                            : "rgb(217,191,140)",
                          border: isPro
                            ? "1px solid rgba(44,110,73,0.2)"
                            : "1px solid rgba(217,191,140,0.3)",
                        }
                      : {
                          background: "transparent",
                          color: isPro
                            ? "var(--pro-text-muted)"
                            : "rgba(255,255,255,0.45)",
                          border: "1px solid transparent",
                        }
                  }
                >
                  {mode === "text" ? (
                    <BookOpen size={13} />
                  ) : (
                    <Play size={13} />
                  )}
                  {mode === "text" ? "Text" : "Story"}
                </button>
              );
            })}
          </div>
        </div>

        {/* Search bar */}
        <div className="relative mb-6 lg:mb-8 max-w-xl">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2"
            style={{ color: isPro ? "var(--pro-text-muted)" : "rgba(255,255,255,0.4)" }}
          />
          <input
            type="text"
            placeholder="Search by name, meaning, or number..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl outline-none focus:ring-1"
            style={{
              background: isPro ? "var(--pro-surface)" : "rgba(255,255,255,0.05)",
              border: isPro ? "1px solid var(--pro-border)" : "1px solid rgba(255,255,255,0.1)",
              color: isPro ? "var(--pro-text)" : "white",
            }}
          />
        </div>

        {/* Results count when searching */}
        {searchText && (
          <p className="text-sm mb-4" style={styles.textSubtle}>
            {filteredNames.approved.length} name
            {filteredNames.approved.length !== 1 ? "s" : ""} found
          </p>
        )}

        {/* Approved names grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4 pb-8">
          {filteredNames.approved.map((name, index) => (
            <NameCard
              key={name.nameId}
              name={name}
              index={index}
              displayNumber={index + 1}
              onClick={() => {
                if (name.hasContent) router.push(getNameUrl(name.nameId));
              }}
            />
          ))}
        </div>

        {/* Unapproved names section */}
        {filteredNames.unapproved.length > 0 && (
          <div className="mt-4 pb-20">
            <button
              onClick={() => setShowUnapproved(!showUnapproved)}
              className="flex items-center gap-2 mb-4 text-sm transition-colors"
              style={styles.textSubtle}
            >
              {showUnapproved ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
              <span>Other Names ({filteredNames.unapproved.length})</span>
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  background: isPro ? "var(--pro-accent-light)" : "rgba(255,255,255,0.06)",
                  color: isPro ? "var(--pro-accent)" : "rgba(255,255,255,0.35)",
                }}
              >
                Unverified
              </span>
            </button>

            <AnimatePresence>
              {showUnapproved && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4 overflow-hidden"
                >
                  {filteredNames.unapproved.map((name, index) => (
                    <NameCard
                      key={name.nameId}
                      name={name}
                      index={index}
                      dim
                      onClick={() => {
                        if (name.hasContent) router.push(getNameUrl(name.nameId));
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
