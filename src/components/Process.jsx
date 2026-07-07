// Process — CSS hover effects, ScrollReveal for entrance animations
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    desc: "Understanding your vision, business goals, and target audience to build a solid foundation.",
  },
  {
    number: "02",
    title: "Design & UX",
    desc: "Creating intuitive interfaces and seamless user experiences that reflect your brand identity.",
  },
  {
    number: "03",
    title: "Development",
    desc: "Building scalable, high-performance applications using the latest MERN stack technologies.",
  },
  {
    number: "04",
    title: "Testing & Launch",
    desc: "Rigorous testing and optimization to ensure a flawless launch and long-term success.",
  },
];

export default function Process() {
  return (
    <section className="py-24 px-6 bg-transparent relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal delay={0}>
          <div className="mb-20">
            <p className="text-brand text-xs uppercase tracking-[0.3em] font-bold mb-4">My Workflow</p>
            <h2 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter">
              How I <span className="italic font-serif text-brand">Work</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="relative p-8 bg-white/[0.03] border border-white/10 rounded-3xl hover:border-brand/40 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(139, 92, 246,0.08)] transition-all duration-500 group h-full">
                <span className="text-6xl font-bold text-white/5 absolute top-4 right-8 group-hover:text-brand/15 transition-colors duration-500">
                  {step.number}
                </span>
                <div className="w-10 h-10 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center mb-6 group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                  <span className="text-brand group-hover:text-dark font-black text-sm transition-colors duration-300">
                    {step.number}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-brand transition-colors duration-300">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
