"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Ibrahim was a boy\nwhen he shattered the idols.\n\nA young man\nwhen they lit the fire.\n\nAnd alone—\ncompletely alone—\nwhen his own father\nturned against him.",
    icon: "Flame",
  },
  {
    text: "His father said:\n\n\"Are you turning away\nfrom my gods, O Ibrahim?\nIf you do not stop,\nI will surely stone you.\nSo leave me\nfor a long time.\"\n\n— Surah Maryam 19:46",
    icon: "Quote",
  },
  {
    text: "Stone you.\n\nNot a stranger.\nNot an enemy.\n\nHis father.\n\nThe one who was supposed\nto protect him.\nThe one who should have\nbeen his shelter.",
    icon: "Mountain",
  },
  {
    text: "And Ibrahim's response\nis one of the most\nbeautiful moments\nin all of scripture:\n\n\"Peace be upon you.\nI will ask forgiveness\nfor you from my Lord.\"\n\nNo anger. No bitterness.",
    icon: "Feather",
  },
  {
    text: "And then he said\nthe words that reveal\neverything:\n\n\"Indeed, He is ever\ngracious to me.\"\n\n— Surah Maryam 19:47\n\nHafee.\nBenevolent. Gracious.\nTenderly kind.",
    icon: "Heart",
  },
  {
    text: "Even when his father\nrejected him,\nIbrahim knew\nsomething his father didn't:\n\nThat Allah's benevolence\nhad never left him.\n\nNot in the fire.\nNot in exile.\nNot in loneliness.",
    icon: "Sun",
  },
  {
    text: "Al-Hafee is the One\nwho is kind to you\nwhen the world is cruel.\n\nWho is gentle with you\nwhen people are harsh.\n\nWho draws near to you\nwhen everyone\npulls away.",
    icon: "Leaf",
  },
  {
    text: "Al-Hafee.\n\nThe Benevolent One\nwho was gracious to Ibrahim\nwhen his own blood\nabandoned him.\n\nIf He was kind to Ibrahim\nin that darkness—\nimagine how kind\nHe is to you.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "سَلَامٌ عَلَيْكَ ۖ سَأَسْتَغْفِرُ لَكَ رَبِّي ۖ إِنَّهُ كَانَ بِي حَفِيًّا",
  ayahReference: "Surah Maryam 19:47",
  translation: "\"Peace be upon you.\nI will ask forgiveness\nfor you from my Lord.\nIndeed, He is ever\ngracious to me.\"",
  nameArabic: "ٱلْحَفِيُّ",
  nameTransliteration: "Al-Hafee",
  nameSubtitle: "The Benevolent • The Gracious",
  explanationPoints: [
    { icon: "Heart", text: "Ibrahim knew Allah's benevolence even when rejected by his own father" },
    { icon: "Flame", text: "From the fire to exile, Al-Hafee's kindness never left His beloved servant" },
    { icon: "Feather", text: "His benevolence is tender and personal — not distant, but intimately caring" },
    { icon: "Sun", text: "When the world is cruel, Al-Hafee is gracious — His kindness fills every void" },
  ],
  closingText: "You may have been\nrejected by those\nwho should have loved you.\n\nParents. Friends. Family.\n\nBut Al-Hafee\nhas never stopped\nbeing gracious to you.\n\nHe was kind to Ibrahim\nin the worst moment.\nHe is kind to you now.",
  audioFileName: "maryam-19-47",
};

export function AlHafeeStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#0e0c10", "#181420", "#0a080c"]}
    />
  );
}
