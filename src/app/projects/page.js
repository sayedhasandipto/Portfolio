"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FluidBackground from "@/components/FluidBackground";
import Preloader from "@/components/Preloader";
import Image from "next/image";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import ScrollReveal from "@/components/ScrollReveal";

function IndividualProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div
        className="group project-card cursor-pointer relative transition-transform duration-500 ease-out hover:-translate-y-2 h-full flex flex-col"
        data-cursor="hover"
      >
        <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-4 shadow-sm hover:shadow-[0_0_40px_rgba(139, 92, 246,0.15)] transition-all duration-500 overflow-hidden mb-6 hover:border-brand/40 flex-shrink-0">
          <div className="bg-white/5 rounded-2xl aspect-[4/3] overflow-hidden relative border border-white/5">
            <Image
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              src={project.img}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-[#0A0A0A]/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
          </div>
        </div>

        <div className="flex-grow flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-2 block group-hover:text-brand transition-colors">
            {project.category}
          </span>
          <h3 className="text-2xl font-bold mb-4 group-hover:text-brand transition-colors text-white uppercase tracking-tighter">
            {project.title}
          </h3>

          <div className="flex gap-2 flex-wrap mt-auto">
            {project.tags.map((tag, i) => (
              <span key={i} className="text-[10px] font-bold px-3 py-1 bg-white/5 border border-white/10 rounded-full group-hover:border-white/20 transition-colors text-white/70">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ProjectsPage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <FluidBackground />

      {isLoading && (
        <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
      )}

      {!isLoading && (
        <PageWrapper>
          <Header />
          <main className="pt-32 md:pt-40 pb-24 px-4 md:px-6 min-h-screen dot-grid">
            <div className="max-w-7xl mx-auto">
              <ScrollReveal delay={0}>
                <div className="mb-16 md:mb-24 text-center">
                  <p className="text-brand text-xs uppercase tracking-[0.4em] font-black mb-4">Portfolio Archive</p>
                  <h1 className="text-5xl md:text-[6rem] font-black text-white uppercase tracking-tighter leading-[0.9]">
                    Selected <span className="italic font-serif text-white/50">Works</span>
                  </h1>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {projects.map((project, index) => (
                  <ScrollReveal key={project.id} delay={index * 100}>
                    <IndividualProjectCard project={project} />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </main>
          <Footer />
        </PageWrapper>
      )}
    </>
  );
}
