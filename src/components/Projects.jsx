"use client";

import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section
      className="py-24 px-6 bg-transparent transition-colors relative overflow-hidden"
      id="projects"
      data-purpose="latest-projects"
    >

      <div className="max-w-7xl mx-auto">
        <ScrollReveal delay={0}>
          <div className="flex justify-between items-end mb-12">
            <div className="overflow-hidden">
              <h2 className="text-5xl font-bold text-white">
                Latest Projects
              </h2>
            </div>
            <Link
              className="text-sm font-semibold border-b border-white pb-1 hover:text-brand hover:border-brand transition-colors text-white"
              href="/projects"
              data-cursor="hover"
            >
              See All →
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div
        className="group project-card cursor-pointer relative transition-transform duration-300 ease-out hover:-translate-y-2"
        data-cursor="hover"
      >
        <div className="bg-white/5 border border-white/10 rounded-3xl p-4 shadow-[0_0_0_rgba(139, 92, 246,0)] hover:shadow-[0_0_30px_rgba(139, 92, 246,0.15)] transition-all duration-500 overflow-hidden mb-6 hover:border-brand/50">
          <div className="bg-white/5 rounded-2xl aspect-[4/3] overflow-hidden relative">
            <Image
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              src={project.img}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/10 transition-colors duration-500 z-10 pointer-events-none" />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-brand transition-colors text-white">
            {project.title}
          </h3>

          <div className="flex gap-2 flex-wrap">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[10px] font-bold px-3 py-1 bg-white/5 border border-white/10 rounded-full group-hover:border-brand transition-colors text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
