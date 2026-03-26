"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Prophet Yunus \u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650 \u0671\u0644\u0633\u0651\u064e\u0644\u064e\u0627\u0645\u064f was sent\nto guide his people.\n\nHe called them to Allah,\nday after day.\n\nBut they refused to listen.",
    icon: "Users",
  },
  {
    text: "Years passed.\nHis patience wore thin.\n\nFrustration overtook him.\n\nHe made a decision\u2014\nhe would leave them.",
    icon: "Hand",
  },
  {
    text: "He left his mission\u2014\nwithout waiting for\nAllah's permission.",
    icon: "XCircle",
  },
  {
    text: "He boarded a ship,\nsailing across the sea.\n\nHoping to escape\nhis burden and frustration.",
    icon: "Ship",
  },
  {
    text: "A fierce storm arose.\nThe ship was in danger.\n\nBy tradition, one passenger\nmust be cast into the sea\nto lighten the load.\n\nLots were drawn...",
    icon: "CloudLightning",
  },
  {
    text: "His name was chosen.\n\nHe was thrown overboard.\n\nIn the depths,\na massive whale\nswallowed him whole.",
    icon: "Fish",
  },
  {
    text: "Darkness upon darkness:\nThe night, the ocean depths,\nthe belly of the whale.\n\nAlone with his mistake.\nAlone with his Lord.",
    icon: "Moon",
  },
  {
    text: "He cried out:\n\n\"There is no god but You!\nGlory be to You!\nIndeed, I have been\nof the wrongdoers.\"",
    icon: "Quote",
  },
  {
    text: "Allah answered.\n\nThe whale released him\nonto the shore.\n\nForgiven.\nRestored.\nGiven another chance.",
    icon: "CheckCircle",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "\u0648\u064e\u0625\u0650\u0646\u0651\u0650\u0649 \u0644\u064e\u063a\u064e\u0641\u0651\u064e\u0627\u0631\u064c\u06ed \u0644\u0651\u0650\u0645\u064e\u0646 \u062a\u064e\u0627\u0628\u064e \u0648\u064e\u0621\u064e\u0627\u0645\u064e\u0646\u064e \u0648\u064e\u0639\u064e\u0645\u0650\u0644\u064e \u0635\u064e\u0640\u0670\u0644\u0650\u062d\u064b\u06ed\u0627 \u062b\u064f\u0645\u0651\u064e \u0671\u0647\u0652\u062a\u064e\u062f\u064e\u0649\u0670",
  ayahReference: "Surah Taha 20:82",
  translation: "\"And indeed, I am\nthe Perpetual Forgiver (Ghaffar)\nof whoever repents and believes\nand does righteousness\nand then remains guided\"",
  nameArabic: "\u0671\u0644\u0652\u063a\u064e\u0641\u0651\u064e\u0627\u0631\u064f",
  nameTransliteration: "Al-Ghaffar",
  nameSubtitle: "The Oft-Forgiving \u2022 The Pardoner",
  explanationPoints: [
    { icon: "Undo2", text: "No matter how far you've strayed, return is possible" },
    { icon: "Heart", text: "Sincere repentance opens the door to forgiveness" },
    { icon: "Sparkles", text: "Allah forgives again and again\u2014He is Al-Ghaffar" },
    { icon: "CheckCircle", text: "Even prophets make mistakes, and find His mercy" },
  ],
  closingText: "Al-Ghaffar forgives repeatedly.\nNo sin is too great,\nno mistake too many.\n\nTurn to Him sincerely,\nand He will forgive\u2014\nagain, and again, and again.",
  audioFileName: "taha-20-82",
};

export function YunusStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#041426", "#0a1f38", "#020f1f"]}
    />
  );
}
