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
import { AlBariStory } from "@/components/stories/AlBariStory";
import { AlMusawwirStory } from "@/components/stories/AlMusawwirStory";
import { AlHakamStory } from "@/components/stories/AlHakamStory";
import { AlKhabeerStory } from "@/components/stories/AlKhabeerStory";
import { AlAdheemStory } from "@/components/stories/AlAdheemStory";
import { AlAliyyStory } from "@/components/stories/AlAliyyStory";
import { AlKabeerStory } from "@/components/stories/AlKabeerStory";
import { AlMuqeetStory } from "@/components/stories/AlMuqeetStory";
import { AlHaseebStory } from "@/components/stories/AlHaseebStory";
import { ArRaqeebStory } from "@/components/stories/ArRaqeebStory";
import { AlWasiStory } from "@/components/stories/AlWasiStory";
import { AlMajeedStory } from "@/components/stories/AlMajeedStory";
import { AshShaheedStory } from "@/components/stories/AshShaheedStory";
import { AlMateenStory } from "@/components/stories/AlMateenStory";
import { AlHameedStory } from "@/components/stories/AlHameedStory";
import { AlQadirStory } from "@/components/stories/AlQadirStory";
import { AlMuqtadirStory } from "@/components/stories/AlMuqtadirStory";
import { AlMuqaddimStory } from "@/components/stories/AlMuqaddimStory";
import { AlMuakhkhirStory } from "@/components/stories/AlMuakhkhirStory";
import { AlAwwalStory } from "@/components/stories/AlAwwalStory";
import { AlAkhirStory } from "@/components/stories/AlAkhirStory";
import { AzZahirStory } from "@/components/stories/AzZahirStory";
import { AlBatinStory } from "@/components/stories/AlBatinStory";
import { AlBarrStory } from "@/components/stories/AlBarrStory";
import { ArRaufStory } from "@/components/stories/ArRaufStory";
import { AlGhaniyyStory } from "@/components/stories/AlGhaniyyStory";
import { AlWarithStory } from "@/components/stories/AlWarithStory";
import { AsSamadStory } from "@/components/stories/AsSamadStory";
import { AlMutaaliStory } from "@/components/stories/AlMutaaliStory";
import { AlWaliAltStory } from "@/components/stories/AlWaliAltStory";

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
    case "al-bari":
      return <AlBariStory nameId={nameId} />;
    case "al-musawwir":
      return <AlMusawwirStory nameId={nameId} />;
    case "al-hakam":
      return <AlHakamStory nameId={nameId} />;
    case "al-khabeer":
      return <AlKhabeerStory nameId={nameId} />;
    case "al-adheem":
      return <AlAdheemStory nameId={nameId} />;
    case "al-aliyy":
      return <AlAliyyStory nameId={nameId} />;
    case "al-kabeer":
      return <AlKabeerStory nameId={nameId} />;
    case "al-muqeet":
      return <AlMuqeetStory nameId={nameId} />;
    case "al-haseeb":
      return <AlHaseebStory nameId={nameId} />;
    case "ar-raqeeb":
      return <ArRaqeebStory nameId={nameId} />;
    case "al-wasi":
      return <AlWasiStory nameId={nameId} />;
    case "al-majeed":
      return <AlMajeedStory nameId={nameId} />;
    case "ash-shaheed":
      return <AshShaheedStory nameId={nameId} />;
    case "al-mateen":
      return <AlMateenStory nameId={nameId} />;
    case "al-hameed":
      return <AlHameedStory nameId={nameId} />;
    case "al-qadir":
      return <AlQadirStory nameId={nameId} />;
    case "al-muqtadir":
      return <AlMuqtadirStory nameId={nameId} />;
    case "al-muqaddim":
      return <AlMuqaddimStory nameId={nameId} />;
    case "al-muakhkhir":
      return <AlMuakhkhirStory nameId={nameId} />;
    case "al-awwal":
      return <AlAwwalStory nameId={nameId} />;
    case "al-akhir":
      return <AlAkhirStory nameId={nameId} />;
    case "az-zahir":
      return <AzZahirStory nameId={nameId} />;
    case "al-batin":
      return <AlBatinStory nameId={nameId} />;
    case "al-barr":
      return <AlBarrStory nameId={nameId} />;
    case "ar-rauf":
      return <ArRaufStory nameId={nameId} />;
    case "al-ghaniyy":
      return <AlGhaniyyStory nameId={nameId} />;
    case "al-warith":
      return <AlWarithStory nameId={nameId} />;
    case "as-samad":
      return <AsSamadStory nameId={nameId} />;
    case "al-mutaali":
      return <AlMutaaliStory nameId={nameId} />;
    case "al-wali-alt":
      return <AlWaliAltStory nameId={nameId} />;
    default:
      return <BaseStory nameId={nameId} />;
  }
}
