export function Divider({ label }: { label: string }) {
  return (
    <div className="my-6 flex items-center gap-3">
      <span className="h-px flex-1 bg-white/10" />
      <span className="text-xs font-medium uppercase tracking-wide text-paper/40">
        {label}
      </span>
      <span className="h-px flex-1 bg-white/10" />
    </div>
  );
}
