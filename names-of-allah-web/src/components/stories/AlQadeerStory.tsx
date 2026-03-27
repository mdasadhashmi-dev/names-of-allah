"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Maryam was alone.\nUnmarried. Untouched.\n\nAn angel appeared:\n\"You will have a son.\"\n\nShe said:\n\"How can I have a child\nwhen no man has touched me?\"",
    icon: "Star",
  },
  {
    text: "The angel replied:\n\n\"Thus it will be.\nYour Lord says:\n'It is easy for Me.'\"\n\nAl-Qadeer creates\nwithout cause,\nwithout means,\nwithout limit.",
    icon: "Sparkles",
  },
  {
    text: "He breathed life into Adam\nfrom clay.\n\nNo father. No mother.\nJust His command: \"Be.\"\n\nAnd Adam was.",
    icon: "Wind",
  },
  {
    text: "Ibrahim was thrown\ninto a blazing fire.\n\nAl-Qadeer said:\n\"O fire, be cool\nand peaceful upon Ibrahim.\"\n\nThe fire obeyed.\nIt had no choice.",
    icon: "Flame",
  },
  {
    text: "Zakariyya was old.\nHis wife was barren.\nYears of longing\nfor a child.\n\n\"My Lord,\nhow can I have a son?\"\n\n\"It is easy for Me.\nI created you before\nwhen you were nothing.\"",
    icon: "Heart",
  },
  {
    text: "The dead earth.\nBarren, cracked, lifeless.\n\nThen rain falls.\n\nAnd from it springs\nlife in every color.\n\nAl-Qadeer brings life\nfrom death,\nhope from despair,\nlight from darkness.",
    icon: "Flower",
  },
  {
    text: "\"Indeed, Allah\nis over all things\nQadeer.\"\n\nThis phrase appears\nover 30 times in the Quran.\n\nA constant reminder:\nNothing is impossible for Him.",
    icon: "BookOpen",
  },
  {
    text: "What impossible thing\nare you praying for?\n\nA child? A cure?\nForgiveness? A way out?\n\nThe One who created\nthe heavens and the earth\nfrom nothing—\nis He not Qadeer\nover your situation?",
    icon: "Moon",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "أَلَيْسَ ذَٰلِكَ بِقَادِرٍ عَلَىٰ أَن يُحْيِيَ الْمَوْتَىٰ",
  ayahReference: "Surah Al-Qiyamah 75:40",
  translation: "\"Is not He who created the heavens\nand the earth able to create\nthe likes of them? Yes indeed!\nHe is Al-Khallaaq, Al-Aleem.\"",
  nameArabic: "ٱلْقَدِيرُ",
  nameTransliteration: "Al-Qadeer",
  nameSubtitle: "The All-Powerful • The Omnipotent",
  explanationPoints: [
    { icon: "Star", text: "He gave Maryam a son without a father — nothing limits His power" },
    { icon: "Flame", text: "He made fire cool for Ibrahim — elements obey His command" },
    { icon: "Heart", text: "He gave Zakariyya a child in old age — He reverses the impossible" },
    { icon: "Sparkles", text: "Your impossible situation is nothing for Al-Qadeer — just say 'Be'" },
  ],
  closingText: "Al-Qadeer is the All-Powerful.\nHe created life from nothing,\nmade fire cool, split the sea,\nand gave children to the barren.\n\nWhatever you think is impossible—\nit is easy for Him.",
  audioFileName: "al-qiyamah-75-40",
};

export function AlQadeerStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#0d0d1a", "#141426", "#0a0a14"]}
    />
  );
}
