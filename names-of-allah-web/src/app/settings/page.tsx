"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Monitor, Palette, Type, Database, Layout, Sparkles } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";
import { useLayout, type LayoutMode } from "@/providers/LayoutProvider";
import { useSemanticColors } from "@/hooks/useSemanticColors";
import type { ColorSchemeKey, AppearanceMode, FontSize } from "@/lib/constants";

const colorOptions: { key: ColorSchemeKey; label: string; color: string }[] = [
  { key: "gold", label: "Gold", color: "rgb(217, 191, 140)" },
  { key: "blue", label: "Blue", color: "rgb(102, 153, 230)" },
  { key: "green", label: "Green", color: "rgb(102, 204, 153)" },
  { key: "purple", label: "Purple", color: "rgb(179, 128, 230)" },
];

const appearanceOptions: { key: AppearanceMode; label: string; icon: React.ReactNode }[] = [
  { key: "system", label: "System", icon: <Monitor size={18} /> },
  { key: "light", label: "Light", icon: <Sun size={18} /> },
  { key: "dark", label: "Dark", icon: <Moon size={18} /> },
];

const fontSizeOptions: { key: FontSize; label: string; description: string }[] = [
  { key: "small", label: "Small", description: "Compact text, more content visible" },
  { key: "medium", label: "Medium", description: "Default, comfortable reading" },
  { key: "large", label: "Large", description: "Easier to read at a distance" },
  { key: "extraLarge", label: "Extra Large", description: "Maximum accessibility" },
];

const settingsCategories = [
  { key: "appearance", label: "Appearance", icon: Palette },
  { key: "typography", label: "Typography", icon: Type },
  { key: "data", label: "Data", icon: Database },
];

const layoutModeOptions: { key: LayoutMode; label: string; description: string; icon: React.ReactNode }[] = [
  { key: "cinematic", label: "Cinematic", description: "Immersive dark theme with sidebar navigation", icon: <Sparkles size={20} /> },
  { key: "professional", label: "Professional", description: "Clean light theme with top navigation", icon: <Layout size={20} /> },
];

export default function SettingsPage() {
  const [activeCategory, setActiveCategory] = useState("appearance");
  const { colorScheme, appearance, fontSize, setColorScheme, setAppearance, setFontSize } = useTheme();
  const { layoutMode, setLayoutMode } = useLayout();
  const { isPro, styles } = useSemanticColors();

  return (
    <div className="min-h-screen relative">
      {!isPro && <div className="fixed inset-0 bg-gradient-to-b from-dark-bg to-black" />}

      <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-8 py-8 lg:py-10">
        {/* Page title */}
        <h1 className="text-2xl font-semibold mb-6 lg:mb-8" style={styles.text}>Settings</h1>

        {/* Two-column layout on desktop */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-0">

          {/* Category nav — left column */}
          <nav className="lg:w-52 lg:flex-shrink-0 lg:pr-6">
            <ul className="flex lg:flex-col gap-2 lg:gap-1 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
              {settingsCategories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.key;
                return (
                  <li key={cat.key} className="flex-shrink-0 lg:flex-shrink">
                    <button
                      onClick={() => setActiveCategory(cat.key)}
                      className="flex items-center gap-2.5 w-full px-3 py-2.5 rounded-xl text-sm text-left transition-all"
                      style={isActive ? styles.activeBg : { background: "transparent", border: "1px solid transparent", color: isPro ? "var(--pro-text-muted)" : "rgba(255,255,255,0.5)" }}
                    >
                      <Icon size={16} className="flex-shrink-0" />
                      {cat.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Divider — desktop only */}
          <div
            className="hidden lg:block w-px self-stretch"
            style={{ background: isPro ? "var(--pro-border)" : "rgba(255,255,255,0.07)" }}
          />

          {/* Content panel — right column */}
          <div className="flex-1 lg:pl-8">

            {/* Appearance settings */}
            {activeCategory === "appearance" && (
              <motion.div
                key="appearance"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                {/* Layout Style */}
                <section>
                  <h2 className="text-sm font-medium uppercase tracking-wider mb-4" style={styles.textSubtle}>
                    Layout Style
                  </h2>
                  <div className="flex gap-3 flex-wrap">
                    {layoutModeOptions.map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => setLayoutMode(opt.key)}
                        className="flex items-center gap-3 px-5 py-4 rounded-xl text-left transition-all flex-1 min-w-[200px]"
                        style={layoutMode === opt.key ? styles.activeBg : styles.inactiveBg}
                      >
                        <div style={{ color: layoutMode === opt.key ? (isPro ? "var(--pro-accent)" : "rgb(217,191,140)") : (isPro ? "var(--pro-text-muted)" : "rgba(255,255,255,0.5)") }}>
                          {opt.icon}
                        </div>
                        <div>
                          <span className="text-sm font-medium block" style={{ color: layoutMode === opt.key ? (isPro ? "var(--pro-accent)" : "rgb(217,191,140)") : (isPro ? "var(--pro-text)" : "rgba(255,255,255,0.8)") }}>
                            {opt.label}
                          </span>
                          <span className="text-xs mt-0.5 block" style={styles.textSubtle}>{opt.description}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </section>

                {/* Color Scheme */}
                <section>
                  <h2 className="text-sm font-medium uppercase tracking-wider mb-4" style={styles.textSubtle}>
                    Color Scheme
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {colorOptions.map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => setColorScheme(opt.key)}
                        className="flex flex-col items-center gap-2 p-4 rounded-2xl transition-all"
                        style={{
                          background: colorScheme === opt.key ? (isPro ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.08)") : (isPro ? "#FFFFFF" : "rgba(255,255,255,0.03)"),
                          border: colorScheme === opt.key
                            ? `2px solid ${opt.color}`
                            : `2px solid ${isPro ? "var(--pro-border)" : "rgba(255,255,255,0.06)"}`,
                          minWidth: 80,
                        }}
                      >
                        <div
                          className="w-10 h-10 rounded-full"
                          style={{ background: opt.color, boxShadow: colorScheme === opt.key ? `0 0 12px ${opt.color}50` : "none" }}
                        />
                        <span className="text-xs" style={styles.textMuted}>{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </section>

                {/* Appearance Mode — only show in cinematic mode */}
                {!isPro && (
                  <section>
                    <h2 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-4">
                      Appearance Mode
                    </h2>
                    <div className="flex gap-3 flex-wrap">
                      {appearanceOptions.map((opt) => (
                        <button
                          key={opt.key}
                          onClick={() => setAppearance(opt.key)}
                          className="flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm transition-all"
                          style={{
                            background: appearance === opt.key ? "rgba(217,191,140,0.12)" : "rgba(255,255,255,0.03)",
                            border: appearance === opt.key ? "1px solid rgba(217,191,140,0.3)" : "1px solid rgba(255,255,255,0.07)",
                            color: appearance === opt.key ? "rgb(217,191,140)" : "rgba(255,255,255,0.65)",
                          }}
                        >
                          {opt.icon}
                          <span>{opt.label}</span>
                        </button>
                      ))}
                    </div>
                  </section>
                )}
              </motion.div>
            )}

            {/* Typography settings */}
            {activeCategory === "typography" && (
              <motion.div
                key="typography"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
              >
                <h2 className="text-sm font-medium uppercase tracking-wider mb-4" style={styles.textSubtle}>
                  Text Size
                </h2>
                <div className="space-y-2">
                  {fontSizeOptions.map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => setFontSize(opt.key)}
                      className="w-full flex items-center justify-between px-5 py-4 rounded-xl text-left transition-all"
                      style={fontSize === opt.key ? styles.activeBg : styles.inactiveBg}
                    >
                      <div>
                        <span
                          className="font-medium"
                          style={{ color: fontSize === opt.key ? (isPro ? "var(--pro-accent)" : "rgb(217,191,140)") : (isPro ? "var(--pro-text)" : "rgba(255,255,255,0.8)") }}
                        >
                          {opt.label}
                        </span>
                        <p className="text-xs mt-0.5" style={styles.textSubtle}>{opt.description}</p>
                      </div>
                      {fontSize === opt.key && (
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ background: isPro ? "var(--pro-accent)" : "rgb(217,191,140)" }}
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Preview */}
                <div
                  className="mt-6 p-5 rounded-xl"
                  style={styles.inactiveBg}
                >
                  <p className="text-xs mb-3 uppercase tracking-wider" style={styles.textSubtle}>Preview</p>
                  <p className="arabic-text text-2xl" style={styles.gold}>
                    ٱلرَّحْمَـٰنُ
                  </p>
                  <p className="font-serif mt-1" style={styles.textMuted}>
                    The Most Merciful — Ar-Rahman
                  </p>
                </div>
              </motion.div>
            )}

            {/* Data settings */}
            {activeCategory === "data" && (
              <motion.div
                key="data"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <section>
                  <h2 className="text-sm font-medium uppercase tracking-wider mb-4" style={styles.textSubtle}>
                    Quiz Progress
                  </h2>
                  <div
                    className="p-5 rounded-xl"
                    style={styles.inactiveBg}
                  >
                    <p className="text-sm mb-4" style={styles.textMuted}>
                      Reset your quiz scores, streaks, and accuracy statistics.
                      This action cannot be undone.
                    </p>
                    <button
                      onClick={() => {
                        if (confirm("Reset all quiz progress? This cannot be undone.")) {
                          localStorage.removeItem("quiz_highScore");
                          localStorage.removeItem("quiz_longestStreak");
                          localStorage.removeItem("quiz_totalCompleted");
                          localStorage.removeItem("quiz_totalAnswered");
                          localStorage.removeItem("quiz_totalCorrect");
                        }
                      }}
                      className="px-5 py-2.5 rounded-xl text-sm text-red-400 transition-all"
                      style={{
                        background: "rgba(255,0,0,0.06)",
                        border: "1px solid rgba(255,0,0,0.12)",
                      }}
                    >
                      Reset Quiz Progress
                    </button>
                  </div>
                </section>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
