export function SubmitButton({
  color,
  children,
  disabled,
}: {
  color: string;
  children: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="w-full rounded-2xl px-6 py-3.5 text-sm font-semibold text-ink transition-transform duration-300 hover:scale-[1.015] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
      style={{ background: disabled ? "rgba(255,255,255,0.2)" : color }}
    >
      {children}
    </button>
  );
}
