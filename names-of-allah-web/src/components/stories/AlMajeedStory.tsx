"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "The Quran itself\nis described as \"Majeed.\"\n\n\"Qaf. By the Glorious Quran.\"\n\n— Surah Qaf 50:1\n\nThe words of Al-Majeed\nare themselves glorious.\nEvery letter.\nEvery verse.\nEvery surah.",
    icon: "BookOpen",
  },
  {
    text: "The Throne of Allah\nis described as \"Majeed.\"\n\n\"Owner of the Throne,\nthe Glorious.\"\n\n— Surah Al-Buruj 85:15\n\nHis seat of authority—\ngreater than the heavens\nand the earth—\nis glorious beyond measure.",
    icon: "Star",
  },
  {
    text: "When the angels came\nto Ibrahim and Sarah\nwith glad tidings—\n\nSarah laughed in disbelief.\nShe was old. Barren.\n\nThe angels said:\n\"Are you amazed\nat the decree of Allah?\n\nMay the mercy of Allah\nand His blessings\nbe upon you,\npeople of the house.\nIndeed, He is Praiseworthy\nand Glorious.\"\n\n— Surah Hud 11:73",
    icon: "Quote",
  },
  {
    text: "His glory is in His actions.\n\nCreating the heavens—\nglorious.\nSustaining every creature—\nglorious.\nForgiving the worst sins—\nglorious.\nLoving His servants—\nglorious.\n\nEverything He does\nreflects infinite majesty.",
    icon: "Sparkles",
  },
  {
    text: "He gave Sulayman\na kingdom\nlike no other.\nWind obeyed him.\nJinn served him.\nAnimals spoke to him.\n\nA reflection—\na mere fraction—\nof the glory of Al-Majeed.",
    icon: "Crown",
  },
  {
    text: "He turned a staff\ninto a serpent.\nSplit the sea.\nRaised the dead.\nSent a spider\nto protect a cave.\n\nEvery miracle\nis a display\nof His glorious power.",
    icon: "Zap",
  },
  {
    text: "When you send salawat\non the Prophet ﷺ—\n\nyou say:\n\"Innaka Hameedun Majeed.\"\n\"Indeed, You are\nPraiseworthy, Glorious.\"\n\nEvery prayer upon the Prophet\nends with His glory.",
    icon: "Heart",
  },
  {
    text: "Human glory fades.\nKingdoms crumble.\nBeauty withers.\nFame disappears.\n\nThe glory of Al-Majeed\nnever fades.\nNever diminishes.\nNever ends.\n\nHe was glorious\nbefore creation—\nand will be glorious\nlong after it ends.",
    icon: "Sun",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "رَحْمَتُ اللَّهِ وَبَرَكَاتُهُ عَلَيْكُمْ أَهْلَ الْبَيْتِ ۚ إِنَّهُ حَمِيدٌ مَّجِيدٌ",
  ayahReference: "Surah Hud 11:73",
  translation: "\"The mercy of Allah\nand His blessings\nbe upon you,\npeople of the house.\nIndeed, He is Praiseworthy,\nGlorious (Al-Majeed).\"",
  nameArabic: "ٱلْمَجِيدُ",
  nameTransliteration: "Al-Majeed",
  nameSubtitle: "The Glorious • The Most Magnificent",
  explanationPoints: [
    { icon: "BookOpen", text: "The Quran is described as Majeed—His words themselves are glorious" },
    { icon: "Star", text: "His Throne is Majeed—His seat of authority reflects infinite glory" },
    { icon: "Sparkles", text: "Every action of His—creating, sustaining, forgiving—is glorious" },
    { icon: "Heart", text: "Every salawat upon the Prophet ends with His glory: Hameedun Majeed" },
  ],
  closingText: "Al-Majeed is the Glorious.\nHis words are glorious.\nHis Throne is glorious.\nHis actions are glorious.\n\nHuman glory fades—\nHis glory is eternal.\n\nInnaka Hameedun Majeed.",
  audioFileName: "hud-11-73",
};

export function AlMajeedStory({ nameId }: { nameId: string }) {
  return <MultiScreenStory nameId={nameId} screens={screens} finalReveal={finalReveal} gradientColors={["#1a140d", "#2b2014", "#140f08"]} />;
}
