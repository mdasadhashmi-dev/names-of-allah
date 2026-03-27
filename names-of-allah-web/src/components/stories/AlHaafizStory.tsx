"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "The Quran.\n\nSent down from the heavens\nto the heart of Muhammad ﷺ.\n\nEvery letter, every word,\nevery verse—preserved.",
    icon: "BookOpen",
  },
  {
    text: "Enemies tried to corrupt it.\nTo twist its meaning.\nTo replace its words.\n\nBut no human hand\ncould alter what\nAl-Haafiz chose to guard.",
    icon: "Shield",
  },
  {
    text: "\"Indeed, it is We\nwho sent down the Reminder,\nand indeed, We\nwill be its Guardian.\"\n\n— Surah Al-Hijr 15:9",
    icon: "Quote",
  },
  {
    text: "Over 1,400 years.\nThrough wars and empires.\nThrough fire and flood.\n\nNot a single letter changed.\nNot a single vowel shifted.\n\nAl-Haafiz preserved every word.",
    icon: "Clock",
  },
  {
    text: "Millions memorize it\nfrom cover to cover.\n\nA child in Indonesia\nrecites the same words\nas a scholar in Morocco.\n\nIdentical. Letter for letter.",
    icon: "Globe",
  },
  {
    text: "But Al-Haafiz doesn't only\npreserve His Book.\n\nHe preserves your deeds.\nYour intentions.\nYour tears in the night.\n\nNothing is lost with Him.",
    icon: "Eye",
  },
  {
    text: "He preserved Nuh through the flood.\nIbrahim through the fire.\nMusa through the sea.\nYusuf through the well.\n\nAl-Haafiz guards\nwhat He wills to protect.",
    icon: "Sparkles",
  },
  {
    text: "That good deed\nyou thought no one saw?\n\nThat prayer in the darkness?\nThat tear you wiped away?\n\nAl-Haafiz recorded it.\nPreserved it.\nWill never let it be lost.",
    icon: "Heart",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ",
  ayahReference: "Surah Al-Hijr 15:9",
  translation: "\"Indeed, it is We who sent down\nthe Reminder, and indeed,\nWe will be its Guardian.\"",
  nameArabic: "ٱلْحَافِظُ",
  nameTransliteration: "Al-Haafiz",
  nameSubtitle: "The Preserver • The Protector",
  explanationPoints: [
    { icon: "BookOpen", text: "He preserved the Quran — unchanged for over 1,400 years" },
    { icon: "Shield", text: "He preserved the prophets through every danger and trial" },
    { icon: "Eye", text: "He preserves every good deed — nothing is lost with Him" },
    { icon: "Heart", text: "Your struggles, your prayers, your tears — all preserved by Al-Haafiz" },
  ],
  closingText: "Al-Haafiz is the Ultimate Preserver.\nHe guards His Book, His servants,\nand every sincere deed.\n\nNothing good is ever lost\nwith the One who preserves all things.",
  audioFileName: "al-hijr-15-9",
};

export function AlHaafizStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#0d1a14", "#142618", "#0a1410"]}
    />
  );
}
