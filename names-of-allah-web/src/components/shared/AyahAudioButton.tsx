"use client";

import { Play, Pause } from "lucide-react";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";

interface AyahAudioButtonProps {
  audioFileName: string;
}

export function AyahAudioButton({ audioFileName }: AyahAudioButtonProps) {
  const { isPlaying, currentFile, toggle } = useAudioPlayer();
  const isThisPlaying = isPlaying && currentFile === audioFileName;

  return (
    <button
      onClick={() => toggle(audioFileName)}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 hover:bg-gold/30 transition-colors border border-gold/30"
    >
      {isThisPlaying ? (
        <>
          <Pause size={16} className="text-gold" />
          <span className="text-gold text-sm">Pause Ayah</span>
        </>
      ) : (
        <>
          <Play size={16} className="text-gold" />
          <span className="text-gold text-sm">Listen to Ayah</span>
        </>
      )}
    </button>
  );
}
