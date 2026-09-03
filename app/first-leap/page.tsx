import type { Metadata } from "next";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { FLHero } from "@/components/first-leap/FLHero";
import { FLQuestions } from "@/components/first-leap/FLQuestions";
import { FLStages } from "@/components/first-leap/FLStages";
import { FLCareer } from "@/components/first-leap/FLCareer";
import { FLBusiness } from "@/components/first-leap/FLBusiness";
import { FLHowItWorks } from "@/components/first-leap/FLHowItWorks";
import { FLPeople } from "@/components/first-leap/FLPeople";
import { FLFirsts } from "@/components/first-leap/FLFirsts";
import { FLOutcomes } from "@/components/first-leap/FLOutcomes";
import { FLNextStage } from "@/components/first-leap/FLNextStage";
import { FLPartners } from "@/components/first-leap/FLPartners";
import { FLGetInvolved } from "@/components/first-leap/FLGetInvolved";
import { FLClosing } from "@/components/first-leap/FLClosing";

export const metadata: Metadata = {
  title: "First Leap | FIRSTS",
  description:
    "First Leap is a guided career and business discovery program that helps you understand yourself, explore what is possible, experience potential directions, and choose your next step.",
};

export default function FirstLeapPage() {
  return (
    <>
      <Nav />
      <main>
        <FLHero />
        <FLQuestions />
        <FLStages />
        <FLCareer />
        <FLBusiness />
        <FLHowItWorks />
        <FLPeople />
        <FLFirsts />
        <FLOutcomes />
        <FLNextStage />
        <FLPartners />
        <FLGetInvolved />
        <FLClosing />
      </main>
      <Footer />
    </>
  );
}
