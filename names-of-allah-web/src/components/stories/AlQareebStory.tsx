"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "You don't need\nan appointment.\n\nYou don't need\nan intermediary.\n\nYou don't need\nto wait in line.\n\nHe is already near.",
    icon: "Heart",
  },
  {
    text: "\"And when My servants\nask you about Me\u2014\n\nindeed, I am near.\"\n\nNotice:\nHe did not say\n\"Tell them I am near.\"\n\nHe answered directly.\nAs if He could not wait.",
    icon: "Quote",
  },
  {
    text: "He is closer to you\nthan your jugular vein.\n\nCloser than the blood\nflowing through your neck.\n\nCloser than your own\nthoughts about yourself.",
    icon: "Sparkles",
  },
  {
    text: "The Prophet \uFE0E said\nto his companions\nwho were raising their voices\nin supplication:\n\n\"You are not calling upon\none who is deaf or absent.\"\n\nHe hears.\nHe is right here.",
    icon: "BookOpen",
  },
  {
    text: "At 2am\nwhen you cannot sleep.\n\nIn sujood\nwhen your forehead\ntouches the ground.\n\nIn the car\nwhen tears fall\nand no one sees.\n\nHe is there.",
    icon: "Moon",
  },
  {
    text: "You whispered a dua\nso quietly\nthat even you\ncould barely hear it.\n\nHe heard it.\n\nYou thought a prayer\nyou never spoke aloud.\n\nHe knew it.",
    icon: "Wind",
  },
  {
    text: "The entire universe\nseparates you from the stars.\n\nBut nothing\u2014\nnothing at all\u2014\nseparates you\nfrom your Lord.\n\nNo distance.\nNo barrier.\nNo delay.",
    icon: "Globe",
  },
  {
    text: "So call upon Him.\n\nIn your weakness.\nIn your shame.\nIn your longing.\n\nHe is Al-Qareeb.\nThe Near One.\n\nAnd He responds\nto the call of the caller\nwhen he calls.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ",
  ayahReference: "Surah Al-Baqarah 2:186",
  translation: "\"And when My servants ask you\nconcerning Me — indeed I am near.\nI respond to the invocation\nof the supplicant\nwhen he calls upon Me.\"",
  nameArabic: "القَرِيب",
  nameTransliteration: "Al-Qareeb",
  nameSubtitle: "The One Who is Near • The Close One",
  explanationPoints: [
    { icon: "Heart", text: "No intermediary, no appointment, no waiting — He is already closer than your jugular vein" },
    { icon: "Moon", text: "He hears the silent prayer, the whispered dua, and the cry that never left your lips" },
    { icon: "Zap", text: "The Prophet ﷺ said: 'You are not calling upon one who is deaf or absent' (Bukhari 4205)" },
    { icon: "Sparkles", text: "He responds to every caller — in every language, at every hour, in every state" },
  ],
  closingText: "Al-Qareeb is the nearness\nthat never fades.\n\nYou may feel far from Him,\nbut He was never far from you.\n\nCall upon Him.\nHe is listening.\nHe has always been listening.",
  audioFileName: "al-baqarah-2-186",
};

export function AlQareebStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#0c0810", "#16101a", "#08050c"]}
    />
  );
}
