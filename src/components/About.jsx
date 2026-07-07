"use client";

import Link from "next/link";
import Image from "next/image";
import InteractiveDotGrid from "./InteractiveDotGrid";

export default function About() {
  const tools = [
    { name: "Frontend Development", desc: "Next.js, React.js, Tailwind CSS", year: "2023 - Present" },
    { name: "Creative Design", desc: "Figma, UI/UX Design", year: "2023 - Present" },
    { name: "Backend Development", desc: "MongoDB, Firebase, Node.js, MongoDB", year: "2024 - Present" },
    { name: "Full-stack Solutions", desc: "Better Auth, API Integration", year: "2024 - Present" },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-[#0A0A0A] transition-colors relative overflow-hidden" data-purpose="intro-content">
      <InteractiveDotGrid />

      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm font-medium text-gray-400 mb-4 uppercase tracking-widest">
          — About Me —
        </p>

        <h2 className="text-3xl md:text-6xl text-center font-serif mb-16 overflow-hidden flex flex-wrap justify-center gap-x-4 text-white px-4">
          <span className="italic block">Pushing</span>
          <span className="italic block">Boundaries</span>
          <span className="not-italic font-sans font-light block">since</span>
          <span className="not-italic font-sans font-light block">2023</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="relative overflow-hidden rounded-3xl flex justify-center">
            {/* Secondary Image/Portrait */}
            <div
              className="bg-dark rounded-3xl overflow-hidden aspect-[4/3] w-full max-w-[130px] sm:max-w-md origin-center group relative cursor-pointer"
            >
              <Image
                alt="Studio work"
                fill
                className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                src="https://i.ibb.co/Rkzj9Qmj/20260511-123949.jpg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
            </div>
          </div>

          <div className="px-2 md:px-0">
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-8">
              Full-stack developer focused on the React ecosystem. Specialized in building high-performance web applications using Next.js, Tailwind CSS, and MongoDB. Merging clean code with intuitive creative design.
            </p>

            <div className="mb-12 flex justify-center md:justify-start">
              <Link href="https://www.facebook.com/SayedHasanDipto25" data-cursor="hover">
                <button
                  className="bg-brand text-dark text-xs uppercase tracking-widest px-8 py-3 rounded-full hover:bg-brand/90 hover:scale-105 active:scale-95 transition-all relative overflow-hidden group"
                >
                  <span className="relative z-10">Let&apos;s talk</span>
                </button>
              </Link>
            </div>

            {/* Tool List */}
            <div className="space-y-2 border-t border-white/10 pt-8">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-center group cursor-default p-4 rounded-xl transition-all gap-2 hover:translate-x-2 hover:bg-white/5"
                >
                  <div className="flex flex-col">
                    <span className="font-medium group-hover:text-brand transition-colors text-white">{tool.name}</span>
                    <span className="text-xs text-gray-400 sm:hidden">{tool.desc}</span>
                  </div>
                  <span className="text-sm text-gray-400 hidden sm:block">{tool.desc}</span>
                  <span className="text-[10px] text-gray-500">{tool.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
