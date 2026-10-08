import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import "./studio.css";
import "./refinements.css";

const editorial = localFont({ src: [
  { path: "../public/fonts/Newsreader-400-normal.ttf", weight: "400", style: "normal" },
  { path: "../public/fonts/Newsreader-500-normal.ttf", weight: "500", style: "normal" },
  { path: "../public/fonts/Newsreader-600-normal.ttf", weight: "600", style: "normal" },
  { path: "../public/fonts/Newsreader-400-italic.ttf", weight: "400", style: "italic" }
], variable: "--font-serif", display: "swap" });
const mono = localFont({ src: [{ path: "../public/fonts/IBMPlexMono-400-normal.ttf", weight: "400" }], variable: "--font-mono", display: "swap" });
const sans = localFont({ src: [{ path: "../public/fonts/NimbusSans-Regular.otf", weight: "400", style: "normal" }, { path: "../public/fonts/NimbusSans-Bold.otf", weight: "700", style: "normal" }], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Nahin Intesher", template: "%s · Nahin Intesher" },
  description:
    "Academic portfolio of Nahin Intesher — final-trimester CSE student at United International University, interested in teaching, research, computer vision, human-computer interaction, and assistive technology.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F3F1E9" },
    { media: "(prefers-color-scheme: dark)", color: "#171D18" },
  ],
};

/* Runs before first paint: restore saved theme from localStorage,
   otherwise follow the OS preference. Prevents theme flash. */
const themeInit = `(function(){try{document.documentElement.classList.add('js');var s=localStorage.getItem('theme');var t=(s==='light'||s==='dark')?s:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');var d=t==='dark';document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=t}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${editorial.variable} ${mono.variable} ${sans.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
