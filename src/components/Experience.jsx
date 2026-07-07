"use client";

// All scroll animations removed — static render
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  const data = [
    {
      period: "2018 – 2023",
      items: [
        { title: "Computer Expert & Trainer", subtitle: "Bakshibonj Post E Center" },
        { title: "Secondary School Certificate (SSC)", subtitle: "Humanities" },
      ]
    },
    {
      period: "2023 — 2024",
      items: [
        { title: "Higher Secondary Certificate (HSC)", subtitle: "UI/UX Designer at AB" },
        { title: "Junior Web Developer", subtitle: "Upwork & Fiverr" },
      ]
    },
    {
      period: "2025 – Present",
      items: [
        { title: "Junior MERN stack Developer", subtitle: "Upwork & Fiverr" },
        { title: "Full-Stack Web Development", subtitle: "Building Modern Web Ecosystems" },
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden bg-transparent" data-purpose="education-and-experience">

      <div className="max-w-7xl mx-auto">
        <ScrollReveal delay={0}>
          <h2 className="text-center font-serif text-4xl mb-20 italic text-white">
            Education &amp; Experience
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {data.map((col, index) => (
            <ScrollReveal key={index} delay={index * 150} className="flex flex-col relative">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-6">
                {col.period}
              </span>
              <div className="space-y-8">
                {col.items.map((item, i) => (
                  <Link key={i} href="/experience" className="block">
                    <div className="relative cursor-pointer group pl-4 border-l-2 border-transparent hover:border-brand transition-all hover:translate-x-2 duration-200 shadow-[0_0_0_rgba(139, 92, 246,0)] hover:shadow-[-5px_0_15px_-5px_rgba(139, 92, 246,0.3)]">
                      <h4 className="font-semibold text-lg mb-1 group-hover:text-brand transition-colors text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-400">{item.subtitle}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={450} className="text-center">
          <Link href="/experience">
            <button className="text-xs uppercase tracking-widest border border-white/20 px-8 py-3 rounded-full hover:border-brand hover:text-brand transition-all text-white shadow-[0_0_0_rgba(139, 92, 246,0)] hover:shadow-[0_0_15px_rgba(139, 92, 246,0.2)]">
              Explore Detailed Career History →
            </button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
