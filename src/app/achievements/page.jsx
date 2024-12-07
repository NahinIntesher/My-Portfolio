"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faMedal,
  faStar,
  faPuzzlePiece,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const achievements = [
  {
    title: "Champion at Database Management System",
    description:
      "Secured the first position in the UIU CSE Project Show at Database Management System category.",
    icon: faMedal,
  },
  {
    title: "1st runner up at UIU juniors programming",
    description:
      "Secured the first runner-up position in the UIU juniors programming competition.",
    icon: faMedal,
  },
  {
    title: "100% scholarship in 3 trimesters",
    description:
      "Received a 100% scholarship for academic excellence in three trimesters.",
    icon: faStar,
  },
  {
    title: "50% scholarship in 3 trimesters",
    description:
      "Received a 50% scholarship for academic performance in three trimesters.",
    icon: faStar,
  },
  {
    title: "260+ problems solved on Codeforces",
    description: (
      <div>
        <p className="mb-2">
          Demonstrated strong problem-solving skills by solving over 260
          problems on Codeforces.
        </p>
        <a
          href="https://codeforces.com/profile/Nahin_Intesher"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[#728156] underline hover:text-[#B6C99B] transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faCode} className="w-5 h-5 mr-2" />
          View my Codeforces profile
        </a>
      </div>
    ),
    icon: faCode,
  },
  {
    title: "40+ problems solved on LeetCode",
    description: (
      <div>
        <p className="mb-2">
          Improved algorithmic thinking by solving more than 40 problems on
          LeetCode.
        </p>
        <a
          href="https://leetcode.com/u/NahinIntesher"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[#728156] underline hover:text-[#B6C99B] transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faPuzzlePiece} className="w-5 h-5 mr-2" />
          Visit my LeetCode profile
        </a>
      </div>
    ),
    icon: faPuzzlePiece,
  },
];

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
              className="bg-[#CFE1B9] p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
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
