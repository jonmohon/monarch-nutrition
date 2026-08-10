/**
 * Single source of business truth — every page reads from here.
 * Facts trace to docs/website-studio/evidence-matrix.md; items marked
 * PENDING are awaiting Katie's confirmation and must not be invented.
 *
 * Voice: the site speaks in Katie's first person ("I verify your benefits"),
 * not about her in the third person. Her name still appears where it is an
 * identity or a label — nav items, the header CTA, credential lines, page
 * metadata — but any sentence describing what she does says "I".
 */

export const SITE = {
  name: "Monarch Nutrition Counseling",
  shortName: "Monarch",
  /** Logo lockup only — set in caps at the source so it is never a CSS accident. */
  wordmark: "MONARCH",
  clinician: "Katie Sprock",
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

/**
 * Scheduling and coverage promises — two of the practice's strongest selling
 * points, so they are stated once here and reused rather than retyped.
 *
 * Deliberately no specific hours: the claim is that appointment times are
 * convenient, not that Katie works a published set of them. Do not add
 * "evenings" or "weekends" here without confirming it with her first.
 */
export const SCHEDULING = {
  short: "Appointment times that fit a real schedule",
  long: "Telehealth means appointment times that fit around work, school, and everything else — no commute, no waiting room, and no taking a half-day off to talk about your health.",
} as const;

/**
 * Coverage claim. Hedged on purpose: many plans do cover nutrition counseling
 * in full and some carry unlimited visits, but that is plan-specific and this
 * copy must not promise it. The verification sentence always travels with it.
 */
export const COVERAGE = {
  short: "Many plans cover visits in full",
  headline: "A lot of people have no idea their plan covers this.",
  long: "Most insurance plans cover nutrition counseling as preventive care — often at no cost to you, and many plans allow a generous number of visits a year, some of them unlimited. I verify your exact benefits with your plan before anything is scheduled, so you know what your visits cost before you commit to one.",
} as const;

export const NAV = [
  { label: "About Katie", href: "/about/" },
  { label: "Individual", href: "/services/individual-nutrition-counseling/" },
  { label: "Child & Teen", href: "/services/child-teen-nutrition/" },
  { label: "Corporate", href: "/services/corporate-nutrition/" },
  { label: "Blog", href: "/blog/" },
] as const;

/**
 * The practice's About copy, client-supplied and used verbatim on the home
 * page. It is the one block written about "your dietitian" rather than in
 * first person — that is Katie's wording, not a miss.
 */
export const ABOUT_PRACTICE = {
  lead: "Nutrition is more than knowing what to eat.",
  body: "Your dietitian will consider your unique needs, emotions, and goals to help you understand the “why” behind your choices and give you the confidence to nourish your body. Whether you’re here to navigate a new diagnosis, optimize nutrition for athletic performance, improve gut health, heal your relationship with food, or work toward sustainable weight goals, nutrition counseling provides the support you need to start your transformation.",
} as const;

export const SERVICES = [
  {
    slug: "individual-nutrition-counseling",
    title: "Individual Nutrition Counseling",
    audience: "For Myself",
    short:
      "One-on-one care for adults — abnormal labs and chronic conditions, gut health, performance, and sustainable weight goals, built around your actual week.",
    image: "/images/service-individual.webp",
    imageAlt: "Hands plating roasted carrots and greens on a cream ceramic plate",
    heroImage: "/images/hero-individual.webp",
    heroImageAlt:
      "A balanced dinner plate on a warm wooden table, hands holding fork and knife in golden light",
    heroHeading: "Start your transformation",
    heroEyebrow: "Individual Nutrition Counseling",
    heroLine:
      "One clinician, unhurried visits at times that fit your schedule, and a plan shaped to your actual week.",
    empathy: [
      "Your labs came back off, and “eat better” was the whole plan.",
      "You’ve tried the app, the plan, and the printout.",
      "A new diagnosis arrived with a pamphlet and no one to ask.",
      "You want a plan that survives a Tuesday.",
    ],
    scope: [
      "Weight management",
      "Abnormal labs and chronic conditions — high blood pressure, high cholesterol, prediabetes, and diabetes",
      "Nutrition before and after bariatric surgery",
      "Gut health and digestive symptoms",
      "Sports and performance nutrition",
      "Healing your relationship with food",
    ],
    /** Why physicians send patients here — mirrors how referrals actually arrive. */
    referralReasons: [
      "Abnormal labs — lipids, A1c, fasting glucose",
      "Hypertension and cardiovascular risk",
      "Prediabetes and type 2 diabetes",
      "Pre- and post-bariatric surgery nutrition",
    ],
  },
  {
    slug: "child-teen-nutrition",
    title: "Child & Teen Nutrition",
    audience: "For My Child",
    short:
      "Family-centered care with a dietitian who brings credibility, creativity, and connection to every session.",
    image: "/images/service-child.webp",
    imageAlt: "A parent's and child's hands rolling dough together at a flour-dusted counter",
    heroImage: "/images/hero-child.webp",
    heroImageAlt:
      "A parent and child washing colorful vegetables together at a farmhouse kitchen sink",
    heroHeading: "Raise a confident, intuitive eater",
    heroEyebrow: "Child & Teen Nutrition",
    heroLine:
      "Family-centered care with a dietitian who brings credibility, creativity, and connection to every session.",
    scopeLead:
      "Sessions are built around your family, not a script — parents in the room, growth and appetite questions answered plainly, and a pace set by your kid.",
    stepsOverride: {
      2: "Your first telehealth visit happens with your kid at the table — booked through my secure portal, at a time that works around school.",
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
      "Building an intuitive eater who trusts their own hunger",
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
    heroEyebrow: "Corporate Nutrition",
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
    body: "Notes, plans, and next steps live in my secure client portal — one place, nothing lost to a printout.",
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
    body: "I check your benefits and give you clear answers about cost before anything is scheduled — including how many visits your plan covers.",
  },
  {
    title: "Your first visit",
    body: "We meet by secure video at a time that fits your schedule, booked through my client portal — from your own kitchen table.",
  },
] as const;

/**
 * inSchema: only confirmed-answerable items ship in FAQPage JSON-LD.
 * Service pages pick their subset by `id` via pickFaq() — never by array
 * index, so adding a question here can't silently reshuffle another page.
 */
export const FAQ = [
  {
    id: "insurance",
    q: "Do you accept insurance?",
    a: "Yes — Monarch Nutrition Counseling bills participating insurance plans directly, and I verify your coverage before your first appointment. Self-pay packages are available for out-of-network plans. The complete plan list will be published here at launch.",
    inSchema: false, // pending carrier list
  },
  {
    id: "visit-count",
    q: "How many visits does insurance cover?",
    a: "More than most people expect. Nutrition counseling is often covered as preventive care at no cost to you, and many plans allow a generous number of visits per year — some of them unlimited. It varies by plan, so I check your exact benefits and tell you what I find before anything is scheduled.",
    inSchema: false, // plan-specific; deliberately kept out of rich results
  },
  {
    id: "appointment-times",
    q: "How hard is it to get an appointment time that works?",
    a: "Not hard. Because every visit is virtual, appointments fit around work, school, and the rest of your week — no commute, no waiting room, and no taking a half-day off. Tell me what times work for you and we'll find one.",
    inSchema: true,
  },
  {
    id: "states",
    q: "Which states can you see clients in?",
    a: "I'm licensed in Missouri and New Jersey, and can see residents of either state by telehealth.",
    inSchema: true,
  },
  {
    id: "virtual",
    q: "Are appointments in person or virtual?",
    a: "All visits are virtual. We'll meet by secure video from home — no office, no waiting room, no commute.",
    inSchema: true,
  },
  {
    id: "kids",
    q: "Do you work with children and teens?",
    a: "Yes — child and teen nutrition is one of my core services, with parents in the room, growth and appetite questions answered plainly, and sessions paced to the child, not a script. Pediatrician referrals are welcome.",
    inSchema: true,
  },
  {
    id: "refer",
    q: "How do I refer a patient?",
    a: "Send your patient's name and contact information through the contact form. I verify coverage, handle intake in my secure client portal, and take it from there.",
    inSchema: true,
  },
  {
    id: "after-referral",
    q: "What happens after I send a referral?",
    a: "I verify the patient's coverage, reach out to them directly to talk through what they're looking for, and get the first telehealth visit scheduled in my secure client portal — so your office gets the loop closed instead of a black hole.",
    inSchema: true,
  },
] as const;

export type FaqItem = (typeof FAQ)[number];

/** Select an FAQ subset by id, in the order given. Unknown ids are dropped. */
export function pickFaq(...ids: FaqItem["id"][]): FaqItem[] {
  return ids.map((id) => FAQ.find((f) => f.id === id)).filter((f) => f !== undefined);
}

export const DISCLAIMER =
  "Content on this site is for general information and is not medical advice or a substitute for care from your physician.";
