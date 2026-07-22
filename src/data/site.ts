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
    image: "/images/service-individual.webp",
    imageAlt: "Hands plating roasted carrots and greens on a cream ceramic plate",
    heroImage: "/images/hero-individual.webp",
    heroImageAlt: "A balanced dinner plate on a warm wooden table, hands holding fork and knife in golden light",
    heroLine: "One clinician, unhurried visits, and a plan shaped to your actual week.",
    empathy: [
      "You've tried the app, the plan, and the printout.",
      "The conversation with your doctor keeps ending at “eat better.”",
      "Surgery is scheduled — or behind you — and food feels complicated.",
      "You want a plan that survives a Tuesday.",
    ],
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
    image: "/images/service-child.webp",
    imageAlt: "A parent's and child's hands rolling dough together at a flour-dusted counter",
    heroImage: "/images/hero-child.webp",
    heroImageAlt: "A parent and child washing colorful vegetables together at a farmhouse kitchen sink",
    heroLine: "Family-centered nutrition care, with parents in the room at every step.",
    stepsOverride: {
      2: "Your first telehealth visit happens with your kid at the table — booked through Katie's secure portal.",
    },
    empathy: [
      "Dinner has become a negotiation.",
      "The growth-chart conversation left more questions than answers.",
      "Snacks run the house.",
      "There's a teenager involved who won't eat what you cook.",
    ],
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
    image: "/images/service-corporate.webp",
    imageAlt: "A healthy catering spread of grain bowls, fruit, and a grazing board on a bright office table",
    heroImage: "/images/hero-corporate.webp",
    heroImageAlt: "A sunlit office lounge with a healthy breakfast spread set for a wellness session",
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

/** What visits look like — structure only; durations/cadence await Katie. */
export const SESSIONS = [
  {
    title: "The first visit",
    body: "A full picture — history, patterns, what's been tried, and what actually matters to you. The plan gets built with you, not handed to you.",
  },
  {
    title: "Follow-ups",
    body: "Adjustments, not judgment. Progress gets reviewed, the plan bends to your real week, and the cadence is set clinically — not by a package.",
  },
  {
    title: "Between visits",
    body: "Notes, plans, and next steps live in Katie's secure client portal — one place, nothing lost to a printout.",
  },
] as const;

/** Corporate formats — categories from the engagement scope. */
export const CORPORATE_FORMATS = [
  {
    title: "Lunch-and-Learns",
    tag: "Single Session",
    body: "A focused, practical virtual session for your team on a real-world nutrition topic — built for a lunch hour, with time for questions.",
  },
  {
    title: "Wellness Programming",
    tag: "Series",
    body: "Multi-session programming across weeks — a through-line your team can actually build habits around, not a one-off talk.",
  },
  {
    title: "Group Contracts",
    tag: "Ongoing",
    body: "A standing arrangement scoped to your organization — formats, group size, and cadence set with you in a scoping call.",
  },
] as const;

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
    a: "Yes — child and teen nutrition is one of Katie's core services, with parents in the room, growth and appetite questions answered plainly, and sessions paced to the child, not a script. Pediatrician referrals are welcome.",
    inSchema: true,
  },
  {
    q: "How do I refer a patient?",
    a: "Send your patient's name and contact information through the contact form. Katie verifies coverage, handles intake in her secure client portal, and takes it from there.",
    inSchema: true,
  },
  {
    q: "What happens after I send a referral?",
    a: "Katie verifies the patient's coverage, reaches out to them directly to talk through what they're looking for, and gets the first telehealth visit scheduled in her secure client portal — so your office gets the loop closed instead of a black hole.",
    inSchema: true,
  },
] as const;

export const DISCLAIMER =
  "Content on this site is for general information and is not medical advice or a substitute for care from your physician.";
