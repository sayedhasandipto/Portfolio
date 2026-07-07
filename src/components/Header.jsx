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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-lg border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5"
      }`}
    >
      <nav
        className={`max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 cursor-pointer" data-cursor="hover">
          <div
            className={`bg-brand rounded-full flex items-center justify-center font-bold text-xs text-dark hover:rotate-90 transition-all duration-300 ${
              scrolled ? "w-7 h-7" : "w-8 h-8"
            }`}
            style={{ boxShadow: scrolled ? "0 0 12px rgba(139, 92, 246,0.4)" : "none" }}
          >
            SH
          </div>
          <span className="font-bold tracking-tighter text-sm md:text-xl text-white uppercase truncate max-w-[120px] md:max-w-none">
            SAYED HASAN DIPTO
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-400 relative">
          {navLinks.map((link) => (
            <li
              key={link.name}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
              className="relative"
            >
              <Link
                href={link.href}
                className={`relative z-10 px-2 py-1 transition-colors duration-200 ${
                  hoveredLink === link.name ? "text-dark" : ""
                }`}
                data-cursor="hover"
              >
                {link.name}
              </Link>
              {hoveredLink === link.name && (
                <div className="absolute inset-0 bg-gray-100 rounded-md -z-0 transition-all" />
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-6">
          <div className="relative hidden sm:block">
            <Link href="/#contact" data-cursor="hover">
              <div
                className={`bg-brand text-dark px-4 md:px-8 py-2 md:py-3 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-brand/90 transition-all shadow-lg hover:scale-105 duration-200 ${
                  scrolled ? "shadow-[0_0_15px_rgba(139, 92, 246,0.3)]" : ""
                }`}
              >
                Get In Touch
              </div>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-cursor="hover"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A]/95 backdrop-blur-lg border-b border-white/5">
          <ul className="flex flex-col p-6 gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-xl font-bold text-white uppercase tracking-tighter hover:text-brand transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-4 border-t border-white/5">
              <Link
                href="https://www.linkedin.com/in/sayedhasandipto/"
                target="_blank"
                className="text-brand font-bold uppercase text-xs tracking-widest"
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
