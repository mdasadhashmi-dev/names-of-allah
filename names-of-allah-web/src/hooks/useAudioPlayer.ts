"use client";

import { useState, useRef, useCallback } from "react";

export function useAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentFile, setCurrentFile] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = useCallback((fileName: string) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    const audio = new Audio(`/audio/${fileName}.mp3`);
    audioRef.current = audio;
    setCurrentFile(fileName);

    audio.play().then(() => {
      setIsPlaying(true);
    }).catch((error) => {
      console.warn("Audio playback failed:", error);
      setIsPlaying(false);
    });

    audio.onended = () => {
      setIsPlaying(false);
      setCurrentFile(null);
    };

    audio.onerror = () => {
      setIsPlaying(false);
      setCurrentFile(null);
    };
  }, []);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    setIsPlaying(false);
    setCurrentFile(null);
  }, []);

  const toggle = useCallback((fileName: string) => {
    if (isPlaying && currentFile === fileName) {
      stop();
    } else {
      play(fileName);
    }
  }, [isPlaying, currentFile, play, stop]);

  return { isPlaying, currentFile, play, stop, toggle };
}
