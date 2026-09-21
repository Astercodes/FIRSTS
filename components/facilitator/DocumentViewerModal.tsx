"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { KitDocument } from "@/lib/facilitatorResourceStore";

const ACCENT = "var(--fuchsia-blast)";

function extensionOf(href: string): string {
  const clean = href.split(/[?#]/)[0];
  const dot = clean.lastIndexOf(".");
  return dot === -1 ? "" : clean.slice(dot + 1).toLowerCase();
}

export function DocumentViewerModal({
  document: doc,
  onClose,
}: {
  document: KitDocument | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!doc) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    const prevOverflow = window.document.body.style.overflow;
    window.document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      window.document.body.style.overflow = prevOverflow;
    };
  }, [doc, onClose]);

  if (typeof window === "undefined") return null;

  const ext = doc ? extensionOf(doc.href) : "";
  const canPreview = ext === "pdf";

  return createPortal(
    <AnimatePresence>
      {doc && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm sm:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="surface-card flex h-full w-full max-w-4xl flex-col overflow-hidden rounded-3xl"
          >
            <div className="flex items-center justify-between gap-4 border-b border-ink/8 px-6 py-4">
              <div className="min-w-0">
                <p className="truncate font-display text-sm font-semibold text-ink">{doc.title}</p>
                <p className="truncate text-xs text-ink/45">{doc.description}</p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={doc.href}
                  download
                  className="rounded-full border border-ink/10 px-3.5 py-1.5 text-xs font-semibold text-ink/65 transition-colors hover:border-ink/25 hover:bg-paper-dim"
                >
                  Download
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close document viewer"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-ink/50 transition-colors hover:bg-paper-dim hover:text-ink"
                >
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} className="h-4 w-4">
                    <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="min-h-0 flex-1 bg-paper-dim">
              {canPreview ? (
                <iframe
                  src={doc.href}
                  title={doc.title}
                  className="h-full w-full border-0"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-4 px-8 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-ink/30 shadow-sm">
                    <FileIcon className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-ink">
                      Preview isn&apos;t available for this file type yet
                    </p>
                    <p className="mt-1 max-w-xs text-xs text-ink/50">
                      {ext ? `.${ext} files` : "This file"} can&apos;t be shown in-browser. Open it
                      in a new tab or download it instead.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
                      style={{ background: ACCENT }}
                    >
                      Open in new tab
                    </a>
                    <a
                      href={doc.href}
                      download
                      className="rounded-full border border-ink/10 px-4 py-2 text-xs font-semibold text-ink/65 transition-colors hover:border-ink/25 hover:bg-white"
                    >
                      Download
                    </a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    window.document.body,
  );
}

function FileIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} className={className}>
      <path
        d="M7 3.5h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path d="M14 3.5v4h4" stroke="currentColor" strokeLinejoin="round" />
    </svg>
  );
}
