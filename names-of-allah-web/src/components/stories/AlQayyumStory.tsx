"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Right now,\nyour heart is beating.\n\nYou did not command it.\nYou cannot stop it.\nYou don't even think about it.\n\nWho sustains it?",
    icon: "Heart",
  },
  {
    text: "The earth spins\nat 1,000 miles per hour.\nIt orbits the sun\nat 67,000 miles per hour.\n\nYou feel nothing.\n\nWho holds it in place?",
    icon: "Globe",
  },
  {
    text: "Every cell in your body\nis performing millions\nof chemical reactions\nper second.\n\nYour lungs breathe.\nYour blood flows.\nYour neurons fire.\n\nAll without your input.",
    icon: "Zap",
  },
  {
    text: "\"Allah—there is no deity\nexcept Him,\nAl-Hayy, Al-Qayyum.\n\nNeither drowsiness\novertakes Him\nnor sleep.\"\n\nHe sustains everything.\nWithout rest.\nWithout pause.\nWithout end.",
    icon: "Infinity",
  },
  {
    text: "If He withdrew\nHis sustaining\nfor a single moment—\n\nthe sun would go dark.\nThe earth would collapse.\nYour heart would stop.\n\nEverything that exists\nexists because\nAl-Qayyum sustains it\nright now.",
    icon: "Sun",
  },
  {
    text: "He sustains the ant\nin its underground tunnel.\nThe fish in the deepest ocean.\nThe bird in mid-flight.\nThe baby in the womb.\n\nAll at once.\nAll the time.\nWithout effort.",
    icon: "Leaf",
  },
  {
    text: "\"To Him belongs\nwhatever is in the heavens\nand whatever is on the earth.\n\nWho can intercede with Him\nexcept by His permission?\"\n\nEverything depends on Him.\nHe depends on nothing.",
    icon: "Quote",
  },
  {
    text: "You worry about tomorrow.\nAbout provision.\nAbout health.\nAbout the future.\n\nThe One who sustains\nbillions of heartbeats\nper second\nacross billions of beings—\n\ncan sustain you too.",
    icon: "Shield",
  },
  {
    text: "Al-Qayyum.\n\nThe Self-Subsisting.\nThe Sustainer of all.\n\nWithout Him—nothing.\nWith Him—everything.\n\nRight now,\nHe is sustaining you.\nThis breath. This heartbeat.\nThis moment.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
  ayahReference: "Surah Al-Baqarah 2:255",
  translation: "\"Allah—there is no deity\nexcept Him,\nthe Ever-Living,\nthe Sustainer of existence\n(Al-Qayyum).\"",
  nameArabic: "ٱلْقَيُّومُ",
  nameTransliteration: "Al-Qayyum",
  nameSubtitle: "The Sustainer • The Self-Subsisting",
  explanationPoints: [
    { icon: "Heart", text: "Your heartbeat, your breath, your existence—sustained by Him every second" },
    { icon: "Globe", text: "The earth, sun, stars, galaxies—all held in place by Al-Qayyum" },
    { icon: "Infinity", text: "He never sleeps, never tires, never pauses—sustaining without end" },
    { icon: "Leaf", text: "Every ant, fish, bird, and human—sustained simultaneously without effort" },
  ],
  closingText: "Al-Qayyum sustains everything.\nYour heartbeat. The spinning earth.\nEvery creature alive.\n\nAll at once. Without rest.\n\nThe One who sustains the universe\ncan sustain you through anything.",
  audioFileName: "al-baqarah-2-255",
};

export function AlQayyumStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#05101a", "#0a1a2b", "#030a14"]}
    />
  );
}
