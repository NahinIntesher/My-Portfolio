import { ContentProvider } from "@/components/ContentProvider";

import { getContent } from "@/lib/content-store";

import type { Metadata, Viewport } from "next";

import localFont from "next/font/local";

import Header from "@/components/Header";

import Footer from "@/components/Footer";
import LiveBackground from "@/components/LiveBackground";

import "./globals.css";

import "./studio.css";

import "./refinements.css";

import "./production.css";
import "./observatory.css";
import "./neutral-theme.css";
import "./typography.css";



const editorial = localFont({ src: [

  { path: "../public/fonts/Newsreader-400-normal.ttf", weight: "400", style: "normal" },

  { path: "../public/fonts/Newsreader-500-normal.ttf", weight: "500", style: "normal" },

  { path: "../public/fonts/Newsreader-600-normal.ttf", weight: "600", style: "normal" },



], variable: "--font-serif", display: "swap" });

const mono = localFont({ src: [{ path: "../public/fonts/IBMPlexMono-400-normal.ttf", weight: "400" }], variable: "--font-mono", display: "swap" });

const balooDa2 = localFont({ src: [{ path: "../public/fonts/BalooDa2-Variable.ttf", weight: "400 800", style: "normal" }], variable: "--font-sans", display: "swap" });



export async function generateMetadata(): Promise<Metadata> {

  const {profile,heroBio}=await getContent();

  return {title:{default:profile.name,template:`%s · ${profile.name}`},description:heroBio};

}



export const viewport: Viewport = {

  themeColor: [

    { media: "(prefers-color-scheme: light)", color: "#F3F1E9" },

    { media: "(prefers-color-scheme: dark)", color: "#101112" },

  ],

};



/* Runs before first paint: restore saved theme from localStorage,

   otherwise follow the OS preference. Prevents theme flash. */

const themeInit = `(function(){try{document.documentElement.classList.add('js');var s=localStorage.getItem('theme');var t=(s==='light'||s==='dark')?s:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');var d=t==='dark';document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=t}catch(e){}})()`;



export const dynamic = "force-dynamic";



export default async function RootLayout({ children }: { children: React.ReactNode }) {

  const content = await getContent();

  return (

    <html lang="en" suppressHydrationWarning className={`${editorial.variable} ${mono.variable} ${balooDa2.variable}`}>

      <head>

        <script dangerouslySetInnerHTML={{ __html: themeInit }} />

      </head>

      <body>

        <a className="skip-link" href="#main">Skip to content</a>

        <ContentProvider content={content}>

        <LiveBackground />
        <Header />

        <main id="main">{children}</main>

        <Footer />

        </ContentProvider>

      </body>

    </html>

  );

}

