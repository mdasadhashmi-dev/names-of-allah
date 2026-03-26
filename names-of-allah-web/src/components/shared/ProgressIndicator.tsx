"use client";

import { motion } from "framer-motion";

interface ProgressIndicatorProps {
  current: number;
  total: number;
}

export function ProgressIndicator({ current, total }: ProgressIndicatorProps) {
  return (
    <div className="fixed top-16 lg:top-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-50">
      {Array.from({ length: total }).map((_, i) => (
        <motion.div
          key={i}
          className="h-1 rounded-full bg-gold"
          animate={{
            width: i === current ? 24 : 8,
            opacity: i <= current ? 1 : 0.3,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />
      ))}
    </div>
  );
}
