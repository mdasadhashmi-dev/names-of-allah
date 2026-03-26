"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "The people of 'Ad\nwere giants.\nThey carved homes\ninto mountains.\n\nThey said:\n\"Who is mightier than us\nin strength?\"\n\nThey thought\nnothing could touch them.",
    icon: "Mountain",
  },
  {
    text: "Allah sent Hud\nto warn them.\n\nThey laughed.\n\"Bring us what you\nthreaten us with,\nif you are truthful.\"\n\nSo Allah sent a wind.",
    icon: "Wind",
  },
  {
    text: "Not an ordinary wind.\n\nA wind that lasted\nseven nights\nand eight days.\n\nIt tore them\nfrom their homes.\nIt left them\n\"like hollow trunks\nof palm trees.\"\n\n— Surah Al-Haqqah 69:7",
    icon: "AlertTriangle",
  },
  {
    text: "The people of Thamud\ncarved magnificent palaces\nfrom solid rock.\n\nThey were given a she-camel\nas a sign from Allah.\n\nThey killed it.\n\nA single blast\ndestroyed them all.",
    icon: "Zap",
  },
  {
    text: "The people of Lut\nwere warned.\nThey mocked.\n\nAllah turned their city\nupside down\nand rained upon them\nstones of baked clay.\n\nNothing remained.",
    icon: "ArrowDown",
  },
  {
    text: "Pharaoh, the mightiest king,\ndrowned in the very sea\nhe thought he ruled.\n\nQarun, the wealthiest man,\nwas swallowed by the earth\nalong with his treasures.",
    icon: "Waves",
  },
  {
    text: "'Ad. Thamud. Lut.\nPharaoh. Qarun.\n\nAll subdued.\nAll overpowered.\nAll returned to dust.\n\nNo army saved them.\nNo wealth protected them.\nNo fortress held.",
    icon: "XCircle",
  },
  {
    text: "This is Al-Qahhar—\nthe Subduer.\n\nHe is not cruel.\nHe gave every nation\ntime, warnings, messengers.\n\nBut when they persisted\nin defiance—\n\nHe subdued them\nwith a power\nnothing could resist.",
    icon: "Shield",
  },
  {
    text: "And this is also comfort.\n\nEvery oppressor\nwho seems untouchable—\nAl-Qahhar will subdue.\n\nEvery injustice\nthat seems permanent—\nAl-Qahhar will end.\n\nNo tyrant escapes Him.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "قُلِ اللَّهُ خَالِقُ كُلِّ شَيْءٍ وَهُوَ الْوَاحِدُ الْقَهَّارُ",
  ayahReference: "Surah Ar-Ra'd 13:16",
  translation: "\"Say: Allah is the Creator\nof all things,\nand He is the One,\nthe Subduer (Al-Qahhar).\"",
  nameArabic: "ٱلْقَهَّارُ",
  nameTransliteration: "Al-Qahhar",
  nameSubtitle: "The Subduer • The Overpowering",
  explanationPoints: [
    { icon: "Wind", text: "'Ad were giants—a wind destroyed them in seven nights" },
    { icon: "Mountain", text: "Thamud carved palaces in rock—a single blast finished them" },
    { icon: "Waves", text: "Pharaoh ruled Egypt—drowned in the sea he thought he owned" },
    { icon: "Sparkles", text: "Every oppressor will be subdued—Al-Qahhar's justice is certain" },
  ],
  closingText: "Al-Qahhar subdues all.\n'Ad, Thamud, Pharaoh, Qarun—\nnone escaped.\n\nEvery tyrant you see today\nwill meet the same end.\n\nAl-Qahhar's justice\nis never late.",
  audioFileName: "ar-rad-13-16",
};

export function AlQahharStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#1a0a0a", "#261010", "#0f0505"]}
    />
  );
}
