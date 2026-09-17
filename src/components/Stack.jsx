"use client";

import { useEffect, useRef } from "react";
import { Database, Server, LayoutGrid, Cpu } from "lucide-react";
import { STACK, TOOLKIT } from "@/lib/data";

const ICONS = { database: Database, server: Server, "layout-grid": LayoutGrid, cpu: Cpu };

export default function Stack() {
  const revealRef = useRef([]);
  const skillBarRef = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("show"); obs.unobserve(e.target); }
        });
      },
      { threshold: 0.08 }
    );
    revealRef.current.forEach((el) => el && obs.observe(el));

    const skillObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("animated"); skillObs.unobserve(e.target); }
        });
      },
      { threshold: 0.3 }
    );
    skillBarRef.current.forEach((el) => el && skillObs.observe(el));

    return () => { obs.disconnect(); skillObs.disconnect(); };
  }, []);

  const addReveal = (el) => { if (el && !revealRef.current.includes(el)) revealRef.current.push(el); };
  const addSkill = (el) => { if (el && !skillBarRef.current.includes(el)) skillBarRef.current.push(el); };

  return (
    <div className="dark-canvas white-grid">
      <section id="stack" className="relative py-24 px-4 sm:px-8 lg:px-12 text-white">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal" ref={addReveal}>
            <div>
              <span className="label-accent">// 02 — Architecture</span>
              <h2 className="mt-4 text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">
                The MERN Engine
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/55">
              A JavaScript-first stack spanning data, APIs, application state and the browser.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STACK.map((item) => {
              const Icon = ICONS[item.icon] || Database;
              return (
                <article
                  key={item.name}
                  className={`stack-card p-6 border-t-2 ${item.accent ? "border-t-accent" : "border-t-white"} reveal`}
                  ref={addReveal}
                >
                  <div className="flex justify-between font-mono text-[10px] text-white/45 relative z-10">
                    <span>{item.num}</span>
                    <Icon className={`w-5 h-5 ${item.accent ? "text-accent" : "text-white"}`} />
                  </div>
                  <h3 className="mt-8 text-2xl font-bold relative z-10 text-white">{item.name}</h3>
                  <p className="mt-3 text-sm text-white/55 leading-relaxed relative z-10">{item.desc}</p>
                  <div className="mt-6 relative z-10">
                    <div className="flex justify-between font-mono text-[9px] uppercase text-white/45 mb-1.5">
                      <span>Proficiency</span>
                      <span>{item.proficiency}%</span>
                    </div>
                    <div
                      className="skill-bar"
                      ref={addSkill}
                    >
                      <div
                        className={`skill-bar-fill${item.accent ? "" : " white"}`}
                        style={{ "--val-num": item.proficiency / 100 }}
                      />
                    </div>
                  </div>
                  <div className={`mt-5 pt-4 border-t border-white/10 font-mono text-[10px] relative z-10 ${item.accent ? "text-accent" : "text-white/75"}`}>
                    ● {item.layer} · {item.years}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-5 glass p-5 flex flex-wrap gap-2 reveal" ref={addReveal}>
            <span className="font-mono text-[10px] text-white/45 mr-2 self-center uppercase">
              Toolkit //
            </span>
            {TOOLKIT.map((t) => (
              <span key={t} className="tag text-white/85 font-mono text-[10px]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
