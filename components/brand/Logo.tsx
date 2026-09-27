/** A stepped F: three connected firsts, each opening the next level. */
export function Logo({ className = "", markOnly = false }: { className?: string; markOnly?: boolean }) {
  return (
    <span className={`firsts-logo ${className}`} role="img" aria-label="FIRSTS">
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" focusable="false">
        <path d="M6 42V22H16V42H6Z" fill="var(--neon-pink, #ff1199)" />
        <path d="M6 22L16 12H34V22H6Z" fill="var(--sunshine-orange, #ff8a00)" />
        <path d="M16 12L26 2H44V12H16Z" fill="var(--lime-zest, #c8ff00)" />
      </svg>
      {!markOnly && <span className="firsts-wordmark" aria-hidden="true">FIRSTS<span className="firsts-wordmark-dot">.</span></span>}
    </span>
  );
}
