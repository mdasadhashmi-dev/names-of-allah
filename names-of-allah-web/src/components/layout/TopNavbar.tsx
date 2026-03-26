"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  BookOpen,
  Heart,
  HelpCircle,
  Settings,
  HandHeart,
  Star,
  Moon,
} from "lucide-react";
import { useLayout } from "@/providers/LayoutProvider";
import { getNameOfDay } from "@/lib/nameOfDay";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/names", label: "Browse Names", icon: BookOpen },
  { href: "/advisor", label: "Advisor", icon: Heart },
  { href: "/dua", label: "Dua Builder", icon: HandHeart },
  { href: "/quiz", label: "Quiz", icon: HelpCircle },
];

export function TopNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { setLayoutMode } = useLayout();
  const nameOfDay = getNameOfDay();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 h-16"
        style={{
          background: "var(--pro-nav-bg)",
          boxShadow: "var(--pro-nav-shadow)",
        }}
      >
        <div className="pro-container h-full flex items-center justify-between">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <img
              src="/logo.svg"
              alt="99 Names of Allah"
              className="h-8 w-8 object-contain"
            />
            <span
              className="text-sm font-semibold"
              style={{ color: "var(--pro-text)" }}
            >
              Names of Allah
            </span>
          </Link>

          {/* Center: Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium transition-colors"
                  style={{
                    color: active
                      ? "var(--pro-accent)"
                      : "var(--pro-text-muted)",
                  }}
                >
                  {item.label}
                  {active && (
                    <motion.div
                      layoutId="proActiveNav"
                      className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full"
                      style={{ background: "var(--pro-accent)" }}
                      transition={{ type: "spring", duration: 0.4 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            {/* Name of the Day */}
            <button
              onClick={() => router.push(`/story/${nameOfDay.nameId}`)}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors"
              style={{
                background: "var(--pro-accent-light)",
                color: "var(--pro-accent)",
              }}
              title={`Name of the Day: ${nameOfDay.transliteration}`}
            >
              <Star size={12} />
              <span>{nameOfDay.transliteration}</span>
            </button>

            {/* Switch to cinematic */}
            <button
              onClick={() => setLayoutMode("cinematic")}
              className="p-2 rounded-lg transition-colors"
              style={{ color: "var(--pro-text-muted)" }}
              title="Switch to cinematic mode"
            >
              <Moon size={18} />
            </button>

            {/* Settings */}
            <Link
              href="/settings"
              className="p-2 rounded-lg transition-colors"
              style={{ color: "var(--pro-text-muted)" }}
              title="Settings"
            >
              <Settings size={18} />
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 -mr-2"
              style={{ color: "var(--pro-text-muted)" }}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 z-50 bg-black/40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="lg:hidden fixed right-0 top-0 bottom-0 z-50 w-72"
              style={{
                background: "var(--pro-surface)",
                borderLeft: "1px solid var(--pro-border)",
              }}
            >
              {/* Drawer header */}
              <div
                className="flex items-center justify-between px-5 py-5"
                style={{ borderBottom: "1px solid var(--pro-border)" }}
              >
                <span
                  className="text-sm font-semibold"
                  style={{ color: "var(--pro-text)" }}
                >
                  Menu
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2"
                  style={{ color: "var(--pro-text-muted)" }}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer nav */}
              <nav className="py-4 px-3">
                <ul className="space-y-1">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.href);
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all"
                          style={{
                            background: active
                              ? "var(--pro-accent-light)"
                              : "transparent",
                            color: active
                              ? "var(--pro-accent)"
                              : "var(--pro-text-muted)",
                            fontWeight: active ? 600 : 400,
                          }}
                        >
                          <Icon size={18} />
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                  <li>
                    <Link
                      href="/settings"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all"
                      style={{
                        background: isActive("/settings")
                          ? "var(--pro-accent-light)"
                          : "transparent",
                        color: isActive("/settings")
                          ? "var(--pro-accent)"
                          : "var(--pro-text-muted)",
                      }}
                    >
                      <Settings size={18} />
                      <span>Settings</span>
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Name of the Day */}
              <div
                className="mx-4 mt-4 p-4 rounded-xl cursor-pointer"
                style={{
                  background: "var(--pro-accent-light)",
                  border: "1px solid rgba(44,110,73,0.15)",
                }}
                onClick={() => {
                  setMobileOpen(false);
                  router.push(`/story/${nameOfDay.nameId}`);
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Star size={12} style={{ color: "var(--pro-accent)" }} />
                  <span
                    className="text-xs uppercase tracking-wider"
                    style={{ color: "var(--pro-accent)" }}
                  >
                    Name of the Day
                  </span>
                </div>
                <div
                  className="arabic-text text-xl mb-1"
                  style={{ color: "var(--pro-gold)" }}
                >
                  {nameOfDay.arabic}
                </div>
                <div
                  className="text-sm font-medium"
                  style={{ color: "var(--pro-text)" }}
                >
                  {nameOfDay.transliteration}
                </div>
                <div
                  className="text-xs mt-0.5"
                  style={{ color: "var(--pro-text-muted)" }}
                >
                  {nameOfDay.meaning}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
