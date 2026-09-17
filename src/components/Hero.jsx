"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { PERSON } from "@/lib/data";
import { playClick } from "@/lib/sound";

export default function Hero() {
  const revealRef = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    revealRef.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const addReveal = (el) => {
    if (el && !revealRef.current.includes(el)) revealRef.current.push(el);
  };

  return (
    <section className="relative min-h-screen overflow-hidden grid-bg pt-28 pb-10 px-4 sm:px-8 lg:px-12 flex items-center border-b border-black crosshair-container">
      <span className="corner-mark corner-tl" style={{ color: "#080a0d" }} />
      <span className="corner-mark corner-tr" style={{ color: "#080a0d" }} />
      <span className="corner-mark corner-bl" style={{ color: "#080a0d" }} />
      <span className="corner-mark corner-br" style={{ color: "#080a0d" }} />

      {/* Background MERN watermark */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0"
      >
        <div
          className="font-mono leading-none font-bold tracking-[-.09em] uppercase whitespace-nowrap opacity-80"
          style={{
            fontSize: "21vw",
            color: "transparent",
            WebkitTextStroke: "2px rgba(8,10,13,.14)",
          }}
        >
          MERN
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left column */}
        <div className="lg:col-span-7 reveal" ref={addReveal}>
          <div className="inline-flex items-center gap-2 bg-ink text-white px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            {PERSON.title}
          </div>

          <h1 className="mt-6 text-[clamp(3.4rem,8vw,7.7rem)] leading-[.86] tracking-[-.07em] font-bold uppercase">
            Building
            <br />
            <span className="text-neutral-500">Digital</span>
            <br />
            Systems.
          </h1>

          <p className="mt-7 max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-700">
            I&apos;m <strong>{PERSON.name}</strong> — a full-stack developer focused on
            practical, scalable web products across React, Node.js, Express and MongoDB.
          </p>

          <div className="mt-8 grid grid-cols-3 border-2 border-ink bg-white shadow-[4px_4px_0_#080a0d] max-w-lg">
            <div className="p-3 border-r-2 border-ink">
              <div className="font-mono text-xl sm:text-2xl font-bold text-accent leading-none">
                {PERSON.yearsExp}
              </div>
              <div className="mt-1 font-mono text-[9px] uppercase tracking-widest text-neutral-500">
                Years Exp
              </div>
            </div>
            <div className="p-3 border-r-2 border-ink">
              <div className="font-mono text-xl sm:text-2xl font-bold leading-none">
                {PERSON.projects}
              </div>
              <div className="mt-1 font-mono text-[9px] uppercase tracking-widest text-neutral-500">
                Projects
              </div>
            </div>
            <div className="p-3">
              <div className="font-mono text-xl sm:text-2xl font-bold leading-none">
                {PERSON.delivery}
              </div>
              <div className="mt-1 font-mono text-[9px] uppercase tracking-widest text-neutral-500">
                Delivery
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 font-mono text-[11px] uppercase">
            <a
              href="#work"
              onClick={playClick}
              className="bg-ink text-white px-5 py-3.5 font-medium hover:bg-neutral-800 transition"
            >
              Explore work ↓
            </a>
            <a
              href="#contact"
              onClick={playClick}
              className="bg-white border-2 border-ink px-5 py-3.5 font-medium shadow-[4px_4px_0_#080a0d] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition"
            >
              Hire / collaborate
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 border-t border-black/20 pt-5 gap-5 font-mono text-[10px] uppercase">
            <div>
              <span className="text-neutral-500 block">// Focus</span>
              <strong>Full-Stack</strong>
            </div>
            <div>
              <span className="text-neutral-500 block">// Runtime</span>
              <strong>Node.js</strong>
            </div>
            <div>
              <span className="text-neutral-500 block">// Database</span>
              <strong>MongoDB</strong>
            </div>
            <div>
              <span className="text-neutral-500 block">// UI</span>
              <strong>React</strong>
            </div>
          </div>
        </div>

        {/* Right column — portrait */}
        <div className="lg:col-span-5 reveal" ref={addReveal}>
          <div className="relative max-w-md mx-auto lg:ml-auto">
            <div className="absolute -inset-3 border-2 border-black bg-white/30" />
            <div className="relative glass-light p-3 sm:p-4">
              <div className="aspect-[4/5] overflow-hidden bg-neutral-900 border border-black/10 relative">
                <Image
                  src={PERSON.portrait}
                  alt={`${PERSON.name} portrait`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale hover:grayscale-0 hover:scale-105 transition duration-700"
                  priority
                />
                <div className="absolute inset-x-3 bottom-3 glass bg-black/75 text-white p-3.5">
                  <div className="flex justify-between items-center gap-4 font-mono text-[10px] uppercase">
                    <span className="text-accent">● available</span>
                    <span className="text-white/50">SHD / 001</span>
                  </div>
                  <div className="mt-2 pt-2 border-t border-white/10 flex justify-between font-mono text-[11px]">
                    <span>{PERSON.name}</span>
                    <span className="text-white/50">MERN</span>
                  </div>
                </div>
              </div>
              <div className="pt-3 flex justify-between font-mono text-[9px] uppercase tracking-widest">
                <span>Portfolio / 2026</span>
                <span>{PERSON.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
