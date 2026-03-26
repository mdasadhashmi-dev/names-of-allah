"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "The Prophet ﷺ said:\n\n\"Allah is Beautiful\nand He loves beauty.\"\n\n— Sahih Muslim 91\n\nThis is not poetry.\nThis is theology.\nThe Creator of beauty\nis Himself beautiful.",
    icon: "Quote",
  },
  {
    text: "Look at a sunset—\nthe sky painted in colors\nthat have no name\nin any human language.\n\nThat is His artistry.\n\nHe designed light itself\njust so you could\nwitness its beauty.",
    icon: "Sun",
  },
  {
    text: "Look at a child's face\nwhen they smile.\n\nLook at mountains\ncovered in snow.\n\nLook at the night sky—\neach star placed\nwith intention.\n\nAll of this\nis a glimpse of His work.",
    icon: "Star",
  },
  {
    text: "But here is\nwhat breaks the mind:\n\nEvery beautiful thing\nyou have ever seen—\nevery face, every landscape,\nevery moment that\ntook your breath away—\n\nis created beauty.",
    icon: "Gem",
  },
  {
    text: "The beauty of Al-Jameel\nHimself—\n\nNo eye has seen it.\nNo mind can imagine it.\nNo poet can describe it.\n\nThe most beautiful thing\nin all of existence\nis His Face.",
    icon: "Eye",
  },
  {
    text: "And the greatest reward\nof Paradise\nis not the rivers,\nnot the gardens,\nnot the palaces.\n\nIt is seeing His Face.\n\nThe veil will be lifted.\nAnd the people of Jannah\nwill look upon Al-Jameel.",
    icon: "Sparkles",
  },
  {
    text: "The Prophet ﷺ said:\n\n\"When the people of Paradise\nenter Paradise,\nAllah will say:\n'Do you want anything more?'\n\nThey will say:\n'Have You not brightened\nour faces?\nHave You not entered us\ninto Paradise?'\n\nThen He will lift the veil.\"\n\n— Sahih Muslim",
    icon: "Crown",
  },
  {
    text: "Al-Jameel.\n\nThe Beautiful One\nwhose beauty is\nbeyond comprehension.\n\nEvery sunset is a shadow.\nEvery mountain is a whisper.\nEvery starlit sky\nis a faint echo\nof His majesty.",
    icon: "Moon",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "وَيَبْقَىٰ وَجْهُ رَبِّكَ ذُو الْجَلَالِ وَالْإِكْرَامِ",
  ayahReference: "Surah Ar-Rahman 55:27",
  translation: "\"And there will remain\nthe Face of your Lord,\nOwner of Majesty\nand Honor.\"",
  nameArabic: "ٱلْجَمِيلُ",
  nameTransliteration: "Al-Jameel",
  nameSubtitle: "The Beautiful One • The Source of All Beauty",
  explanationPoints: [
    { icon: "Sun", text: "Every sunset, every landscape, every moment of wonder — all are reflections of His creative beauty" },
    { icon: "Eye", text: "No eye has ever seen His beauty — it surpasses everything in creation combined" },
    { icon: "Gem", text: "He is Beautiful and loves beauty — aesthetics and excellence are from His nature" },
    { icon: "Crown", text: "The greatest reward of Paradise is seeing His Face — the ultimate unveiling of Al-Jameel" },
  ],
  closingText: "Every beautiful thing\nyou have ever loved\nwas made by Him.\n\nAnd none of it—\nnot all of it combined—\ncompares to seeing Him.\n\nThat is the promise.\nThat is Paradise.\nThat is Al-Jameel.",
  audioFileName: "ar-rahman-55-27",
};

export function AlJameelStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#10080c", "#1c1018", "#0c0608"]}
    />
  );
}
