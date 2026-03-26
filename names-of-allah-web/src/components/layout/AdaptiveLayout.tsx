"use client";

import React from "react";

/**
 * Adaptive Layout Components
 *
 * These layout wrappers implement the "Adaptive Panels" framework:
 * - MasterDetail: List + detail preview (Names browsing)
 * - WithReference: Content + right reference panel (Learning)
 * - Immersive: Full-screen, no chrome (Stories)
 * - Centered: Focused single-column (Advisor, Quiz)
 */

/* ── Master-Detail Layout ──
   Left: scrollable list (380px on desktop)
   Right: detail view (flex, hidden on mobile)
   Mobile: list only, detail on separate page              */
interface MasterDetailProps {
  list: React.ReactNode;
  detail: React.ReactNode;
  showDetail?: boolean;
}

export function MasterDetail({ list, detail, showDetail = true }: MasterDetailProps) {
  return (
    <div className="layout-master-detail">
      <div className="layout-master-detail__list">{list}</div>
      {showDetail && (
        <div className="layout-master-detail__detail">{detail}</div>
      )}
    </div>
  );
}

/* ── Content + Reference Panel Layout ──
   Left: main content (flexible width)
   Right: reference panel (320px, visible at 1440px+)
   Mobile: content only, reference hidden                  */
interface WithReferenceProps {
  children: React.ReactNode;
  panel: React.ReactNode;
}

export function WithReference({ children, panel }: WithReferenceProps) {
  return (
    <div className="layout-with-reference">
      <div className="layout-with-reference__content">{children}</div>
      <div className="layout-with-reference__panel">{panel}</div>
    </div>
  );
}

/* ── Reference Panel Content ──
   Styled container for the right-side reference panel.    */
interface ReferencePanelSectionProps {
  title: string;
  children: React.ReactNode;
}

export function ReferencePanelSection({ title, children }: ReferencePanelSectionProps) {
  return (
    <div className="mb-6">
      <h3
        className="text-xs uppercase tracking-wider font-semibold mb-3"
        style={{
          fontFamily: "var(--font-ui)",
          color: "rgb(var(--color-text-muted))",
          letterSpacing: "var(--type-tracking-widest)",
        }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

/* ── Immersive Layout ──
   Full viewport, sidebar hidden, no distractions.
   Used for story experiences.                             */
interface ImmersiveProps {
  children: React.ReactNode;
}

export function Immersive({ children }: ImmersiveProps) {
  return <div className="layout-immersive">{children}</div>;
}

/* ── Centered Layout ──
   Horizontally centered, max-width constrained.
   Used for Advisor, Quiz, single-focus pages.             */
interface CenteredProps {
  children: React.ReactNode;
  maxWidth?: string;
}

export function Centered({ children, maxWidth = "640px" }: CenteredProps) {
  return (
    <div className="layout-centered">
      <div className="layout-centered__inner" style={{ maxWidth }}>
        {children}
      </div>
    </div>
  );
}
