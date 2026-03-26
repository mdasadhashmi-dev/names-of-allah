"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Hajar was alone.\n\nIbrahim had left her\nand baby Isma'il\nin a barren valley—\nno water, no food,\nno people.\n\nJust desert and sky.",
    icon: "Sun",
  },
  {
    text: "She asked Ibrahim:\n\"Did Allah command you\nto leave us here?\"\n\nHe nodded.\n\n\"Then He will not\nabandon us.\"\n\nAnd Ibrahim walked away.",
    icon: "User",
  },
  {
    text: "The water ran out.\nThe baby began to cry.\n\nHajar ran to the hill of Safa,\nsearching for anyone.\nNothing.\n\nShe ran to Marwa.\nNothing.\n\nBack and forth.\nSeven times.",
    icon: "Footprints",
  },
  {
    text: "She was not heard\nby any caravan.\nShe was not seen\nby any traveler.\n\nBut she was heard\nby As-Samee.\n\nEvery footstep.\nEvery breath.\nEvery silent plea.",
    icon: "Ear",
  },
  {
    text: "An angel struck the ground\nnear baby Isma'il's feet.\n\nWater burst forth.\n\nNot a trickle—\na spring.\n\nZamzam.\n\nStill flowing today,\nthousands of years later.",
    icon: "Droplets",
  },
  {
    text: "That spring attracted birds.\nBirds attracted travelers.\nTravelers became a settlement.\n\nThe settlement became Makkah.\n\nFrom one woman's unheard cry—\nan entire civilization was born.",
    icon: "Globe",
  },
  {
    text: "And today,\nevery pilgrim who performs Hajj\nwalks between Safa and Marwa—\n\nretracing Hajar's steps.\n\nHer desperation\nbecame an act of worship\nfor billions.",
    icon: "Users",
  },
  {
    text: "Aisha reported that a woman\ncame to complain to the Prophet ﷺ\nabout her husband.\n\nAisha could barely hear her.\n\nBut Allah revealed:\n\"Allah has heard the woman\nwho disputes with you.\"\n\n— Surah Al-Mujadila 58:1",
    icon: "Quote",
  },
  {
    text: "As-Samee hears\nthe whisper you cannot voice.\nThe prayer you only think.\nThe cry that has no sound.\n\nHe heard Hajar\nin an empty desert.\n\nHe hears you\nwherever you are.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ",
  ayahReference: "Surah Al-Baqarah 2:127",
  translation: "\"Our Lord, accept from us.\nIndeed, You are\nthe All-Hearing (As-Samee),\nthe All-Knowing.\"",
  nameArabic: "ٱلسَّمِيعُ",
  nameTransliteration: "As-Samee",
  nameSubtitle: "The All-Hearing • The One Who Hears All",
  explanationPoints: [
    { icon: "Droplets", text: "Hajar's cry in an empty desert produced Zamzam—still flowing today" },
    { icon: "Footprints", text: "Her desperate run between Safa and Marwa became a pillar of Hajj" },
    { icon: "Ear", text: "He heard a woman's whisper that even Aisha could barely hear" },
    { icon: "Heart", text: "No prayer is too quiet, no cry too soft—As-Samee hears everything" },
  ],
  closingText: "As-Samee hears all.\nHajar cried in an empty desert—\nand He answered with Zamzam.\n\nYour prayers are never lost.\nYour whispers are never missed.\n\nHe is listening. Always.",
  audioFileName: "al-baqarah-2-127",
};

export function AsSameeStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#1a1408", "#2b2010", "#140f06"]}
    />
  );
}
