import { motion } from "framer-motion";

export function Section({ children, className, bgWhite = false }) {
  return (
    <section
      className={`py-10 sm:py-16 lg:py-20 w-full ${
        bgWhite ? "bg-white bg-opacity-40 backdrop-blur-sm" : ""
      } ${className || ""}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
