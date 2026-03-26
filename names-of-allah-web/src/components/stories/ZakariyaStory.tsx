"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Zakariya عَلَيْهِ ٱلسَّلَامُ\nwas an old man.\nHis hair had turned white.\nHis bones had grown weak.\n\nAnd he had no child.",
    icon: "User",
  },
  {
    text: "His wife was barren.\nYears had passed.\nThen decades.\n\nBy every human measure,\nthe door to parenthood\nwas permanently closed.",
    icon: "Lock",
  },
  {
    text: "One day, he entered\nthe sanctuary of Maryam.\n\nHe found fresh fruits—\nout of season,\nimpossible to obtain.\n\n\"Where did this come from?\"\nhe asked.",
    icon: "Leaf",
  },
  {
    text: "Maryam answered simply:\n\n\"It is from Allah.\nIndeed, Allah provides\nfor whom He wills\nwithout account.\"\n\nSomething stirred\nin Zakariya's heart.",
    icon: "Sparkles",
  },
  {
    text: "If Allah can provide\nfresh fruit in winter\nfor a young woman—\n\ncould He not provide\na child for an old man?\n\nRight there,\nZakariya called upon his Lord.",
    icon: "Lightbulb",
  },
  {
    text: "He prayed in secret:\n\n\"My Lord,\nindeed my bones have weakened,\nand my head has filled\nwith white.\n\nAnd never have I been\nin my prayer to You\nunblessed.\"",
    icon: "Quote",
  },
  {
    text: "The angels called out to him\nwhile he stood praying:\n\n\"Allah gives you good tidings\nof Yahya—\n\nconfirming a word from Allah,\nnoble, chaste,\nand a prophet.\"",
    icon: "Star",
  },
  {
    text: "Zakariya was astonished:\n\n\"My Lord,\nhow will I have a boy\nwhen my wife is barren\nand I have reached\nextreme old age?\"\n\nThe angel said:\n\"Thus it will be.\"",
    icon: "HelpCircle",
  },
  {
    text: "His sign:\nthree days of silence—\nunable to speak\nexcept through gestures.\n\nAnd then Yahya was born.\n\nThe impossible prayer\nwas answered\nby Al-Mujeeb.",
    icon: "Baby",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "يَا زَكَرِيَّا إِنَّا نُبَشِّرُكَ بِغُلَامٍ اسْمُهُ يَحْيَىٰ لَمْ نَجْعَل لَّهُ مِن قَبْلُ سَمِيًّا",
  ayahReference: "Surah Maryam 19:7",
  translation: "\"O Zakariya,\nindeed We give you good tidings\nof a boy whose name will be Yahya.\nWe have not assigned\nto any before him that name.\"",
  nameArabic: "ٱلْمُجِيبُ",
  nameTransliteration: "Al-Mujeeb",
  nameSubtitle: "The Responsive • The Answerer of Prayers",
  explanationPoints: [
    { icon: "Lock", text: "Every door was closed—old age, barrenness, impossibility" },
    { icon: "Leaf", text: "Seeing Allah's provision for Maryam inspired Zakariya to ask" },
    { icon: "Quote", text: "He prayed with humility, honesty, and trust—and was heard" },
    { icon: "Star", text: "Al-Mujeeb answers even the prayers that seem impossible" },
  ],
  closingText: "Al-Mujeeb answers prayers.\nNot only the easy ones—\nbut the impossible ones.\n\nZakariya was old. His wife was barren.\nYet Allah gave him Yahya.\n\nNever stop asking.",
  audioFileName: "maryam-19-7",
};

export function ZakariyaStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#0a1520", "#112233", "#060e17"]}
    />
  );
}
