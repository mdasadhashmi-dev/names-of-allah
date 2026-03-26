"use client";

import React, { createContext, useContext, useCallback, useEffect } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export type LayoutMode = "cinematic" | "professional";

/**
 * Page-level layout hint. Pages set this to tell the shell
 * what adaptive panel configuration to use.
 */
export type PageLayout =
  | "default"         // Standard sidebar + content
  | "master-detail"   // Names list: sidebar + list + detail
  | "with-reference"  // Learning: sidebar + content + reference panel
  | "immersive"       // Stories: no sidebar, full viewport
  | "centered";       // Advisor/Quiz: sidebar + centered content

interface LayoutContextType {
  isFullscreen: boolean;
  setIsFullscreen: (value: boolean) => void;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (value: boolean | ((prev: boolean) => boolean)) => void;
  layoutMode: LayoutMode;
  setLayoutMode: (mode: LayoutMode) => void;
  pageLayout: PageLayout;
  setPageLayout: (layout: PageLayout) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [isFullscreen, setIsFullscreenRaw] = React.useState(false);
  const [pageLayout, setPageLayoutRaw] = React.useState<PageLayout>("default");
  const [sidebarCollapsed, setSidebarCollapsed] = useLocalStorage<boolean>(
    "layout_sidebarCollapsed",
    false
  );
  const [layoutMode, setLayoutModeRaw] = useLocalStorage<LayoutMode>(
    "layout_mode",
    "cinematic"
  );

  const setIsFullscreen = useCallback((value: boolean) => {
    setIsFullscreenRaw(value);
  }, []);

  const setLayoutMode = useCallback(
    (mode: LayoutMode) => {
      setLayoutModeRaw(mode);
    },
    [setLayoutModeRaw]
  );

  const setPageLayout = useCallback((layout: PageLayout) => {
    setPageLayoutRaw(layout);
    // Immersive pages auto-hide sidebar
    if (layout === "immersive") {
      setIsFullscreenRaw(true);
    }
  }, []);

  // Sync data-layout attribute on <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-layout", layoutMode);
  }, [layoutMode]);

  return (
    <LayoutContext.Provider
      value={{
        isFullscreen,
        setIsFullscreen,
        sidebarCollapsed,
        setSidebarCollapsed,
        layoutMode,
        setLayoutMode,
        pageLayout,
        setPageLayout,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
}
