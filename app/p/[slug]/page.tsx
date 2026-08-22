import type { Metadata } from "next";
import { PublicPortfolioGate } from "@/components/dashboard/PublicPortfolioGate";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  return { title: `${slug.replace(/-/g, " ")} | FIRSTS Portfolio` };
}

export default async function PublicPortfolioPage({ params }: { params: Params }) {
  const { slug } = await params;
  return <PublicPortfolioGate slug={slug} />;
}
