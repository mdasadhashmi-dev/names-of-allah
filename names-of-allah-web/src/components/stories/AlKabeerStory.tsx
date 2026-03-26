"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "\"Allahu Akbar.\"\n\nYou say it\nat least 80 times a day.\nIn every prayer.\nEvery transition.\nEvery sujud.\n\nBut have you ever stopped\nto feel what it means?",
    icon: "ArrowUp",
  },
  {
    text: "Allahu Akbar.\nGod is Greater.\n\nGreater than what?\n\nGreater than everything.\nGreater than anything\nyou could ever\ncompare Him to.",
    icon: "Sparkles",
  },
  {
    text: "He is greater\nthan your fears.\n\nThe anxiety that keeps you up.\nThe worry that grips your chest.\nThe dread of tomorrow.\n\nAl-Kabeer is greater\nthan all of it.",
    icon: "Shield",
  },
  {
    text: "He is greater\nthan your problems.\n\nThe debt you can't pay.\nThe illness that won't heal.\nThe relationship that broke.\n\nNothing you face\nis greater than Al-Kabeer.",
    icon: "Heart",
  },
  {
    text: "He is greater\nthan your enemies.\n\nPharaoh's army was nothing.\nNimrod's fire was nothing.\nThe armies at Badr\nwere nothing.\n\nAl-Kabeer reduces\nevery opposition to dust.",
    icon: "Zap",
  },
  {
    text: "The mountains—\nmassive, ancient, unmovable—\nare small before Him.\n\nThe oceans—\nvast, deep, endless—\nare a drop before Him.\n\nThe galaxies—\nbillions of stars\nstretching across infinity—\nare nothing before Al-Kabeer.",
    icon: "Globe",
  },
  {
    text: "Yet this God—\ngreater than the galaxies—\ncares about your smallest concern.\n\nYour whispered prayer.\nYour quiet tear.\nYour hidden worry.\n\nThe Greatest\nattends to the smallest.",
    icon: "Moon",
  },
  {
    text: "When you say \"Allahu Akbar\"\nbefore every prayer—\n\nyou are saying:\n\"Whatever I was just doing,\nwhatever was on my mind—\nGod is greater.\"\n\nAl-Kabeer.\nThe Greatest.\nGreater than everything.",
    icon: "Sun",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "ذَٰلِكَ بِأَنَّ اللَّهَ هُوَ الْحَقُّ وَأَنَّ مَا يَدْعُونَ مِن دُونِهِ هُوَ الْبَاطِلُ وَأَنَّ اللَّهَ هُوَ الْعَلِيُّ الْكَبِيرُ",
  ayahReference: "Surah Al-Hajj 22:62",
  translation: "\"That is because Allah—\nHe is the Truth,\nand that which they call upon\nother than Him is falsehood,\nand because Allah—\nHe is the Most High,\nthe Grand (Al-Kabeer).\"",
  nameArabic: "ٱلْكَبِيرُ",
  nameTransliteration: "Al-Kabeer",
  nameSubtitle: "The Greatest • The Grand",
  explanationPoints: [
    { icon: "ArrowUp", text: "Allahu Akbar—said 80+ times daily—means He is greater than everything" },
    { icon: "Shield", text: "Greater than your fears, your problems, your enemies—all of it" },
    { icon: "Globe", text: "Mountains, oceans, galaxies—all small before Al-Kabeer" },
    { icon: "Moon", text: "Yet the Greatest cares about your smallest whispered concern" },
  ],
  closingText: "Al-Kabeer is greater\nthan anything you face.\n\nGreater than your fears.\nGreater than your problems.\nGreater than the galaxies.\n\nAllahu Akbar.\nLet those words\nsettle into your heart.",
  audioFileName: "al-hajj-22-62",
};

export function AlKabeerStory({ nameId }: { nameId: string }) {
  return <MultiScreenStory nameId={nameId} screens={screens} finalReveal={finalReveal} gradientColors={["#0d0d1a", "#14142b", "#080814"]} />;
}
