"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] md:w-[90%] max-w-5xl ${
        scrolled
          ? "top-4 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
          : "top-6 bg-black/10 backdrop-blur-md border border-white/5 rounded-[2rem]"
      }`}
    >
      <nav
        className={`px-4 md:px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 cursor-pointer group" data-cursor="hover">
          <div
            className={`rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 bg-black text-white border border-white/20 group-hover:bg-white group-hover:text-black group-hover:scale-110 ${
              scrolled ? "w-8 h-8" : "w-10 h-10"
            }`}
            style={{ boxShadow: scrolled ? "0 0 12px rgba(255, 255, 255, 0.2)" : "none" }}
          >
            SH
          </div>
          <span className="font-bold tracking-widest text-xs md:text-sm text-white uppercase truncate max-w-[120px] md:max-w-none group-hover:text-white transition-colors">
            Sayed Hasan Dipto
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
          {navLinks.map((link) => (
            <li
              key={link.name}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
              className="relative"
            >
              <Link
                href={link.href}
                className={`relative z-10 px-3 py-2 transition-colors duration-300 ${
                  hoveredLink === link.name ? "text-white" : ""
                }`}
                data-cursor="hover"
              >
                {link.name}
              </Link>
              {hoveredLink === link.name && (
                <div className="absolute inset-0 bg-white/10 rounded-full -z-0 transition-all" />
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="relative hidden sm:block">
            <Link href="/#contact" data-cursor="hover">
              <div
                className={`relative overflow-hidden bg-brand text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest group-hover:text-white transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] z-10 ${
                  scrolled ? "shadow-[0_0_15px_rgba(139, 92, 246,0.3)]" : ""
                }`}
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-brand opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0" />
              </div>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-cursor="hover"
          >
            {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full mt-4 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          <ul className="flex flex-col p-6 gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-lg font-bold text-white uppercase tracking-widest hover:text-brand transition-colors block text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-6 border-t border-white/10 text-center">
              <Link
                href="https://www.linkedin.com/in/sayedhasandipto/"
                target="_blank"
                className="text-brand font-black uppercase text-[10px] tracking-[0.2em] px-6 py-3 bg-brand/10 rounded-full inline-block"
              >
                Connect on LinkedIn →
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
