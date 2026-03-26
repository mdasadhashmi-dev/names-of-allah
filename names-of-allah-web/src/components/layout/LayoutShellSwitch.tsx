"use client";

import React from "react";
import { useLayout } from "@/providers/LayoutProvider";
import { DesktopShell } from "./DesktopShell";
import { LightShell } from "./LightShell";

export function LayoutShellSwitch({ children }: { children: React.ReactNode }) {
  const { layoutMode } = useLayout();

  if (layoutMode === "professional") {
    return <LightShell>{children}</LightShell>;
  }

  return <DesktopShell>{children}</DesktopShell>;
}
