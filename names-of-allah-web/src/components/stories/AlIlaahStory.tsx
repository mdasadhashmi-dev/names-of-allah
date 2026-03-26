"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Every heart worships something.\n\nMoney. Status. Beauty.\nApproval. Desire. Power.\n\nThe heart was not built\nto be empty.",
    icon: "Heart",
  },
  {
    text: "Ibrahim stood before his father\nand asked a question\nthat echoes through time:\n\n\"Why do you worship\nthat which does not hear\nand does not see?\"",
    icon: "Eye",
  },
  {
    text: "The idols of Quraysh\ncould not defend themselves.\n\nThe wealth of Qarun\ncould not save him.\n\nThe throne of Fir'awn\ncrumbled into the sea.",
    icon: "Mountain",
  },
  {
    text: "Whatever you give\nyour deepest love to\u2014\nwhatever you fear losing most\u2014\n\nthat is what you worship.\n\nBe honest with yourself.",
    icon: "Scale",
  },
  {
    text: "But everything you worship\nbesides Him\nwill eventually leave you.\n\nIt will break.\nIt will disappoint.\nIt will end.",
    icon: "Wind",
  },
  {
    text: "Only One never fades.\nOnly One never fails.\nOnly One never dies.\n\nOnly One truly hears\nyour call at 3am\nwhen the world is silent.",
    icon: "Moon",
  },
  {
    text: "The hearts were created\nwith a space\nthat only He can fill.\n\nNo amount of creation\ncan satisfy the void\nmeant for the Creator.",
    icon: "Infinity",
  },
  {
    text: "Your God is One God.\nThere is no deity except Him.\n\nReturn your heart\nto the only One\nworthy of its worship.\n\nThis is the call of every prophet\nsince the beginning of time.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "وَإِلَـٰهُكُمْ إِلَـٰهٌ وَاحِدٌ ۖ لَّا إِلَـٰهَ إِلَّا هُوَ الرَّحْمَـٰنُ الرَّحِيمُ",
  ayahReference: "Surah Al-Baqarah 2:163",
  translation: "\"And your God is One God.\nThere is no deity except Him,\nthe Most Merciful, the Especially Merciful.\"",
  nameArabic: "الإِلَـٰه",
  nameTransliteration: "Al-Ilaah",
  nameSubtitle: "The One Worthy of Worship • The Only True God",
  explanationPoints: [
    { icon: "Heart", text: "Every heart was created to worship Him alone — nothing else can fill that space" },
    { icon: "Crown", text: "He alone deserves ultimate devotion, love, fear, and hope" },
    { icon: "Shield", text: "Every prophet came with the same message: worship none but Al-Ilaah" },
    { icon: "Star", text: "True freedom is found in surrendering to the only One worthy of surrender" },
  ],
  closingText: "Al-Ilaah is the truth\nthat every soul already knows.\n\nThe heart that worships Him alone\nfinds its rest.\n\nAnd the heart that turns elsewhere\nwill search forever\nand never be filled.",
  audioFileName: "al-baqarah-2-163",
};

export function AlIlaahStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#0c0a14", "#14101e", "#08060e"]}
    />
  );
}
