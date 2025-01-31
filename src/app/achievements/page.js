"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { achievements } from "@/components/Achivements";
const Achievements = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Avoid rendering until the component is mounted on the client
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-[#E7F5DC] text-white px-4 py-12">
      <div className="max-w-6xl w-full p-5">
        <h1 className="text-4xl sm:text-5xl font-bold mb-14 text-center text-[#728156]">
          Achievements
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white border border-[#728156] p-6 rounded-lg shadow-md hover:shadow-lg cursor-default"
            >
              <div className="flex items-start mb-3">
                <FontAwesomeIcon
                  icon={achievement.icon}
                  className="w-5 h-5 mr-3 text-[#728156]"
                />
                <h2 className="text-xl font-semibold text-[#728156]">
                  {achievement.title}
                </h2>
              </div>
              <p className="font-medium text-[#292e1f]">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Achievements;
