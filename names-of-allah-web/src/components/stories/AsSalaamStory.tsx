"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "There are moments\nwhen the noise of the world\nsuddenly goes quiet.\n\nA stillness settles over you\u2014\nunexplained, unearned.\n\nWhere did it come from?",
    icon: "Wind",
  },
  {
    text: "He is not just peaceful.\nHe does not just give peace.\n\nHe IS peace.\n\nAs-Salaam.\nThe source.\nThe origin.\nThe essence of all peace.",
    icon: "Sparkles",
  },
  {
    text: "After every prayer,\nthe Prophet \uFE0E taught us\nto say:\n\n\"Allahumma antas-salaam,\nwa minkas-salaam.\"\n\nO Allah, You are Peace,\nand from You comes peace.",
    icon: "Moon",
  },
  {
    text: "Think of the most peaceful\nmoment of your life.\n\nA quiet morning.\nA forgiven heart.\nA tear of relief.\n\nThat peace\u2014\nit came from Him.",
    icon: "Feather",
  },
  {
    text: "The world offers distractions.\nIt offers noise and numbness.\n\nBut it cannot offer\ntrue peace.\n\nBecause peace is not\nthe absence of trouble.\nIt is the presence of As-Salaam.",
    icon: "Shield",
  },
  {
    text: "When the people of Jannah\nenter Paradise,\nwhat will they hear?\n\nNot applause.\nNot fanfare.\n\nThey will hear:\n\"Salaam.\"\n\nPeace. At last. Forever.",
    icon: "Crown",
  },
  {
    text: "Even in this life,\nHe sends peace\ndown upon the hearts\nof the believers.\n\nA tranquility\nthat the world cannot explain\nand cannot take away.",
    icon: "Droplet",
  },
  {
    text: "If your heart is restless,\nif your mind won't be still,\nif anxiety grips you\u2014\n\nturn to As-Salaam.\n\nHe is the only cure\nfor a soul at war\nwith itself.",
    icon: "Heart",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "هُوَ اللَّهُ الَّذِي لَا إِلَـٰهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ",
  ayahReference: "Surah Al-Hashr 59:23",
  translation: "\"He is Allah, besides whom\nthere is no deity,\nthe Sovereign, the Pure,\nthe Perfection, the Source of Peace.\"",
  nameArabic: "السَّلَام",
  nameTransliteration: "As-Salaam",
  nameSubtitle: "The Source of Peace • The Flawless One",
  explanationPoints: [
    { icon: "Heart", text: "He IS peace — not just a giver of it, but its very source and essence" },
    { icon: "Moon", text: "After every prayer, we turn to Him and say: 'O Allah, You are Peace, and from You comes peace'" },
    { icon: "Star", text: "The greeting of Jannah is 'Salaam' — eternal peace from the Source of peace" },
    { icon: "Shield", text: "True inner stillness is only found in connection with As-Salaam" },
  ],
  closingText: "As-Salaam is the peace\nyour soul has been searching for.\n\nNot in wealth.\nNot in people.\nNot in success.\n\nBut in the One\nwho is Peace itself.",
  audioFileName: "al-hashr-59-23",
};

export function AsSalaamStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#081214", "#0e1c20", "#050e10"]}
    />
  );
}
