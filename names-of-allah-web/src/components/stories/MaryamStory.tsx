"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Maryam, pure and devoted,\nwas raised in seclusion.\n\nHer life dedicated to worship,\nher heart connected to Allah.",
    icon: "Sparkles",
  },
  {
    text: "An angel appeared with news:\n\nShe would bear a blessed child\u2014\na sign for all humanity.\n\nA miracle beyond understanding.",
    icon: "Moon",
  },
  {
    text: "Zakariya (AS) would check on her\nin her private sanctuary.\n\nThe door was always locked.\nNo one could enter but him.",
    icon: "Lock",
  },
  {
    text: "Yet every time he entered,\nhe found fresh fruit beside her.\n\nSummer fruits in winter.\nWinter fruits in summer.",
    icon: "Leaf",
  },
  {
    text: "Astonished, Zakariya asked:\n\n\"O Maryam, where is this from?\"\n\nHow could this be?",
    icon: "HelpCircle",
  },
  {
    text: "With complete certainty she said:\n\n\"It is from Allah.\n\nIndeed, Allah provides\nfor whom He wills\nwithout account.\"",
    icon: "Sparkles",
  },
  {
    text: "Not once. Not twice.\nEvery single time.\n\nProvision from Allah,\nconstant and unexpected,\nin ways beyond imagination.",
    icon: "Infinity",
  },
  {
    text: "This inspired Zakariya himself\nto call upon Allah for a child\u2014\n\nseeing the limitless provision,\nhe knew nothing is impossible\nfor Ar-Razzaq.",
    icon: "Heart",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "\u0625\u0650\u0646\u0651\u064e \u0671\u0644\u0644\u0651\u064e\u0647\u064e \u0647\u064f\u0648\u064e \u0671\u0644\u0631\u0651\u064e\u0632\u0651\u064e\u0627\u0642\u064f \u0630\u064f\u0648 \u0671\u0644\u0652\u0642\u064f\u0648\u0651\u064e\u0629\u0650 \u0671\u0644\u0652\u0645\u064e\u062a\u0650\u064a\u0646\u064f",
  ayahReference: "Surah Adh-Dhariyat 51:58",
  translation: "\"Indeed, Allah is the Provider (Ar-Razzaq),\nthe Possessor of Strength,\nthe Firm\"",
  nameArabic: "\u0671\u0644\u0631\u0651\u064e\u0632\u0651\u064e\u0627\u0642\u064f",
  nameTransliteration: "Ar-Razzaq",
  nameSubtitle: "The Provider \u2022 The Sustainer",
  explanationPoints: [
    { icon: "Infinity", text: "Provision came without asking, beyond all logic" },
    { icon: "Leaf", text: "Sustenance appeared exactly when needed" },
    { icon: "Heart", text: "Faith in the Provider brings peace to the heart" },
    { icon: "Hand", text: "Allah provides in ways we never imagined" },
  ],
  closingText: "Your rizq (provision) is already written.\nIt will reach you no matter where you are.\n\nTrust Ar-Razzaq completely.\nHe provides without limits,\nwithout keeping count.",
  audioFileName: "adh-dhariyat-51-58",
};

export function MaryamStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#0d1f33", "#142640", "#0f192e"]}
    />
  );
}
