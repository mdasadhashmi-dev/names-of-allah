"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "When the qibla was changed\nfrom Jerusalem to Makkah—\nthe Muslims panicked.\n\n\"What about our prayers?\nAll those years\nfacing Jerusalem—\nwere they wasted?\nDid Allah reject them?\"",
    icon: "Globe",
  },
  {
    text: "Allah revealed:\n\n\"And never would Allah\nhave caused you\nto lose your faith.\n\nIndeed Allah is,\nto the people,\nAr-Rauf—Most Kind,\nand Merciful.\"\n\n— Surah Al-Baqarah 2:143\n\nYour past was not wasted.\nAr-Rauf would never\nlet your faith be lost.",
    icon: "Quote",
  },
  {
    text: "He is kind\nwith your mistakes.\n\nYou prayed wrong\nfor years? He accepts it.\nYou didn't know\na ruling? He forgives it.\nYou tried your best\nand fell short? He honors it.\n\nAr-Rauf does not\npunish sincere ignorance.",
    icon: "Heart",
  },
  {
    text: "He is kind\nwith your past.\n\nThe years you wasted.\nThe sins you committed.\nThe time you spent\nfar from Him.\n\nAr-Rauf does not\nhold your past\nagainst your present.\n\nHe sees who you are now—\nnot only who you were.",
    icon: "Clock",
  },
  {
    text: "He is kind\nwith your weakness.\n\nThe traveler can shorten prayer.\nThe sick can pray sitting.\nThe fasting person\ncan break fast if ill.\n\nEvery concession\nin this religion\nis a sign\nof the kindness\nof Ar-Rauf.",
    icon: "Shield",
  },
  {
    text: "His kindness\nis in every concession.\n\nWudu with sand\nwhen there's no water.\nCombining prayers\nwhen traveling.\nFeeding instead of fasting\nwhen elderly.\n\nHe made the religion\neasy—because He is\nAr-Rauf.",
    icon: "Sparkles",
  },
  {
    text: "The Prophet ﷺ said:\n\n\"Allah is more merciful\nto His servants\nthan a mother\nis to her child.\"\n\n— Sahih Al-Bukhari\n\nA mother's kindness—\nthe kindest thing\nyou've ever known—\nis a fraction\nof the kindness\nof Ar-Rauf.",
    icon: "User",
  },
  {
    text: "Ar-Rauf is kind.\n\nNot harsh.\nNot punitive.\nNot waiting for you to fail.\n\nHe is the One\nwho looks at your struggle\nand makes the path easier.\n\nWho looks at your weakness\nand grants concession.\n\nWho looks at your past\nand offers a new start.",
    icon: "Sun",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "إِنَّ اللَّهَ بِالنَّاسِ لَرَءُوفٌ رَّحِيمٌ",
  ayahReference: "Surah Al-Baqarah 2:143",
  translation: "\"Indeed Allah is,\nto the people,\nmost Kind (Ar-Rauf),\nMost Merciful.\"",
  nameArabic: "ٱلرَّءُوفُ",
  nameTransliteration: "Ar-Rauf",
  nameSubtitle: "The Most Kind • The Compassionate",
  explanationPoints: [
    { icon: "Globe", text: "When the qibla changed, He assured them—your past prayers were never lost" },
    { icon: "Heart", text: "He is kind with your mistakes, your past, and your weakness" },
    { icon: "Shield", text: "Every concession in Islam—shortened prayers, breaking fast—reflects His kindness" },
    { icon: "User", text: "His kindness surpasses even a mother's—the kindest force you've ever known" },
  ],
  closingText: "Ar-Rauf is the Most Kind.\n\nHe didn't reject\nyour imperfect past.\nHe made the religion\neasy for your weakness.\n\nHis kindness\nis woven into everything.\nRest in it.",
  audioFileName: "al-baqarah-2-143",
};

export function ArRaufStory({ nameId }: { nameId: string }) {
  return <MultiScreenStory nameId={nameId} screens={screens} finalReveal={finalReveal} gradientColors={["#140d10", "#22141a", "#0f080a"]} />;
}
