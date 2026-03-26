"use client";

import React from "react";
import { Sidebar } from "./Sidebar";
import { MobileNav } from "./MobileNav";
import { useLayout } from "@/providers/LayoutProvider";
import { useKeyboardNav } from "@/hooks/useKeyboardNav";

export function DesktopShell({ children }: { children: React.ReactNode }) {
  const { isFullscreen, sidebarCollapsed } = useLayout();

  useKeyboardNav();

  // Compute sidebar width as CSS variable — applied only at lg+ via globals.css
  const sidebarWidth = isFullscreen ? 0 : sidebarCollapsed ? 64 : 260;

  return (
    <>
      {/* Desktop sidebar */}
      {!isFullscreen && (
        <div className="hidden lg:block">
          <Sidebar />
        </div>
      )}

      {/* Mobile top nav */}
      <MobileNav />

      {/* Main content
          Mobile: padding-top 56px to clear fixed mobile nav
          Desktop: margin-left via CSS var `.sidebar-offset` — see globals.css */}
      <main
        className="min-h-screen pt-14 lg:pt-0 sidebar-offset"
        style={{ "--sidebar-width": `${sidebarWidth}px` } as React.CSSProperties}
      >
        {children}
      </main>
    </>
  );
}
