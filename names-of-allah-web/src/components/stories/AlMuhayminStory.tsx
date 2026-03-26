"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "The Quraysh had decided:\nMuhammad ﷺ must die.\n\nThey sent assassins—\none from each tribe—\nto surround his home\nand strike at dawn.",
    icon: "AlertTriangle",
  },
  {
    text: "The Prophet ﷺ knew.\nAllah had told him.\n\nHe asked Ali\nto sleep in his bed,\ncovered in his green cloak.\n\nThen he walked out\ninto the night.",
    icon: "Moon",
  },
  {
    text: "He walked past them.\nRight through the assassins.\n\nAllah placed a veil\nover their eyes.\n\nThey saw nothing.\n\n\"And We placed before them\na barrier and behind them\na barrier and covered them,\nso they do not see.\"\n— Surah Ya-Sin 36:9",
    icon: "Eye",
  },
  {
    text: "He reached Abu Bakr's home.\nThey left for the cave of Thawr.\n\nThe Quraysh sent trackers.\nThey reached the cave entrance.\n\nAbu Bakr whispered:\n\"If they look down,\nthey will see us.\"",
    icon: "Mountain",
  },
  {
    text: "The Prophet ﷺ replied:\n\n\"What do you think\nof two people\nwhose third companion\nis Allah?\"\n\nA spider had woven a web\nacross the cave entrance.\nA dove had nested there.",
    icon: "Bug",
  },
  {
    text: "The trackers looked.\nThey saw the web. The nest.\n\n\"No one has entered here.\"\n\nThey turned away.\n\nAl-Muhaymin was watching.\nEvery detail—orchestrated.",
    icon: "Shield",
  },
  {
    text: "A spider's thread.\nA dove's nest.\nA veil over eyes.\n\nThe smallest things—\nused by Al-Muhaymin\nto protect His messenger.\n\nHe oversees\nwhat you cannot even notice.",
    icon: "Sparkles",
  },
  {
    text: "Al-Muhaymin sees everything.\nEvery threat approaching you.\nEvery danger you don't notice.\nEvery detail you overlook.\n\nHe is the Guardian\nwho watches\nwhen you cannot watch\nfor yourself.",
    icon: "Eye",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ الْمُهَيْمِنُ",
  ayahReference: "Surah Al-Hashr 59:23",
  translation: "\"He is Allah—\nthe King, the Most Holy,\nthe Source of Peace,\nthe Granter of Security,\nthe Guardian (Al-Muhaymin).\"",
  nameArabic: "ٱلْمُهَيْمِنُ",
  nameTransliteration: "Al-Muhaymin",
  nameSubtitle: "The Guardian • The Overseer",
  explanationPoints: [
    { icon: "Eye", text: "He veiled the assassins' eyes as the Prophet walked right past them" },
    { icon: "Bug", text: "A spider's web and a dove's nest—His protection uses the smallest means" },
    { icon: "Shield", text: "He oversees every detail of your life, even those you cannot see" },
    { icon: "Moon", text: "When you sleep, Al-Muhaymin watches. When you're unaware, He guards." },
  ],
  closingText: "Al-Muhaymin watches over all.\nHe guarded the Prophet\nwith a spider's web.\n\nHe guards you too—\nthrough means you may never notice.\n\nTrust the One who sees everything.",
  audioFileName: "al-hashr-59-23",
};

export function AlMuhayminStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#0d1520", "#14202e", "#080e16"]}
    />
  );
}
