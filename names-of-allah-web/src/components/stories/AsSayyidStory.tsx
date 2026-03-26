"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";

const screens: StoryScreen[] = [
  {
    text: "People chase titles.\n\nCEO. President. King.\nDoctor. Professor. Sir.\n\nWe spend entire lives\npursuing a word\nthat others will call us.\n\nBut there is only one\ntrue Master.",
    icon: "Crown",
  },
  {
    text: "The Prophet ﷺ said:\n\n\"As-Sayyid is Allah.\"\n\n— Sunan Abu Dawud 4806\n\nThe only true Lord.\nThe only true Master.\nThe only One\nworthy of the title.",
    icon: "Quote",
  },
  {
    text: "People came to the Prophet ﷺ\nand called him:\n\"You are our sayyid.\"\n\nAnd he—\nthe greatest man who ever lived—\nredirected them:\n\n\"The Sayyid is Allah.\"\n\nHe would not take\nwhat belongs only to God.",
    icon: "Feather",
  },
  {
    text: "Every king who ever lived\nis now dust.\n\nEvery empire that ever rose\nhas crumbled.\n\nEvery master who demanded\nobedience\neventually bowed\nto the only Master\nwho remains.",
    icon: "Clock",
  },
  {
    text: "Pharaoh said:\n\"I am your lord most high.\"\n\nNimrod said:\n\"I give life and death.\"\n\nThey claimed mastery.\nAnd the real Master\nshowed them\nhow powerless they were.",
    icon: "Zap",
  },
  {
    text: "When you submit\nto As-Sayyid alone,\nsomething extraordinary happens:\n\nYou are freed\nfrom every other master.\n\nNo person owns you.\nNo title defines you.\nNo system controls you.\n\nYou serve only One.",
    icon: "Wind",
  },
  {
    text: "This is the secret\nof true freedom.\n\nThe one who has\na thousand masters\nis a slave to all.\n\nThe one who has One Master—\nthe true Master—\nis slave to none\nbut Him.\n\nAnd that slavery\nis the highest freedom.",
    icon: "Lightbulb",
  },
  {
    text: "As-Sayyid.\n\nThe Lord and Master.\n\nEvery other authority\nis borrowed.\nEvery other throne\nis temporary.\n\nHe alone\nis the Master\nwho will never fall.",
    icon: "Sparkles",
  },
];

const finalReveal: FinalRevealConfig = {
  arabicAyah: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
  ayahReference: "Surah Al-Fatihah 1:5",
  translation: "\"You alone we worship,\nand You alone\nwe ask for help.\"",
  nameArabic: "ٱلسَّيِّدُ",
  nameTransliteration: "As-Sayyid",
  nameSubtitle: "The Lord • The Master • The Chief",
  explanationPoints: [
    { icon: "Crown", text: "The Prophet ﷺ said 'As-Sayyid is Allah' — redirecting all mastery to the One who deserves it" },
    { icon: "Clock", text: "Every human master will die, every kingdom will crumble — only His authority remains" },
    { icon: "Wind", text: "Submitting to Him alone frees you from slavery to every other master" },
    { icon: "Lightbulb", text: "True freedom is not having no master — it is having the right One" },
  ],
  closingText: "As-Sayyid is the only Master\nwhose authority never expires.\n\nWhen you say\n\"You alone we worship\" —\nyou declare independence\nfrom every false lord.\n\nServe Him.\nAnd be truly free.",
  audioFileName: "al-fatihah-1-5",
};

export function AsSayyidStory({ nameId }: { nameId: string }) {
  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#10100c", "#1a1a14", "#0c0c08"]}
    />
  );
}
