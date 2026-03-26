"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "A man was walking\non a road.\n\nHe found a thorny branch\nblocking the path.\n\nHe moved it aside\nso others wouldn't be hurt.\n\nThat's all he did.",
    icon: "Leaf",
  },
  {
    text: "Allah thanked him for it.\n\nNot just acknowledged—\nthanked.\n\nAnd forgave him.\n\nFor moving a branch.\n\n— Sahih Bukhari & Muslim",
    icon: "Sparkles",
  },
  {
    text: "A woman entered Hellfire\nfor starving a cat.\n\nA man entered Paradise\nfor giving water\nto a thirsty dog.\n\nAsh-Shakur does not\nmeasure by size.\nHe measures by sincerity.",
    icon: "Heart",
  },
  {
    text: "The Prophet ﷺ said:\n\n\"Do not belittle\nany good deed,\neven if it is meeting\nyour brother\nwith a cheerful face.\"\n\n— Sahih Muslim",
    icon: "Quote",
  },
  {
    text: "A smile.\nA glass of water.\nA kind word.\nRemoving harm from a road.\n\nThese seem small to you.\n\nTo Ash-Shakur,\nthey are mountains.",
    icon: "Mountain",
  },
  {
    text: "He multiplies.\n\n\"Whoever comes\nwith a good deed\nwill have ten times\nthe like thereof.\"\n\n— Surah Al-An'am 6:160\n\nOne good deed = ten rewards.\nSome are multiplied\nto 700. Or more.",
    icon: "TrendingUp",
  },
  {
    text: "And He is grateful\nfor patience too.\n\n\"Indeed, the patient\nwill be given their reward\nwithout account.\"\n\n— Surah Az-Zumar 39:10\n\nWithout account.\nWithout limit.\nEndless appreciation.",
    icon: "Infinity",
  },
  {
    text: "You have a Lord\nwho notices\nwhat no human notices.\n\nWho appreciates\nwhat no one else values.\n\nWho rewards\nfar beyond\nwhat you gave.\n\nThat is Ash-Shakur.",
    icon: "Eye",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "إِنَّ رَبَّنَا لَغَفُورٌ شَكُورٌ",
  ayahReference: "Surah Fatir 35:34",
  translation: "\"Indeed, our Lord\nis Forgiving\nand Appreciative (Ash-Shakur).\"",
  nameArabic: "ٱلشَّكُورُ",
  nameTransliteration: "Ash-Shakur",
  nameSubtitle: "The Most Appreciative • The Most Grateful",
  explanationPoints: [
    { icon: "Leaf", text: "A man was forgiven for moving a branch from a road" },
    { icon: "TrendingUp", text: "One good deed is multiplied 10 to 700 times or more" },
    { icon: "Infinity", text: "The patient receive their reward without limit or account" },
    { icon: "Eye", text: "He notices the smallest good—a smile, a glass of water, a kind word" },
  ],
  closingText: "Ash-Shakur appreciates everything.\nA branch moved. A dog given water.\nA smile to a stranger.\n\nNo deed is too small.\nHe sees it. He values it.\nHe multiplies it beyond measure.",
  audioFileName: "fatir-35-30",
};

export function AshShakurStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#14180a", "#1f2610", "#0d1006"]}
    />
  );
}
