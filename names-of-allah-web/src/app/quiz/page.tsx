"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Brain, Languages, Trophy, Flame, Target } from "lucide-react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useSemanticColors } from "@/hooks/useSemanticColors";

type QuizMode = "nameFromMeaning" | "meaningFromName";

export default function QuizPage() {
  const router = useRouter();
  const [highScore] = useLocalStorage("quiz_highScore", 0);
  const [longestStreak] = useLocalStorage("quiz_longestStreak", 0);
  const [totalCompleted] = useLocalStorage("quiz_totalCompleted", 0);
  const [totalAnswered] = useLocalStorage("quiz_totalAnswered", 0);
  const [totalCorrect] = useLocalStorage("quiz_totalCorrect", 0);

  const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  const { isPro, styles } = useSemanticColors();

  const startQuiz = (mode: QuizMode) => {
    router.push(`/quiz/play?mode=${mode}`);
  };

  return (
    <div className="min-h-screen relative">
      {!isPro && <div className="fixed inset-0 bg-gradient-to-b from-dark-bg to-black" />}

      <div className="relative z-10 max-w-lg mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => router.back()}
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            <ArrowLeft size={20} className="text-white/70" />
          </button>
          <h1 className="text-xl font-semibold" style={styles.text}>Quiz</h1>
        </div>

        {/* Stats */}
        {totalCompleted > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-4 mb-8"
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Trophy size={14} style={{ color: "rgb(217,191,140)" }} />
                  <span className="text-xs text-white/50">Best</span>
                </div>
                <p className="text-lg font-semibold" style={{ color: "rgb(217,191,140)" }}>
                  {highScore}%
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Flame size={14} className="text-orange-400" />
                  <span className="text-xs text-white/50">Streak</span>
                </div>
                <p className="text-lg font-semibold text-orange-400">
                  {longestStreak}
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Target size={14} className="text-green-400" />
                  <span className="text-xs text-white/50">Accuracy</span>
                </div>
                <p className="text-lg font-semibold text-green-400">
                  {accuracy}%
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Mode Selection */}
        <h2 className="text-sm font-medium mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
          CHOOSE A MODE
        </h2>

        <div className="space-y-4">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onClick={() => startQuiz("nameFromMeaning")}
            className="w-full glass rounded-2xl p-6 text-left transition-all hover:border-gold/30"
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(217,191,140,0.15)" }}
              >
                <Brain size={24} style={{ color: "rgb(217,191,140)" }} />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Name from Meaning</h3>
                <p className="text-sm text-white/50">
                  Given the meaning, identify the correct name
                </p>
              </div>
            </div>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onClick={() => startQuiz("meaningFromName")}
            className="w-full glass rounded-2xl p-6 text-left transition-all hover:border-gold/30"
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(102,153,230,0.15)" }}
              >
                <Languages size={24} style={{ color: "rgb(102,153,230)" }} />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Meaning from Name</h3>
                <p className="text-sm text-white/50">
                  Given the name, identify the correct meaning
                </p>
              </div>
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
