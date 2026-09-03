import type { Metadata } from "next";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { CCHero } from "@/components/career-center/CCHero";
import { CCQuickActions } from "@/components/career-center/CCQuickActions";
import { CCStartWithYou } from "@/components/career-center/CCStartWithYou";
import { CCFields } from "@/components/career-center/CCFields";
import { CCProfile } from "@/components/career-center/CCProfile";
import { CCIndustries } from "@/components/career-center/CCIndustries";
import { CCCompare } from "@/components/career-center/CCCompare";
import { CCTryIt } from "@/components/career-center/CCTryIt";
import { CCPeople } from "@/components/career-center/CCPeople";
import { CCFirsts } from "@/components/career-center/CCFirsts";
import { CCReadiness } from "@/components/career-center/CCReadiness";
import { CCToolkit } from "@/components/career-center/CCToolkit";
import { CCOpportunities } from "@/components/career-center/CCOpportunities";
import { CCMyCareer } from "@/components/career-center/CCMyCareer";
import { CCNextSteps } from "@/components/career-center/CCNextSteps";
import { CCJourney } from "@/components/career-center/CCJourney";
import { CCWhereAreYou } from "@/components/career-center/CCWhereAreYou";
import { CCClosing } from "@/components/career-center/CCClosing";

export const metadata: Metadata = {
  title: "Career Center | FIRSTS",
  description:
    "Your home for career exploration, development, experience, preparation, and opportunity on FIRSTS.",
};

export default function CareerCenterPage() {
  return (
    <>
      <Nav />
      <main>
        <CCHero />
        <CCQuickActions />
        <CCStartWithYou />
        <CCFields />
        <CCProfile />
        <CCIndustries />
        <CCCompare />
        <CCTryIt />
        <CCPeople />
        <CCFirsts />
        <CCReadiness />
        <CCToolkit />
        <CCOpportunities />
        <CCMyCareer />
        <CCNextSteps />
        <CCJourney />
        <CCWhereAreYou />
        <CCClosing />
      </main>
      <Footer />
    </>
  );
}
