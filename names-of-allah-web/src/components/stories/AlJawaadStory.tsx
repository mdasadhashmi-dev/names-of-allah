"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Right now,\nyour heart is beating.\nYour lungs are filling.\nYour blood is flowing.\n\nYou didn't ask for any of it.\n\nSomeone is giving\nwithout being asked.",
    icon: "Heart",
  },
  {
    text: "The Prophet ﷺ said:\n\n\"Allah's Hand is full,\nand nothing diminishes it—\nspending day and night.\"\n\n— Sahih Bukhari 7411\n\nDay and night.\nSince the beginning of time.",
    icon: "Quote",
  },
  {
    text: "Think about what He has spent.\n\nEvery sunrise for billions of years.\nEvery raindrop that ever fell.\nEvery breath of every creature\nthat has ever lived.\n\nAnd His Hand\nis still full.",
    icon: "Sun",
  },
  {
    text: "He gave the universe—\nand it cost Him nothing.\n\nHe gave the oceans,\nthe mountains,\nthe galaxies—\n\nand not a single thing\nwas diminished\nfrom His dominion.",
    icon: "Globe",
  },
  {
    text: "Both of His Hands are right hands.\nBoth give.\n\nThere is no left hand\nthat withholds.\n\nHis generosity\nhas no off-switch.\nNo budget.\nNo limit.",
    icon: "Infinity",
  },
  {
    text: "He gives the believer\nand the denier alike.\n\nThe sun doesn't check\nyour faith before it rises.\n\nThe rain doesn't ask\nif you prayed.\n\nThat is Al-Jawaad—\nHe gives because giving\nis who He is.",
    icon: "Droplet",
  },
  {
    text: "You cannot count His gifts.\n\nNot the oxygen in this breath.\nNot the neurons firing\nas you read this.\nNot the mercy holding\nyour atoms together.\n\nBillions of gifts.\nEvery second.",
    icon: "Sparkles",
  },
  {
    text: "Al-Jawaad.\n\nThe Munificent.\nThe One whose generosity\nneeds no reason,\nno request,\nno deserving.\n\nHe gave you life itself—\nand He is still giving.",
    icon: "Gem",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "وَإِن تَعُدُّوا نِعْمَةَ اللَّهِ لَا تُحْصُوهَا ۗ إِنَّ اللَّهَ لَغَفُورٌ رَّحِيمٌ",
  ayahReference: "Surah An-Nahl 16:18",
  translation: "\"And if you should count\nthe favors of Allah,\nyou could not enumerate them.\nIndeed, Allah is Forgiving and Merciful.\"",
  nameArabic: "ٱلْجَوَّادُ",
  nameTransliteration: "Al-Jawaad",
  nameSubtitle: "The Munificent • The Generous Giver",
  explanationPoints: [
    { icon: "Infinity", text: "His Hand is always full — spending day and night has never diminished it" },
    { icon: "Sun", text: "He gives without being asked — your heartbeat, your breath, your sight" },
    { icon: "Globe", text: "He gave the entire universe and it cost Him nothing from His dominion" },
    { icon: "Gem", text: "Both His Hands are right hands — both give, neither withholds" },
  ],
  closingText: "Al-Jawaad is the source\nof every gift you have ever received.\n\nThe air in your lungs,\nthe love in your heart,\nthe ground beneath your feet.\n\nYou could never count it.\nSo begin with gratitude.",
  audioFileName: "an-nahl-16-18",
};

export function AlJawaadStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#141008", "#201a0e", "#0e0c05"]}
    />
  );
}
