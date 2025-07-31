// components/AchievementCard.tsx
"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const AchievementCard = ({ achievement, index }) => {
  return (
    <div className="group relative">
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-emerald-400/20 to-emerald-600/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.02 }}
        className="relative bg-gray-800/95 backdrop-blur-sm border border-gray-700/50 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 hover:border-emerald-500/30"
      >
        {/* Achievement badge */}
        <div className="absolute top-4 right-4">
          <div className="bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 rounded-2xl px-3 py-1.5">
            <span className="text-emerald-300 text-xs font-semibold flex items-center gap-1.5">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              Achievement
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex items-start mb-6 relative z-10">
          {/* Icon container with enhanced styling */}
          <div className="flex-shrink-0 mr-6">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border border-emerald-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:from-emerald-500/30 group-hover:to-emerald-600/30 transition-all duration-500">
              <FontAwesomeIcon
                icon={achievement.icon || faAward}
                className="text-2xl text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-100 transition-colors duration-300">
              {achievement.title}
            </h2>

            {/* Date badge */}
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1.5 text-xs font-semibold text-gray-300 bg-gray-700/50 border border-gray-600/50 rounded-xl backdrop-blur-sm">
                {achievement.date || "Achievement"}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
          {achievement.description}
        </p>

        {/* Action link */}
        {achievement.link && (
          <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              <span className="text-emerald-400 font-medium">
                Verified Achievement
              </span>
            </div>

            <motion.a
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-all duration-300 hover:gap-3 group-hover:text-emerald-300"
              aria-label={`View more about ${achievement.title}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Details
              <svg
                className="w-4 h-4 transition-transform duration-300 hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.a>
          </div>
        )}

        {/* Decorative elements */}
        <div className="absolute top-8 left-8 w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>

        {/* Subtle animated border effect */}
        <div
          className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/0 via-emerald-400/20 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              "conic-gradient(from 0deg, transparent, rgba(16, 185, 129, 0.1), transparent, rgba(16, 185, 129, 0.1), transparent)",
            animation: "spin 10s linear infinite",
            maskImage:
              "linear-gradient(transparent, transparent, black, black, transparent, transparent)",
          }}
        ></div>
      </motion.div>
    </div>
  );
};

export default AchievementCard;
