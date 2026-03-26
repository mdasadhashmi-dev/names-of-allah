"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Sulayman عَلَيْهِ ٱلسَّلَامُ\ninherited the kingdom of his father\nDawud.\n\nBut he wanted something\nno king before or after\nwould ever possess.",
    icon: "Crown",
  },
  {
    text: "He turned to Allah and prayed:\n\n\"My Lord, forgive me\nand grant me a kingdom\nsuch as will not belong\nto anyone after me.\n\nIndeed, You are Al-Wahhab.\"",
    icon: "Quote",
  },
  {
    text: "Allah answered.\n\nThe wind was subjected to him—\nit traveled a month's journey\nin the morning\nand a month's journey\nin the evening,\nat his command.",
    icon: "Wind",
  },
  {
    text: "The jinn were made to serve him.\nBuilders. Divers.\nCraftsmen of extraordinary skill.\n\nThey built palaces,\nstatues, basins like reservoirs,\nand immovable cauldrons.",
    icon: "Hammer",
  },
  {
    text: "He understood the language\nof birds and ants.\n\nAn ant once warned her colony:\n\"Enter your homes\nlest Sulayman's armies\ncrush you unknowingly.\"\n\nSulayman smiled and thanked Allah.",
    icon: "Bug",
  },
  {
    text: "The Queen of Sheba's\nmagnificent throne\nwas brought to him\nin the blink of an eye—\n\ntransported across kingdoms\nby the power Allah gave him.",
    icon: "Zap",
  },
  {
    text: "Yet Sulayman never forgot:\n\n\"This is from the favor\nof my Lord,\nto test me—\nwhether I will be grateful\nor ungrateful.\"\n\nPower did not corrupt him.",
    icon: "Heart",
  },
  {
    text: "Wind. Jinn. Birds. Kingdoms.\nLanguage of ants.\nThrones transported instantly.\n\nAll of this—\ngifts he never earned.\n\nBestowed freely\nby Al-Wahhab.",
    icon: "Gift",
  },
  {
    text: "What has Al-Wahhab\ngiven you?\n\nYour heartbeat.\nYour sight. Your breath.\nThe people you love.\n\nGifts you never asked for.\nGifts you could never repay.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "قَالَ رَبِّ اغْفِرْ لِي وَهَبْ لِي مُلْكًا لَّا يَنبَغِي لِأَحَدٍ مِّن بَعْدِي ۖ إِنَّكَ أَنتَ الْوَهَّابُ",
  ayahReference: "Surah Sad 38:35",
  translation: "\"My Lord, forgive me\nand grant me a kingdom\nsuch as will not belong\nto anyone after me.\nIndeed, You are the Bestower.\"",
  nameArabic: "ٱلْوَهَّابُ",
  nameTransliteration: "Al-Wahhab",
  nameSubtitle: "The Bestower • The Giver of Gifts",
  explanationPoints: [
    { icon: "Gift", text: "He gives without condition, without limit, without being asked" },
    { icon: "Wind", text: "Sulayman received what no human before or after would ever possess" },
    { icon: "Heart", text: "His gifts are tests—will you be grateful or forget the Giver?" },
    { icon: "Sparkles", text: "Your breath, your sight, your life—all unearned gifts from Al-Wahhab" },
  ],
  closingText: "Al-Wahhab gives freely.\nHe gave Sulayman a kingdom\nlike no other.\n\nAnd He gives you blessings\nyou have not yet noticed.\n\nLook again. Count again.\nHis gifts are endless.",
  audioFileName: "sad-38-35",
};

export function SulaymanStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#1a0f26", "#2b1a3d", "#140a1f"]}
    />
  );
}
