"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Victory at Makkah\nwas delayed 20 years.\n\nTwenty years\nof exile.\nOf persecution.\nOf longing.\n\nThe Prophet ﷺ left Makkah\nwith tears in his eyes.\nHe didn't return\nuntil Al-Muakhkhir\ndecided it was time.",
    icon: "Clock",
  },
  {
    text: "For 13 years in Makkah—\nthe Prophet ﷺ was tested.\n\nMocked. Beaten.\nBoycotted. Starved.\nHis followers tortured.\nHis family killed.\n\nWhy didn't Allah\ngrant victory sooner?\n\nBecause Al-Muakhkhir\nwas building something\nthat couldn't be rushed.",
    icon: "Mountain",
  },
  {
    text: "Yusuf waited\nin a prison cell.\n\nFalsely accused.\nForgotten by the one\nhe helped.\nYears passed.\n\nBut Al-Muakhkhir\nwas not neglecting him.\nHe was positioning him—\nfrom prisoner\nto minister of Egypt.",
    icon: "Star",
  },
  {
    text: "Musa spent 10 years\nin Madyan.\n\nA fugitive.\nA shepherd.\nFar from his people.\n\nHe must have wondered:\n\"When will I go back?\"\n\nAl-Muakhkhir said: Not yet.\nFirst, the burning bush.\nFirst, the staff.\nFirst, readiness.",
    icon: "Sparkles",
  },
  {
    text: "Allah delays\nto test patience.\n\nPatience is not passive.\nIt is the most active\nform of worship.\n\nThe one who waits\nwith trust in Al-Muakhkhir\nis performing\none of the highest acts\nof faith.",
    icon: "Heart",
  },
  {
    text: "He delays\nto strengthen character.\n\nThe Prophet ﷺ needed Makkah\nto forge his resilience.\nYusuf needed prison\nto learn wisdom.\nMusa needed Madyan\nto gain humility.\n\nThe delay was the training.",
    icon: "Shield",
  },
  {
    text: "What seems late\nis perfectly timed\nby Al-Muakhkhir.\n\nThe job you didn't get.\nThe marriage that didn't happen.\nThe door that closed.\n\nAl-Muakhkhir closed it\nbecause something better\nwas being prepared.",
    icon: "Lightbulb",
  },
  {
    text: "\"And do not think\nthat Allah is unaware\nof what the wrongdoers do.\nHe only delays them\nfor a Day\nwhen eyes will stare\nin horror.\"\n\n— Surah Ibrahim 14:42\n\nHe is not late.\nHe is not neglectful.\nHe is Al-Muakhkhir—\nand His timing is perfect.",
    icon: "Sun",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "وَلَا تَحْسَبَنَّ اللَّهَ غَافِلًا عَمَّا يَعْمَلُ الظَّالِمُونَ",
  ayahReference: "Surah Ibrahim 14:42",
  translation: "\"And never think\nthat Allah is unaware\nof what the wrongdoers do.\"",
  nameArabic: "ٱلْمُؤَخِّرُ",
  nameTransliteration: "Al-Muakhkhir",
  nameSubtitle: "The Delayer • The Postponer",
  explanationPoints: [
    { icon: "Clock", text: "Victory at Makkah was delayed 20 years—but arrived at the perfect moment" },
    { icon: "Star", text: "Yusuf waited years in prison—then rose from prisoner to minister" },
    { icon: "Shield", text: "He delays to strengthen character—the delay itself is the training" },
    { icon: "Lightbulb", text: "What seems late is perfectly timed—closed doors mean better ones ahead" },
  ],
  closingText: "Al-Muakhkhir is the Delayer.\n\nNot out of neglect.\nNot out of forgetfulness.\n\nBut out of wisdom.\n\nYour delay is not denial.\nIt is Al-Muakhkhir\npreparing something\nyou cannot yet imagine.",
  audioFileName: "ibrahim-14-42",
};

export function AlMuakhkhirStory({ nameId }: { nameId: string }) {
  return <MultiScreenStory nameId={nameId} screens={screens} finalReveal={finalReveal} gradientColors={["#10100d", "#1a1a14", "#0a0a08"]} />;
}
