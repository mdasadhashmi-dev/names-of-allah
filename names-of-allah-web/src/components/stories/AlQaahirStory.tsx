"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Fir'awn declared himself god.\nHe built towers to the sky.\nHe enslaved an entire nation.\n\nHe thought no power\ncould ever touch him.",
    icon: "Crown",
  },
  {
    text: "\"I am your lord, most high!\"\nhe shouted from his throne.\n\nHis armies numbered\nin the thousands.\nHis kingdom stretched\nacross the land.\n\nWho could stop him?",
    icon: "AlertTriangle",
  },
  {
    text: "Allah sent Musa.\nA man with a stutter.\nA shepherd with a staff.\n\nNo army. No wealth.\nJust the message of\nAl-Qaahir—\nthe Irresistible.",
    icon: "Hand",
  },
  {
    text: "Sign after sign.\nPlague after plague.\nThe river turned to blood.\nDarkness covered the land.\n\nStill Fir'awn resisted.\nStill he refused.\n\nBut Al-Qaahir\ncannot be resisted.",
    icon: "Zap",
  },
  {
    text: "The sea split.\nMusa and his people crossed.\n\nFir'awn charged in—\nconfident, arrogant,\ncertain of victory.\n\nThe waters closed.",
    icon: "Waves",
  },
  {
    text: "\"Now I believe!\"\nFir'awn cried\nas the water crushed him.\n\nToo late.\n\nAl-Qaahir subdued\nthe most powerful man on earth\nwith water.",
    icon: "Moon",
  },
  {
    text: "\"And He is Al-Qaahir\nabove His servants.\nAnd He is Al-Hakim,\nAl-Khabeer.\"\n\n— Surah Al-An'am 6:18\n\nNo tyrant escapes Him.\nNo power overpowers Him.",
    icon: "Quote",
  },
  {
    text: "Every tyrant in history\nmet their end.\n\nNamrud. Fir'awn.\nAbu Jahl. Qarun.\n\nAl-Qaahir subdues\nevery force\nthat rises against His will.\n\nNo one is beyond His reach.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "وَهُوَ الْقَاهِرُ فَوْقَ عِبَادِهِ ۚ وَهُوَ الْحَكِيمُ الْخَبِيرُ",
  ayahReference: "Surah Al-An'am 6:18",
  translation: "\"And He is Al-Qaahir\nabove His servants.\nAnd He is the Wise, the Acquainted.\"",
  nameArabic: "ٱلْقَاهِرُ",
  nameTransliteration: "Al-Qaahir",
  nameSubtitle: "The Irresistible • The Subduer",
  explanationPoints: [
    { icon: "Crown", text: "Fir'awn declared himself god — Al-Qaahir drowned him in moments" },
    { icon: "Zap", text: "No army, no wealth, no power can resist Al-Qaahir's decree" },
    { icon: "Waves", text: "He subdues the mightiest with the simplest of means" },
    { icon: "Shield", text: "The oppressed find comfort — Al-Qaahir will subdue every tyrant" },
  ],
  closingText: "Al-Qaahir is above all His servants.\nNo force in creation\ncan resist His will.\n\nEvery tyrant will be humbled.\nEvery oppressor will be subdued.\nHis power is irresistible.",
  audioFileName: "al-anam-6-18",
};

export function AlQaahirStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#1a0d0d", "#261414", "#140a0a"]}
    />
  );
}
