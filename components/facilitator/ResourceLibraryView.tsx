"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { STAGES } from "@/lib/dashboardData";
import { useFacilitatorPortal } from "@/lib/facilitatorStore";
import { workshopKit, stageDocuments, type KitDocument } from "@/lib/facilitatorResourceStore";
import { DocumentViewerModal } from "@/components/facilitator/DocumentViewerModal";

const ACCENT = "var(--fuchsia-blast)";

function extensionOf(href: string): string {
  const clean = href.split(/[?#]/)[0];
  const dot = clean.lastIndexOf(".");
  return dot === -1 ? "" : clean.slice(dot + 1).toLowerCase();
}

export function ResourceLibraryView() {
  const { application } = useFacilitatorPortal();
  const [openId, setOpenId] = useState<string | null>(null);
  const [viewing, setViewing] = useState<KitDocument | null>(null);

  if (!application) return null;

  const stages = STAGES.filter((s) => application.stagesInterested.includes(s.id));

  if (stages.length === 0) {
    return (
      <div className="surface-card mx-auto max-w-2xl rounded-3xl p-7 text-center">
        <p className="text-sm text-ink/50">
          Kits unlock for the stages you applied to facilitate. Nothing here yet.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-4">
      {stages.map((stage, i) => {
        const kit = workshopKit(stage.id);
        const documents = stageDocuments(stage.id);
        const open = openId === stage.id;
        return (
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="surface-card surface-card-interactive overflow-hidden rounded-3xl"
          >
            <button
              type="button"
              onClick={() => setOpenId(open ? null : stage.id)}
              className="flex w-full items-center justify-between gap-4 px-7 py-5 text-left"
            >
              <div className="flex items-center gap-3.5">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-sm font-bold text-white"
                  style={{ background: "linear-gradient(135deg, var(--fuchsia-blast), var(--neon-pink))" }}
                >
                  {stage.shortLabel.charAt(0)}
                </span>
                <div>
                  <p className="font-display text-base font-semibold text-ink">
                    {stage.shortLabel} workshop kit
                  </p>
                  <p className="mt-0.5 text-xs text-ink/45">
                    v{kit.version}
                    {documents.length > 0 ? ` · ${documents.length} documents` : " · no documents yet"}
                  </p>
                </div>
              </div>
              <motion.span
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0 text-ink/40"
              >
                ▾
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-ink/8 px-7 py-6">
                    {documents.length > 0 ? (
                      <div>
                        <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-ink/40">
                          Resource kit documents
                        </p>
                        <div className="space-y-2">
                          {documents.map((doc) => {
                            const ext = extensionOf(doc.href);
                            const canPreview = ext === "pdf";
                            return (
                              <div
                                key={doc.href}
                                className="flex items-center gap-4 rounded-2xl border border-ink/10 px-4 py-3 transition-colors hover:border-ink/25 hover:bg-paper-dim"
                              >
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-paper-dim text-[10px] font-bold uppercase tracking-wide text-ink/50">
                                  {ext || "file"}
                                </span>
                                <div className="min-w-0 flex-1">
                                  <p className="truncate text-sm font-semibold text-ink">{doc.title}</p>
                                  <p className="line-clamp-2 text-xs text-ink/50">{doc.description}</p>
                                </div>
                                <div className="flex shrink-0 items-center gap-1.5">
                                  {canPreview && (
                                    <button
                                      type="button"
                                      onClick={() => setViewing(doc)}
                                      className="rounded-full px-3 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-90"
                                      style={{ background: ACCENT }}
                                    >
                                      View
                                    </button>
                                  )}
                                  <a
                                    href={doc.href}
                                    download
                                    className="rounded-full border border-ink/10 px-3 py-1.5 text-xs font-semibold text-ink/60 transition-colors hover:border-ink/25 hover:bg-white"
                                  >
                                    Download
                                  </a>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm text-ink/45">
                        This kit&apos;s documents are still being prepared, check back soon.
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}

      <DocumentViewerModal document={viewing} onClose={() => setViewing(null)} />
    </div>
  );
}
