import { motion } from "framer-motion";

export function Card({ children, className, hover = true, accentColor }) {
  return (
    <motion.div
      className={`relative overflow-hidden bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg ${className || ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? {
        y: -8,
        boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.15)",
      } : {}}
      transition={{ 
        duration: 0.4,
        ease: "easeOut" 
      }}
    >
      {/* Accent color border */}
      <div 
        className="absolute top-0 left-0 w-full h-1 opacity-80"
        style={{ backgroundColor: accentColor || "#3b82f6" }}
      />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black/5 dark:from-white/5 dark:to-black/20 pointer-events-none" />
      
      {/* Glass effect */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}