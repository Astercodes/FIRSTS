import type { Metadata } from "next";
import { TrainingView } from "@/components/facilitator/TrainingView";

export const metadata: Metadata = { title: "Facilitator training | FIRSTS" };

export default function FacilitatorTrainingPage() {
  return <TrainingView />;
}
