import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 text-white"
      style={{ background: "#080a0d" }}
    >
      {/* Grid background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 text-center max-w-xl">
        {/* Big outline 404 */}
        <p
          className="font-bold leading-none select-none"
          style={{
            fontSize: "clamp(7rem,22vw,14rem)",
            WebkitTextStroke: "2px rgba(255,95,31,0.5)",
            color: "transparent",
            fontVariantNumeric: "tabular-nums",
            letterSpacing: "-0.04em",
          }}
        >
          404
        </p>

        <div className="mt-2 mb-8" style={{ borderTop: "2px solid #ff5f1f" }} />

        <span className="font-mono text-[9px] uppercase tracking-widest text-accent block mb-4">
          // Error — Route not found
        </span>

        <h1 className="text-2xl sm:text-3xl font-bold uppercase text-white mb-4">
          Project Not Found
        </h1>

        <p className="text-white/45 text-sm leading-relaxed mb-10 font-mono">
          The case study you are looking for does not exist or may have been moved.
          Check the slug or return to the work section.
        </p>

        <Link
          href="/#work"
          id="not-found-back-link"
          className="inline-flex items-center gap-2 px-6 py-3 font-mono text-[10px] uppercase font-bold text-white hover:opacity-85 transition"
          style={{ background: "#ff5f1f" }}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Work
        </Link>
      </div>
    </div>
  );
}
