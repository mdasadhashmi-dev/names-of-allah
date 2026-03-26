"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "He knows\nwhat has been.\nWhat is.\nWhat will be.\n\nAnd what would have been\nif it had been.",
    icon: "Infinity",
  },
  {
    text: "Every leaf that falls\nfrom every tree\nin every forest\non every continent\u2014\n\nHe knows it.\n\nNot a single one\ntouches the ground\nwithout His knowledge.",
    icon: "Leaf",
  },
  {
    text: "He knows the number\nof every raindrop\nthat has ever fallen.\n\nEvery grain of sand.\nEvery star in every galaxy.\nEvery atom in the universe.",
    icon: "Droplet",
  },
  {
    text: "He knows the thought\nthat just crossed your mind.\n\nThe one you didn't say.\nThe one you buried.\nThe one you forgot.\n\nHe never forgot.",
    icon: "Lightbulb",
  },
  {
    text: "He knew you\nbefore your mother knew you.\n\nHe knew your name\nbefore you had one.\n\nHe knew your story\nbefore it began.",
    icon: "BookOpen",
  },
  {
    text: "Nothing is hidden from Him.\n\nNot the whisper in the dark.\nNot the secret in the heart.\nNot the tear shed in silence.\n\nHe is the Knower\nof the unseen and the seen.",
    icon: "Eye",
  },
  {
    text: "His knowledge has no beginning.\nIt was never learned.\nIt was never taught.\n\nHis knowledge has no end.\nIt will never be exhausted.\nIt will never be outdated.",
    icon: "Compass",
  },
  {
    text: "And the most\ncomforting part?\n\nHe knows what you need\nbefore you ask.\n\nHe knows what is best\nwhen you cannot see.\n\nTrust the One\nwho knows everything.",
    icon: "Star",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "هُوَ اللَّهُ الَّذِي لَا إِلَـٰهَ إِلَّا هُوَ ۖ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ ۖ هُوَ الرَّحْمَـٰنُ الرَّحِيمُ",
  ayahReference: "Surah Al-Hashr 59:22",
  translation: "\"He is Allah, besides whom\nthere is no deity,\nKnower of the unseen\nand the witnessed.\nHe is the Most Merciful,\nthe Especially Merciful.\"",
  nameArabic: "العَالِم",
  nameTransliteration: "Al-'Aalim",
  nameSubtitle: "The All-Knower • The Knower of All Things",
  explanationPoints: [
    { icon: "Globe", text: "His knowledge encompasses everything — the seen and the unseen, the past and the future" },
    { icon: "Eye", text: "Not a leaf falls, not a thought passes, without His complete awareness" },
    { icon: "Lightbulb", text: "His knowledge was never learned and will never be exhausted — it is eternal and infinite" },
    { icon: "Heart", text: "He knows what you need before you ask, and what is best when you cannot see" },
  ],
  closingText: "Al-'Aalim is the One\nfrom whom nothing is hidden.\n\nAnd in that knowledge\nthere is comfort\u2014\n\nbecause the One who knows\neverything about you\nstill loves you,\nstill provides for you,\nstill calls you back to Him.",
  audioFileName: "al-hashr-59-22",
};

export function AlAalimStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#0a0c14", "#10141e", "#06080e"]}
    />
  );
}
