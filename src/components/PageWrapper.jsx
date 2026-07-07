// PageWrapper — CSS fade-in on mount (no framer-motion)
export default function PageWrapper({ children }) {
  return (
    <div
      style={{
        animation: "pageFadeIn 0.5s ease-out forwards",
      }}
    >
      {children}
      <style>{`
        @keyframes pageFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
