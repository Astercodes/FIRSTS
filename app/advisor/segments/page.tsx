import type { Metadata } from "next";
import { SegmentsView } from "@/components/advisor/SegmentsView";

export const metadata: Metadata = { title: "Segmentation | FIRSTS" };

export default function SegmentsPage() {
  return <SegmentsView />;
}
