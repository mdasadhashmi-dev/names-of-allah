"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "The Prophet ﷺ said:\n\n\"Allah is Witr —\nOne, Odd, Single —\nand He loves the witr.\"\n\n— Sahih Bukhari 6410\n\nHe is absolutely One.\nUndivided. Unpartnered.\nSingular.",
    icon: "Quote",
  },
  {
    text: "Before there was anything,\nHe was.\n\nNo partner beside Him.\nNo equal before Him.\nNo rival after Him.\n\nOne.\nAlone.\nAnd completely sufficient\nin His oneness.",
    icon: "Moon",
  },
  {
    text: "This is why\nthe Witr prayer is odd.\n\n1 raka'ah. Or 3. Or 5.\nOr 7. Or 11.\n\nAlways odd.\nAlways pointing back\nto the One\nwho is singular\nabove all else.",
    icon: "Star",
  },
  {
    text: "After every prayer,\nthe Prophet ﷺ taught us\nto say:\n\nSubhanAllah — 33 times.\nAlhamdulillah — 33 times.\nAllahu Akbar — 33 times.\n\nThat is 99.",
    icon: "Layers",
  },
  {
    text: "Then you seal it\nwith one.\n\n\"La ilaha illallah\nwahdahu la sharika lah.\"\n\nThere is no god but Allah,\nalone, without partner.\n\n99 + 1 = 100.\n\nThe final odd one.\nThe one that\ncompletes everything.",
    icon: "Zap",
  },
  {
    text: "The last prayer\nof the night is Witr.\n\nThe Prophet ﷺ said:\n\"Make Witr the last prayer\nyou pray at night.\"\n\n— Sahih Bukhari 998\n\nThe final word of your day\nbelongs to the One.",
    icon: "Clock",
  },
  {
    text: "Everything in creation\npoints to His oneness.\n\nOne sun lights your world.\nOne heart beats in your chest.\nOne soul carries your being.\n\nAll of it — a reflection\nof Al-Witr.\n\nThe One\nfrom whom\nall singularity flows.",
    icon: "Sun",
  },
  {
    text: "Al-Witr.\n\nThe One. The Singular.\nThe Absolutely Unique.\n\nIn a world\nof pairs and multiples,\nHe alone is Witr.\n\nAnd everything odd\nin your worship\nis a declaration:\n\nThere is only One God.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "قُلْ هُوَ اللَّهُ أَحَدٌ",
  ayahReference: "Surah Al-Ikhlas 112:1",
  translation: "\"Say: He is Allah,\nthe One.\"",
  nameArabic: "ٱلْوِتْرُ",
  nameTransliteration: "Al-Witr",
  nameSubtitle: "The One • The Odd • The Single",
  explanationPoints: [
    { icon: "Moon", text: "He was One before creation, is One now, and will forever remain One" },
    { icon: "Star", text: "The Witr prayer — always odd — is a nightly declaration of His oneness" },
    { icon: "Layers", text: "33 + 33 + 33 + 1 — the dhikr formula ends with the One, totaling 100" },
    { icon: "Sun", text: "One sun, one heart, one soul — all creation reflects the singularity of Al-Witr" },
  ],
  closingText: "Al-Witr is the One.\nAbsolutely singular.\nBeyond all pairs\nand all comparison.\n\nEvery odd number\nin your worship\nis a whisper of Tawheed.\n\nPray your Witr tonight.\nAnd let the last word\nof your day\nbelong to the One.",
  audioFileName: "al-ikhlas-112-1",
};

export function AlWitrStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#0c0c14", "#14141e", "#08080e"]}
    />
  );
}
