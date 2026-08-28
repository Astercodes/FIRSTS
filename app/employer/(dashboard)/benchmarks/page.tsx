import type { Metadata } from "next";
import { BenchmarksView } from "@/components/employer/BenchmarksView";

export const metadata: Metadata = { title: "School Benchmarks | FIRSTS" };

export default function EmployerBenchmarksPage() {
  return <BenchmarksView />;
}
