import type { Metadata } from "next";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { FIHero } from "@/components/institutions/FIHero";
import { FIIntro } from "@/components/institutions/FIIntro";
import { FIMoreThan } from "@/components/institutions/FIMoreThan";
import { FIStats } from "@/components/institutions/FIStats";
import { FICampusWide } from "@/components/institutions/FICampusWide";
import { FIPathways } from "@/components/institutions/FIPathways";
import { FIModes } from "@/components/institutions/FIModes";
import { FICareerCenter } from "@/components/institutions/FICareerCenter";
import { FIBusinessCenter } from "@/components/institutions/FIBusinessCenter";
import { FIFirstLeap } from "@/components/institutions/FIFirstLeap";
import { FIPeople } from "@/components/institutions/FIPeople";
import { FIMilestones } from "@/components/institutions/FIMilestones";
import { FIPortfolio } from "@/components/institutions/FIPortfolio";
import { FIPrivacy } from "@/components/institutions/FIPrivacy";
import { FIAnalytics } from "@/components/institutions/FIAnalytics";
import { FIPatterns } from "@/components/institutions/FIPatterns";
import { FIIntegration } from "@/components/institutions/FIIntegration";
import { FICohorts } from "@/components/institutions/FICohorts";
import { FITechnology } from "@/components/institutions/FITechnology";
import { FIPartnerships } from "@/components/institutions/FIPartnerships";
import { FIFacultyAlumni } from "@/components/institutions/FIFacultyAlumni";
import { FIEmployers } from "@/components/institutions/FIEmployers";
import { FIGraduates } from "@/components/institutions/FIGraduates";
import { FIReporting } from "@/components/institutions/FIReporting";
import { FIImplementation } from "@/components/institutions/FIImplementation";
import { FIPilot } from "@/components/institutions/FIPilot";
import { FIEcosystem } from "@/components/institutions/FIEcosystem";
import { FIClosing } from "@/components/institutions/FIClosing";

export const metadata: Metadata = {
  title: "For Institutions | FIRSTS",
  description:
    "FIRSTS gives institutions a shared development infrastructure that helps every student build the knowledge, skills, habits, and evidence they need for where they are going.",
};

export default function InstitutionsPage() {
  return (
    <>
      <Nav />
      <main>
        <FIHero />
        <FIIntro />
        <FIMoreThan />
        <FIStats />
        <FICampusWide />
        <FIPathways />
        <FIModes />
        <FICareerCenter />
        <FIBusinessCenter />
        <FIFirstLeap />
        <FIPeople />
        <FIMilestones />
        <FIPortfolio />
        <FIPrivacy />
        <FIAnalytics />
        <FIPatterns />
        <FIIntegration />
        <FICohorts />
        <FITechnology />
        <FIPartnerships />
        <FIFacultyAlumni />
        <FIEmployers />
        <FIGraduates />
        <FIReporting />
        <FIImplementation />
        <FIPilot />
        <FIEcosystem />
        <FIClosing />
      </main>
      <Footer />
    </>
  );
}
