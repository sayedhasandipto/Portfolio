// Partners — infinite CSS marquee with pause-on-hover, no JS overhead

const partners = [
  "HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS",
  "VS Code", "Netlify", "Node.js", "MongoDB", "Firebase",
  "Git & GitHub", "Figma", "UI/UX Design", "Better Auth", "API Integration",
];

// Duplicate for seamless loop
const items = [...partners, ...partners];

export default function Partners() {
  return (
    <section
      className="py-20 bg-transparent overflow-hidden border-y border-white/5 relative"
      data-purpose="trusted-partners"
    >

      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
        <h3 className="text-center font-serif text-3xl italic text-gray-400">
          Skill&apos;s I&apos;ve Mastered
        </h3>
      </div>

      {/* Fade edges */}
      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #050505, transparent)" }} />
        <div className="absolute right-0 top-0 h-full w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #050505, transparent)" }} />

        <div
          className="flex whitespace-nowrap group"
          style={{ animation: "marquee 35s linear infinite" }}
        >
          {items.map((skill, index) => (
            <div
              key={index}
              data-cursor="hover"
              className="mx-3 bg-black/30 backdrop-blur-xl px-10 py-6 rounded-2xl flex items-center justify-center border border-white/8 hover:border-brand/50 hover:bg-white/[0.08] hover:shadow-[0_0_20px_rgba(139, 92, 246,0.1)] transition-all duration-300 group/item min-w-fit flex-shrink-0"
              style={{ animationPlayState: "inherit" }}
            >
              <span className="font-bold text-xl opacity-25 group-hover/item:opacity-100 group-hover/item:text-brand transition-all duration-300 text-white whitespace-nowrap">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .group:hover > div {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
