"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Dawud was a young shepherd.\nSmall. Unarmored.\nWith nothing but a slingshot\nand five stones.\n\nAcross the valley stood Jalut—\nGoliath—a giant in full armor\nthat no soldier dared face.",
    icon: "User",
  },
  {
    text: "The entire army\nof the Israelites\ntrembled before Jalut.\n\n\"Who will fight him?\"\n\nSilence.\n\nThen Dawud stepped forward.",
    icon: "Shield",
  },
  {
    text: "He didn't rely\non his own strength.\n\nHe said:\n\"Our Lord,\npour upon us patience\nand plant firmly our feet\nand give us victory\nover the disbelieving people.\"\n\n— Surah Al-Baqarah 2:250",
    icon: "Quote",
  },
  {
    text: "One stone.\n\nDawud released it.\n\nIt struck Jalut\nand brought the giant down.\n\nThe impossible happened.\n\nNot because Dawud was strong.\nBecause Al-Qawiyy\nwas with him.",
    icon: "Zap",
  },
  {
    text: "Musa stood before the sea.\nPharaoh's army behind him.\nWater before him.\n\nNo way out.\n\nHe struck the sea\nwith his staff—\nand it split.\n\nNot his strength.\nAl-Qawiyy's.",
    icon: "Waves",
  },
  {
    text: "The Prophet ﷺ\nwas outnumbered at Badr.\nExiled from his home.\nBoycotted for years.\nBuried his own children.\n\nYet he never broke.\n\nBecause the truly strong\ndraw strength from Al-Qawiyy.",
    icon: "Heart",
  },
  {
    text: "The Prophet ﷺ said:\n\n\"The strong believer\nis better and more beloved\nto Allah than the weak believer,\nthough there is good in both.\"\n\n— Sahih Muslim\n\nTrue strength is not muscle.\nIt is reliance on Al-Qawiyy.",
    icon: "Sparkles",
  },
  {
    text: "You feel weak?\n\nDawud was a shepherd\nwho defeated a giant.\n\nMusa was a fugitive\nwho freed a nation.\n\nMuhammad ﷺ was an orphan\nwho changed the world.\n\nAl-Qawiyy turns weakness\ninto unstoppable strength.",
    icon: "Sun",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "إِنَّ اللَّهَ هُوَ الرَّزَّاقُ ذُو الْقُوَّةِ الْمَتِينُ",
  ayahReference: "Surah Adh-Dhariyat 51:58",
  translation: "\"Indeed, it is Allah\nwho is the Provider,\nthe firm possessor\nof strength (Al-Qawiyy).\"",
  nameArabic: "ٱلْقَوِيُّ",
  nameTransliteration: "Al-Qawiyy",
  nameSubtitle: "The All-Strong • The Most Powerful",
  explanationPoints: [
    { icon: "Zap", text: "Dawud defeated Jalut with one stone—Al-Qawiyy's strength, not his own" },
    { icon: "Waves", text: "Musa split the sea—a fugitive empowered by the All-Strong" },
    { icon: "Heart", text: "True strength is not physical—it is drawing power from Al-Qawiyy" },
    { icon: "Sun", text: "Shepherds, fugitives, orphans—He turns the weak into the unstoppable" },
  ],
  closingText: "Al-Qawiyy is the source\nof all strength.\n\nDawud, Musa, Muhammad ﷺ—\nall drew from Him.\n\nWhatever makes you feel weak,\nAl-Qawiyy can make you strong.",
  audioFileName: "ash-shura-42-19",
};

export function AlQawiyyStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#140d0a", "#221410", "#0f0906"]}
    />
  );
}
