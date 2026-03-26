"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "Adam ate from the tree.\n\nThe one thing\nhe was told not to do—\nhe did.\n\nThe first sin\nin human history.\n\nAnd he knew immediately\nwhat he had done.",
    icon: "Leaf",
  },
  {
    text: "\"Our Lord,\nwe have wronged ourselves.\nAnd if You do not forgive us\nand have mercy upon us,\nwe will surely be\namong the losers.\"\n\n— Surah Al-A'raf 7:23\n\nThe first prayer\nof repentance ever spoken.",
    icon: "Quote",
  },
  {
    text: "Allah accepted.\n\n\"Then Adam received\nwords from his Lord,\nand He accepted\nhis repentance.\n\nIndeed, He is\nAt-Tawwab, the Merciful.\"\n\n— Surah Al-Baqarah 2:37",
    icon: "CheckCircle",
  },
  {
    text: "But At-Tawwab\ndoes not just accept.\n\nHe turns toward you\nBEFORE you turn to Him.\n\nHe inspires the repentance.\nHe opens the door.\nThen He accepts\nwhen you walk through it.",
    icon: "ArrowRight",
  },
  {
    text: "The Prophet ﷺ said:\n\n\"Allah is more delighted\nwith the repentance of\nHis servant than a man\nwho loses his camel\nin a desert—\n\nthen finds it\nwhen he had given up hope.\"\n\n— Sahih Muslim",
    icon: "Sparkles",
  },
  {
    text: "More delighted.\n\nNot just willing.\nNot just accepting.\n\nDelighted.\n\nThe Creator of everything—\ndelighted when you\ncome back to Him.",
    icon: "Heart",
  },
  {
    text: "Ka'b ibn Malik\nmissed the Battle of Tabuk.\nHe was boycotted\nfor 50 days.\n\nNo one spoke to him.\nThe earth felt narrow.\n\nThen Allah revealed:\n\"He turned to them\nso they could repent.\"\n\n— Surah At-Tawbah 9:118",
    icon: "Users",
  },
  {
    text: "He turned to them first.\n\nAt-Tawwab turned to Ka'b\nBEFORE Ka'b turned to Him.\n\nThis is the secret:\nthe very desire to repent\nis already a gift\nfrom At-Tawwab.",
    icon: "Gift",
  },
  {
    text: "You sinned?\nReturn.\n\nYou sinned again?\nReturn again.\n\nThe door of At-Tawwab\nnever closes.\nNever.\n\nAnd He is happier\nwhen you walk through it\nthan you could ever imagine.",
    icon: "DoorOpen",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "أَلَمْ يَعْلَمُوا أَنَّ اللَّهَ هُوَ يَقْبَلُ التَّوْبَةَ عَنْ عِبَادِهِ وَيَأْخُذُ الصَّدَقَاتِ وَأَنَّ اللَّهَ هُوَ التَّوَّابُ الرَّحِيمُ",
  ayahReference: "Surah At-Tawbah 9:104",
  translation: "\"Do they not know that\nit is Allah who accepts\nrepentance from His servants?\nAnd that Allah is\nthe Accepting of repentance\n(At-Tawwab), the Merciful.\"",
  nameArabic: "ٱلتَّوَّابُ",
  nameTransliteration: "At-Tawwab",
  nameSubtitle: "The Accepter of Repentance • The Ever-Returning",
  explanationPoints: [
    { icon: "Leaf", text: "Adam sinned first—and At-Tawwab accepted his repentance" },
    { icon: "ArrowRight", text: "He turns toward you before you turn to Him—inspiring your return" },
    { icon: "Sparkles", text: "He is MORE delighted with your repentance than you are with relief" },
    { icon: "DoorOpen", text: "The door never closes—return once, twice, a thousand times" },
  ],
  closingText: "At-Tawwab accepts repentance.\nAlways. Without limit.\n\nHe is delighted when you return.\nThe desire to repent\nis already His gift to you.\n\nCome back. He is waiting.",
  audioFileName: "at-tawbah-9-104",
};

export function AtTawwabStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#0d1a14", "#142b20", "#08140d"]}
    />
  );
}
