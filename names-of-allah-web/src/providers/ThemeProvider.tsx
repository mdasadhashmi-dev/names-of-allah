"use client";

import React, { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import {
  colorSchemes,
  fontScales,
  arabicFontScales,
  type ColorSchemeKey,
  type AppearanceMode,
  type FontSize,
} from "@/lib/tokens";

interface ThemeContextType {
  colorScheme: ColorSchemeKey;
  appearance: AppearanceMode;
  fontSize: FontSize;
  setColorScheme: (scheme: ColorSchemeKey) => void;
  setAppearance: (mode: AppearanceMode) => void;
  setFontSize: (size: FontSize) => void;
  scaledSize: (base: number, isArabic?: boolean) => number;
  primaryColor: string;
  secondaryColor: string;
  isDarkMode: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorSchemeKey>(
    "theme_colorScheme",
    "gold"
  );
  const [appearance, setAppearance] = useLocalStorage<AppearanceMode>(
    "theme_appearance",
    "dark"
  );
  const [fontSize, setFontSize] = useLocalStorage<FontSize>(
    "theme_fontSize",
    "medium"
  );

  const scheme = colorSchemes[colorScheme];
  const [layoutMode] = useLocalStorage<string>("layout_mode", "cinematic");
  const isProfessional = layoutMode === "professional";

  const isDarkMode = isProfessional
    ? false
    : appearance === "dark" ||
      (appearance === "system" &&
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

  const primaryColor = `rgb(${scheme.primary})`;
  const secondaryColor = `rgb(${scheme.secondary})`;

  useEffect(() => {
    const root = document.documentElement;

    // Legacy CSS custom properties (backward compat)
    root.style.setProperty("--color-primary", scheme.primary);
    root.style.setProperty("--color-secondary", scheme.secondary);
    root.style.setProperty("--font-scale", String(fontScales[fontSize]));
    root.style.setProperty(
      "--font-scale-arabic",
      String(arabicFontScales[fontSize])
    );

    // Data attributes for CSS-level theme + scheme switching
    root.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    root.setAttribute("data-scheme", colorScheme);

    // Body colors — Living Light defaults
    if (isProfessional) {
      document.body.style.background = "#FAFAF7";
      document.body.style.color = "#1A1A2E";
    } else if (isDarkMode) {
      document.body.style.background = "rgb(18, 22, 42)";
      document.body.style.color = "rgb(248, 244, 236)";
    } else {
      document.body.style.background = "rgb(254, 252, 248)";
      document.body.style.color = "rgb(64, 56, 44)";
    }
  }, [colorScheme, appearance, fontSize, isDarkMode, isProfessional, scheme]);

  const scaledSize = (base: number, isArabic = false) => {
    return base * (isArabic ? arabicFontScales[fontSize] : fontScales[fontSize]);
  };

  return (
    <ThemeContext.Provider
      value={{
        colorScheme,
        appearance,
        fontSize,
        setColorScheme,
        setAppearance,
        setFontSize,
        scaledSize,
        primaryColor,
        secondaryColor,
        isDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
