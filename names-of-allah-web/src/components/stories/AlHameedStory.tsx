"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "\"Alhamdulillah.\"\n\nThe very first word\nof the Quran\nafter Bismillah.\n\n\"All praise is due to Allah,\nLord of the worlds.\"\n\nThe Book of Allah\nbegins with His praise.\nBecause He deserves it\nbefore anything else.",
    icon: "BookOpen",
  },
  {
    text: "The people of Paradise—\nafter entering\neternal bliss—\n\ntheir final words\nwill be:\n\n\"Alhamdulillah,\nLord of the worlds.\"\n\n— Surah Yunus 10:10\n\nPraise is the first word\nand the last word.",
    icon: "Star",
  },
  {
    text: "Ibrahim praised Him\nalone.\n\nWhen thrown into fire—\n\"Alhamdulillah.\"\nWhen told to leave his son\nin the desert—\n\"Alhamdulillah.\"\nWhen asked to sacrifice\nhis son—\n\"Alhamdulillah.\"\n\nHe praised Allah\nthrough every test.",
    icon: "Heart",
  },
  {
    text: "Al-Hameed is praiseworthy\nwhether you praise Him\nor not.\n\nIf every human\nstopped praising Him—\nHe would still be\nAl-Hameed.\n\nHis worthiness of praise\ndoes not depend\non your recognition.",
    icon: "Crown",
  },
  {
    text: "Creation itself\npraises Him.\n\nThe birds in formation.\nThe thunder that roars.\nThe mountains at dawn.\n\n\"The seven heavens\nand the earth\nand whatever is in them\nexalt Him.\nAnd there is not a thing\nexcept that\nit exalts His praise.\"\n\n— Surah Al-Isra 17:44",
    icon: "Quote",
  },
  {
    text: "Dawud was given\na voice so beautiful\nthat mountains\nand birds\nwould join him\nin praising Allah.\n\nImagine—\nmountains singing.\nBirds harmonizing.\nAll in praise of Al-Hameed.",
    icon: "Music",
  },
  {
    text: "Even your difficulty\ncontains reasons for praise.\n\nThe illness\nthat erased your sins.\nThe loss\nthat brought you closer.\nThe hardship\nthat made you pray.\n\nAlhamdulillah\nfor what you understand—\nand what you don't yet.",
    icon: "Sparkles",
  },
  {
    text: "The Prophet ﷺ said:\n\n\"Alhamdulillah\nfills the scales.\"\n\n— Sahih Muslim\n\nTwo words.\nThey fill your scale\non the Day of Judgment.\n\nSay them.\nMean them.\nLive them.",
    icon: "Sun",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "صِرَاطِ الْعَزِيزِ الْحَمِيدِ",
  ayahReference: "Surah Ibrahim 14:1",
  translation: "\"The path of the Almighty,\nthe Praiseworthy (Al-Hameed).\"",
  nameArabic: "ٱلْحَمِيدُ",
  nameTransliteration: "Al-Hameed",
  nameSubtitle: "The Praiseworthy • The All-Laudable",
  explanationPoints: [
    { icon: "BookOpen", text: "The Quran begins with His praise—Alhamdulillah, Lord of the worlds" },
    { icon: "Star", text: "The people of Paradise will end with His praise—the first and last word" },
    { icon: "Heart", text: "Ibrahim praised Him through fire, exile, and sacrifice—never stopping" },
    { icon: "Sparkles", text: "Even your hardship contains reasons for praise—trust His wisdom" },
  ],
  closingText: "Al-Hameed is the Praiseworthy.\nThe Quran begins with His praise.\nParadise ends with His praise.\nCreation never stops His praise.\n\nAlhamdulillah.\nFor everything.",
  audioFileName: "ibrahim-14-1",
};

export function AlHameedStory({ nameId }: { nameId: string }) {
  return <MultiScreenStory nameId={nameId} screens={screens} finalReveal={finalReveal} gradientColors={["#14140a", "#222210", "#0f0f06"]} />;
}
