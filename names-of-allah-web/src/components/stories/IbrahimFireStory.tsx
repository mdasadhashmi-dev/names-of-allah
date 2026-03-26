"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Ibrahim عَلَيْهِ ٱلسَّلَامُ\nlooked at his people's idols—\nstatues of stone and wood\nthey called gods.\n\nWhile they were away,\nhe shattered them all.\n\nAll except the largest one.",
    icon: "Hammer",
  },
  {
    text: "They returned furious.\n\n\"Who did this to our gods?\"\n\n\"Ask the big one,\"\nIbrahim said,\n\"if they can speak.\"\n\nThey knew the idols\ncould not speak.\nThey knew—and still\nthey chose anger.",
    icon: "Users",
  },
  {
    text: "They said:\n\n\"Burn him!\nDefend your gods—\nif you are to act!\"\n\nThe sentence was final.\nThe crowd demanded fire.",
    icon: "Flame",
  },
  {
    text: "They built a fire so massive\nit could be seen\nfrom miles away.\n\nSo hot that no one\ncould approach it.\n\nThey built a catapult\nto launch him in.",
    icon: "AlertTriangle",
  },
  {
    text: "In that moment—\nbetween the catapult\nand the inferno—\n\nJibreel came to Ibrahim.\n\n\"Do you need anything?\"\n\nIbrahim replied:\n\"Not from you.\nFrom Him alone.\"",
    icon: "Shield",
  },
  {
    text: "Ibn Abbas narrated:\n\nThe last words Ibrahim spoke\nbefore being thrown\ninto the fire were:\n\n\"Hasbiyallahu\nwa ni'mal wakeel.\"\n\n\"Allah is sufficient for me,\nand He is the best\nDisposer of affairs.\"\n\n— Sahih al-Bukhari",
    icon: "Quote",
  },
  {
    text: "He was thrown.\n\nThe flames roared.\nThe people watched.\n\nAnd then Allah spoke\nto the fire itself:\n\n\"O fire, be coolness\nand safety upon Ibrahim.\"",
    icon: "Snowflake",
  },
  {
    text: "The fire obeyed.\n\nIbrahim sat in the flames\nas if in a garden.\n\nNot a hair singed.\nNot a thread burned.\n\nThe fire that could\ndestroy everything—\ncould not touch\nthe one protected by Allah.",
    icon: "Leaf",
  },
  {
    text: "He did not rely\non his own strength.\nHe did not ask the angels.\nHe did not negotiate.\n\nHe said one sentence\nand handed everything\nto Al-Wakeel.\n\nAnd Al-Wakeel\nwas enough.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
  ayahReference: "Surah Ali 'Imran 3:173",
  translation: "\"Sufficient for us is Allah,\nand He is the best\nDisposer of affairs.\"",
  nameArabic: "ٱلْوَكِيلُ",
  nameTransliteration: "Al-Wakeel",
  nameSubtitle: "The Trustee • The Disposer of Affairs",
  explanationPoints: [
    { icon: "Flame", text: "Ibrahim was thrown into fire—and Allah made fire itself obey" },
    { icon: "Shield", text: "He refused help from Jibreel—his trust was in Allah alone" },
    { icon: "Quote", text: "\"Hasbiyallah\"—words spoken by Ibrahim and Muhammad ﷺ alike" },
    { icon: "Heart", text: "When you hand your affairs to Al-Wakeel, even fire becomes safety" },
  ],
  closingText: "Al-Wakeel is sufficient.\nWhen Ibrahim trusted Him,\nfire became a garden.\n\nWhat fire are you facing?\nHand it to Al-Wakeel.\n\nHasbiyallahu wa ni'mal wakeel.",
  audioFileName: "ali-imran-3-173",
};

export function IbrahimFireStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#1a0f05", "#2b1a0a", "#0f0903"]}
    />
  );
}
