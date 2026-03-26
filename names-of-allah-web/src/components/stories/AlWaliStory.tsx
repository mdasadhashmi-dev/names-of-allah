"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "\"Allah is the Protecting Friend\nof those who believe.\n\nHe brings them out\nfrom darkness\ninto the light.\"\n\n— Surah Al-Baqarah 2:257\n\nHe doesn't just protect.\nHe befriends.",
    icon: "Heart",
  },
  {
    text: "The Prophet ﷺ said:\n\n\"Allah said:\n'Whoever shows hostility\nto a friend of Mine,\nI declare war on him.'\"\n\n— Sahih Bukhari\n\nWar. From Allah.\nAgainst anyone\nwho harms His friends.",
    icon: "Quote",
  },
  {
    text: "Who are His friends?\n\nNot only prophets.\nNot only scholars.\n\n\"His allies are only\nthe God-fearing.\"\n\n— Surah Al-Anfal 8:34\n\nAnyone who fears Allah\nand tries—\nis under His friendship.",
    icon: "Users",
  },
  {
    text: "When Ibrahim was thrown\ninto the fire—\nAl-Wali was his friend.\n\nWhen Musa faced the sea—\nAl-Wali was his friend.\n\nWhen Muhammad ﷺ\nhid in the cave—\nAl-Wali was his friend.",
    icon: "Shield",
  },
  {
    text: "The hadith continues:\n\n\"My servant continues\nto draw near to Me\nwith voluntary acts of worship\nuntil I love him.\n\nAnd when I love him,\nI become his hearing\nwith which he hears,\nhis sight with which he sees,\nhis hand with which he strikes.\"",
    icon: "Eye",
  },
  {
    text: "Imagine that.\n\nThe Creator of the universe—\nbecoming your hearing,\nyour sight,\nyour strength.\n\nNot metaphorically.\nDivinely.\n\nThrough closeness to Him.",
    icon: "Sparkles",
  },
  {
    text: "The friends of Allah\ndo not fear.\n\n\"Unquestionably,\nthe allies of Allah—\nno fear will there be\nconcerning them,\nnor will they grieve.\"\n\n— Surah Yunus 10:62",
    icon: "Sun",
  },
  {
    text: "You are never alone.\n\nNot in your darkest night.\nNot in your hardest test.\nNot in your deepest doubt.\n\nAl-Wali is the friend\nwho never leaves.\nNever sleeps.\nNever forgets you.",
    icon: "Moon",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "اللَّهُ وَلِيُّ الَّذِينَ آمَنُوا يُخْرِجُهُم مِّنَ الظُّلُمَاتِ إِلَى النُّورِ",
  ayahReference: "Surah Al-Baqarah 2:257",
  translation: "\"Allah is the Protecting Friend\nof those who believe.\nHe brings them out\nfrom darkness into the light.\"",
  nameArabic: "ٱلْوَلِيُّ",
  nameTransliteration: "Al-Wali",
  nameSubtitle: "The Protecting Friend • The Ally",
  explanationPoints: [
    { icon: "Shield", text: "Allah declares war on anyone who harms His friends" },
    { icon: "Eye", text: "Draw near to Him—and He becomes your hearing, sight, and strength" },
    { icon: "Sun", text: "His allies have no fear and no grief—His friendship is complete safety" },
    { icon: "Moon", text: "He is the friend who never leaves, never sleeps, never forgets" },
  ],
  closingText: "Al-Wali is the ultimate friend.\nHe declares war for you.\nHe becomes your strength.\n\nDraw near to Him\nthrough worship—\nand He will draw near to you.",
  audioFileName: "ash-shura-42-9",
};

export function AlWaliStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#0a0f1a", "#101826", "#060a14"]}
    />
  );
}
