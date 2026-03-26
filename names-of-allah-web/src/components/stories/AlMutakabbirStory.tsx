"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Iblis was among\nthe greatest worshippers.\nHe rose through the ranks\nof devotion until he stood\namong the angels.\n\nThen came the command:\n\"Prostrate to Adam.\"",
    icon: "ArrowDown",
  },
  {
    text: "Iblis refused.\n\n\"I am better than him.\nYou created me from fire\nand created him from clay.\"\n\nOne sentence of pride.\nAn eternity of consequence.",
    icon: "Flame",
  },
  {
    text: "Pharaoh declared:\n\"I am your lord, most high.\"\n\nNimrod said:\n\"I give life and death.\"\n\nQarun flaunted his wealth\nas proof of his superiority.\n\nAll fell.",
    icon: "Crown",
  },
  {
    text: "The Prophet ﷺ said:\n\n\"Allah says: 'Pride is My cloak\nand greatness is My garment.\nWhoever competes with Me\nregarding either of them,\nI will throw him\ninto the Hellfire.'\"\n\n— Sahih Muslim",
    icon: "Quote",
  },
  {
    text: "Al-Mutakabbir.\n\nThe word means:\nthe One who has the right\nto all greatness.\n\nWhen Allah claims supremacy,\nit is truth.\n\nWhen a human claims it,\nit is delusion.",
    icon: "Scale",
  },
  {
    text: "Iblis had worship.\nPharaoh had a kingdom.\nQarun had wealth.\n\nNone of it mattered.\n\nBecause supremacy\nbelongs to Allah alone.\n\nAnyone who tries to wear\nthat cloak—will be stripped of it.",
    icon: "XCircle",
  },
  {
    text: "But here is the mercy:\n\nThe Prophet ﷺ said:\n\"No one who has\nan atom's weight of pride\nwill enter Paradise.\"\n\nA man asked:\n\"What if someone likes\nnice clothes and shoes?\"\n\nHe said: \"Allah is beautiful\nand loves beauty.\nPride is rejecting truth\nand looking down on people.\"\n\n— Sahih Muslim",
    icon: "Heart",
  },
  {
    text: "Al-Mutakabbir is Supreme\nso that you don't have to be.\n\nHumility before Him\nis the highest station.\n\nThe closer you are\nto the ground in sujud—\nthe closer you are\nto Al-Mutakabbir.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ الْمُهَيْمِنُ الْعَزِيزُ الْجَبَّارُ الْمُتَكَبِّرُ",
  ayahReference: "Surah Al-Hashr 59:23",
  translation: "\"He is Allah—\nthe Almighty, the Compeller,\nthe Supreme (Al-Mutakabbir).\nExalted is Allah\nabove whatever they associate with Him.\"",
  nameArabic: "ٱلْمُتَكَبِّرُ",
  nameTransliteration: "Al-Mutakabbir",
  nameSubtitle: "The Supreme • The Majestic",
  explanationPoints: [
    { icon: "Flame", text: "Iblis fell from the highest rank through a single moment of pride" },
    { icon: "Crown", text: "Pharaoh, Nimrod, Qarun—all who claimed greatness were humbled" },
    { icon: "Scale", text: "Pride is His cloak alone—anyone who wears it will be stripped" },
    { icon: "ArrowDown", text: "The closest you get to Him is in sujud—the lowest position" },
  ],
  closingText: "Al-Mutakabbir alone\nhas the right to greatness.\n\nEvery Iblis, every Pharaoh\nwho tried to compete—fell.\n\nHumility is your path\nto the Supreme.",
  audioFileName: "al-hashr-59-23-mutakabbir",
};

export function AlMutakabbirStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#1a0d0d", "#261414", "#100808"]}
    />
  );
}
