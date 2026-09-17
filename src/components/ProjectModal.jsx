"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ExternalLink, GitBranch, ArrowRight } from "lucide-react";

/* ── ProjectModal ────────────────────────────────────────────────────────── */
export default function ProjectModal({ project, onClose }) {
  const overlayRef = useRef(null);

  /* Lock body scroll */
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  /* ESC key */
  useEffect(() => {
    if (!project) return;
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [project, onClose]);

  if (!project) return null;

  const handleBackdropClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  const displayName = project.title.split(" - ")[0].trim();

  return (
    <div
      ref={overlayRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      style={{ background: "rgba(8,10,13,0.88)", backdropFilter: "blur(6px)" }}
      role="dialog"
      aria-modal="true"
      aria-label={`Quick view: ${displayName}`}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        style={{
          background: "#131619",
          border: "2px solid #ff5f1f",
          boxShadow: "8px 8px 0 rgba(255,95,31,.30)",
          animation: "modalIn 0.22s cubic-bezier(0.16,1,0.3,1) both",
        }}
      >
        {/* ── Close button ─────────────────────────────────────────────── */}
        <button
          onClick={onClose}
          id="modal-close-btn"
          className="absolute top-4 right-4 z-10 p-1.5 text-white/50 hover:text-accent transition-colors bg-charcoal/80 rounded"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ── Header ───────────────────────────────────────────────────── */}
        <div className="p-6 sm:p-8 border-b border-white/10">
          <span className="inline-block font-mono text-[9px] uppercase tracking-widest text-accent border border-accent/50 px-2.5 py-1 mb-4">
            {project.category}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white leading-tight">
            {displayName}
          </h2>
          <div className="mt-3 font-mono text-[10px] text-white/45 uppercase tracking-wider">
            {project.title.split(" - ").slice(1).join(" - ")}
          </div>
        </div>

        {/* ── Image ────────────────────────────────────────────────────── */}
        <div className="aspect-video bg-neutral-900 overflow-hidden relative">
          <Image
            src={project.img}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* ── Body ─────────────────────────────────────────────────────── */}
        <div className="p-6 sm:p-8 space-y-7">
          {/* Overview */}
          <div>
            <p className="font-mono text-[9px] uppercase tracking-widest text-white/35 mb-2">// Overview</p>
            <p className="text-sm text-white/65 leading-relaxed line-clamp-4">{project.fullDescription}</p>
          </div>

          {/* Challenge & Solution */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-widest text-white/35 mb-2">// The Challenge</p>
              <p className="text-xs text-white/50 leading-relaxed line-clamp-3">{project.challenge}</p>
            </div>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-widest text-white/35 mb-2">// The Solution</p>
              <p className="text-xs text-white/50 leading-relaxed line-clamp-3">{project.solution}</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <p className="font-mono text-[9px] uppercase tracking-widest text-white/35 mb-2">// Tech Stack</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tools.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="font-mono text-[9px] uppercase px-2.5 py-1 text-white/70"
                  style={{ background: "#0d0f13", border: "1px solid rgba(255,255,255,.12)" }}
                >
                  {t}
                </span>
              ))}
              {project.tools.length > 3 && (
                <span className="font-mono text-[9px] uppercase px-2.5 py-1 text-white/40" style={{ background: "#0d0f13", border: "1px solid rgba(255,255,255,.12)" }}>
                  +{project.tools.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* ── Sticky footer ────────────────────────────────────────────── */}
        <div
          className="sticky bottom-0 p-4 sm:p-6 flex gap-3 border-t border-white/10"
          style={{ background: "#131619" }}
        >
          <Link
            href={`/work/${project.slug}`}
            onClick={onClose}
            className="flex-1 flex items-center justify-center gap-2 py-3 font-mono text-[10px] uppercase font-bold text-white hover:opacity-90 transition"
            style={{ background: "#ff5f1f" }}
            id={`modal-full-case-${project.slug}`}
          >
            Full Case Study <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href={project.liveLink}
            className="flex-1 flex items-center justify-center gap-2 py-3 font-mono text-[10px] uppercase text-white/80 hover:text-white hover:border-accent transition"
            style={{ border: "1px solid rgba(255,255,255,.2)" }}
            target="_blank"
            rel="noopener noreferrer"
            id={`modal-live-demo-${project.slug}`}
          >
            Live Demo <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* ── Modal animation ────────────────────────────────────────────── */}
      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(16px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
      `}</style>
    </div>
  );
}
