"use client";

export function Switch({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="flex items-center gap-2.5"
    >
      <span
        className="relative h-6 w-11 rounded-full transition-colors duration-300"
        style={{ background: checked ? "var(--neon-pink)" : "var(--ink)", opacity: checked ? 1 : 0.15 }}
      >
        <span
          className="absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-300"
          style={{ transform: checked ? "translateX(22px)" : "translateX(2px)" }}
        />
      </span>
      <span className="text-sm font-medium text-ink/70">{label}</span>
    </button>
  );
}
