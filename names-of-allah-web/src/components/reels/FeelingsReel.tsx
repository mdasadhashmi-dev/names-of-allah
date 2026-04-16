"use client";

import { motion } from "framer-motion";
import { ReelPlayer, ReelScreen } from "./ReelPlayer";

const GOLD = "rgba(217, 191, 140,";
const WHITE = "rgba(255, 255, 255,";

// 7 screens · ~26 seconds total (slowed for readability)
const screens: ReelScreen[] = [
  {
    id: "hook",
    duration: 3200,
    render: () => (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        style={{
          color: `${GOLD}0.55)`,
          fontSize: "clamp(0.7rem, 3.5vw, 1rem)",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
        }}
      >
        right now...
      </motion.p>
    ),
  },
  {
    id: "emotion",
    duration: 3200,
    render: () => (
      <motion.p
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.6, type: "spring", stiffness: 140 }}
        style={{
          color: `${WHITE}0.92)`,
          fontSize: "clamp(1.9rem, 9.5vw, 2.8rem)",
          fontWeight: 700,
          lineHeight: 1.2,
        }}
      >
        You&apos;re anxious.
      </motion.p>
    ),
  },
  {
    id: "detail",
    duration: 3200,
    render: () => (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.8rem" }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{
            color: `${WHITE}0.55)`,
            fontSize: "clamp(1rem, 5vw, 1.45rem)",
            fontStyle: "italic",
            lineHeight: 1.7,
          }}
        >
          You can&apos;t stop<br />your thoughts.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          style={{
            color: `${WHITE}0.35)`,
            fontSize: "clamp(0.8rem, 4vw, 1.1rem)",
            fontStyle: "italic",
          }}
        >
          You don&apos;t know who to trust.
        </motion.p>
      </div>
    ),
  },
  {
    id: "pivot",
    duration: 7800,
    render: () => (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.9rem" }}>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          style={{
            color: `${WHITE}0.38)`,
            fontSize: "clamp(0.72rem, 3.2vw, 0.9rem)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          But Allah — Lord of the worlds —
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{
            color: `${GOLD}0.92)`,
            fontSize: "clamp(1.2rem, 5.8vw, 1.65rem)",
            fontWeight: 700,
            lineHeight: 1.5,
          }}
        >
          has 99 Names.
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          style={{ height: 1, width: 36, background: `${GOLD}0.3)` }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.9 }}
          style={{
            color: `${WHITE}0.55)`,
            fontSize: "clamp(0.88rem, 4.2vw, 1.2rem)",
            lineHeight: 1.8,
            fontStyle: "italic",
          }}
        >
          Each one a door you can<br />call through — right now.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.8 }}
          style={{
            color: `${GOLD}0.5)`,
            fontSize: "clamp(0.7rem, 3vw, 0.88rem)",
            letterSpacing: "0.1em",
            fontStyle: "italic",
          }}
        >
          For your anxiety, there is one.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.8, duration: 0.9 }}
          style={{
            color: `${WHITE}0.62)`,
            fontSize: "clamp(0.85rem, 4vw, 1.1rem)",
            lineHeight: 1.8,
            fontStyle: "italic",
          }}
        >
          Entrust your worries to Him —<br />He is Al-Wakeel, The Trustee.
        </motion.p>
      </div>
    ),
  },
  {
    id: "reveal",
    duration: 5500,
    audioSrc: "/audio/ali-imran-3-173.mp3",
    render: () => (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.6rem" }}>
        <motion.p
          initial={{ opacity: 0, scale: 0.78 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.0, type: "spring", stiffness: 100, damping: 14 }}
          style={{
            fontFamily: "Amiri, 'Scheherazade New', serif",
            fontSize: "clamp(4.2rem, 19vw, 6.5rem)",
            color: `${GOLD}0.95)`,
            textShadow: `0 0 40px ${GOLD}0.35), 0 0 80px ${GOLD}0.18)`,
            lineHeight: 1,
            direction: "rtl",
          }}
        >
          ٱلْوَكِيلُ
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{
            color: `${GOLD}0.45)`,
            fontSize: "clamp(0.65rem, 2.8vw, 0.85rem)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          al-wakeel
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.9 }}
          style={{
            color: `${WHITE}0.62)`,
            fontSize: "clamp(1rem, 4.8vw, 1.4rem)",
            fontStyle: "italic",
            letterSpacing: "0.04em",
          }}
        >
          The Trustee
        </motion.p>
      </div>
    ),
  },
  {
    id: "meaning",
    duration: 4200,
    render: () => (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          style={{
            color: `${GOLD}0.92)`,
            fontSize: "clamp(1.15rem, 5.5vw, 1.55rem)",
            fontWeight: 600,
          }}
        >
          The Trustee
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{ height: 1, width: 28, background: `${GOLD}0.3)` }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.9 }}
          style={{
            color: `${WHITE}0.6)`,
            fontSize: "clamp(0.9rem, 4.5vw, 1.25rem)",
            lineHeight: 1.75,
            fontStyle: "italic",
          }}
        >
          He is handling<br />what you cannot.
        </motion.p>
      </div>
    ),
  },
  {
    id: "cta",
    duration: 4200,
    render: () => (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            color: `${WHITE}0.42)`,
            fontSize: "clamp(0.78rem, 3.5vw, 1rem)",
            fontStyle: "italic",
            lineHeight: 1.85,
            textAlign: "center",
          }}
        >
          Explore all 99 Names of Allah.<br />Each one a key for a different door.
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          style={{ height: 1, width: 28, background: `${GOLD}0.25)` }}
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

interface FeelingsReelProps {
  autoStart?: boolean;
  onComplete?: () => void;
}

export function FeelingsReel({ autoStart, onComplete }: FeelingsReelProps = {}) {
  return (
    <ReelPlayer
      screens={screens}
      gradient="linear-gradient(180deg, #0d1014 0%, #080a0f 100%)"
      autoStart={autoStart}
      onComplete={onComplete}
    />
  );
}
