"use client";

import { MultiScreenStory, StoryScreen, FinalRevealConfig } from "./MultiScreenStory";
import { getNameById } from "@/data/names";

interface BaseStoryProps {
  nameId: string;
}

function generateScreens(name: {
  transliteration: string;
  meaning: string;
  storyTitle?: string;
  reflectionQuestion?: string;
}): StoryScreen[] {
  const screens: StoryScreen[] = [
    {
      text: `Among the beautiful names\nof Allah is one that\nreveals a profound truth\nabout who He is.\n\nA name that brings\npeace to the heart.`,
      icon: "Sparkles",
    },
    {
      text: `This name tells us\nthat Allah is\n"${name.meaning}"\n\nA quality so perfect,\nso complete,\nonly He truly possesses it.`,
      icon: "Star",
    },
  ];

  if (name.storyTitle) {
    screens.push({
      text: `${name.storyTitle}\n\nThis is the lesson\nthat awaits you—\na journey into understanding\nwho Allah truly is.`,
      icon: "BookOpen",
    });
  }

  screens.push({
    text: `When you know this name,\nyou begin to see\nAllah's hand in everything.\n\nIn every moment,\nevery blessing,\nevery trial.`,
    icon: "Eye",
  });

  if (name.reflectionQuestion) {
    screens.push({
      text: `Pause and reflect:\n\n"${name.reflectionQuestion}"\n\nLet this question\nsettle in your heart.`,
      icon: "Heart",
    });
  }

  return screens;
}

function generateFinalReveal(name: {
  arabic: string;
  transliteration: string;
  meaning: string;
  quranicReference?: string;
}): FinalRevealConfig {
  return {
    arabicAyah: name.arabic,
    ayahReference: name.quranicReference || "",
    translation: `"${name.meaning}"`,
    nameArabic: name.arabic,
    nameTransliteration: name.transliteration,
    nameSubtitle: name.meaning,
    explanationPoints: [
      { icon: "Heart", text: `${name.transliteration} means "${name.meaning}"` },
      { icon: "BookOpen", text: "Knowing this name deepens your connection with Allah" },
      { icon: "Star", text: "Call upon Him by this name in your prayers" },
      { icon: "CheckCircle", text: "Live with awareness of this attribute in your daily life" },
    ],
    closingText: `Ya ${name.transliteration}...\n\nKnowing Your names\nis knowing You.\n\nMay this name transform\nhow you see the world\nand how you call upon Your Lord.`,
  };
}

export function BaseStory({ nameId }: BaseStoryProps) {
  const name = getNameById(nameId);

  if (!name) return null;

  const screens = generateScreens(name);
  const finalReveal = generateFinalReveal(name);

  return (
    <MultiScreenStory
      nameId={nameId}
      screens={screens}
      finalReveal={finalReveal}
      gradientColors={["#0a0a2e", "#0d142e", "#050510"]}
    />
  );
}
