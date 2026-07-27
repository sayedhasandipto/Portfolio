"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiTool, FiTarget, FiCommand, FiActivity } from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const coreSkills = [
  { name: "React.js", percent: 90, gradient: "from-cyan-400 to-blue-500" },
  { name: "Next.js", percent: 85, gradient: "from-cyan-400 to-blue-500" },
  { name: "JavaScript/ES6+", percent: 88, gradient: "from-yellow-400 to-orange-500" },
  { name: "Tailwind CSS", percent: 95, gradient: "from-teal-400 to-emerald-500" },
  { name: "Node.js / Express", percent: 75, gradient: "from-emerald-400 to-teal-500" },
  { name: "MongoDB", percent: 78, gradient: "from-green-400 to-emerald-600" },
  { name: "Git & GitHub", percent: 85, gradient: "from-purple-400 to-pink-500" },
];

const ecosystemTools = [
  "VS Code", "GitHub", "Figma", "Postman", "Vercel", "npm", "Vite", "Docker", "REST APIs", "Better Auth"
];

const masteringTopics = [
  "Advanced System Design & Microservices",
  "TypeScript Deep Dive",
  "Next.js Server Actions & App Router",
  "Payment Gateway Integrations"
];

export default function Skills() {
  const containerRef = useRef(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Animate progress bars
    const bars = containerRef.current.querySelectorAll('.progress-fill');
    bars.forEach(bar => {
      const targetWidth = bar.getAttribute('data-width');
      gsap.fromTo(bar, 
        { width: "0%" },
        {
          width: `${targetWidth}%`,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 85%",
          }
        }
      );
    });

    // Fade in panels
    const panels = containerRef.current.querySelectorAll('.fade-up');
    gsap.fromTo(panels,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      }
    );

  }, { scope: containerRef });

  return (
    <section 
      id="skills" 
      ref={containerRef}
      className="bg-[#0b0914] py-24 sm:py-32 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ── Section Header ── */}
        <div className="mb-16 fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-800/40 bg-purple-950/60 mb-4 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <FiCommand className="text-purple-400 text-[10px]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400">
              My Technical Armory
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-purple-300 tracking-tight mb-4">
            Skills & Capabilities
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">
            I am deeply committed to writing clean, maintainable architecture and adhering to modern web standards. Here is a comprehensive breakdown of my technical proficiency.
          </p>
        </div>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* ── Left Column (Progress Bar Stack) ── */}
          <div className="lg:col-span-7 space-y-6">
            {coreSkills.map((skill, idx) => (
              <div key={idx} className="fade-up">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-sm font-bold text-gray-200 tracking-wide">{skill.name}</span>
                  <span className="text-xs font-bold text-purple-300/80 bg-purple-900/20 px-2 py-0.5 rounded shadow-[0_0_10px_rgba(168,85,247,0.1)]">
                    {skill.percent}%
                  </span>
                </div>
                {/* Progress Track */}
                <div className="bg-[#16122b] rounded-full h-3 p-[2px] border border-purple-900/30 w-full overflow-hidden flex items-center shadow-inner">
                  {/* Progress Fill */}
                  <div 
                    className={`progress-fill h-full rounded-full bg-gradient-to-r ${skill.gradient} relative overflow-hidden shadow-[0_0_10px_rgba(255,255,255,0.2)]`}
                    data-width={skill.percent}
                  >
                    {/* Glossy shine overlay */}
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-white/20 rounded-t-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Right Column (Interactive ecosystem) ── */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Panel A: Tools & Ecosystem */}
            <div className="fade-up bg-[#131022]/90 backdrop-blur-md border border-purple-900/30 rounded-2xl p-6 lg:p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-purple-900/20">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                  <FiTool className="text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Ecosystem & Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {ecosystemTools.map((tool, i) => (
                  <span 
                    key={i} 
                    className="cursor-default px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 text-xs font-semibold text-gray-300 transition-all duration-300 hover:text-white hover:bg-purple-900/20 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:-translate-y-0.5"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Panel B: Currently Mastering */}
            <div className="fade-up relative overflow-hidden bg-gradient-to-br from-[#16112e] to-[#0f0c21] border border-purple-800/40 rounded-2xl p-6 lg:p-8 shadow-xl flex-1">
              {/* Background ambient glow inside card */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-[60px]" />
              
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <FiTarget className="text-emerald-400" /> Currently Mastering
                </h3>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-400">Active</span>
                </div>
              </div>

              <ul className="space-y-4 relative z-10">
                {masteringTopics.map((topic, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <FiActivity className="text-emerald-400/80 text-xs shadow-[0_0_10px_rgba(52,211,153,0.5)] rounded-full" />
                    </div>
                    <span className="text-sm font-medium text-gray-300 leading-snug">
                      {topic}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
      
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none -z-0 translate-x-1/3 translate-y-1/3" />
    </section>
  );
}
