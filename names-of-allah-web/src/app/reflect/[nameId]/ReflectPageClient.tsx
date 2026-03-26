"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Save, CheckCircle, BookOpen } from "lucide-react";
import { getNameById } from "@/data/names";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function ReflectPageClient({ nameId }: { nameId: string }) {
  const router = useRouter();
  const name = getNameById(nameId);
  const [text, setText] = useLocalStorage(`reflection_${nameId}`, "");
  const [showSaved, setShowSaved] = useState(false);
  const [localText, setLocalText] = useState("");

  useEffect(() => {
    setLocalText(text);
  }, [text]);

  if (!name) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-bg to-black">
        <p className="text-white/60">Name not found</p>
      </div>
    );
  }

  const handleSave = () => {
    setText(localText);
    setShowSaved(true);
    setTimeout(() => setShowSaved(false), 3000);
  };

  const wordCount = localText.trim() ? localText.trim().split(/\s+/).length : 0;

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-gradient-to-b from-[#0a1030] via-[#0d142e] to-black" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 lg:px-8 py-10 lg:py-14">
        {/* Name header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 lg:mb-10"
        >
          <h1
            className="arabic-text text-5xl lg:text-6xl font-bold mb-2"
            style={{ color: "rgb(217, 191, 140)" }}
          >
            {name.arabic}
          </h1>
          <p className="text-xl font-serif mb-1" style={{ color: "rgb(217,191,140)" }}>
            {name.transliteration}
          </p>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            {name.meaning}
          </p>
        </motion.div>

        {/* Divider */}
        <div
          className="w-20 h-px mx-auto mb-8 lg:mb-10"
          style={{
            background: "linear-gradient(to right, transparent, rgb(217,191,140), transparent)",
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Reflection prompt */}
          {name.reflectionQuestion && (
            <p
              className="font-serif text-lg lg:text-xl italic text-center mb-8 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              &ldquo;{name.reflectionQuestion}&rdquo;
            </p>
          )}

          {/* Text editor */}
          <div className="relative">
            <textarea
              value={localText}
              onChange={(e) => setLocalText(e.target.value)}
              placeholder="Write your reflection here... What does this name mean to you? How have you seen it in your life?"
              className="w-full min-h-[220px] lg:min-h-[300px] p-5 rounded-2xl resize-y outline-none text-white placeholder-white/25 font-serif text-base lg:text-lg leading-relaxed"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
            {/* Word count */}
            {wordCount > 0 && (
              <div className="absolute bottom-3 right-4 text-xs text-white/25">
                {wordCount} word{wordCount !== 1 ? "s" : ""}
              </div>
            )}
          </div>

          {/* Save button */}
          <div className="flex items-center justify-between mt-4">
            <div>
              {showSaved && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-green-400 text-sm">Saved</span>
                </motion.div>
              )}
            </div>
            <button
              onClick={handleSave}
              disabled={!localText.trim()}
              className="btn-gold flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <Save size={16} />
              Save Reflection
            </button>
          </div>
        </motion.div>

        {/* Divider */}
        <div
          className="w-20 h-px mx-auto my-8 lg:my-10"
          style={{
            background: "linear-gradient(to right, transparent, rgb(217,191,140), transparent)",
          }}
        />

        {/* Extended learning link */}
        <button
          onClick={() => router.push(`/learn/${nameId}`)}
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl transition-colors"
          style={{
            background: "rgba(102,153,230,0.08)",
            border: "1px solid rgba(102,153,230,0.18)",
          }}
        >
          <BookOpen size={18} style={{ color: "rgb(102,153,230)" }} />
          <span style={{ color: "rgb(102,153,230)" }}>Dive Deeper into Scholarly Content</span>
        </button>
      </div>
    </div>
  );
}
