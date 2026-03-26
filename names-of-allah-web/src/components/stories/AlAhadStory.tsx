"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "There is a surah\nso powerful\nthat the Prophet ﷺ said\nit equals one-third\nof the entire Quran.\n\nFour verses.\nThat is all.\n\nFour verses\nthat define the Infinite.",
    icon: "BookOpen",
  },
  {
    text: "\"Say: He is Allah,\nthe One.\"\n\nQul Huwa Allahu Ahad.\n\nNot Wahid — one in number.\nAhad — unique in essence.\n\nThere is nothing\nlike Him.\nNothing comparable.\nNothing even close.",
    icon: "Star",
  },
  {
    text: "He begets not,\nnor was He begotten.\n\nHe has no son.\nNo father.\nNo origin.\nNo lineage.\n\nHe is not born\nfrom something before Him.\nNothing comes after Him\nby descent.\n\nHe simply IS.",
    icon: "Infinity",
  },
  {
    text: "\"And there is none\nequivalent to Him.\"\n\nNo rival.\nNo partner.\nNo comparison.\n\nYou cannot imagine Him\nby likening Him\nto anything you know.\n\nHe is beyond\nevery category\nyour mind can construct.",
    icon: "Eye",
  },
  {
    text: "In the scorching desert of Makkah,\nBilal ibn Rabah lay crushed\nbeneath a boulder.\n\nHis master tortured him\nto renounce his faith.\n\nThe sun burned overhead.\nThe rock pressed his chest.\nHis skin blistered.",
    icon: "Sun",
  },
  {
    text: "And from beneath\nthat crushing weight,\nBilal whispered\nthe only word\nthat mattered:\n\n\"Ahad.\"\n\nOne.\n\n\"Ahad.\"\n\nOne.\n\nAgain and again.\nThey could break his body.\nBut not his certainty.",
    icon: "Shield",
  },
  {
    text: "Abu Bakr heard of Bilal\nand purchased his freedom.\n\nWhen the Prophet ﷺ\nconquered Makkah,\nBilal climbed atop the Ka'bah\nand called the adhan.\n\nThe voice that once whispered\n\"Ahad\" under a rock\nnow declared it\nover the entire city.",
    icon: "Crown",
  },
  {
    text: "Al-Ahad.\n\nThe declaration\nthat freed Bilal.\nThe truth that shattered\nevery idol.\nThe essence\nof every revelation.\n\nOne God.\nUnique.\nIncomparable.\nEternal.\n\nQul Huwa Allahu Ahad.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "قُلْ هُوَ اللَّهُ أَحَدٌ",
  ayahReference: "Surah Al-Ikhlas 112:1",
  translation: "\"Say: He is Allah,\nthe One (Al-Ahad).\"",
  nameArabic: "ٱلْأَحَدُ",
  nameTransliteration: "Al-Ahad",
  nameSubtitle: "The Unique • The Incomparable One",
  explanationPoints: [
    { icon: "BookOpen", text: "Surah Al-Ikhlas — four verses equal to one-third of the Quran" },
    { icon: "Infinity", text: "Al-Ahad means unique in essence — not merely one in number, but beyond all comparison" },
    { icon: "Shield", text: "Bilal was crushed under a boulder yet whispered 'Ahad, Ahad' — his faith unbroken" },
    { icon: "Crown", text: "The slave who whispered became the voice that called the adhan over Makkah" },
  ],
  closingText: "Al-Ahad is the truth\nthat survives every fire,\nevery persecution,\nevery empire.\n\nBilal knew it\nunder a rock.\nYou know it\nin your heart.\n\nHe is One.\nHe has no equal.\nHe never will.",
  audioFileName: "al-ikhlas-112-1",
};

export function AlAhadStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#06060e", "#0d0d1a", "#030308"]}
    />
  );
}
