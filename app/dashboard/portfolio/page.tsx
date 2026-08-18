import type { Metadata } from "next";
import { PortfolioView } from "@/components/dashboard/PortfolioView";

export const metadata: Metadata = { title: "Portfolio | FIRSTS" };

export default function PortfolioPage() {
  return <PortfolioView />;
}
