import {
  credentialForCandidate,
  credentialSummary,
  formatRecency,
  type StageCredential,
} from "@/lib/credentialData";
import type { CandidatePortfolio } from "@/lib/sponsorData";
import type { ModuleStatus } from "@/lib/dashboardData";

const ACCENT = "var(--pink-grapefruit)";

export function CredentialDetail({ candidate }: { candidate: CandidatePortfolio }) {
  const credential = credentialForCandidate(candidate);
  const summary = credentialSummary(credential);

  return (
    <div className="rounded-3xl border border-ink/10 bg-white p-7">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
            FIRSTS credential
          </p>
          <h2 className="mt-1.5 font-display text-lg font-semibold text-ink">
            {summary.complete} of {summary.total} stages complete
          </h2>
        </div>
        {summary.mostRecent && (
          <p className="text-xs text-ink/45">
            Most recent activity {formatRecency(summary.mostRecent)}
          </p>
        )}
      </div>
      <p className="mt-2 text-xs leading-relaxed text-ink/45">
        A stage-by-stage breakdown, not just a verified checkmark, so you can see what was actually
        built, how thoroughly, and when.
      </p>

      <div className="mt-5 space-y-3">
        {credential.map((c) => (
          <StageRow key={c.stage} credential={c} />
        ))}
      </div>
    </div>
  );
}

function StageRow({ credential: c }: { credential: StageCredential }) {
  const notStarted = c.status === "not-started";
  const asModuleStatus: ModuleStatus =
    c.status === "complete" ? "complete" : c.status === "in-progress" ? "in-progress" : "locked";

  return (
    <div
      className={`rounded-2xl border border-ink/8 p-4 ${notStarted ? "bg-paper-dim/60" : "bg-paper-dim"}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2.5">
          <StatusIcon status={asModuleStatus} />
          <p className={`truncate text-sm font-semibold ${notStarted ? "text-ink/40" : "text-ink/80"}`}>
            {c.label}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          {c.depth && c.depthLabel && <DepthTicks level={c.depth} label={c.depthLabel} />}
          {!notStarted && <span className="text-xs font-semibold text-ink/50">{c.pct}%</span>}
        </div>
      </div>

      {!notStarted && (
        <>
          <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-ink/8">
            <div
              className="h-full rounded-full"
              style={{ width: `${c.pct}%`, background: ACCENT }}
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {c.categories.map((cat) => (
              <span
                key={cat.category}
                className="rounded-full border border-ink/8 bg-white px-2.5 py-1 text-[11px] text-ink/55"
              >
                {cat.label} {cat.pct}%
              </span>
            ))}
          </div>
          {c.lastActivity && (
            <p className="mt-2 text-[11px] text-ink/40">Last activity {formatRecency(c.lastActivity)}</p>
          )}
        </>
      )}
    </div>
  );
}

function StatusIcon({ status }: { status: ModuleStatus }) {
  if (status === "complete") {
    return (
      <span
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
        style={{ background: ACCENT }}
      >
        ✓
      </span>
    );
  }
  if (status === "in-progress") {
    return (
      <span
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2"
        style={{ borderColor: ACCENT }}
      >
        <span className="h-2 w-2 rounded-full" style={{ background: ACCENT }} />
      </span>
    );
  }
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink/8 text-ink/30">
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.7} className="h-3 w-3">
        <circle cx="12" cy="12" r="8" stroke="currentColor" />
      </svg>
    </span>
  );
}

function DepthTicks({ level, label }: { level: 1 | 2 | 3; label: string }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5" title={`Response depth: ${label}`}>
      <span className="flex items-end gap-[1.5px]">
        {[1, 2, 3].map((tick) => (
          <span
            key={tick}
            className="w-[3px] rounded-[1px]"
            style={{ height: 3 + tick * 2, background: tick <= level ? ACCENT : "rgba(11,4,16,0.1)" }}
          />
        ))}
      </span>
      <span className="text-[10px] font-semibold uppercase tracking-wide text-ink/40">{label}</span>
    </span>
  );
}
