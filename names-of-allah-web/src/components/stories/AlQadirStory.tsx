"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Ibrahim asked Allah:\n\n\"My Lord,\nshow me how You\ngive life to the dead.\"\n\nAllah said:\n\"Have you not believed?\"\n\nIbrahim said:\n\"Yes, but I ask\nso my heart\nmay be satisfied.\"\n\n— Surah Al-Baqarah 2:260",
    icon: "Quote",
  },
  {
    text: "Allah told him:\n\n\"Take four birds\nand commit them to yourself.\nThen put on each hill\na portion of them.\"\n\nIbrahim took the birds.\nSlaughtered them.\nMixed their flesh.\nPlaced pieces\non different mountains.",
    icon: "Mountain",
  },
  {
    text: "\"Then call them—\nthey will come to you\nin haste.\"\n\nIbrahim called.\n\nAnd the birds—\nfrom scattered pieces\non different mountains—\nreassembled.\nCame back to life.\nFlew back to him.\n\nAl-Qadir.",
    icon: "Feather",
  },
  {
    text: "\"And know that Allah\nis Exalted in Might\nand Wise.\"\n\n— Surah Al-Baqarah 2:260\n\nHe who reassembles birds\nfrom scattered pieces\ncan reassemble\nyour broken life.",
    icon: "Sparkles",
  },
  {
    text: "He split the moon\nfor Muhammad ﷺ.\n\n\"The Hour has come near,\nand the moon has split.\"\n\n— Surah Al-Qamar 54:1\n\nThe Quraysh saw it.\nThe moon—divided in two.\nThen made whole again.\n\nAl-Qadir.",
    icon: "Moon",
  },
  {
    text: "He creates from nothing.\n\n\"He is the Originator\nof the heavens and the earth.\nWhen He decrees a matter,\nHe only says to it,\n'Be'—and it is.\"\n\n— Surah Al-Baqarah 2:117\n\nNo materials needed.\nNo tools.\nJust \"Kun.\" Be.",
    icon: "Star",
  },
  {
    text: "He raises the dead.\n\nUzair passed by a town\nreduced to ruins.\nHe said:\n\"How will Allah\ngive this life after death?\"\n\nAllah caused him to die\nfor a hundred years.\nThen raised him.\n\nHis food hadn't spoiled.\nHis donkey was bones—\nthen reassembled\nbefore his eyes.\n\n— Surah Al-Baqarah 2:259",
    icon: "Zap",
  },
  {
    text: "The one who reassembles birds.\nSplits the moon.\nCreates from nothing.\nRaises the dead.\n\nWhat is your problem\ncompared to all that?\n\nNothing is beyond\nAl-Qadir's ability.\n\nNothing.",
    icon: "Sun",
  },
  {
    text: "\"Is not He who created\nthe heavens and the earth\nable to create\nthe likes of them?\"\n\nYes! And He is\nthe Knowing Creator.\n\n— Surah Ya-Sin 36:81\n\nAl-Qadir.\nCapable of all things.\nIncluding the miracle\nyou're praying for.",
    icon: "Heart",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "اعْلَمْ أَنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
  ayahReference: "Surah Al-Baqarah 2:259",
  translation: "\"Know that Allah is,\nover all things,\ncompetent (Al-Qadir).\"",
  nameArabic: "ٱلْقَادِرُ",
  nameTransliteration: "Al-Qadir",
  nameSubtitle: "The Capable • The All-Powerful",
  explanationPoints: [
    { icon: "Feather", text: "Ibrahim's four birds—scattered on mountains, then reassembled and flew back" },
    { icon: "Moon", text: "He split the moon for Muhammad—then made it whole again" },
    { icon: "Zap", text: "He raised Uzair after 100 years—his food still fresh, his donkey rebuilt" },
    { icon: "Heart", text: "Nothing is beyond His ability—including the miracle you need right now" },
  ],
  closingText: "Al-Qadir is capable\nof all things.\n\nBirds from pieces.\nLife from death.\nCreation from nothing.\n\nWhatever you need—\nknow that Allah\nis over all things capable.",
  audioFileName: "al-baqarah-2-259",
};

export function AlQadirStory({ nameId }: { nameId: string }) {
  return <MultiScreenStory nameId={nameId} screens={screens} finalReveal={finalReveal} gradientColors={["#0d1014", "#141a22", "#080a0f"]} />;
}
