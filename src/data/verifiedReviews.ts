import type { ReviewPlatformId } from "./reviewPlatforms";

export type VerifiedReview = {
  id: string;
  platformId: ReviewPlatformId;

  /** URL of the ORIGINAL review on the platform (highest trust). */
  sourceUrl: string;

  /**
   * Optional screenshot proving the review (recommended).
   * Path in /public, e.g. "/reviews/khamsat/khamsat-01.png"
   */
  screenshotSrc?: string;

  /**
   * Optional reviewer avatar (cropped).
   * Path in /public, e.g. "/reviews/avatars/hossam.png"
   */
  avatarSrc?: string;

  reviewerName: string;
  reviewerTitle?: string;
  rating?: number; // 1..5
  dateText?: string; // "Jan 2026" etc.

  /**
   * A SHORT excerpt only (optional).
   * Keep it short; the proof should be the platform link / screenshot.
   */
  excerpt?: { en?: string; ar?: string };
};

/**
 * Seeded with your currently available Khamsat reviews.
 *
 * IMPORTANT:
 * - Please replace `sourceUrl` with the *share* URL for each review if you can (زر "شارك التقييم"),
 *   because it links directly to that review.
 * - Put screenshots into /public/reviews/khamsat/ with the same filenames used below.
 */
export const verifiedReviews: VerifiedReview[] = [
  {
    id: "khamsat-01",
    platformId: "khamsat",
    // TODO: replace with the exact share URL for this review (if available)
    sourceUrl: "https://khamsat.com/user/mohamed_hussainy/reviews/1114962",
    reviewerName: "حسام ص",
    rating: 5,
    dateText: "منذ 14 يوم",
    screenshotSrc: "/reviews/khamsat/khamsat-01.png",
    // Optional: crop the reviewer avatar and save it here
    // avatarSrc: "/reviews/avatars/hossam-s.png",
    excerpt: {
      ar: "تحسين موقعي بشكل ملحوظ… أنصح به بشدة.",
      en: "Noticeable improvement and great communication. Highly recommended.",
    },
  },
  {
    id: "khamsat-02",
    platformId: "khamsat",
    // TODO: replace with the exact share URL for this review (if available)
    sourceUrl: "https://khamsat.com/user/mohamed_hussainy/reviews/1115268",
    reviewerName: "حسام ص",
    rating: 5,
    dateText: "منذ 13 يوم",
    screenshotSrc: "/reviews/khamsat/khamsat-02.png",
    excerpt: {
      ar: "الخدمة ممتازة… الالتزام بالوقت والتواصل رائع.",
      en: "Excellent service, on-time delivery, smooth communication.",
    },
  },
];
