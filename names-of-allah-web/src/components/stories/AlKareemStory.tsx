"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "You ask a person once—\nthey give.\n\nYou ask again—\nthey hesitate.\n\nA third time—\nthey turn away.\n\nHuman generosity has limits.\nAl-Kareem's does not.",
    icon: "Hand",
  },
  {
    text: "The Prophet ﷺ said:\n\n\"Allah's hand is full,\nand no amount of spending\ndiminishes it,\ngiving generously\nday and night.\"\n\n\"Do you not see\nwhat He has spent\nsince He created\nthe heavens and the earth?\"\n\n— Sahih Bukhari",
    icon: "Quote",
  },
  {
    text: "He created you\nwithout you asking.\n\nHe gave you eyes\nyou didn't request.\n\nHe gave you a heart\nthat beats without\nyour permission.\n\nAll before you existed\nto ask.",
    icon: "Heart",
  },
  {
    text: "When you sin—\nHe covers you.\nHe doesn't expose you.\n\nWhen you forget Him—\nHe still provides.\n\nWhen you turn away—\nHe still waits.\n\nThis is generosity\nbeyond comprehension.",
    icon: "Shield",
  },
  {
    text: "He is generous\neven in how He records.\n\nOne good deed = ten rewards.\nOne sin = one sin.\n\nAnd if you intended\na good deed but didn't do it—\nHe writes it as a good deed.\n\nIf you intended a sin\nbut didn't do it—\nHe writes it as a good deed.\n\n— Sahih Bukhari",
    icon: "BookOpen",
  },
  {
    text: "He sent 124,000 prophets.\nRevealed 4 major books.\nCreated Paradise\nwith what no eye has seen.\n\nAll for you.\n\nNot because you earned it.\nBecause He is Al-Kareem.",
    icon: "Globe",
  },
  {
    text: "The Prophet ﷺ said:\n\n\"Allah is generous\nand loves generosity.\"\n\n— Sahih al-Tirmidhi\n\nHe is generous\nand wants you\nto reflect His generosity\nin how you treat others.",
    icon: "Users",
  },
  {
    text: "Al-Kareem gives\nwithout being asked.\nGives more than you deserve.\nGives to those\nwho don't thank Him.\nGives to those\nwho deny Him.\n\nHis generosity\nhas no conditions.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "يَا أَيُّهَا الْإِنسَانُ مَا غَرَّكَ بِرَبِّكَ الْكَرِيمِ",
  ayahReference: "Surah Al-Infitar 82:6",
  translation: "\"O humanity,\nwhat has deceived you\nconcerning your Lord,\nthe Most Generous (Al-Kareem)?\"",
  nameArabic: "ٱلْكَرِيمُ",
  nameTransliteration: "Al-Kareem",
  nameSubtitle: "The Most Generous • The Most Noble",
  explanationPoints: [
    { icon: "Hand", text: "His hand is full—giving day and night without ever diminishing" },
    { icon: "BookOpen", text: "He multiplies good deeds by 10 and records good intentions as deeds" },
    { icon: "Shield", text: "He covers your sins, provides despite forgetfulness, waits despite distance" },
    { icon: "Heart", text: "His generosity precedes your existence—He gave before you could ask" },
  ],
  closingText: "Al-Kareem is endlessly generous.\nHe gave you life before you asked.\nHe provides even when you forget.\n\nWhat has deceived you\nabout your Lord,\nthe Most Generous?",
  audioFileName: "al-fajr-89-15",
};

export function AlKareemStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#1a140d", "#2b2014", "#140f08"]}
    />
  );
}
