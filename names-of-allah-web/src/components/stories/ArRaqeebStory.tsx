"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "On the Day of Judgment,\nIsa (Jesus) will stand\nbefore Allah.\n\nAllah will ask:\n\"Did you tell people\nto worship you?\"\n\nIsa will say:\n\"Glory be to You!\nI only said what\nYou commanded me.\"",
    icon: "User",
  },
  {
    text: "Then Isa will say:\n\n\"I was a witness over them\nwhile I was among them.\nBut when You took me up,\nYou were the Watcher\n(Ar-Raqeeb) over them.\"\n\n— Surah Al-Maidah 5:117\n\nWhen Isa left—\nAr-Raqeeb remained.",
    icon: "Quote",
  },
  {
    text: "He watches\nwhen no camera is on.\n\nWhen the door is locked.\nWhen the lights are off.\nWhen the browser is private.\n\nAr-Raqeeb sees\nwhat no technology\ncan capture.",
    icon: "Eye",
  },
  {
    text: "He watches\nthe hand that gives\nin secret.\n\nSo secretly\nthat the left hand\ndoes not know\nwhat the right hand gave.\n\nAr-Raqeeb sees it.\nAnd He will reward it.",
    icon: "Heart",
  },
  {
    text: "He watches\nthe tear no one sees.\n\nThe one you cry\nat 3 AM.\nThe one you wipe\nbefore anyone notices.\nThe one that falls\nin sujud.\n\nAr-Raqeeb\ncounts every tear.",
    icon: "Moon",
  },
  {
    text: "He watches\nthe oppressor.\n\nEvery injustice.\nEvery stolen right.\nEvery broken promise.\n\nThe one who wrongs you\nmay escape human courts.\nBut no one escapes\nAr-Raqeeb.",
    icon: "Scale",
  },
  {
    text: "Knowing He watches\nis not meant\nto terrify you.\n\nIt is meant\nto comfort you.\n\nYou are never unseen.\nNever unheard.\nNever unwitnessed.\n\nAr-Raqeeb is always there.",
    icon: "Sparkles",
  },
  {
    text: "The one who truly knows\nthat Ar-Raqeeb watches\nwill never feel alone.\n\nIn the crowd\nor in solitude.\nIn joy or in grief.\n\nYou are always\nin the sight\nof the Watchful.",
    icon: "Sun",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "فَلَمَّا تَوَفَّيْتَنِي كُنتَ أَنتَ الرَّقِيبَ عَلَيْهِمْ ۚ وَأَنتَ عَلَىٰ كُلِّ شَيْءٍ شَهِيدٌ",
  ayahReference: "Surah Al-Maidah 5:117",
  translation: "\"But when You took me up,\nYou were the Watcher\n(Ar-Raqeeb) over them.\nAnd You are,\nover all things,\nWitness.\"",
  nameArabic: "ٱلرَّقِيبُ",
  nameTransliteration: "Ar-Raqeeb",
  nameSubtitle: "The Watchful • The All-Observing",
  explanationPoints: [
    { icon: "Eye", text: "He watches when no camera is on—nothing escapes Ar-Raqeeb" },
    { icon: "Heart", text: "He sees the hand that gives in secret and the charity no one knows" },
    { icon: "Moon", text: "He counts every tear you cry at 3 AM, in sujud, in solitude" },
    { icon: "Sun", text: "The one who knows Ar-Raqeeb watches will never feel truly alone" },
  ],
  closingText: "Ar-Raqeeb is always watching.\n\nNot to punish—\nbut to witness.\n\nYour secret tears.\nYour hidden good.\nYour silent struggle.\n\nYou are never unseen\nby the Watchful.",
  audioFileName: "al-maidah-5-117",
};

export function ArRaqeebStory({ nameId }: { nameId: string }) {
  return <MultiScreenStory nameId={nameId} screens={screens} finalReveal={finalReveal} gradientColors={["#0f0d14", "#181422", "#0a080f"]} />;
}
