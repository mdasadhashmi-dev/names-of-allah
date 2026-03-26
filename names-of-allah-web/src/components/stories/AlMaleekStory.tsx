"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Every empire that ever stood\nhas crumbled.\n\nEvery throne that was built\nhas turned to dust.\n\nEvery king who claimed\nabsolute power\nis now forgotten bones\nbeneath the earth.",
    icon: "Crown",
  },
  {
    text: "Pharaoh said:\n\"I am your lord, most high.\"\n\nThe sea swallowed him.\n\nNimrod said:\n\"I give life and death.\"\n\nA mosquito brought him\nto his knees.",
    icon: "Waves",
  },
  {
    text: "On the Day of Judgment,\nAllah will fold the heavens\nin His right hand\nand say:\n\n\"I am the King.\nWhere are the kings of the earth?\nWhere are the tyrants?\"\n\n— Sahih Muslim",
    icon: "Scale",
  },
  {
    text: "And no one will answer.\n\nNot a single voice.\nNot a single claim.\n\nEvery borrowed throne\nreturned to its Owner.\n\nEvery illusory kingdom\nexposed for what it was.",
    icon: "Mountain",
  },
  {
    text: "\"To whom belongs\nthe sovereignty today?\"\n\nSilence.\n\nThen Allah answers\nHis own question:\n\n\"To Allah, the One,\nthe Prevailing.\"\n\n— Surah Ghafir 40:16",
    icon: "Sparkles",
  },
  {
    text: "But for the believers—\nthere is a promise\nthat makes all of this\nworth enduring.\n\nA seat.\nA seat of honor.\nNear the Sovereign Himself.",
    icon: "Gem",
  },
  {
    text: "Not servants standing\nat a distance.\n\nNot subjects begging\nfor a glance.\n\nBut honored guests,\nseated in truth,\nin the presence\nof the Omnipotent Sovereign.\n\nThat is Jannah.",
    icon: "Star",
  },
  {
    text: "Al-Maleek.\n\nThe Sovereign whose kingdom\nhas no border,\nno beginning, no end.\n\nThe One whose throne\nis the only throne\nthat will never fall.",
    icon: "Crown",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "فِي مَقْعَدِ صِدْقٍ عِندَ مَلِيكٍ مُّقْتَدِرٍ",
  ayahReference: "Surah Al-Qamar 54:55",
  translation: "\"In a seat of honor,\nnear a Sovereign,\nPerfect in Ability.\"",
  nameArabic: "ٱلْمَلِيكُ",
  nameTransliteration: "Al-Maleek",
  nameSubtitle: "The Omnipotent Sovereign • The Supreme Ruler",
  explanationPoints: [
    { icon: "Crown", text: "Every kingdom on earth is borrowed — Al-Maleek's sovereignty alone is eternal and absolute" },
    { icon: "Scale", text: "On the Day of Judgment, all false claims to power will be silenced before the true King" },
    { icon: "Gem", text: "The ultimate reward of Paradise is nearness to Al-Maleek — a seat of honor beside the Sovereign" },
    { icon: "Mountain", text: "His dominion has no border, no rival, no end — He is the King of all kings" },
  ],
  closingText: "Every throne you see\nwill eventually be empty.\n\nEvery crown will rust.\nEvery empire will be\na chapter in a book.\n\nBut Al-Maleek reigns forever.\n\nAnd He has saved you\na seat near Him.",
  audioFileName: "al-qamar-54-55",
};

export function AlMaleekStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#141008", "#201a10", "#0e0c06"]}
    />
  );
}
