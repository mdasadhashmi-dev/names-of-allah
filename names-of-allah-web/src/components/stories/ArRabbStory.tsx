"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "The second word\nof the Quran\nafter Bismillah.\n\nBefore any command.\nBefore any story.\nBefore any law.\n\nAllah introduces Himself:\n\nRabb.",
    icon: "BookOpen",
  },
  {
    text: "\"All praise is for Allah,\nRabb of all the worlds.\"\n\nNot just Lord.\nNot just King.\n\nRabb—\nthe One who takes something\nfrom nothing\nand nurtures it\nto perfection.",
    icon: "Quote",
  },
  {
    text: "You were a drop of fluid.\nInvisible. Formless.\n\nHe shaped you into bones.\nClothed the bones with flesh.\nBreathed into you a soul.\n\nAnd then He didn't stop.\nHe kept nurturing.",
    icon: "Layers",
  },
  {
    text: "Musa asked Pharaoh:\nWho is your Lord?\n\nThen he answered\nhis own question:\n\n\"Our Rabb is He\nwho gave each thing its form\nand then guided it.\"\n\n— Surah Taha 20:50",
    icon: "Compass",
  },
  {
    text: "He gave the bee\nits instinct to build hexagons.\nHe gave the salmon\nits pull to return home.\nHe gave the seed\nits knowledge to break\nthrough concrete.\n\nHe gave each thing its form—\nthen guided it.",
    icon: "Leaf",
  },
  {
    text: "He doesn't just create\nand abandon.\n\nThe flower doesn't open\nwithout His permission.\nThe child doesn't grow\nwithout His tending.\nThe wound doesn't heal\nwithout His care.\n\nAr-Rabb nurtures.",
    icon: "TreePine",
  },
  {
    text: "He nurtured you\nthrough every stage.\n\nHelpless infant.\nCurious child.\nSearching youth.\n\nAt every stage,\nHe provided exactly\nwhat you needed—\nbefore you knew\nyou needed it.",
    icon: "Clock",
  },
  {
    text: "Ar-Rabb.\n\nThe Lord and Nurturer\nof all that exists.\n\nHe took you from nothing\nand is still shaping you—\nstill guiding you—\nstill bringing you\ncloser to completion.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
  ayahReference: "Surah Al-Fatihah 1:2",
  translation: "\"All praise is for Allah,\nLord of all the worlds.\"",
  nameArabic: "ٱلرَّبُّ",
  nameTransliteration: "Ar-Rabb",
  nameSubtitle: "The Lord • The Nurturer • The Sustainer",
  explanationPoints: [
    { icon: "Layers", text: "He takes creation from nothing and develops it stage by stage to perfection" },
    { icon: "Compass", text: "He gave each thing its form and then guided it — nothing is left without direction" },
    { icon: "Leaf", text: "He doesn't create and abandon — He continues nurturing every moment" },
    { icon: "Clock", text: "At every stage of your life, He provided exactly what you needed" },
  ],
  closingText: "Ar-Rabb is the reason\nyou are who you are today.\n\nEvery stage you survived,\nevery growth you experienced,\nevery guidance that found you—\n\nit was Him,\nnurturing you\nall along.",
  audioFileName: "al-fatihah-1-2",
};

export function ArRabbStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#0a0e10", "#101820", "#06080c"]}
    />
  );
}
