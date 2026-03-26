"use client";

import Link from "next/link";

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
              <span
                className="arabic-text text-xl"
                style={{ color: "#C8A951" }}
              >
                أسماء الله
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
            <Link
              href="/settings"
              className="text-sm"
              style={{ color: "#C8A951" }}
            >
              Settings
            </Link>
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
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Made with love for the Ummah
          </p>
        </div>
      </div>
    </footer>
  );
}
