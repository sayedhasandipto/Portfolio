'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, GitBranch } from 'lucide-react';
import { projects } from '@/data/projects';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Build unique category list
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  // Filter projects
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      <Navbar />

      {/* Hero block */}
      <section className="relative bg-ink text-white pt-28 px-4 sm:px-8 lg:px-12 dark-canvas white-grid">
        <div className="max-w-7xl mx-auto">

          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] 
              uppercase tracking-wider text-white/50 hover:text-accent transition"
          >
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>

          {/* Label + heading */}
          <span className="label-accent block mt-10">// All Projects</span>
          <h1 className="mt-4 text-5xl sm:text-6xl font-bold uppercase 
            tracking-tight text-white">
            The Archive.
          </h1>
          <p className="mt-4 max-w-2xl text-white/60 text-sm leading-relaxed">
            Every project I've shipped — from agency platforms to
            dashboards.
          </p>

          {/* Meta row */}
          <div className="mt-6 flex flex-wrap gap-6 font-mono text-[11px] 
            uppercase tracking-widest text-white/40">
            <span>{projects.length} Projects</span>
            <span>·</span>
            <span>{categories.length - 1} Categories</span>
          </div>

          {/* Filter buttons */}
          <div className="mt-10 flex flex-wrap gap-2 font-mono text-[10px] uppercase">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`border px-4 py-2 transition ${activeFilter === cat
                  ? 'bg-white text-ink border-white'
                  : 'border-white/25 text-white/85 hover:bg-white/10'
                  }`}
              >
                {cat}
                <span className="ml-2 text-accent">
                  {cat === 'All'
                    ? projects.length
                    : projects.filter(p => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="bg-ink text-white py-20 px-4 sm:px-8 lg:px-12 dark-canvas white-grid">
        <div className="max-w-7xl mx-auto">

          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-mono text-xs uppercase text-white/40">
                No projects in this category.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProjects.map(project => (
                <article
                  key={project.slug}
                  className="glass overflow-hidden flex flex-col border border-white/10 hover:border-accent/50 transition"
                >
                  {/* Image */}
                  <div className="aspect-video bg-neutral-900 relative overflow-hidden">
                    <Image
                      src={project.img}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
                    />
                    <span className="absolute top-3 left-3 bg-charcoal 
                      text-accent border border-accent/50 px-2.5 py-1 
                      font-mono text-[9px] uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold uppercase text-white">
                      {project.title.split(' - ')[0]}
                    </h3>
                    <p className="mt-3 text-sm text-white/55 leading-relaxed line-clamp-3">
                      {project.fullDescription}
                    </p>

                    {/* Tools */}
                    <div className="mt-5 flex flex-wrap gap-1.5 font-mono text-[9px]">
                      {project.tools.slice(0, 4).map(tool => (
                        <span
                          key={tool}
                          className="tag text-white/75"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="mt-7 pt-4 border-t border-white/10 
                      flex gap-2 font-mono text-[10px] uppercase">
                      <Link
                        href={`/work/${project.slug}`}
                        className="flex-1 bg-white text-ink py-2.5 text-center 
                          hover:bg-accent hover:text-white transition"
                      >
                        Full Case Study →
                      </Link>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener"
                        className="border border-white/25 px-4 py-2.5 
                          hover:border-accent transition text-white"
                        aria-label="Repository"
                      >
                        <GitBranch className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
