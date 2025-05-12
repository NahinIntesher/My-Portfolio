import { motion } from "framer-motion";

export function SectionTitle({ children, className }) {
  return (
    <motion.h2
      className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900 dark:text-gray-50 ${className || ""}`}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center gap-4">
        <div className="hidden sm:block h-0.5 w-6 bg-blue-600 dark:bg-blue-400" />
        {children}
        <div className="hidden sm:block h-0.5 w-6 bg-blue-600 dark:bg-blue-400" />
      </div>
    </motion.h2>
  );
}
