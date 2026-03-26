"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Yusuf was a child.\nA boy thrown into a well\nby his own brothers.\n\nDarkness surrounded him.\nNo food. No water.\nNo one to call.\n\nBut Al-Hafeez was there.",
    icon: "Moon",
  },
  {
    text: "A caravan found him.\nPulled him out.\nSold him as a slave.\n\nFrom a well to a market.\nFrom a prince to property.\n\nYet Al-Hafeez\nkept him alive.",
    icon: "Users",
  },
  {
    text: "In the house of Al-Aziz,\nthe wife tried to seduce him.\n\nHe refused.\n\n\"I seek refuge in Allah.\"\n\nFalse accusations followed.\nHe was thrown in prison.",
    icon: "Lock",
  },
  {
    text: "Years in prison.\nForgotten by the cupbearer\nhe helped.\n\nBut Al-Hafeez\nnever forgot him.\n\nPreserving his faith.\nGuarding his honor.\nProtecting his future.",
    icon: "Shield",
  },
  {
    text: "Then the king dreamed.\nNo one could interpret it.\n\nThe cupbearer remembered:\n\"I know someone in prison.\"\n\nYusuf interpreted the dream.\nHe was freed.\nAppointed minister.",
    icon: "Star",
  },
  {
    text: "When his brothers came—\nthe same brothers\nwho threw him in the well—\n\nYusuf said:\n\n\"There is no blame upon you today.\nAllah will forgive you.\"",
    icon: "Heart",
  },
  {
    text: "Ya'qub said to his sons:\n\n\"Allah is the best Guardian,\nand He is the most merciful\nof those who show mercy.\"\n\n— Surah Yusuf 12:64",
    icon: "Quote",
  },
  {
    text: "From the well.\nThrough slavery.\nThrough temptation.\nThrough prison.\nTo the throne.\n\nAt every single stage—\nAl-Hafeez was guarding.\n\nYusuf never saw it.\nBut he was never unprotected.",
    icon: "Eye",
  },
  {
    text: "What are you going through\nright now?\n\nThe well? The prison?\nThe false accusation?\n\nAl-Hafeez is guarding you\nthrough every stage—\neven the ones\nthat feel like abandonment.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "فَاللَّهُ خَيْرٌ حَافِظًا ۖ وَهُوَ أَرْحَمُ الرَّاحِمِينَ",
  ayahReference: "Surah Yusuf 12:64",
  translation: "\"Allah is the best Guardian,\nand He is the most merciful\nof those who show mercy.\"",
  nameArabic: "ٱلْحَفِيظُ",
  nameTransliteration: "Al-Hafeez",
  nameSubtitle: "The Guardian • The Preserver",
  explanationPoints: [
    { icon: "Moon", text: "Yusuf was alone in a well—Al-Hafeez preserved his life" },
    { icon: "Lock", text: "Through slavery, false accusation, prison—he was never unguarded" },
    { icon: "Star", text: "From the bottom of a well to the throne of Egypt—all preserved" },
    { icon: "Shield", text: "Your hardship is not abandonment—Al-Hafeez is guarding your story" },
  ],
  closingText: "Al-Hafeez is the best Guardian.\nYusuf went through\nthe well, slavery, and prison—\nand emerged on a throne.\n\nYour story is still being written.\nAl-Hafeez is guarding every page.",
  audioFileName: "yusuf-12-64",
};

export function AlHafeezStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#0d0f1a", "#141826", "#080a14"]}
    />
  );
}
