"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  { text: "Every oppressor\nwho escaped human justice—\nwill not escape Al-Hakam.\n\nEvery victim\nwhose voice was silenced—\nwill be heard by Al-Hakam.\n\nEvery hidden crime—\nwill be judged.", icon: "Scale" },
  { text: "\"And We place\nthe scales of justice\nfor the Day of Resurrection,\nso no soul will be treated\nunjustly at all.\n\nAnd if there is\neven the weight\nof a mustard seed,\nWe will bring it forth.\"\n\n— Surah Al-Anbiya 21:47", icon: "Quote" },
  { text: "A mustard seed.\n\nThe smallest speck\nof good or evil—\naccounted for.\n\nNo bribe can change\nHis verdict.\nNo lawyer can argue\nHis case.\nNo appeal exists\nbeyond Him.", icon: "Eye" },
  { text: "The Prophet ﷺ said:\n\n\"On the Day of Judgment,\nrights will be given\nto those they are due.\n\nEven the hornless sheep\nwill settle its score\nwith the horned sheep.\"\n\n— Sahih Muslim", icon: "Shield" },
  { text: "Even animals\nwill have their justice.\n\nIf a sheep\nwas wronged by another—\nAllah will judge between them.\n\nNo injustice is too small\nfor Al-Hakam.", icon: "Heart" },
  { text: "But His judgment\nis also mercy.\n\nHe judges with full knowledge—\nknowing your intention,\nyour struggle,\nyour circumstances.\n\nNo human judge\nhas that capacity.", icon: "BookOpen" },
  { text: "\"Shall I seek\nother than Allah\nas a judge,\nwhile it is He\nwho has sent down to you\nthe Book explained in detail?\"\n\n— Surah Al-An'am 6:114\n\nHis judgment\nis the only one\nthat is absolutely fair.", icon: "Sparkles" },
  { text: "If you have been wronged—\nAl-Hakam will judge.\nIf you have wronged others—\nAl-Hakam will judge.\n\nHis court never closes.\nHis verdict is never wrong.\n\nJustice is coming.\nIt is guaranteed.", icon: "Sun" },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "أَفَغَيْرَ اللَّهِ أَبْتَغِي حَكَمًا",
  ayahReference: "Surah Al-An'am 6:114",
  translation: "\"Shall I seek\nother than Allah\nas judge (Al-Hakam)?\"",
  nameArabic: "ٱلْحَكَمُ",
  nameTransliteration: "Al-Hakam",
  nameSubtitle: "The Judge • The Arbitrator",
  explanationPoints: [
    { icon: "Scale", text: "His scales weigh even the weight of a mustard seed—nothing is missed" },
    { icon: "Shield", text: "Even animals will receive justice—no wrong is too small for Him" },
    { icon: "BookOpen", text: "He judges with full knowledge of your heart, struggle, and intention" },
    { icon: "Sun", text: "No bribe, no appeal, no escape—His justice is absolute and guaranteed" },
  ],
  closingText: "Al-Hakam judges with\nperfect knowledge and perfect justice.\n\nEvery wrong will be righted.\nEvery oppressor will answer.\n\nHis court is always open.\nHis verdict is never wrong.",
  audioFileName: "al-anam-6-114",
};

export function AlHakamStory({ nameId }: { nameId: string }) {
  return <MultiScreenStory nameId={nameId} screens={screens} finalReveal={finalReveal} gradientColors={["#12100d", "#1f1a14", "#0d0b08"]} />;
}
