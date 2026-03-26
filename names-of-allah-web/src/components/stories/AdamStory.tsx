"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Before anything existed—\nno sky, no earth,\nno time, no space—\n\nThere was only Allah.\n\nAnd then He said: \"Be.\"\nAnd creation began.",
    icon: "Sparkles",
  },
  {
    text: "Allah told the angels:\n\n\"I am placing a successor\non the earth.\"\n\nThe angels asked:\n\"Will You place therein one\nwho causes corruption\nand sheds blood?\"",
    icon: "Users",
  },
  {
    text: "Allah replied:\n\n\"I know what you do not know.\"\n\nHe had a plan\nthe angels could not see.\n\nA masterpiece\nthey could not yet understand.",
    icon: "Eye",
  },
  {
    text: "He took clay—\nordinary, humble earth—\nand shaped it with His own hands.\n\nNot with a word.\nNot through an angel.\n\nWith His own hands.",
    icon: "Hand",
  },
  {
    text: "He fashioned Adam\ninto perfect form.\n\nThen He breathed\ninto him from His spirit.\n\nDust became alive.\nClay became conscious.\nNothing became someone.",
    icon: "Wind",
  },
  {
    text: "Then Allah taught Adam\nthe names of all things—\n\nknowledge the angels\ndid not possess.\n\n\"Tell Me the names of these,\"\nHe challenged them.\n\nThey could not.",
    icon: "BookOpen",
  },
  {
    text: "Adam could.\n\nThe one made from clay\nknew what beings of light\ncould not.\n\nAllah said to the angels:\n\"Prostrate to Adam.\"\n\nAnd they all did—\nexcept Iblis.",
    icon: "ArrowDown",
  },
  {
    text: "Iblis refused.\n\"I am better than him.\nYou created me from fire\nand him from clay.\"\n\nHe saw the material.\nHe missed the miracle.",
    icon: "Flame",
  },
  {
    text: "You were not an accident.\nYou were not random.\n\nYou were shaped by Al-Khaliq—\nthe Creator who makes\nfrom nothing,\nwith purpose,\nby design.",
    icon: "Fingerprint",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي خَالِقٌ بَشَرًا مِّن صَلْصَالٍ مِّنْ حَمَإٍ مَّسْنُونٍ",
  ayahReference: "Surah Al-Hijr 15:28",
  translation: "\"And when your Lord said\nto the angels:\nI am creating a human being\nfrom clay, from molded mud.\"",
  nameArabic: "ٱلْخَالِقُ",
  nameTransliteration: "Al-Khaliq",
  nameSubtitle: "The Creator • The Originator",
  explanationPoints: [
    { icon: "Sparkles", text: "He creates from nothing—no template, no material, no precedent" },
    { icon: "Hand", text: "Adam was shaped by Allah's own hands—honored above all creation" },
    { icon: "BookOpen", text: "He gave humanity knowledge that even angels did not possess" },
    { icon: "Fingerprint", text: "Every human is created with intention, purpose, and unique design" },
  ],
  closingText: "Al-Khaliq created you\nfrom nothing, with purpose.\n\nYou are not an accident.\nYou are not random dust.\n\nYou are the creation\nof the greatest Creator.",
  audioFileName: "al-hijr-15-28",
};

export function AdamStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#0a1a0f", "#122b18", "#06140a"]}
    />
  );
}
