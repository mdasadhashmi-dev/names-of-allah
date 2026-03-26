"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "313 men.\n\nBarely armed.\nHunger in their stomachs.\nFear in some of their hearts.\n\nStanding against\nan army of 1,000\nwho came to erase them\nfrom the earth.",
    icon: "Shield",
  },
  {
    text: "The Prophet ﷺ\nstood in the night\nand raised his hands\nso high\nthat his cloak fell\nfrom his shoulders.\n\nAnd he prayed\nuntil Abu Bakr wept.",
    icon: "Moon",
  },
  {
    text: "\"O Allah,\nif this group is destroyed today,\nYou will not be worshipped\non this earth.\"\n\nThe most desperate prayer\never spoken.\n\nAnd Allah heard it.",
    icon: "Quote",
  },
  {
    text: "The sky opened.\n\nA thousand angels descended.\n\nNot because the Muslims\nwere strong enough.\n\nBut because their Mawlaa—\ntheir Patron, their Protector—\nwould never abandon them.",
    icon: "Wind",
  },
  {
    text: "This is what Al-Mawlaa means.\n\nNot a distant lord.\nNot a silent king.\n\nA patron who fights\nfor those who turn to Him.\n\nA protector who intervenes\nwhen all seems lost.",
    icon: "Flame",
  },
  {
    text: "When the disbelievers\nturned away from truth,\nAllah said:\n\n\"That is because Allah\nis the Mawlaa of those\nwho believe,\nand the disbelievers\nhave no mawlaa.\"\n\n— Surah Muhammad 47:11",
    icon: "BookOpen",
  },
  {
    text: "Think about what you\nhave lost.\n\nThe people who left.\nThe doors that closed.\nThe help that never came\nfrom creation.\n\nNone of that matters.\n\nBecause your Mawlaa\nnever left.",
    icon: "Heart",
  },
  {
    text: "Al-Mawlaa.\n\nThe Patron Lord\nwho never abandons.\n\nThe Supporter\nwho sent angels\nfor 313 souls.\n\nImagine what He will do\nfor you.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "وَإِن تَوَلَّوْا فَاعْلَمُوا أَنَّ اللَّهَ مَوْلَاكُمْ ۚ نِعْمَ الْمَوْلَىٰ وَنِعْمَ النَّصِيرُ",
  ayahReference: "Surah Al-Anfal 8:40",
  translation: "\"And if they turn away,\nthen know that Allah is\nyour Protector.\nWhat an excellent Protector\nand what an excellent Helper.\"",
  nameArabic: "ٱلْمَوْلَى",
  nameTransliteration: "Al-Mawlaa",
  nameSubtitle: "The Patron Lord • The Protector and Supporter",
  explanationPoints: [
    { icon: "Shield", text: "At Badr, He sent angels for 313 — Al-Mawlaa never abandons those who call on Him" },
    { icon: "Heart", text: "When every human support fails, Al-Mawlaa remains — the Patron who never leaves" },
    { icon: "Flame", text: "He is the Mawlaa of the believers — the disbelievers have no such patron" },
    { icon: "Star", text: "\"What an excellent Mawlaa\" — Allah Himself declares the perfection of His patronage" },
  ],
  closingText: "When the world\nturns its back on you,\nremember Badr.\n\n313 against 1,000.\nAnd Allah was enough.\n\nAl-Mawlaa is your Patron.\nHe has always been.\nHe will always be.",
  audioFileName: "al-anfal-8-40",
};

export function AlMawlaaStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#100c08", "#1a1410", "#0c0a06"]}
    />
  );
}
