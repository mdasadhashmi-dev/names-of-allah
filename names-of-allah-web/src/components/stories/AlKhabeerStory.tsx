"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  { text: "You smile for the world.\nBut inside—\nyou're breaking.\n\nYou say \"I'm fine.\"\nBut Al-Khabeer knows\nyou're not.\n\nHe is aware\nof what lies beneath\nevery surface.", icon: "Eye" },
  { text: "\"Does He who created\nnot know,\nwhile He is\nthe Subtle (Al-Lateef),\nthe All-Aware (Al-Khabeer)?\"\n\n— Surah Al-Mulk 67:14\n\nHe made your heart.\nOf course He knows\nwhat's inside it.", icon: "Quote" },
  { text: "He knows the thought\nyou didn't speak.\nThe prayer you only felt.\nThe fear you told no one.\nThe love you never expressed.\n\nAl-Khabeer is aware\nof it all.", icon: "Heart" },
  { text: "He knows why you sinned.\nNot just that you sinned—\nbut the loneliness behind it.\nThe pain that led to it.\nThe weakness that caused it.\n\nHe judges with awareness\nof the full picture.", icon: "Lightbulb" },
  { text: "He is aware\nof your silent sacrifices.\n\nThe nights you stayed up\ncaring for someone.\nThe money you gave quietly.\nThe prayer you made\nfor someone\nwho will never know.", icon: "Moon" },
  { text: "People misunderstand you.\nPeople misjudge you.\nPeople see the surface.\n\nAl-Khabeer sees\nthe root.\nThe origin.\nThe hidden.\nThe truth beneath the truth.", icon: "Layers" },
  { text: "And His awareness\nis not cold or distant.\n\nHe is aware—\nand He cares.\n\nThe awareness of Al-Khabeer\nis connected to\nthe gentleness of Al-Lateef.\n\nHe knows your pain—\nand He is gentle with it.", icon: "Sparkles" },
  { text: "You don't need\nto explain yourself to Him.\n\nYou don't need\nto justify your tears.\n\nAl-Khabeer already knows.\nEvery hidden struggle.\nEvery unspoken word.\n\nHe is fully aware.", icon: "Sun" },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "أَلَا يَعْلَمُ مَنْ خَلَقَ وَهُوَ اللَّطِيفُ الْخَبِيرُ",
  ayahReference: "Surah Al-Mulk 67:14",
  translation: "\"Does He who created\nnot know,\nwhile He is the Subtle,\nthe All-Aware (Al-Khabeer)?\"",
  nameArabic: "ٱلْخَبِيرُ",
  nameTransliteration: "Al-Khabeer",
  nameSubtitle: "The All-Aware • The Acquainted",
  explanationPoints: [
    { icon: "Eye", text: "He sees beneath every surface—your real feelings, not your mask" },
    { icon: "Heart", text: "He knows why you sinned—the pain, loneliness, and weakness behind it" },
    { icon: "Moon", text: "Your silent sacrifices are never invisible to Al-Khabeer" },
    { icon: "Sparkles", text: "His awareness is gentle—He knows your pain and cares deeply" },
  ],
  closingText: "Al-Khabeer knows everything—\nnot just what you do,\nbut why you do it.\n\nYou don't need to explain.\nHe already understands.\n\nRest in the awareness\nof the All-Aware.",
  audioFileName: "al-mulk-67-14",
};

export function AlKhabeerStory({ nameId }: { nameId: string }) {
  return <MultiScreenStory nameId={nameId} screens={screens} finalReveal={finalReveal} gradientColors={["#0d1018", "#141826", "#080a12"]} />;
}
