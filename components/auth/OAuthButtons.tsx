"use client";

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5">
      <path
        fill="#EA4335"
        d="M12 10.2v3.9h5.5c-.24 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.2s2.7-6.2 6-6.2c1.9 0 3.1.8 3.9 1.5l2.7-2.6C16.9 2.9 14.7 2 12 2 6.9 2 2.7 6.2 2.7 11.2s4.2 9.2 9.3 9.2c5.4 0 9-3.8 9-9.1 0-.6-.1-1.1-.2-1.6H12Z"
      />
    </svg>
  );
}

function AppleMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor">
      <path d="M16.4 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.8-3.5.8-.7 0-1.9-.8-3.1-.8-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.6.8 1.1 1.7 2.4 3 2.4 1.2 0 1.6-.8 3.1-.8s1.9.8 3.1.7c1.3 0 2.1-1.1 2.9-2.3.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.5-1-2.6-3.9V12.7ZM14 5.4c.6-.8 1.1-1.9.9-3-1 0-2.1.7-2.8 1.5-.6.7-1.1 1.8-.9 2.9 1.1.1 2.2-.6 2.8-1.4Z" />
    </svg>
  );
}

function LinkedInMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="#0A66C2">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.25a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20h-3.37v-5.86c0-1.4-.03-3.19-1.94-3.19-1.95 0-2.25 1.52-2.25 3.09V20H9.51V8.5h3.24v1.57h.05c.45-.85 1.55-1.75 3.19-1.75 3.41 0 4.04 2.25 4.04 5.17V20Z" />
    </svg>
  );
}

const PROVIDERS = [
  { name: "Google", icon: GoogleMark },
  { name: "Apple", icon: AppleMark },
  { name: "LinkedIn", icon: LinkedInMark },
];

export function OAuthButtons({ note }: { note?: string }) {
  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        {PROVIDERS.map(({ name, icon: Icon }) => (
          <button
            key={name}
            type="button"
            title={`Continue with ${name}`}
            className="flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 py-3 transition-colors hover:border-white/25 hover:bg-white/10"
          >
            <Icon />
          </button>
        ))}
      </div>
      {note && <p className="mt-2 text-center text-xs text-paper/40">{note}</p>}
    </div>
  );
}
