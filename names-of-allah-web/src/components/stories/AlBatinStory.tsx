"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "He is Az-Zahir—the Manifest.\nAnd He is Al-Batin—the Hidden.\n\nPaired together.\n\nHis signs are everywhere—\nbut He Himself\ncannot be seen.\n\nThe greatest reality\nis the one\nyou cannot perceive.",
    icon: "Eye",
  },
  {
    text: "You cannot see Him.\n\nBut He sees you.\n\nEvery glance.\nEvery movement.\nEvery breath.\n\nYou search for Him—\nbut He has always\nbeen watching you.",
    icon: "Moon",
  },
  {
    text: "You cannot touch Him.\n\nBut He touches your heart.\n\nThat sudden peace\nduring prayer.\nThat tear\nyou can't explain.\nThat pull\ntoward goodness.\n\nThat is Al-Batin\ntouching what\nno hand can reach.",
    icon: "Heart",
  },
  {
    text: "Musa asked to see Him.\n\n\"My Lord, show me\nthat I may look at You.\"\n\nAllah said:\n\"You cannot see Me.\nBut look at the mountain.\nIf it remains in its place,\nyou will see Me.\"\n\nHe manifested to the mountain—\nand it crumbled to dust.\nMusa fell unconscious.\n\n— Surah Al-A'raf 7:143",
    icon: "Quote",
  },
  {
    text: "A mountain\ncould not bear\nthe manifestation\nof Al-Batin.\n\nA mountain.\n\nImagine what your eyes\ncannot handle.\nWhat your mind\ncannot process.\n\nHe is hidden\nout of mercy—\nnot out of absence.",
    icon: "Mountain",
  },
  {
    text: "The greatest reality\nis the one\nyou cannot perceive\nwith your senses.\n\nYou cannot see gravity—\nbut it holds you.\nYou cannot see love—\nbut it moves you.\nYou cannot see Al-Batin—\nbut He sustains you.",
    icon: "Sparkles",
  },
  {
    text: "Faith is believing\nin what is hidden.\n\nThat is the first quality\nAllah mentions\nabout the believers:\n\n\"Those who believe\nin the unseen.\"\n\n— Surah Al-Baqarah 2:3\n\nBelieving in Al-Batin\nis the foundation of iman.",
    icon: "BookOpen",
  },
  {
    text: "Al-Batin rewards those\nwho trust without seeing.\n\nYou cannot see Paradise—\nbut you work for it.\nYou cannot see Him—\nbut you worship Him.\nYou cannot see His plan—\nbut you trust it.\n\nThat is faith.\nThat is the gift\nof knowing Al-Batin.",
    icon: "Sun",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "هُوَ الْأَوَّلُ وَالْآخِرُ وَالظَّاهِرُ وَالْبَاطِنُ",
  ayahReference: "Surah Al-Hadid 57:3",
  translation: "\"He is the First\nand the Last,\nthe Manifest\nand the Hidden (Al-Batin).\"",
  nameArabic: "ٱلْبَاطِنُ",
  nameTransliteration: "Al-Batin",
  nameSubtitle: "The Hidden • The Imperceptible",
  explanationPoints: [
    { icon: "Eye", text: "You cannot see Him—but He sees you, every breath, every movement" },
    { icon: "Heart", text: "You cannot touch Him—but He touches your heart in prayer and tears" },
    { icon: "Mountain", text: "A mountain crumbled at His manifestation—He is hidden out of mercy" },
    { icon: "BookOpen", text: "Faith is believing in the unseen—trusting Al-Batin is the foundation of iman" },
  ],
  closingText: "Al-Batin is the Hidden.\nYou cannot see Him—\nbut He sees you.\nYou cannot touch Him—\nbut He touches your heart.\n\nTrust the Unseen.\nThat is true faith.",
  audioFileName: "al-hadid-57-3-batin",
};

export function AlBatinStory({ nameId }: { nameId: string }) {
  return <MultiScreenStory nameId={nameId} screens={screens} finalReveal={finalReveal} gradientColors={["#0a0a10", "#101018", "#060608"]} />;
}
