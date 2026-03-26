"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "A man lies in his bed.\nThe doctors have done\neverything they can.\n\nThe medicine is in his veins.\nThe machines are humming.\n\nBut healing—\nhealing is not in their hands.",
    icon: "Heart",
  },
  {
    text: "The Prophet ﷺ\nwould place his hand\non the one who was ill\nand say:\n\n\"O Allah, Lord of the people,\nremove the harm.\nHeal — for You are Ash-Shaafee.\"\n\n— Sahih Bukhari 5675",
    icon: "Quote",
  },
  {
    text: "\"There is no cure\nexcept Your cure.\n\nA cure that leaves behind\nno illness.\"\n\nThe Prophet ﷺ\ndid not deny medicine.\n\nBut he knew\nwho the real Healer was.",
    icon: "Sparkles",
  },
  {
    text: "Ayyub (عليه السلام)\nwas tested with illness\nfor eighteen long years.\n\nHis body wasted.\nHis wealth vanished.\nPeople abandoned him.\n\nAll except his wife\nand his Lord.",
    icon: "Clock",
  },
  {
    text: "Then one day,\nbroken and desperate,\nhe called out:\n\n\"Indeed, adversity\nhas touched me,\nand You are\nthe Most Merciful\nof the merciful.\"\n\n— Surah Al-Anbiya 21:83",
    icon: "BookOpen",
  },
  {
    text: "Allah answered.\nInstantly.\n\n\"So We responded to him\nand removed what afflicted him\nof adversity.\"\n\n— Surah Al-Anbiya 21:84\n\nEighteen years of suffering—\nerased in a single moment.",
    icon: "Zap",
  },
  {
    text: "He heals the body\nwhen it is broken.\n\nHe heals the heart\nwhen it is shattered.\n\nHe heals the soul\nwhen it has lost its way.\n\nNo wound is beyond Him.\nNo pain is too deep.",
    icon: "Sun",
  },
  {
    text: "Ibrahim (عليه السلام) said:\n\n\"And when I am ill,\nit is He who cures me.\"\n\nHe attributed illness\nto himself out of respect.\n\nBut the cure—\nhe attributed only to Allah.\n\nThat is Ash-Shaafee.",
    icon: "Feather",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ",
  ayahReference: "Surah Ash-Shu'ara 26:80",
  translation: "\"And when I am ill,\nit is He who cures me.\"",
  nameArabic: "ٱلشَّافِي",
  nameTransliteration: "Ash-Shaafee",
  nameSubtitle: "The One Who Cures • The Healer",
  explanationPoints: [
    { icon: "Shield", text: "Doctors treat, but only Ash-Shaafee grants true healing" },
    { icon: "Heart", text: "He heals bodies, hearts, and souls — no wound is beyond His reach" },
    { icon: "Clock", text: "Ayyub suffered 18 years — then Allah healed him in a single moment" },
    { icon: "Sparkles", text: "Every recovery, every remission, every mended heart traces back to Him" },
  ],
  closingText: "Ash-Shaafee is the only true Healer.\nEvery medicine is just a means.\nEvery doctor is just a vessel.\n\nThe cure belongs to Him alone.\n\nWhen you are broken,\ncall upon Ash-Shaafee.\nHe hears the sick\neven when they cannot speak.",
  audioFileName: "ash-shuara-26-80",
};

export function AshShaafeeStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#081210", "#0e1c18", "#050e0c"]}
    />
  );
}
