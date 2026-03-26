"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "There was a man\nwho killed 99 people.\n\nNinety-nine souls.\n\nThen he felt something\nstirring inside him—\nregret.",
    icon: "AlertTriangle",
  },
  {
    text: "He went to a monk\nand asked:\n\n\"I have killed 99 people.\nIs there any chance\nof repentance for me?\"\n\nThe monk said: \"No.\"\n\nSo he killed the monk too.\n\nOne hundred.",
    icon: "XCircle",
  },
  {
    text: "But the regret\ndid not leave.\n\nHe found a scholar\nand asked the same question.\n\nThe scholar said:\n\n\"Who can stand between you\nand repentance?\nGo to such-and-such town.\nThere are people who worship Allah.\nWorship with them.\"",
    icon: "MessageCircle",
  },
  {
    text: "He set out.\n\nBut on the way,\ndeath overtook him.\n\nHe died on the road—\nbetween the town of sin\nand the town of repentance.",
    icon: "Map",
  },
  {
    text: "The angels of mercy\nand the angels of punishment\ndisputed over him.\n\nWho would take his soul?\n\nHe was a killer of 100.\nBut he died\ntrying to repent.",
    icon: "Scale",
  },
  {
    text: "Allah commanded\nthe earth itself to move.\n\nThe town of repentance\nwas brought closer.\nThe town of sin\nwas pushed farther.\n\nThey measured.\nHe was one hand-span closer\nto repentance.",
    icon: "ArrowRight",
  },
  {
    text: "The angels of mercy\ntook him.\n\nA man who killed 100 people—\nforgiven.\n\nNot because he deserved it.\nBecause he turned\ntoward Al-Ghafoor.\n\n— Sahih Bukhari & Muslim",
    icon: "Heart",
  },
  {
    text: "Allah says:\n\n\"O My servants\nwho have transgressed\nagainst themselves,\ndo not despair\nof the mercy of Allah.\n\nIndeed, Allah forgives\nall sins.\"\n\n— Surah Az-Zumar 39:53",
    icon: "Quote",
  },
  {
    text: "If Al-Ghafoor forgave\na man who killed 100—\n\nwhat sin of yours\nis too great?\n\nThe door is open.\nIt has always been open.\n\nAl-Ghafoor is waiting\nfor you to walk through it.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ ۚ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا",
  ayahReference: "Surah Az-Zumar 39:53",
  translation: "\"O My servants who have\ntransgressed against themselves,\ndo not despair\nof the mercy of Allah.\nIndeed, Allah forgives\nall sins.\"",
  nameArabic: "ٱلْغَفُورُ",
  nameTransliteration: "Al-Ghafoor",
  nameSubtitle: "The All-Forgiving • The Ever-Forgiving",
  explanationPoints: [
    { icon: "Heart", text: "A man who killed 100 was forgiven—because he turned back" },
    { icon: "ArrowRight", text: "Allah moved the earth itself to bring him closer to mercy" },
    { icon: "Scale", text: "His forgiveness is not based on your sin—but on your sincerity" },
    { icon: "Sparkles", text: "\"Allah forgives ALL sins\"—no exception, no limit, no condition but sincerity" },
  ],
  closingText: "Al-Ghafoor forgives all sins.\nHe forgave a killer of 100\nwho died trying to repent.\n\nNo sin is too great.\nNo past is too dark.\n\nTurn to Al-Ghafoor.\nHe is already waiting.",
  audioFileName: "al-zumar-39-53",
};

export function AlGhafoorStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#0d1420", "#142030", "#080e16"]}
    />
  );
}
