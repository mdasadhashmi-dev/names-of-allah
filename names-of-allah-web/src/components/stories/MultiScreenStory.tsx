"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useLayout } from "@/providers/LayoutProvider";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Sparkles, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { ProgressIndicator } from "@/components/shared/ProgressIndicator";
import { StoryTextBox } from "@/components/shared/StoryTextBox";
import { ExplanationPoint } from "@/components/shared/ExplanationPoint";
import { ContinueToReflectButton } from "@/components/shared/ContinueToReflectButton";
import { AyahAudioButton } from "@/components/shared/AyahAudioButton";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";

export interface StoryScreen {
  text: string;
  icon: string;
  visualElement?: React.ReactNode;
}

export interface FinalRevealConfig {
  arabicAyah: string;
  ayahReference: string;
  translation: string;
  nameArabic: string;
  nameTransliteration: string;
  nameSubtitle: string;
  explanationPoints: { icon: string; text: string }[];
  closingText: string;
  audioFileName?: string;
}

interface MultiScreenStoryProps {
  nameId: string;
  screens: StoryScreen[];
  finalReveal: FinalRevealConfig;
  gradientColors: string[];
}

// Floating particle for the desktop visual panel
function Particle({ delay, x, size }: { delay: number; x: number; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        bottom: -10,
        background: "rgba(217,191,140,0.4)",
        boxShadow: "0 0 6px rgba(217,191,140,0.3)",
      }}
      animate={{
        y: [0, -600],
        opacity: [0, 0.8, 0],
        scale: [0.5, 1, 0.3],
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
}

// Geometric ring for the visual panel
function GeometricRing({ radius, progress, delay }: { radius: number; progress: number; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: radius * 2,
        height: radius * 2,
        border: "1px solid rgba(217,191,140,0.15)",
        top: "50%",
        left: "50%",
        marginTop: -radius,
        marginLeft: -radius,
      }}
      animate={{
        rotate: [0, 360],
        scale: [1, 1.05 + progress * 0.1, 1],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        rotate: { duration: 20 + delay * 5, repeat: Infinity, ease: "linear" },
        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        opacity: { duration: 3, repeat: Infinity, ease: "easeInOut", delay },
      }}
    />
  );
}

// Desktop visual panel component
function DesktopVisualPanel({
  nameArabic,
  nameTransliteration,
  progress,
  currentScreen,
  totalScreens,
  isFinalScreen,
}: {
  nameArabic: string;
  nameTransliteration: string;
  progress: number;
  currentScreen: number;
  totalScreens: number;
  isFinalScreen: boolean;
}) {
  const particles = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        delay: i * 0.6,
        x: 10 + Math.random() * 80,
        size: 3 + Math.random() * 4,
      })),
    []
  );

  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
      {/* Ambient glow that intensifies with progress */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: `radial-gradient(ellipse at center, rgba(217,191,140,${0.03 + progress * 0.08}) 0%, transparent 70%)`,
        }}
        transition={{ duration: 1 }}
      />

      {/* Geometric rings */}
      <GeometricRing radius={80} progress={progress} delay={0} />
      <GeometricRing radius={130} progress={progress} delay={1} />
      <GeometricRing radius={190} progress={progress} delay={2} />

      {/* Floating particles */}
      {particles.map((p) => (
        <Particle key={p.id} delay={p.delay} x={p.x} size={p.size} />
      ))}

      {/* Central calligraphy */}
      <motion.div
        className="relative z-10 text-center"
        animate={{
          scale: isFinalScreen ? [1, 1.1, 1] : 1,
        }}
        transition={{ duration: 2, repeat: isFinalScreen ? Infinity : 0, ease: "easeInOut" }}
      >
        <motion.p
          className="arabic-text text-7xl xl:text-8xl font-bold"
          style={{
            color: "rgba(217,191,140,0.9)",
            textShadow: `0 0 ${20 + progress * 30}px rgba(217,191,140,${0.2 + progress * 0.3})`,
          }}
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {nameArabic}
        </motion.p>
        <motion.p
          className="text-lg font-serif mt-4"
          style={{ color: "rgba(217,191,140,0.6)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {nameTransliteration}
        </motion.p>
      </motion.div>

      {/* Progress arc indicator */}
      <svg
        className="absolute"
        width="300"
        height="300"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <motion.circle
          cx="150"
          cy="150"
          r="140"
          fill="none"
          stroke="rgba(217,191,140,0.2)"
          strokeWidth="1"
          strokeDasharray={`${2 * Math.PI * 140}`}
          strokeDashoffset={2 * Math.PI * 140 * (1 - progress)}
          strokeLinecap="round"
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </svg>

      {/* Screen counter */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <span className="text-xs font-mono" style={{ color: "rgba(217,191,140,0.5)" }}>
          {isFinalScreen ? "Reveal" : `${currentScreen + 1} / ${totalScreens}`}
        </span>
      </div>

      {/* Keyboard hint */}
      <motion.div
        className="absolute bottom-8 right-8 flex items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          Use arrow keys
        </span>
        <div className="flex gap-1 ml-1">
          <span
            className="w-5 h-5 rounded flex items-center justify-center text-xs"
            style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.4)" }}
          >
            ←
          </span>
          <span
            className="w-5 h-5 rounded flex items-center justify-center text-xs"
            style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.4)" }}
          >
            →
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export function MultiScreenStory({
  nameId,
  screens,
  finalReveal,
  gradientColors,
}: MultiScreenStoryProps) {
  const router = useRouter();
  const { setIsFullscreen } = useLayout();
  const [currentScreen, setCurrentScreen] = useState(0);
  const [showContent, setShowContent] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalScreens = screens.length + 1; // +1 for final reveal

  const [showArabic, setShowArabic] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [showName, setShowName] = useState(false);
  const { play: playAudio, stop: stopAudio } = useAudioPlayer();

  const isFinalScreen = currentScreen === screens.length;
  const progress = (currentScreen + 1) / totalScreens;

  // Hide sidebar while story is active
  useEffect(() => {
    setIsFullscreen(true);
    return () => setIsFullscreen(false);
  }, [setIsFullscreen]);

  useEffect(() => {
    if (isFinalScreen) {
      const t1 = setTimeout(() => setShowArabic(true), 500);
      const t2 = setTimeout(() => setShowTranslation(true), 2000);
      const t3 = setTimeout(() => setShowName(true), 3500);
      return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }
  }, [isFinalScreen]);

  // Auto-play audio when final reveal screen shows
  useEffect(() => {
    if (isFinalScreen && finalReveal.audioFileName) {
      const t = setTimeout(() => {
        playAudio(finalReveal.audioFileName!);
      }, 800);
      return () => {
        clearTimeout(t);
        stopAudio();
      };
    }
  }, [isFinalScreen, finalReveal.audioFileName, playAudio, stopAudio]);

  const nextScreen = useCallback(() => {
    if (isTransitioning || isFinalScreen) return;
    setIsTransitioning(true);
    setShowContent(false);
    setTimeout(() => {
      setCurrentScreen((prev) => prev + 1);
      setShowContent(true);
      setIsTransitioning(false);
    }, 400);
  }, [isTransitioning, isFinalScreen]);

  const prevScreen = useCallback(() => {
    if (isTransitioning || currentScreen === 0) return;
    setIsTransitioning(true);
    setShowContent(false);
    setTimeout(() => {
      setCurrentScreen((prev) => prev - 1);
      setShowContent(true);
      setIsTransitioning(false);
    }, 400);
  }, [isTransitioning, currentScreen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextScreen();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevScreen();
      } else if (e.key === "Escape") {
        router.back();
      } else if (e.key === "f" || e.key === "F") {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextScreen, prevScreen, router]);

  const gradientStyle = {
    background: `linear-gradient(135deg, ${gradientColors.join(", ")})`,
  };

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0" style={gradientStyle} />

      {/* Desktop: split panel layout */}
      <div className="relative z-10 min-h-screen flex">
        {/* Left visual panel — desktop only */}
        <div className="hidden lg:flex w-[45%] xl:w-[50%] min-h-screen sticky top-0">
          <DesktopVisualPanel
            nameArabic={finalReveal.nameArabic}
            nameTransliteration={finalReveal.nameTransliteration}
            progress={progress}
            currentScreen={currentScreen}
            totalScreens={totalScreens}
            isFinalScreen={isFinalScreen}
          />
        </div>

        {/* Right content panel (full-width on mobile, right panel on desktop) */}
        <div className="w-full lg:w-[55%] xl:w-[50%] min-h-screen flex flex-col relative">
          {/* Back button */}
          <button
            onClick={() => router.back()}
            className="fixed lg:absolute top-6 left-6 z-50 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            <ArrowLeft size={20} className="text-white/70" />
          </button>

          {/* Progress indicator */}
          {!isFinalScreen && (
            <div className="fixed lg:absolute top-6 left-1/2 lg:left-auto lg:right-6 -translate-x-1/2 lg:translate-x-0 z-40">
              <ProgressIndicator current={currentScreen} total={totalScreens - 1} />
            </div>
          )}

          {/* Content area */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 lg:px-12 py-16">
            <AnimatePresence mode="wait">
              {!isFinalScreen ? (
                <motion.div
                  key={currentScreen}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col items-center gap-10 max-w-md lg:max-w-lg w-full"
                >
                  {/* Visual element */}
                  {screens[currentScreen]?.visualElement && (
                    <div className="flex items-center justify-center min-h-[200px]">
                      {screens[currentScreen].visualElement}
                    </div>
                  )}

                  {/* Story text */}
                  <StoryTextBox
                    text={screens[currentScreen]?.text || ""}
                    icon={screens[currentScreen]?.icon || "Sparkles"}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="final"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-full max-w-md lg:max-w-lg overflow-y-auto max-h-[80vh] px-2"
                >
                  <div className="flex flex-col items-center gap-8">
                    {/* Arabic Ayah */}
                    {showArabic && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center"
                      >
                        <p className="arabic-text text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed mb-2">
                          {finalReveal.arabicAyah}
                        </p>
                        <p className="text-xs" style={{ color: "rgba(217,191,140,0.7)" }}>
                          {finalReveal.ayahReference}
                        </p>
                      </motion.div>
                    )}

                    {/* Translation */}
                    {showTranslation && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                      >
                        <p className="text-lg lg:text-xl font-serif italic text-white/90 leading-relaxed">
                          {finalReveal.translation}
                        </p>
                        <div className="flex items-center justify-center gap-3 mt-4">
                          <div className="w-12 h-px" style={{ background: "rgba(217,191,140,0.5)" }} />
                          <Sparkles size={12} style={{ color: "rgb(217,191,140)" }} />
                          <div className="w-12 h-px" style={{ background: "rgba(217,191,140,0.5)" }} />
                        </div>
                      </motion.div>
                    )}

                    {/* Name Reveal */}
                    {showName && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="w-full rounded-3xl p-8 text-center"
                        style={{
                          background: "rgba(0,0,0,0.4)",
                          border: "1px solid rgba(217,191,140,0.3)",
                        }}
                      >
                        <Sparkles size={24} className="mx-auto mb-4" style={{ color: "rgb(217,191,140)" }} />

                        <motion.p
                          className="arabic-text text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3"
                          animate={{ textShadow: ["0 0 20px rgba(217,191,140,0.4)", "0 0 30px rgba(217,191,140,0.8)", "0 0 20px rgba(217,191,140,0.4)"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          {finalReveal.nameArabic}
                        </motion.p>

                        <div className="flex items-center justify-center gap-3 mb-2">
                          <div className="w-10 h-px" style={{ background: "rgba(217,191,140,0.5)" }} />
                          <p className="text-2xl lg:text-3xl font-serif" style={{ color: "rgb(217,191,140)" }}>
                            {finalReveal.nameTransliteration}
                          </p>
                          <div className="w-10 h-px" style={{ background: "rgba(217,191,140,0.5)" }} />
                        </div>

                        <p className="text-base lg:text-lg text-white/80 font-serif mb-6">
                          {finalReveal.nameSubtitle}
                        </p>

                        <div className="w-full h-px my-4" style={{ background: "rgba(255,255,255,0.1)" }} />

                        <div className="text-left space-y-4 my-6">
                          {finalReveal.explanationPoints.map((point, idx) => (
                            <ExplanationPoint key={idx} icon={point.icon} text={point.text} />
                          ))}
                        </div>

                        <div className="w-full h-px my-4" style={{ background: "rgba(255,255,255,0.1)" }} />

                        <p className="text-sm lg:text-base font-serif text-white/85 leading-relaxed whitespace-pre-line mt-4">
                          {finalReveal.closingText}
                        </p>

                        {/* Audio button */}
                        {finalReveal.audioFileName && (
                          <div className="flex justify-center mt-6">
                            <AyahAudioButton audioFileName={finalReveal.audioFileName} />
                          </div>
                        )}
                      </motion.div>
                    )}

                    {/* Continue button */}
                    {showName && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <ContinueToReflectButton nameId={nameId} />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation buttons */}
            {!isFinalScreen && showContent && (
              <div className="fixed lg:absolute bottom-12 flex items-center gap-4">
                {/* Back button (desktop only, visible if not first screen) */}
                {currentScreen > 0 && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-1 px-4 py-2 rounded-full text-sm text-white/60 hover:text-white/90 transition-colors"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                    onClick={prevScreen}
                  >
                    <ChevronLeft size={14} /> Back
                  </motion.button>
                )}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="btn-gold flex items-center gap-2 text-sm"
                  onClick={nextScreen}
                >
                  Next <ArrowRight size={16} />
                </motion.button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
