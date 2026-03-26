"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "He did not create once\nand then stop.\n\nHe creates\nagain and again and again.\n\nEvery moment,\ncreation is unfolding.",
    icon: "Sparkles",
  },
  {
    text: "Every seven years,\nnearly every cell in your body\nis replaced.\n\nYou are not the same person\nyou were a decade ago\u2014\nnot even physically.",
    icon: "Layers",
  },
  {
    text: "Every morning the sun rises\nas if for the first time.\n\nEvery spring, the dead earth\ncomes alive again.\n\nHe never tires of creating.",
    icon: "Sun",
  },
  {
    text: "A single tree\nproduces millions of seeds.\n\nEach one holds a forest.\nEach forest holds an ecosystem.\n\nHis creation multiplies\nbeyond imagination.",
    icon: "TreePine",
  },
  {
    text: "They said:\n\"When we are dust and bones,\nwill we really be raised again?\"\n\nAs if the One who formed you\nfrom nothing\ncould not form you again.",
    icon: "Wind",
  },
  {
    text: "Look at the sky after a storm.\nLook at a wound as it heals.\nLook at a child growing\ninside the womb.\n\nCreation never stopped.",
    icon: "Cloud",
  },
  {
    text: "He who created\nthe heavens and the earth\u2014\ntheir vastness,\ntheir precision,\ntheir beauty\u2014\n\nis He not able\nto create the likes of you?",
    icon: "Globe",
  },
  {
    text: "Yes.\nHe is Al-Khallaaq.\nThe Creator who never ceases.\n\nAnd the resurrection?\nIt is simply\nHis next creation.\n\nHe who began it\nwill bring it back.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "أَوَلَيْسَ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ بِقَادِرٍ عَلَىٰ أَن يَخْلُقَ مِثْلَهُم ۚ بَلَىٰ وَهُوَ الْخَلَّاقُ الْعَلِيمُ",
  ayahReference: "Surah Ya-Sin 36:81",
  translation: "\"Is not He who created the heavens\nand the earth able to create\nthe likes of them?\nYes, and He is\nthe Knowing Creator.\"",
  nameArabic: "الخَلَّاق",
  nameTransliteration: "Al-Khallaaq",
  nameSubtitle: "The Creator Who Creates Again and Again • The Perpetual Creator",
  explanationPoints: [
    { icon: "Layers", text: "He creates continuously — every cell, every breath, every dawn is a new act of creation" },
    { icon: "Leaf", text: "The earth dies in winter and is reborn in spring — a sign of His unceasing creative power" },
    { icon: "Flame", text: "The resurrection is not difficult for Him — He who created from nothing creates again with ease" },
    { icon: "Infinity", text: "His creative power has no limit, no fatigue, no end — He is never exhausted" },
  ],
  closingText: "Al-Khallaaq is the One\nwhose creation never stops.\n\nEvery heartbeat is His craft.\nEvery sunrise is His art.\nEvery new life is His will.\n\nAnd when the world ends,\nHe will create it all again.",
  audioFileName: "ya-sin-36-81",
};

export function AlKhallaaqStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#0a1008", "#141e0e", "#060c05"]}
    />
  );
}
