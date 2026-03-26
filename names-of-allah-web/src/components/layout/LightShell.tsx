"use client";

import React from "react";
import { TopNavbar } from "./TopNavbar";
import { Footer } from "./Footer";
import { useKeyboardNav } from "@/hooks/useKeyboardNav";

export function LightShell({ children }: { children: React.ReactNode }) {
  useKeyboardNav();

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--pro-bg)" }}>
      <TopNavbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}
