"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "The people of Nuh\nwere warned for\n950 years.\n\nNine hundred and fifty years.\n\nNuh called them day and night.\nPublicly and privately.\n\nThey put their fingers\nin their ears.",
    icon: "Clock",
  },
  {
    text: "Allah did not\ndestroy them immediately.\n\nHe gave them\none more year.\nThen another.\nThen another.\n\n950 years of patience\nfrom Al-Haleem.",
    icon: "Hourglass",
  },
  {
    text: "The Prophet ﷺ\nwent to Ta'if—\nhoping they would accept Islam.\n\nThey rejected him.\nThey sent their children\nto throw stones at him\nuntil his sandals\nfilled with blood.",
    icon: "Mountain",
  },
  {
    text: "The angel of the mountains\ncame to him and said:\n\n\"If you wish,\nI will crush them\nbetween these two mountains.\"\n\nThe Prophet ﷺ—\nbleeding, exhausted—\nsaid no.",
    icon: "Shield",
  },
  {
    text: "He said:\n\n\"Perhaps Allah will bring\nfrom their descendants\npeople who will\nworship Allah alone.\"\n\nHe learned forbearance\nfrom Al-Haleem.",
    icon: "Heart",
  },
  {
    text: "The Prophet ﷺ said:\n\n\"No one is more patient\nover insults he hears\nthan Allah.\n\nThey attribute to Him a son,\nyet He gives them health\nand provides for them.\"\n\n— Sahih Bukhari",
    icon: "Quote",
  },
  {
    text: "Think about that.\n\nPeople deny Him.\nInsult Him.\nAttribute partners to Him.\nForget Him entirely.\n\nAnd still—\nHe sends them rain.\nHe grows their food.\nHe beats their hearts.",
    icon: "CloudRain",
  },
  {
    text: "How many times\nhave you sinned—\nand He didn't punish you?\n\nHow many promises\nhave you broken—\nand He still provided?\n\nThat is Al-Haleem.\nForbearing beyond\nanything you deserve.",
    icon: "Infinity",
  },
  {
    text: "Al-Haleem is not unaware.\nHe is not weak.\nHe is not indifferent.\n\nHe sees every sin.\nHe has full power to punish.\n\nBut He waits.\nHe gives you time.\n\nBecause He is Al-Haleem.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "وَاعْلَمُوا أَنَّ اللَّهَ غَفُورٌ حَلِيمٌ",
  ayahReference: "Surah Al-Baqarah 2:235",
  translation: "\"And know that Allah\nis Forgiving\nand Forbearing (Al-Haleem).\"",
  nameArabic: "ٱلْحَلِيمُ",
  nameTransliteration: "Al-Haleem",
  nameSubtitle: "The Forbearing • The Most Patient",
  explanationPoints: [
    { icon: "Clock", text: "He waited 950 years for the people of Nuh before sending the flood" },
    { icon: "Mountain", text: "The Prophet chose patience over destruction—learning from Al-Haleem" },
    { icon: "CloudRain", text: "People deny Him—yet He still feeds them, heals them, sustains them" },
    { icon: "Infinity", text: "He sees every sin and has power to punish—but He waits for you" },
  ],
  closingText: "Al-Haleem is endlessly patient.\nHe waited 950 years for one nation.\n\nHe has waited for you too—\ngiving you time,\ngiving you chances.\n\nDon't waste His patience.\nReturn to Him now.",
  audioFileName: "al-baqarah-2-235",
};

export function AlHaleemStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#14100a", "#221a10", "#0f0b06"]}
    />
  );
}
