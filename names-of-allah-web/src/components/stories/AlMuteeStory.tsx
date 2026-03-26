"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "The Prophet ﷺ said:\n\n\"Allah is Al-Mu'tee —\nthe Giver —\nand I am\nthe distributor.\"\n\n— Sahih Bukhari 3116\n\nEverything that reaches you\npasses through His hand first.",
    icon: "Quote",
  },
  {
    text: "When He gives,\nno one can withhold.\n\nWhen He withholds,\nno one can give.\n\nNo king, no army,\nno system on earth\ncan block what He decrees\nor force what He has not.",
    icon: "Shield",
  },
  {
    text: "He gave Sulayman\na kingdom like no other.\n\nDominion over men,\nover jinn,\nover the wind itself.\n\nA throne that made\nthe Queen of Sheba\nfall to her knees.\n\nAl-Mu'tee gave\nwithout measure.",
    icon: "Crown",
  },
  {
    text: "He gave Maryam\na child without a father.\n\nThe impossible.\nThe unthinkable.\n\nShe was alone.\nShe was afraid.\nBut Al-Mu'tee\ndoes not need\nmeans or causes.\n\nHe simply says: Be.\nAnd it is.",
    icon: "Star",
  },
  {
    text: "He gave Muhammad ﷺ\nthe Quran.\n\nNot wealth.\nNot a palace.\nNot an empire.\n\nHe gave him words —\nwords that would outlast\nevery kingdom,\nevery dynasty,\nevery civilization\nthat ever was.",
    icon: "BookOpen",
  },
  {
    text: "And He gives you.\n\nEvery breath you take\nis a gift from Al-Mu'tee.\n\nEvery heartbeat.\nEvery sip of water.\nEvery person who loves you.\n\nGifts you did not earn.\nGifts you cannot repay.",
    icon: "Heart",
  },
  {
    text: "Sometimes He withholds.\n\nAnd you grieve.\nAnd you question.\n\nBut Al-Mu'tee\nknows what you need\nbetter than you do.\n\nWhat He withholds\nis also a gift —\na protection you\ncannot yet see.",
    icon: "Eye",
  },
  {
    text: "Al-Mu'tee.\n\nThe Giver\nwhose giving has no end.\n\nWho gave you life,\ngave you faith,\ngave you this very moment.\n\n\"You give sovereignty\nto whom You will,\nand You take it away\nfrom whom You will.\"\n\nAll of it — from Him.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "تُؤْتِي الْمُلْكَ مَن تَشَاءُ وَتَنزِعُ الْمُلْكَ مِمَّن تَشَاءُ",
  ayahReference: "Surah Ali 'Imran 3:26",
  translation: "\"You give sovereignty\nto whom You will,\nand You take sovereignty away\nfrom whom You will.\"",
  nameArabic: "ٱلْمُعْطِي",
  nameTransliteration: "Al-Mu'tee",
  nameSubtitle: "The Giver • The Bestower",
  explanationPoints: [
    { icon: "Infinity", text: "When He gives, no force in existence can withhold it from you" },
    { icon: "Crown", text: "Sulayman's kingdom, Maryam's miracle, Muhammad's Quran — all His giving" },
    { icon: "Heart", text: "Every breath, every heartbeat, every moment of your life is His gift" },
    { icon: "Eye", text: "Even what He withholds is a gift — a protection you cannot yet see" },
  ],
  closingText: "Al-Mu'tee is the Giver.\nHis treasures never deplete.\nHis generosity never pauses.\n\nYou did not earn your sight.\nYou did not earn your faith.\nYou did not earn this moment.\n\nAll of it was given.\nAsk Him.\nHe loves to give.",
  audioFileName: "ali-imran-3-26",
};

export function AlMuteeStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#100e0c", "#1c1814", "#0e0c0a"]}
    />
  );
}
