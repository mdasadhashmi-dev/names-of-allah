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
import { AlQuddusStory } from "@/components/stories/AlQuddusStory";
import { AlMuminStory } from "@/components/stories/AlMuminStory";
import { AlMuhayminStory } from "@/components/stories/AlMuhayminStory";
import { AlMutakabbirStory } from "@/components/stories/AlMutakabbirStory";
import { AlQahharStory } from "@/components/stories/AlQahharStory";
import { AlQabidStory } from "@/components/stories/AlQabidStory";
import { AlBasitStory } from "@/components/stories/AlBasitStory";
import { AsSameeStory } from "@/components/stories/AsSameeStory";
import { AlBaseerStory } from "@/components/stories/AlBaseerStory";
import { AlHaleemStory } from "@/components/stories/AlHaleemStory";
import { AlGhafoorStory } from "@/components/stories/AlGhafoorStory";
import { AshShakurStory } from "@/components/stories/AshShakurStory";
import { AlHafeezStory } from "@/components/stories/AlHafeezStory";
import { AlKareemStory } from "@/components/stories/AlKareemStory";
import { AlHaqqStory } from "@/components/stories/AlHaqqStory";
import { AlQawiyyStory } from "@/components/stories/AlQawiyyStory";
import { AlWaliStory } from "@/components/stories/AlWaliStory";
import { AlQayyumStory } from "@/components/stories/AlQayyumStory";
import { AtTawwabStory } from "@/components/stories/AtTawwabStory";
import { AlAfuwStory } from "@/components/stories/AlAfuwStory";

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
    case "al-quddus":
      return <AlQuddusStory nameId={nameId} />;
    case "al-mumin":
      return <AlMuminStory nameId={nameId} />;
    case "al-muhaymin":
      return <AlMuhayminStory nameId={nameId} />;
    case "al-mutakabbir":
      return <AlMutakabbirStory nameId={nameId} />;
    case "al-qahhar":
      return <AlQahharStory nameId={nameId} />;
    case "al-qabid":
      return <AlQabidStory nameId={nameId} />;
    case "al-basit":
      return <AlBasitStory nameId={nameId} />;
    case "as-samee":
      return <AsSameeStory nameId={nameId} />;
    case "al-baseer":
      return <AlBaseerStory nameId={nameId} />;
    case "al-haleem":
      return <AlHaleemStory nameId={nameId} />;
    case "al-ghafoor":
      return <AlGhafoorStory nameId={nameId} />;
    case "ash-shakur":
      return <AshShakurStory nameId={nameId} />;
    case "al-hafeez":
      return <AlHafeezStory nameId={nameId} />;
    case "al-kareem":
      return <AlKareemStory nameId={nameId} />;
    case "al-haqq":
      return <AlHaqqStory nameId={nameId} />;
    case "al-qawiyy":
      return <AlQawiyyStory nameId={nameId} />;
    case "al-wali":
      return <AlWaliStory nameId={nameId} />;
    case "al-qayyum":
      return <AlQayyumStory nameId={nameId} />;
    case "at-tawwab":
      return <AtTawwabStory nameId={nameId} />;
    case "al-afuw":
      return <AlAfuwStory nameId={nameId} />;
    default:
      return <BaseStory nameId={nameId} />;
  }
}
