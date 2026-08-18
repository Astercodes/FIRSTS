export function ComingSoonPanel({
  eyebrow,
  title,
  body,
  color,
}: {
  eyebrow: string;
  title: string;
  body: string;
  color: string;
}) {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center rounded-3xl border border-ink/8 bg-white px-8 py-20 text-center">
      <span
        className="mb-5 inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider"
        style={{ color, background: `color-mix(in oklab, ${color} 14%, white)` }}
      >
        {eyebrow}
      </span>
      <h1 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
        {title}
      </h1>
      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink/55">
        {body}
      </p>
    </div>
  );
}
