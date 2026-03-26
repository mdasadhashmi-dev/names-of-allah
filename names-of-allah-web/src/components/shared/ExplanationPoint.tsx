"use client";

import * as LucideIcons from "lucide-react";

interface ExplanationPointProps {
  icon: string;
  text: string;
}

export function ExplanationPoint({ icon, text }: ExplanationPointProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (LucideIcons as any)[icon] || LucideIcons.Star;

  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
        <IconComponent size={20} className="text-gold" />
      </div>
      <p className="text-white/80 font-serif text-base leading-relaxed">
        {text}
      </p>
    </div>
  );
}
