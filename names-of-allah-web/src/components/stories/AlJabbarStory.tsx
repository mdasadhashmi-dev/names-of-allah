"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Ya'qub عَلَيْهِ ٱلسَّلَامُ\nhad twelve sons.\n\nBut one was different—\nYusuf, the light of his eyes.\n\nA father's love\nthat only grew deeper.",
    icon: "Heart",
  },
  {
    text: "One day, his sons returned\nwith Yusuf's shirt—\nstained with false blood.\n\n\"A wolf devoured him.\"\n\nYa'qub knew they were lying.\nBut Yusuf was gone.",
    icon: "XCircle",
  },
  {
    text: "Years passed.\nThen decades.\n\nYa'qub never stopped grieving.\nHe never stopped hoping.\n\nHis tears flowed\nuntil his eyes turned white.\n\nHe went blind from sorrow.",
    icon: "Eye",
  },
  {
    text: "His sons said:\n\n\"By Allah, you will not\ncease remembering Yusuf\nuntil you become ill\nor die.\"\n\nThey told him\nto move on.",
    icon: "Users",
  },
  {
    text: "Ya'qub answered:\n\n\"I only complain of\nmy suffering and grief\nto Allah.\"\n\nHe did not complain\nto people.\nHe complained to\nthe only One who could mend him.",
    icon: "MessageCircle",
  },
  {
    text: "Then the moment came.\n\nA caravan returned from Egypt\ncarrying Yusuf's shirt—\nthis time, not stained with lies,\nbut filled with hope.",
    icon: "Package",
  },
  {
    text: "Ya'qub said:\n\"I can smell Yusuf.\"\n\nThey thought he was delusional.\n\nBut when the shirt was placed\nupon his face—\n\nhis sight returned.",
    icon: "Sparkles",
  },
  {
    text: "Blind eyes—restored.\nA broken heart—mended.\nA lost son—returned.\n\nDecades of grief,\nhealed in a single moment\nby the One who repairs\nwhat no one else can.",
    icon: "RefreshCw",
  },
  {
    text: "This is Al-Jabbar.\n\nNot the one who breaks—\nbut the One who mends.\n\nThe Restorer of what is shattered.\nThe Healer of what is broken.\n\nNo damage is beyond His repair.",
    icon: "Heart",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ الْمُهَيْمِنُ الْعَزِيزُ الْجَبَّارُ",
  ayahReference: "Surah Al-Hashr 59:23",
  translation: "\"He is Allah, besides Whom\nthere is no deity—\nthe Almighty,\nthe Compeller (Al-Jabbar)\"",
  nameArabic: "ٱلْجَبَّارُ",
  nameTransliteration: "Al-Jabbar",
  nameSubtitle: "The Compeller • The Restorer",
  explanationPoints: [
    { icon: "Eye", text: "Ya'qub went blind from grief—Al-Jabbar restored his sight" },
    { icon: "Heart", text: "He mends broken hearts that no human hand can reach" },
    { icon: "RefreshCw", text: "Decades of pain can be healed in a single divine moment" },
    { icon: "Shield", text: "Complain only to Allah—He alone has the power to restore" },
  ],
  closingText: "Al-Jabbar mends what is broken.\nYour grief, your loss, your pain—\nHe can restore it all.\n\nNo wound is too deep.\nNo break is too severe.\n\nTurn to Al-Jabbar.",
  audioFileName: "al-hashr-59-23-jabbar",
};

export function AlJabbarStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#1a1408", "#2b2010", "#0f0b04"]}
    />
  );
}
