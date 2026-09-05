import type { Metadata } from "next";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { FFHero } from "@/components/facilitators/FFHero";
import { FFRoleDefinition } from "@/components/facilitators/FFRoleDefinition";
import { FFSpecialize } from "@/components/facilitators/FFSpecialize";
import { FFChooseTrack } from "@/components/facilitators/FFChooseTrack";
import { FFDayToDay } from "@/components/facilitators/FFDayToDay";
import { FFPathway } from "@/components/facilitators/FFPathway";
import { FFTrainingCurriculum } from "@/components/facilitators/FFTrainingCurriculum";
import { FFResourcePacks } from "@/components/facilitators/FFResourcePacks";
import { FFSettings } from "@/components/facilitators/FFSettings";
import { FFGroupFacilitation } from "@/components/facilitators/FFGroupFacilitation";
import { FFReflectBoundaries } from "@/components/facilitators/FFReflectBoundaries";
import { FFJourney } from "@/components/facilitators/FFJourney";
import { FFCertification } from "@/components/facilitators/FFCertification";
import { FFFeedbackCommunity } from "@/components/facilitators/FFFeedbackCommunity";
import { FFImpact } from "@/components/facilitators/FFImpact";
import { FFFirstTerm } from "@/components/facilitators/FFFirstTerm";
import { FFWhyFacilitate } from "@/components/facilitators/FFWhyFacilitate";
import { FFWhoCanApply } from "@/components/facilitators/FFWhoCanApply";
import { FFHowItWorks } from "@/components/facilitators/FFHowItWorks";
import { FFClosing } from "@/components/facilitators/FFClosing";

export const metadata: Metadata = {
  title: "For Facilitators | FIRSTS",
  description:
    "FIRSTS Facilitators help participants engage intentionally with their development. Train, practice, observe, co-lead, specialize, and grow into a real facilitation practice.",
};

export default function FacilitatorsMarketingPage() {
  return (
    <>
      <Nav />
      <main>
        <FFHero />
        <FFRoleDefinition />
        <FFSpecialize />
        <FFChooseTrack />
        <FFDayToDay />
        <FFPathway />
        <FFTrainingCurriculum />
        <FFResourcePacks />
        <FFSettings />
        <FFGroupFacilitation />
        <FFReflectBoundaries />
        <FFJourney />
        <FFCertification />
        <FFFeedbackCommunity />
        <FFImpact />
        <FFFirstTerm />
        <FFWhyFacilitate />
        <FFWhoCanApply />
        <FFHowItWorks />
        <FFClosing />
      </main>
      <Footer />
    </>
  );
}
