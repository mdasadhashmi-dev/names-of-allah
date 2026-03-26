"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Aisha asked the Prophet ﷺ:\n\n\"If I find Laylatul Qadr,\nwhat should I say?\"\n\nThe most powerful night\nof the year.\nBetter than 1,000 months.\n\nWhat prayer\nshould she choose?",
    icon: "Moon",
  },
  {
    text: "He could have said:\nAsk for Paradise.\nAsk for wealth.\nAsk for health.\nAsk for anything.\n\nInstead, he said:\n\n\"Say: Allahumma innaka\n'Afuwwun tuhibbul 'afwa\nfa'fu 'anni.\"\n\n— Sahih al-Tirmidhi",
    icon: "Quote",
  },
  {
    text: "\"O Allah,\nYou are Al-Afuw.\nYou love to pardon.\nSo pardon me.\"\n\nOn the greatest night—\nthe best prayer\nis to ask Al-Afuw\nto erase your sins.",
    icon: "Sparkles",
  },
  {
    text: "Al-Ghafoor forgives—\nbut the record remains,\nmarked as forgiven.\n\nAl-Afuw erases.\n\nAs if the sin\nnever happened.\nAs if the page\nwas never written on.\n\nComplete removal.",
    icon: "Eraser",
  },
  {
    text: "Think of your worst sin.\nThe one that keeps you up.\nThe one you're most ashamed of.\n\nAl-Afuw doesn't just\nforgive it.\n\nHe erases it.\nCompletely.\nAs if it never existed.",
    icon: "Eye",
  },
  {
    text: "And He loves to do it.\n\n\"Tuhibbul 'afwa\"—\nYou LOVE to pardon.\n\nNot just willing.\nNot just able.\n\nHe actively loves\nthe act of erasing\nyour sins.",
    icon: "Heart",
  },
  {
    text: "On the Day of Judgment,\nAllah will bring\nHis believing servant close.\nHe will cover him\nfrom others.\n\nHe will say:\n\"Do you remember this sin?\nAnd this? And this?\"\n\nThe servant will say: \"Yes.\"\n\n\"I concealed them for you\nin the world.\nToday I forgive them all.\"\n\n— Sahih Bukhari",
    icon: "Shield",
  },
  {
    text: "Al-Afuw.\n\nThe One who erases.\nWho wipes the slate clean.\nWho loves to pardon.\n\nYou don't need\nto carry the weight\nof your past.\n\nAsk Him.\nHe is waiting to erase it.",
    icon: "Sun",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "إِنَّ اللَّهَ كَانَ عَفُوًّا غَفُورًا",
  ayahReference: "Surah An-Nisa 4:43",
  translation: "\"Indeed, Allah is\never Pardoning (Al-Afuw)\nand Forgiving.\"",
  nameArabic: "ٱلْعَفُوُّ",
  nameTransliteration: "Al-Afuw",
  nameSubtitle: "The Pardoner • The Eraser of Sins",
  explanationPoints: [
    { icon: "Moon", text: "On the greatest night, the best prayer is to ask Al-Afuw to pardon" },
    { icon: "Eraser", text: "He doesn't just forgive—He erases, as if the sin never happened" },
    { icon: "Heart", text: "He LOVES to pardon—it is His nature, not just His ability" },
    { icon: "Shield", text: "On Judgment Day, He will conceal and forgive sins He hid in this world" },
  ],
  closingText: "Al-Afuw erases sins.\nNot just forgives—erases.\nAs if they never happened.\n\nAnd He loves doing it.\n\nAllahumma innaka 'Afuwwun\ntuhibbul 'afwa\nfa'fu 'anni.",
  audioFileName: "an-nisa-4-43",
};

export function AlAfuwStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#0f0d1a", "#181426", "#0a0814"]}
    />
  );
}
