import Link from "next/link";
import type { LearnContent } from "@/lib/moduleContent";
import { FIRSTS, CATEGORY_META } from "@/lib/dashboardData";

export function LearnTab({ content, color }: { content: LearnContent; color: string }) {
  const tieModules = FIRSTS.filter((m) => content.milestoneTies.includes(m.id));

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-ink/8 bg-white p-7 sm:p-8">
        <p className="text-[17px] leading-relaxed text-ink/75">{content.definition}</p>
      </section>

      <section
        className="rounded-3xl p-7 sm:p-8"
        style={{ background: `color-mix(in oklab, ${color} 10%, white)` }}
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em]" style={{ color }}>
          Why it matters
        </p>
        <p className="text-[15px] leading-relaxed text-ink/75">{content.whyItMatters}</p>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {content.whenWhoWhere.map((card) => (
          <div key={card.label} className="rounded-2xl border border-ink/8 bg-white p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink/40">
              {card.label}
            </p>
            <p className="text-sm leading-relaxed text-ink/70">{card.body}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-ink/8 bg-white p-7 sm:p-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          How it works
        </p>
        <ol className="space-y-3">
          {content.howItWorks.map((step, i) => (
            <li key={step} className="flex gap-4">
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ background: color }}
              >
                {i + 1}
              </span>
              <span className="text-sm leading-relaxed text-ink/70">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-3xl border border-ink/8 bg-white p-7 sm:p-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Tools &amp; resources
        </p>
        <div className="flex flex-wrap gap-2">
          {content.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-ink/10 bg-paper-dim px-3.5 py-1.5 text-sm font-medium text-ink/70"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      <section
        className="rounded-3xl p-7 text-paper sm:p-8"
        style={{ background: "var(--ink)" }}
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-paper/50">
          Scenario · {content.scenario.title}
        </p>
        <p className="text-[15px] leading-relaxed text-paper/80">{content.scenario.body}</p>
      </section>

      <section className="rounded-3xl border border-ink/8 bg-white p-7 sm:p-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Common pitfalls
        </p>
        <ul className="space-y-2.5">
          {content.pitfalls.map((p) => (
            <li key={p} className="flex items-start gap-3 text-sm leading-relaxed text-ink/70">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/25" />
              {p}
            </li>
          ))}
        </ul>
      </section>

      <section
        className="rounded-3xl border p-7 sm:p-8"
        style={{ borderColor: `color-mix(in oklab, ${color} 35%, transparent)`, background: `color-mix(in oklab, ${color} 8%, white)` }}
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em]" style={{ color }}>
          Success signal
        </p>
        <p className="text-[15px] leading-relaxed text-ink/75">{content.successSignal}</p>
      </section>

      {tieModules.length > 0 && (
        <section className="rounded-3xl border border-ink/8 bg-white p-7 sm:p-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
            Milestone tie-in
          </p>
          <div className="flex flex-wrap gap-3">
            {tieModules.map((m) => (
              <Link
                key={m.id}
                href={`/dashboard/stage/${m.id}`}
                className="flex items-center gap-2 rounded-2xl border border-ink/10 bg-paper-dim px-4 py-3 text-sm font-medium text-ink/75 transition-colors hover:border-ink/25"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: CATEGORY_META[m.category].color }}
                />
                First {String(m.id).padStart(2, "0")} · {m.title}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
