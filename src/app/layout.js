import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ClickEffect from "@/components/ClickEffect";
import NoiseOverlay from "@/components/NoiseOverlay";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "Sayed Hasan Dipto | MERN Stack Developer & UI/UX Designer",
  description: "Specialized in building high-performance Next.js applications with premium animations and intuitive user experiences.",
  keywords: ["Next.js", "React", "Full-Stack Developer", "UI/UX Designer", "MERN Stack", "GSAP Animations"],
  authors: [{ name: "Sayed Hasan Dipto" }],
  icons: {
    icon: [
      { url: "https://i.ibb.co/wZVXT6Yd/m1.png" },
      { url: "https://i.ibb.co/wZVXT6Yd/m1.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: ["https://i.ibb.co/wZVXT6Yd/m1.png"],
    apple: [
      { url: "https://i.ibb.co/wZVXT6Yd/m1.png" },
      { url: "https://i.ibb.co/wZVXT6Yd/m1.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Sayed Hasan Dipto | Portfolio",
    description: "Creative MERN Stack Developer specialized in the modern web ecosystem.",
    url: "https://sayedhasandipto.vercel.app",
    siteName: "Sayed Hasan Dipto Portfolio",
    images: [
      {
        url: "https://i.ibb.co/wZVXT6Yd/m1.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sayed Hasan Dipto | Portfolio",
    description: "Creative MERN Stack Developer specialized in the modern web ecosystem.",
    images: ["https://i.ibb.co/wZVXT6Yd/m1.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${playfair.variable} bg-[#0A0A0A] text-white font-sans selection:bg-brand selection:text-dark antialiased relative min-h-screen`}
      >
        <div className="relative min-h-screen">
          <CustomCursor />
          <ClickEffect />
          <NoiseOverlay />
          {children}
        </div>

        {/* JSON-LD Structured Data for Google SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sayed Hasan Dipto",
              "url": "https://sayedhasandipto.com",
              "jobTitle": "MERN Stack Developer",
              "description": "Specialized in building high-performance MERN stack applications with premium animations and intuitive user experiences.",
              "sameAs": [
                "https://www.linkedin.com/in/sayedhasandipto/",
                "https://github.com/sayedhasandipto"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
