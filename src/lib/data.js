// ── Portfolio content ──────────────────────────────────────────────────────

export const PERSON = {
  name: "Sayed Hasan Dipto",
  handle: "SHD",
  title: "MERN Stack Developer",
  email: "sayedhasandipto@gmail.com",
  location: "Dhaka, BD",
  timezone: "GMT+6",
  timezoneTZ: "Asia/Dhaka",
  githubUsername: "sayedhasandipto",
  github: "https://github.com/sayedhasandipto",
  linkedin: "https://linkedin.com/in/sayedhasandipto",
  twitter: "https://twitter.com/sayedhasandipto",
  portrait: "https://i.ibb.co.com/ymYj65ML/passport-size.png",
  resumeUrl: "https://drive.google.com/file/d/1W0PXqwoJG9OPPm2baDyjUR4Flt2TrrW_/view?usp=sharing",
  available: true,
  yearsExp: "03+",
  projects: "15+",
  delivery: "100%",
};

export const NAV_LINKS = [
  { href: "#about", label: "About", id: "about" },
  { href: "#stack", label: "Stack", id: "stack" },
  { href: "#work", label: "Work", id: "work" },
  { href: "#testimonials", label: "Proof", id: "testimonials" },
  { href: "#process", label: "Process", id: "process" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export const STACK = [
  {
    num: "01 / DATA",
    icon: "database",
    name: "MongoDB",
    desc: "Document modeling, Mongoose schemas, aggregations, indexing and Atlas workflows.",
    proficiency: 80,
    years: "3 YRS",
    layer: "DATA LAYER",
    accent: true,
  },
  {
    num: "02 / API",
    icon: "server",
    name: "Express.js",
    desc: "REST APIs, middleware, validation, authentication, authorization and error handling.",
    proficiency: 85,
    years: "3 YRS",
    layer: "SERVICE LAYER",
    accent: false,
  },
  {
    num: "03 / UI",
    icon: "layout-grid",
    name: "React",
    desc: "Reusable components, hooks, state management, responsive layouts and modern UI systems.",
    proficiency: 90,
    years: "4 YRS",
    layer: "CLIENT LAYER",
    accent: false,
  },
  {
    num: "04 / RUNTIME",
    icon: "cpu",
    name: "Node.js",
    desc: "Asynchronous server logic, integrations, real-time features and npm ecosystem tooling.",
    proficiency: 82,
    years: "3 YRS",
    layer: "EXECUTION LAYER",
    accent: true,
  },
];

export const TOOLKIT = [
  "JavaScript",
  "TypeScript",
  "Next.js",
  "Tailwind",
  "Redux Toolkit",
  "Firebase",
  "REST APIs",
  "Git / GitHub",
  "Vercel",
];



export const TESTIMONIALS = [
  {
    initials: "AT",
    name: "Alex Turner",
    role: "CEO · Nexus Labs",
    color: "bg-ink",
    quote:
      "Delivered our analytics dashboard two weeks early, with cleaner code than our in-house team. Communication was clear, and every edge case was handled.",
  },
  {
    initials: "MR",
    name: "Maria Rivas",
    role: "CTO · Pulseworks",
    color: "bg-accent",
    quote:
      "Reworked our entire Node.js backend into clean microservices. Queries went from 800ms to under 90ms. Rare to find a dev this careful about data.",
  },
  {
    initials: "SK",
    name: "Samir Khan",
    role: "Founder · Omni Systems",
    color: "bg-ink",
    quote:
      "One of the few engineers who thinks about UX, API contracts, and deployment in the same breath. Would hire again without hesitation.",
  },
];

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discover & model",
    desc: "Clarify the product flow, define entities, API boundaries and technical constraints.",
    phase: "01 / 04",
  },
  {
    num: "02",
    title: "Engineer the core",
    desc: "Build reusable UI, server routes, validation, authentication and database logic.",
    phase: "02 / 04",
  },
  {
    num: "03",
    title: "Test & harden",
    desc: "Check edge cases, responsiveness, errors, performance and deployment configuration.",
    phase: "03 / 04",
  },
  {
    num: "04",
    title: "Deploy & iterate",
    desc: "Ship the product, observe real usage and improve the system based on evidence.",
    phase: "04 / 04",
  },
];

export const NOW = {
  learning: "Next.js 15 · Drizzle ORM",
  building: "Realtime analytics dashboard",
  reading: "Clean Architecture — R.C. Martin",
};

export const ABOUT_CARDS = [
  {
    num: "01",
    title: "Product thinking",
    desc: "Interfaces and features are designed around actual user flows.",
  },
  {
    num: "02",
    title: "Backend discipline",
    desc: "Clear routes, validation, authentication and data boundaries.",
  },
  {
    num: "03",
    title: "Performance",
    desc: "Fast UI, sensible payloads and production-minded deployment.",
  },
];
