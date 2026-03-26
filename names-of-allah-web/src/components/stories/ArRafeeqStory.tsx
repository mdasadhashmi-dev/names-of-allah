"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "A Bedouin walked\ninto the masjid of the Prophet ﷺ.\n\nAnd urinated.\nRight there.\nIn the house of Allah.\n\nThe companions leapt up\nin outrage.",
    icon: "Users",
  },
  {
    text: "They rushed to stop him.\nTo grab him.\nTo punish him.\n\nBut the Prophet ﷺ\nraised his hand\nand said one word:\n\n\"Leave him.\"",
    icon: "Shield",
  },
  {
    text: "When the man finished,\nthe Prophet ﷺ said:\n\n\"Pour a bucket of water over it.\"\n\nThen he called the man gently\nand explained.\n\nNo shaming.\nNo anger.\nNo harshness.\n\nJust gentleness.",
    icon: "Droplet",
  },
  {
    text: "The Prophet ﷺ said:\n\n\"Allah is Gentle (Rafeeq)\nand loves gentleness.\nHe gives for gentleness\nwhat He does not give\nfor harshness.\"\n\n— Sahih Muslim 2593",
    icon: "Quote",
  },
  {
    text: "Gentleness is not weakness.\n\nIt takes more strength\nto hold back anger\nthan to unleash it.\n\nMore courage to be soft\nthan to be harsh.\n\nAr-Rafeeq is gentle\nbecause He is strong.",
    icon: "Mountain",
  },
  {
    text: "Aisha reported that\nthe Prophet ﷺ said:\n\n\"Be gentle,\nfor gentleness is not found\nin a thing\nexcept that it beautifies it.\n\nAnd it is not removed\nfrom a thing\nexcept that it disgraces it.\"\n\n— Sahih Muslim 2594",
    icon: "Feather",
  },
  {
    text: "Look at how He deals\nwith you.\n\nYou disobey—\nHe gives you time.\nYou forget Him—\nHe doesn't forget you.\nYou turn away—\nHe gently calls you back.\n\nNo force. No harshness.\nOnly gentleness.",
    icon: "Heart",
  },
  {
    text: "Ar-Rafeeq.\n\nThe Gentle One.\n\nHe handles your heart\nwith a softness\nthat harshness\ncould never achieve.\n\nAnd He loves to see\nthat same gentleness\nin you.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "فَبِمَا رَحْمَةٍ مِّنَ اللَّهِ لِنتَ لَهُمْ",
  ayahReference: "Surah Ali 'Imran 3:159",
  translation: "\"So by mercy from Allah,\nyou were lenient with them.\"",
  nameArabic: "ٱلرَّفِيقُ",
  nameTransliteration: "Ar-Rafeeq",
  nameSubtitle: "The Gentle • The Kind",
  explanationPoints: [
    { icon: "Feather", text: "Allah is Gentle and loves gentleness — He gives for it what He does not give for harshness" },
    { icon: "Droplet", text: "Gentleness beautifies everything it touches and disgraces everything it leaves" },
    { icon: "Mountain", text: "His gentleness is not weakness — it is the strength of the Most Powerful choosing softness" },
    { icon: "Heart", text: "He gives you time, calls you back gently, and never forces your heart" },
  ],
  closingText: "Ar-Rafeeq is gentle\nwith your journey.\n\nHe didn't make the path harsh.\nHe made it navigable.\nHe made it beautiful.\n\nBe gentle with yourself.\nBe gentle with others.\nAr-Rafeeq loves gentleness.",
  audioFileName: "ali-imran-3-159",
};

export function ArRafeeqStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#0c100e", "#141c18", "#080e0c"]}
    />
  );
}
