"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface ReelScreen {
  id: string;
  duration: number;
  audioSrc?: string;
  render: () => React.ReactNode;
}

interface ReelPlayerProps {
  screens: ReelScreen[];
  gradient?: string;
  autoStart?: boolean;
  onComplete?: () => void;
  minimal?: boolean;
}

const GOLD = "rgba(217, 191, 140,";
const WHITE = "rgba(255, 255, 255,";

const PARTICLES = [
  { x: 8,  size: 2, delay: 1.0, dur: 10 },
  { x: 20, size: 3, delay: 0.3, dur: 9  },
  { x: 35, size: 2, delay: 2.5, dur: 12 },
  { x: 48, size: 4, delay: 0.8, dur: 8  },
  { x: 62, size: 2, delay: 3.2, dur: 11 },
  { x: 75, size: 3, delay: 1.7, dur: 9  },
  { x: 88, size: 2, delay: 4.0, dur: 10 },
  { x: 15, size: 2, delay: 0.5, dur: 13 },
  { x: 55, size: 3, delay: 5.1, dur: 8  },
  { x: 92, size: 2, delay: 2.0, dur: 11 },
];

const RINGS = [
  { r: 60,  delay: 0,   dur: 20, dir: 1  },
  { r: 105, delay: 1.5, dur: 28, dir: -1 },
  { r: 160, delay: 0.5, dur: 36, dir: 1  },
  { r: 220, delay: 2.0, dur: 48, dir: -1 },
];

const screenVariants = {
  enter:  { opacity: 0, y: 14 },
  center: { opacity: 1, y: 0  },
  exit:   { opacity: 0, y: -14 },
};

export function ReelPlayer({ screens, gradient, autoStart, onComplete, minimal }: ReelPlayerProps) {
  const [screen, setScreen] = useState(0);
  const [done, setDone] = useState(false);
  const [started, setStarted] = useState(autoStart ?? false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const advance = useCallback(() => {
    setScreen((s) => {
      if (s < screens.length - 1) return s + 1;
      setDone(true);
      return s;
    });
  }, [screens.length]);

  // Fire onComplete once when done flips to true
  useEffect(() => {
    if (done) onComplete?.();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  useEffect(() => {
    if (!started || done) return;
    const t = setTimeout(advance, screens[screen].duration);
    return () => clearTimeout(t);
  }, [screen, done, started, advance, screens]);

  // Play audio when a screen with audioSrc becomes active
  useEffect(() => {
    if (!started || done) return;
    const src = screens[screen]?.audioSrc;
    if (!src) return;
    const t = setTimeout(() => {
      audioRef.current?.pause();
      const audio = new Audio(src);
      audio.volume = 0.85;
      audioRef.current = audio;
      const loop = () => {
        if (audioRef.current !== audio) return;
        setTimeout(() => {
          if (audioRef.current !== audio) return;
          audio.play().catch(() => {});
        }, 50);
      };
      audio.addEventListener("ended", loop);
      audio.play().catch(() => {});
    }, 50);
    return () => clearTimeout(t);
  }, [screen, started, done, screens]);

  // Stop audio on unmount
  useEffect(() => {
    return () => { audioRef.current?.pause(); };
  }, []);

  const replay = () => {
    setScreen(0);
    setDone(false);
    setStarted(true);
  };

  return (
    <div
      className="relative mx-auto overflow-hidden cursor-pointer select-none"
      style={{
        aspectRatio: "9/16",
        maxHeight: "calc(100svh - 2rem)",
        maxWidth: "calc((100svh - 2rem) * 9 / 16)",
        background: gradient ?? "linear-gradient(180deg, #0d1014 0%, #060809 100%)",
        fontFamily: "var(--font-sans, system-ui)",
      }}
      onClick={() => {
        if (!started) setStarted(true);
        else if (!done) advance();
      }}
    >
      {/* Floating particles */}
      {!minimal && PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            bottom: -10,
            background: `${GOLD}0.4)`,
            boxShadow: `0 0 6px ${GOLD}0.3)`,
          }}
          animate={{ y: [0, -700], opacity: [0, 0.7, 0], scale: [0.5, 1, 0.3] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeOut" }}
        />
      ))}

      {/* Geometric rings — centered */}
      {!minimal && (
        <div
          className="absolute pointer-events-none"
          style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        >
          {RINGS.map((ring, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: ring.r * 2,
                height: ring.r * 2,
                border: `1px solid ${GOLD}${0.07 + i * 0.02})`,
                left: "50%",
                top: "50%",
                marginLeft: -ring.r,
                marginTop: -ring.r,
              }}
              animate={{ rotate: [0, 360 * ring.dir] }}
              transition={{ duration: ring.dur, delay: ring.delay, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </div>
      )}

      {/* Screen content */}
      <AnimatePresence mode="wait">
        {!started ? (
          <motion.div
            key="__start"
            className="absolute inset-0 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ color: `${GOLD}0.8)`, fontSize: "2.5rem", lineHeight: 1 }}
            >
              ▶
            </motion.div>
            <p style={{
              color: `${GOLD}0.45)`,
              fontSize: "0.65rem",
              marginTop: "0.8rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}>
              Tap to play
            </p>
          </motion.div>
        ) : done ? (
          <motion.div
            key="__done"
            className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              style={{
                color: `${WHITE}0.45)`,
                fontSize: "clamp(0.7rem, 3vw, 0.88rem)",
                fontStyle: "italic",
                lineHeight: 1.8,
              }}
            >
              &ldquo;Whoever memorises the 99 Names of Allah<br />will enter Paradise.&rdquo;
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              style={{ color: `${GOLD}0.4)`, fontSize: "clamp(0.55rem, 2.2vw, 0.72rem)", letterSpacing: "0.1em" }}
            >
              — Sahih al-Bukhari
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ color: `${GOLD}0.88)`, fontSize: "clamp(0.9rem, 4.5vw, 1.3rem)", fontWeight: 700, marginTop: "0.5rem" }}
            >
              namesofallah.app
            </motion.p>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              onClick={(e) => { e.stopPropagation(); replay(); }}
              style={{
                marginTop: "0.5rem",
                background: `${GOLD}0.12)`,
                border: `1px solid ${GOLD}0.28)`,
                color: `${GOLD}0.75)`,
                padding: "0.45rem 1.1rem",
                borderRadius: "100px",
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                cursor: "pointer",
              }}
            >
              ↺ Replay
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key={screens[screen].id}
            className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center"
            variants={screenVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            {screens[screen].render()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress dots */}
      {started && !done && (
        <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-1.5 pointer-events-none">
          {screens.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === screen ? 18 : 4,
                height: 4,
                borderRadius: 2,
                background: i === screen ? `${GOLD}0.85)` : `${GOLD}0.22)`,
                transition: "all 0.35s ease",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
