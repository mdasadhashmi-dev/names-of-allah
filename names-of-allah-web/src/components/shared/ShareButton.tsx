"use client";

import { useState, useEffect } from "react";
import { Share2, Check, Copy } from "lucide-react";

interface ShareButtonProps {
  title: string;
  text: string;
  url: string;
}

export function ShareButton({ title, text, url }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    setCanShare(typeof navigator !== "undefined" && !!navigator.share);
  }, []);

  const handleShare = async () => {
    if (canShare) {
      try {
        await navigator.share({ title, text, url });
      } catch {
        // User cancelled or share failed — ignore
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // Clipboard failed — ignore
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-all hover:scale-105"
      style={{
        background: "var(--article-badge-bg)",
        border: "1px solid var(--article-badge-border)",
        color: "var(--article-accent)",
      }}
    >
      {copied ? (
        <>
          <Check size={12} />
          Copied!
        </>
      ) : canShare ? (
        <>
          <Share2 size={12} />
          Share
        </>
      ) : (
        <>
          <Copy size={12} />
          Copy Link
        </>
      )}
    </button>
  );
}
