"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "On the Day of Judgment,\neveryone will stand\nbefore Allah.\n\nNo secrets.\nNo hidden deeds.\nNo whispered lies.\n\nEverything made clear.",
    icon: "Sun",
  },
  {
    text: "The books of deeds\nwill be opened.\n\nSome will receive theirs\nin their right hand.\nOthers in their left.\n\nAl-Mubeen makes\neverything manifest.",
    icon: "BookOpen",
  },
  {
    text: "\"On that Day,\nAllah will pay them\ntheir just due,\nand they will know\nthat Allah is\nthe Clear Truth.\"\n\n— Surah An-Nur 24:25",
    icon: "Quote",
  },
  {
    text: "In this world,\ntruth gets buried.\nJustice gets delayed.\nThe innocent suffer in silence.\n\nBut Al-Mubeen\nwill make everything clear.\n\nNothing stays hidden forever.",
    icon: "Eye",
  },
  {
    text: "He sent clear signs.\nClear prophets.\nA clear Book.\n\n\"This is a clear statement\nfor the people.\"\n— Surah Aal-Imran 3:138\n\nThe path was never unclear.\nWe simply chose not to see.",
    icon: "Sparkles",
  },
  {
    text: "Fir'awn thought\nhe could hide his tyranny.\nThe Quraysh thought\nthey could bury the truth.\n\nBut Al-Mubeen\nmade everything manifest.\n\nTruth always surfaces.",
    icon: "ArrowUpCircle",
  },
  {
    text: "Ibrahim stood alone\nbefore his people and said:\n\n\"I have turned my face\ntoward He who created\nthe heavens and the earth.\"\n\nThe truth was clear.\nHe chose to see it.",
    icon: "Star",
  },
  {
    text: "What truth are you\navoiding today?\n\nWhat is Al-Mubeen\nmaking clear to you\nthat you refuse to see?\n\nHis signs are everywhere—\nfor those willing to look.",
    icon: "Heart",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "يَوْمَئِذٍ يُوَفِّيهِمُ اللَّهُ دِينَهُمُ الْحَقَّ وَيَعْلَمُونَ أَنَّ اللَّهَ هُوَ الْحَقُّ الْمُبِينُ",
  ayahReference: "Surah An-Nur 24:25",
  translation: "\"On that Day, Allah will pay them\ntheir just due, and they will know\nthat Allah is the Clear Truth.\"",
  nameArabic: "ٱلْمُبِينُ",
  nameTransliteration: "Al-Mubeen",
  nameSubtitle: "The Clear • The Manifest Truth",
  explanationPoints: [
    { icon: "Sun", text: "Al-Mubeen makes all truth manifest — nothing stays hidden" },
    { icon: "BookOpen", text: "He sent a Clear Book with clear guidance for all of humanity" },
    { icon: "Eye", text: "On the Day of Judgment, every hidden deed will be made plain" },
    { icon: "Star", text: "His signs are clear in creation — for those who reflect" },
  ],
  closingText: "Al-Mubeen is the Clear Truth.\nHe makes manifest what is hidden,\nclarifies what is confused,\nand reveals what is concealed.\n\nIn a world of confusion,\nHe is the source of all clarity.",
  audioFileName: "an-nur-24-25",
};

export function AlMubeenStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#1a1a0d", "#262114", "#14120a"]}
    />
  );
}
