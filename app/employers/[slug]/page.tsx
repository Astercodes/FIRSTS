import type { Metadata } from "next";
import { PublicEmployerGate } from "@/components/employer/PublicEmployerGate";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  return { title: `${slug.replace(/-/g, " ")} | FIRSTS Employer Profile` };
}

export default async function PublicEmployerPage({ params }: { params: Params }) {
  const { slug } = await params;
  return <PublicEmployerGate slug={slug} />;
}
