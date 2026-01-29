export type ReviewPlatformId =
  | "khamsat"
  | "upwork"
  | "fiverr"
  | "freelancer"
  | "linkedin"
  | "facebook"
  | "google"
  | "other";

export type ReviewPlatform = {
  id: ReviewPlatformId;
  name: { en: string; ar: string };
  /** Your public profile / company page on that platform (can be empty for now). */
  profileUrl: string;
  /** Optional label shown as a badge (e.g. "Upwork", "Fiverr"). */
  badge?: string;
};

/**
 * Platforms where your reviews actually live.
 * Keep URLs pointing to the REAL platform (highest trust).
 */
export const reviewPlatforms: ReviewPlatform[] = [
  {
    id: "khamsat",
    name: { en: "Khamsat", ar: "خمسات" },
    // Your public reviews page on Khamsat
    profileUrl: "https://khamsat.com/user/mohamed_hussainy/reviews",
    badge: "Khamsat",
  },

  // Add others when you’re ready
  { id: "upwork", name: { en: "Upwork", ar: "Upwork" }, profileUrl: "", badge: "Upwork" },
  { id: "fiverr", name: { en: "Fiverr", ar: "Fiverr" }, profileUrl: "", badge: "Fiverr" },
  { id: "freelancer", name: { en: "Freelancer", ar: "Freelancer" }, profileUrl: "", badge: "Freelancer" },
  { id: "linkedin", name: { en: "LinkedIn", ar: "LinkedIn" }, profileUrl: "", badge: "LinkedIn" },
  { id: "facebook", name: { en: "Facebook", ar: "Facebook" }, profileUrl: "", badge: "Facebook" },
  { id: "google", name: { en: "Google", ar: "Google" }, profileUrl: "", badge: "Google" },
];
