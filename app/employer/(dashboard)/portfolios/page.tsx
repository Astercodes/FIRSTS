import type { Metadata } from "next";
import { PortfolioInbox } from "@/components/employer/PortfolioInbox";

export const metadata: Metadata = { title: "Candidate portfolios | FIRSTS" };

export default function EmployerPortfoliosPage() {
  return <PortfolioInbox />;
}
