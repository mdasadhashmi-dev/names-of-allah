"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Every king who ever ruled—\ndied.\n\nPharaoh. Nimrod. Alexander.\nEvery empire that rose—\neventually fell.\n\nNothing in this world\nwas built to last.",
    icon: "Crown",
  },
  {
    text: "The Prophet Muhammad ﷺ\nburied six of his\nseven children\nwith his own hands.\n\nIbrahim, his infant son,\ndied in his arms.\n\nHe wept and said:\n\"The eyes shed tears\nand the heart grieves.\"",
    icon: "Heart",
  },
  {
    text: "The companions buried\ntheir Prophet.\n\nTheir children buried them.\n\nGeneration after generation—\neach one returned to the earth.\n\nNo one was exempt.",
    icon: "Users",
  },
  {
    text: "Every person you love\nwill one day leave.\n\nYour parents. Your children.\nYour closest friend.\n\nAnd one day,\nyou will leave too.",
    icon: "Clock",
  },
  {
    text: "But there is One\nwho never dies.\n\nWho never sleeps.\nWho never tires.\nWho never changes.\n\nWhile everything fades—\nHe remains.",
    icon: "Infinity",
  },
  {
    text: "\"Allah—there is no deity\nexcept Him.\n\nAl-Hayy, Al-Qayyum.\n\nNeither drowsiness\novertakes Him nor sleep.\"\n\nThis is Ayat al-Kursi—\nthe greatest verse\nin the Quran.",
    icon: "BookOpen",
  },
  {
    text: "The Prophet ﷺ said:\n\n\"Whoever recites Ayat al-Kursi\nafter every obligatory prayer—\nnothing prevents him\nfrom entering Paradise\nexcept death.\"\n\n— An-Nasa'i",
    icon: "Quote",
  },
  {
    text: "\"Everyone upon the earth\nwill perish.\n\nAnd there will remain\nthe Face of your Lord,\nOwner of Majesty and Honor.\"\n\nEverything ends.\nHe does not.",
    icon: "Sparkles",
  },
  {
    text: "Al-Hayy.\n\nThe Ever-Living.\nThe Undying.\nThe Eternal.\n\nIn a world where\neverything you hold\nwill slip away—\n\nHe is the one thing\nthat will never leave you.",
    icon: "Sun",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ",
  ayahReference: "Surah Al-Baqarah 2:255",
  translation: "\"Allah—there is no deity\nexcept Him,\nthe Ever-Living (Al-Hayy),\nthe Sustainer of existence.\nNeither drowsiness overtakes Him\nnor sleep.\"",
  nameArabic: "ٱلْحَيُّ",
  nameTransliteration: "Al-Hayy",
  nameSubtitle: "The Ever-Living • The Eternal",
  explanationPoints: [
    { icon: "Infinity", text: "He never began and will never end—the only truly eternal being" },
    { icon: "Eye", text: "He never sleeps, never tires, never loses awareness of you" },
    { icon: "Heart", text: "Every attachment will end except your connection to Al-Hayy" },
    { icon: "BookOpen", text: "Ayat al-Kursi—the greatest verse—begins with His eternal life" },
  ],
  closingText: "Al-Hayy is the Ever-Living.\nEverything you know will pass.\nEvery hand you hold will let go.\n\nBut He remains.\nForever awake. Forever present.\nForever alive.\n\nHold onto Al-Hayy.",
  audioFileName: "al-baqarah-2-255",
};

export function AlHayyStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#050a1a", "#0a1133", "#030714"]}
    />
  );
}
