"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "What does it mean\nfor the Creator of the universe\nto love?\n\nNot the way humans love—\nconditional, fragile, fleeting.\n\nBut a love that is\nthe source of all love.",
    icon: "Heart",
  },
  {
    text: "The Prophet ﷺ said:\n\n\"When Allah loves a servant,\nHe calls Jibreel and says:\n'I love so-and-so,\nso love him.'\n\nThen Jibreel loves him.\"\n\n— Sahih Muslim",
    icon: "Quote",
  },
  {
    text: "Then Jibreel calls out\nto the inhabitants of the heavens:\n\n\"Allah loves so-and-so,\nso love him.\"\n\nAnd the inhabitants\nof the heavens love him.\n\nThen acceptance is placed\nfor him on earth.",
    icon: "Globe",
  },
  {
    text: "He loves those who repent.\n\n\"Indeed, Allah loves\nthe oft-returning (Tawwabeen).\"\n\nNot the perfect.\nNot the sinless.\n\nThe ones who fall\nand come back.",
    icon: "Undo2",
  },
  {
    text: "He loves those who purify.\nHe loves the patient.\nHe loves the just.\nHe loves those\nwho put their trust in Him.\n\nHis love is not hidden—\nHe tells you how to earn it.",
    icon: "CheckCircle",
  },
  {
    text: "And His love is not passive.\n\nWhen He loves you,\nHe tests you—\nnot to break you,\nbut to purify you.\n\n\"If Allah loves a people,\nHe tests them.\"\n\n— Sahih al-Tirmidhi",
    icon: "Flame",
  },
  {
    text: "He placed love\nbetween the hearts\nof believers.\n\n\"He brought their hearts together.\nIf you had spent all\nthat is on the earth,\nyou could not have united them.\"\n\n— Surah Al-Anfal 8:63",
    icon: "Users",
  },
  {
    text: "Al-Wadud.\n\nThe One who loves\nand is worthy of all love.\n\nThe One whose love\ncascades from the heavens\nthrough the angels\ninto every heart on earth.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "وَهُوَ الْغَفُورُ الْوَدُودُ",
  ayahReference: "Surah Al-Buruj 85:14",
  translation: "\"And He is\nthe Forgiving,\nthe Most Loving (Al-Wadud).\"",
  nameArabic: "ٱلْوَدُودُ",
  nameTransliteration: "Al-Wadud",
  nameSubtitle: "The Most Loving • The Affectionate",
  explanationPoints: [
    { icon: "Heart", text: "His love begins in the heavens and descends through all creation" },
    { icon: "Undo2", text: "He loves those who return to Him—not those who never fall" },
    { icon: "Users", text: "Every genuine bond of love between people is from Al-Wadud" },
    { icon: "Flame", text: "His tests are expressions of love—purification, not punishment" },
  ],
  closingText: "Al-Wadud is the source\nof all love in existence.\n\nEvery kindness you've felt,\nevery bond that held—\nit began with Him.\n\nSeek His love.\nIt is the only love\nthat never ends.",
  audioFileName: "al-buruj-85-14",
};

export function AlWadudStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#1f0a1a", "#331122", "#140812"]}
    />
  );
}
