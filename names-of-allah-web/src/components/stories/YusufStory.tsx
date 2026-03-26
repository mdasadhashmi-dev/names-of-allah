"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Young Yusuf saw a vision:\nEleven stars, the sun, and the moon\u2014\nall bowing before him.\n\nA dream of greatness to come.",
    icon: "Sparkles",
  },
  {
    text: "But jealousy poisoned his brothers' hearts.\n\nThey conspired in darkness,\nplotting to tear him away\nfrom his beloved father.",
    icon: "AlertTriangle",
  },
  {
    text: "Cast into the depths of a cold, dark well.\n\nAlone. Abandoned. Betrayed.\n\nYet even in that darkness,\nAllah's gentle hand was guiding.",
    icon: "Moon",
  },
  {
    text: "A passing caravan pulled him out\u2014\nonly to sell him as a slave.\n\nIn Egypt's marketplace,\na boy became property.\n\nFirst step in an unseen plan.",
    icon: "ShoppingBag",
  },
  {
    text: "Tested again.\nFalsely accused in the house of Al-Aziz.\n\nHe chose honor over freedom,\nprison over sin.\n\nTrusting Allah through the trial.",
    icon: "Hand",
  },
  {
    text: "Long years behind bars.\nThe world forgot him.\n\nBut Allah?\n\nAllah was weaving every moment\ninto something beautiful.",
    icon: "Clock",
  },
  {
    text: "Then\u2014the king's mysterious dream.\n\nNone of his wise men could solve it.\n\nBut there was one man who could:\nThe forgotten prisoner.",
    icon: "Moon",
  },
  {
    text: "From the lowest pit\nto the highest throne.\n\nThe slave became the savior.\nThe prisoner became the minister.\n\nAllah's plan revealed.",
    icon: "ArrowUpCircle",
  },
  {
    text: "Years later, his brothers came\u2014\nseeking food, not knowing who he was.\n\nHis father's lost sight returned.\n\nThe family reunited in tears of joy.\n\nThe childhood dream fulfilled.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "\u0625\u0650\u0646\u0651\u064e \u0631\u064e\u0628\u0651\u0650\u0649 \u0644\u064e\u0637\u0650\u064a\u0641\u064c \u0644\u0651\u0650\u0645\u064e\u0627 \u064a\u064e\u0634\u064e\u0627\u0653\u0621\u064f",
  ayahReference: "Surah Yusuf 12:100",
  translation: "\"Indeed, my Lord is Subtle\nin what He wills\"",
  nameArabic: "\u0671\u0644\u0644\u0651\u064e\u0637\u0650\u064a\u0641\u064f",
  nameTransliteration: "Al-Lateef",
  nameSubtitle: "The Most Gentle \u2022 The Subtle",
  explanationPoints: [
    { icon: "ArrowDownCircle", text: "The well was not abandonment\u2014it was the path to Egypt" },
    { icon: "Footprints", text: "Slavery was not degradation\u2014it was entry into the palace" },
    { icon: "Lock", text: "Prison was not punishment\u2014it was preparation for leadership" },
    { icon: "Crown", text: "Every trial was a thread in Allah's gentle tapestry" },
  ],
  closingText: "Allah works in ways we cannot see.\nWhat seems like a closed door\nis His gentle opening of another.\n\nHe is Al-Lateef\u2014The Most Subtle,\nworking beneath the surface,\nguiding every moment with infinite wisdom.",
  audioFileName: "yusuf-12-100",
};

export function YusufStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#140d26", "#1f1433", "#190f2e"]}
    />
  );
}
