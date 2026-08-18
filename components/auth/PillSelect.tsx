"use client";

export function PillSelect({
  label,
  options,
  value,
  onChange,
  color,
}: {
  label: string;
  options: string[];
  value: string | null;
  onChange: (v: string) => void;
  color: string;
}) {
  return (
    <div>
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-paper/50">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = value === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              className="rounded-full border px-3.5 py-2 text-sm font-medium transition-all duration-200"
              style={
                active
                  ? {
                      color,
                      borderColor: color,
                      background: `color-mix(in oklab, ${color} 16%, transparent)`,
                    }
                  : {
                      borderColor: "rgba(255,255,255,0.14)",
                      color: "rgba(255,250,244,0.7)",
                    }
              }
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
