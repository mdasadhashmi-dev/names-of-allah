"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Before anything existed,\nAllah created the heavens and the earth.\n\nHis mercy was woven\ninto every thread of creation.",
    icon: "Sparkles",
  },
  {
    text: "The sun rises each day\u2014\nfor the believer and the non-believer.\n\nIts warmth and light\nare gifts to all.",
    icon: "Sun",
  },
  {
    text: "Rain falls on barren lands\nand fertile fields alike.\n\nIt doesn't ask:\n\"Are you grateful?\"\n\nIt simply gives.",
    icon: "CloudRain",
  },
  {
    text: "Food grows from the earth\u2014\nfor those who thank Him,\nand those who don't.\n\nHis provision continues.",
    icon: "Leaf",
  },
  {
    text: "Every creature\u2014\nfrom the tiniest ant\nto the largest whale\u2014\n\nreceives His care and sustenance.",
    icon: "Heart",
  },
  {
    text: "His mercy extends to everyone\u2014\nMuslim and non-Muslim,\nrich and poor,\nyoung and old.\n\nNo one is excluded.",
    icon: "Heart",
  },
  {
    text: "Every breath you take\u2014\na gift of Ar-Rahman.\n\nEvery heartbeat\u2014\nHis mercy keeping you alive.",
    icon: "Heart",
  },
  {
    text: "This is Ar-Rahman\u2014\n\nMercy that flows freely\nto all of creation,\nexpecting nothing in return.\n\nHow much more for those\nwho turn to Him?",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "\u0671\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0640\u0670\u0646\u064f \u0639\u064e\u0644\u0651\u064e\u0645\u064e \u0671\u0644\u0652\u0642\u064f\u0631\u0652\u0621\u064e\u0627\u0646\u064e",
  ayahReference: "Surah Ar-Rahman 55:1-2",
  translation: "\"The Most Merciful\nTaught the Quran\"",
  nameArabic: "\u0671\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0640\u0670\u0646\u064f",
  nameTransliteration: "Ar-Rahman",
  nameSubtitle: "The Most Merciful \u2022 The Beneficent",
  explanationPoints: [
    { icon: "Sun", text: "Mercy to all\u2014believer and non-believer alike" },
    { icon: "Droplets", text: "Every blessing, every breath is His mercy" },
    { icon: "Globe", text: "Universal mercy that sustains all of creation" },
    { icon: "Heart", text: "The mercy you receive without even asking" },
  ],
  closingText: "Ar-Rahman is the mercy\nthat encompasses everything.\n\nIt flows without condition,\nreaches without discrimination,\nand never runs out.",
  audioFileName: "ar-rahman-55-1",
};

export function ArRahmanStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#261433", "#331a3d", "#1f0f26"]}
    />
  );
}
