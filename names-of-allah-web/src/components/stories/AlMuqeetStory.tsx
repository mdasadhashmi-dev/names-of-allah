"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Elijah—Ilyas—\nfled into the wilderness.\nAlone. Hunted. Starving.\n\nHe sat under a tree\nand wished for death.\n\nThen ravens came—\ncarrying bread and meat.\n\nAllah sustained him\nwhen no one else could.",
    icon: "Feather",
  },
  {
    text: "The People of the Cave\nfled persecution.\nThey entered a cave\nand slept.\n\nAllah sustained them\nfor 309 years.\n\nNo food. No water.\nNo sunlight.\n\nAl-Muqeet kept them alive\nby His will alone.",
    icon: "Moon",
  },
  {
    text: "Deep beneath the ocean—\nwhere no light reaches—\nwhere the pressure would\ncrush a human—\n\nfish swim.\nCreatures thrive.\n\nWho feeds them?\n\nAl-Muqeet.\nThe Sustainer\nof every living thing.",
    icon: "Waves",
  },
  {
    text: "Every bird that leaves\nits nest at dawn\nwith an empty stomach—\nreturns at dusk, fed.\n\nThe Prophet ﷺ said:\n\"If you trusted Allah\nwith true reliance,\nHe would provide for you\nas He provides for the birds.\"\n\n— Sunan At-Tirmidhi",
    icon: "Sun",
  },
  {
    text: "Your provision\nwas written\nbefore you were born.\n\nBefore your first breath.\nBefore your first cry.\n\nThe angel was sent\nto write four things—\nand one of them\nwas your rizq.\n\nAl-Muqeet assigned it.",
    icon: "BookOpen",
  },
  {
    text: "He sustains more\nthan your body.\n\nHe sustains your heart\nwith iman.\nYour mind with clarity.\nYour soul with peace.\n\nAl-Muqeet nourishes\nwhat you can see—\nand what you cannot.",
    icon: "Heart",
  },
  {
    text: "Maryam, alone\nin the desert,\nin labor,\nin pain—\n\nAllah told her:\n\"Shake the trunk\nof the palm tree.\"\n\nFresh dates fell.\nA stream appeared.\n\nAl-Muqeet provides\nfrom places\nyou never expected.",
    icon: "Sparkles",
  },
  {
    text: "You worry\nabout tomorrow.\nAbout money.\nAbout provision.\n\nBut Al-Muqeet\nsustained Ilyas through ravens.\nThe sleepers for 309 years.\nFish in the deepest ocean.\nBirds from empty nests.\n\nHe will sustain you.",
    icon: "Shield",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "وَكَانَ اللَّهُ عَلَىٰ كُلِّ شَيْءٍ مُّقِيتًا",
  ayahReference: "Surah An-Nisa 4:85",
  translation: "\"And Allah is,\nover all things,\na Keeper (Al-Muqeet).\"",
  nameArabic: "ٱلْمُقِيتُ",
  nameTransliteration: "Al-Muqeet",
  nameSubtitle: "The Sustainer • The Nourisher",
  explanationPoints: [
    { icon: "Feather", text: "He sent ravens to feed Ilyas when no human could reach him" },
    { icon: "Moon", text: "He sustained the People of the Cave for 309 years without food or water" },
    { icon: "Waves", text: "He feeds every creature in the deepest ocean where no light reaches" },
    { icon: "Heart", text: "He nourishes more than your body—your heart, mind, and soul too" },
  ],
  closingText: "Al-Muqeet is your Sustainer.\nHe fed Ilyas through ravens.\nHe kept sleepers alive for centuries.\nHe feeds every creature on earth.\n\nYour provision is written.\nTrust Al-Muqeet.",
  audioFileName: "an-nisa-4-85",
};

export function AlMuqeetStory({ nameId }: { nameId: string }) {
  return <MultiScreenStory nameId={nameId} screens={screens} finalReveal={finalReveal} gradientColors={["#0d1a0f", "#142b18", "#08140a"]} />;
}
