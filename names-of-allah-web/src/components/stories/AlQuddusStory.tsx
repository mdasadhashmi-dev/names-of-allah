"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Above the seven heavens,\nabove the Throne,\nbeyond what any eye\nhas ever seen—\n\nangels stand in worship.\n\nThey have never stopped.",
    icon: "Star",
  },
  {
    text: "Some are in ruku'\nsince the day they were created.\nThey have never raised\ntheir heads.\n\nSome are in sujud.\nThey have never lifted\ntheir foreheads from worship.",
    icon: "ArrowDown",
  },
  {
    text: "They say:\n\n\"Subbuhun Quddus,\nRabb ul-mala'ikati war-ruh.\"\n\n\"Glorified, Most Holy,\nLord of the angels and the Spirit.\"\n\n— Sahih Muslim",
    icon: "Quote",
  },
  {
    text: "They do not eat.\nThey do not sleep.\nThey do not sin.\nThey do not tire.\n\nPure beings—\nworshipping the One\nwho is purer than them all.",
    icon: "Sparkles",
  },
  {
    text: "Yet even the angels asked:\n\n\"Will You place on earth\none who causes corruption?\"\n\nThey could not fathom\nwhy imperfect beings\nwere given a chance\nbefore Al-Quddus.",
    icon: "HelpCircle",
  },
  {
    text: "But Allah knew\nwhat they did not.\n\nHe is Al-Quddus—\nfree from every imperfection.\nFree from every fault.\nFree from every comparison.\n\nNothing resembles Him.",
    icon: "Shield",
  },
  {
    text: "Every flaw you see\nin the world—\ninjustice, suffering, cruelty—\n\nis from creation,\nnot from the Creator.\n\nAl-Quddus is above\nevery deficiency\nyou have ever witnessed.",
    icon: "Eye",
  },
  {
    text: "And yet He calls you\nto purify yourself.\n\nTo cleanse your heart.\nTo shed your sins.\nTo rise above your base desires.\n\nBecause the Holy One\nloves those who seek purity.",
    icon: "Droplets",
  },
  {
    text: "The angels worship Him\nwithout ceasing.\n\nYou—with all your flaws—\nare invited to worship Him too.\n\nThat invitation itself\nis a gift from Al-Quddus.",
    icon: "Heart",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ",
  ayahReference: "Surah Al-Hashr 59:23",
  translation: "\"He is Allah,\nbesides Whom there is no deity—\nthe King,\nthe Most Holy (Al-Quddus).\"",
  nameArabic: "ٱلْقُدُّوسُ",
  nameTransliteration: "Al-Quddus",
  nameSubtitle: "The Most Holy • The Most Pure",
  explanationPoints: [
    { icon: "Star", text: "Angels worship Him ceaselessly—yet He is beyond even their purity" },
    { icon: "Shield", text: "He is free from every flaw, every fault, every imperfection" },
    { icon: "Droplets", text: "He calls imperfect beings to seek purification and rise" },
    { icon: "Heart", text: "The invitation to worship Al-Quddus is itself a mercy" },
  ],
  closingText: "Al-Quddus is the Most Pure.\nNothing in creation compares to Him.\n\nYet He invites you—\nflawed and imperfect—\nto turn to Him.\n\nPurify your heart for Al-Quddus.",
  audioFileName: "al-hashr-59-23-quddus",
};

export function AlQuddusStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#0f1a26", "#162233", "#0a1019"]}
    />
  );
}
