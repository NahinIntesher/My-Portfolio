"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { achievements } from "@/components/Achivements";
import { motion } from "framer-motion";

const Achievements = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#E7F5DC] to-[#C8D9B8] px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-6 text-center text-[#3a4628]"
        >
          My <span className="text-[#728156]">Achievements</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-xl text-[#5a6b42] mb-16 max-w-3xl mx-auto"
        >
          Recognitions, awards, and milestones in my professional journey
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white border border-[#D8E3D0] p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex items-start mb-4">
                <div className="text-[#728156] text-2xl mr-4">
                  <FontAwesomeIcon icon={achievement.icon} />
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
                >
                  View Details →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Achievements;
