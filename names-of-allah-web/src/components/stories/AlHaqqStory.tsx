"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Truth came to Pharaoh.\nHe rejected it.\n\nTruth came to Abu Jahl.\nHe fought it.\n\nTruth came to Iblis.\nHe knew it was true—\nand still refused.",
    icon: "XCircle",
  },
  {
    text: "\"And say:\nTruth has come\nand falsehood has departed.\nIndeed, falsehood is\nbound to depart.\"\n\n— Surah Al-Isra 17:81\n\nThe Prophet ﷺ recited this\nas he entered Makkah—\nand the idols fell.",
    icon: "Quote",
  },
  {
    text: "360 idols\nsurrounding the Ka'bah.\n\nThe Prophet ﷺ pointed\nhis staff at each one.\n\nOne by one,\nthey toppled.\n\nFalsehood cannot stand\nin the presence of Al-Haqq.",
    icon: "ArrowDown",
  },
  {
    text: "Every lie has an expiration date.\nEvery deception will be exposed.\nEvery falsehood will crumble.\n\nIt may take time.\nBut Al-Haqq—the Truth—\nalways prevails.",
    icon: "Clock",
  },
  {
    text: "The Quran itself is truth.\nThe Day of Judgment is truth.\nDeath is truth.\nParadise is truth.\nHellfire is truth.\n\nAl-Haqq does not\ndeal in uncertainty.",
    icon: "BookOpen",
  },
  {
    text: "And He is truth\nin His promises.\n\n\"The promise of Allah—\nAllah does not fail\nin His promise.\"\n\n— Surah Ar-Rum 30:6\n\nWhen He says He will forgive—\nHe will.\nWhen He says He will provide—\nHe will.",
    icon: "Shield",
  },
  {
    text: "The world will tell you\nto compromise truth\nfor comfort.\n\nTo bend reality\nfor acceptance.\n\nTo silence conviction\nfor popularity.\n\nAl-Haqq never bends.",
    icon: "Scale",
  },
  {
    text: "Al-Haqq is not just\na name to recite.\n\nIt is a standard to live by.\n\nSpeak truth.\nSeek truth.\nStand on truth.\n\nBecause everything else\nwill eventually fall—\njust like those 360 idols.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "فَذَٰلِكُمُ اللَّهُ رَبُّكُمُ الْحَقُّ ۖ فَمَاذَا بَعْدَ الْحَقِّ إِلَّا الضَّلَالُ",
  ayahReference: "Surah Yunus 10:32",
  translation: "\"That is Allah, your Lord,\nthe Truth (Al-Haqq).\nSo what is there\nbeyond truth\nexcept error?\"",
  nameArabic: "ٱلْحَقُّ",
  nameTransliteration: "Al-Haqq",
  nameSubtitle: "The Truth • The Absolute Reality",
  explanationPoints: [
    { icon: "ArrowDown", text: "360 idols fell when the Prophet entered Makkah—falsehood cannot stand" },
    { icon: "Clock", text: "Every lie expires—truth always surfaces, even after years" },
    { icon: "Shield", text: "His promises are truth—when He says He will forgive, He will" },
    { icon: "Scale", text: "Beyond truth there is only error—there is no middle ground" },
  ],
  closingText: "Al-Haqq is the Absolute Truth.\nEvery idol fell before Him.\nEvery lie will be exposed.\n\nStand with truth—\neven when it's hard.\nBecause Al-Haqq\nalways wins in the end.",
  audioFileName: "yunus-10-32",
};

export function AlHaqqStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#12100a", "#1f1a10", "#0d0b06"]}
    />
  );
}
