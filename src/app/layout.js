import { Space_Grotesk, DM_Mono } from "next/font/google";

import "./globals.css";
import ProgressBar from "@/components/ProgressBar";
import CustomCursor from "@/components/CustomCursor";
import BackToTop from "@/components/BackToTop";
import TerminalLoader from "@/components/TerminalLoader";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata = {
  title: "Sayed Hasan Dipto — MERN Stack Developer",
  description:
    "Sayed Hasan Dipto — MERN Stack Developer building practical, scalable web products with React, Node.js, Express and MongoDB.",
  keywords: [
    "MERN Stack",
    "Full Stack Developer",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Next.js",
    "Sayed Hasan Dipto",
  ],
  authors: [{ name: "Sayed Hasan Dipto" }],
  // themeColor moved to viewport export below
  openGraph: {
    title: "Sayed Hasan Dipto — MERN Stack Developer",
    description:
      "Full-stack engineer building scalable web products with the MERN stack.",
    url: "https://sayedhasandipto.vercel.app",
    siteName: "Sayed Hasan Dipto Portfolio",
    images: [
      {
        url: "https://i.ibb.co.com/ymYj65ML/passport-size.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sayed Hasan Dipto — MERN Stack Developer",
    description:
      "Full-stack engineer building scalable web products with the MERN stack.",
    images: ["https://i.ibb.co.com/ymYj65ML/passport-size.png"],
  },
};

// Fix Next.js 16 warning: themeColor must be in viewport export
export const viewport = {
  themeColor: "#131619",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <a href="#about" className="skip-link">
          Skip to content
        </a>
        <ProgressBar />
        <CustomCursor />
        {children}
        <BackToTop />
        <TerminalLoader />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sayed Hasan Dipto",
              url: "https://sayedhasandipto.vercel.app",
              jobTitle: "MERN Stack Developer",
              description:
                "Full-stack engineer building scalable web products with React, Node.js, Express and MongoDB.",
              sameAs: [
                "https://www.linkedin.com/in/sayedhasandipto/",
                "https://github.com/sayedhasandipto",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}

