"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle, XCircle, Trophy, Flame } from "lucide-react";
import { allNames } from "@/data/names";
import { useLocalStorage } from "@/hooks/useLocalStorage";

type QuizMode = "nameFromMeaning" | "meaningFromName";

interface QuizQuestion {
  prompt: string;
  arabicText: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

function generateQuestions(mode: QuizMode, count: number = 10): QuizQuestion[] {
  const activeNames = allNames.filter((n) => n.hasContent && n.approved);
  const shuffled = [...activeNames].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, Math.min(count, activeNames.length));

  return selected.map((name) => {
    const wrongNames = activeNames
      .filter((n) => n.nameId !== name.nameId)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const correctIndex = Math.floor(Math.random() * 4);
    const options: string[] = [];

    let wrongIdx = 0;
    for (let i = 0; i < 4; i++) {
      if (i === correctIndex) {
        options.push(
          mode === "nameFromMeaning" ? name.transliteration : name.meaning
        );
      } else {
        options.push(
          mode === "nameFromMeaning"
            ? wrongNames[wrongIdx].transliteration
            : wrongNames[wrongIdx].meaning
        );
        wrongIdx++;
      }
    }

    return {
      prompt:
        mode === "nameFromMeaning"
          ? `Which name means "${name.meaning}"?`
          : `What does ${name.transliteration} mean?`,
      arabicText: name.arabic,
      options,
      correctIndex,
      explanation: `${name.transliteration} (${name.arabic}) means "${name.meaning}"`,
    };
  });
}

function QuizGame() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mode = (searchParams.get("mode") as QuizMode) || "nameFromMeaning";

  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const [highScore, setHighScore] = useLocalStorage("quiz_highScore", 0);
  const [longestStreak, setLongestStreak] = useLocalStorage("quiz_longestStreak", 0);
  const [totalCompleted, setTotalCompleted] = useLocalStorage("quiz_totalCompleted", 0);
  const [totalAnswered, setTotalAnswered] = useLocalStorage("quiz_totalAnswered", 0);
  const [totalCorrect, setTotalCorrect] = useLocalStorage("quiz_totalCorrect", 0);

  useEffect(() => {
    setQuestions(generateQuestions(mode));
  }, [mode]);

  const selectAnswer = (index: number) => {
    if (showFeedback) return;
    setSelectedAnswer(index);
    setShowFeedback(true);

    const isCorrect = index === questions[currentIndex].correctIndex;
    if (isCorrect) {
      setScore((s) => s + 1);
      setStreak((s) => s + 1);
    } else {
      setStreak(0);
    }
    setTotalAnswered((v) => v + 1);
    if (isCorrect) setTotalCorrect((v) => v + 1);
  };

  const nextQuestion = useCallback(() => {
    if (currentIndex >= questions.length - 1) {
      setIsFinished(true);
      const finalScore = Math.round(((score + (selectedAnswer === questions[currentIndex]?.correctIndex ? 0 : 0)) / questions.length) * 100);
      if (finalScore > highScore) setHighScore(finalScore);
      if (streak > longestStreak) setLongestStreak(streak);
      setTotalCompleted((v) => v + 1);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  }, [currentIndex, questions.length, score, highScore, streak, longestStreak, selectedAnswer, questions, setHighScore, setLongestStreak, setTotalCompleted]);

  const restart = () => {
    setQuestions(generateQuestions(mode));
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setIsFinished(false);
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-bg to-black">
        <p className="text-white/60">Loading...</p>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const scorePercent = Math.round((score / questions.length) * 100);
  const labels = ["A", "B", "C", "D"];

  // Results screen
  if (isFinished) {
    const message =
      scorePercent >= 90
        ? "Excellent! Ma sha Allah!"
        : scorePercent >= 70
        ? "Great job! Keep learning!"
        : scorePercent >= 50
        ? "Good effort! Review and try again."
        : "Keep studying, you'll improve!";

    return (
      <div className="min-h-screen relative">
        <div className="fixed inset-0 bg-gradient-to-b from-dark-bg to-black" />
        <div className="relative z-10 max-w-lg mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-screen">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center"
          >
            <Trophy size={48} className="mx-auto mb-4" style={{ color: "var(--article-accent)" }} />
            <h1 className="text-3xl font-bold mb-2" style={{ color: "var(--article-accent)" }}>
              {scorePercent}%
            </h1>
            <p className="text-white/70 mb-2">
              {score} / {questions.length} correct
            </p>
            <p className="text-white/50 text-sm mb-8 font-serif">{message}</p>

            <div className="flex gap-4 justify-center">
              <button onClick={restart} className="btn-gold text-sm">
                Try Again
              </button>
              <button
                onClick={() => router.push("/quiz")}
                className="px-6 py-2 rounded-full text-sm text-white/70 transition-all"
                style={{
                  background: "var(--article-interactive-bg)",
                  border: "1px solid var(--article-interactive-border)",
                }}
              >
                Back to Quiz
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-gradient-to-b from-dark-bg to-black" />

      <div className="relative z-10 max-w-lg mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => router.push("/quiz")}
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "var(--article-interactive-bg-hover)" }}
          >
            <ArrowLeft size={20} className="text-white/70" />
          </button>
          <div className="flex items-center gap-3">
            <span className="text-sm text-white/50">
              {currentIndex + 1}/{questions.length}
            </span>
            {streak > 1 && (
              <span className="flex items-center gap-1 text-sm text-orange-400">
                <Flame size={14} /> {streak}
              </span>
            )}
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1 rounded-full mb-8 overflow-hidden" style={{ background: "var(--article-interactive-bg-hover)" }}>
          <motion.div
            className="h-full rounded-full"
            style={{ background: "var(--article-accent)" }}
            animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Prompt */}
            <p className="text-center text-white/80 mb-8 font-serif">
              {currentQuestion.prompt}
            </p>

            {/* Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedAnswer === idx;
                const isCorrect = idx === currentQuestion.correctIndex;
                const showCorrect = showFeedback && isCorrect;
                const showWrong = showFeedback && isSelected && !isCorrect;

                return (
                  <button
                    key={idx}
                    onClick={() => selectAnswer(idx)}
                    disabled={showFeedback}
                    className="w-full flex items-center gap-3 p-4 rounded-xl text-left transition-all"
                    style={{
                      background: showCorrect
                        ? "rgba(34,197,94,0.15)"
                        : showWrong
                        ? "rgba(239,68,68,0.15)"
                        : "var(--article-interactive-bg)",
                      border: showCorrect
                        ? "1px solid rgba(34,197,94,0.4)"
                        : showWrong
                        ? "1px solid rgba(239,68,68,0.4)"
                        : "1px solid var(--article-interactive-border)",
                    }}
                  >
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold shrink-0"
                      style={{
                        background: showCorrect
                          ? "rgba(34,197,94,0.3)"
                          : showWrong
                          ? "rgba(239,68,68,0.3)"
                          : "var(--article-interactive-bg-hover)",
                        color: showCorrect
                          ? "rgb(34,197,94)"
                          : showWrong
                          ? "rgb(239,68,68)"
                          : "var(--article-text-inline)",
                      }}
                    >
                      {labels[idx]}
                    </span>
                    <span className="text-sm text-white/80">{option}</span>
                    {showCorrect && <CheckCircle size={18} className="ml-auto text-green-400" />}
                    {showWrong && <XCircle size={18} className="ml-auto text-red-400" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Feedback */}
        <AnimatePresence>
          {showFeedback && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-6"
            >
              <div
                className="glass rounded-xl p-4 mb-4"
                style={{ border: "1px solid var(--article-divider)" }}
              >
                <p className="text-sm text-white/60 font-serif">
                  {currentQuestion.explanation}
                </p>
              </div>
              <button onClick={nextQuestion} className="w-full btn-gold text-sm">
                {currentIndex >= questions.length - 1 ? "See Results" : "Next Question"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function QuizPlayPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-bg to-black">
          <p className="text-white/60">Loading...</p>
        </div>
      }
    >
      <QuizGame />
    </Suspense>
  );
}
