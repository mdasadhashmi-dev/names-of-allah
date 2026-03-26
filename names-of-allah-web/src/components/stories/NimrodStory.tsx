"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "There was a king\nwho believed he was God.\n\nHis name was Nimrod.\nHis empire stretched\nacross the known world.\n\nNo one dared defy him.",
    icon: "Shield",
  },
  {
    text: "But a young man stood before him—\nIbrahim عَلَيْهِ ٱلسَّلَامُ.\n\nHe did not bow.\nHe did not tremble.\n\nHe spoke the truth\nto the most powerful man alive.",
    icon: "User",
  },
  {
    text: "Ibrahim said:\n\n\"My Lord is the One\nwho gives life and causes death.\"\n\nNimrod smirked.\n\n\"I give life and cause death too.\"\n\nHe freed one prisoner\nand executed another.",
    icon: "Scale",
  },
  {
    text: "Ibrahim did not argue.\n\nHe simply said:\n\n\"Allah brings the sun\nfrom the east.\n\nBring it from the west.\"",
    icon: "Sun",
  },
  {
    text: "Silence.\n\nNimrod was stunned.\n\nThe Quran says:\n\"The disbeliever was\noverwhelmed.\"\n\nAll his armies,\nall his power—\nmeaningless.",
    icon: "XCircle",
  },
  {
    text: "This is the difference\nbetween earthly power\nand divine might.\n\nNimrod controlled people.\nAllah controls the universe.",
    icon: "Globe",
  },
  {
    text: "Nimrod could imprison.\nAllah sets free.\n\nNimrod could threaten.\nAllah protects.\n\nNimrod's kingdom\nturned to dust.\n\nAllah's might endures forever.",
    icon: "Infinity",
  },
  {
    text: "No army can challenge Him.\nNo technology can rival Him.\nNo power can overcome Him.\n\nHe is Al-Aziz—\nthe One whose might\ncan never be defeated.",
    icon: "Zap",
  },
  {
    text: "When the world feels\noverpowering and unjust,\nremember:\n\nEvery Nimrod will fall.\n\nAl-Aziz is the only\ntrue power there is.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ الْمُهَيْمِنُ الْعَزِيزُ الْجَبَّارُ الْمُتَكَبِّرُ",
  ayahReference: "Surah Al-Hashr 59:23",
  translation: "\"He is Allah, besides Whom\nthere is no deity—\nthe King, the Most Holy,\nthe Source of Peace,\nthe Almighty (Al-Aziz)\"",
  nameArabic: "ٱلْعَزِيزُ",
  nameTransliteration: "Al-Aziz",
  nameSubtitle: "The Almighty • The Invincible",
  explanationPoints: [
    { icon: "Shield", text: "No force in creation can overpower or resist Him" },
    { icon: "Sun", text: "Ibrahim silenced a tyrant with one question about the sun" },
    { icon: "Infinity", text: "Empires crumble—His might is the only constant" },
    { icon: "Heart", text: "True strength is seeking refuge in Al-Aziz, not in worldly power" },
  ],
  closingText: "Al-Aziz cannot be defeated.\nNo army, no ruler, no force\ncan stand against Him.\n\nWhen you feel powerless,\nremember: the Almighty\nis on your side.",
  audioFileName: "al-hashr-59-23",
};

export function NimrodStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#1f0a0a", "#2b1111", "#140505"]}
    />
  );
}
