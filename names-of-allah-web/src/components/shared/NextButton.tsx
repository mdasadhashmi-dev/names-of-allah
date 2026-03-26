"use client";

import { ChevronRight } from "lucide-react";

interface NextButtonProps {
  onClick: () => void;
  label?: string;
}

export function NextButton({ onClick, label = "Next" }: NextButtonProps) {
  return (
    <button
      onClick={onClick}
      className="btn-gold flex items-center gap-2 text-lg font-semibold"
    >
      {label}
      <ChevronRight size={20} />
    </button>
  );
}
