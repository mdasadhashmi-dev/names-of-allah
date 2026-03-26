"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Musa's mother\nheld her baby\nwhile soldiers searched\nevery home.\n\nPharaoh had ordered:\nkill every newborn\nIsraeli boy.\n\nHer son was next.",
    icon: "AlertTriangle",
  },
  {
    text: "Allah inspired her heart:\n\n\"Place him in a chest\nand cast it into the river.\nDo not fear\nand do not grieve.\n\nWe will return him to you.\"\n\n— Surah Al-Qasas 28:7",
    icon: "Heart",
  },
  {
    text: "She placed her baby\nin a basket\nand put it in the Nile.\n\nShe watched it float away.\n\nCan you imagine?\nLetting go of your child\ninto a river?",
    icon: "Waves",
  },
  {
    text: "The basket drifted\nto Pharaoh's palace.\n\nHis wife, Asiya, found it.\n\n\"A comfort for me and you.\nDo not kill him.\nPerhaps he will benefit us.\"\n\nPharaoh agreed.",
    icon: "Crown",
  },
  {
    text: "But the baby refused\nevery wet nurse.\nHe would not feed.\n\nMusa's sister,\nwho had been watching\nfrom a distance, said:\n\n\"Shall I direct you to a family\nwho will nurse him?\"",
    icon: "Eye",
  },
  {
    text: "They brought his own mother.\n\nMusa took her milk immediately.\n\nAllah returned him\nto his mother's arms—\nnow with the protection\nof Pharaoh's own palace.\n\nAl-Baseer saw everything.",
    icon: "Sparkles",
  },
  {
    text: "He saw the mother's tears.\nHe saw the basket on the river.\nHe saw the sister\nwatching from the reeds.\nHe saw Asiya's compassion.\n\nEvery thread—visible to Him.",
    icon: "Eye",
  },
  {
    text: "He sees the prayer\nyou make in the dark.\nThe tear no one notices.\nThe struggle you hide.\nThe good deed\nno one witnessed.\n\nNothing is invisible\nto Al-Baseer.",
    icon: "Moon",
  },
  {
    text: "Al-Baseer sees\nwhat human eyes cannot.\n\nHe sees your intention.\nHe sees your effort.\nHe sees your patience.\n\nAnd He sees\nthe perfect moment\nto answer.",
    icon: "Sun",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى",
  ayahReference: "Surah Al-Isra 17:1",
  translation: "\"Exalted is He who took\nHis servant by night\nfrom the Sacred Mosque\nto the Farthest Mosque,\nwhose surroundings\nWe have blessed.\"",
  nameArabic: "ٱلْبَصِيرُ",
  nameTransliteration: "Al-Baseer",
  nameSubtitle: "The All-Seeing • The One Who Sees All",
  explanationPoints: [
    { icon: "Waves", text: "He saw a baby on the Nile and guided it to safety in a palace" },
    { icon: "Eye", text: "He saw the sister watching, the wife's compassion, every detail" },
    { icon: "Moon", text: "He sees your hidden tears, silent prayers, and unseen struggles" },
    { icon: "Heart", text: "No good deed is invisible—Al-Baseer witnesses everything" },
  ],
  closingText: "Al-Baseer sees all.\nHe saw Musa on the river.\nHe saw his mother's tears.\nHe wove it all together.\n\nHe sees you too—\nyour struggles, your patience,\nyour silent prayers.\n\nNothing escapes Him.",
  audioFileName: "al-isra-17-1",
};

export function AlBaseerStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#0f1420", "#182030", "#0a0e16"]}
    />
  );
}
