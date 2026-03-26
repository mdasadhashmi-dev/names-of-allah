"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLayout } from "@/providers/LayoutProvider";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import { ContinueToReflectButton } from "@/components/shared/ContinueToReflectButton";
import { ExplanationPoint } from "@/components/shared/ExplanationPoint";

interface SeaPartingViewProps {
  nameId: string;
}

export function SeaPartingView({ nameId }: SeaPartingViewProps) {
  const router = useRouter();
  const { setIsFullscreen } = useLayout();
  const [phase, setPhase] = useState(0);
  // Phases: 0=sky, 1=sea, 2=staffRaised, 3=seaParted, 4=walking, 5=textOverlay, 6=finalReveal

  // Hide sidebar while cinematic story plays
  useEffect(() => {
    setIsFullscreen(true);
    return () => setIsFullscreen(false);
  }, [setIsFullscreen]);

  useEffect(() => {
    const delays = [0, 1500, 3000, 4500, 6500, 9000, 12000];
    const timeouts = delays.map((delay, idx) =>
      setTimeout(() => setPhase(idx), delay)
    );
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Night sky background */}
      <div
        className="fixed inset-0 transition-all duration-1000"
        style={{
          background: phase >= 3
            ? "linear-gradient(to bottom, #050814, #0a1028, #071020)"
            : "linear-gradient(to bottom, #050814, #0a1028, #000510)",
        }}
      />

      {/* Stars */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white"
            style={{
              left: `${(i * 37 + 13) % 100}%`,
              top: `${(i * 23 + 7) % 50}%`,
            }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut" as const,
            }}
          />
        ))}
      </div>

      {/* Moon */}
      <motion.div
        className="fixed top-16 right-12 w-16 h-16 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,255,220,0.9), rgba(200,200,180,0.3))",
          boxShadow: "0 0 30px rgba(255,255,200,0.3)",
        }}
        animate={{ opacity: phase >= 0 ? 1 : 0 }}
        transition={{ duration: 2 }}
      />

      {/* Sea */}
      <AnimatePresence>
        {phase >= 1 && (
          <motion.div
            className="fixed bottom-0 left-0 right-0 overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: "45%" }}
            transition={{ duration: 2, ease: "easeOut" as const }}
          >
            {/* Left sea wall */}
            <motion.div
              className="absolute inset-y-0 left-0"
              animate={{
                width: phase >= 3 ? "35%" : "50%",
                x: phase >= 3 ? "-5%" : "0%",
              }}
              transition={{ duration: 2, ease: "easeInOut" as const }}
              style={{
                background: "linear-gradient(to right, #0a2a4a, #1a4a7a, #0d3366)",
              }}
            />
            
            {/* Right sea wall */}
            <motion.div
              className="absolute inset-y-0 right-0"
              animate={{
                width: phase >= 3 ? "35%" : "50%",
                x: phase >= 3 ? "5%" : "0%",
              }}
              transition={{ duration: 2, ease: "easeInOut" as const }}
              style={{
                background: "linear-gradient(to left, #0a2a4a, #1a4a7a, #0d3366)",
              }}
            />

            {/* Sea path (revealed when parted) */}
            {phase >= 3 && (
              <motion.div
                className="absolute inset-y-0 left-1/2 -translate-x-1/2"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "30%", opacity: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                style={{
                  background: "linear-gradient(to bottom, #2a1a0a, #3d2b15, #1a0f05)",
                }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Divine light beam */}
      {phase >= 2 && (
        <motion.div
          className="fixed top-0 left-1/2 -translate-x-1/2"
          initial={{ height: 0, width: 0, opacity: 0 }}
          animate={{
            height: "60%",
            width: phase >= 3 ? 120 : 40,
            opacity: phase >= 3 ? 0.6 : 0.3,
          }}
          transition={{ duration: 2 }}
          style={{
            background: "linear-gradient(to bottom, rgba(217,191,140,0.4), transparent)",
            clipPath: "polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)",
          }}
        />
      )}

      {/* Musa figure */}
      {phase >= 4 && (
        <motion.div
          className="fixed left-1/2 -translate-x-1/2"
          initial={{ bottom: "30%", opacity: 0 }}
          animate={{ bottom: "48%", opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut" as const }}
        >
          <div className="flex flex-col items-center">
            {/* Staff */}
            <motion.div
              className="w-1 h-16 rounded-full mb-1"
              style={{ background: "rgb(160,120,60)" }}
              animate={{ rotate: phase >= 2 ? -15 : 0 }}
            />
            {/* Head */}
            <div className="w-5 h-5 rounded-full" style={{ background: "rgba(200,170,130,0.8)" }} />
            {/* Body */}
            <div className="w-6 h-10 rounded-md mt-1" style={{ background: "rgba(240,230,220,0.7)" }} />
          </div>
        </motion.div>
      )}

      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="fixed top-6 left-6 z-50 w-10 h-10 rounded-full flex items-center justify-center"
        style={{ background: "rgba(255,255,255,0.1)" }}
      >
        <ArrowLeft size={20} className="text-white/70" />
      </button>

      {/* Text overlays */}
      <div className="fixed inset-0 z-20 flex items-center justify-center px-6">
        <AnimatePresence mode="wait">
          {phase === 1 && (
            <motion.div
              key="text1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="glass rounded-2xl p-6 text-center max-w-sm"
            >
              <p className="text-white/90 font-serif text-lg leading-relaxed">
                Pharaoh&apos;s army approached.{"\n"}
                The sea blocked the path.{"\n\n"}
                All seemed lost.
              </p>
            </motion.div>
          )}

          {phase === 2 && (
            <motion.div
              key="text2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="glass rounded-2xl p-6 text-center max-w-sm"
            >
              <p className="text-white/90 font-serif text-lg leading-relaxed">
                Musa raised his staff.{"\n\n"}
                &ldquo;Strike the sea!&rdquo;{"\n"}
                Allah commanded.
              </p>
            </motion.div>
          )}

          {phase === 3 && (
            <motion.div
              key="text3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="glass rounded-2xl p-6 text-center max-w-sm"
            >
              <p className="text-white/90 font-serif text-lg leading-relaxed">
                The sea split apart.{"\n\n"}
                Walls of water{"\n"}
                towered on each side.{"\n\n"}
                A path where none existed.
              </p>
            </motion.div>
          )}

          {phase === 5 && (
            <motion.div
              key="text4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="glass rounded-2xl p-6 text-center max-w-sm"
            >
              <p className="text-white/90 font-serif text-lg leading-relaxed">
                Al-Fattah—The Opener.{"\n\n"}
                When every door closes,{"\n"}
                He opens a way{"\n"}
                through the impossible.
              </p>
            </motion.div>
          )}

          {phase >= 6 && (
            <motion.div
              key="final"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full max-w-md overflow-y-auto max-h-[80vh] px-2"
            >
              <div className="flex flex-col items-center gap-6">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-center"
                >
                  <p className="arabic-text text-2xl font-bold text-white leading-relaxed mb-2">
                    إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا
                  </p>
                  <p className="text-xs" style={{ color: "rgba(217,191,140,0.7)" }}>
                    Surah Al-Fath 48:1
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-lg font-serif italic text-white/90 text-center"
                >
                  &ldquo;Indeed, We have given you a clear opening&rdquo;
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8, type: "spring" }}
                  className="w-full rounded-3xl p-8 text-center"
                  style={{
                    background: "rgba(0,0,0,0.5)",
                    border: "1px solid rgba(217,191,140,0.3)",
                  }}
                >
                  <Sparkles size={24} className="mx-auto mb-4" style={{ color: "rgb(217,191,140)" }} />
                  
                  <motion.p
                    className="arabic-text text-5xl font-bold text-white mb-3"
                    animate={{ textShadow: ["0 0 20px rgba(217,191,140,0.4)", "0 0 30px rgba(217,191,140,0.8)", "0 0 20px rgba(217,191,140,0.4)"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    ٱلْفَتَّاحُ
                  </motion.p>

                  <div className="flex items-center justify-center gap-3 mb-2">
                    <div className="w-10 h-px" style={{ background: "rgba(217,191,140,0.5)" }} />
                    <p className="text-2xl font-serif" style={{ color: "rgb(217,191,140)" }}>
                      Al-Fattah
                    </p>
                    <div className="w-10 h-px" style={{ background: "rgba(217,191,140,0.5)" }} />
                  </div>

                  <p className="text-base text-white/80 font-serif mb-6">
                    The Opener • The Granter of Victory
                  </p>

                  <div className="w-full h-px my-4" style={{ background: "rgba(255,255,255,0.1)" }} />

                  <div className="text-left space-y-4 my-6">
                    <ExplanationPoint icon="Key" text="He opens doors that seem permanently closed" />
                    <ExplanationPoint icon="Sparkles" text="When Musa faced the sea, Allah opened a path through it" />
                    <ExplanationPoint icon="ArrowUpCircle" text="No situation is impossible for Al-Fattah" />
                    <ExplanationPoint icon="Heart" text="Trust Him when all doors close—His opening is near" />
                  </div>

                  <div className="w-full h-px my-4" style={{ background: "rgba(255,255,255,0.1)" }} />

                  <p className="text-sm font-serif text-white/85 leading-relaxed whitespace-pre-line mt-4">
                    {"When you feel trapped,\nremember the sea that parted.\n\nAl-Fattah opens ways\nwhere none exist.\n\nHe is the Opener of hearts,\nof doors, of paths,\nof victory."}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                >
                  <ContinueToReflectButton nameId={nameId} />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
