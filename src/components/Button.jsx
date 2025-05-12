import { motion } from "framer-motion";
import Link from "next/link";

export function Button({
  href,
  children,
  variant = "outline",
  className = "",
}) {
  const isFilled = variant === "filled";

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-block ${className}`}
    >
      <Link
        href={href}
        role="button"
        tabIndex={0}
        className={`
          inline-block text-center font-semibold
          px-6 py-2 sm:px-8 sm:py-3
          text-xs sm:text-sm md:text-base
          rounded-lg transition-all duration-300 shadow-md
          ${
            isFilled
              ? "bg-emerald-500 text-gray-100 hover:bg-emerald-600"
              : "bg-transparent text-gray-200 border-2 border-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-400"
          }
        `}
      >
        {children}
      </Link>
    </motion.div>
  );
}
