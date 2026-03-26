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
  ChevronLeft,
  Star,
  HandHeart,
} from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";
import { getNameOfDay } from "@/lib/nameOfDay";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/names", label: "Browse Names", icon: BookOpen },
  { href: "/advisor", label: "Feeling Advisor", icon: Heart },
  { href: "/dua", label: "Dua Builder", icon: HandHeart },
  { href: "/quiz", label: "Quiz", icon: HelpCircle },
  { href: "/settings", label: "Settings", icon: Settings },
];

const PAGE_TITLES: Record<string, string> = {
  "/": "Home",
  "/names": "Browse Names",
  "/advisor": "Feeling Advisor",
  "/dua": "Dua Builder",
  "/quiz": "Quiz",
  "/settings": "Settings",
  "/reflect": "Reflection",
  "/learn": "Deep Learning",
  "/story": "Story",
  "/quiz/play": "Quiz",
};

function getPageTitle(pathname: string): string {
  if (PAGE_TITLES[pathname]) return PAGE_TITLES[pathname];
  const segment = "/" + pathname.split("/")[1];
  return PAGE_TITLES[segment] ?? "Names of Allah";
}

const TOP_LEVEL_ROUTES = ["/", "/names", "/advisor", "/dua", "/quiz", "/settings"];

export function MobileNav() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { primaryColor } = useTheme();
  const nameOfDay = getNameOfDay();
  const isDeep = !TOP_LEVEL_ROUTES.includes(pathname);

  return (
    <>
      {/* Top bar */}
      <header
        className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center px-4 h-14"
        style={{
          background: "rgba(8, 13, 35, 0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(217, 191, 140, 0.1)",
        }}
      >
        {/* Left: hamburger or back */}
        {isDeep ? (
          <button
            onClick={() => router.back()}
            className="p-2 -ml-2 text-white/60 hover:text-white transition-colors"
            aria-label="Go back"
          >
            <ChevronLeft size={22} />
          </button>
        ) : (
          <button
            onClick={() => setDrawerOpen(true)}
            className="p-2 -ml-2 text-white/60 hover:text-white transition-colors"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        )}

        {/* Center: page title */}
        <span className="flex-1 text-center text-sm font-medium text-white/80">
          {getPageTitle(pathname)}
        </span>

        {/* Right: spacer or name-of-day icon */}
        <button
          onClick={() => router.push(`/story/${nameOfDay.nameId}`)}
          className="p-2 -mr-2 text-white/40 hover:text-white/80 transition-colors"
          title={`Name of the Day: ${nameOfDay.transliteration}`}
        >
          <Star size={18} style={{ color: primaryColor }} />
        </button>
      </header>

      {/* Drawer overlay */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 z-50 bg-black/60"
              onClick={() => setDrawerOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="lg:hidden fixed left-0 top-0 bottom-0 z-50 w-72 flex flex-col"
              style={{
                background: "rgb(8, 13, 35)",
                borderRight: "1px solid rgba(217, 191, 140, 0.1)",
              }}
            >
              {/* Drawer header */}
              <div
                className="flex items-center justify-between px-5 py-5 border-b"
                style={{ borderColor: "rgba(217, 191, 140, 0.1)" }}
              >
                <div>
                  <img
                    src="/logo.svg"
                    alt="99 Names of Allah"
                    className="h-10 w-10 object-contain"
                  />
                  <div className="text-xs text-white/40 mt-0.5">
                    99 Names of Allah
                  </div>
                </div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 text-white/40 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer nav */}
              <nav className="flex-1 py-4 px-3">
                <ul className="space-y-1">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href);

                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setDrawerOpen(false)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                            isActive ? "text-white" : "text-white/50 hover:text-white/80 hover:bg-white/5"
                          }`}
                          style={
                            isActive
                              ? {
                                  background: "rgba(217, 191, 140, 0.1)",
                                  color: primaryColor,
                                }
                              : {}
                          }
                        >
                          <Icon size={20} className="flex-shrink-0" style={isActive ? { color: primaryColor } : {}} />
                          <span className="font-medium">{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Drawer footer: Name of the Day */}
              <div
                className="mx-4 mb-6 p-4 rounded-xl cursor-pointer"
                style={{
                  background: "rgba(217, 191, 140, 0.06)",
                  border: "1px solid rgba(217, 191, 140, 0.15)",
                }}
                onClick={() => {
                  setDrawerOpen(false);
                  router.push(`/story/${nameOfDay.nameId}`);
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Star size={12} style={{ color: primaryColor }} />
                  <span className="text-xs text-white/40 uppercase tracking-wider">
                    Name of the Day
                  </span>
                </div>
                <div
                  className="arabic-text text-xl mb-1"
                  style={{ color: primaryColor }}
                >
                  {nameOfDay.arabic}
                </div>
                <div className="text-sm font-medium text-white/70">
                  {nameOfDay.transliteration}
                </div>
                <div className="text-xs text-white/40 mt-0.5">
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
