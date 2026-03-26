"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  { text: "Eight billion people\non this earth.\n\nEight billion faces.\nEight billion voices.\nEight billion sets\nof fingerprints.\n\nNot a single duplicate.", icon: "Users" },
  { text: "\"He it is who forms you\nin the wombs\nhowever He wills.\"\n\n— Surah Ali 'Imran 3:6\n\nBefore you took\nyour first breath—\nAl-Musawwir was already\ndesigning you.", icon: "Quote" },
  { text: "The color of your eyes.\nThe shape of your face.\nThe sound of your laugh.\nThe pattern of your iris.\n\nAll chosen.\nAll deliberate.\nAll fashioned by\nAl-Musawwir.", icon: "Eye" },
  { text: "He fashioned the wings\nof every butterfly—\neach with different patterns.\n\nThe stripes of every zebra—\nnone identical.\n\nThe spiral of every shell—\neach uniquely curved.", icon: "Leaf" },
  { text: "And He fashioned\nyour inner world too.\n\nYour particular way\nof thinking.\nYour specific way\nof feeling.\nYour unique way\nof loving.\n\nAll designed.", icon: "Heart" },
  { text: "You look in the mirror\nand see flaws.\n\nAl-Musawwir looks\nand sees His design.\n\nThe nose you dislike—\nHe chose it.\nThe height you wish\nwas different—\nHe decided it.", icon: "Sparkles" },
  { text: "\"We have certainly created man\nin the best of stature.\"\n\n— Surah At-Tin 95:4\n\nThe best of stature.\nNot some of you.\nNot the beautiful ones.\n\nAll of you.", icon: "BookOpen" },
  { text: "Al-Musawwir does not\nmake mistakes.\n\nYour body is not an error.\nYour appearance is not\nan accident.\n\nYou were fashioned—\ndeliberately, beautifully,\npurposefully—\nby the greatest Fashioner.", icon: "Sun" },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ",
  ayahReference: "Surah Al-Hashr 59:24",
  translation: "\"He is Allah—\nthe Creator, the Originator,\nthe Fashioner (Al-Musawwir).\"",
  nameArabic: "ٱلْمُصَوِّرُ",
  nameTransliteration: "Al-Musawwir",
  nameSubtitle: "The Fashioner • The Shaper of Forms",
  explanationPoints: [
    { icon: "Users", text: "8 billion unique faces—not one duplicate in all of human history" },
    { icon: "Eye", text: "Every detail of your appearance was chosen before you were born" },
    { icon: "Heart", text: "He fashioned your inner world too—your way of thinking, feeling, loving" },
    { icon: "Sun", text: "You were created in the best of stature—Al-Musawwir makes no mistakes" },
  ],
  closingText: "Al-Musawwir fashioned you\nwith deliberate care.\n\nEvery feature. Every detail.\nAll designed.\n\nYou are not an accident.\nYou are a masterpiece\nof the greatest Fashioner.",
  audioFileName: "al-hashr-59-24",
};

export function AlMusawwirStory({ nameId }: { nameId: string }) {
  return <MultiScreenStory nameId={nameId} screens={screens} finalReveal={finalReveal} gradientColors={["#14100a", "#221a10", "#0f0b06"]} />;
}
