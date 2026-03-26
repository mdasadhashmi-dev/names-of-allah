"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "\"Glorify the name\nof your Lord,\nthe Most High.\"\n\nThis is how\nSurah Al-A'la begins.\n\nNot with a story.\nNot with a law.\n\nWith a command\nto look up.",
    icon: "ArrowUp",
  },
  {
    text: "He is above all things.\n\nAbove the heavens.\nAbove the Throne.\nAbove every creation\nthat stretches across\nthe universe.\n\nNo mind can reach Him.\nNo imagination\ncan contain Him.\nNo limit\ncan define Him.",
    icon: "Mountain",
  },
  {
    text: "His knowledge\nis above your understanding.\nHis wisdom\nis above your plans.\nHis decree\nis above your desires.\n\nAnd yet—\n\nHe is not distant.\nHe is above,\nbut He is not far.",
    icon: "Eye",
  },
  {
    text: "\"We are closer to him\nthan his jugular vein.\"\n\n— Surah Qaf 50:16\n\nThe Most High\nis also the Most Near.\n\nHe hears\nwhat you don't say aloud.\nHe knows\nwhat you haven't yet felt.",
    icon: "Heart",
  },
  {
    text: "And how do you\nreach the Most High?\n\nNot by climbing.\nNot by building towers.\nNot by philosophy\nor power or wealth.\n\nYou reach Him\nby going low.",
    icon: "Compass",
  },
  {
    text: "In sujud—\nforehead on the ground—\nthe lowest position\na human body can take.\n\nThat is where\nyou are closest to Him.\n\nThe Prophet ﷺ said:\n\"The closest a servant is\nto his Lord\nis when he is in sujud.\"\n\n— Sahih Muslim",
    icon: "Sparkles",
  },
  {
    text: "Subhana Rabbiyal A'la.\n\nGlory to my Lord,\nthe Most High.\n\nYou say this\nwith your face\nin the dust.\n\nThe highest is glorified\nfrom the lowest place.\n\nThis is the paradox\nof worship:\nhumility is the path\nto the Exalted.",
    icon: "Star",
  },
  {
    text: "Al-A'la.\n\nThe Most High.\nAbove all creation,\nabove all comprehension,\nabove all limitation.\n\nYet reached\nthrough the simplest act:\nplacing your forehead\non the ground\nand whispering His name.",
    icon: "Crown",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى",
  ayahReference: "Surah Al-A'la 87:1",
  translation: "\"Glorify the name\nof your Lord,\nthe Most High.\"",
  nameArabic: "الأعلى",
  nameTransliteration: "Al-A'la",
  nameSubtitle: "The Most High • The Exalted",
  explanationPoints: [
    { icon: "ArrowUp", text: "He is above all things — above the heavens, above the Throne, above all comprehension" },
    { icon: "Heart", text: "Yet He is closer to you than your jugular vein — the Most High is never far" },
    { icon: "Star", text: "The closest you are to Him is in sujud — the lowest bodily position (Sahih Muslim)" },
    { icon: "Crown", text: "'Subhana Rabbiyal A'la' — the Most High is glorified from the ground, not from towers" },
  ],
  closingText: "Al-A'la is above\neverything you know.\n\nYet the path to Him\nis not upward—\nit is downward.\n\nForehead to the ground.\nHeart surrendered.\nEgo dissolved.\n\nThat is where\nthe Most High meets you.",
  audioFileName: "al-ala-87-1",
};

export function AlAlaaStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#070d1a", "#0e1526", "#040914"]}
    />
  );
}
