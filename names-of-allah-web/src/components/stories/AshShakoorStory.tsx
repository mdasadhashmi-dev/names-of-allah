"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "A man was walking\non a road\nand became desperately thirsty.\n\nHe found a well,\nclimbed down,\ndrank,\nand came back up.\n\nThen he saw a dog\npanting with thirst,\neating the moist earth.",
    icon: "Droplet",
  },
  {
    text: "The man said to himself:\n\"This dog is suffering\nfrom the same thirst\nthat I suffered.\"\n\nSo he climbed back down,\nfilled his shoe with water,\nheld it in his mouth,\nand gave the dog to drink.\n\n— Sahih al-Bukhari 2363",
    icon: "Heart",
  },
  {
    text: "For that one act—\nwater in a shoe\nfor a thirsty dog—\n\nAllah forgave him\nall of his sins.\n\nAll of them.\n\nThe Companions asked:\n\"Is there reward for us\nin serving animals?\"\n\nThe Prophet ﷺ said:\n\"In every living being\nthere is reward.\"",
    icon: "Sparkles",
  },
  {
    text: "He multiplies.\n\nA single good deed\nis recorded as ten.\nOr seventy.\nOr seven hundred.\n\nOr without limit.\n\n\"The likeness of those\nwho spend in the way of Allah\nis as a grain of corn\nthat sprouts seven ears.\"\n\n— Surah Al-Baqarah 2:261",
    icon: "Leaf",
  },
  {
    text: "A woman gave\nhalf a date in charity.\n\nHalf a date.\n\nThe Prophet ﷺ said:\n\"Protect yourselves from the Fire,\neven if with half a date.\"\n\n— Sahih al-Bukhari\n\nShe gave almost nothing.\nBut Ash-Shakoor\ndoes not measure\nthe way you measure.",
    icon: "Scale",
  },
  {
    text: "\"A good word\nis charity.\"\n\n\"Removing a harmful thing\nfrom the road\nis charity.\"\n\n\"Smiling at your brother\nis charity.\"\n\n— Sahih Muslim\n\nHe made the path to reward\nso wide\nthat almost nothing\nis excluded.",
    icon: "Feather",
  },
  {
    text: "And He does not forget.\n\n\"Whoever does\nan atom's weight of good\nwill see it.\"\n\n— Surah Az-Zalzalah 99:7\n\nAn atom.\nThe smallest thing\nyou can imagine.\n\nHe sees it.\nHe records it.\nHe rewards it.",
    icon: "Eye",
  },
  {
    text: "Ash-Shakoor.\n\nThe One who takes\nyour smallest offering—\na shoe of water,\nhalf a date,\na smile—\n\nand returns it\nmultiplied beyond measure.\n\nYou do a little.\nHe gives you everything.",
    icon: "Sun",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "لِيُوَفِّيَهُمْ أُجُورَهُمْ وَيَزِيدَهُم مِّن فَضْلِهِ ۚ إِنَّهُ غَفُورٌ شَكُورٌ",
  ayahReference: "Surah Fatir 35:30",
  translation: "\"That He may pay them\nin full their rewards\nand increase for them\nof His bounty.\nIndeed, He is Forgiving\nand Appreciative (Shakoor).\"",
  nameArabic: "ٱلشَّكُورُ",
  nameTransliteration: "Ash-Shakoor",
  nameSubtitle: "The Most Appreciative • The Most Grateful",
  explanationPoints: [
    { icon: "Droplet", text: "A man gave water to a thirsty dog — Allah forgave all his sins" },
    { icon: "Leaf", text: "A single good deed is multiplied to ten, to seven hundred, to without limit" },
    { icon: "Scale", text: "Even half a date in charity is seen and rewarded by Ash-Shakoor" },
    { icon: "Eye", text: "An atom's weight of good will not be lost — He records everything" },
  ],
  closingText: "Ash-Shakoor does not\ncount the way you count.\n\nHe takes your smallest act\nand makes it immense.\n\nNothing you do for His sake\nis ever wasted.\nNothing is ever forgotten.\n\nHe appreciates\nwhat no one else notices.",
  audioFileName: "fatir-35-30",
};

export function AshShakoorStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#141008", "#1f1a0e", "#0d0a05"]}
    />
  );
}
