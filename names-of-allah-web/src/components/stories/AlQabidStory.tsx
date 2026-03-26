"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "You prayed for something.\nYou prayed hard.\nYou prayed long.\n\nAnd the answer was: No.\n\nThe door closed.\nThe opportunity vanished.\nThe person left.",
    icon: "Lock",
  },
  {
    text: "It felt like punishment.\nLike abandonment.\nLike Allah wasn't listening.\n\nBut what if the closed door\nwas the answer?",
    icon: "HelpCircle",
  },
  {
    text: "Musa's mother\nwas told to place her baby\nin a river.\n\nHer child—taken from her arms.\n\nAl-Qabid withheld her son.\nBut only for a moment.",
    icon: "Waves",
  },
  {
    text: "The river carried Musa\ninto Pharaoh's palace.\n\nThe very tyrant who killed\nIsraeli children—\nraised the one\nwho would free them.\n\nThe withholding\nwas the plan.",
    icon: "Crown",
  },
  {
    text: "Ya'qub lost Yusuf\nfor decades.\n\nAllah withheld his son.\n\nBut that withholding\nmade Yusuf\nthe minister of Egypt\nwho saved an entire region\nfrom famine.",
    icon: "Package",
  },
  {
    text: "The Prophet ﷺ said:\n\n\"None of you should say:\n'O Allah, forgive me if You will.'\nRather be decisive in asking.\nFor nobody can compel Allah\nto do anything.\"\n\n— Sahih Bukhari",
    icon: "Quote",
  },
  {
    text: "But when He withholds—\nit is not refusal.\nIt is redirection.\n\nThe job you didn't get\nmay have destroyed your health.\nThe person who left\nmay have broken your faith.",
    icon: "ArrowRight",
  },
  {
    text: "Al-Qabid withholds\nwith the same mercy\nthat Al-Basit gives.\n\nA parent who takes\na sharp object from a child\nis not being cruel.\n\nThey are being loving.",
    icon: "Heart",
  },
  {
    text: "When the door closes,\ndon't bang on it.\n\nTurn around.\n\nAl-Qabid closed it\nbecause He sees\nwhat's behind it—\nand you don't.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "مَّن ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا فَيُضَاعِفَهُ لَهُ أَضْعَافًا كَثِيرَةً ۚ وَاللَّهُ يَقْبِضُ وَيَبْسُطُ",
  ayahReference: "Surah Al-Baqarah 2:245",
  translation: "\"And Allah withholds\nand extends,\nand to Him\nyou will be returned.\"",
  nameArabic: "ٱلْقَابِضُ",
  nameTransliteration: "Al-Qabid",
  nameSubtitle: "The Withholder • The Restrainer",
  explanationPoints: [
    { icon: "Lock", text: "A closed door is not punishment—it is protection you cannot see" },
    { icon: "Waves", text: "Musa was taken from his mother—and placed in a palace" },
    { icon: "Heart", text: "He withholds with the same love with which He gives" },
    { icon: "ArrowRight", text: "Every rejection may be a redirection toward something better" },
  ],
  closingText: "Al-Qabid withholds with wisdom.\nWhat He takes from you\nis not loss—it is guidance.\n\nTrust the closed doors.\nThey are protecting you\nfrom what you cannot see.",
  audioFileName: "al-baqarah-2-245",
};

export function AlQabidStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#141018", "#1f1826", "#0d0a10"]}
    />
  );
}
