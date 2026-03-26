"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "His signs\nare everywhere.\n\nYou don't need\na microscope.\nYou don't need\na telescope.\nYou don't need\na degree.\n\nJust open your eyes.\n\nAz-Zahir is manifest\nin everything you see.",
    icon: "Eye",
  },
  {
    text: "The sunrise.\n\nEvery morning—\na ball of fire\n93 million miles away\nlights up your world\nat precisely the right distance.\n\nToo close, you burn.\nToo far, you freeze.\n\nPerfection.\nThat is Az-Zahir.",
    icon: "Sun",
  },
  {
    text: "The rain.\n\nWater evaporates from the ocean.\nRises as vapor.\nForms clouds.\nTravels thousands of miles.\nFalls as fresh water\non dry land.\n\nA purification system\nthat spans the entire sky.\n\nThat is Az-Zahir.",
    icon: "Waves",
  },
  {
    text: "\"Indeed, in the creation\nof the heavens and the earth\nand the alternation\nof the night and the day\nare signs\nfor those of understanding.\"\n\n— Surah Aal-Imran 3:190\n\nSigns. Everywhere.\nFor those willing to see.",
    icon: "Quote",
  },
  {
    text: "The human body.\n\nYour heart beats\n100,000 times a day\nwithout you thinking.\n\nYour lungs take\n20,000 breaths a day\nwithout effort.\n\nYour body replaces\nmillions of cells\nevery second.\n\nAz-Zahir is manifest\nin your own body.",
    icon: "Heart",
  },
  {
    text: "The precision of orbits.\n\nThe earth tilts\nat exactly 23.5 degrees—\ngiving us seasons.\n\nThe moon pulls\nthe tides perfectly.\n\nPlanets orbit\nwithout collision\nfor billions of years.\n\nRandomness? No.\nAz-Zahir.",
    icon: "Globe",
  },
  {
    text: "The beauty of nature.\n\nThe spiral of a seashell.\nThe symmetry of a snowflake.\nThe colors of a sunset.\nThe pattern of a leaf.\n\nBeauty is not accidental.\nIt is the signature\nof Az-Zahir.",
    icon: "Sparkles",
  },
  {
    text: "Everything visible\npoints to Him.\n\nThe sky above.\nThe earth below.\nThe stars at night.\nThe life within.\n\nYou cannot look\nat creation\nand miss the Creator—\nunless you choose\nto close your eyes.\n\nAz-Zahir.\nThe Manifest.",
    icon: "Star",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "هُوَ الْأَوَّلُ وَالْآخِرُ وَالظَّاهِرُ وَالْبَاطِنُ",
  ayahReference: "Surah Al-Hadid 57:3",
  translation: "\"He is the First\nand the Last,\nthe Manifest (Az-Zahir)\nand the Hidden.\"",
  nameArabic: "ٱلظَّاهِرُ",
  nameTransliteration: "Az-Zahir",
  nameSubtitle: "The Manifest • The Evident",
  explanationPoints: [
    { icon: "Sun", text: "The sunrise—a ball of fire at the perfect distance—His manifest sign" },
    { icon: "Heart", text: "Your heart beats 100,000 times daily without your command—His design" },
    { icon: "Globe", text: "Planets orbit without collision for billions of years—His precision" },
    { icon: "Sparkles", text: "Beauty in nature is not accidental—it is the signature of Az-Zahir" },
  ],
  closingText: "Az-Zahir is the Manifest.\nHis signs are everywhere.\n\nIn the sunrise.\nIn your heartbeat.\nIn the orbits of planets.\nIn the beauty of nature.\n\nOpen your eyes—\nand you will see Him\nin everything.",
  audioFileName: "al-hadid-57-3-zahir",
};

export function AzZahirStory({ nameId }: { nameId: string }) {
  return <MultiScreenStory nameId={nameId} screens={screens} finalReveal={finalReveal} gradientColors={["#14120a", "#221e10", "#0f0d06"]} />;
}
