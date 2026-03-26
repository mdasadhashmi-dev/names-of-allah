"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Sparkles, BookOpen, Heart, HandHeart, HelpCircle, ArrowRight } from "lucide-react";
import { useSemanticColors } from "@/hooks/useSemanticColors";
import { getNameOfDay } from "@/lib/nameOfDay";

export default function WelcomePage() {
  const router = useRouter();
  const [showContent, setShowContent] = useState(false);
  const { isPro, styles } = useSemanticColors();
  const nameOfDay = getNameOfDay();

  useEffect(() => {
    setShowContent(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.3 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" as const },
    },
  };

  if (isPro) {
    return (
      <div className="min-h-screen" style={{ background: "var(--pro-bg)" }}>
        {/* Hero Section */}
        <div
          className="text-center py-16 lg:py-24 px-6"
          style={{ background: "var(--pro-hero-bg)" }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl mx-auto"
          >
            <motion.h1
              variants={itemVariants}
              className="arabic-text text-4xl md:text-6xl font-bold mb-4"
              style={{ color: "#C8A951" }}
            >
              أسماء الله الحسنى
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl font-serif mb-4"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              The 99 Beautiful Names of Allah
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="w-20 h-px mx-auto mb-6"
              style={{ background: "linear-gradient(to right, transparent, #C8A951, transparent)" }}
            />
            <motion.p
              variants={itemVariants}
              className="text-sm font-serif italic max-w-md mx-auto mb-8"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              &ldquo;Allah has ninety-nine names, one hundred minus one. Whoever
              counts them will enter Paradise.&rdquo;
              <span className="block mt-2 not-italic" style={{ color: "rgba(255,255,255,0.35)" }}>
                — Sahih al-Bukhari 7392
              </span>
            </motion.p>
            <motion.button
              variants={itemVariants}
              onClick={() => router.push("/names")}
              className="btn-gold text-base px-8 py-3"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore the Names
            </motion.button>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="pro-container py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: BookOpen, title: "Browse Names", desc: "Explore all 99 names with meanings and Arabic", href: "/names" },
              { icon: Heart, title: "Feeling Advisor", desc: "Find comfort in His names based on how you feel", href: "/advisor" },
              { icon: HandHeart, title: "Dua Builder", desc: "Personalised supplications from Quran & Sunnah", href: "/dua" },
              { icon: HelpCircle, title: "Quiz", desc: "Test your knowledge of Allah's beautiful names", href: "/quiz" },
            ].map((feature) => {
              const Icon = feature.icon;
              return (
                <button
                  key={feature.href}
                  onClick={() => router.push(feature.href)}
                  className="pro-card text-left group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: "var(--pro-accent-light)" }}
                  >
                    <Icon size={20} style={{ color: "var(--pro-accent)" }} />
                  </div>
                  <h3
                    className="text-sm font-semibold mb-1"
                    style={{ color: "var(--pro-text)" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-xs" style={{ color: "var(--pro-text-muted)" }}>
                    {feature.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Name of the Day Card */}
          <div
            className="mt-10 pro-card flex flex-col sm:flex-row items-center gap-6 cursor-pointer"
            onClick={() => router.push(`/story/${nameOfDay.nameId}`)}
          >
            <div className="text-center sm:text-left flex-shrink-0">
              <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--pro-accent)" }}>
                Name of the Day
              </p>
              <p className="arabic-text text-3xl font-bold" style={{ color: "var(--pro-gold)" }}>
                {nameOfDay.arabic}
              </p>
            </div>
            <div className="flex-1">
              <p className="text-lg font-semibold" style={{ color: "var(--pro-text)" }}>
                {nameOfDay.transliteration}
              </p>
              <p className="text-sm" style={{ color: "var(--pro-text-muted)" }}>
                {nameOfDay.meaning}
              </p>
            </div>
            <ArrowRight size={20} style={{ color: "var(--pro-accent)" }} />
          </div>
        </div>
      </div>
    );
  }

  // Cinematic (original) layout
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#030510] via-[#0a1028] to-black" />

      {/* Ambient light orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute w-64 h-64 rounded-full blur-3xl"
          style={{ top: "10%", left: "20%", background: "rgba(217,191,140,0.05)" }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full blur-3xl"
          style={{ top: "50%", right: "15%", background: "rgba(217,191,140,0.05)" }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute w-56 h-56 rounded-full blur-3xl"
          style={{ bottom: "20%", left: "10%", background: "rgba(217,191,140,0.03)" }}
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={showContent ? "visible" : "hidden"}
          className="flex flex-col items-center text-center max-w-md mx-auto"
        >
          {/* Logo section */}
          <motion.div variants={itemVariants} className="relative mb-10">
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-28 h-28 rounded-full flex items-center justify-center"
              style={{ border: "2px solid rgba(217,191,140,0.4)" }}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ border: "1px solid rgba(217,191,140,0.3)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ border: "1px solid rgba(217,191,140,0.2)" }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles size={24} className="text-gold" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="arabic-text text-4xl md:text-5xl font-bold mb-3"
            style={{
              color: "rgb(217, 191, 140)",
              textShadow: "0 0 20px rgba(217, 191, 140, 0.3)",
            }}
          >
            أسماء الله الحسنى
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl font-serif mb-2"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            The 99 Beautiful Names
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="w-16 h-px mb-8"
            style={{
              background: "linear-gradient(to right, transparent, rgb(217,191,140), transparent)",
            }}
          />

          {/* Hadith card */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-6 mb-8 max-w-sm"
          >
            <p className="font-serif text-base leading-relaxed italic" style={{ color: "rgba(255,255,255,0.8)" }}>
              &ldquo;Allah has ninety-nine names, one hundred minus one. Whoever
              counts them will enter Paradise.&rdquo;
            </p>
            <p className="text-sm mt-3 font-serif" style={{ color: "rgba(217,191,140,0.6)" }}>
              — Sahih al-Bukhari 7392
            </p>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm mb-8 max-w-xs"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            A journey through the divine names — through stories, reflection,
            and understanding.
          </motion.p>

          {/* Begin button */}
          <motion.button
            variants={itemVariants}
            onClick={() => router.push("/names")}
            className="btn-gold text-lg px-10 py-3"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Begin Your Journey
          </motion.button>

          {/* Footer */}
          <motion.p
            variants={itemVariants}
            className="text-xs mt-12"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            Names of Allah
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
