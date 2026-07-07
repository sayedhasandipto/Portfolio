"use client";

import { useParams, useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FluidBackground from "@/components/FluidBackground";
import Preloader from "@/components/Preloader";
import PageWrapper from "@/components/PageWrapper";
import ScrollReveal from "@/components/ScrollReveal";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaLightbulb,
  FaExclamationTriangle,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export default function ProjectDetail() {
  const { slug } = useParams();
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const [isLoading, setIsLoading] = useState(true);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 italic font-serif text-brand">
            Project Not Found
          </h1>
          <Link href="/projects" className="text-white/50 hover:text-brand transition-colors text-sm uppercase tracking-widest">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <FluidBackground />

      {isLoading && (
        <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
      )}

      {!isLoading && (
        <PageWrapper>
          <Header />

          <main className="pt-20 dot-grid overflow-x-hidden">
            {/* ── Hero ── */}
            <section className="pt-32 md:pt-40 pb-0 px-6">
              <div className="max-w-7xl mx-auto">
                {/* Back link */}
                <ScrollReveal delay={0}>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-3 text-white/30 hover:text-brand transition-all duration-300 mb-16 uppercase text-[10px] font-bold tracking-[0.5em] group"
                  >
                    <span className="w-8 h-[1px] bg-white/20 group-hover:w-14 group-hover:bg-brand transition-all duration-300" />
                    Return to Archive
                  </Link>
                </ScrollReveal>

                {/* Hero layout */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end pb-16">
                  {/* Left: title block */}
                  <ScrollReveal direction="right" delay={100}>
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-brand text-[10px] font-black uppercase tracking-[0.5em]">
                          {project.category}
                        </span>
                        <span className="text-white/20 text-[10px]">
                          {"//"} 0{project.id}
                        </span>
                      </div>
                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.88] mb-8">
                        {project.title}
                      </h1>
                      <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                        {project.fullDescription}
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* Right: meta + CTAs */}
                  <ScrollReveal direction="left" delay={200}>
                    <div className="flex flex-col gap-8 lg:items-end">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-bold px-4 py-2 border border-white/15 rounded-full text-white/60 uppercase tracking-widest"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        {project.liveLink && (
                          <Link
                            href={project.liveLink}
                            target="_blank"
                            data-cursor="hover"
                            className="flex items-center gap-3 bg-brand text-dark px-7 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:shadow-[0_0_25px_rgba(139, 92, 246,0.5)] hover:scale-105 transition-all duration-300"
                          >
                            <FaExternalLinkAlt size={10} />
                            Live Demo
                          </Link>
                        )}
                        {project.githubLink && (
                          <Link
                            href={project.githubLink}
                            target="_blank"
                            data-cursor="hover"
                            className="flex items-center gap-3 border border-white/20 text-white px-7 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:border-brand hover:text-brand transition-all duration-300"
                          >
                            <FaGithub size={12} />
                            Source
                          </Link>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </section>

            {/* ── Hero Image ── */}
            <ScrollReveal delay={100}>
              <section className="px-4 md:px-6 mb-0">
                <div className="max-w-7xl mx-auto">
                  <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-white/8 shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover"
                      priority
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent" />

                    {/* Floating meta chip */}
                    <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 flex gap-3">
                      {project.tools.slice(0, 3).map((tool, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-bold px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/20 rounded-full text-white/80 uppercase tracking-widest"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* ── Challenge & Solution ── */}
            <section className="py-24 md:py-32 px-6 bg-transparent border-y border-white/5 mt-20">
              <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                  {/* Challenge */}
                  <ScrollReveal direction="right" delay={0}>
                    <div className="bg-black/30 backdrop-blur-xl border border-white/8 rounded-3xl p-8 md:p-10 h-full group hover:border-red-500/30 transition-all duration-500">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:bg-red-500/20 transition-colors">
                          <FaExclamationTriangle size={18} />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.4em] font-black text-white/30">The Problem</p>
                          <h3 className="text-white font-bold text-lg">Critical Challenge</h3>
                        </div>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed pl-0 border-l-2 border-red-500/30 pl-6">
                        {project.challenge}
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* Solution */}
                  <ScrollReveal direction="left" delay={150}>
                    <div className="bg-black/30 backdrop-blur-xl border border-white/8 rounded-3xl p-8 md:p-10 h-full group hover:border-brand/30 transition-all duration-500">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand group-hover:bg-brand/20 transition-colors">
                          <FaLightbulb size={18} />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.4em] font-black text-white/30">The Answer</p>
                          <h3 className="text-white font-bold text-lg">Technical Solution</h3>
                        </div>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed border-l-2 border-brand/30 pl-6">
                        {project.solution}
                      </p>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </section>

            {/* ── Tech Stack ── */}
            <section className="py-24 px-6">
              <div className="max-w-7xl mx-auto">
                <ScrollReveal delay={0}>
                  <div className="text-center mb-16">
                    <p className="text-brand text-[10px] uppercase tracking-[0.5em] font-black mb-4">
                      Built With
                    </p>
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
                      Tech <span className="italic font-serif text-brand">Stack</span>
                    </h2>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                  <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                    {project.tools.map((tool, i) => (
                      <div
                        key={i}
                        className="px-6 md:px-10 py-4 md:py-6 bg-white/[0.03] border border-white/10 rounded-2xl md:rounded-3xl hover:bg-brand/5 hover:border-brand/40 hover:shadow-[0_0_20px_rgba(139, 92, 246,0.08)] transition-all duration-300 cursor-default group"
                      >
                        <span className="text-base md:text-lg font-bold tracking-widest uppercase text-white/50 group-hover:text-brand transition-colors duration-300">
                          {tool}
                        </span>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </section>

            {/* ── Next Project ── */}
            <section className="border-t border-white/5 overflow-hidden">
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group block relative"
                data-cursor="hover"
              >
                {/* Background image peek */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <Image
                    src={nextProject.img}
                    alt={nextProject.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-[#0A0A0A]/85" />
                </div>

                <div className="relative z-10 py-20 px-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-8">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-black mb-3">
                      Next Project
                    </p>
                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white group-hover:text-brand transition-colors duration-500">
                      {nextProject.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-2">{nextProject.category}</p>
                  </div>
                  <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-brand group-hover:bg-brand group-hover:shadow-[0_0_30px_rgba(139, 92, 246,0.4)] transition-all duration-500 flex-shrink-0">
                    <FiArrowRight size={24} className="text-white group-hover:text-dark transition-colors duration-300" />
                  </div>
                </div>
              </Link>
            </section>
          </main>

          <Footer />
        </PageWrapper>
      )}
    </>
  );
}
