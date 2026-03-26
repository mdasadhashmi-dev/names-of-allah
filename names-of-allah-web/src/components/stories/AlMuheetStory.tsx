"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Where can you go\nthat He does not see?\n\nWhat depth can you sink to\nthat His knowledge\ndoes not reach?\n\nThere is nowhere in all of existence\nthat is outside of Him.",
    icon: "Eye",
  },
  {
    text: "The oceans—\nvast, crushing, unfathomable.\n\nBeneath the darkest trench,\nwhere no light has ever reached,\nwhere no human eye has seen—\n\nHe is there.\nEncompassing it all.",
    icon: "Waves",
  },
  {
    text: "The furthest star,\nbillions of light-years away,\nin a galaxy you will never name—\n\nHe encompasses it.\n\nNot from a distance.\nNot as an observer.\n\nBut completely. Totally.",
    icon: "Star",
  },
  {
    text: "And yet this is not\na reason to fear.\n\nBecause the same God\nwho encompasses all things\nsaid of His mercy:\n\n\"My mercy encompasses\nall things.\"\n\n— Surah Al-A'raf 7:156",
    icon: "Heart",
  },
  {
    text: "Think about that.\n\nThe One from whom\nnothing escapes—\n\nHis mercy also\nescapes nothing.\n\nNo pain is unwitnessed.\nNo tear falls unseen.\nNo whisper goes unheard.",
    icon: "Droplet",
  },
  {
    text: "They thought\nthey could hide their plans.\nThey thought darkness\nwas a shield.\n\nBut Allah encompasses\nthe disbelievers.\n\nEvery secret meeting.\nEvery hidden intention.\nEvery whispered plot.",
    icon: "Shield",
  },
  {
    text: "And for the believer,\nthis is the deepest comfort.\n\nYou are never alone.\nYou are never forgotten.\nYou are never outside\nHis care.\n\nHe encompasses you—\nyour grief, your hope, your prayers.",
    icon: "Globe",
  },
  {
    text: "Al-Muheet.\n\nThe One who surrounds\nall things.\n\nFrom the atom\nto the galaxy,\nfrom your deepest secret\nto your loudest cry—\n\nNothing is beyond Him.",
    icon: "Infinity",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "أَلَا إِنَّهُ بِكُلِّ شَيْءٍ مُّحِيطٌ",
  ayahReference: "Surah Fussilat 41:54",
  translation: "\"Unquestionably,\nHe is, of all things,\nencompassing.\"",
  nameArabic: "ٱلْمُحِيطُ",
  nameTransliteration: "Al-Muheet",
  nameSubtitle: "The All-Encompassing • The All-Surrounding",
  explanationPoints: [
    { icon: "Globe", text: "His knowledge encompasses every atom in every universe — nothing is hidden from Him" },
    { icon: "Heart", text: "His mercy encompasses all things — no suffering is unwitnessed, no prayer unheard" },
    { icon: "Shield", text: "No secret is beyond His reach — He encompasses the seen and the unseen" },
    { icon: "Infinity", text: "From the subatomic to the cosmic, nothing exists outside His encompassing presence" },
  ],
  closingText: "Al-Muheet sees you\nwhen no one else does.\n\nHe hears you\nwhen no one else listens.\n\nYou cannot escape Him—\nbut why would you want to?\n\nHis encompassing nature\nis your greatest refuge.",
  audioFileName: "fussilat-41-54",
};

export function AlMuheetStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#08101a", "#0e1a28", "#050c14"]}
    />
  );
}
