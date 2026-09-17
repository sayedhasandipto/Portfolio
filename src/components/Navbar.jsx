"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Volume2, VolumeX } from "lucide-react";
import { NAV_LINKS, PERSON } from "@/lib/data";
import { playClick, isSoundEnabled, setSoundEnabled } from "@/lib/sound";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [soundOn, setSoundOn] = useState(true);
  const navRef = useRef(null);

  useEffect(() => {
    setSoundOn(isSoundEnabled());
    const onToggle = () => setSoundOn(isSoundEnabled());
    window.addEventListener("sound-toggle", onToggle);
    return () => window.removeEventListener("sound-toggle", onToggle);
  }, []);

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
    if (next) playClick();
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-5 lg:px-10 pt-3">
      <nav
        ref={navRef}
        className="max-w-7xl mx-auto glass-light backdrop-blur-2xl border border-black/15 flex items-center justify-between px-4 sm:px-6 py-3 shadow-sm"
      >
        <a
          href="/"
          onClick={playClick}
          className="font-mono text-sm sm:text-base font-medium tracking-tight flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 bg-black" />
          {PERSON.handle}
          <span className="hidden sm:inline">//</span>
        </a>

        <div className="hidden lg:flex items-center gap-7 font-mono text-[11px] uppercase tracking-widest">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={playClick}
              className={`nav-link${activeId === link.id ? " active" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleSound}
            title={soundOn ? "Mute retro sound FX" : "Enable retro sound FX"}
            aria-label={soundOn ? "Mute sound" : "Enable sound"}
            className="hidden sm:inline-flex items-center justify-center w-8 h-8 font-mono text-[10px] text-ink/60 hover:text-accent transition border border-black/10 hover:border-accent/40 bg-white/40"
          >
            {soundOn ? <Volume2 className="w-3.5 h-3.5 text-accent" /> : <VolumeX className="w-3.5 h-3.5 text-ink/40" />}
          </button>

          <a
            href={PERSON.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            className="hidden md:inline-flex border-2 border-ink bg-white px-3.5 py-2 font-mono text-[11px] uppercase tracking-wider font-bold text-ink shadow-[2px_2px_0_#080a0d] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
          >
            Resume ↗
          </a>

          <a
            href="#contact"
            onClick={playClick}
            className="hidden sm:inline-flex bg-ink text-white px-4 py-2 font-mono text-[11px] uppercase hover:bg-accent hover:text-white transition"
          >
            Start a project ↗
          </a>
        </div>

        <button
          id="menuBtn"
          className="lg:hidden p-1"
          aria-label="Open menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div
          id="mobileMenu"
          className="lg:hidden max-w-7xl mx-auto mt-2 bg-ink/90 backdrop-blur-2xl text-white border border-white/15 p-5 font-mono text-xs uppercase tracking-widest"
        >
          <div className="grid gap-1">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.id}
                href={link.href}
                onClick={closeMenu}
                className={`py-3 ${i < NAV_LINKS.length - 1 ? "border-b border-white/10" : "text-accent"}`}
              >
                {link.label}
                {i === NAV_LINKS.length - 1 && " ↗"}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
