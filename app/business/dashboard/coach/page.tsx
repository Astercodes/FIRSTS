import type { Metadata } from "next";
import { ComingSoonPanel } from "@/components/business/portal/ComingSoonPanel";

export const metadata: Metadata = { title: "Coach | FIRSTS Business" };

export default function BusinessCoachPage() {
  return (
    <ComingSoonPanel
      title="Your business coach"
      description="A coach grounded in the actual business you're building, not generic startup advice, asking better questions as you move through each track."
      items={[
        "Guidance shaped around your specific idea and track progress",
        "Prompts for your next customer conversation or experiment",
        "Help turning a vague idea into something testable",
      ]}
    />
  );
}
