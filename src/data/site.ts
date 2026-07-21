/**
 * Single source of business truth — every page reads from here.
 * Facts trace to docs/website-studio/evidence-matrix.md; items marked
 * PENDING are awaiting Katie's confirmation and must not be invented.
 */

export const SITE = {
  name: "Monarch Nutrition Counseling",
  shortName: "Monarch",
  clinician: "Katie Sengheiser",
  credential: "RD",
  credentialLong: "Registered Dietitian",
  city: "St. Peters",
  state: "MO",
  statesLicensed: ["Missouri", "New Jersey"] as const,
  statesShort: "MO + NJ",
  url: "https://www.monarchnutritioncounseling.com", // PENDING: domain purchase in Katie's name
  phone: null as string | null, // PENDING: practice line
  email: null as string | null, // PENDING: practice email
  portalUrl: null as string | null, // PENDING: EMR decision (SimplePractice vs Healthie)
} as const;

export const NAV = [
  { label: "About Katie", href: "/about/" },
  { label: "Individual", href: "/services/individual-nutrition-counseling/" },
  { label: "Child & Teen", href: "/services/child-teen-nutrition/" },
  { label: "Corporate", href: "/services/corporate-nutrition/" },
  { label: "Blog", href: "/blog/" },
] as const;

export const SERVICES = [
  {
    slug: "individual-nutrition-counseling",
    title: "Individual Nutrition Counseling",
    audience: "For Myself",
    short:
      "One-on-one care for adults — weight management and pre- or post-bariatric nutrition, built around your actual week.",
    image: "/images/service-individual.jpg",
    imageAlt: "A woman preparing a fresh vegetarian meal at home",
    heroLine: "One clinician, unhurried visits, and a plan shaped to your actual week.",
    scope: [
      "Weight management that starts from where you are",
      "Nutrition support before and after bariatric surgery",
      "Realistic meal patterns for busy schedules",
      "Progress reviews with plan adjustments set clinically",
    ],
  },
  {
    slug: "child-teen-nutrition",
    title: "Child & Teen Nutrition",
    audience: "For My Child",
    short:
      "Family-centered care with parents in the room — growth questions, selective eating, and teenage appetites, met calmly.",
    image: "/images/service-child.jpg",
    imageAlt: "A child's hands pressing a cookie cutter into rolled dough",
    heroLine: "Family-centered nutrition care, with parents in the room at every step.",
    scope: [
      "Selective and picky eating, without mealtime battles",
      "Growth and appetite questions, answered plainly",
      "Teen nutrition that respects a teen's independence",
      "Pediatrician referrals welcomed and reported back",
    ],
  },
  {
    slug: "corporate-nutrition",
    title: "Corporate Nutrition",
    audience: "For My Workplace",
    short:
      "Employer wellness programming, lunch-and-learns, and group contracts — delivered virtually to your team.",
    image: "/images/service-corporate.jpg",
    imageAlt: "A professional smiling on a video call at her workplace",
    heroLine: "Practical nutrition programming your team will actually use.",
    scope: [
      "Virtual lunch-and-learns on real-world nutrition topics",
      "Employer wellness programming, scoped to your team",
      "Group contracts with straightforward terms",
      "Delivered by a Registered Dietitian, not a content library",
    ],
  },
] as const;

export type Service = (typeof SERVICES)[number];

export const STEPS = [
  {
    title: "Reach out",
    body: "Send your name, email, and phone — or have your provider's office send a referral the same way.",
  },
  {
    title: "Coverage, verified",
    body: "Katie checks your benefits and gives you clear answers about cost before anything is scheduled.",
  },
  {
    title: "Meet Katie",
    body: "Your first telehealth visit is booked through her secure client portal — from your own kitchen table.",
  },
] as const;

/** inSchema: only confirmed-answerable items ship in FAQPage JSON-LD. */
export const FAQ = [
  {
    q: "Do you accept insurance?",
    a: "Yes — Monarch Nutrition Counseling bills participating insurance plans directly, and your coverage is verified before your first appointment. Self-pay packages are available for out-of-network plans. The complete plan list will be published here at launch.",
    inSchema: false, // pending carrier list
  },
  {
    q: "Which states can you see clients in?",
    a: "Katie is licensed in Missouri and New Jersey, and can see residents of either state by telehealth.",
    inSchema: true,
  },
  {
    q: "Are appointments in person or virtual?",
    a: "All visits are virtual. You'll meet with Katie by secure video from home — no office, no waiting room, no commute.",
    inSchema: true,
  },
  {
    q: "Do you work with children and teens?",
    a: "Yes — child and teen nutrition is one of Katie's core services, with parents in the room and pediatrician referrals welcome.",
    inSchema: true,
  },
  {
    q: "How do I refer a patient?",
    a: "Send your patient's name and contact information through the contact form. Katie verifies coverage, handles intake in her secure client portal, and takes it from there.",
    inSchema: true,
  },
] as const;

export const DISCLAIMER =
  "Content on this site is for general information and is not medical advice or a substitute for care from your physician.";
