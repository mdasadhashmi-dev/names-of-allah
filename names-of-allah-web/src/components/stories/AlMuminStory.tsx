"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "The night before Badr,\n313 believers stood\nagainst an army of 1,000.\n\nNo armor for most.\nFew swords. Fewer horses.\n\nBy every measure,\nthey should have been terrified.",
    icon: "Users",
  },
  {
    text: "The Prophet ﷺ\nraised his hands and prayed:\n\n\"O Allah, if this small band\nperishes today,\nYou will not be worshipped\non this earth.\"\n\nHis hands trembled.",
    icon: "Hand",
  },
  {
    text: "Abu Bakr held his arm\nand said:\n\n\"O Messenger of Allah,\nenough. Your Lord\nwill fulfill His promise.\"\n\nThen came the answer.",
    icon: "Heart",
  },
  {
    text: "\"Remember when you asked\nyour Lord for help,\nand He answered:\n'I will reinforce you\nwith a thousand angels,\nfollowing one another.'\"\n\n— Surah Al-Anfal 8:9",
    icon: "Shield",
  },
  {
    text: "Allah sent angels.\nHe sent rain to firm the ground.\nHe cast drowsiness\nover the believers—\npeaceful sleep\non the eve of battle.\n\nSecurity in the midst of terror.",
    icon: "CloudRain",
  },
  {
    text: "313 defeated 1,000.\n\nNot because they were stronger.\nNot because they were\nbetter equipped.\n\nBecause Al-Mu'min—\nthe Granter of Security—\nwas with them.",
    icon: "Swords",
  },
  {
    text: "Al-Mu'min does not\nremove the danger.\n\nHe grants safety\nin the presence of danger.\n\nThe battle still happened.\nBut fear left their hearts.",
    icon: "Sparkles",
  },
  {
    text: "What are you afraid of\nright now?\n\nThe future? Loss? Failure?\n\nThe One who calmed\n313 hearts on the eve\nof the impossible—\n\ncan calm yours too.",
    icon: "Moon",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ",
  ayahReference: "Surah Al-Hashr 59:23",
  translation: "\"He is Allah,\nbesides Whom there is no deity—\nthe King, the Most Holy,\nthe Source of Peace,\nthe Granter of Security (Al-Mu'min).\"",
  nameArabic: "ٱلْمُؤْمِنُ",
  nameTransliteration: "Al-Mu'min",
  nameSubtitle: "The Granter of Security • The Remover of Fear",
  explanationPoints: [
    { icon: "Shield", text: "He sent angels to Badr when believers were outnumbered 3 to 1" },
    { icon: "Moon", text: "He grants peaceful sleep even on the eve of battle" },
    { icon: "Heart", text: "Security is not absence of danger—it is His presence within it" },
    { icon: "Sparkles", text: "Whatever you fear, Al-Mu'min can remove it from your heart" },
  ],
  closingText: "Al-Mu'min grants security.\nNot by removing every threat—\nbut by filling your heart\nwith peace despite them.\n\nHe calmed 313 hearts at Badr.\nHe can calm yours tonight.",
  audioFileName: "al-hashr-59-23-mumin",
};

export function AlMuminStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#0a1420", "#111f30", "#060d16"]}
    />
  );
}
