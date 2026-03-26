"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "\"He is the First.\"\n\n— Surah Al-Hadid 57:3\n\nThere was nothing\nbefore Him.\n\nNothing.\n\nNo time. No space.\nNo light. No darkness.\nNo universe. No void.\n\nOnly Allah.",
    icon: "Star",
  },
  {
    text: "Before the Big Bang—\nthat explosion\nthat created\n100 billion galaxies—\n\nBefore the first atom.\nBefore the first particle.\nBefore the first moment.\n\nAl-Awwal was there.",
    icon: "Sparkles",
  },
  {
    text: "Before time itself.\n\nTime is a creation.\nIt had a beginning.\nThere was a \"before\" time.\n\nAnd in that \"before\"—\nwhen even the concept\nof \"before\" didn't exist—\n\nAl-Awwal existed.",
    icon: "Clock",
  },
  {
    text: "Before space.\n\nUp, down, left, right—\nthese are creations.\nDimensions are creations.\n\nAl-Awwal existed\nwithout needing\na place to exist in.\n\nHe is not contained\nby what He created.",
    icon: "Globe",
  },
  {
    text: "He has no beginning.\n\nEverything you know\nhad a start.\nYour life. The earth.\nThe universe.\n\nBut Al-Awwal\nhad no start.\nNo origin.\nNo cause.\n\nHe is the uncaused Cause.\nThe beginning\nthat has no beginning.",
    icon: "Lightbulb",
  },
  {
    text: "Everything that exists\ncame from His will.\n\n\"Kun fayakun.\"\n\"Be—and it is.\"\n\nThe heavens. The earth.\nThe angels. The jinn.\nAdam. You.\n\nAll from the will\nof the One\nwho was First.",
    icon: "Zap",
  },
  {
    text: "He was there\nwhen nothing was there.\n\nThe Prophet ﷺ said:\n\"Allah existed\nand nothing existed\nbefore Him.\"\n\n— Sahih Al-Bukhari\n\nImagine that.\nNothing. Absolute nothing.\nExcept Allah.",
    icon: "Moon",
  },
  {
    text: "\"He is the First\nand the Last,\nthe Manifest\nand the Hidden.\nAnd He is,\nof all things, Knowing.\"\n\n— Surah Al-Hadid 57:3\n\nAl-Awwal.\nBefore everything.\nThe origin of all origins.\nThe beginning\nof all beginnings.",
    icon: "Quote",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "هُوَ الْأَوَّلُ وَالْآخِرُ وَالظَّاهِرُ وَالْبَاطِنُ ۖ وَهُوَ بِكُلِّ شَيْءٍ عَلِيمٌ",
  ayahReference: "Surah Al-Hadid 57:3",
  translation: "\"He is the First\nand the Last,\nthe Manifest\nand the Hidden.\nAnd He is,\nof all things, Knowing.\"",
  nameArabic: "ٱلْأَوَّلُ",
  nameTransliteration: "Al-Awwal",
  nameSubtitle: "The First • The Beginning",
  explanationPoints: [
    { icon: "Star", text: "There was nothing before Him—no time, no space, no universe, nothing" },
    { icon: "Sparkles", text: "Before the Big Bang, before the first atom—Al-Awwal was there" },
    { icon: "Lightbulb", text: "He has no beginning—the uncaused Cause, the origin of all origins" },
    { icon: "Moon", text: "Allah existed and nothing existed before Him—absolute singularity" },
  ],
  closingText: "Al-Awwal is the First.\nBefore time. Before space.\nBefore existence itself.\n\nHe was there\nwhen nothing was.\n\nAnd from Him—\neverything came to be.",
  audioFileName: "al-hadid-57-3-awwal",
};

export function AlAwwalStory({ nameId }: { nameId: string }) {
  return <MultiScreenStory nameId={nameId} screens={screens} finalReveal={finalReveal} gradientColors={["#0a0a14", "#141422", "#06060f"]} />;
}
