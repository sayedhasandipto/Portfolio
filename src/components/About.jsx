"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PERSON, ABOUT_CARDS, NOW } from "@/lib/data";

function useClock(tz) {
  const [time, setTime] = useState("--:--:--");
  useEffect(() => {
    const tick = () => {
      try {
        setTime(
          new Date().toLocaleTimeString("en-GB", {
            timeZone: tz,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
          })
        );
      } catch {
        setTime(new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }));
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [tz]);
  return time;
}

function useGitHubStats() {
  const [stats, setStats] = useState({ repos: 78, followers: 3, following: 5, since: 2023 });
  useEffect(() => {
    fetch("/api/github")
      .then((r) => r.json())
      .then((d) => setStats(d))
      .catch((err) => console.error("Stats fetch failed:", err));
  }, []);
  return stats;
}

export default function About() {
  const time = useClock(PERSON.timezoneTZ);
  const ghStats = useGitHubStats();
  const revealRef = useRef([]);

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
    return () => obs.disconnect();
  }, []);

  const addReveal = (el) => {
    if (el && !revealRef.current.includes(el)) revealRef.current.push(el);
  };

  return (
    <div className="dark-canvas white-grid">
      <section
        id="about"
        className="relative py-24 px-4 sm:px-8 lg:px-12 text-white crosshair-container"
      >
        <span className="corner-mark corner-tl" style={{ color: "rgba(255,255,255,.35)" }} />
        <span className="corner-mark corner-tr" style={{ color: "rgba(255,255,255,.35)" }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 reveal" ref={addReveal}>
              <span className="label-accent">// 01 — Profile</span>
              <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight uppercase text-white">
                Less noise.
                <br />
                More system.
              </h2>
            </div>
            <div className="lg:col-span-8 reveal" ref={addReveal}>
              <p className="text-xl sm:text-2xl leading-relaxed text-white/80 max-w-4xl">
                I like turning messy requirements into clear interfaces, predictable APIs,
                maintainable data models and deployable products.
              </p>

              <div className="my-8 flex flex-wrap items-center gap-4">
                <div className="live-widget">
                  <span className="pulse" />
                  <span>DHAKA · {time}</span>
                  <span className="text-accent">·</span>
                  <span>Available</span>
                </div>
              </div>

              <div className="my-8 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

              <div className="grid sm:grid-cols-3 gap-4">
                {ABOUT_CARDS.map((card) => (
                  <div
                    key={card.num}
                    className="glass p-5 relative overflow-hidden group hover:border-accent/50 transition"
                  >
                    <div className="font-mono text-accent text-xs">{card.num}</div>
                    <h3 className="mt-3 font-semibold text-white">{card.title}</h3>
                    <p className="mt-2 text-sm text-white/55 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* GitHub stats */}
          <div className="mt-16 reveal" ref={addReveal}>
            <div className="flex items-center justify-between mb-4">
              <span className="label-accent">// Open source activity</span>
              <a
                href={PERSON.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] uppercase tracking-widest text-white/50 hover:text-accent transition inline-flex items-center gap-1.5"
              >
                View GitHub <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
            <div className="gh-strip">
              {[
                { key: "repos", label: "// Repositories" },
                { key: "followers", label: "// Followers" },
                { key: "following", label: "// Following" },
                { key: "since", label: "// Since" },
              ].map(({ key, label }) => (
                <div key={key} className="gh-cell">
                  <div className="lbl">{label}</div>
                  <div className={`val${ghStats[key] === "—" ? " loading" : ""}`}>
                    {ghStats[key]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Now strip */}
          <div className="mt-16 reveal" ref={addReveal}>
            <div className="now-strip p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="flex items-center gap-2 shrink-0">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  // Now
                </span>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 flex-1 text-xs font-mono">
                <div>
                  <div className="text-white/45 uppercase text-[9px] tracking-widest mb-1">
                    Learning
                  </div>
                  <div className="text-white/90">{NOW.learning}</div>
                </div>
                <div>
                  <div className="text-white/45 uppercase text-[9px] tracking-widest mb-1">
                    Building
                  </div>
                  <div className="text-white/90">{NOW.building}</div>
                </div>
                <div>
                  <div className="text-white/45 uppercase text-[9px] tracking-widest mb-1">
                    Reading
                  </div>
                  <div className="text-white/90">{NOW.reading}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
