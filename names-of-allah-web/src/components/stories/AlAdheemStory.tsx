"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  { text: "The Kursi of Allah\nextends over the heavens\nand the earth.\n\nIbn Abbas said:\n\"The Kursi is the footstool.\nThe Throne is something\nno one can measure.\"\n\nThe heavens and earth\nfit within His footstool.", icon: "Globe" },
  { text: "The earth is a speck\ncompared to the sun.\n\nThe sun is a speck\ncompared to the galaxy.\n\nThe galaxy is a speck\nin the observable universe.\n\nAnd the entire universe\nis a speck\ncompared to the Kursi.", icon: "Star" },
  { text: "And the Kursi\ncompared to the Throne\nis like a ring\nthrown in a desert.\n\nA ring in a desert.\n\nThat is the scale\nof Al-Adheem.", icon: "Sparkles" },
  { text: "Every problem you carry\nfeels enormous.\n\nBut place it next to Al-Adheem—\nand it becomes\na grain of sand\non an infinite shore.", icon: "Mountain" },
  { text: "Musa stood before the sea.\nImpossible.\n\nBut to Al-Adheem—\nsplitting a sea\nis nothing.\n\nIbrahim stood before fire.\nImpossible.\n\nBut to Al-Adheem—\ncooling a fire\nis nothing.", icon: "Waves" },
  { text: "We say \"Allahu Akbar\"\nat least 80 times a day\nin our prayers.\n\nGod is Greater.\nGreater than your problem.\nGreater than your fear.\nGreater than anything\nyou can imagine.", icon: "ArrowUp" },
  { text: "\"And He does not tire\nof preserving them,\nand He is\nAl-Aliyy (the Most High),\nAl-Adheem (the Magnificent).\"\n\n— Surah Al-Baqarah 2:255\n\nThe verse that ends\nwith His magnificence.", icon: "Quote" },
  { text: "Your anxiety shrinks\nwhen you remember\nhow great He is.\n\nYour fear dissolves\nwhen you grasp\nhow magnificent He is.\n\nAl-Adheem.\nGreater than everything.\nIncluding whatever\nis troubling you right now.", icon: "Heart" },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
  ayahReference: "Surah Al-Baqarah 2:255",
  translation: "\"And their preservation\ntires Him not.\nAnd He is the Most High,\nthe Magnificent (Al-Adheem).\"",
  nameArabic: "ٱلْعَظِيمُ",
  nameTransliteration: "Al-Adheem",
  nameSubtitle: "The Magnificent • The Supreme in Greatness",
  explanationPoints: [
    { icon: "Globe", text: "The heavens and earth fit within His Kursi—His Throne is beyond measure" },
    { icon: "Star", text: "The entire universe compared to His Throne is like a ring in a desert" },
    { icon: "ArrowUp", text: "\"Allahu Akbar\"—greater than your problem, your fear, everything" },
    { icon: "Heart", text: "Your anxiety shrinks when you remember how great Al-Adheem truly is" },
  ],
  closingText: "Al-Adheem is greater\nthan anything you face.\n\nThe universe fits\nin His footstool.\n\nYour problem—\nhowever enormous it feels—\nis nothing before Him.\n\nAllahu Akbar.",
  audioFileName: "al-baqarah-2-255-adheem",
};

export function AlAdheemStory({ nameId }: { nameId: string }) {
  return <MultiScreenStory nameId={nameId} screens={screens} finalReveal={finalReveal} gradientColors={["#05081a", "#0a1030", "#030514"]} />;
}
