export type Profile = {
  name: string;
  headline: string;
  status: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  photo: string | null;
  /** Only collected if the student opts in to the "Others like you" peer comparison. */
  major?: string;
  gradYear?: string;
  peerCompareOptIn?: boolean;
  /** Whether the student has chosen to make their portfolio viewable via a public link. */
  portfolioPublic?: boolean;
  /**
   * Set at signup: "partner" for a verified school-affiliated join, "independent"
   * for a self-serve, no-institution account. Unset (e.g. a profile that
   * predates this field) defaults to "independent" throughout the app, since
   * that's the account type with no cohort or advisor context to fall back on.
   */
  accountType?: "independent" | "partner";
  /** ISO date (YYYY-MM-DD), only collected when status is "Recent grad". Powers the days-since-graduation counter. */
  gradDate?: string;
};

const KEY = "firsts:profile";
const EVENT_NAME = "firsts:profile-change";

export function loadProfile(): Partial<Profile> | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Partial<Profile>) : null;
  } catch {
    return null;
  }
}

export function saveProfile(profile: Partial<Profile>) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(profile));
    window.dispatchEvent(new Event(EVENT_NAME));
  } catch {
    // localStorage unavailable (private browsing, quota), profile just won't persist
  }
}

export { EVENT_NAME as PROFILE_CHANGE_EVENT };

/** Downscale + square-crop an uploaded image so it stores compactly and fills an avatar circle cleanly. */
export function processPhoto(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error);
    reader.onload = () => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        const size = 480;
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");
        if (!ctx) return reject(new Error("no canvas context"));
        const side = Math.min(img.width, img.height);
        const sx = (img.width - side) / 2;
        const sy = (img.height - side) / 2;
        ctx.drawImage(img, sx, sy, side, side, 0, 0, size, size);
        resolve(canvas.toDataURL("image/jpeg", 0.88));
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  });
}
