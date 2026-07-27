"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiCheckCircle, FiStar, FiAward } from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const experiences = [
  {
    id: 1,
    title: "Junior MERN Stack Developer",
    company: "Upwork & Fiverr",
    period: "2025 – Present",
    description:
      "Specializing in building high-performance, full-stack web applications using the MERN ecosystem. Focused on scalable architectures and seamless user experiences for international clients.",
    achievements: [
      "Developed and deployed 10+ full-stack applications with 5-star ratings.",
      "Implemented secure authentication using Better Auth and Next-Auth.",
      "Optimized MongoDB queries resulting in a 30% speed improvement.",
    ],
    tech: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Junior Web Developer",
    company: "Upwork & Fiverr",
    period: "2023 – 2024",
    description:
      "Started my professional journey as a freelancer delivering high-quality web solutions worldwide, focused on frontend excellence and responsive design.",
    achievements: [
      "Maintained a 5-star rating on freelance platforms through consistent delivery.",
      "Converted 50+ complex Figma designs into responsive React components.",
      "Built interactive UI components using Framer Motion & GSAP.",
    ],
    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "GSAP"],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "AB Agency",
    period: "2023 – 2024",
    description:
      "Bridged the gap between aesthetics and functionality by designing user-centric interfaces. Focused on accessibility and modern design trends.",
    achievements: [
      "Designed comprehensive design systems improving dev efficiency by 40%.",
      "Conducted user research and usability testing to validate designs.",
      "Created high-fidelity prototypes securing stakeholder approvals.",
    ],
    tech: ["Figma", "Adobe XD", "User Research", "Prototyping"],
  },
  {
    id: 4,
    title: "Computer Expert & Trainer",
    company: "Bakshibonj Post E Center",
    period: "2018 – 2023",
    description:
      "Shared computing and IT knowledge with the local community, empowering students and professionals with essential digital skills.",
    achievements: [
      "Trained over 200+ students in computing fundamentals and productivity tools.",
      "Managed IT infrastructure and troubleshooting for the training center.",
      "Awarded 'Best Trainer' for three consecutive years.",
    ],
    tech: ["IT Support", "Networking", "Office Suite", "Public Speaking"],
  },
];

export default function Experience() {
  const containerRef = useRef(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll('.exp-card');
    gsap.fromTo(
      cards,
      { opacity: 0, x: 40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="bg-transparent min-h-screen relative"
    >
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24">

        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

          {/* ── Left Column (Sticky Summary) ── */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 h-fit">
              <h2 className="text-3xl font-bold text-white mb-6">
                Career Journey & Experience
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Over the years, I've worked on full-stack web applications, international freelance projects, and scalable UI designs. My focus is on building seamless, high-performance digital experiences.
              </p>

              {/* Stats Box */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 flex flex-col justify-center items-center text-center">
                  <FiAward className="text-purple-400 text-2xl mb-2" />
                  <span className="text-white font-bold text-lg">10+</span>
                  <span className="text-gray-500 text-[10px] uppercase tracking-widest font-semibold mt-1">Projects</span>
                </div>
                <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 flex flex-col justify-center items-center text-center">
                  <FiStar className="text-yellow-400 text-2xl mb-2" />
                  <span className="text-white font-bold text-lg">100%</span>
                  <span className="text-gray-500 text-[10px] uppercase tracking-widest font-semibold mt-1">Satisfaction</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column (Experience Cards) ── */}
          <div className="lg:col-span-8 space-y-6 mt-8 lg:mt-0">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="exp-card bg-slate-900/60 border border-slate-800/80 rounded-xl p-6 sm:p-8 hover:border-purple-500/40 transition-all duration-300 flex flex-col shadow-lg"
              >
                {/* Card Header Row */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-purple-400 font-medium text-sm">{exp.company}</p>
                  </div>
                  <div className="shrink-0 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                    {exp.period}
                  </div>
                </div>

                {/* Brief Summary */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-6 flex-1">
                  <ul className="space-y-3">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                        <FiCheckCircle className="text-purple-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-800/80 mt-auto">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-slate-800/50 text-cyan-300 border border-slate-700/50 hover:bg-slate-700/80 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
