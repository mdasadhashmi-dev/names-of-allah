"use client";

import { motion } from "framer-motion";
import { ReelPlayer, ReelScreen } from "./ReelPlayer";

const GOLD = "rgba(217, 191, 140,";
const WHITE = "rgba(255, 255, 255,";

// 7 screens · ~29 seconds total (slowed for readability)
// Name: Al-Kareem (The Most Generous) · Surah Al-Infitar 82:6
const screens: ReelScreen[] = [
  {
    id: "silence",
    duration: 2800,
    render: () => (
      <motion.div
        animate={{ opacity: [0.25, 0.65, 0.25], scale: [1, 1.3, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: `${GOLD}0.6)`,
          boxShadow: `0 0 16px ${GOLD}0.45)`,
        }}
      />
    ),
  },
  {
    id: "ayah",
    duration: 4500,
    render: () => (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.3 }}
          style={{
            fontFamily: "Amiri, 'Scheherazade New', serif",
            fontSize: "clamp(1.1rem, 5.5vw, 1.65rem)",
            color: `${GOLD}0.88)`,
            lineHeight: 2.2,
            direction: "rtl",
            textShadow: `0 0 25px ${GOLD}0.12)`,
          }}
        >
          يَا أَيُّهَا الْإِنسَانُ مَا غَرَّكَ بِرَبِّكَ الْكَرِيمِ
        </motion.p>
      </div>
    ),
  },
  {
    id: "translation",
    duration: 4200,
    render: () => (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          style={{
            color: `${WHITE}0.72)`,
            fontSize: "clamp(0.9rem, 4.5vw, 1.3rem)",
            lineHeight: 1.85,
            fontStyle: "italic",
          }}
        >
          &ldquo;O humanity, what has<br />deceived you concerning<br />your Lord, the Most Generous?&rdquo;
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          style={{
            color: `${GOLD}0.42)`,
            fontSize: "clamp(0.6rem, 2.5vw, 0.78rem)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          Surah Al-Infitar 82:6
        </motion.p>
      </div>
    ),
  },
  {
    id: "reveal",
    duration: 5800,
    audioSrc: "/audio/al-fajr-89-15.mp3",
    render: () => (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.6rem" }}>
        <motion.p
          initial={{ opacity: 0, scale: 0.72 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 1.1, type: "spring", stiffness: 90, damping: 13 }}
          style={{
            fontFamily: "Amiri, 'Scheherazade New', serif",
            fontSize: "clamp(4.5rem, 21vw, 7rem)",
            color: `${GOLD}0.95)`,
            textShadow: `0 0 50px ${GOLD}0.4), 0 0 100px ${GOLD}0.2)`,
            lineHeight: 1,
            direction: "rtl",
          }}
        >
          ٱلْكَرِيمُ
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          style={{
            color: `${GOLD}0.42)`,
            fontSize: "clamp(0.62rem, 2.8vw, 0.82rem)",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          al-kareem
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.9 }}
          style={{
            color: `${WHITE}0.62)`,
            fontSize: "clamp(1rem, 4.8vw, 1.4rem)",
            fontStyle: "italic",
            letterSpacing: "0.04em",
          }}
        >
          The Most Generous
        </motion.p>
      </div>
    ),
  },
  {
    id: "name",
    duration: 3400,
    render: () => (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.7rem" }}>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          style={{
            color: `${GOLD}0.95)`,
            fontSize: "clamp(1.3rem, 6.5vw, 1.9rem)",
            fontWeight: 700,
            letterSpacing: "0.04em",
          }}
        >
          Al-Kareem
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          style={{ height: 1, width: 28, background: `${GOLD}0.32)` }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          style={{
            color: `${WHITE}0.48)`,
            fontSize: "clamp(0.72rem, 3.5vw, 0.98rem)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          The Most Generous
        </motion.p>
      </div>
    ),
  },
  {
    id: "reflection",
    duration: 4200,
    render: () => (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{ height: 1, width: 32, background: `${GOLD}0.35)` }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 1.1 }}
          style={{
            color: `${WHITE}0.68)`,
            fontSize: "clamp(1rem, 5vw, 1.4rem)",
            lineHeight: 1.8,
            fontStyle: "italic",
          }}
        >
          He gave you life<br />before you asked.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          style={{
            color: `${WHITE}0.35)`,
            fontSize: "clamp(0.82rem, 4vw, 1.1rem)",
            lineHeight: 1.8,
            fontStyle: "italic",
          }}
        >
          He gives even to those<br />who forget Him.
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          style={{ height: 1, width: 32, background: `${GOLD}0.35)` }}
        />
      </div>
    ),
  },
  {
    id: "cta",
    duration: 4200,
    render: () => (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          style={{
            color: `${WHITE}0.5)`,
            fontSize: "clamp(0.82rem, 3.8vw, 1.05rem)",
            fontStyle: "italic",
            lineHeight: 1.85,
            textAlign: "center",
          }}
        >
          &ldquo;Whoever memorises<br />the 99 Names of Allah<br />will enter Paradise.&rdquo;
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{ color: `${GOLD}0.38)`, fontSize: "clamp(0.58rem, 2.2vw, 0.72rem)", letterSpacing: "0.1em" }}
        >
          — Sahih al-Bukhari
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          style={{ height: 1, width: 28, background: `${GOLD}0.25)`, marginTop: "0.25rem" }}
        />
        <motion.img
          src="/logo.svg"
          alt="99 Names of Allah"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          style={{ width: 80, height: 80, borderRadius: 16 }}
        />
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          style={{
            color: `${GOLD}0.9)`,
            fontSize: "clamp(1rem, 5vw, 1.45rem)",
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

interface NameRevealReelProps {
  autoStart?: boolean;
  onComplete?: () => void;
}

export function NameRevealReel({ autoStart, onComplete }: NameRevealReelProps = {}) {
  return (
    <ReelPlayer
      screens={screens}
      gradient="linear-gradient(180deg, #0d1219 0%, #070b0f 55%, #050809 100%)"
      autoStart={autoStart}
      onComplete={onComplete}
    />
  );
}
