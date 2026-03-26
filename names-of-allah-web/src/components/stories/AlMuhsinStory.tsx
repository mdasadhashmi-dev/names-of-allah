"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "The Prophet ﷺ said:\n\n\"Indeed, Allah has prescribed\nIhsan — excellence —\nin all things.\"\n\n— Sahih Muslim 1955\n\nNot in some things.\nNot in easy things.\nIn all things.",
    icon: "Quote",
  },
  {
    text: "Look at the sunset.\n\nHe could have ended the day\nwith a simple dimming\nof the light.\n\nInstead He painted the sky\nin amber, rose, and violet.\n\nHe did not have to\nmake it beautiful.\n\nBut He did.",
    icon: "Sun",
  },
  {
    text: "He gave fruits their flavor.\nHe could have made them\ntasteless — just fuel\nfor the body.\n\nBut the sweetness of a date,\nthe burst of a pomegranate,\nthe coolness of watermelon —\n\nAll of it is Ihsan.\nExcellence beyond necessity.",
    icon: "Leaf",
  },
  {
    text: "He gave birds their song.\n\nNo survival reason\nfor their melodies\nto be so beautiful.\n\nNo practical purpose\nfor the nightingale's voice\nto move the human heart.\n\nBut Al-Muhsin does\neverything with excellence.",
    icon: "Feather",
  },
  {
    text: "He designed the human eye\nto see color —\nnot just shapes and shadows.\n\nHe gave flowers their scent.\nHe made snow white\nand the ocean deep blue.\n\nEvery detail is intentional.\nEvery beauty is a signature.",
    icon: "Eye",
  },
  {
    text: "Even in His decree,\nthere is excellence.\n\nThe night is dark —\nso you may rest.\n\nThe pain is sharp —\nso you may grow.\n\nThe loss is heavy —\nso you may return to Him.\n\nNothing is without wisdom.",
    icon: "Moon",
  },
  {
    text: "And He wants\nexcellence from you too.\n\nWhen you pray —\npray as though you see Him.\n\nWhen you work —\nwork with your best.\n\nWhen you speak —\nlet your words\nbe chosen with care.\n\nIhsan is worship\nat its highest form.",
    icon: "Star",
  },
  {
    text: "Al-Muhsin.\n\nThe One who made\neverything with excellence.\n\nWho perfected creation\nnot out of need,\nbut out of generosity.\n\n\"He made excellent\neverything He created.\"\n\nAnd He calls you\nto excellence in return.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "الَّذِي أَحْسَنَ كُلَّ شَيْءٍ خَلَقَهُ",
  ayahReference: "Surah As-Sajdah 32:7",
  translation: "\"He who made excellent\neverything He created.\"",
  nameArabic: "ٱلْمُحْسِنُ",
  nameTransliteration: "Al-Muhsin",
  nameSubtitle: "The One Who Acts with Excellence • The Beautifier",
  explanationPoints: [
    { icon: "Sun", text: "Every sunset, every fragrance, every melody — beauty beyond necessity" },
    { icon: "Layers", text: "His excellence is in every layer of creation, from atoms to galaxies" },
    { icon: "Gem", text: "He perfected creation not out of need, but out of infinite generosity" },
    { icon: "Star", text: "He calls us to Ihsan — to worship Him as though we see Him" },
  ],
  closingText: "Al-Muhsin does everything\nwith excellence.\n\nThe colors, the flavors,\nthe melodies, the details —\nnone of it was necessary.\n\nAll of it was a gift.\n\nNow strive for Ihsan\nin everything you do.\nFor He sees\neven what no one else does.",
  audioFileName: "as-sajdah-32-7",
};

export function AlMuhsinStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#0c0e10", "#14181c", "#080a0e"]}
    />
  );
}
