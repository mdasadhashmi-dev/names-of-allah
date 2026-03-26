"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Imagine a mother\nalone in the desert.\n\nHer infant crying.\nNo water. No help.\nNo one watching.\n\nShe ran.\nBack and forth.\nSeven times.",
    icon: "Mountain",
  },
  {
    text: "Hajar didn't give up.\nShe didn't sit and wait to die.\n\nShe ran between Safa and Marwa\u2014\na desperate mother\nsearching for a single drop of water\nfor her child.",
    icon: "Droplet",
  },
  {
    text: "And Allah saw her.\n\nHe saw every step.\nEvery panting breath.\nEvery silent prayer.\n\nAnd He did not\nlet it go unnoticed.",
    icon: "Eye",
  },
  {
    text: "He made her desperate run\na pillar of Hajj.\n\nForever.\n\nMillions of people,\nevery single year,\nwalk where she walked\u2014\nbecause Allah appreciated her.",
    icon: "Users",
  },
  {
    text: "This is Ash-Shaakir.\nThe One who appreciates.\n\nNot the way people appreciate\u2014\nwith a quick \"thank you\"\nthat fades by tomorrow.\n\nHe appreciates eternally.",
    icon: "Sparkles",
  },
  {
    text: "A man removed a thorn\nfrom the road.\nAllah forgave him.\n\nA woman gave water\nto a thirsty dog.\nAllah admitted her to Paradise.\n\nSmall deeds.\nInfinite reward.",
    icon: "Heart",
  },
  {
    text: "You think your deeds are small?\n\nThe late-night dua\nno one heard.\nThe sadaqah\nno one saw.\nThe patience\nno one noticed.\n\nHe noticed. He always notices.",
    icon: "Moon",
  },
  {
    text: "Ash-Shaakir never forgets\na sincere deed.\n\nNo matter how small.\nNo matter how hidden.\nNo matter how long ago.\n\nWith Him,\nnothing good is ever wasted.",
    icon: "Gem",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ ۖ فَمَنْ حَجَّ الْبَيْتَ أَوِ اعْتَمَرَ فَلَا جُنَاحَ عَلَيْهِ أَن يَطَّوَّفَ بِهِمَا ۚ وَمَن تَطَوَّعَ خَيْرًا فَإِنَّ اللَّهَ شَاكِرٌ عَلِيمٌ",
  ayahReference: "Surah Al-Baqarah 2:158",
  translation: "\"Indeed, Safa and Marwa are\namong the symbols of Allah.\nSo whoever makes Hajj or Umrah,\nthere is no blame upon him\nfor walking between them.\nAnd whoever volunteers good —\nthen indeed, Allah is\nAppreciative and Knowing.\"",
  nameArabic: "الشَّاكِر",
  nameTransliteration: "Ash-Shaakir",
  nameSubtitle: "The Appreciative • The One Who Rewards Abundantly",
  explanationPoints: [
    { icon: "Mountain", text: "He immortalized Hajar's desperate run as a pillar of Hajj for all of humanity" },
    { icon: "Gem", text: "He multiplies the smallest good deed and never lets sincere effort go unrewarded" },
    { icon: "Eye", text: "He sees every hidden act of worship — the secret charity, the silent tear, the quiet patience" },
    { icon: "Infinity", text: "His appreciation has no limit — He gives infinite reward for finite deeds" },
  ],
  closingText: "Ash-Shaakir is the One\nwho will never forget\nwhat you did for His sake.\n\nThe world may overlook you.\nPeople may forget.\n\nBut He?\nHe appreciates.\nAnd His appreciation\nlasts forever.",
  audioFileName: "al-baqarah-2-158",
};

export function AshShakirStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#100d08", "#1a1610", "#0c0a06"]}
    />
  );
}
