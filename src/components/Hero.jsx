"use client";
// Invalidate cache

// All GSAP/framer-motion scroll animations removed for performance
// Hero uses static layout only
import { useRef } from "react";
import Link from "next/link";
import TextScramble from "./TextScramble";
import Image from "next/image";
import { SiMongodb, SiReact, SiNodedotjs } from 'react-icons/si';
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[#0A0A0A]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[16vw] md:text-[14vw] font-black text-white/[0.02] uppercase whitespace-nowrap select-none leading-none z-0 tracking-[0.2em]">
          MERN STACK
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mt-4 md:mt-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">

          {/* Content Left */}
          {/* Changed direction to 'up' to avoid horizontal layout thrashing on mobile */}
          <ScrollReveal direction="up" delay={100} className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
            <div className="mb-6 md:mb-8 space-y-3 md:space-y-4">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                </div>
                <span className="text-brand text-[10px] md:text-xs uppercase tracking-[0.4em] font-black">Available for Projects</span>
              </div>
              <h2 className="text-lg md:text-2xl font-serif italic text-white/40 min-h-[30px]">
                <TextScramble text="MERN Stack Web Developer" delay={400} />
              </h2>
            </div>

            <h1 className="flex flex-col text-[16vw] sm:text-[14vw] md:text-[8.5vw] font-black uppercase leading-[0.85] tracking-[-0.03em] mb-6 w-full">
              <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.4)] hover:[-webkit-text-stroke:1px_#8B5CF6] duration-300 block cursor-default">Sayed</span>
              <span className="text-white hover:text-brand duration-300 block cursor-default">Hasan</span>
            </h1>

            <div className="flex items-center gap-3 md:gap-4 justify-center md:justify-start text-white/60 ml-0 md:ml-3 text-[10px] md:text-sm tracking-[0.4em] md:tracking-[0.5em] font-light uppercase mb-10 md:mb-12">
              <span className="hover:text-brand transition-colors duration-300">Dipto</span>
              <span className="w-1 h-1 rounded-full bg-brand/30" />
              <span className="hover:text-brand transition-colors duration-300">Portfolio</span>
            </div>

            <div className="mt-2 flex flex-wrap gap-6 md:gap-8 items-center justify-center md:justify-start">
              <Link href="/#contact" data-cursor="hover">
                <button className="group relative px-8 md:px-10 py-3 md:py-4 bg-brand rounded-full overflow-hidden shadow-[0_0_30px_rgba(139, 92, 246,0.2)] hover:scale-105 transition-transform duration-200">
                  <span className="relative z-10 text-dark font-black uppercase text-xs md:text-sm tracking-widest flex items-center gap-2">
                    Let&apos;s Talk <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </button>
              </Link>

              <div className="flex gap-5 md:gap-6">
                {[
                  { name: "IG", href: "https://instagram.com/sayedhasandipto" },
                  { name: "LI", href: "https://linkedin.com/in/sayedhasandipto" },
                  { name: "GH", href: "https://github.com/sayedhasandipto" }
                ].map((s) => (
                  <Link key={s.name} href={s.href} target="_blank" className="text-[10px] md:text-xs font-bold text-white/50 hover:text-brand transition-colors tracking-widest" data-cursor="hover">
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Portrait Right */}
          <ScrollReveal direction="up" delay={300} className="w-full md:w-1/2 flex justify-center md:justify-end relative mt-8 md:mt-0">
            <div className="relative w-full max-w-[320px] md:max-w-[450px] aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden group border border-white/10 shadow-[0_0_0_rgba(139, 92, 246,0)] hover:shadow-[0_0_50px_rgba(139, 92, 246,0.15)] hover:scale-[1.02] hover:-rotate-1 transition-all duration-500 hover:border-brand/40">
              <Image
                src="https://i.ibb.co/wZVXT6Yd/m1.png"
                alt="Portrait"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 z-20">
                <p className="text-brand font-black text-2xl md:text-4xl uppercase leading-none">MERN<br />EXPERT</p>
                <div className="h-1 w-8 md:w-12 bg-white/20 mt-2" />
              </div>
            </div>

            {/* Floating Tech Icons */}
            <div className="absolute inset-0 pointer-events-none z-30 hidden sm:block">
              <div className="absolute top-10 -left-6 md:-left-10 text-brand bg-dark/80 p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/10 shadow-[0_0_15px_rgba(139, 92, 246,0.1)]">
                <SiReact className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="absolute bottom-20 -right-2 md:-right-5 text-brand bg-dark/80 p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/10 shadow-[0_0_15px_rgba(139, 92, 246,0.1)]">
                <SiNodedotjs className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="absolute top-1/2 -right-6 md:-right-12 text-brand bg-dark/80 p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/10 shadow-[0_0_15px_rgba(139, 92, 246,0.1)]">
                <SiMongodb className="w-6 h-6 md:w-8 md:h-8" />
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
