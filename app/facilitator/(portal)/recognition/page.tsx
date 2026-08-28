import type { Metadata } from "next";
import { RecognitionView } from "@/components/facilitator/RecognitionView";

export const metadata: Metadata = { title: "Recognition & perks | FIRSTS" };

export default function FacilitatorRecognitionPage() {
  return <RecognitionView />;
}
