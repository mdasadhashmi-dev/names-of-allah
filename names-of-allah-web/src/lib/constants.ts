/**
 * Legacy re-exports from tokens.ts
 *
 * This file preserves backward compatibility for existing imports.
 * New code should import directly from @/lib/tokens.
 */

export {
  colorSchemes,
  fontScales,
  arabicFontScales,
  type ColorSchemeKey,
  type AppearanceMode,
  type FontSize,
} from "./tokens";

/* ---- App metadata ---- */
export const APP_VERSION = "0.1.0";
export const APP_STAGE = "BETA";
export const FEEDBACK_EMAIL = "feedback@namesofallah.app";

/** @deprecated Use token system instead. Kept for backward compat. */
export const colors = {
  appGold: "rgb(184, 149, 106)",
  appSoftGold: "rgb(212, 196, 160)",
  appDarkBg: "rgb(18, 22, 42)",
  appDarkGold: "rgb(160, 126, 84)",
} as const;
