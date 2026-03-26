"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "He governs\nthe rise and fall\nof nations.\n\nNo empire rises\nwithout His permission.\nNo kingdom falls\nwithout His decree.\n\nThe history of the world\nis the story\nof Al-Wali's governance.",
    icon: "Globe",
  },
  {
    text: "He governs\nthe change of seasons.\n\nSpring follows winter.\nHarvest follows rain.\nLife follows death.\n\nNot random.\nNot chaotic.\n\nGoverned.\nBy Al-Wali.",
    icon: "Sun",
  },
  {
    text: "He governs\nthe orbit of planets.\n\nMercury, Venus, Earth, Mars—\neach in its lane.\nNever colliding.\nNever deviating.\nFor billions of years.\n\nWho maintains\nthis perfect order?\n\nAl-Wali.\nThe Supreme Governor.",
    icon: "Star",
  },
  {
    text: "He governs\nthe flow of history.\n\nIbrahim was born\nin the land of idols—\nand became\nthe father of monotheism.\n\nMusa was raised\nin Pharaoh's palace—\nand became\nPharaoh's downfall.\n\nThe irony\nof Al-Wali's governance.",
    icon: "Sparkles",
  },
  {
    text: "Nothing happens\noutside His governance.\n\nNot the movement\nof a leaf.\nNot the flutter\nof a wing.\nNot the beat\nof your heart.\n\n\"Not a leaf falls\nbut He knows it.\"\n\n— Surah Al-An'am 6:59",
    icon: "Feather",
  },
  {
    text: "\"Or have they taken\nprotectors besides Him?\n\nBut Allah—\nHe is the Protector\n(Al-Wali),\nand He gives life\nto the dead,\nand He is over\nall things competent.\"\n\n— Surah Ash-Shura 42:9",
    icon: "Quote",
  },
  {
    text: "People seek governors.\nProtectors.\nRulers.\n\nBut every human governor\nis limited.\nEvery human protector\nis temporary.\nEvery human ruler\nwill die.\n\nAl-Wali governs\nwithout limitation.\nWithout end.\nWithout flaw.",
    icon: "Shield",
  },
  {
    text: "Trust His governance—\neven when you\ndon't understand it.\n\nThe job you lost—\ngoverned.\nThe door that closed—\ngoverned.\nThe pain you carry—\ngoverned.\n\nAl-Wali governs\nwith perfect wisdom.\nEven the parts\nthat hurt.",
    icon: "Heart",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "فَاللَّهُ هُوَ الْوَلِيُّ وَهُوَ يُحْيِي الْمَوْتَىٰ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
  ayahReference: "Surah Ash-Shura 42:9",
  translation: "\"But Allah—\nHe is the Protector (Al-Wali),\nand He gives life to the dead,\nand He is over all things\ncompetent.\"",
  nameArabic: "ٱلْوَالِي",
  nameTransliteration: "Al-Wali",
  nameSubtitle: "The Supreme Governor • The Patron",
  explanationPoints: [
    { icon: "Globe", text: "He governs the rise and fall of nations—no empire moves without His decree" },
    { icon: "Star", text: "Planets orbit for billions of years without collision—His perfect governance" },
    { icon: "Sparkles", text: "Musa raised in Pharaoh's palace became Pharaoh's downfall—His irony" },
    { icon: "Heart", text: "Trust His governance even in pain—every closed door is governed with wisdom" },
  ],
  closingText: "Al-Wali is the Supreme Governor.\nNations, seasons, planets, history—\nall under His governance.\n\nNothing is random.\nNothing is chaotic.\nEverything is governed.\n\nTrust Al-Wali.",
  audioFileName: "ash-shura-42-9",
};

export function AlWaliAltStory({ nameId }: { nameId: string }) {
  return <MultiScreenStory nameId={nameId} screens={screens} finalReveal={finalReveal} gradientColors={["#0a1014", "#101a22", "#060a0f"]} />;
}
