"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Mountains seem eternal.\nThey have stood\nfor millions of years.\nImmovable. Unshakable.\n\nYet on the Last Day—\n\n\"And the mountains\nwill be like\ncarded wool.\"\n\n— Surah Al-Qari'ah 101:5\n\nBlown away like nothing.",
    icon: "Mountain",
  },
  {
    text: "Stars seem permanent.\nFixed in the sky.\nAncient beyond measure.\n\nYet on the Last Day—\n\n\"When the stars\nfall, losing their lustre.\"\n\n— Surah At-Takwir 81:2\n\nScattered like dust.",
    icon: "Star",
  },
  {
    text: "The earth seems solid.\nYou walk on it\nwithout a thought.\nIt holds oceans,\ncities, civilizations.\n\nYet on the Last Day—\n\n\"When the earth\nis shaken\nwith its final earthquake.\"\n\n— Surah Az-Zalzalah 99:1\n\nFlattened completely.",
    icon: "Globe",
  },
  {
    text: "Everything that seems\nstrong, permanent, firm—\nwill end.\n\nMountains will be wool.\nStars will fall.\nThe earth will be flattened.\nThe sun will fold.\nThe oceans will boil.\n\nNothing is truly firm—\nexcept Al-Mateen.",
    icon: "Zap",
  },
  {
    text: "Al-Mateen.\nThe Firm.\nThe Unshakable.\n\nHe does not change.\nHe does not weaken.\nHe does not fade.\n\nWhen everything crumbles—\nHe remains.\nExactly as He always was.",
    icon: "Shield",
  },
  {
    text: "Your faith,\nwhen anchored in Al-Mateen,\ncannot be shaken.\n\nTrials will come.\nLosses will come.\nDoubts will come.\n\nBut faith rooted\nin the Firm\nis immovable.",
    icon: "Heart",
  },
  {
    text: "The Prophet ﷺ said\nthe firmest handhold—\nal-urwatul wuthqa—\nis \"La ilaha illAllah.\"\n\nThere is no god but Allah.\n\nThis is the rope\nthat never breaks.\nThe foundation\nthat never cracks.",
    icon: "Sparkles",
  },
  {
    text: "Hold onto Al-Mateen.\n\nWhen the ground\nbeneath you shakes.\nWhen everything you trusted\nfalls apart.\nWhen the world\nfeels unstable.\n\nHe is the Firm.\nAnd He will\nhold you firm.",
    icon: "Sun",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "إِنَّ اللَّهَ هُوَ الرَّزَّاقُ ذُو الْقُوَّةِ الْمَتِينُ",
  ayahReference: "Surah Adh-Dhariyat 51:58",
  translation: "\"Indeed, it is Allah\nwho is the Provider,\nthe firm possessor\nof strength (Al-Mateen).\"",
  nameArabic: "ٱلْمَتِينُ",
  nameTransliteration: "Al-Mateen",
  nameSubtitle: "The Firm • The Steadfast",
  explanationPoints: [
    { icon: "Mountain", text: "Mountains will be blown like wool—but Al-Mateen is unshakable" },
    { icon: "Star", text: "Stars will fall and the earth will flatten—only He remains unchanged" },
    { icon: "Shield", text: "Faith anchored in Al-Mateen cannot be shaken by any trial" },
    { icon: "Sparkles", text: "The firmest handhold is La ilaha illAllah—a rope that never breaks" },
  ],
  closingText: "Al-Mateen is the Firm.\nMountains crumble. Stars fall.\nThe earth itself will end.\n\nBut He never changes.\nNever weakens.\nNever fades.\n\nHold onto Al-Mateen—\nand you will stand firm.",
  audioFileName: "adh-dhariyat-51-58",
};

export function AlMateenStory({ nameId }: { nameId: string }) {
  return <MultiScreenStory nameId={nameId} screens={screens} finalReveal={finalReveal} gradientColors={["#141010", "#221a1a", "#0f0a0a"]} />;
}
