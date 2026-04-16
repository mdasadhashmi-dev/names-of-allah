"use client";

import { motion } from "framer-motion";
import { ReelPlayer, ReelScreen } from "./ReelPlayer";

const GOLD = "rgba(217, 191, 140,";
const WHITE = "rgba(255, 255, 255,";

// 10 screens · ~42 seconds · Al-Wadud (The Most Loving) · Al-Buruj 85:14
const screens: ReelScreen[] = [
  // ── 1. Opening — breath before words ────────────────────────────────────
  {
    id: "opening",
    duration: 2500,
    render: () => (
      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Expanding rings */}
        {[0, 0.5, 1.0].map((delay, i) => (
          <motion.div
            key={i}
            animate={{ scale: [0.5, 2.5], opacity: [0.35, 0] }}
            transition={{ delay, duration: 2.2, repeat: Infinity, ease: "easeOut" }}
            style={{
              position: "absolute",
              width: 28,
              height: 28,
              borderRadius: "50%",
              border: `1px solid ${GOLD}0.5)`,
            }}
          />
        ))}
        {/* Centre dot */}
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: `${GOLD}0.75)`,
            boxShadow: `0 0 16px ${GOLD}0.5)`,
          }}
        />
      </div>
    ),
  },

  // ── 2. Hook — word by word ───────────────────────────────────────────────
  {
    id: "hook",
    duration: 4200,
    render: () => (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.8rem" }}>
        {/* "You wonder" — each word enters separately */}
        <div style={{ display: "flex", gap: "0.35em", justifyContent: "center" }}>
          {["You", "wonder"].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.4, duration: 0.6, ease: "easeOut" }}
              style={{
                color: `${WHITE}0.82)`,
                fontSize: "clamp(1.7rem, 8vw, 2.4rem)",
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>
        {/* Second line — word by word, more muted */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3em", justifyContent: "center" }}>
          {["if", "you", "are", "truly"].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 + i * 0.18, duration: 0.5 }}
              style={{
                color: `${WHITE}0.38)`,
                fontSize: "clamp(1.1rem, 5.5vw, 1.55rem)",
                fontStyle: "italic",
              }}
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1, duration: 0.6 }}
            style={{
              color: `${GOLD}0.85)`,
              fontSize: "clamp(1.1rem, 5.5vw, 1.55rem)",
              fontStyle: "italic",
              fontWeight: 600,
            }}
          >
            loved.
          </motion.span>
        </div>
      </div>
    ),
  },

  // ── 3. Bridge ────────────────────────────────────────────────────────────
  {
    id: "bridge",
    duration: 4200,
    render: () => (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.4rem" }}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          style={{
            color: `${WHITE}0.68)`,
            fontSize: "clamp(1.15rem, 5.8vw, 1.65rem)",
            lineHeight: 1.6,
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          He has always loved you.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.9 }}
          style={{
            color: `${WHITE}0.28)`,
            fontSize: "clamp(0.9rem, 4.5vw, 1.3rem)",
            lineHeight: 1.7,
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          Even before you knew His Name.
        </motion.p>
      </div>
    ),
  },

  // ── 4. Pivot ─────────────────────────────────────────────────────────────
  {
    id: "pivot",
    duration: 3500,
    render: () => (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.0 }}
          style={{
            color: `${WHITE}0.35)`,
            fontSize: "clamp(0.82rem, 3.8vw, 1.1rem)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          In the Quran,
        </motion.p>
        <motion.p
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
          style={{
            color: `${GOLD}0.9)`,
            fontSize: "clamp(1.2rem, 6vw, 1.7rem)",
            fontWeight: 600,
            lineHeight: 1.55,
            textAlign: "center",
          }}
        >
          He gave Himself this Name.
        </motion.p>
      </div>
    ),
  },

  // ── 5. Arabic name — scale entrance + pulsing glow ───────────────────────
  {
    id: "name-arabic",
    duration: 6000,
    audioSrc: "/audio/al-buruj-85-14.mp3",
    render: () => (
      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Radial glow that breathes after the name appears */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.18, 0.08, 0.22, 0.08] }}
          transition={{ delay: 1.5, duration: 4, times: [0, 0.2, 0.5, 0.75, 1], repeat: Infinity }}
          style={{
            position: "absolute",
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${GOLD}0.35) 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
        {/* Arabic name — scale up from slight zoom */}
        <motion.p
          initial={{ opacity: 0, scale: 0.86 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "Amiri, 'Scheherazade New', serif",
            fontSize: "clamp(5rem, 23vw, 8.5rem)",
            color: `${GOLD}0.96)`,
            textShadow: `0 0 70px ${GOLD}0.3), 0 0 140px ${GOLD}0.12)`,
            lineHeight: 1,
            direction: "rtl",
            position: "relative",
          }}
        >
          ٱلْوَدُودُ
        </motion.p>
      </div>
    ),
  },

  // ── 6. Name in Latin + animated underline sweep ──────────────────────────
  {
    id: "name-latin",
    duration: 3800,
    render: () => (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          style={{
            color: `${GOLD}0.38)`,
            fontSize: "clamp(0.72rem, 3vw, 0.92rem)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}
        >
          al-wadud
        </motion.p>
        <motion.p
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
          style={{
            color: `${WHITE}0.9)`,
            fontSize: "clamp(1.55rem, 7.5vw, 2.2rem)",
            fontWeight: 700,
            letterSpacing: "0.01em",
          }}
        >
          The Most Loving
        </motion.p>
        {/* Gold underline sweeps left → right */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.7, duration: 0.7, ease: "easeOut" }}
          style={{
            height: 1.5,
            width: "60%",
            background: `linear-gradient(90deg, transparent, ${GOLD}0.6), ${GOLD}0.6), transparent)`,
            transformOrigin: "left center",
          }}
        />
      </div>
    ),
  },

  // ── 7. Quranic ayah — Arabic ─────────────────────────────────────────────
  {
    id: "ayah-arabic",
    duration: 4500,
    render: () => (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.5 }}
        style={{
          fontFamily: "Amiri, 'Scheherazade New', serif",
          fontSize: "clamp(1.2rem, 6vw, 1.9rem)",
          color: `${GOLD}0.85)`,
          lineHeight: 2.1,
          direction: "rtl",
          textAlign: "center",
          textShadow: `0 0 24px ${GOLD}0.12)`,
        }}
      >
        وَهُوَ ٱلْغَفُورُ ٱلْوَدُودُ
      </motion.p>
    ),
  },

  // ── 8. Translation ───────────────────────────────────────────────────────
  {
    id: "ayah-translation",
    duration: 4200,
    render: () => (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.1 }}
          style={{
            color: `${WHITE}0.65)`,
            fontSize: "clamp(1rem, 5vw, 1.45rem)",
            lineHeight: 1.9,
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          &ldquo;And He is the Forgiving,<br />the Most Loving.&rdquo;
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.9 }}
          style={{
            color: `${GOLD}0.32)`,
            fontSize: "clamp(0.62rem, 2.5vw, 0.78rem)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Surah Al-Buruj 85:14
        </motion.p>
      </div>
    ),
  },

  // ── 9. Reflection — staggered, key phrase pulses ─────────────────────────
  {
    id: "reflection",
    duration: 5500,
    render: () => (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.1rem" }}>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.0 }}
          style={{
            color: `${WHITE}0.55)`,
            fontSize: "clamp(1.1rem, 5.5vw, 1.6rem)",
            lineHeight: 1.6,
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          His love for you
        </motion.p>
        {/* Key phrase: scale entrance then gentle breathing pulse */}
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: [0.9, 1, 1.015, 1] }}
          transition={{ delay: 1.5, duration: 2.5, times: [0, 0.28, 0.65, 1], ease: "easeInOut" }}
          style={{
            color: `${GOLD}0.95)`,
            fontSize: "clamp(1.4rem, 7vw, 2rem)",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          is not earned.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.0, duration: 1.0 }}
          style={{
            color: `${WHITE}0.32)`,
            fontSize: "clamp(0.9rem, 4.5vw, 1.3rem)",
            lineHeight: 1.7,
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          It is given.
        </motion.p>
      </div>
    ),
  },

  // ── 10. CTA ───────────────────────────────────────────────────────────────
  {
    id: "cta",
    duration: 4000,
    render: () => (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.9rem" }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.0 }}
          style={{
            color: `${WHITE}0.28)`,
            fontSize: "clamp(0.78rem, 3.5vw, 0.98rem)",
            lineHeight: 1.85,
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          Explore all 99 Names of Allah.
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          style={{ height: 1, width: 22, background: `${GOLD}0.15)` }}
        />
        <motion.img
          src="/logo.svg"
          alt="99 Names of Allah"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.9, ease: "easeOut" }}
          style={{ width: 80, height: 80, borderRadius: 16 }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.9 }}
          style={{
            color: `${GOLD}0.92)`,
            fontSize: "clamp(1.1rem, 5.5vw, 1.6rem)",
            fontWeight: 700,
            letterSpacing: "0.02em",
          }}
        >
          namesofallah.app
        </motion.p>
      </div>
    ),
  },
];

interface MinimalistNameReelProps {
  autoStart?: boolean;
  onComplete?: () => void;
}

export function MinimalistNameReel({ autoStart, onComplete }: MinimalistNameReelProps = {}) {
  return (
    <ReelPlayer
      screens={screens}
      gradient="linear-gradient(180deg, #000000 0%, #040404 100%)"
      autoStart={autoStart}
      onComplete={onComplete}
      minimal
    />
  );
}
