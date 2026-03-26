"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "\"O mankind,\nyou are those in need\nof Allah.\n\nAnd Allah—\nHe is Al-Ghaniyy,\nthe Self-Sufficient,\nthe Praiseworthy.\"\n\n— Surah Fatir 35:15\n\nYou need Him.\nHe needs nothing.",
    icon: "Quote",
  },
  {
    text: "He needs nothing\nfrom you.\n\nNot your prayer.\nNot your fasting.\nNot your charity.\nNot your praise.\n\nAl-Ghaniyy was complete\nbefore He created you.\nHe would be complete\nif you never existed.",
    icon: "Star",
  },
  {
    text: "Your prayer\ndoes not benefit Him.\n\nIf every human\nand every jinn\nstood in prayer\nfor eternity—\n\nit would not add\nan atom's weight\nto His kingdom.\n\nAl-Ghaniyy is beyond need.",
    icon: "Moon",
  },
  {
    text: "Your worship\ndoes not add to Him.\n\nAllah said\nin a Hadith Qudsi:\n\n\"O My servants,\nif the first of you\nand the last of you,\nthe human of you\nand the jinn of you,\nwere as pious\nas the most pious heart—\nthat would not increase\nMy kingdom in anything.\"\n\n— Sahih Muslim",
    icon: "Crown",
  },
  {
    text: "So why does He\ncommand worship?\n\nNot for Him.\nFor you.\n\nPrayer heals you.\nFasting purifies you.\nCharity frees you.\nDhikr calms you.\n\nHe commanded worship\nbecause He knows\nwhat you need—\nnot because He needs it.",
    icon: "Heart",
  },
  {
    text: "\"If you disbelieve—\nindeed, Allah is\nFree of need of you.\"\n\n— Surah Az-Zumar 39:7\n\nYour disbelief\ndoesn't harm Him.\nYour belief\ndoesn't profit Him.\n\nBut your belief\nprofits you\nmore than you know.",
    icon: "Shield",
  },
  {
    text: "When you understand\nHe needs nothing—\nyour worship becomes pure.\n\nYou stop bargaining:\n\"I'll pray if You give me...\"\n\nYou start surrendering:\n\"I pray because\nYou deserve it—\nand because I need it.\"\n\nThat is real worship.",
    icon: "Sparkles",
  },
  {
    text: "Al-Ghaniyy—\nthe Self-Sufficient—\nstill chose to create you.\nStill chose to sustain you.\nStill chose to love you.\n\nNot out of need.\nOut of generosity.\n\nHe didn't need you.\nBut He wanted you.\n\nThat is the most\nhumbling truth.",
    icon: "Sun",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "وَاللَّهُ الْغَنِيُّ وَأَنتُمُ الْفُقَرَاءُ",
  ayahReference: "Surah Muhammad 47:38",
  translation: "\"And Allah is the Self-Sufficient\n(Al-Ghaniyy),\nand you are the needy.\"",
  nameArabic: "ٱلْغَنِيُّ",
  nameTransliteration: "Al-Ghaniyy",
  nameSubtitle: "The Self-Sufficient • The Rich Beyond Need",
  explanationPoints: [
    { icon: "Star", text: "He needs nothing from you—not your prayer, fasting, charity, or praise" },
    { icon: "Crown", text: "If all creation worshipped perfectly—it would not add an atom to His kingdom" },
    { icon: "Heart", text: "He commands worship for YOUR benefit—prayer heals, fasting purifies, charity frees" },
    { icon: "Sun", text: "He didn't need you—but He wanted you. His creation is pure generosity" },
  ],
  closingText: "Al-Ghaniyy needs nothing.\n\nYour prayer doesn't benefit Him.\nYour sin doesn't harm Him.\n\nBut He still created you.\nStill sustains you.\nStill loves you.\n\nNot from need—\nfrom generosity.",
  audioFileName: "muhammad-47-38",
};

export function AlGhaniyyStory({ nameId }: { nameId: string }) {
  return <MultiScreenStory nameId={nameId} screens={screens} finalReveal={finalReveal} gradientColors={["#0d1014", "#141a22", "#080a0f"]} />;
}
