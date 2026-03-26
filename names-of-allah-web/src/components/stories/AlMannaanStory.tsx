"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "A man was praying.\n\nHe said in his du'a:\n\"O Allah, I ask You\nby virtue of the fact\nthat all praise belongs to You.\n\nThere is no god but You,\nAl-Mannaan...\"\n\nThe Prophet ﷺ\noverheard him.",
    icon: "Quote",
  },
  {
    text: "The Prophet ﷺ said:\n\n\"He has asked Allah\nby His Greatest Name —\nthe Name by which,\nif He is asked,\nHe gives,\nand if He is called upon,\nHe answers.\"\n\n— Sunan Ibn Majah 3858",
    icon: "Star",
  },
  {
    text: "Al-Mannaan.\n\nThe One who bestows\nfavor after favor\nafter favor.\n\nNot once.\nNot occasionally.\n\nEndlessly.\nRelentlessly.\nWithout you\never having to deserve it.",
    icon: "Layers",
  },
  {
    text: "Think of what He gave you\nbefore you could\never ask.\n\nA beating heart.\nTwo eyes that see.\nA mother who held you\nbefore you knew her name.\n\nThese were not rewards.\nThey were gifts from\nAl-Mannaan.",
    icon: "Heart",
  },
  {
    text: "But His greatest favor\nis not health.\nNot wealth.\nNot family.\n\nHis greatest favor\nis Islam itself.\n\n\"Allah has conferred favor\nupon the believers\nwhen He sent among them\na Messenger\nfrom themselves.\"\n\n— Surah Ali 'Imran 3:164",
    icon: "BookOpen",
  },
  {
    text: "He did not have\nto guide you.\n\nBillions walk this earth\nwithout knowing His name.\n\nBut He chose you\nto hear His words.\nTo know His Messenger.\nTo prostrate before Him.\n\nThat is the favor\nof Al-Mannaan.",
    icon: "Compass",
  },
  {
    text: "The danger is\nto forget.\n\nTo eat His provision\nand not thank Him.\nTo breathe His air\nand not remember Him.\nTo receive His guidance\nand ignore it.\n\n\"And if you count\nthe favors of Allah,\nyou could not enumerate them.\"\n\n— Surah Ibrahim 14:34",
    icon: "Infinity",
  },
  {
    text: "Al-Mannaan.\n\nThe Bestower\nwhose favors are\nuncountable,\nundeserved,\nand unending.\n\nYou cannot repay Him.\nBut you can recognize Him.\n\nAnd recognition —\nis the beginning of gratitude.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "لَقَدْ مَنَّ اللَّهُ عَلَى الْمُؤْمِنِينَ إِذْ بَعَثَ فِيهِمْ رَسُولًا مِّنْ أَنفُسِهِمْ",
  ayahReference: "Surah Ali 'Imran 3:164",
  translation: "\"Allah has conferred favor\nupon the believers\nwhen He sent among them\na Messenger from themselves.\"",
  nameArabic: "ٱلْمَنَّانُ",
  nameTransliteration: "Al-Mannaan",
  nameSubtitle: "The Beneficent Bestower • The Gracious Giver",
  explanationPoints: [
    { icon: "Star", text: "Al-Mannaan is among Allah's Greatest Names — by which du'a is answered" },
    { icon: "Layers", text: "His favors are layered endlessly — from every breath to guidance itself" },
    { icon: "BookOpen", text: "His greatest gift is Islam — sending the Messenger ﷺ from among us" },
    { icon: "Heart", text: "Gratitude begins with recognizing that nothing you have is self-earned" },
  ],
  closingText: "Al-Mannaan bestows\nfavor upon favor upon favor.\n\nYour heartbeat. Your sight.\nYour faith. Your hope.\n\nNone of it was earned.\nAll of it was given.\n\nCall upon Al-Mannaan.\nHe is among the Names\nby which Allah answers.",
  audioFileName: "ali-imran-3-164",
};

export function AlMannaanStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#0e0c10", "#181420", "#0a080c"]}
    />
  );
}
