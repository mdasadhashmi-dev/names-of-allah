"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Adam \u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650 \u0671\u0644\u0633\u0651\u064e\u0644\u064e\u0627\u0645\u064f sinned.",
    icon: "AlertTriangle",
  },
  {
    text: "He disobeyed Allah.",
    icon: "XCircle",
  },
  {
    text: "He was expelled\nfrom Paradise.",
    icon: "ArrowDownCircle",
  },
  {
    text: "But then he repented.",
    icon: "Undo2",
  },
  {
    text: "And Ar-Raheem\u2014\nThe Most Compassionate\u2014",
    icon: "Heart",
  },
  {
    text: "Accepted his repentance.",
    icon: "CheckCircle",
  },
  {
    text: "Not because Adam\ndeserved it\u2014",
    icon: "Hand",
  },
  {
    text: "But because Ar-Raheem\nis infinitely compassionate.",
    icon: "Sparkles",
  },
  {
    text: "Ar-Raheem\u2014\n\ncompassion\nfor those who turn back.",
    icon: "Heart",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "\u0641\u064e\u062a\u064e\u0644\u064e\u0642\u0651\u064e\u0649\u0670\u0653 \u0621\u064e\u0627\u062f\u064e\u0645\u064f \u0645\u0650\u0646 \u0631\u0651\u064e\u0628\u0651\u0650\u0647\u0650\u06e6 \u0643\u064e\u0644\u0650\u0645\u064e\u0640\u0670\u062a\u06cd \u0641\u064e\u062a\u064e\u0627\u0628\u064e \u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650 \u06da \u0625\u0650\u0646\u0651\u064e\u0647\u064f\u06e5 \u0647\u064f\u0648\u064e \u0671\u0644\u062a\u0651\u064e\u0648\u0651\u064e\u0627\u0628\u064f \u0671\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u064f",
  ayahReference: "Surah Al-Baqarah 2:37",
  translation: "\"Then Adam received words from his Lord,\nand He accepted his repentance.\nIndeed, He is the Accepting of Repentance,\nthe Most Compassionate (Ar-Raheem)\"",
  nameArabic: "\u0671\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u064f",
  nameTransliteration: "Ar-Raheem",
  nameSubtitle: "The Most Compassionate \u2022 The Merciful to Believers",
  explanationPoints: [
    { icon: "Heart", text: "Ar-Raheem's compassion embraces those who turn back to Him." },
    { icon: "CheckCircle", text: "He accepted Adam's repentance\u2014not because Adam deserved it, but because He is infinitely compassionate." },
    { icon: "Undo2", text: "When you sin and repent, Ar-Raheem accepts you." },
    { icon: "Sparkles", text: "His compassion is specifically for believers who seek His mercy." },
  ],
  closingText: "Ar-Raheem\u2014\ncompassion for\nthose who return.",
  audioFileName: "al-baqarah-2-37",
};

export function ArRaheemStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#140f1f", "#000000"]}
    />
  );
}
