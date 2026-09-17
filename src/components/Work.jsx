"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { playClick } from "@/lib/sound";

// Lazy-load modal — only needed when user clicks Quick View
const ProjectModal = dynamic(() => import("@/components/ProjectModal"));

/* ── Helpers ─────────────────────────────────────────────────────────────── */
// Extract short display name: "NakshiDevs - Agency..." → "NakshiDevs"
const shortTitle = (title) => title.split(" - ")[0].trim();

/* ── Work section ────────────────────────────────────────────────────────── */
export default function Work() {
  const [activeProject, setActiveProject] = useState(null);
  const revealRef = useRef([]);
  const obsRef = useRef(null);

  useEffect(() => {
    obsRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show");
            obsRef.current?.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    revealRef.current.forEach((el) => el && obsRef.current.observe(el));
    return () => obsRef.current?.disconnect();
  }, []);

  const addReveal = (el) => {
    if (el && !revealRef.current.includes(el)) {
      revealRef.current.push(el);
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("show");
      } else {
        obsRef.current?.observe(el);
      }
    }
  };

  const openModal = (project) => { playClick(); setActiveProject(project); };
  const closeModal = () => setActiveProject(null);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="dark-canvas white-grid">
      <section
        id="work"
        className="relative py-24 px-4 sm:px-8 lg:px-12 text-white crosshair-container"
      >
        <span className="corner-mark corner-bl" style={{ color: "rgba(255,255,255,.35)" }} />
        <span className="corner-mark corner-br" style={{ color: "rgba(255,255,255,.35)" }} />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* ── Header ── */}
          <div
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 reveal"
            ref={addReveal}
          >
            <div>
              <span className="label-accent">// 03 — Selected work</span>
              <h2 className="mt-4 text-4xl sm:text-5xl font-bold uppercase text-white">
                Built to ship.
              </h2>
            </div>
            <p className="max-w-md text-white/50 text-sm">
              A few of my favorite recent projects...
            </p>
          </div>

          {/* ── Grid ── */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="project-card glass overflow-hidden flex flex-col reveal"
                ref={addReveal}
                data-category={project.category}
              >
                {/* Thumbnail */}
                <div className="aspect-video bg-neutral-900 relative overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover grayscale hover:grayscale-0 hover:scale-105 transition duration-700"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-charcoal text-accent border border-accent/50 px-2.5 py-1 font-mono text-[9px] uppercase z-10">
                    {project.category}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold uppercase text-white">
                    {shortTitle(project.title)}
                  </h3>
                  <p className="mt-3 text-sm text-white/55 leading-relaxed line-clamp-3">
                    {project.fullDescription}
                  </p>

                  {/* Tech pills */}
                  <div className="mt-5 flex flex-wrap gap-1.5 font-mono text-[9px]">
                    {project.tools.map((tool) => (
                      <span key={tool} className="tag text-white/75">{tool}</span>
                    ))}
                  </div>

                  {/* 2-button footer */}
                  <div className="mt-7 pt-4 border-t border-white/10 flex gap-2 font-mono text-[10px] uppercase">
                    <button
                      onClick={() => openModal(project)}
                      id={`quick-view-${project.slug}`}
                      className="flex-1 bg-white text-ink py-2.5 text-center hover:bg-accent hover:text-white transition font-bold"
                    >
                      Quick View
                    </button>
                    <Link
                      href={`/work/${project.slug}`}
                      id={`case-study-${project.slug}`}
                      className="flex-1 border border-white/25 py-2.5 text-center hover:border-accent hover:bg-white/5 transition text-white"
                    >
                      Full Case Study →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 bg-ink text-white px-6 py-3.5 font-mono text-[11px] uppercase tracking-wider hover:bg-accent transition"
            >
              See All Projects
              <span className="text-accent">({projects.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick view modal */}
      {activeProject && (
        <ProjectModal project={activeProject} onClose={closeModal} />
      )}
    </div>
  );
}
