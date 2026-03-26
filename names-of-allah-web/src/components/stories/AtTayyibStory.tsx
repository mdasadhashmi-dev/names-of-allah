"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "The Prophet ﷺ said:\n\n\"Allah is Tayyib — Pure —\nand He accepts\nonly what is pure.\"\n\n— Sahih Muslim 1015\n\nThis one sentence\nchanges everything.",
    icon: "Quote",
  },
  {
    text: "Then the Prophet ﷺ\ndescribed a man.\n\nA traveler.\nOn a long journey.\nDisheveled. Dusty.\nExhausted.\n\nHe raises his hands\nto the sky and cries:\n\n\"O Lord! O Lord!\"",
    icon: "Wind",
  },
  {
    text: "His du'a is desperate.\nHis need is real.\nHis hands are raised\nto the heavens.\n\nBut his food is haram.\nHis drink is haram.\nHis clothing\nis from haram.\n\nThe Prophet ﷺ asked:\n\"How can his du'a\nbe answered?\"",
    icon: "Cloud",
  },
  {
    text: "At-Tayyib is Pure.\nAbsolutely pure.\n\nAnd purity\ndoes not receive\nwhat is impure.\n\nA clean vessel\ncannot hold dirty water\nand remain clean.",
    icon: "Droplet",
  },
  {
    text: "He wants purity from you.\n\nPure intentions —\nnot actions performed\nfor the eyes of people.\n\nPure earnings —\nnot wealth built\non the backs of the wronged.\n\nPure heart —\nnot one poisoned\nby envy and malice.",
    icon: "Heart",
  },
  {
    text: "\"O you who believe,\neat from the good things\nwhich We have\nprovided for you.\"\n\n— Surah Al-Baqarah 2:172\n\nHe gave you\nwhat is pure and good.\n\nHe asks you\nto seek the same.",
    icon: "BookOpen",
  },
  {
    text: "The pure word\nrises to Him.\nThe pure deed\nis accepted by Him.\nThe pure heart\nis closest to Him.\n\n\"To Him ascends\nthe good word,\nand righteous work\nraises it.\"\n\n— Surah Fatir 35:10",
    icon: "ArrowUp",
  },
  {
    text: "At-Tayyib.\n\nThe Pure One\nwho created purity.\n\nHe is pure\nin His essence,\npure in His names,\npure in His actions.\n\nAnd He invites you\nto purify yourself—\nso you may\ndraw near to Him.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُلُوا مِن طَيِّبَاتِ مَا رَزَقْنَاكُمْ",
  ayahReference: "Surah Al-Baqarah 2:172",
  translation: "\"O you who believe,\neat from the good things\nwhich We have provided for you.\"",
  nameArabic: "ٱلطَّيِّبُ",
  nameTransliteration: "At-Tayyib",
  nameSubtitle: "The Pure One • The Good",
  explanationPoints: [
    { icon: "Sparkles", text: "Allah is pure in His essence, His names, His attributes, and His actions" },
    { icon: "ArrowUp", text: "Only what is pure in intention and source ascends to Him and is accepted" },
    { icon: "Heart", text: "He asks for purity of heart — free from envy, malice, and arrogance" },
    { icon: "Scale", text: "Pure earnings, pure food, pure words — these are the keys to answered du'a" },
  ],
  closingText: "At-Tayyib is the Pure One.\nHe does not accept\nwhat is contaminated.\n\nPurify your earnings.\nPurify your intentions.\nPurify your heart.\n\nAnd you will find\nyour du'a ascending\nstraight to the One\nwho is waiting to answer.",
  audioFileName: "al-baqarah-2-172",
};

export function AtTayyibStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#10100c", "#1c1c14", "#0c0c08"]}
    />
  );
}
