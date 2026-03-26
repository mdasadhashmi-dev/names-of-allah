"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  { text: "He is above\nthe seven heavens.\nAbove the Throne.\nAbove everything\nthat exists.\n\nNothing is higher\nthan Al-Aliyy.", icon: "ArrowUp" },
  { text: "Yet when the Prophet ﷺ\nascended through\nthe seven heavens\non the Night Journey—\n\nAllah brought him close.\n\nThe Highest\nbrought the servant near.", icon: "Star" },
  { text: "He is the Most High—\nyet He hears the ant\nwalking on a stone\nin the darkest night.\n\nHigh above all—\nyet closer to you\nthan your jugular vein.", icon: "Heart" },
  { text: "\"And He is\nthe Most High (Al-Aliyy),\nthe Most Great.\"\n\n— Surah Al-Baqarah 2:255\n\nIn sujud—the lowest\nposition a human takes—\nyou say:\n\"Subhana Rabbiyal A'la.\"\nGlory to my Lord, the Most High.", icon: "Quote" },
  { text: "The paradox:\nthe lower you go\nin humility before Him—\nthe higher He raises you.\n\nThe Prophet ﷺ said:\n\"Whoever humbles himself\nfor Allah,\nAllah will raise him.\"\n\n— Sahih Muslim", icon: "ArrowDown" },
  { text: "Pharaoh tried\nto build a tower\nto reach the heavens.\n\n\"Build me a tower\nthat I may reach the ways—\nthe ways to the heavens—\nso I may look\nat the deity of Musa.\"\n\n— Surah Ghafir 40:36-37\n\nHis tower crumbled.\nHis kingdom drowned.", icon: "Mountain" },
  { text: "You cannot reach Al-Aliyy\nby climbing.\nBy building.\nBy force.\n\nYou reach Him\nby descending—\ninto sujud.\nInto humility.\nInto surrender.", icon: "Sparkles" },
  { text: "Al-Aliyy is above all.\n\nAbove your understanding.\nAbove your imagination.\nAbove every limit\nyou can conceive.\n\nAnd yet—\nHe descends to hear you\nevery last third of the night.", icon: "Moon" },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "وَهُوَ الْعَلِيُّ الْعَظِيمُ",
  ayahReference: "Surah Al-Baqarah 2:255",
  translation: "\"And He is\nthe Most High (Al-Aliyy),\nthe Magnificent.\"",
  nameArabic: "ٱلْعَلِيُّ",
  nameTransliteration: "Al-Aliyy",
  nameSubtitle: "The Most High • The Exalted",
  explanationPoints: [
    { icon: "ArrowUp", text: "Nothing is above Him—He is the highest in every sense" },
    { icon: "Star", text: "On the Night Journey, the Highest brought His servant near" },
    { icon: "ArrowDown", text: "The lower you go in sujud, the closer you get to the Most High" },
    { icon: "Moon", text: "He descends to the lowest heaven every night—asking who calls upon Him" },
  ],
  closingText: "Al-Aliyy is the Most High.\nAbove everything.\nBeyond everything.\n\nYet He descends every night\nto hear your prayer.\n\nHumble yourself—\nand He will raise you.",
  audioFileName: "al-baqarah-2-255-aliyy",
};

export function AlAliyyStory({ nameId }: { nameId: string }) {
  return <MultiScreenStory nameId={nameId} screens={screens} finalReveal={finalReveal} gradientColors={["#0a0d1a", "#101426", "#060814"]} />;
}
