import { motion } from "framer-motion";

export function LearningTimelineItem({
  topic,
  resources,
  index = 0,
  isEven = false,
}) {
  const cardAnimation = {
    hidden: {
      opacity: 0,
      x: isEven ? -30 : 30,
      y: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        type: "spring",
        stiffness: 70,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={cardAnimation}
      className="relative"
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
    >
      {/* Connecting line visible only on medium+ screens */}
      <div className="absolute hidden md:block h-px w-12 bg-gradient-to-r from-blue-400 to-transparent top-10 left-1/2 transform -translate-x-1/2"></div>

      {/* Card */}
      <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-4 sm:p-5 md:p-6 shadow-xl border border-blue-100 dark:border-gray-700 backdrop-blur-sm hover:shadow-blue-500/10 transition-all duration-300">
        {/* Decorative gradient bar */}
        <div className="w-full h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 mb-4"></div>

        {/* Topic title with responsive font size */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-gray-50 line-clamp-2">
          {topic}
        </h3>

        {/* Resources section with icon */}
        <div className="flex items-start gap-2 mt-2">
          <div className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3.586l2.707 2.707a1 1 0 01-1.414 1.414l-3-3A1 1 0 019 10V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Resources content with responsive text */}
          <div className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Resources:
            </span>{" "}
            {resources}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
