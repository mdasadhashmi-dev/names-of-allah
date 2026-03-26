"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Before you were born,\na voice whispered\ninto your mother's ear:\n\n\"Bismillah.\"\n\nIn the name of Allah.\n\nIt was the first word\nspoken over your existence.\nIt will be the last word\non the lips of the dying.",
    icon: "Heart",
  },
  {
    text: "This name\nappears more than 2,699 times\nin the Quran.\n\nMore than any other word.\nMore than mercy.\nMore than heaven.\nMore than love.\n\nBecause He is the source\nof them all.",
    icon: "BookOpen",
  },
  {
    text: "Every surah\nbut one\nbegins with His name.\n\nBismillah ir-Rahman ir-Raheem.\n\nThe Quran does not open\nwith a command.\nIt opens with a name.\n\nAs if to say:\nbefore anything else—\nknow Who is speaking.",
    icon: "Quote",
  },
  {
    text: "Nuh called upon Him\nwhen the flood rose.\nIbrahim called upon Him\nfrom the fire.\nYunus called upon Him\nfrom the belly of the whale.\n\nDifferent tongues.\nDifferent ages.\nDifferent ends of the earth.\n\nThe same name.",
    icon: "Globe",
  },
  {
    text: "You say it\nbefore you eat.\nBefore you sleep.\nBefore you enter your home.\nBefore you begin your journey.\n\nYou say it\nwhen you are afraid.\nWhen you are grateful.\nWhen you have no words left\nbut one.",
    icon: "Moon",
  },
  {
    text: "\"Allah\" is not\none attribute among many.\n\nIt is the name\nthat contains all attributes.\n\nAr-Rahman is within it.\nAl-Malik is within it.\nAl-Wadud is within it.\n\nAll ninety-nine names\nare rivers.\nAllah is the ocean.",
    icon: "Layers",
  },
  {
    text: "The scholars say:\nno other name\ncan be given\nto any created being.\n\nYou can call someone\nrahim — merciful.\nYou can call someone\nmalik — king.\n\nBut no one\nhas ever been called\nAllah.\n\nIt belongs to Him alone.",
    icon: "Crown",
  },
  {
    text: "Allah.\n\nThe name above all names.\nThe name every soul recognizes.\nThe name the heavens\nand the earth\nwere built upon.\n\nWhen you have nothing—\nyou still have this name.\n\nAnd this name\nis enough.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
  ayahReference: "Surah Al-Ikhlas 112:1-4",
  translation: "\"Say: He is Allah, the One.\nAllah, the Eternal Refuge.\nHe neither begets\nnor is born.\nNor is there to Him\nany equivalent.\"",
  nameArabic: "الله",
  nameTransliteration: "Allah",
  nameSubtitle: "The Greatest Name • The Name Above All Names",
  explanationPoints: [
    { icon: "BookOpen", text: "Appears over 2,699 times in the Quran — the most mentioned word in all of scripture" },
    { icon: "Layers", text: "Every divine name is an attribute of Allah — He encompasses all perfection" },
    { icon: "Crown", text: "No created being has ever shared this name — it belongs to Him alone" },
    { icon: "Globe", text: "Every prophet from the first to the last called upon this one name: Allah" },
  ],
  closingText: "Allah.\n\nThe first word\nof the Quran.\nThe last word\nof the believer.\n\nAll names lead to Him.\nAll praise returns to Him.\nAll creation depends on Him.\n\nHe is Allah.\nThere is no god but He.",
  audioFileName: "al-ikhlas-112-1-4",
};

export function AllahStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#0a0814", "#12101e", "#06050c"]}
    />
  );
}
