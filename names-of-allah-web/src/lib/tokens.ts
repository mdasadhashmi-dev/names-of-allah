/**
 * Design Tokens — TypeScript Accessors
 *
 * Type-safe accessors for CSS custom properties defined in styles/tokens/*.css.
 * Use these instead of hardcoded color/spacing values in components.
 */

/* ── Color Token Keys ── */
export const colorTokens = {
  // Brand
  "brand-primary": "--color-brand-primary",
  "brand-secondary": "--color-brand-secondary",
  "brand-accent": "--color-brand-accent",

  // Surfaces
  "surface-page": "--color-surface-page",
  "surface-card": "--color-surface-card",
  "surface-elevated": "--color-surface-elevated",
  "surface-subtle": "--color-surface-subtle",

  // Text
  "text-heading": "--color-text-heading",
  "text-body": "--color-text-body",
  "text-muted": "--color-text-muted",
  "text-inverse": "--color-text-inverse",
  "text-quranic": "--color-text-quranic",
  "text-on-brand": "--color-text-on-brand",

  // Borders
  "border-default": "--color-border-default",
  "border-subtle": "--color-border-subtle",
  "border-focus": "--color-border-focus",

  // Interactive
  "interactive-primary": "--color-interactive-primary",
  "interactive-hover": "--color-interactive-hover",
  "interactive-pressed": "--color-interactive-pressed",
  "interactive-muted": "--color-interactive-muted",

  // Semantic
  "semantic-success": "--color-semantic-success",
  "semantic-success-light": "--color-semantic-success-light",
  "semantic-warning": "--color-semantic-warning",
  "semantic-warning-light": "--color-semantic-warning-light",
  "semantic-error": "--color-semantic-error",
  "semantic-error-light": "--color-semantic-error-light",
  "semantic-info": "--color-semantic-info",
  "semantic-info-light": "--color-semantic-info-light",
} as const;

export type ColorToken = keyof typeof colorTokens;

/* ── Helpers ── */

/** Get a CSS rgb() value for a color token */
export function tokenColor(token: ColorToken, opacity?: number): string {
  const varRef = `var(${colorTokens[token]})`;
  if (opacity !== undefined) {
    return `rgba(${varRef} / ${opacity})`;
  }
  return `rgb(${varRef})`;
}

/** Get a CSS custom property reference */
export function tokenVar(property: string): string {
  return `var(--${property})`;
}

/* ── Spacing Helpers ── */
export const spacing = {
  px: "var(--space-px)",
  0: "var(--space-0)",
  0.5: "var(--space-0-5)",
  1: "var(--space-1)",
  2: "var(--space-2)",
  3: "var(--space-3)",
  4: "var(--space-4)",
  5: "var(--space-5)",
  6: "var(--space-6)",
  8: "var(--space-8)",
  10: "var(--space-10)",
  12: "var(--space-12)",
  16: "var(--space-16)",
  20: "var(--space-20)",
  24: "var(--space-24)",
} as const;

/* ── Typography Helpers ── */
export const fontFamily = {
  heading: "var(--font-heading)",
  body: "var(--font-body)",
  arabic: "var(--font-arabic)",
  ui: "var(--font-ui)",
  mono: "var(--font-mono)",
} as const;

export const fontSize = {
  xs: "var(--type-size-xs)",
  sm: "var(--type-size-sm)",
  base: "var(--type-size-base)",
  lg: "var(--type-size-lg)",
  xl: "var(--type-size-xl)",
  "2xl": "var(--type-size-2xl)",
  "3xl": "var(--type-size-3xl)",
  "4xl": "var(--type-size-4xl)",
  display: "var(--type-size-display)",
  hero: "var(--type-size-hero)",
} as const;

export const arabicSize = {
  sm: "var(--type-size-arabic-sm)",
  base: "var(--type-size-arabic-base)",
  lg: "var(--type-size-arabic-lg)",
  xl: "var(--type-size-arabic-xl)",
  display: "var(--type-size-arabic-display)",
  hero: "var(--type-size-arabic-hero)",
} as const;

/* ── Layout Constants ── */
export const layout = {
  sidebarWidth: "var(--layout-sidebar-width)",
  sidebarCollapsed: "var(--layout-sidebar-collapsed)",
  contentMax: "var(--layout-content-max)",
  contentReading: "var(--layout-content-reading)",
  contextPanel: "var(--layout-context-panel)",
  detailPanel: "var(--layout-detail-panel)",
  mobileNav: "var(--layout-mobile-nav)",
} as const;

/* ── Motion Helpers ── */
export const motion = {
  instant: "var(--motion-instant)",
  fast: "var(--motion-fast)",
  normal: "var(--motion-normal)",
  slow: "var(--motion-slow)",
  cinematic: "var(--motion-cinematic)",
  easeDefault: "var(--ease-default)",
  easeIn: "var(--ease-in)",
  easeOut: "var(--ease-out)",
  easeSpring: "var(--ease-spring)",
  easeGentle: "var(--ease-gentle)",
} as const;

/* ── Color Scheme Definitions (for ThemeProvider) ── */
export const colorSchemes = {
  gold: {
    primary: "184 149 106",
    secondary: "212 196 160",
    gradient: ["#2a1f0a", "#1a1200", "#000000"],
    lightGradient: ["#fff8e8", "#fff0d0", "#ffffff"],
  },
  blue: {
    primary: "102 153 230",
    secondary: "128 179 242",
    gradient: ["#0a1a3d", "#060d20", "#000000"],
    lightGradient: ["#e8f0ff", "#d0e0ff", "#ffffff"],
  },
  green: {
    primary: "102 204 153",
    secondary: "128 217 179",
    gradient: ["#0a2a1a", "#061a0d", "#000000"],
    lightGradient: ["#e8fff0", "#d0ffe0", "#ffffff"],
  },
  purple: {
    primary: "179 128 230",
    secondary: "204 153 242",
    gradient: ["#1a0a3d", "#0d0620", "#000000"],
    lightGradient: ["#f0e8ff", "#e0d0ff", "#ffffff"],
  },
} as const;

export type ColorSchemeKey = keyof typeof colorSchemes;
export type AppearanceMode = "system" | "light" | "dark";
export type FontSize = "small" | "medium" | "large" | "extraLarge";

export const fontScales: Record<FontSize, number> = {
  small: 0.85,
  medium: 1,
  large: 1.15,
  extraLarge: 1.3,
};

export const arabicFontScales: Record<FontSize, number> = {
  small: 0.9,
  medium: 1,
  large: 1.2,
  extraLarge: 1.4,
};
