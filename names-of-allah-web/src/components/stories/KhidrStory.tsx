"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Musa (AS), the great Prophet,\nset out on a journey\nto seek someone with\ngreater knowledge.\n\nA lesson in humility awaited him.",
    icon: "Map",
  },
  {
    text: "He met Al-Khidr,\na servant of Allah\nwho was granted special knowledge.\n\nMusa asked to accompany him\nand learn.",
    icon: "Users",
  },
  {
    text: "Al-Khidr agreed, but warned:\n\n\"You will not be able to bear\nwhat you see.\n\nDo not question me\nuntil I explain it to you.\"",
    icon: "AlertTriangle",
  },
  {
    text: "They boarded a boat.\n\nSuddenly, Al-Khidr\ndamaged it deliberately!\n\nMusa was shocked:\n\"You'll drown innocent people!\"",
    icon: "AlertTriangle",
  },
  {
    text: "They met a young boy.\n\nAl-Khidr took his life.\n\nMusa was horrified:\n\"How could you kill\nan innocent soul?\"",
    icon: "Heart",
  },
  {
    text: "In a village of unwelcoming people,\nthey found a crumbling wall.\n\nAl-Khidr rebuilt it for free.\n\nMusa objected:\n\"They offered us nothing!\nAt least take payment!\"",
    icon: "HelpCircle",
  },
  {
    text: "The boat belonged to poor fishermen.\n\nA tyrant king was seizing\nevery perfect boat.\n\nThe damage saved them\u2014\nhe passed it by.",
    icon: "Shield",
  },
  {
    text: "The boy would have grown\nto cause his righteous parents\ngreat grief and disbelief.\n\nAllah will replace him\nwith a better, purer child.",
    icon: "Star",
  },
  {
    text: "Beneath the wall\nlay a treasure\nfor two orphan boys.\n\nTheir father was righteous.\nAllah protected their inheritance\nuntil they grow strong.",
    icon: "Gift",
  },
  {
    text: "\"I did none of this\nby my own command.\n\nThis is the wisdom behind\nwhat you could not bear.\"\n\nWhat seemed wrong\nwas Divine protection.",
    icon: "Lightbulb",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "\u0625\u0650\u0646\u0651\u064e\u0643\u064e \u0623\u064e\u0646\u062a\u064e \u0671\u0644\u0652\u0639\u064e\u0632\u0650\u064a\u0632\u064f \u0671\u0644\u0652\u062d\u064e\u0643\u0650\u064a\u0645\u064f",
  ayahReference: "Surah Al-Baqarah 2:129",
  translation: "\"Indeed, You are\nthe Exalted in Might,\nthe Wise (Al-Hakim)\"",
  nameArabic: "\u0671\u0644\u0652\u062d\u064e\u0643\u0650\u064a\u0645\u064f",
  nameTransliteration: "Al-Hakim",
  nameSubtitle: "The Most Wise \u2022 The Perfectly Wise",
  explanationPoints: [
    { icon: "Eye", text: "What looks like tragedy may be hidden mercy" },
    { icon: "Puzzle", text: "We see one piece; Allah sees the entire picture" },
    { icon: "Move", text: "His wisdom operates in dimensions beyond our grasp" },
    { icon: "CheckCircle", text: "Every decree has perfect wisdom, even if hidden from us" },
  ],
  closingText: "Trust Al-Hakim completely.\nHis wisdom is absolute and perfect.\n\nWhat you don't understand now\nmay be the greatest blessing in disguise.\n\nHe knows. You don't.",
  audioFileName: "al-baqarah-2-129",
};

export function KhidrStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#04141f", "#0d1a2e", "#060f19"]}
    />
  );
}
