export function ComingSoonPanel({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="surface-card rounded-3xl p-7">
        <span className="mb-4 inline-block rounded-full bg-paper-dim px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ink/50">
          Coming soon
        </span>
        <h1 className="font-display text-xl font-semibold text-ink">{title}</h1>
        <p className="mt-2 text-sm leading-relaxed text-ink/60">{description}</p>

        <div className="mt-6 space-y-2 border-t border-ink/8 pt-6">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-ink/40">
            What will go here
          </p>
          {items.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl border border-ink/8 px-4 py-3">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ink/20" />
              <span className="text-sm text-ink/70">{item}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-ink/40">
          This section is scaffolded and ready, real content lands here once
          the FIRSTS Business curriculum documents are in.
        </p>
      </div>
    </div>
  );
}
