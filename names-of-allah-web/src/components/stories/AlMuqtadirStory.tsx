"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Pharaoh had\nthe mightiest army\nthe world had ever seen.\n\nChariots. Soldiers.\nWeapons. Power.\n\nHe controlled the Nile.\nHe controlled the people.\nHe declared himself a god.",
    icon: "Crown",
  },
  {
    text: "He pursued Musa\nand the Israelites\nto the edge of the sea.\n\nVictory seemed certain.\nThe slaves had nowhere to run.\n\nPharaoh smiled.\n\nHe didn't know\nhe was running\ntoward Al-Muqtadir.",
    icon: "Waves",
  },
  {
    text: "The sea split.\nThe Israelites crossed.\nPharaoh followed.\n\nAnd the sea\nclosed upon him.\n\n\"We seized them\nwith the seizure\nof the Mighty,\nthe All-Determiner\n(Al-Muqtadir).\"\n\n— Surah Al-Qamar 54:42",
    icon: "Quote",
  },
  {
    text: "The people of 'Ad—\ngiants among men.\nThey built monuments.\nThey boasted:\n\"Who is stronger than us?\"\n\nAl-Muqtadir sent a wind.\nSeven nights.\nEight days.\n\nThey were left\nlike hollow palm trunks.",
    icon: "Zap",
  },
  {
    text: "Al-Muqtadir\ndetermines outcomes.\n\nNot your boss.\nNot your enemy.\nNot the market.\nNot the government.\n\nThe final outcome\nof everything\nis determined\nby Al-Muqtadir alone.",
    icon: "Scale",
  },
  {
    text: "No amount of planning\ncan override His determination.\n\nThe Quraysh planned\nto kill the Prophet ﷺ.\nPerfect plan.\nSurrounded his house.\n\nHe walked out—\npast all of them—\nunseen.\n\nTheir plan. His determination.",
    icon: "Shield",
  },
  {
    text: "Human power\nis an illusion.\n\nPharaoh drowned.\n'Ad were dust.\nThamud were silenced.\nNimrod was killed\nby a mosquito.\n\nEvery tyrant\nlearns the same lesson:\nhuman power\nis nothing\nbefore Al-Muqtadir.",
    icon: "ArrowDown",
  },
  {
    text: "His determination\nprevails over all plans.\n\nYour enemies may plot.\nCircumstances may align\nagainst you.\nThe odds may seem\nimpossible.\n\nBut Al-Muqtadir\nhas the final say.\n\nAnd His determination\ncannot be overruled.",
    icon: "Sun",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "فَأَخَذْنَاهُمْ أَخْذَ عَزِيزٍ مُّقْتَدِرٍ",
  ayahReference: "Surah Al-Qamar 54:42",
  translation: "\"So We seized them\nwith the seizure\nof the Mighty,\nthe All-Determiner\n(Al-Muqtadir).\"",
  nameArabic: "ٱلْمُقْتَدِرُ",
  nameTransliteration: "Al-Muqtadir",
  nameSubtitle: "The All-Determiner • The Omnipotent",
  explanationPoints: [
    { icon: "Waves", text: "Pharaoh's army was seized by the sea—the grip of Al-Muqtadir" },
    { icon: "Zap", text: "The mighty 'Ad boasted of their strength—a wind left them as hollow trunks" },
    { icon: "Shield", text: "The Quraysh surrounded the Prophet's house—he walked out unseen" },
    { icon: "Sun", text: "His determination prevails over all plans—the final say is always His" },
  ],
  closingText: "Al-Muqtadir is the All-Determiner.\nPharaoh's army. 'Ad's power.\nEvery plan of every tyrant—\nall fell before Him.\n\nHis determination\ncannot be overruled.\nTrust it.",
  audioFileName: "al-qamar-54-42",
};

export function AlMuqtadirStory({ nameId }: { nameId: string }) {
  return <MultiScreenStory nameId={nameId} screens={screens} finalReveal={finalReveal} gradientColors={["#140d0d", "#221414", "#0f0808"]} />;
}
