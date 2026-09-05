import type { Metadata } from "next";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { FEHero } from "@/components/employers/FEHero";
import { FEEvidence } from "@/components/employers/FEEvidence";
import { FEInterviewPrep } from "@/components/employers/FEInterviewPrep";
import { FEConsistentStructure } from "@/components/employers/FEConsistentStructure";
import { FEEmergingTalent } from "@/components/employers/FEEmergingTalent";
import { FEBeforeRecruiting } from "@/components/employers/FEBeforeRecruiting";
import { FECareerExposure } from "@/components/employers/FECareerExposure";
import { FEMentors } from "@/components/employers/FEMentors";
import { FEChallenges } from "@/components/employers/FEChallenges";
import { FEExperiences } from "@/components/employers/FEExperiences";
import { FEAdvisory } from "@/components/employers/FEAdvisory";
import { FEIpfs } from "@/components/employers/FEIpfs";
import { FEPipeline } from "@/components/employers/FEPipeline";
import { FESponsor } from "@/components/employers/FESponsor";
import { FEWorkforce } from "@/components/employers/FEWorkforce";
import { FEBusiness } from "@/components/employers/FEBusiness";
import { FEParticipation } from "@/components/employers/FEParticipation";
import { FEScenarios } from "@/components/employers/FEScenarios";
import { FENoSetup } from "@/components/employers/FENoSetup";
import { FEClosing } from "@/components/employers/FEClosing";

export const metadata: Metadata = {
  title: "For Employers | FIRSTS",
  description:
    "FIRSTS helps candidates arrive better prepared with evidence behind their resume, and gives employers ways to mentor, sponsor, and build a talent pipeline before recruiting begins.",
};

export default function EmployersPage() {
  return (
    <>
      <Nav />
      <main>
        <FEHero />
        <FEEvidence />
        <FEInterviewPrep />
        <FEConsistentStructure />
        <FEEmergingTalent />
        <FEBeforeRecruiting />
        <FECareerExposure />
        <FEMentors />
        <FEChallenges />
        <FEExperiences />
        <FEAdvisory />
        <FEIpfs />
        <FEPipeline />
        <FESponsor />
        <FEWorkforce />
        <FEBusiness />
        <FEParticipation />
        <FEScenarios />
        <FENoSetup />
        <FEClosing />
      </main>
      <Footer />
    </>
  );
}
