"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Before you were born—\nbefore your body was formed—\nyour soul stood before Allah.\n\nHe asked:\n\"Am I not your Lord?\"\n\nYour soul answered:\n\"Yes, we testify.\"\n\n— Surah Al-A'raf 7:172\n\nAsh-Shaheed witnessed\nthat covenant.",
    icon: "Star",
  },
  {
    text: "He witnessed\nevery transaction\nyou ever made.\n\nEvery handshake.\nEvery contract.\nEvery promise—\nkept or broken.\n\nAsh-Shaheed was there\nfor all of it.",
    icon: "Scale",
  },
  {
    text: "He witnessed\nevery secret.\n\nThe whisper\nbehind closed doors.\nThe plan hatched\nin darkness.\nThe intention\nno one saw.\n\nAsh-Shaheed\nmisses nothing.",
    icon: "Eye",
  },
  {
    text: "Isa said:\n\n\"I was a witness\nover them\nwhile I was among them.\"\n\n— Surah Al-Maidah 5:117\n\nProphets witnessed.\nAngels witnessed.\nBut above all witnesses—\nAsh-Shaheed.",
    icon: "Quote",
  },
  {
    text: "On the Day of Judgment,\nyour own body\nwill testify against you.\n\nYour hands will speak.\nYour feet will speak.\nYour skin will speak.\n\n\"Why did you testify\nagainst us?\" they will ask.\n\n\"Allah made us speak—\nHe who makes\nall things speak.\"\n\n— Surah Fussilat 41:21",
    icon: "Zap",
  },
  {
    text: "But Ash-Shaheed\nalso witnesses your good.\n\nThe prayer no one saw.\nThe forgiveness you gave.\nThe anger you swallowed.\nThe kindness you showed\nwhen no one was looking.\n\nHe saw it all.",
    icon: "Heart",
  },
  {
    text: "He witnesses\nthe oppressed.\n\nEvery cry for help\nthat went unanswered.\nEvery right that was stolen.\nEvery innocent person harmed.\n\nAsh-Shaheed\nis the ultimate Witness—\nand the ultimate Judge.",
    icon: "Shield",
  },
  {
    text: "You don't need\nhuman witnesses\nto validate your truth.\n\nYou don't need\nthe world to see you.\n\nAsh-Shaheed sees.\nAsh-Shaheed knows.\nAsh-Shaheed will testify\non your behalf.",
    icon: "Sun",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "إِنَّ اللَّهَ كَانَ عَلَىٰ كُلِّ شَيْءٍ شَهِيدًا",
  ayahReference: "Surah An-Nisa 4:33",
  translation: "\"Indeed, Allah is ever,\nover all things,\na Witness (Ash-Shaheed).\"",
  nameArabic: "ٱلشَّهِيدُ",
  nameTransliteration: "Ash-Shaheed",
  nameSubtitle: "The Witness • The All-Observing",
  explanationPoints: [
    { icon: "Star", text: "He witnessed the covenant of souls—when every soul testified to His lordship" },
    { icon: "Eye", text: "Every secret, every transaction, every whisper—He witnessed it all" },
    { icon: "Zap", text: "On Judgment Day, your own body parts will testify as His witnesses" },
    { icon: "Heart", text: "He witnesses your hidden good—the prayer, kindness, and forgiveness no one saw" },
  ],
  closingText: "Ash-Shaheed is the Witness\nover all things.\n\nYour covenant before birth.\nYour deeds in life.\nYour reckoning after death.\n\nYou are never unwitnessed.",
  audioFileName: "an-nisa-4-33",
};

export function AshShaheedStory({ nameId }: { nameId: string }) {
  return <MultiScreenStory nameId={nameId} screens={screens} finalReveal={finalReveal} gradientColors={["#100d14", "#1a1422", "#0a080f"]} />;
}
