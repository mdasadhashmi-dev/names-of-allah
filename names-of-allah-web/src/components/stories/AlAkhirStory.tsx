"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "He is Al-Awwal—the First.\nAnd He is Al-Akhir—the Last.\n\nPaired together.\nBecause the One\nwho was before everything\nwill also be\nafter everything.",
    icon: "Star",
  },
  {
    text: "Everything will end.\n\nThe sun will fold up.\n\n\"When the sun\nis wrapped up.\"\n\n— Surah At-Takwir 81:1\n\nThe star that gives\nall life on earth—\nwill be extinguished.",
    icon: "Sun",
  },
  {
    text: "The stars will fall.\nThe oceans will boil.\nThe mountains will be\nblown like dust.\n\n\"And the mountains\nwill be removed\nand will be\nbut a mirage.\"\n\n— Surah An-Naba 78:20",
    icon: "Mountain",
  },
  {
    text: "The trumpet will be blown.\n\n\"And the trumpet\nwill be blown,\nand whoever is\nin the heavens\nand whoever is on earth\nwill fall dead.\"\n\n— Surah Az-Zumar 39:68\n\nEveryone. Everything.\nGone.",
    icon: "Zap",
  },
  {
    text: "Then a voice will call out:\n\n\"Whose is the kingdom today?\"\n\nSilence.\nNo pharaoh answers.\nNo king answers.\nNo president answers.\n\nThen Allah Himself\nwill answer:\n\n\"Allah's—the One,\nthe Irresistible.\"\n\n— Surah Ghafir 40:16",
    icon: "Quote",
  },
  {
    text: "After all ends—\nHe remains.\n\nAfter the last star dies.\nAfter the last soul\nis taken.\nAfter the universe\ncollapses.\n\nAl-Akhir remains.\nUnchanged.\nUndiminished.\nEternal.",
    icon: "Moon",
  },
  {
    text: "He is the last refuge.\n\nWhen doctors say\n\"There's nothing more\nwe can do\"—\nAl-Akhir remains.\n\nWhen every door closes—\nAl-Akhir remains.\n\nWhen hope runs out—\nAl-Akhir remains.\n\nHe is always\nthe last One standing.",
    icon: "Shield",
  },
  {
    text: "Everything you love\nwill end.\n\nBut Al-Akhir\nwill not end.\n\nSo build your love\naround the One\nwho will never leave.\n\nAl-Akhir.\nThe Last.\nThe one who remains\nwhen everything else\nis gone.",
    icon: "Heart",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "هُوَ الْأَوَّلُ وَالْآخِرُ وَالظَّاهِرُ وَالْبَاطِنُ ۖ وَهُوَ بِكُلِّ شَيْءٍ عَلِيمٌ",
  ayahReference: "Surah Al-Hadid 57:3",
  translation: "\"He is the First\nand the Last (Al-Akhir),\nthe Manifest\nand the Hidden.\nAnd He is,\nof all things, Knowing.\"",
  nameArabic: "ٱلْآخِرُ",
  nameTransliteration: "Al-Akhir",
  nameSubtitle: "The Last • The Eternal End",
  explanationPoints: [
    { icon: "Sun", text: "The sun will fold, stars will fall, mountains will be dust—all will end" },
    { icon: "Zap", text: "The trumpet will be blown—every living being in heavens and earth will fall" },
    { icon: "Moon", text: "After all ends, He remains—unchanged, undiminished, eternal" },
    { icon: "Heart", text: "He is the last refuge—when everything fails, Al-Akhir remains" },
  ],
  closingText: "Al-Akhir is the Last.\nAfter the sun folds.\nAfter the stars fall.\nAfter everything ends.\n\nHe remains.\n\nBuild your love\naround the One\nwho will never end.",
  audioFileName: "al-hadid-57-3-akhir",
};

export function AlAkhirStory({ nameId }: { nameId: string }) {
  return <MultiScreenStory nameId={nameId} screens={screens} finalReveal={finalReveal} gradientColors={["#0d0a14", "#141022", "#08060f"]} />;
}
