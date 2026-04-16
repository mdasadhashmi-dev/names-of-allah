"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FeelingsReel } from "@/components/reels/FeelingsReel";
import { NameRevealReel } from "@/components/reels/NameRevealReel";
import { MinimalistNameReel } from "@/components/reels/MinimalistNameReel";

const GOLD = "rgba(217, 191, 140,";
const WHITE = "rgba(255, 255, 255,";

// Total durations in ms (sum of all screen durations + small buffer)
const REEL_DURATIONS = {
  feelings:   3200 + 3200 + 3200 + 7800 + 5500 + 4200 + 4200 + 1200, // ~33s
  name:       2800 + 4500 + 4200 + 5800 + 3400 + 4200 + 4200 + 1200, // ~30s
  minimalist: 2500 + 3800 + 4200 + 3500 + 6000 + 3800 + 4500 + 4200 + 5500 + 4000 + 1200, // ~43s
};

const tips = [
  { step: "1", text: "Open this page on your phone" },
  { step: "2", text: "Start screen recording (Control Centre on iOS)" },
  { step: "3", text: "Tap a reel to play — it auto-advances" },
  { step: "4", text: "Stop recording when it ends" },
  { step: "5", text: "Crop to the reel area and post to Instagram / TikTok" },
];

type ReelId = "feelings" | "name" | "minimalist";

export default function ReelGalleryPage() {
  // Each reel gets a key so we can force-remount to restart it
  const [reelKeys, setReelKeys] = useState({ feelings: 0, name: 0, minimalist: 0 });
  const [recording, setRecording] = useState<ReelId | null>(null);
  const [downloading, setDownloading] = useState(false);

  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const stopRecording = useCallback(() => {
    if (recorderRef.current && recorderRef.current.state !== "inactive") {
      recorderRef.current.stop();
    }
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
  }, []);

  const handleReelComplete = useCallback(() => {
    // Wait a beat so the last screen is visible in the recording
    setTimeout(stopRecording, 900);
  }, [stopRecording]);

  const handleDownload = useCallback(async (reelId: ReelId) => {
    // Request tab/screen capture
    let stream: MediaStream;
    try {
      stream = await (navigator.mediaDevices as MediaDevices & {
        getDisplayMedia(opts?: object): Promise<MediaStream>;
      }).getDisplayMedia({
        video: { frameRate: { ideal: 60 } },
        audio: false,
        // Chrome 107+: auto-selects current tab without picker
        // @ts-ignore
        preferCurrentTab: true,
        selfBrowserSurface: "include",
      });
    } catch {
      return; // user cancelled or not supported
    }

    streamRef.current = stream;

    const mimeType =
      [
        "video/mp4;codecs=avc1,mp4a.40.2",
        "video/mp4;codecs=avc1",
        "video/mp4",
        "video/webm;codecs=vp9",
        "video/webm",
      ].find((t) => MediaRecorder.isTypeSupported(t)) ?? "video/webm";

    const recorder = new MediaRecorder(stream, { mimeType });
    recorderRef.current = recorder;

    const chunks: Blob[] = [];
    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunks.push(e.data);
    };
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: mimeType });
      const ext = mimeType.includes("mp4") ? "mp4" : "webm";
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `names-of-allah-${reelId}-reel.${ext}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setRecording(null);
      setDownloading(false);
    };

    // Handle if user stops sharing manually
    stream.getVideoTracks()[0].onended = () => {
      if (recorder.state !== "inactive") recorder.stop();
      setRecording(null);
      setDownloading(false);
    };

    recorder.start(250);
    setDownloading(true);

    // Force-remount the reel so it restarts from screen 0 with autoStart=true
    setReelKeys((k) => ({ ...k, [reelId]: k[reelId] + 1 }));
    setRecording(reelId);
  }, []);

  return (
    <>
      {/* ── Fullscreen recording overlay ─────────────────────────────────── */}
      <AnimatePresence>
        {recording && (
          <motion.div
            key="recording-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              background: "#000",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            {/* Red recording badge */}
            <div style={{
              position: "absolute",
              top: "1.25rem",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(220,50,50,0.15)",
              border: "1px solid rgba(220,50,50,0.35)",
              borderRadius: 100,
              padding: "0.3rem 0.85rem",
            }}>
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                style={{ width: 7, height: 7, borderRadius: "50%", background: "#e04040" }}
              />
              <span style={{ color: "rgba(255,100,100,0.9)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Recording
              </span>
            </div>

            {/* The reel, sized to fill height at 9:16 */}
            <div style={{ height: "100svh", width: "calc(100svh * 9 / 16)", maxWidth: "100vw" }}>
              {recording === "feelings" ? (
                <FeelingsReel
                  key={reelKeys.feelings}
                  autoStart
                  onComplete={handleReelComplete}
                />
              ) : recording === "minimalist" ? (
                <MinimalistNameReel
                  key={reelKeys.minimalist}
                  autoStart
                  onComplete={handleReelComplete}
                />
              ) : (
                <NameRevealReel
                  key={reelKeys.name}
                  autoStart
                  onComplete={handleReelComplete}
                />
              )}
            </div>

            {/* Cancel button */}
            <button
              onClick={stopRecording}
              style={{
                position: "absolute",
                bottom: "1.5rem",
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.4)",
                padding: "0.4rem 1rem",
                borderRadius: 100,
                fontSize: "0.68rem",
                letterSpacing: "0.1em",
                cursor: "pointer",
              }}
            >
              Cancel recording
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Gallery page ─────────────────────────────────────────────────── */}
      <div style={{ minHeight: "100vh", background: "#06080c", padding: "2rem 1rem 4rem" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: 940, margin: "0 auto 2.5rem" }}
        >
          <p style={{
            color: `${GOLD}0.5)`,
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "0.4rem",
          }}>
            Instagram · TikTok · YouTube Shorts
          </p>
          <h1 style={{
            color: `${WHITE}0.9)`,
            fontSize: "clamp(1.4rem, 4vw, 2rem)",
            fontWeight: 700,
            margin: "0 0 0.4rem",
          }}>
            Reel Templates
          </h1>
          <p style={{ color: `${WHITE}0.38)`, fontSize: "0.82rem", margin: 0 }}>
            Tap to preview · Click <strong style={{ color: `${GOLD}0.65)` }}>Download Reel</strong> to capture as a 9:16 video
          </p>
        </motion.div>

        {/* Reels grid */}
        <div style={{
          maxWidth: 940,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2.5rem",
        }}>
          <ReelCard
            number="01"
            label="Feeling Advisor"
            title="&quot;You&apos;re anxious. There is a Name for that.&quot;"
            duration="~26s"
            note="Emotional hook · High share rate"
            onDownload={() => handleDownload("feelings")}
            downloading={downloading && recording === "feelings"}
          >
            <FeelingsReel key={reelKeys.feelings} />
          </ReelCard>

          <ReelCard
            number="02"
            label="Cinematic Name Reveal"
            title="Al-Kareem — Quranic verse to name reveal"
            duration="~29s"
            note="Visually cinematic · Spiritual content"
            onDownload={() => handleDownload("name")}
            downloading={downloading && recording === "name"}
          >
            <NameRevealReel key={reelKeys.name} />
          </ReelCard>

          <ReelCard
            number="03"
            label="Minimalist — Al-Wadud"
            title="&quot;You wonder if you are truly loved.&quot;"
            duration="~42s"
            note="Pure text · High save rate · Contemplative"
            onDownload={() => handleDownload("minimalist")}
            downloading={downloading && recording === "minimalist"}
          >
            <MinimalistNameReel key={reelKeys.minimalist} />
          </ReelCard>
        </div>

        {/* Tips + hashtags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          style={{
            maxWidth: 940,
            margin: "3rem auto 0",
            background: `${GOLD}0.05)`,
            border: `1px solid ${GOLD}0.1)`,
            borderRadius: 14,
            padding: "1.5rem",
          }}
        >
          <p style={{
            color: `${GOLD}0.65)`,
            fontSize: "0.62rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: "1rem",
            fontWeight: 600,
          }}>
            Manual recording (alternative)
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            {tips.map((tip) => (
              <div key={tip.step} style={{ display: "flex", alignItems: "flex-start", gap: "0.85rem" }}>
                <span style={{
                  color: `${GOLD}0.5)`,
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  minWidth: 16,
                  paddingTop: "0.05rem",
                }}>
                  {tip.step}
                </span>
                <span style={{ color: `${WHITE}0.5)`, fontSize: "0.8rem", lineHeight: 1.5 }}>
                  {tip.text}
                </span>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: "1.25rem",
            paddingTop: "1.25rem",
            borderTop: `1px solid ${GOLD}0.08)`,
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}>
            {["#namesofallah", "#asmaullahulhusna", "#islamicreminder", "#99names", "#quran", "#islamicreels"].map((tag) => (
              <span key={tag} style={{
                background: `${GOLD}0.07)`,
                border: `1px solid ${GOLD}0.12)`,
                color: `${GOLD}0.6)`,
                padding: "0.25rem 0.65rem",
                borderRadius: 100,
                fontSize: "0.68rem",
                letterSpacing: "0.04em",
              }}>
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}

// ── ReelCard sub-component ────────────────────────────────────────────────────
function ReelCard({
  number, label, title, duration, note,
  children, onDownload, downloading,
}: {
  number: string;
  label: string;
  title: string;
  duration: string;
  note: string;
  children: React.ReactNode;
  onDownload: () => void;
  downloading: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.6 }}
    >
      <div style={{ marginBottom: "0.9rem" }}>
        <span style={{
          color: `${GOLD}0.45)`,
          fontSize: "0.6rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontWeight: 600,
        }}>
          {number} · {label}
        </span>
        <h2 style={{
          color: `${WHITE}0.82)`,
          fontSize: "clamp(0.9rem, 3vw, 1.1rem)",
          fontWeight: 600,
          margin: "0.3rem 0 0.2rem",
        }}>
          {title}
        </h2>
        <p style={{ color: `${WHITE}0.3)`, fontSize: "0.72rem", margin: 0 }}>
          {duration} · {note}
        </p>
      </div>

      {children}

      {/* Download button */}
      <button
        onClick={onDownload}
        disabled={downloading}
        style={{
          marginTop: "0.85rem",
          width: "100%",
          padding: "0.65rem",
          background: downloading ? `${GOLD}0.08)` : `${GOLD}0.13)`,
          border: `1px solid ${GOLD}${downloading ? "0.15)" : "0.3)"}`,
          color: downloading ? `${GOLD}0.4)` : `${GOLD}0.85)`,
          borderRadius: 10,
          fontSize: "0.78rem",
          letterSpacing: "0.06em",
          fontWeight: 600,
          cursor: downloading ? "not-allowed" : "pointer",
          transition: "all 0.2s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
        }}
      >
        {downloading ? (
          <>
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              style={{ display: "inline-block" }}
            >
              ◌
            </motion.span>
            Recording…
          </>
        ) : (
          "↓ Download Reel · MP4 / 9:16"
        )}
      </button>
    </motion.div>
  );
}
