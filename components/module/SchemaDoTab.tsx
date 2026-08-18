"use client";

import { useEffect, useRef, useState } from "react";
import type { WorksheetField } from "@/lib/worksheetSchemas";

type FieldValue = string | string[] | Record<string, string | number>[];

function initialState(fields: WorksheetField[]): Record<string, FieldValue> {
  const state: Record<string, FieldValue> = {};
  for (const f of fields) {
    if (f.type === "textarea" || f.type === "text") state[f.key] = f.seed ?? "";
    else if (f.type === "chipList") state[f.key] = f.seed;
    else if (f.type === "table") state[f.key] = f.seedRows;
    else if (f.type === "checklist") state[f.key] = f.seedChecked ?? [];
    else if (f.type === "research") state[f.key] = f.synthesisSeed ?? "";
  }
  return state;
}

export function SchemaDoTab({ fields, color }: { fields: WorksheetField[]; color: string }) {
  const [state, setState] = useState(() => initialState(fields));
  const [saveState, setSaveState] = useState<"saving" | "saved">("saved");
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setSaveState("saving");
    const t = setTimeout(() => setSaveState("saved"), 700);
    return () => clearTimeout(t);
  }, [state]);

  function set(key: string, value: FieldValue) {
    setState((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-end">
        <span className="flex items-center gap-1.5 text-xs font-medium text-ink/40">
          <span
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              saveState === "saving" ? "bg-[var(--tropical-mango)]" : "bg-[var(--citrus-lime)]"
            }`}
          />
          {saveState === "saving" ? "Saving…" : "Saved"}
        </span>
      </div>

      {fields.map((field, i) => (
        <section key={field.key} className="rounded-3xl border border-ink/8 bg-white p-7 sm:p-8">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
            Step {i + 1} · {field.label}
          </p>
          {"hint" in field && field.hint && (
            <p className="mb-4 text-sm text-ink/55">{field.hint}</p>
          )}
          <div className={"hint" in field && field.hint ? "" : "mt-4"}>
            <FieldRenderer field={field} value={state[field.key]} onChange={(v) => set(field.key, v)} color={color} />
          </div>
        </section>
      ))}
    </div>
  );
}

function FieldRenderer({
  field,
  value,
  onChange,
  color,
}: {
  field: WorksheetField;
  value: FieldValue;
  onChange: (v: FieldValue) => void;
  color: string;
}) {
  if (field.type === "text") {
    return (
      <input
        value={value as string}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25"
      />
    );
  }

  if (field.type === "textarea") {
    return (
      <textarea
        value={value as string}
        onChange={(e) => onChange(e.target.value)}
        rows={field.rows ?? 3}
        className="w-full resize-none rounded-2xl border border-ink/10 bg-paper-dim px-4 py-3 text-sm text-ink outline-none focus:border-ink/25"
      />
    );
  }

  if (field.type === "chipList") {
    return <ChipListInput value={value as string[]} onChange={onChange} color={color} />;
  }

  if (field.type === "table") {
    return <TableInput columns={field.columns} value={value as Record<string, string | number>[]} onChange={onChange} color={color} />;
  }

  if (field.type === "checklist") {
    return <ChecklistInput items={field.items} value={value as string[]} onChange={onChange} color={color} />;
  }

  if (field.type === "research") {
    return (
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          {field.sources.map((s) => (
            <div key={s.title} className="rounded-2xl border border-ink/10 bg-paper-dim p-4">
              <p className="text-xs font-semibold text-ink/40">{s.domain}</p>
              <p className="mt-1 text-sm font-semibold text-ink">{s.title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-ink/55">{s.snippet}</p>
            </div>
          ))}
        </div>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/45">
            Your synthesis
          </span>
          <textarea
            value={value as string}
            onChange={(e) => onChange(e.target.value)}
            rows={3}
            className="w-full resize-none rounded-2xl border border-ink/10 bg-paper-dim px-4 py-3 text-sm text-ink outline-none focus:border-ink/25"
          />
        </label>
      </div>
    );
  }

  return null;
}

function ChipListInput({
  value,
  onChange,
  color,
}: {
  value: string[];
  onChange: (v: string[]) => void;
  color: string;
}) {
  const [draft, setDraft] = useState("");

  function add() {
    const v = draft.trim();
    if (!v || value.includes(v)) return;
    onChange([...value, v]);
    setDraft("");
  }

  return (
    <div>
      <div className="mb-3 flex flex-wrap gap-2">
        {value.map((v) => (
          <span
            key={v}
            className="flex items-center gap-2 rounded-full border border-ink/10 bg-paper-dim px-3.5 py-1.5 text-sm font-medium text-ink/75"
          >
            {v}
            <button onClick={() => onChange(value.filter((x) => x !== v))} className="text-ink/30 hover:text-ink/70">
              ×
            </button>
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), add())}
          placeholder="Add…"
          className="flex-1 rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25"
        />
        <button onClick={add} className="rounded-2xl px-5 py-2.5 text-sm font-semibold text-white" style={{ background: color }}>
          Add
        </button>
      </div>
    </div>
  );
}

function TableInput({
  columns,
  value,
  onChange,
  color,
}: {
  columns: { key: string; label: string; kind: "text" | "rating" }[];
  value: Record<string, string | number>[];
  onChange: (v: Record<string, string | number>[]) => void;
  color: string;
}) {
  function updateCell(rowIndex: number, colKey: string, cellValue: string | number) {
    const next = value.map((row, i) => (i === rowIndex ? { ...row, [colKey]: cellValue } : row));
    onChange(next);
  }

  function addRow() {
    const blank: Record<string, string | number> = {};
    for (const c of columns) blank[c.key] = c.kind === "rating" ? 0 : "";
    onChange([...value, blank]);
  }

  function removeRow(i: number) {
    onChange(value.filter((_, idx) => idx !== i));
  }

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[480px] space-y-2">
        {value.map((row, i) => (
          <div key={i} className="flex items-center gap-2 rounded-2xl bg-paper-dim p-2.5">
            {columns.map((c) => (
              <div key={c.key} className="flex-1">
                {c.kind === "rating" ? (
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button
                        key={n}
                        onClick={() => updateCell(i, c.key, n)}
                        className="h-5 w-5 rounded-full border-2 transition-colors"
                        style={{
                          borderColor: color,
                          background: Number(row[c.key]) >= n ? color : "transparent",
                        }}
                        aria-label={`${c.label}: ${n}`}
                      />
                    ))}
                  </div>
                ) : (
                  <input
                    value={row[c.key] ?? ""}
                    onChange={(e) => updateCell(i, c.key, e.target.value)}
                    placeholder={c.label}
                    className="w-full rounded-xl border border-ink/10 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-ink/25"
                  />
                )}
              </div>
            ))}
            <button onClick={() => removeRow(i)} className="shrink-0 px-1 text-ink/30 hover:text-ink/70">
              ×
            </button>
          </div>
        ))}
        <div className="flex gap-4 px-1 text-xs font-medium text-ink/35">
          {columns.map((c) => (
            <span key={c.key} className="flex-1">
              {c.label}
            </span>
          ))}
        </div>
        <button
          onClick={addRow}
          className="rounded-xl border border-dashed border-ink/15 px-4 py-2 text-xs font-semibold text-ink/50 transition-colors hover:border-ink/30 hover:text-ink/70"
        >
          + Add row
        </button>
      </div>
    </div>
  );
}

function ChecklistInput({
  items,
  value,
  onChange,
  color,
}: {
  items: string[];
  value: string[];
  onChange: (v: string[]) => void;
  color: string;
}) {
  function toggle(item: string) {
    onChange(value.includes(item) ? value.filter((x) => x !== item) : [...value, item]);
  }

  return (
    <div className="space-y-2">
      {items.map((item) => {
        const checked = value.includes(item);
        return (
          <label
            key={item}
            className="flex cursor-pointer items-center gap-3 rounded-xl bg-paper-dim px-4 py-2.5 text-sm text-ink/75"
          >
            <input
              type="checkbox"
              checked={checked}
              onChange={() => toggle(item)}
              className="h-4 w-4 shrink-0"
              style={{ accentColor: color }}
            />
            {item}
          </label>
        );
      })}
    </div>
  );
}
