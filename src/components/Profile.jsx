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
      className="py-28 px-6 bg-transparent relative overflow-hidden"
    >
      {/* ── Section wrapper ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto">
        {/* ── Section label + heading ─────────────────────────── */}
        <ScrollReveal delay={0}>
          <div className="text-center mb-20">
            <p className="text-brand text-[10px] uppercase tracking-[0.4em] font-black mb-4">
              Curriculum Vitae
            </p>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              About{" "}
              <span className="italic font-serif text-brand font-bold">Me</span>
            </h2>
            <p className="mt-5 text-gray-400 text-base md:text-lg font-light max-w-xl mx-auto">
              Driven by Passion, Fueled by Code &amp; Creativity.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Two-column layout ────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-start mb-20">
          {/* Left — Bio paragraphs ─────────────────────────────── */}
          <ScrollReveal direction="left" delay={100}>
            <div className="space-y-10">
              {bio.map((item) => (
                <div key={item.label} className="group">
                  {/* Label */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                    <span className="text-brand font-black text-[10px] uppercase tracking-[0.35em]">
                      {item.label}
                    </span>
                  </div>
                  {/* Text */}
                  <p className="text-gray-300 leading-[1.85] text-sm md:text-[15px]">
                    {item.text}
                  </p>
                </div>
              ))}

              {/* ── Tech-stack pills ──────────────────────────── */}
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.35em] text-gray-500 block mb-4">
                  Core Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-[11px] font-bold uppercase tracking-widest bg-white/4 border border-white/10 rounded-full text-gray-300 hover:border-brand/60 hover:text-white hover:shadow-[0_0_12px_rgba(139,92,246,0.2)] transition-all duration-300 cursor-default"
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
              <div className="relative w-full aspect-4/5 rounded-[2.5rem] overflow-hidden group border border-white/10 hover:border-brand/40 hover:shadow-[0_0_50px_rgba(139,92,246,0.15)] transition-all duration-500">
                <Image
                  src="https://i.ibb.co.com/jpSSsfZ/IMG-4937.jpg"
                  alt="Sayed Hasan Dipto"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-dark via-dark/20 to-transparent opacity-80 pointer-events-none" />

                {/* Name badge */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <p className="text-brand font-black text-2xl md:text-3xl uppercase leading-none tracking-tighter">
                    Sayed Hasan
                    <br />
                    Dipto
                  </p>
                  <p className="text-white/50 text-xs uppercase tracking-[0.25em] mt-2">
                    MERN Stack Developer &amp; UI/UX Designer
                  </p>
                  <div className="h-[2px] w-10 bg-brand mt-3" />
                </div>

                {/* Available badge */}
                <div className="absolute top-5 right-5 flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 z-10">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest">
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
                    className="bg-white/4 border border-white/10 rounded-2xl p-4 flex flex-col items-center text-center hover:border-brand/40 hover:bg-white/[0.07] transition-all duration-300 group"
                  >
                    <span className="text-2xl font-black text-white group-hover:text-brand transition-colors">
                      {stat.value}
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500 mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ── Highlight cards grid ──────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {highlights.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 80} direction="up">
              <div
                className={`relative h-full bg-linear-to-br ${card.accent} bg-black/30 backdrop-blur-xl border border-white/8 ${card.border} rounded-3xl p-7 flex flex-col gap-4 group transition-all duration-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.12)] hover:-translate-y-1 cursor-default`}
              >
                {/* Emoji icon */}
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {card.emoji}
                </div>

                {/* Content */}
                <div>
                  <h4 className="text-white font-bold text-base mb-2 group-hover:text-brand transition-colors duration-300">
                    {card.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Subtle corner accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-3xl bg-linear-to-r from-transparent via-brand/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
