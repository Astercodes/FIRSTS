import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCandidatePortfolio } from "@/lib/sponsorData";
import { PortfolioDetail } from "@/components/employer/PortfolioDetail";

type Params = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { id } = await params;
  const candidate = getCandidatePortfolio(id);
  return { title: candidate ? `${candidate.name} | FIRSTS` : "FIRSTS" };
}

export default async function EmployerPortfolioPage({ params }: { params: Params }) {
  const { id } = await params;
  const candidate = getCandidatePortfolio(id);
  if (!candidate) notFound();

  return <PortfolioDetail candidate={candidate} />;
}
