import { motion } from "framer-motion";

export function SpecialtyCard({
  label,
  icon,
  description,
  color = "#3b82f6",
  technologies = [],
  index = 0,
}) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all group relative h-full"
      whileHover={{
        y: -8,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Colored top border */}
      <div className="h-2 w-full" style={{ backgroundColor: color }} />

      <div className="p-6">
        {/* Icon with color background */}
        <div className="mb-6 flex justify-center">
          <motion.div
            className="w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg"
            style={{ backgroundColor: color }}
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2 + index * 0.1,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
          >
            {icon}
          </motion.div>
        </div>

        {/* Title */}
        <h3
          className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100"
          style={{ color }}
        >
          {label}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.map((tech, i) => (
            <motion.span
              key={tech}
              className="text-xs font-medium px-3 py-1 rounded-full text-gray-600 bg-gray-100 dark:text-gray-300 dark:bg-gray-700"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 + i * 0.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

      {/* Learn more link */}
      <div
        className="p-4 text-center border-t border-gray-100 dark:border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ color }}
      >
        <a
          href="#"
          className="text-sm font-medium flex items-center justify-center"
        >
          Learn more
          <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
}
