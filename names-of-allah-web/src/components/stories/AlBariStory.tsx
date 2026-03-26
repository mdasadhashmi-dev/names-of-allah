"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  { text: "Al-Khaliq conceives.\nAl-Bari brings into existence.\nAl-Musawwir gives form.\n\nThree names.\nThree stages.\n\nAl-Bari is the One\nwho originates from nothing—\nbringing every being into reality.", icon: "Sparkles" },
  { text: "He created every species\nfrom a single origin.\n\n\"He created you\nfrom a single soul,\nthen made from it its mate.\"\n\n— Surah Az-Zumar 39:6\n\nBillions of humans—\nall from Adam and Hawwa.", icon: "Users" },
  { text: "No two snowflakes are alike.\nNo two fingerprints match.\nNo two voices are the same.\n\nBillions of creations—\neach one original.\nEach one unprecedented.\n\nThis is Al-Bari's work.", icon: "Fingerprint" },
  { text: "He evolves you too.\n\nFrom a clot of blood\nto a child.\nFrom weakness\nto strength.\nFrom ignorance\nto understanding.\n\nAl-Bari shapes you\nthrough every stage of life.", icon: "TrendingUp" },
  { text: "Your struggles are not random.\nThey are Al-Bari\nrefining you.\n\nThe pressure that forms\na diamond from coal.\nThe fire that forges\nsteel from iron.\n\nEvery hardship\nis evolution by design.", icon: "Flame" },
  { text: "He originates\nwithout a blueprint.\nWithout a model.\nWithout copying anything.\n\nEvery creature—\nfrom the microscopic\nto the cosmic—\nis an original work\nof Al-Bari.", icon: "Globe" },
  { text: "\"He is Allah,\nthe Creator (Al-Khaliq),\nthe Originator (Al-Bari),\nthe Fashioner (Al-Musawwir).\n\nTo Him belong\nthe most beautiful names.\"\n\n— Surah Al-Hashr 59:24", icon: "Quote" },
  { text: "You are not a copy.\nYou are not a repeat.\n\nAl-Bari originated you—\nunique in all of history.\n\nNo one before you\nwas exactly you.\nNo one after will be.", icon: "Heart" },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ ۖ لَهُ الْأَسْمَاءُ الْحُسْنَىٰ",
  ayahReference: "Surah Al-Hashr 59:24",
  translation: "\"He is Allah—\nthe Creator, the Originator (Al-Bari),\nthe Fashioner.\nTo Him belong\nthe most beautiful names.\"",
  nameArabic: "ٱلْبَارِئُ",
  nameTransliteration: "Al-Bari",
  nameSubtitle: "The Originator • The Evolver",
  explanationPoints: [
    { icon: "Sparkles", text: "He originates from nothing—without blueprint, model, or precedent" },
    { icon: "Fingerprint", text: "Billions of creations, each one unique and unprecedented" },
    { icon: "Flame", text: "Your struggles are His refinement—evolving you by design" },
    { icon: "Heart", text: "You are an original—no one in history was or will be exactly you" },
  ],
  closingText: "Al-Bari originates without copying.\nEvery being is His original work.\n\nYou are not random.\nYou are not a repeat.\nYou are uniquely originated\nby the Evolver Himself.",
  audioFileName: "al-hashr-59-24",
};

export function AlBariStory({ nameId }: { nameId: string }) {
  return <MultiScreenStory nameId={nameId} screens={screens} finalReveal={finalReveal} gradientColors={["#0f140d", "#1a2616", "#0a0f08"]} />;
}
