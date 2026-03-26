"use client";

import * as LucideIcons from "lucide-react";

interface StoryTextBoxProps {
  text: string;
  icon: string;
}

export function StoryTextBox({ text, icon }: StoryTextBoxProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (LucideIcons as any)[icon] || LucideIcons.Sparkles;

  return (
    <div className="glass rounded-2xl px-8 py-7 max-w-lg mx-auto text-center">
      <div className="flex justify-center mb-4">
        <IconComponent size={28} className="text-gold" />
      </div>
      <p className="text-white/90 font-serif text-lg leading-relaxed">
        {text}
      </p>
    </div>
  );
}
