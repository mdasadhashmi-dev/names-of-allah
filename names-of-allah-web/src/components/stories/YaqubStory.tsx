"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Young Yusuf came to his father\nwith a dream:\n\n\"I saw eleven stars,\nthe sun, and the moon—\nall prostrating to me.\"\n\nYa'qub knew immediately.\nThis dream was from Allah.",
    icon: "Star",
  },
  {
    text: "\"Do not tell your brothers,\"\nYa'qub warned.\n\nHe knew what jealousy could do.\nHe knew the future held pain.\n\nBut he also knew something else—\nsomething his sons could not see.",
    icon: "AlertTriangle",
  },
  {
    text: "They took Yusuf anyway.\nThey threw him in a well.\nThey brought back his shirt\nstained with false blood.\n\n\"A wolf ate him, father.\"\n\nYa'qub held the shirt.\nNo tear marks. No rips.\nHe knew they were lying.",
    icon: "XCircle",
  },
  {
    text: "He said:\n\n\"Rather, your souls\nhave enticed you\nto something.\"\n\nThen:\n\n\"So patience is most fitting.\nAnd Allah is the one\nsought for help.\"",
    icon: "Quote",
  },
  {
    text: "Years became decades.\nYusuf was gone.\nThen Binyamin was taken.\n\nTwo sons lost.\n\nYa'qub wept\nuntil his eyes turned white.\nThe grief was unbearable.",
    icon: "Eye",
  },
  {
    text: "His sons begged him\nto stop mourning.\n\nYa'qub replied:\n\n\"I only complain of\nmy suffering and grief\nto Allah.\n\nAnd I know from Allah\nwhat you do not know.\"",
    icon: "MessageCircle",
  },
  {
    text: "\"I know from Allah\nwhat you do not know.\"\n\nThis was not denial.\nThis was certainty.\n\nAllah had shown him\nthrough Yusuf's dream\nthat the story was not over.",
    icon: "Lightbulb",
  },
  {
    text: "Then the news came.\n\nYusuf was alive.\nHe was the minister of Egypt.\n\nHis shirt was placed\non Ya'qub's face—\nand his sight returned.\n\nThe dream came true.",
    icon: "Sparkles",
  },
  {
    text: "Ya'qub said:\n\n\"Did I not tell you\nthat I know from Allah\nwhat you do not know?\"\n\nAl-Aleem knew the whole story\nbefore the first chapter began.\n\nYa'qub trusted that knowledge.",
    icon: "BookOpen",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "فَلَمَّا أَن جَاءَ الْبَشِيرُ أَلْقَاهُ عَلَىٰ وَجْهِهِ فَارْتَدَّ بَصِيرًا ۖ قَالَ أَلَمْ أَقُل لَّكُمْ إِنِّي أَعْلَمُ مِنَ اللَّهِ مَا لَا تَعْلَمُونَ",
  ayahReference: "Surah Yusuf 12:96",
  translation: "\"When the bearer of good news arrived,\nhe cast it over his face,\nand he returned seeing.\n\nHe said: Did I not tell you\nthat I know from Allah\nwhat you do not know?\"",
  nameArabic: "ٱلْعَلِيمُ",
  nameTransliteration: "Al-Aleem",
  nameSubtitle: "The All-Knowing • The Omniscient",
  explanationPoints: [
    { icon: "Eye", text: "Allah knew Ya'qub's pain, Yusuf's innocence, and the reunion to come" },
    { icon: "Star", text: "The dream shown to a child contained the entire future" },
    { icon: "Clock", text: "Decades of grief were part of a plan known only to Al-Aleem" },
    { icon: "Heart", text: "When you cannot see the end, trust the One who sees everything" },
  ],
  closingText: "Al-Aleem knows everything—\nyour pain, your patience,\nand the beautiful ending\nyou cannot yet see.\n\nHe knew Yusuf would return.\nHe knows your story too.",
  audioFileName: "yusuf-12-96",
};

export function YaqubStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#0a0f26", "#111a3d", "#06091f"]}
    />
  );
}
