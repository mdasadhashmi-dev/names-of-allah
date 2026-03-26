"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "A man who could not read.\nA man who could not write.\nAn orphan.\nA shepherd.\nA trader.\n\nHe went to a cave\non a mountain\nto be alone with his thoughts.\n\nHe did not know\nwhat was about to happen.",
    icon: "Mountain",
  },
  {
    text: "An angel appeared.\nNot gently.\nNot softly.\n\nHe seized Muhammad ﷺ\nand pressed him so tightly\nhe thought he would break.\n\nThen the angel spoke:\n\n\"Read.\"\n\nMuhammad ﷺ said:\n\"I cannot read.\"",
    icon: "Feather",
  },
  {
    text: "The angel pressed him again.\nHarder.\n\n\"Read.\"\n\n\"I cannot read.\"\n\nA third time.\nThe pressure was immense.\n\nThen came the words\nthat changed\nthe course of human history.",
    icon: "Zap",
  },
  {
    text: "\"Read, in the name\nof your Lord\nwho created.\n\nCreated man\nfrom a clinging substance.\n\nRead, and your Lord\nis Al-Akram—\nthe Most Generous.\"\n\n— Surah Al-Alaq 96:1-3",
    icon: "BookOpen",
  },
  {
    text: "The very first revelation.\nThe first words of the Quran\nto touch the earth.\n\nAnd in those first words,\nAllah chose to name Himself\nAl-Akram.\n\nThe Most Generous.\n\nOf all the names\nHe could have introduced—\nHe chose generosity.",
    icon: "Gem",
  },
  {
    text: "What was His generosity?\n\nHe taught.\n\n\"He taught by the pen.\nHe taught man\nwhat he did not know.\"\n\n— Surah Al-Alaq 96:4-5\n\nHis greatest gift\nwas not gold or kingdoms.\nIt was knowledge.\nGuidance.\nThe Quran itself.",
    icon: "Lightbulb",
  },
  {
    text: "He gave an unlettered man\nthe most eloquent book\never spoken.\n\nHe gave a small community\nin the desert\na message\nthat would reach\nevery corner of the earth.\n\nHe gave humanity\nthe way back to Him.",
    icon: "Globe",
  },
  {
    text: "Al-Akram.\n\nThe Most Generous.\n\nHis first gift to mankind\nwas not punishment.\nNot warning.\nNot threat.\n\nIt was \"Read.\"\nIt was knowledge.\nIt was the Quran.\n\nThe most generous act\nin all of history\nbegan in a cave.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "اقْرَأْ وَرَبُّكَ الْأَكْرَمُ",
  ayahReference: "Surah Al-Alaq 96:3",
  translation: "\"Read, and your Lord\nis the Most Generous\n(Al-Akram).\"",
  nameArabic: "الأكرم",
  nameTransliteration: "Al-Akram",
  nameSubtitle: "The Most Generous • The Most Bountiful",
  explanationPoints: [
    { icon: "Feather", text: "The first revelation began with 'Read' — given to a man who could not read" },
    { icon: "Gem", text: "Of all His names, Al-Akram was the one He chose for the very first revelation" },
    { icon: "Lightbulb", text: "His greatest generosity is knowledge — 'He taught man what he did not know'" },
    { icon: "BookOpen", text: "The Quran itself is the ultimate act of Al-Akram's generosity to all of mankind" },
  ],
  closingText: "Al-Akram began\nthe final revelation\nwith generosity.\n\nNot fear. Not wrath.\nBut a gift:\n\nRead.\nLearn.\nKnow your Lord.\n\nThe cave of Hira\nwas where the Most Generous\ngave humanity\nits greatest treasure.",
  audioFileName: "al-alaq-96-3",
};

export function AlAkramStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#081410", "#0e201a", "#050f0c"]}
    />
  );
}
