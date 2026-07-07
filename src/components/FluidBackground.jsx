// FluidBackground — Optimized CSS ambient background
export default function FluidBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] bg-[#0A0A0A] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.15] blur-[100px] transform-gpu">
        <div
          className="absolute rounded-full bg-brand"
          style={{
            width: "50vw",
            height: "50vw",
            top: "10%",
            left: "-10%",
            animation: "floatA 20s ease-in-out infinite alternate",
            willChange: "transform",
          }}
        />
        <div
          className="absolute rounded-full bg-brand"
          style={{
            width: "40vw",
            height: "40vw",
            top: "40%",
            right: "-10%",
            animation: "floatB 25s ease-in-out infinite alternate",
            willChange: "transform",
          }}
        />
      </div>
      <style>{`
        @keyframes floatA {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(10vw, 10vh) scale(1.2); }
        }
        @keyframes floatB {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(-10vw, 5vh) scale(0.9); }
        }
      `}</style>
    </div>
  );
}
