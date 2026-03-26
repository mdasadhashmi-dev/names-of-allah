"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Imagine raising your hands\nto the sky.\n\nBroken. Desperate.\nBarely holding it together.\n\nAnd the King of kings\nlooks at you—\n\nand feels shy\nto let your hands\ncome back empty.",
    icon: "ArrowUp",
  },
  {
    text: "The Prophet ﷺ said:\n\n\"Your Lord is Generous and Modest.\nWhen His servant raises his hands\nto Him in supplication,\nHe is shy to return them empty.\"\n\n— Sunan Abu Dawud 1488",
    icon: "Quote",
  },
  {
    text: "Shy.\n\nThe Lord of the heavens\nand the earth.\nThe One who needs nothing\nand no one.\n\nFeels shy.\n\nNot because He is weak—\nbut because His nobility\nis beyond comprehension.",
    icon: "Crown",
  },
  {
    text: "You sinned in the morning\nand raised your hands at night.\n\nHe knew what you did.\nHe saw every moment.\n\nBut He didn't expose you.\nHe didn't humiliate you.\n\nHe covered you.\nThat is His modesty.",
    icon: "Shield",
  },
  {
    text: "He could display your sins\non a screen for the world.\n\nEvery secret thought.\nEvery hidden mistake.\nEvery broken promise.\n\nBut He veils.\nHe conceals.\nHe protects your dignity—\neven when you forgot His.",
    icon: "Eye",
  },
  {
    text: "On the Day of Judgment,\nHe will bring His servant close.\n\nPlace His cover over him.\nAnd say privately:\n\"Do you remember this sin?\nDo you remember that sin?\"\n\nThe servant will say yes.\n\nThen Allah will say:\n\"I concealed it for you\nin the world,\nand I forgive it today.\"",
    icon: "BookOpen",
  },
  {
    text: "He gives\neven when you don't deserve it.\n\nHe forgives\neven when you don't ask.\n\nHe covers\neven when you don't realize\nyou need covering.\n\nThis is divine modesty—\nhonour beyond measure.",
    icon: "Sparkles",
  },
  {
    text: "Al-Hayyiyy.\n\nThe One who possesses\nhonourable modesty.\n\nWho is too generous\nto turn you away.\nToo noble to expose you.\nToo merciful to let\nyour hands return empty.",
    icon: "Heart",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ",
  ayahReference: "Surah Az-Zumar 39:53",
  translation: "\"Say, O My servants who have\ntransgressed against themselves:\ndo not despair\nof the mercy of Allah.\"",
  nameArabic: "ٱلْحَيِيُّ",
  nameTransliteration: "Al-Hayyiyy",
  nameSubtitle: "The One Who Possesses Honourable Modesty",
  explanationPoints: [
    { icon: "ArrowUp", text: "He is shy to let your raised hands return empty from supplication" },
    { icon: "Shield", text: "He conceals your sins in this life out of divine nobility and modesty" },
    { icon: "Crown", text: "His modesty is not weakness — it is the highest form of honour and generosity" },
    { icon: "Heart", text: "He gives even when you don't deserve it, forgives even before you ask" },
  ],
  closingText: "Al-Hayyiyy is too noble\nto turn away a hand\nraised in need.\n\nSo raise your hands.\nNo matter what you've done.\nNo matter how far you've strayed.\n\nHe is shy\nto send you back empty.",
  audioFileName: "az-zumar-39-53",
};

export function AlHayyiyyStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#0c1010", "#121a1a", "#080e0e"]}
    />
  );
}
