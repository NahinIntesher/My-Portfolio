import { motion } from "framer-motion";

export function ProgressBar({ skill, level, index, color = "#3b82f6" }) {
  return (
    <div className="mb-1 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold flex items-center text-gray-900 dark:text-gray-100">
          {/* Icon based on skill name */}
          <SkillIcon skill={skill} color={color} />
          <span className="ml-2">{skill}</span>
        </h3>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
          {level}%
        </span>
      </div>
      
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: index * 0.1,
            ease: "easeOut",
          }}
        />
      </div>
      
      {/* Skill details - only show for certain skills */}
      {shouldShowDetail(skill) && (
        <motion.p 
          className="mt-2 text-xs text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: (index * 0.1) + 0.5 }}
        >
          {getSkillDetail(skill)}
        </motion.p>
      )}
    </div>
  );
}

// Helper function to determine if we should show detail for this skill
function shouldShowDetail(skill) {
  const skillsWithDetails = ["JavaScript", "React", "Next.js", "Flutter"];
  return skillsWithDetails.includes(skill);
}

// Helper function to get skill detail text
function getSkillDetail(skill) {
  const details = {
    "JavaScript": "ES6+, TypeScript, DOM manipulation, Async programming",
    "React": "Hooks, Context API, Redux, React Query",
    "Next.js": "Server Components, App Router, API Routes, SSR/SSG",
    "Flutter": "Cross-platform, Material Design, State Management"
  };
  
  return details[skill] || "";
}

// Icon component for skills
function SkillIcon({ skill, color }) {
  // You would normally use actual SVG icons here
  // This is a simplified version that shows colored circles with initials
  const initial = skill.charAt(0);
  
  return (
    <div 
      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
      style={{ backgroundColor: color }}
    >
      {initial}
    </div>
  );
}