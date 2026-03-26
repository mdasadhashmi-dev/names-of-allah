"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "A Day is coming\nwhen every soul\nwill be given a book.\n\nSome will receive it\nin their right hand—\nand rejoice.\n\nSome will receive it\nin their left hand—\nand wish they had never existed.",
    icon: "BookOpen",
  },
  {
    text: "In that book\nis everything.\n\nEvery word you spoke.\nEvery glance you stole.\nEvery coin you spent.\nEvery second you wasted.\n\nNothing missing.\nNot even an atom's weight.",
    icon: "Scale",
  },
  {
    text: "\"Read your book.\nSufficient is yourself\nagainst yourself\nthis Day\nas accountant.\"\n\n— Surah Al-Isra 17:14\n\nYou will be your own judge.\nThe evidence will be\nundeniable.",
    icon: "Quote",
  },
  {
    text: "\"And We place\nthe scales of justice\nfor the Day of Resurrection,\nso no soul will be treated\nunjustly at all.\n\nAnd if there is\neven the weight\nof a mustard seed,\nWe will bring it forth.\"\n\n— Surah Al-Anbiya 21:47",
    icon: "Scale",
  },
  {
    text: "But Al-Haseeb\ndoes not only reckon\nyour sins.\n\nHe reckons\nyour good deeds too.\n\nThat smile you gave.\nThat sadaqah you hid.\nThat patience you showed.\n\nHe counted it all.",
    icon: "Heart",
  },
  {
    text: "The one who gave\na thirsty dog water—\nAllah forgave them.\n\nThe one who removed\na branch from a road—\nAllah rewarded them.\n\nAl-Haseeb misses nothing.\nNot even your smallest good.",
    icon: "Sparkles",
  },
  {
    text: "Don't fear the reckoning\nif you lived with awareness.\n\nThe one who accounts\nfor themselves in this life\nwill find the reckoning easy.\n\nUmar ibn Al-Khattab said:\n\"Account yourselves\nbefore you are accounted for.\"",
    icon: "Eye",
  },
  {
    text: "Al-Haseeb is sufficient.\n\nSufficient as a Reckoner.\nSufficient as a Protector.\nSufficient as a Provider.\n\nWhen you have Al-Haseeb\non your side—\nyou need no one else\nto settle your accounts.",
    icon: "Shield",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "وَكَفَىٰ بِاللَّهِ حَسِيبًا",
  ayahReference: "Surah An-Nisa 4:6",
  translation: "\"And sufficient is Allah\nas Accountant (Al-Haseeb).\"",
  nameArabic: "ٱلْحَسِيبُ",
  nameTransliteration: "Al-Haseeb",
  nameSubtitle: "The Reckoner • The Sufficient",
  explanationPoints: [
    { icon: "BookOpen", text: "Every soul will receive a book—every deed recorded, nothing missing" },
    { icon: "Scale", text: "Not even a mustard seed's weight of good or evil will be overlooked" },
    { icon: "Heart", text: "He reckons your good deeds too—every smile, every hidden charity" },
    { icon: "Eye", text: "Account for yourself now—and the final reckoning will be easy" },
  ],
  closingText: "Al-Haseeb records everything.\nEvery atom of good.\nEvery atom of wrong.\n\nDon't fear the reckoning—\nprepare for it.\n\nAnd know that\nHe is sufficient\nas your Accountant.",
  audioFileName: "an-nisa-4-6",
};

export function AlHaseebStory({ nameId }: { nameId: string }) {
  return <MultiScreenStory nameId={nameId} screens={screens} finalReveal={finalReveal} gradientColors={["#14120d", "#221e14", "#0f0d08"]} />;
}
