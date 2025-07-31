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
  image: "/public/images/profilePic.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/profilePic.png" type="image/png" />
      </head>
      <body className={`${quicksand.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
