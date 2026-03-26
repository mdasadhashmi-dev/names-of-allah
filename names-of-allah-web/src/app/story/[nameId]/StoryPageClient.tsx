"use client";

import { BaseStory } from "@/components/stories/BaseStory";
import { SeaPartingView } from "@/components/stories/SeaPartingView";
import { ArRahmanStory } from "@/components/stories/ArRahmanStory";
import { ArRaheemStory } from "@/components/stories/ArRaheemStory";
import { YusufStory } from "@/components/stories/YusufStory";
import { YunusStory } from "@/components/stories/YunusStory";
import { MaryamStory } from "@/components/stories/MaryamStory";
import { KhidrStory } from "@/components/stories/KhidrStory";

export default function StoryPageClient({ nameId }: { nameId: string }) {
  switch (nameId) {
    case "al-fattah":
      return <SeaPartingView nameId={nameId} />;
    case "ar-rahman":
      return <ArRahmanStory nameId={nameId} />;
    case "ar-raheem":
      return <ArRaheemStory nameId={nameId} />;
    case "al-lateef":
      return <YusufStory nameId={nameId} />;
    case "al-ghaffar":
      return <YunusStory nameId={nameId} />;
    case "ar-razzaq":
      return <MaryamStory nameId={nameId} />;
    case "al-hakim":
      return <KhidrStory nameId={nameId} />;
    default:
      return <BaseStory nameId={nameId} />;
  }
}
