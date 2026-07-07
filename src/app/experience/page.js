"use client";

// All scroll/framer-motion animations removed — static render for performance
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import FluidBackground from "@/components/FluidBackground";
import PageWrapper from "@/components/PageWrapper";
import { FiBriefcase, FiAward, FiCode, FiMapPin } from "react-icons/fi";

const experiences = [
  {
    id: 1,
    title: "Junior MERN Stack Developer",
    company: "Upwork & Fiverr",
    period: "2025 – Present",
    description: "Specializing in building high-performance, full-stack web applications using the MERN ecosystem. Focused on creating scalable architectures and seamless user experiences.",
    achievements: [
      "Developed and deployed 10+ full-stack applications for international clients.",
      "Implemented secure authentication systems using Better Auth and Next-Auth.",
      "Optimized database queries in MongoDB, resulting in a 30% improvement in load times.",
      "Integrated complex third-party APIs for payment gateways and social media."
    ],
    tech: ["Next.js", "React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Better Auth"],
    type: "Work"
  },
  {
    id: 2,
    title: "Junior Web Developer",
    company: "Upwork & Fiverr",
    period: "2023 – 2024",
    description: "Started my professional journey as a freelancer, delivering high-quality web solutions to clients worldwide. Focused on frontend excellence and responsive design.",
    achievements: [
      "Maintained a 5-star rating on freelance platforms through consistent delivery.",
      "Converted 50+ complex Figma designs into pixel-perfect React components.",
      "Built interactive UI components using Framer Motion and GSAP for premium branding.",
      "Collaborated with diverse clients to define project scopes and technical requirements."
    ],
    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "GSAP", "Framer Motion", "Figma"],
    type: "Work"
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "AB Agency",
    period: "2023 – 2024",
    description: "Bridged the gap between aesthetics and functionality by designing user-centric interfaces. Focused on accessibility and modern design trends.",
    achievements: [
      "Designed comprehensive design systems that improved development efficiency by 40%.",
      "Conducted user research and usability testing to iterate on product designs.",
      "Created high-fidelity prototypes that secured project approvals from stakeholders.",
      "Collaborated closely with developers to ensure design feasibility and implementation."
    ],
    tech: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"],
    type: "Design"
  },
  {
    id: 4,
    title: "Computer Expert & Trainer",
    company: "Bakshibonj Post E Center",
    period: "2018 – 2023",
    description: "Shared my knowledge of computing and IT with the local community, empowering students and professionals with essential digital skills.",
    achievements: [
      "Trained over 200+ students in basic computing and office productivity tools.",
      "Managed IT infrastructure and troubleshooting for the training center.",
      "Developed a customized curriculum for vocational computer training.",
      "Awarded 'Best Trainer' for three consecutive years based on student feedback."
    ],
    tech: ["IT Support", "Networking", "Office Suite", "Public Speaking", "Curriculum Development"],
    type: "Training"
  }
];

export default function ExperiencePage() {
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
          <main className="pt-24 md:pt-32 pb-24 px-4 md:px-6 min-h-screen overflow-hidden dot-grid">
            <div className="max-w-7xl mx-auto">
              {/* Hero Section */}
              <div className="text-center mb-24">
                <p className="text-brand text-xs uppercase tracking-[0.3em] font-bold mb-4">
                  Career Journey
                </p>
                <h1 className="text-5xl md:text-8xl font-bold text-white uppercase tracking-tighter">
                  Detailed <span className="italic font-serif text-brand">Experience</span>
                </h1>
                <p className="max-w-2xl mx-auto text-gray-400 mt-8 text-lg">
                  A timeline of my professional growth, key achievements, and the evolution of my technical expertise.
                </p>
              </div>

              {/* Timeline Container */}
              <div className="relative max-w-5xl mx-auto py-10 mt-10">
                {/* Vertical Line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2 rounded-full" />

                <div className="space-y-16 md:space-y-24">
                  {experiences.map((exp, index) => {
                    const isEven = index % 2 === 0;
                    return (
                      <div key={exp.id} className="relative flex flex-col md:flex-row items-center w-full group">
                        {/* Timeline Dot */}
                        <div className="absolute left-6 md:left-1/2 w-5 h-5 rounded-full bg-[#0A0A0A] border-[4px] border-brand md:-translate-x-1/2 z-10 group-hover:scale-150 group-hover:bg-brand group-hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] transition-all duration-500 top-12 md:top-1/2 md:-translate-y-1/2 -translate-x-[9px] md:-translate-x-1/2" />

                        {/* Card Container (Left or Right) */}
                        <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 flex md:justify-end' : 'md:pl-16 flex md:justify-start md:ml-auto'}`}>
                          <div className="w-full text-left bg-black/30 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-8 hover:border-brand/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-500 relative">
                            
                            {/* Type Badge */}
                            <div className="absolute top-6 right-6 flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/10 hidden sm:flex">
                              {exp.type === "Work" ? <FiBriefcase /> : exp.type === "Design" ? <FiAward /> : <FiCode />}
                              {exp.type}
                            </div>

                            <div className="mb-6">
                              <span className="text-brand font-bold text-xs uppercase tracking-widest block mb-2">{exp.period}</span>
                              <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-brand transition-colors pr-0 sm:pr-24">{exp.title}</h3>
                              <p className="text-gray-400 text-sm font-medium flex items-center gap-2 mt-2">
                                <FiMapPin className="text-brand/50 shrink-0" /> {exp.company}
                              </p>
                            </div>

                            <p className="text-gray-300 leading-relaxed mb-8 text-sm">{exp.description}</p>

                            <div className="space-y-4 mb-6">
                              <h4 className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                <FiAward className="text-brand" /> Key Achievements
                              </h4>
                              <ul className="space-y-3">
                                {exp.achievements.map((ach, i) => (
                                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 shrink-0" />
                                    <span>{ach}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="pt-6 border-t border-white/5 flex flex-wrap gap-2">
                              {exp.tech.map((t, i) => (
                                <span key={i} className="text-[10px] font-bold px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-300 group-hover:border-brand/50 transition-colors">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </PageWrapper>
      )}
    </>
  );
}
