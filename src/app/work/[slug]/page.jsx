import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, GitBranch, ArrowRight } from "lucide-react";

/* ── Static params ───────────────────────────────────────────────────────── */
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

/* ── SEO metadata ────────────────────────────────────────────────────────── */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Sayed Hasan Dipto`,
    description: project.fullDescription,
    openGraph: { title: project.title, description: project.fullDescription, type: "article" },
  };
}

/* ── Section label ───────────────────────────────────────────────────────── */
function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="font-mono text-[9px] uppercase tracking-widest text-accent">{children}</span>
      <div className="flex-1 h-px" style={{ background: "rgba(255,95,31,0.2)" }} />
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────────────────── */
export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.indexOf(project);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  // Short name: "NakshiDevs - Agency..." → "NakshiDevs"
  const displayName = project.title.split(" - ")[0].trim();

  return (
    <div style={{ background: "#080a0d", color: "#fff" }} className="min-h-screen">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 overflow-hidden" style={{ background: "#080a0d" }}>
        {/* Grid bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Glow */}
        <div
          className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
          style={{ background: "radial-gradient(circle at 80% 0%, rgba(255,95,31,.1) 0%, transparent 60%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* Breadcrumb */}
          <Link
            href="/#work"
            id="breadcrumb-back"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest mb-10 transition-colors text-white/35 hover:text-accent"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to work
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* LEFT — text */}
            <div>
              {/* Category badge */}
              <span
                className="inline-block font-mono text-[9px] uppercase tracking-widest px-3 py-1.5 mb-6"
                style={{ background: "rgba(255,95,31,.1)", color: "#ff5f1f", border: "1px solid rgba(255,95,31,.35)" }}
              >
                {project.category}
              </span>

              <h1
                className="font-bold uppercase leading-none text-white"
                style={{ fontSize: "clamp(2.4rem,5.5vw,4rem)", letterSpacing: "-0.02em" }}
              >
                {displayName}
              </h1>
              <p className="mt-3 font-mono text-[11px] text-white/35 uppercase tracking-widest">
                {project.title.split(" - ").slice(1).join(" - ")}
              </p>

              <p className="mt-6 text-base leading-relaxed" style={{ color: "rgba(255,255,255,.55)", maxWidth: "480px" }}>
                {project.fullDescription}
              </p>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-wrap gap-3 font-mono text-[10px] uppercase">
                <a
                  href={project.liveLink}
                  id={`hero-live-${project.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-3 font-bold text-white transition hover:opacity-85"
                  style={{ background: "#ff5f1f" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={project.githubLink}
                  id={`hero-github-${project.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-3 font-medium transition"
                  style={{ border: "1px solid rgba(255,255,255,.18)", color: "rgba(255,255,255,.7)" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code <GitBranch className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Tech pills */}
              <div className="mt-8 flex flex-wrap gap-2">
                {project.tools.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] uppercase px-3 py-1.5"
                    style={{ background: "#0f1115", border: "1px solid rgba(255,255,255,.1)", color: "rgba(255,255,255,.6)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT — screenshot */}
            <div className="relative lg:sticky lg:top-24">
              <div
                className="overflow-hidden aspect-video relative"
                style={{
                  border: "1px solid rgba(255,255,255,.08)",
                  boxShadow: "0 32px 80px rgba(0,0,0,.6), 0 0 0 1px rgba(255,95,31,.08)",
                }}
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="h-1 w-24" style={{ background: "#ff5f1f" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ─────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-8 lg:px-12" style={{ background: "#0c0e12" }}>
        <div className="max-w-7xl mx-auto">
          <SectionLabel>// 01 — Overview</SectionLabel>
          <p className="max-w-3xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,.65)" }}>
            {project.fullDescription}
          </p>
        </div>
      </section>

      {/* ── CHALLENGE + SOLUTION ─────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-8 lg:px-12" style={{ background: "#080a0d" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,.06)" }}>
            {/* Challenge */}
            <div className="p-8 sm:p-10" style={{ background: "#080a0d" }}>
              <SectionLabel>// 02 — The Challenge</SectionLabel>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,.6)" }}>
                {project.challenge}
              </p>
            </div>
            {/* Solution */}
            <div className="p-8 sm:p-10" style={{ background: "#0c0e12" }}>
              <SectionLabel>// 03 — The Solution</SectionLabel>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,.6)" }}>
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHALLENGES FACED ─────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-8 lg:px-12" style={{ background: "#0c0e12" }}>
        <div className="max-w-7xl mx-auto">
          <SectionLabel>// 04 — Challenges Faced</SectionLabel>
          <ul className="max-w-3xl space-y-5">
            {project.challengesFaced.map((item, i) => (
              <li key={i} className="flex gap-4">
                <span
                  className="flex-shrink-0 font-mono text-xs font-bold mt-0.5 w-5 text-right"
                  style={{ color: "#ff5f1f" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,.6)" }}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FUTURE ROADMAP ───────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-8 lg:px-12" style={{ background: "#080a0d" }}>
        <div className="max-w-7xl mx-auto">
          <SectionLabel>// 05 — Future Roadmap</SectionLabel>
          <ul className="max-w-3xl space-y-4">
            {project.futureRoadmap.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex-shrink-0 mt-1 text-accent">→</span>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,.6)" }}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── TECH STACK ───────────────────────────────────────────────────── */}
      <section
        className="py-12 px-4 sm:px-8 lg:px-12"
        style={{ background: "#0c0e12", borderTop: "1px solid rgba(255,255,255,.05)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4">
          <p className="font-mono text-[9px] uppercase tracking-widest mr-2" style={{ color: "rgba(255,255,255,.25)" }}>
            Stack
          </p>
          {project.tools.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] uppercase px-3 py-1.5"
              style={{ background: "#080a0d", border: "1px solid rgba(255,255,255,.1)", color: "rgba(255,255,255,.6)" }}
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ── NEXT PROJECT ─────────────────────────────────────────────────── */}
      <section
        className="px-4 sm:px-8 lg:px-12"
        style={{ background: "#0c0e12", borderTop: "1px solid rgba(255,255,255,.06)" }}
      >
        <div className="max-w-7xl mx-auto">
          <Link
            href={`/work/${nextProject.slug}`}
            id="next-project-link"
            className="group flex items-center justify-between gap-6 py-16"
          >
            <div>
              <p className="font-mono text-[9px] uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,.25)" }}>
                Next Project
              </p>
              <span
                className="inline-block font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 mb-4"
                style={{ background: "rgba(255,95,31,.1)", color: "#ff5f1f", border: "1px solid rgba(255,95,31,.3)" }}
              >
                {nextProject.category}
              </span>
              <h2
                className="font-bold uppercase text-white leading-none transition-colors group-hover:text-accent"
                style={{ fontSize: "clamp(1.8rem,4vw,3.5rem)", letterSpacing: "-0.02em" }}
              >
                {nextProject.title.split(" - ")[0].trim()}
              </h2>
              <p className="mt-3 text-sm max-w-lg" style={{ color: "rgba(255,255,255,.35)" }}>
                {nextProject.fullDescription}
              </p>
            </div>
            <div
              className="flex-shrink-0 w-14 h-14 flex items-center justify-center transition-all group-hover:translate-x-2"
              style={{ border: "1px solid rgba(255,255,255,.12)" }}
            >
              <ArrowRight className="w-6 h-6" style={{ color: "rgba(255,255,255,.4)" }} />
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
