// components/AchievementCard.tsx
"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";


const AchievementCard = ({ achievement, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-white border border-[#D8E3D0] p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
    >
      <div className="flex items-start mb-4">
        <div className="text-[#728156] text-2xl mr-4">
          <FontAwesomeIcon icon={achievement.icon || faAward} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#3a4628]">
            {achievement.title}
          </h2>
          <p className="text-sm text-[#728156] mt-1">
            {achievement.date || "Achievement"}
          </p>
        </div>
      </div>
      <p className="text-[#5a6b42]">{achievement.description}</p>
      {achievement.link && (
        <a
          href={achievement.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-[#728156] hover:text-[#5a6b42] font-medium"
          aria-label={`View more about ${achievement.title}`}
        >
          View Details →
        </a>
      )}
    </motion.div>
  );
};

export default AchievementCard;
