"use client";

import { useLayout } from "@/providers/LayoutProvider";

export function useSemanticColors() {
  const { layoutMode } = useLayout();
  const isPro = layoutMode === "professional";

  return {
    isPro,
    // Backgrounds
    pageBg: isPro ? "bg-[var(--pro-bg)]" : "",
    cardBg: isPro
      ? "bg-white border border-[var(--pro-border)]"
      : "bg-white/5 border border-white/10",
    surfaceBg: isPro ? "bg-[var(--pro-surface)]" : "bg-transparent",
    heroBg: isPro ? "bg-[var(--pro-hero-bg)]" : "bg-gradient-to-b from-[#030510] via-[#0a1028] to-black",

    // Text
    textPrimary: isPro ? "text-[var(--pro-text)]" : "text-white",
    textSecondary: isPro ? "text-[var(--pro-text-muted)]" : "text-white/60",
    textMuted: isPro ? "text-[var(--pro-text-muted)]" : "text-white/40",
    textHeading: isPro ? "text-[var(--pro-text)]" : "text-white",

    // Accent
    accent: isPro ? "text-[var(--pro-accent)]" : "text-[rgb(var(--color-primary))]",
    accentBg: isPro ? "bg-[var(--pro-accent-light)]" : "bg-white/5",
    accentGold: isPro ? "text-[var(--pro-gold)]" : "text-[rgb(var(--color-primary))]",

    // Borders
    border: isPro ? "border-[var(--pro-border)]" : "border-white/10",
    divider: isPro ? "bg-[var(--pro-border)]" : "bg-white/10",

    // Interactive
    hoverBg: isPro ? "hover:bg-gray-50" : "hover:bg-white/5",
    activeBg: isPro
      ? "bg-[var(--pro-accent-light)] border-[var(--pro-accent)]"
      : "bg-white/8 border-[rgb(var(--color-primary))]",

    // Inline styles (for cases where Tailwind classes can't be used)
    styles: {
      cardBg: isPro
        ? { background: "#FFFFFF", border: "1px solid #E5E7EB" }
        : { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" },
      text: isPro ? { color: "#1A1A2E" } : { color: "white" },
      textMuted: isPro ? { color: "#6B7280" } : { color: "rgba(255,255,255,0.6)" },
      textSubtle: isPro ? { color: "#9CA3AF" } : { color: "rgba(255,255,255,0.4)" },
      accent: isPro ? { color: "#2C6E49" } : {},
      gold: isPro ? { color: "#C8A951" } : { color: "rgb(217,191,140)" },
      sectionBg: isPro ? { background: "#FAFAF7" } : {},
      heroBg: isPro ? { background: "#1A1A2E" } : { background: "linear-gradient(to bottom, #030510, #0a1028, black)" },
      activeBg: isPro
        ? { background: "rgba(44,110,73,0.08)", border: "1px solid rgba(44,110,73,0.2)" }
        : { background: "rgba(217,191,140,0.1)", border: "1px solid rgba(217,191,140,0.15)" },
      inactiveBg: isPro
        ? { background: "#FFFFFF", border: "1px solid #E5E7EB" }
        : { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" },
    },
  };
}
