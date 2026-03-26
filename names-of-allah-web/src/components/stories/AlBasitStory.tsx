"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Maryam was alone.\nUnmarried. With child.\nIn a society that would\nnot understand.\n\nShe withdrew to a remote place.\nLabor pains drove her\nto the trunk of a palm tree.",
    icon: "User",
  },
  {
    text: "She cried:\n\n\"I wish I had died\nbefore this\nand was a thing\nlong forgotten.\"\n\nThe lowest moment.\nThe deepest despair.",
    icon: "Moon",
  },
  {
    text: "Then a voice called\nfrom beneath her:\n\n\"Do not grieve.\nYour Lord has provided\na stream beneath you.\n\nShake the trunk\nof the palm tree—\nit will drop fresh dates.\"",
    icon: "Leaf",
  },
  {
    text: "From nothing—\na stream appeared.\nFrom a barren tree—\nfresh dates fell.\n\nIn her darkest hour,\nAl-Basit extended\nprovision she never expected\nfrom sources she never imagined.",
    icon: "Droplets",
  },
  {
    text: "The Prophet ﷺ said:\n\n\"Allah extends His hand\nat night\nto forgive those\nwho sinned during the day.\n\nAnd He extends His hand\nduring the day\nto forgive those\nwho sinned at night.\"\n\n— Sahih Muslim",
    icon: "Hand",
  },
  {
    text: "Al-Basit does not give\nonly what you expect.\n\nHe extends blessings\nfrom directions\nyou never considered.\n\nA door opens\nwhere there was no door.\nHelp comes\nfrom someone you never asked.",
    icon: "ArrowRight",
  },
  {
    text: "He extends provision.\nHe extends mercy.\nHe extends time.\nHe extends opportunity.\n\nEvery morning you wake up\nis Al-Basit\nextending another day to you.",
    icon: "Sun",
  },
  {
    text: "When life contracts—\nwait.\n\nAl-Basit's extension\nalways follows\nAl-Qabid's withholding.\n\nAfter every tightness,\nHe opens.\n\nAfter every hardship,\nHe eases.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "وَاللَّهُ يَقْبِضُ وَيَبْسُطُ وَإِلَيْهِ تُرْجَعُونَ",
  ayahReference: "Surah Al-Baqarah 2:245",
  translation: "\"And Allah withholds\nand extends (Al-Basit),\nand to Him\nyou will be returned.\"",
  nameArabic: "ٱلْبَاسِطُ",
  nameTransliteration: "Al-Basit",
  nameSubtitle: "The Extender • The Expander",
  explanationPoints: [
    { icon: "Leaf", text: "Maryam received a stream and fresh dates in her darkest moment" },
    { icon: "Hand", text: "He extends His hand day and night—always ready to forgive" },
    { icon: "Sun", text: "Every new morning is Al-Basit extending another chance to you" },
    { icon: "ArrowRight", text: "After every contraction comes expansion—this is His promise" },
  ],
  closingText: "Al-Basit extends without limit.\nMaryam received provision\nfrom a barren tree.\n\nWhatever you need,\nHe can extend it to you\nfrom where you least expect.",
  audioFileName: "al-baqarah-2-245",
};

export function AlBasitStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#0f1a14", "#182b20", "#0a140d"]}
    />
  );
}
