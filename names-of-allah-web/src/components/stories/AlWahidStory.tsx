"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Before time,\nbefore space,\nbefore a single atom stirred—\n\nHe was.\n\nAlone.\nWithout partner,\nwithout rival,\nwithout equal.",
    icon: "Moon",
  },
  {
    text: "Then He created.\n\nBillions of stars.\nCountless galaxies.\nEvery grain of sand,\nevery drop of rain.\n\nAll of it—\nfrom One source.\nAll of it—\npointing back to One.",
    icon: "Star",
  },
  {
    text: "Ibrahim stood\nbefore his father's idols.\n\nHe shattered them all—\nexcept the largest.\n\n\"Ask him,\" he said,\n\"if they can speak.\"\n\nThey could not speak.\nThey could not hear.\nThey were nothing.",
    icon: "Shield",
  },
  {
    text: "Every prophet\nbrought the same message.\n\nNuh in the flood.\nMusa before Pharaoh.\nIsa to the lost.\nMuhammad ﷺ to all mankind.\n\nOne message:\nworship the One.",
    icon: "Users",
  },
  {
    text: "The Quraysh had 360 idols\nfilling the Ka'bah.\n\nOn the day of Makkah's opening,\nthe Prophet ﷺ pointed\nhis staff at each one.\n\n\"Truth has come\nand falsehood has vanished.\"\n\nThey fell, one by one.",
    icon: "Zap",
  },
  {
    text: "The Christians debated\nthe Trinity.\nThe pagans multiplied their gods.\nThe Persians divided\nlight from darkness.\n\nBut the answer\nwas always simple:\n\n\"Your God is One God.\"\n\n— Surah Al-Baqarah 2:163",
    icon: "BookOpen",
  },
  {
    text: "On the Day of Judgment,\nthe earth will be changed\ninto another earth.\nThe heavens will be changed.\n\nAnd all of creation\nwill stand exposed\nbefore the One\nfrom whom nothing is hidden.",
    icon: "Globe",
  },
  {
    text: "Al-Wahid.\n\nNot one among many.\nNot the greatest of gods.\n\nThe Only.\nThe Sole.\nThe One Reality\nfrom which all else\nborrows its existence.\n\nThere is no god but He.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "يَوْمَ تُبَدَّلُ الْأَرْضُ غَيْرَ الْأَرْضِ وَالسَّمَاوَاتُ ۖ وَبَرَزُوا لِلَّهِ الْوَاحِدِ الْقَهَّارِ",
  ayahReference: "Surah Ibrahim 14:48",
  translation: "\"The Day the earth will be replaced\nby another earth, and the heavens,\nand they will come forth\nbefore Allah, the One,\nthe Prevailing (Al-Wahid).\"",
  nameArabic: "ٱلْوَاحِدُ",
  nameTransliteration: "Al-Wahid",
  nameSubtitle: "The One • The Singular",
  explanationPoints: [
    { icon: "Star", text: "Every atom in creation is a witness — all things point to One origin" },
    { icon: "Shield", text: "Ibrahim shattered the idols — only the One true God deserves worship" },
    { icon: "Users", text: "Every prophet from Nuh to Muhammad ﷺ delivered the same truth: God is One" },
    { icon: "Globe", text: "On the Last Day, all creation will stand before Al-Wahid — no illusions will remain" },
  ],
  closingText: "Al-Wahid is not a number.\nHe is the reality\nbehind every number.\n\nEvery heartbeat,\nevery breath,\nevery star that burns—\nall testify:\n\nThere is no god but the One.",
  audioFileName: "ibrahim-14-48",
};

export function AlWahidStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#080a1a", "#0f1228", "#050714"]}
    />
  );
}
