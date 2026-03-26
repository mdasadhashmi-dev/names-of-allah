"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Surah Al-Ikhlas.\n\nFour verses.\nThe Prophet ﷺ said\nit equals one-third\nof the Quran.\n\nOne-third.\nFour verses.\n\nBecause it captures\nthe essence of who Allah is.",
    icon: "BookOpen",
  },
  {
    text: "\"Say: He is Allah,\nthe One.\nAllah, As-Samad.\"\n\n— Surah Al-Ikhlas 112:1-2\n\nAs-Samad.\n\nThe One all creation\nturns to in need.\nThe Eternal Refuge.\nThe One who is sought\nby everything.",
    icon: "Quote",
  },
  {
    text: "As-Samad:\nHe is turned to—\nbut turns to no one.\n\nEvery creature calls on Him.\nBut He calls on no one.\n\nEvery being needs Him.\nBut He needs no being.\n\nAll arrows point to Him.\nNone point away.",
    icon: "Star",
  },
  {
    text: "He needs no food.\nNo rest.\nNo sleep.\nNo support.\nNo advisor.\nNo helper.\n\n\"Neither drowsiness\novertakes Him\nnor sleep.\"\n\n— Ayatul Kursi\n\nAs-Samad is complete.\nAbsolutely.\nTotally.\nForever.",
    icon: "Shield",
  },
  {
    text: "When people fail you—\nAs-Samad remains.\n\nWhen money runs out—\nAs-Samad remains.\n\nWhen plans collapse—\nAs-Samad remains.\n\nWhen health deteriorates—\nAs-Samad remains.\n\nEverything else\nis unreliable.\nAs-Samad never is.",
    icon: "Heart",
  },
  {
    text: "The Prophet ﷺ\nloved this surah.\n\nA companion recited it\nin every prayer.\nOthers complained.\nThe Prophet ﷺ asked him why.\n\nHe said:\n\"Because it describes\nAr-Rahman.\nAnd I love\nto recite it.\"\n\nThe Prophet ﷺ said:\n\"Your love of it\nwill admit you\nto Paradise.\"\n\n— Sahih Al-Bukhari",
    icon: "Sparkles",
  },
  {
    text: "When you're drowning\nin worry—\n\nQul Huwa Allahu Ahad.\nAllahu As-Samad.\n\nWhen the world\nis crumbling—\n\nQul Huwa Allahu Ahad.\nAllahu As-Samad.\n\nFour verses\nthat contain\nthe ultimate refuge.",
    icon: "Moon",
  },
  {
    text: "As-Samad.\n\nThe One\nall creation depends on.\nThe One\nwho depends on nothing.\n\nThe Eternal Refuge\nwhen every other refuge\nhas failed.\n\nTurn to As-Samad—\nand you will never\nbe turned away.",
    icon: "Sun",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "اللَّهُ الصَّمَدُ",
  ayahReference: "Surah Al-Ikhlas 112:2",
  translation: "\"Allah, the Eternal Refuge\n(As-Samad).\"",
  nameArabic: "ٱلصَّمَدُ",
  nameTransliteration: "As-Samad",
  nameSubtitle: "The Eternal Refuge • The Absolute",
  explanationPoints: [
    { icon: "BookOpen", text: "Surah Al-Ikhlas equals one-third of the Quran—As-Samad is its centerpiece" },
    { icon: "Star", text: "All creation turns to Him, but He turns to no one—complete self-sufficiency" },
    { icon: "Heart", text: "When people, money, plans, and health fail—As-Samad always remains" },
    { icon: "Sparkles", text: "Love of this surah admitted a companion to Paradise—love it deeply" },
  ],
  closingText: "As-Samad is the Eternal Refuge.\nAll of creation depends on Him.\nHe depends on nothing.\n\nWhen everything else fails—\nAs-Samad remains.\n\nAllahu As-Samad.",
  audioFileName: "al-ikhlas-112-2",
};

export function AsSamadStory({ nameId }: { nameId: string }) {
  return <MultiScreenStory nameId={nameId} screens={screens} finalReveal={finalReveal} gradientColors={["#14100d", "#221a14", "#0f0b08"]} />;
}
