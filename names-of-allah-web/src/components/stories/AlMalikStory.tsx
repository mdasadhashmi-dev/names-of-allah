"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Pharaoh stood before his people\nand declared:\n\n\"I am your lord, most high.\"\n\nHe believed his throne\nwould last forever.",
    icon: "Crown",
  },
  {
    text: "He enslaved an entire nation.\nHe killed their sons.\nHe spared their daughters.\n\nHis power seemed absolute.\nNo one could challenge him.",
    icon: "Sword",
  },
  {
    text: "Then a baby was placed\nin a basket on the river.\n\nThe river carried him\nstraight into Pharaoh's palace.\n\nAllah was already planning.",
    icon: "Waves",
  },
  {
    text: "Musa grew up\nin the house of the tyrant.\n\nYears later, he returned\nwith a message:\n\n\"Let my people go.\nI am a messenger from\nthe Lord of all worlds.\"",
    icon: "MessageCircle",
  },
  {
    text: "Pharaoh laughed.\n\n\"Do I not own the kingdom of Egypt?\nAnd these rivers flowing beneath me?\"\n\nHe could not imagine\na power greater than his own.",
    icon: "Droplets",
  },
  {
    text: "Sign after sign came.\nThe staff. The hand. The flood.\nThe locusts. The lice.\nThe frogs. The blood.\n\nNine signs—\nyet Pharaoh's heart\nonly grew harder.",
    icon: "AlertTriangle",
  },
  {
    text: "He chased them to the sea.\n\nThe waters parted for Musa.\nPharaoh followed—\n\nand the sea closed upon him.\n\nIn his final breath, he cried:\n\"I believe!\"",
    icon: "Waves",
  },
  {
    text: "Too late.\n\nThe kingdom of Egypt\npassed as though it never existed.\n\nEvery throne he built—\nswallowed by sand and time.",
    icon: "Clock",
  },
  {
    text: "On the Day of Judgment,\nAllah will ask:\n\n\"Whose is the kingdom today?\"\n\nSilence.\n\nThen He will answer Himself:\n\n\"It belongs to Allah,\nthe One, the Overpowering.\"",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "فَتَعَالَى اللَّهُ الْمَلِكُ الْحَقُّ ۖ لَا إِلَٰهَ إِلَّا هُوَ رَبُّ الْعَرْشِ الْكَرِيمِ",
  ayahReference: "Surah Al-Mu'minun 23:116",
  translation: "\"So exalted is Allah,\nthe True King.\nThere is no deity except Him,\nLord of the Noble Throne.\"",
  nameArabic: "ٱلْمَلِكُ",
  nameTransliteration: "Al-Malik",
  nameSubtitle: "The King • The Sovereign",
  explanationPoints: [
    { icon: "Crown", text: "Every earthly kingdom will end; His kingdom is eternal" },
    { icon: "Scale", text: "Pharaoh claimed lordship—and was made an example for all time" },
    { icon: "Globe", text: "The entire universe is His dominion, without partner or rival" },
    { icon: "Heart", text: "True honor comes from serving Al-Malik, not imitating kings" },
  ],
  closingText: "Al-Malik is the only True King.\nEvery crown will fall.\nEvery empire will crumble.\n\nOnly His sovereignty remains.\nSeek your honor from Him alone.",
  audioFileName: "al-muminun-23-116",
};

export function AlMalikStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#1a1000", "#2b1a00", "#0f0a00"]}
    />
  );
}
