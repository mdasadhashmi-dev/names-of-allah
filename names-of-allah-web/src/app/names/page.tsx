"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { allNames, getApprovedNames, getUnapprovedNames } from "@/data/names";
import { NameCard } from "@/components/shared/NameCard";
import { useSemanticColors } from "@/hooks/useSemanticColors";

export default function NamesListPage() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [showUnapproved, setShowUnapproved] = useState(false);
  const { isPro, styles } = useSemanticColors();

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
        <div className="mb-6 lg:mb-8">
          <img
            src="/logo.svg"
            alt="99 Names of Allah"
            className="h-16 lg:h-20 w-auto object-contain mb-1"
          />
          <p className="text-sm" style={styles.textMuted}>
            The 99 Beautiful Names of Allah — click a name to begin its story
          </p>
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
              onClick={() => {
                if (name.hasContent) router.push(`/story/${name.nameId}`);
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
                        if (name.hasContent) router.push(`/story/${name.nameId}`);
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
