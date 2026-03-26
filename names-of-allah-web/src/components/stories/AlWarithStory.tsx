"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Every kingdom\never built\nwas temporary.\n\nSulayman's kingdom—\nwind, jinn, animals\nat his command—\ngone.\n\nThe mightiest kingdom\nof any human—\nreturned to Al-Warith.",
    icon: "Crown",
  },
  {
    text: "Pharaoh's empire.\n\nThe pyramids.\nThe armies.\nThe treasure.\nThe Nile itself\nunder his control.\n\nAll of it—\nreturned to Al-Warith.\n\nThe sea swallowed him.\nThe sand buried\nhis glory.",
    icon: "Waves",
  },
  {
    text: "Rome fell.\nPersia fell.\nThe Ottomans fell.\nThe British Empire fell.\n\nEvery superpower.\nEvery dynasty.\nEvery empire\nthat declared itself\neternal—\n\nended.\n\nAnd returned\nto Al-Warith.",
    icon: "Globe",
  },
  {
    text: "\"Indeed, it is We\nwho give life\nand cause death,\nand We are\nthe Inheritor.\"\n\n— Surah Al-Hijr 15:23\n\nEverything returns to Him.\nNot as a transaction—\nbut as a truth.\n\nIt was always His.",
    icon: "Quote",
  },
  {
    text: "Everything you own\nwill return to Him.\n\nYour house.\nYour car.\nYour money.\nYour clothes.\n\nYou came\nwith nothing.\nYou will leave\nwith nothing.\n\nAl-Warith inherits\neverything you held.",
    icon: "ArrowDown",
  },
  {
    text: "Your body\nreturns to the earth.\n\nDust to dust.\nBones to soil.\nThe body you spent\nyears feeding, clothing,\nbeautifying—\n\nreturns to the ground\nit came from.\n\nBorrowed.\nNever owned.",
    icon: "Mountain",
  },
  {
    text: "Your soul\nreturns to Him.\n\n\"To Allah we belong,\nand to Him\nwe return.\"\n\n— Surah Al-Baqarah 2:156\n\nEverything returns.\nYour body. Your soul.\nYour wealth. Your time.\n\nAll back to Al-Warith.",
    icon: "Heart",
  },
  {
    text: "So what will you\nleave behind?\n\nKnowledge that benefits.\nCharity that continues.\nA righteous child\nwho prays for you.\n\nInvest in what Al-Warith\nvalues—\nbecause everything else\nwill be inherited back.",
    icon: "Sun",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "إِنَّا نَحْنُ نَرِثُ الْأَرْضَ وَمَنْ عَلَيْهَا وَإِلَيْنَا يُرْجَعُونَ",
  ayahReference: "Surah Maryam 19:40",
  translation: "\"Indeed, it is We\nwho will inherit the earth\nand whoever is on it,\nand to Us\nthey will be returned.\"",
  nameArabic: "ٱلْوَارِثُ",
  nameTransliteration: "Al-Warith",
  nameSubtitle: "The Inheritor • The Supreme Heir",
  explanationPoints: [
    { icon: "Crown", text: "Sulayman's kingdom, Pharaoh's empire, Rome, Persia—all returned to Him" },
    { icon: "Globe", text: "Every superpower that declared itself eternal eventually ended" },
    { icon: "ArrowDown", text: "Everything you own will return to Him—you came with nothing, you leave with nothing" },
    { icon: "Sun", text: "Invest in what lasts—knowledge, charity, and righteous children who pray for you" },
  ],
  closingText: "Al-Warith inherits everything.\nKingdoms. Empires. Your body.\nYour wealth. The earth itself.\n\nNothing is truly yours.\nIt was always His.\n\nSo invest in what\nAl-Warith values—\nbefore it all returns.",
  audioFileName: "maryam-19-40",
};

export function AlWarithStory({ nameId }: { nameId: string }) {
  return <MultiScreenStory nameId={nameId} screens={screens} finalReveal={finalReveal} gradientColors={["#10100a", "#1a1a10", "#0a0a06"]} />;
}
