"use client";

import { BaseStory } from "@/components/stories/BaseStory";
import { SeaPartingView } from "@/components/stories/SeaPartingView";
import { ArRahmanStory } from "@/components/stories/ArRahmanStory";
import { ArRaheemStory } from "@/components/stories/ArRaheemStory";
import { YusufStory } from "@/components/stories/YusufStory";
import { YunusStory } from "@/components/stories/YunusStory";
import { MaryamStory } from "@/components/stories/MaryamStory";
import { KhidrStory } from "@/components/stories/KhidrStory";
import { AlMalikStory } from "@/components/stories/AlMalikStory";
import { NimrodStory } from "@/components/stories/NimrodStory";
import { AlJabbarStory } from "@/components/stories/AlJabbarStory";
import { AdamStory } from "@/components/stories/AdamStory";
import { SulaymanStory } from "@/components/stories/SulaymanStory";
import { YaqubStory } from "@/components/stories/YaqubStory";
import { ZakariyaStory } from "@/components/stories/ZakariyaStory";
import { AlWadudStory } from "@/components/stories/AlWadudStory";
import { IbrahimFireStory } from "@/components/stories/IbrahimFireStory";
import { AlHayyStory } from "@/components/stories/AlHayyStory";

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
    case "al-malik":
      return <AlMalikStory nameId={nameId} />;
    case "al-aziz":
      return <NimrodStory nameId={nameId} />;
    case "al-jabbar":
      return <AlJabbarStory nameId={nameId} />;
    case "al-khaliq":
      return <AdamStory nameId={nameId} />;
    case "al-wahhab":
      return <SulaymanStory nameId={nameId} />;
    case "al-aleem":
      return <YaqubStory nameId={nameId} />;
    case "al-mujeeb":
      return <ZakariyaStory nameId={nameId} />;
    case "al-wadud":
      return <AlWadudStory nameId={nameId} />;
    case "al-wakeel":
      return <IbrahimFireStory nameId={nameId} />;
    case "al-hayy":
      return <AlHayyStory nameId={nameId} />;
    default:
      return <BaseStory nameId={nameId} />;
  }
}
