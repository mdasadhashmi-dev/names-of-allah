"use client";

import { motion } from "framer-motion";
import { Lock, ArrowRight } from "lucide-react";
import { type AllahName } from "@/data/names";
import { useTheme } from "@/providers/ThemeProvider";
import { useLayout } from "@/providers/LayoutProvider";

interface NameCardProps {
  name: AllahName;
  index?: number;
  displayNumber?: number;
  dim?: boolean;
  onClick?: () => void;
}

export function NameCard({ name, index = 0, displayNumber, dim = false, onClick }: NameCardProps) {
  const { primaryColor } = useTheme();
  const { layoutMode } = useLayout();
  const isPro = layoutMode === "professional";

  return (
    <motion.button
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: dim ? 0.5 : 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.015, 0.8), duration: 0.35 }}
      onClick={onClick}
      disabled={!name.hasContent}
      className="group relative w-full text-left rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: isPro
          ? (name.hasContent ? "var(--pro-surface)" : "#F3F4F6")
          : "rgba(255,255,255,0.03)",
        border: name.hasContent
          ? isPro ? "1px solid var(--pro-border)" : "1px solid rgba(217,191,140,0.12)"
          : isPro ? "1px solid #E5E7EB" : "1px solid rgba(255,255,255,0.06)",
        cursor: name.hasContent ? "pointer" : "default",
      }}
    >
      {/* Hover glow */}
      {name.hasContent && !isPro && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top left, rgba(217,191,140,0.08) 0%, transparent 70%)",
            boxShadow: "inset 0 0 0 1px rgba(217,191,140,0.2)",
          }}
        />
      )}

      <div className="relative p-4">
        {/* Number badge */}
        <div className="flex items-start justify-between mb-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
            style={{
              background: name.hasContent
                ? isPro ? "var(--pro-accent-light)" : "rgba(217,191,140,0.12)"
                : isPro ? "#F3F4F6" : "rgba(255,255,255,0.04)",
              color: name.hasContent
                ? isPro ? "var(--pro-accent)" : primaryColor
                : isPro ? "#9CA3AF" : "rgba(255,255,255,0.25)",
              border: name.hasContent
                ? isPro ? "1px solid rgba(44,110,73,0.2)" : "1px solid rgba(217,191,140,0.25)"
                : isPro ? "1px solid #E5E7EB" : "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {name.hasContent ? (displayNumber ?? name.number) : <Lock size={12} />}
          </div>

          {/* Arrow shown on hover */}
          {name.hasContent && (
            <ArrowRight
              size={14}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-1"
              style={{ color: isPro ? "var(--pro-accent)" : primaryColor }}
            />
          )}
        </div>

        {/* Arabic name — large, prominent */}
        <div
          className="arabic-text text-2xl leading-tight mb-2 block"
          style={{
            color: name.hasContent
              ? isPro ? "var(--pro-gold)" : primaryColor
              : isPro ? "#D1D5DB" : "rgba(217,191,140,0.35)",
          }}
        >
          {name.arabic}
        </div>

        {/* Transliteration */}
        <div
          className="text-sm font-semibold truncate"
          style={{
            color: name.hasContent
              ? isPro ? "var(--pro-text)" : "rgba(255,255,255,0.85)"
              : isPro ? "#9CA3AF" : "rgba(255,255,255,0.35)",
          }}
        >
          {name.transliteration}
        </div>

        {/* Meaning */}
        <div
          className="text-xs mt-0.5 truncate"
          style={{ color: isPro ? "var(--pro-text-muted)" : "rgba(255,255,255,0.4)" }}
        >
          {name.meaning}
        </div>
      </div>
    </motion.button>
  );
}
