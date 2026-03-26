"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "He advances\nwhom He wills.\n\nNot based on wealth.\nNot based on lineage.\nNot based on appearance.\n\nAl-Muqaddim advances\nbased on what only He sees\nin the heart.",
    icon: "ArrowUp",
  },
  {
    text: "Abu Bakr—\na quiet merchant.\nNot the strongest.\nNot the wealthiest.\nNot the most eloquent.\n\nYet Al-Muqaddim\nadvanced him\nabove all companions.\n\nThe first man to believe.\nThe closest friend.\nThe first Khalifah.",
    icon: "User",
  },
  {
    text: "Maryam—\na young woman\nin a society\nthat valued men.\n\nNo army. No wealth.\nNo political power.\n\nYet Al-Muqaddim\nadvanced her\nabove all women\nof her time.\n\n\"Allah has chosen you\nand purified you\nand chosen you\nabove the women\nof the worlds.\"\n\n— Surah Aal-Imran 3:42",
    icon: "Quote",
  },
  {
    text: "Bilal—\na slave.\nAbyssinian.\nOwned by Umayyah.\nTortured for his faith.\n\nAl-Muqaddim advanced him\nto become the first muezzin—\nthe voice that calls\nmillions to prayer\nfor all of history.",
    icon: "Star",
  },
  {
    text: "Some were born\ninto poverty—\nand advanced\nto lead nations.\n\nSalahuddin was a Kurd\nfrom a modest family.\nAl-Muqaddim advanced him\nto liberate Jerusalem.",
    icon: "Shield",
  },
  {
    text: "Muhammad ﷺ—\nan orphan.\nNo father. No wealth.\nNo army. No throne.\n\nAl-Muqaddim advanced him\nto become the most\ninfluential human being\nin all of history.\n\nFrom orphan to prophet.\nThat is Al-Muqaddim.",
    icon: "Heart",
  },
  {
    text: "He advances your blessings\nwhen the time is right.\n\nNot when you want.\nNot when you plan.\nBut when He knows\nyou are ready.\n\nThe delay is not denial.\nIt is preparation.",
    icon: "Clock",
  },
  {
    text: "Your delay\nis not denial.\n\nIt is Al-Muqaddim\nchoosing the right moment.\n\nThe right job.\nThe right spouse.\nThe right opportunity.\n\nHe advances\nwhat is best for you—\nat the perfect time.",
    icon: "Sun",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "مَا يُبَدَّلُ الْقَوْلُ لَدَيَّ وَمَا أَنَا بِظَلَّامٍ لِّلْعَبِيدِ",
  ayahReference: "Surah Qaf 50:29",
  translation: "\"The word is not changed\nwith Me,\nand never will I be\nunjust to the servants.\"",
  nameArabic: "ٱلْمُقَدِّمُ",
  nameTransliteration: "Al-Muqaddim",
  nameSubtitle: "The Expediter • The Advancer",
  explanationPoints: [
    { icon: "User", text: "Abu Bakr—a quiet merchant—advanced above all companions by His will" },
    { icon: "Star", text: "Bilal—a tortured slave—advanced to become the voice calling millions to prayer" },
    { icon: "Heart", text: "Muhammad ﷺ—an orphan—advanced to the most influential human in history" },
    { icon: "Clock", text: "Your delay is not denial—Al-Muqaddim chooses the perfect moment" },
  ],
  closingText: "Al-Muqaddim advances\nwhom He wills.\n\nSlaves became leaders.\nOrphans became prophets.\nThe unknown became eternal.\n\nTrust His timing.\nHe is advancing you—\nat the perfect moment.",
  audioFileName: "qaf-50-29",
};

export function AlMuqaddimStory({ nameId }: { nameId: string }) {
  return <MultiScreenStory nameId={nameId} screens={screens} finalReveal={finalReveal} gradientColors={["#0d1410", "#14221a", "#080f0a"]} />;
}
