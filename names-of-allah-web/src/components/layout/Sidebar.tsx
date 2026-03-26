"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home,
  BookOpen,
  Heart,
  HelpCircle,
  Settings,
  ChevronLeft,
  ChevronRight,
  Star,
  HandHeart,
} from "lucide-react";
import { useLayout } from "@/providers/LayoutProvider";
import { useTheme } from "@/providers/ThemeProvider";
import { getNameOfDay } from "@/lib/nameOfDay";

const navItems = [
  { href: "/", label: "Home", icon: Home, shortcut: "1" },
  { href: "/names", label: "Browse Names", icon: BookOpen, shortcut: "2" },
  { href: "/advisor", label: "Feeling Advisor", icon: Heart, shortcut: "3" },
  { href: "/dua", label: "Dua Builder", icon: HandHeart, shortcut: "4" },
  { href: "/quiz", label: "Quiz", icon: HelpCircle, shortcut: "5" },
  { href: "/settings", label: "Settings", icon: Settings, shortcut: "" },
];

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { sidebarCollapsed, setSidebarCollapsed } = useLayout();
  const { primaryColor, isDarkMode } = useTheme();
  const nameOfDay = getNameOfDay();

  const width = sidebarCollapsed ? 64 : 260;

  // Token-aware colors that respond to light/dark mode
  const sidebarBg = isDarkMode ? "rgb(14, 18, 34)" : "rgb(248, 244, 236)";
  const borderColor = isDarkMode
    ? "rgba(184, 149, 106, 0.1)"
    : "rgba(184, 149, 106, 0.15)";
  const textDefault = isDarkMode ? "rgba(255,255,255,0.5)" : "rgba(64,56,44,0.6)";
  const textHover = isDarkMode ? "rgba(255,255,255,0.8)" : "rgba(44,36,24,0.9)";
  const textMuted = isDarkMode ? "rgba(255,255,255,0.4)" : "rgba(140,130,116,1)";
  const hoverBg = isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(184,149,106,0.06)";
  const activeBg = isDarkMode ? "rgba(184,149,106,0.12)" : "rgba(184,149,106,0.1)";

  return (
    <motion.aside
      animate={{ width }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed left-0 top-0 h-screen z-40 flex flex-col overflow-hidden"
      style={{
        background: sidebarBg,
        borderRight: `1px solid ${borderColor}`,
      }}
    >
      {/* Geometric pattern background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: isDarkMode ? 0.04 : 0.06,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23b8956a' fill-rule='evenodd'%3E%3Cpath d='M30 0l7.5 13h15L45 26l7.5 13H37.5L30 52l-7.5-13H7.5L15 26 7.5 13h15z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Header */}
      <div
        className="relative flex items-center px-4 py-5 border-b"
        style={{ borderColor }}
      >
        {!sidebarCollapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col flex-1 min-w-0"
          >
            <span
              className="arabic-text text-xl leading-tight"
              style={{ color: primaryColor }}
            >
              أسماء الله
            </span>
            <span className="text-xs mt-0.5 truncate" style={{ color: textMuted }}>
              99 Beautiful Names
            </span>
          </motion.div>
        )}

        <button
          onClick={() => setSidebarCollapsed((prev: boolean) => !prev)}
          className="relative ml-auto p-1.5 rounded-md transition-colors"
          style={{ color: textMuted }}
          aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {sidebarCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="relative flex-1 py-4 overflow-hidden">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative"
                  style={{
                    color: isActive ? primaryColor : textDefault,
                    background: isActive ? activeBg : undefined,
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = textHover;
                      e.currentTarget.style.background = hoverBg;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = textDefault;
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                  title={sidebarCollapsed ? item.label : undefined}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: activeBg }}
                      transition={{ type: "spring", duration: 0.4 }}
                    />
                  )}
                  <Icon
                    size={18}
                    className="relative flex-shrink-0"
                    style={isActive ? { color: primaryColor } : {}}
                  />
                  {!sidebarCollapsed && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="relative text-sm font-medium truncate flex-1"
                      style={{ fontFamily: "var(--font-ui)" }}
                    >
                      {item.label}
                    </motion.span>
                  )}
                  {!sidebarCollapsed && item.shortcut && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="relative text-xs font-mono ml-auto"
                      style={{ color: textMuted, opacity: 0.5 }}
                    >
                      {item.shortcut}
                    </motion.span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Name of the Day widget */}
      {!sidebarCollapsed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="relative mx-3 mb-4 p-3 rounded-xl cursor-pointer"
          style={{
            background: activeBg,
            border: `1px solid ${borderColor}`,
          }}
          onClick={() => router.push(`/story/${nameOfDay.nameId}`)}
        >
          <div className="flex items-center gap-2 mb-2">
            <Star size={12} style={{ color: primaryColor }} />
            <span
              className="text-xs uppercase"
              style={{
                color: textMuted,
                letterSpacing: "0.1em",
                fontFamily: "var(--font-ui)",
              }}
            >
              Name of the Day
            </span>
          </div>
          <div
            className="arabic-text text-lg leading-tight mb-1"
            style={{ color: primaryColor }}
          >
            {nameOfDay.arabic}
          </div>
          <div
            className="text-xs font-medium"
            style={{ color: isDarkMode ? "rgba(255,255,255,0.6)" : "rgba(64,56,44,0.8)" }}
          >
            {nameOfDay.transliteration}
          </div>
          <div className="text-xs mt-0.5 truncate" style={{ color: textMuted }}>
            {nameOfDay.meaning}
          </div>
        </motion.div>
      )}

      {/* Collapsed: star icon */}
      {sidebarCollapsed && (
        <div className="relative px-2 mb-4">
          <button
            onClick={() => router.push(`/story/${nameOfDay.nameId}`)}
            className="w-full flex items-center justify-center p-2.5 rounded-lg transition-colors"
            title={`Name of the Day: ${nameOfDay.transliteration}`}
          >
            <Star size={18} style={{ color: primaryColor }} />
          </button>
        </div>
      )}
    </motion.aside>
  );
}
