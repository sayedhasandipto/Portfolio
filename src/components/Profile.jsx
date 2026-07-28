"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

// ── Highlight badge data ──────────────────────────────────────────────────────
const highlights = [
  {
    emoji: "🚀",
    title: "Full-Stack MERN Developer",
    desc: "Building end-to-end web apps from database to UI with the MERN ecosystem.",
    accent: "from-violet-600/20 to-brand/5",
    border: "hover:border-brand/50",
  },
  {
    emoji: "🎨",
    title: "UI/UX & Graphic Design",
    desc: "Crafting pixel-perfect, accessible interfaces that users love to interact with.",
    accent: "from-fuchsia-600/20 to-purple-600/5",
    border: "hover:border-fuchsia-500/50",
  },
  {
    emoji: "🎸",
    title: "Music & Creative Thinker",
    desc: "Guitar, ukulele, anime & art keep my creative spark alive outside the IDE.",
    accent: "from-indigo-600/20 to-blue-600/5",
    border: "hover:border-indigo-500/50",
  },
  {
    emoji: "💡",
    title: "Problem Solver & Learner",
    desc: "Turning complex real-world challenges into elegant, scalable digital solutions.",
    accent: "from-emerald-600/20 to-teal-600/5",
    border: "hover:border-emerald-500/50",
  },
];

// ── Paragraph content ─────────────────────────────────────────────────────────
const bio = [
  {
    label: "My Journey",
    text: "It all started with a simple spark — pure curiosity about how technology and the internet actually worked. That curiosity quickly evolved into a deep passion for problem-solving, which led me to specialize as a MERN Stack Developer & UI/UX Designer. I'm committed to writing clean, maintainable code and building modern web experiences that are as performant as they are beautiful.",
  },
  {
    label: "What I Love Building",
    text: "I thrive on building high-performance, full-stack web applications that pair a rock-solid backend with sleek, accessible user interfaces. Whether it's architecting a scalable MongoDB schema, crafting a pixel-perfect React component, or designing an intuitive user flow — I find immense joy in transforming complex real-world problems into simple, elegant digital solutions.",
  },
  {
    label: "Beyond the Code",
    text: "When I step away from the keyboard, I'm usually picking up my guitar or ukulele, exploring the latest UI/UX design trends, watching anime, or sharing what I know by teaching others. This creative blend keeps my thinking fresh, my designs human-centered, and my passion for building things that matter.",
  },
];

// ── Tech Stack pills ──────────────────────────────────────────────────────────
const stack = [
  "Next.js",
  "React.js",
  "Node.js",
  "MongoDB",
  "Express",
  "Tailwind CSS",
  "Figma",
  "GSAP",
];

export default function Profile() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-transparent px-6 py-28"
    >
      {/* ── Section wrapper ─────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl">
        {/* ── Section label + heading ─────────────────────────── */}
        <ScrollReveal delay={0}>
          <div className="mb-20 text-center">
            <p className="text-brand mb-4 text-[10px] font-black tracking-[0.4em] uppercase">
              Curriculum Vitae
            </p>
            <h2 className="text-5xl leading-none font-black tracking-tighter text-white uppercase md:text-7xl">
              About{" "}
              <span className="text-brand font-serif font-bold italic">Me</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base font-light text-gray-400 md:text-lg">
              Driven by Passion, Fueled by Code &amp; Creativity.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Two-column layout ────────────────────────────────── */}
        <div className="mb-20 grid grid-cols-1 items-start gap-12 lg:grid-cols-2 xl:gap-20">
          {/* Left — Bio paragraphs ─────────────────────────────── */}
          <ScrollReveal direction="left" delay={100}>
            <div className="space-y-10">
              {bio.map((item) => (
                <div key={item.label} className="group">
                  {/* Label */}
                  <div className="mb-3 flex items-center gap-3">
                    <span className="bg-brand h-1.5 w-1.5 animate-pulse rounded-full" />
                    <span className="text-brand text-[10px] font-black tracking-[0.35em] uppercase">
                      {item.label}
                    </span>
                  </div>
                  {/* Text */}
                  <p className="text-sm leading-[1.85] text-gray-300 md:text-[15px]">
                    {item.text}
                  </p>
                </div>
              ))}

              {/* ── Tech-stack pills ──────────────────────────── */}
              <div>
                <span className="mb-4 block text-[10px] font-black tracking-[0.35em] text-gray-500 uppercase">
                  Core Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <span
                      key={tech}
                      className="hover:border-brand/60 cursor-default rounded-full border border-white/10 bg-white/4 px-4 py-2 text-[11px] font-bold tracking-widest text-gray-300 uppercase transition-all duration-300 hover:text-white hover:shadow-[0_0_12px_rgba(139,92,246,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Portrait + quick stats ───────────────────── */}
          <ScrollReveal direction="right" delay={200}>
            <div className="flex flex-col gap-6">
              {/* Portrait card */}
              <div className="group hover:border-brand/40 relative aspect-4/5 w-full overflow-hidden rounded-[2.5rem] border border-white/10 transition-all duration-500 hover:shadow-[0_0_50px_rgba(139,92,246,0.15)]">
                <Image
                  src="https://i.ibb.co.com/jpSSsfZ/IMG-4937.jpg"
                  alt="Sayed Hasan Dipto"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="scale-105 object-cover object-top grayscale transition-all duration-700 group-hover:scale-100 group-hover:grayscale-0"
                  priority
                />
                {/* Gradient overlay */}
                <div className="from-dark via-dark/20 pointer-events-none absolute inset-0 bg-linear-to-t to-transparent opacity-80" />

                {/* Name badge */}
                <div className="absolute right-6 bottom-6 left-6 z-10">
                  <p className="text-brand text-2xl leading-none font-black tracking-tighter uppercase md:text-3xl">
                    Sayed Hasan
                    <br />
                    Dipto
                  </p>
                  <p className="mt-2 text-xs tracking-[0.25em] text-white/50 uppercase">
                    MERN Stack Developer &amp; UI/UX Designer
                  </p>
                  <div className="bg-brand mt-3 h-[2px] w-10" />
                </div>

                {/* Available badge */}
                <div className="absolute top-5 right-5 z-10 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-[10px] font-bold tracking-widest text-white/80 uppercase">
                    Available
                  </span>
                </div>
              </div>

              {/* Quick stats row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "3+", label: "Years Exp." },
                  { value: "10+", label: "Projects" },
                  { value: "5★", label: "Avg. Rating" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="hover:border-brand/40 group flex flex-col items-center rounded-2xl border border-white/10 bg-white/4 p-4 text-center transition-all duration-300 hover:bg-white/[0.07]"
                  >
                    <span className="group-hover:text-brand text-2xl font-black text-white transition-colors">
                      {stat.value}
                    </span>
                    <span className="mt-1 text-[9px] font-bold tracking-widest text-gray-500 uppercase">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ── Highlight cards grid ──────────────────────────────── */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {highlights.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 80} direction="up">
              <div
                className={`relative h-full bg-linear-to-br ${card.accent} border border-white/8 bg-black/30 backdrop-blur-xl ${card.border} group flex cursor-default flex-col gap-4 rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]`}
              >
                {/* Emoji icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl transition-transform duration-300 group-hover:scale-110">
                  {card.emoji}
                </div>

                {/* Content */}
                <div>
                  <h4 className="group-hover:text-brand mb-2 text-base font-bold text-white transition-colors duration-300">
                    {card.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-400">
                    {card.desc}
                  </p>
                </div>

                {/* Subtle corner accent line */}
                <div className="via-brand/30 absolute right-0 bottom-0 left-0 h-[2px] rounded-b-3xl bg-linear-to-r from-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
