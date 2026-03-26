"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "In the unseen realm,\nright now,\nangels are crying out\nwithout pause:\n\n\"Subbuh, Quddus.\"\n\"Venerated, Holy.\"\n\nThey never tire.\nThey never stop.\nThey have been saying it\nsince they were created.",
    icon: "Star",
  },
  {
    text: "The Prophet ﷺ\nused to say in his ruku\nand sujud:\n\n\"Subbooh, Quddus,\nRabb al-mala'ikati war-ruh.\"\n\n\"Venerated, Holy,\nLord of the angels and the Spirit.\"\n\n— Sahih Muslim 487",
    icon: "Quote",
  },
  {
    text: "What does it mean\nto be free from every defect?\n\nEvery creation has a flaw.\nEvery person has a weakness.\nEvery system eventually breaks.\n\nBut He—\nHe is beyond all of that.",
    icon: "Sparkles",
  },
  {
    text: "His knowledge has no gaps.\nHis power has no limits.\nHis wisdom has no errors.\nHis mercy has no end.\n\nNothing about Him\nneeds improvement.\n\nNothing about Him\ncan be improved.",
    icon: "Infinity",
  },
  {
    text: "When you see imperfection\nin the world—\npain, injustice, suffering—\n\nknow that the One\nwho governs it all\nis perfect.\n\nThe plan is perfect.\nThe timing is perfect.\nThe wisdom is perfect.\n\nEven when you can't see it.",
    icon: "Eye",
  },
  {
    text: "Perfect in His essence.\nNothing like Him exists.\n\nPerfect in His attributes.\nNo quality of His is lacking.\n\nPerfect in His actions.\nEverything He does\nis precisely as it should be.",
    icon: "Gem",
  },
  {
    text: "The heavens declare\nHis perfection.\nThe earth submits to it.\nThe mountains tremble at it.\n\nAnd the deepest part\nof your soul\nrecognizes it—\n\nwhich is why nothing else\never fully satisfies.",
    icon: "Mountain",
  },
  {
    text: "As-Subbooh.\n\nThe Venerated.\nThe Perfect.\n\nFree from every flaw\nthat exists in creation.\n\nThe One the angels\nnever stop glorifying—\nbecause His perfection\nnever runs out.",
    icon: "Crown",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "هُوَ اللَّهُ الَّذِي لَا إِلَـٰهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ",
  ayahReference: "Surah Al-Hashr 59:23",
  translation: "\"He is Allah,\nother than whom there is no deity,\nthe Sovereign, the Pure,\nthe Perfection.\"",
  nameArabic: "ٱلسُّبُّوحُ",
  nameTransliteration: "As-Subbooh",
  nameSubtitle: "The Venerated • The Perfect • The Glorified",
  explanationPoints: [
    { icon: "Star", text: "Angels glorify Him ceaselessly — Subbuh, Quddus — without ever tiring" },
    { icon: "Infinity", text: "His knowledge, power, wisdom, and mercy are utterly without flaw or limit" },
    { icon: "Gem", text: "Perfect in His essence, His attributes, and His actions — nothing needs improvement" },
    { icon: "Mountain", text: "All of creation declares His perfection — the heavens, the earth, the mountains" },
  ],
  closingText: "As-Subbooh is beyond\nevery limitation\nyou have ever known.\n\nIn a world full of flaws,\nHe alone is flawless.\n\nGlorify Him\nas the angels do—\nand find peace\nin His perfection.",
  audioFileName: "al-hashr-59-23",
};

export function AsSubboohStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#0e0e14", "#16161e", "#0a0a10"]}
    />
  );
}
