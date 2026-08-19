import type { Metadata } from "next";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { RequestDemoForm } from "@/components/landing/RequestDemoForm";

export const metadata: Metadata = { title: "Request a demo | FIRSTS" };

const INTEREST_BY_PARAM: Record<string, string> = {
  institutions: "Piloting FIRSTS for my institution",
  "career-centers": "Career center rollout",
  employers: "Employer partnership / candidate portfolios",
  "employer-sponsor": "Sponsoring a cohort, school, or department",
};

type SearchParams = Promise<{ for?: string }>;

export default async function RequestDemoPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { for: forParam } = await searchParams;
  const initialInterest = (forParam && INTEREST_BY_PARAM[forParam]) ?? "";

  return (
    <main>
      <Nav />
      <section className="relative isolate flex min-h-[45svh] w-full flex-col items-center justify-center overflow-hidden bg-mesh-dark px-6 pb-16 pt-32 text-paper">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-[-10%] h-[420px] w-[420px] animate-blob-drift rounded-full opacity-50 blur-[100px]"
          style={{ background: "var(--berry-burst)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-8%] top-[10%] h-[380px] w-[380px] animate-blob-drift-slow rounded-full opacity-40 blur-[110px]"
          style={{ background: "var(--tropical-mango)" }}
        />
        <div className="noise-layer" aria-hidden />

        <div className="relative z-10 flex max-w-xl flex-col items-center text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--lime-zest)]">
            Talk to us
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Request a demo.
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-paper/70">
            Tell us a bit about your institution, career center, or company.
            We&apos;ll get back to you within 2 business days to walk through
            what FIRSTS looks like for your students, cohort, or team.
          </p>
        </div>
      </section>

      <section className="relative bg-paper px-6 py-20">
        <div className="mx-auto max-w-xl">
          <RequestDemoForm initialInterest={initialInterest} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
