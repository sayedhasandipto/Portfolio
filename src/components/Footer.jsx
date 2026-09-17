import { PERSON, NAV_LINKS } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white relative border-t-4 border-accent" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Brand & Bio */}
          <div className="sm:col-span-2 lg:col-span-6">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#6b7280]">
              <span className="w-2.5 h-2.5 bg-accent inline-block" />
              <span className="text-white font-bold">{PERSON.handle}</span>
              <span>//</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-white mt-4 leading-tight">
              SAYED HASAN<br />DIPTO
            </h3>

            <p className="mt-4 sm:mt-5 text-sm text-[#9ca3af] max-w-sm leading-relaxed font-sans">
              Full-stack engineer building scalable web products with the MERN stack. Available for full-time roles and contract work.
            </p>

            <div className="mt-6 sm:mt-8">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 border border-accent/40 font-mono text-[10px] uppercase tracking-widest text-accent hover:border-accent hover:bg-accent/5 transition-all">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                AVAILABLE FOR WORK
              </div>
            </div>
          </div>

          {/* Middle Column: Navigation */}
          <div className="sm:col-span-1 lg:col-span-3">
            <div className="font-mono text-xs uppercase tracking-widest mb-5 sm:mb-6 text-[#9ca3af]">
              <span className="text-accent">//</span> NAVIGATE
            </div>
            <ul className="space-y-3 font-sans text-sm text-[#9ca3af]">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className="hover:text-white transition-colors duration-150 inline-block">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Elsewhere & Direct */}
          <div className="sm:col-span-1 lg:col-span-3">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest mb-5 sm:mb-6 text-[#9ca3af]">
                <span className="text-accent">//</span> ELSEWHERE
              </div>
              <ul className="space-y-3 font-sans text-sm text-[#9ca3af]">
                <li>
                  <a href={PERSON.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-150 inline-block">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href={PERSON.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-150 inline-block">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={PERSON.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-150 inline-block">
                    Twitter / X
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-8 sm:mt-10">
              <div className="font-mono text-xs uppercase tracking-widest mb-3 text-[#9ca3af]">
                <span className="text-accent">//</span> DIRECT
              </div>
              <a
                href={`mailto:${PERSON.email}`}
                className="font-mono text-xs text-accent flex items-center gap-1.5 hover:underline break-all sm:break-normal"
              >
                {PERSON.email} <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-[#1f242c] flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] text-[#6b7280] uppercase tracking-widest text-center md:text-left">
          <div>
            © {year} {PERSON.name.toUpperCase()}
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent inline-block" />
            <span>BUILT WITH HTML / TAILWIND / JS</span>
            <span className="w-1.5 h-1.5 bg-accent inline-block" />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>DHAKA · GMT+6</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
