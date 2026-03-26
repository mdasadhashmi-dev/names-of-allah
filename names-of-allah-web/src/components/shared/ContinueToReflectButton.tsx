"use client";

import { useRouter } from "next/navigation";
import { BookOpen } from "lucide-react";

interface ContinueToReflectButtonProps {
  nameId: string;
}

export function ContinueToReflectButton({ nameId }: ContinueToReflectButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/reflect/${nameId}`)}
      className="btn-gold flex items-center gap-2 text-lg"
    >
      <BookOpen size={20} />
      Continue to Reflect
    </button>
  );
}
