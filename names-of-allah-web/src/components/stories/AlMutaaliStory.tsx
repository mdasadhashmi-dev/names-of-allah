"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "He is exalted\nabove all descriptions\nhumans give Him.\n\nEvery word you use\nfalls short.\nEvery comparison\nis inadequate.\nEvery metaphor\nis incomplete.\n\nAl-Mutaali\ntranscends all language.",
    icon: "ArrowUp",
  },
  {
    text: "No thought\ncan encompass Him.\n\nThe greatest minds\nin human history—\nphilosophers, scientists,\ntheologians—\n\nhave tried\nto conceptualize God.\n\nAll fell short.\n\nAl-Mutaali is beyond\nthe reach of thought.",
    icon: "Lightbulb",
  },
  {
    text: "No imagination\ncan picture Him.\n\nWhatever image\nyou form in your mind—\nHe is not that.\n\nA light? He is beyond light.\nA presence? He is beyond presence.\nInfinity? He is beyond infinity.\n\nAl-Mutaali cannot\nbe imagined.",
    icon: "Eye",
  },
  {
    text: "\"Vision cannot\nperceive Him,\nbut He perceives\nall vision.\nAnd He is\nthe Subtle,\nthe Acquainted.\"\n\n— Surah Al-An'am 6:103\n\nYour eyes\ncannot reach Him.\nBut His sight\nreaches everything.",
    icon: "Quote",
  },
  {
    text: "He is above\nevery comparison.\n\n\"There is nothing\nlike unto Him.\"\n\n— Surah Ash-Shura 42:11\n\nNothing.\nNot the sun.\nNot the universe.\nNot any concept\nyou can conceive.\n\nAl-Mutaali is\nabove every likeness.",
    icon: "Star",
  },
  {
    text: "Any image you form\nof Him is wrong.\n\nHe is greater.\n\nAny limit you imagine—\nHe is beyond it.\nAny boundary you conceive—\nHe transcends it.\nAny definition you create—\nHe exceeds it.\n\nAlways greater.\nAlways higher.\nAlways more.",
    icon: "Sparkles",
  },
  {
    text: "He transcends space.\n\nHe is not \"somewhere.\"\nHe is not contained\nby the heavens or the earth.\n\nHe transcends time.\n\nHe is not bound by\npast, present, or future.\n\nHe transcends thought.\n\nHe is beyond\nthe limits of the human mind.",
    icon: "Globe",
  },
  {
    text: "And yet—\n\nthis God who transcends\neverything—\n\nhears your whisper.\nKnows your heart.\nAnswers your prayer.\n\nAl-Mutaali is exalted\nabove all creation—\nyet closer to you\nthan your own soul.\n\nThat is the paradox\nof the Self-Exalted.",
    icon: "Heart",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "عَالِمُ الْغَيْبِ وَالشَّهَادَةِ الْكَبِيرُ الْمُتَعَالِ",
  ayahReference: "Surah Ar-Ra'd 13:9",
  translation: "\"Knower of the unseen\nand the witnessed,\nthe Grand,\nthe Self-Exalted (Al-Mutaali).\"",
  nameArabic: "ٱلْمُتَعَالِ",
  nameTransliteration: "Al-Mutaali",
  nameSubtitle: "The Self-Exalted • The Supreme",
  explanationPoints: [
    { icon: "ArrowUp", text: "He is exalted above all descriptions—every word and metaphor falls short" },
    { icon: "Eye", text: "Vision cannot perceive Him, but He perceives all vision" },
    { icon: "Star", text: "There is nothing like unto Him—He is above every comparison" },
    { icon: "Heart", text: "Yet this transcendent God hears your whisper and knows your heart" },
  ],
  closingText: "Al-Mutaali is the Self-Exalted.\nBeyond thought.\nBeyond imagination.\nBeyond language.\n\nYet He hears you.\nKnows you.\nLoves you.\n\nExalted above all—\nyet never distant from you.",
  audioFileName: "ar-rad-13-9",
};

export function AlMutaaliStory({ nameId }: { nameId: string }) {
  return <MultiScreenStory nameId={nameId} screens={screens} finalReveal={finalReveal} gradientColors={["#0d0a14", "#14102b", "#080614"]} />;
}
