"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Every good thing\nyou have ever experienced\ncame from Al-Barr.\n\nEvery moment of joy.\nEvery taste of sweetness.\nEvery breath of fresh air.\nEvery laugh.\nEvery sunrise.\n\nAll from the Source\nof All Goodness.",
    icon: "Sun",
  },
  {
    text: "The food on your table.\n\nSomeone planted it.\nSomeone harvested it.\nSomeone transported it.\nSomeone cooked it.\n\nBut behind every hand\nthat touched it—\nwas Al-Barr.\n\nThe original Source\nof that provision.",
    icon: "Heart",
  },
  {
    text: "The love in your family.\n\nThe mother who stayed up\nwhen you were sick.\nThe father who worked\nwhen he was tired.\nThe sibling who forgave you.\n\nThat love—\nwas placed in their hearts\nby Al-Barr.",
    icon: "User",
  },
  {
    text: "The peace in your heart.\n\nThat calm after Fajr.\nThat serenity in sujud.\nThat quiet contentment\non a still night.\n\nNo money can buy\nthat peace.\nIt comes only\nfrom Al-Barr.",
    icon: "Moon",
  },
  {
    text: "He is good\nto believers\nand disbelievers alike.\n\nHe sends rain\non the just and unjust.\nHe feeds the grateful\nand the ungrateful.\nHe sustains the one\nwho worships Him\nand the one who denies Him.\n\nThat is the goodness\nof Al-Barr.",
    icon: "Waves",
  },
  {
    text: "His goodness\nhas no condition.\n\nHe doesn't say:\n\"Be perfect first,\nthen I'll be good to you.\"\n\nHe is good to you\nwhile you sin.\nWhile you forget.\nWhile you struggle.\n\nAl-Barr's goodness\nis unconditional.",
    icon: "Sparkles",
  },
  {
    text: "Even His tests\ncontain hidden good.\n\nThe illness\nthat erased years of sins.\nThe loss\nthat taught you gratitude.\nThe pain\nthat made you turn to Him.\n\nBehind every test—\nthe goodness of Al-Barr\nis at work.",
    icon: "Lightbulb",
  },
  {
    text: "\"Indeed, we used to\ninvoke Him before.\nIndeed, it is He\nwho is Al-Barr (the Good),\nthe Merciful.\"\n\n— Surah At-Tur 52:28\n\nThe people of Paradise\nwill look back\nand say:\nHe was always good.\nEven when we\ncouldn't see it.",
    icon: "Quote",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "إِنَّا كُنَّا مِن قَبْلُ نَدْعُوهُ ۖ إِنَّهُ هُوَ الْبَرُّ الرَّحِيمُ",
  ayahReference: "Surah At-Tur 52:28",
  translation: "\"Indeed, we used to\ninvoke Him before.\nIndeed, it is He\nwho is the Good (Al-Barr),\nthe Merciful.\"",
  nameArabic: "ٱلْبَرُّ",
  nameTransliteration: "Al-Barr",
  nameSubtitle: "The Source of All Goodness • The Kind",
  explanationPoints: [
    { icon: "Sun", text: "Every good thing you've experienced—joy, laughter, peace—came from Al-Barr" },
    { icon: "Heart", text: "The love in your family was placed in their hearts by His goodness" },
    { icon: "Waves", text: "He is good to all—believers and disbelievers, grateful and ungrateful" },
    { icon: "Lightbulb", text: "Even His tests contain hidden good—illness, loss, and pain carry purpose" },
  ],
  closingText: "Al-Barr is the Source\nof All Goodness.\n\nEvery joy. Every peace.\nEvery provision. Every love.\n\nHe was good to you\nbefore you knew Him.\nHe is good to you now.\nHe will always be good.",
  audioFileName: "at-tur-52-28",
};

export function AlBarrStory({ nameId }: { nameId: string }) {
  return <MultiScreenStory nameId={nameId} screens={screens} finalReveal={finalReveal} gradientColors={["#0d1412", "#142220", "#080f0d"]} />;
}
