import "@/style/globals.css";
import { Quicksand } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Nahin Intesher - Portfolio",
  description: "Problem Solver & Dedicated Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/CodeScriba.png" type="image/png" />
      </head>
      <body
        className={`${quicksand.className} bg-[#E7F5DC] text-[#112B13] flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow min-w-screen">
          <AnimatePresence mode="wait">{children}</AnimatePresence>
        </main>
        <Footer />
      </body>
    </html>
  );
}
