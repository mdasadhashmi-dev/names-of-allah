"use client";

import Link from "next/link";
import { APP_VERSION, APP_STAGE, FEEDBACK_EMAIL } from "@/lib/constants";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/names", label: "Browse Names" },
  { href: "/advisor", label: "Feeling Advisor" },
  { href: "/dua", label: "Dua Builder" },
  { href: "/quiz", label: "Quiz" },
];

export function Footer() {
  return (
    <footer style={{ background: "#1A1A2E" }}>
      <div className="pro-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img
                src="/logo.svg"
                alt="99 Names of Allah"
                className="h-10 w-10 object-contain"
              />
              <span
                className="text-sm font-semibold"
                style={{ color: "#C8A951" }}
              >
                Names of Allah
              </span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Discover the 99 Beautiful Names of Allah through interactive
              stories, reflections, and guided learning. A journey of
              understanding and connection.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-wider mb-4"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: About */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-wider mb-4"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              About
            </h3>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              An interactive platform for learning and reflecting on the
              attributes of Allah through Quranic stories, hadiths, and
              personal reflection.
            </p>
            <div className="flex flex-col gap-2">
              <Link
                href="/settings"
                className="text-sm"
                style={{ color: "#C8A951" }}
              >
                Settings
              </Link>
              <a
                href={`mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent("Feedback — Names of Allah App")}`}
                className="text-sm"
                style={{ color: "#C8A951" }}
              >
                Send Feedback
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            &copy; {new Date().getFullYear()} Names of Allah. All rights
            reserved.
          </p>
          <p
            className="text-xs flex items-center gap-2"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            <span>Made with love for the Ummah</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>&middot;</span>
            <span>v{APP_VERSION}</span>
            <span
              className="px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider"
              style={{
                background: "rgba(200, 169, 81, 0.15)",
                color: "#C8A951",
                border: "1px solid rgba(200, 169, 81, 0.25)",
              }}
            >
              {APP_STAGE}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
