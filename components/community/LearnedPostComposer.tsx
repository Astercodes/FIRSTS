"use client";

import { useState } from "react";
import { useMyCommunityProfile } from "@/lib/myCommunityProfile";
import { createLearnedPost } from "@/lib/learnedPostStore";

export function LearnedPostComposer({
  moduleId,
  moduleTitle,
  color,
  onDone,
  onSkip,
}: {
  moduleId: number;
  moduleTitle: string;
  color: string;
  onDone: () => void;
  onSkip: () => void;
}) {
  const myProfile = useMyCommunityProfile();
  const [whatYouLearned, setWhatYouLearned] = useState("");
  const [whatYouDid, setWhatYouDid] = useState("");
  const [advice, setAdvice] = useState("");

  const canPost = whatYouLearned.trim().length > 0;

  function handlePost() {
    if (!canPost) return;
    createLearnedPost({
      authorHandle: myProfile.handle,
      authorName: myProfile.name,
      authorSchool: myProfile.school,
      moduleId,
      moduleTitle,
      whatYouLearned: whatYouLearned.trim(),
      whatYouDid: whatYouDid.trim(),
      advice: advice.trim(),
    });
    onDone();
  }

  return (
    <div className="rounded-2xl border border-ink/8 bg-white p-5">
      <p className="text-sm font-semibold text-ink/85">
        You just completed &quot;{moduleTitle}.&quot; Want to share what you learned?
      </p>
      <p className="mt-1 text-xs text-ink/50">
        Shows up on this FIRST&apos;s own page, so someone about to start it can read real takeaways
        first.
      </p>

      <div className="mt-4 space-y-3">
        <Field
          label="What did you learn?"
          value={whatYouLearned}
          onChange={setWhatYouLearned}
          placeholder="The thing that actually clicked…"
        />
        <Field
          label="What did you actually do?"
          value={whatYouDid}
          onChange={setWhatYouDid}
          placeholder="How you worked through it, in practice…"
        />
        <Field
          label="What would you tell someone starting this?"
          value={advice}
          onChange={setAdvice}
          placeholder="One piece of advice…"
        />
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          onClick={handlePost}
          disabled={!canPost}
          className="rounded-full px-4 py-2 text-sm font-semibold text-white transition-opacity disabled:opacity-40"
          style={{ background: color }}
        >
          Share
        </button>
        <button type="button" onClick={onSkip} className="text-sm font-medium text-ink/40 hover:text-ink">
          Not now
        </button>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  return (
    <div>
      <span className="mb-1 block text-xs font-semibold text-ink/50">{label}</span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={2}
        className="w-full resize-none rounded-xl border border-ink/10 bg-paper-dim px-3.5 py-2.5 text-sm text-ink outline-none focus:border-ink/25"
      />
    </div>
  );
}
