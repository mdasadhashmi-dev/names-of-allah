"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Musa stood at the sea.\n\nBehind him—\nPharaoh's army,\nchariots thundering,\nswords gleaming.\n\nBefore him—\nwater as far\nas the eye could see.",
    icon: "Waves",
  },
  {
    text: "His people cried:\n\"We are overtaken!\"\n\nMusa said:\n\"No. Indeed,\nwith me is my Lord.\nHe will guide me.\"\n\n— Surah Ash-Shu'ara 26:62",
    icon: "Quote",
  },
  {
    text: "Then Allah said:\n\"Strike the sea\nwith your staff.\"\n\nA staff.\nAgainst an ocean.\n\nBut when An-Naseer\nsends His help,\nit comes in forms\nyou could never imagine.",
    icon: "Zap",
  },
  {
    text: "The sea split.\n\nTowering walls of water\non each side.\n\nDry ground appeared\nwhere there was none.\n\nThat is His help.\nImpossible to you.\nEffortless for Him.",
    icon: "ArrowUp",
  },
  {
    text: "At the Battle of the Trench,\nMedina was surrounded.\nThe Muslims were starving,\ndigging trenches\nin the frozen earth.\n\nThey thought\nit was the end.",
    icon: "Mountain",
  },
  {
    text: "Then Allah sent a wind.\n\nA wind so fierce\nit tore through\nthe enemy's camp.\n\nOverturning their pots.\nExtinguishing their fires.\nRipping their tents\nfrom the ground.\n\nThey fled in the night.",
    icon: "Wind",
  },
  {
    text: "\"If Allah helps you,\nnone can overcome you.\nAnd if He forsakes you,\nwho is there that can\nhelp you after Him?\"\n\n— Surah Aal-e-Imran 3:160\n\nHis help is the only help\nthat truly matters.",
    icon: "Shield",
  },
  {
    text: "An-Naseer.\n\nThe Helper who split seas.\nThe Helper who sent winds.\n\nThe Helper who turns\nthe impossible\ninto a path forward\nwhen you thought\nthere was none.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "نِعْمَ الْمَوْلَىٰ وَنِعْمَ النَّصِيرُ",
  ayahReference: "Surah Al-Anfal 8:40",
  translation: "\"What an excellent Protector\nand what an excellent Helper.\"",
  nameArabic: "ٱلنَّصِيرُ",
  nameTransliteration: "An-Naseer",
  nameSubtitle: "The Helper • The Granter of Victory",
  explanationPoints: [
    { icon: "Waves", text: "He split the sea for Musa — His help transforms the impossible into a path of salvation" },
    { icon: "Wind", text: "He sent a wind at the Trench — His help comes in forms you never expect" },
    { icon: "Shield", text: "If Allah helps you, none can overcome you — His aid makes you unconquerable" },
    { icon: "Zap", text: "A staff against an ocean, a wind against an army — He needs no army to deliver victory" },
  ],
  closingText: "You are standing\nat your own sea right now.\n\nThe army behind you.\nThe water before you.\n\nBut An-Naseer\nsplit seas before.\n\nHe can split yours too.\nJust hold the staff.\nAnd strike.",
  audioFileName: "al-anfal-8-40",
};

export function AnNaseerStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#0c1008", "#141a0e", "#080c06"]}
    />
  );
}
