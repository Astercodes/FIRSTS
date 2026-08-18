"use client";

import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

export const TextField = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & { label: string; hint?: string }>(
  function TextField({ label, hint, id, ...props }, ref) {
    return (
      <label htmlFor={id} className="block">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-paper/50">
          {label}
        </span>
        <input
          ref={ref}
          id={id}
          {...props}
          className="w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-[15px] text-paper placeholder:text-paper/35 outline-none transition-colors focus:border-white/35 focus:bg-white/[0.07]"
        />
        {hint && <span className="mt-1.5 block text-xs text-paper/45">{hint}</span>}
      </label>
    );
  }
);
