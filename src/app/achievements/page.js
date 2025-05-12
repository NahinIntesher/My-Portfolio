"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { achievements } from "@/components/Achivements";
import { motion } from "framer-motion";
import Image from "next/image";

const Achievements = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 px-4 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-6 text-center text-gray-100"
        >
          My <span className="text-emerald-400">Achievements</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-lg md:text-xl text-gray-400 mb-12 md:mb-16 max-w-3xl mx-auto"
        >
          Recognitions, awards, and milestones in my professional journey
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.1)",
              }}
              className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg hover:shadow-emerald-500/10 transition-all h-full flex flex-col overflow-hidden group"
            >
              {/* Image Section with Overlay */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={achievement.image}
                  alt={achievement.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={80}
                  priority={index < 3} // Only prioritize first few images
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
                <div className="absolute top-4 right-4 bg-gray-900/80 rounded-full p-2 text-emerald-400">
                  <FontAwesomeIcon
                    icon={achievement.icon}
                    className="text-xl"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <div>
                  <h2 className="text-xl font-bold text-gray-100 mb-2">
                    {achievement.title}
                  </h2>
                  <div className="text-gray-300">
                    {typeof achievement.description === "string" ? (
                      <p>{achievement.description}</p>
                    ) : (
                      achievement.description
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Achievements;
