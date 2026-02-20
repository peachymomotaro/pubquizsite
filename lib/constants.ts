export const SITE_NAME = "Quiz Night Packs";
export const SUPPORT_EMAIL = "support@placeholder.com";

export type Audience = "STUDENTS" | "MIXED" | "OLDER";
export type Difficulty = "EASY" | "STANDARD" | "HARD";

export const AUDIENCE_OPTIONS: { value: Audience; label: string }[] = [
  { value: "STUDENTS", label: "Students" },
  { value: "MIXED", label: "Mixed" },
  { value: "OLDER", label: "Older" }
];

export const DIFFICULTY_OPTIONS: { value: Difficulty; label: string }[] = [
  { value: "EASY", label: "Easy" },
  { value: "STANDARD", label: "Standard" },
  { value: "HARD", label: "Hard" }
];

export type PackSummary = {
  id: string;
  slug: string;
  title: string;
  description: string;
  audience: Audience;
  difficulty: Difficulty;
  pricePence: number;
  isPublished: boolean;
};

export const SAMPLE_PACKS: PackSummary[] = [
  {
    id: "pack_001",
    slug: "freshers-night-001",
    title: "Freshers Warm-Up Pack",
    description: "Fast-paced rounds for student-heavy venues and societies.",
    audience: "STUDENTS",
    difficulty: "EASY",
    pricePence: 2000,
    isPublished: true
  },
  {
    id: "pack_002",
    slug: "thursday-mix-002",
    title: "Thursday Mixed Crowd",
    description: "Balanced topics for a broad pub audience with mixed ages.",
    audience: "MIXED",
    difficulty: "STANDARD",
    pricePence: 2000,
    isPublished: true
  },
  {
    id: "pack_003",
    slug: "heritage-night-003",
    title: "Heritage Quiz Night",
    description: "Classic references and evergreen topics for older teams.",
    audience: "OLDER",
    difficulty: "STANDARD",
    pricePence: 2000,
    isPublished: true
  },
  {
    id: "pack_004",
    slug: "sports-room-hard-004",
    title: "Sports Room Challenge",
    description: "A harder all-rounder with a high-scoring picture round.",
    audience: "MIXED",
    difficulty: "HARD",
    pricePence: 2000,
    isPublished: true
  }
];

export function formatPrice(pence: number, currency = "GBP") {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency
  }).format(pence / 100);
}
