"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "\"To Allah belongs\nthe east and the west.\nWherever you turn,\nthere is the face of Allah.\nIndeed, Allah is\nAll-Encompassing (Wasi),\nAll-Knowing.\"\n\n— Surah Al-Baqarah 2:115\n\nThere is no direction\nwithout Him.",
    icon: "Globe",
  },
  {
    text: "His mercy\nencompasses all things.\n\n\"My mercy\nencompasses all things.\"\n\n— Surah Al-A'raf 7:156\n\nNot some things.\nNot most things.\nAll things.\n\nAl-Wasi's mercy\nhas no boundary.",
    icon: "Heart",
  },
  {
    text: "His knowledge\nencompasses everything.\n\nEvery grain of sand.\nEvery leaf that falls.\nEvery thought you think.\nEvery beat of every heart.\n\nAl-Wasi misses nothing\nbecause His knowledge\nhas no limit.",
    icon: "Eye",
  },
  {
    text: "His provision\nreaches everywhere.\n\nThe ant in its hole.\nThe worm in the earth.\nThe bird above the clouds.\nThe fish at the bottom\nof the ocean.\n\nNo place is beyond\nthe reach of Al-Wasi.",
    icon: "Sparkles",
  },
  {
    text: "You cannot run\nfrom His presence.\nYou cannot hide\nfrom His knowledge.\nYou cannot be outside\nHis mercy.\n\nBut why would you\nwant to?\n\nBeing encompassed by Al-Wasi\nis the greatest safety.",
    icon: "Shield",
  },
  {
    text: "When Hagar\nran between Safa and Marwa—\nalone in the desert\nwith her baby—\n\nshe thought\nshe was abandoned.\n\nBut Al-Wasi\nwas there.\n\nZamzam burst forth\nfrom the ground.",
    icon: "Waves",
  },
  {
    text: "No person\nis outside His care.\n\nNot the sinner.\nNot the lost.\nNot the one\nwho feels forgotten.\n\nAl-Wasi encompasses\neven those\nwho forgot Him.",
    icon: "Moon",
  },
  {
    text: "Wherever you are—\nin a palace or a prison,\nin a crowd or alone,\non a mountain\nor at the bottom\nof despair—\n\nAl-Wasi is there.\nEncompassing you\nwith mercy, knowledge,\nand care.",
    icon: "Sun",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "وَاللَّهُ وَاسِعٌ عَلِيمٌ",
  ayahReference: "Surah Al-Baqarah 2:247",
  translation: "\"And Allah is\nAll-Encompassing (Al-Wasi),\nAll-Knowing.\"",
  nameArabic: "ٱلْوَاسِعُ",
  nameTransliteration: "Al-Wasi",
  nameSubtitle: "The All-Encompassing • The Vast",
  explanationPoints: [
    { icon: "Globe", text: "Wherever you turn, there is the face of Allah—east, west, everywhere" },
    { icon: "Heart", text: "His mercy encompasses ALL things—not some, not most, all" },
    { icon: "Waves", text: "Hagar was alone in the desert—but Al-Wasi brought Zamzam from the earth" },
    { icon: "Moon", text: "No one is outside His care—not even those who forgot Him" },
  ],
  closingText: "Al-Wasi encompasses everything.\nHis mercy, His knowledge,\nHis care—all without limit.\n\nWherever you are,\nHe is there.\n\nYou cannot be outside\nthe embrace of Al-Wasi.",
  audioFileName: "al-baqarah-2-247",
};

export function AlWasiStory({ nameId }: { nameId: string }) {
  return <MultiScreenStory nameId={nameId} screens={screens} finalReveal={finalReveal} gradientColors={["#0a0f1a", "#101826", "#060a14"]} />;
}
