import {
  faTrophy,
  faMedal,
  faStar,
  faPuzzlePiece,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const achievements = [
  {
    title: "Champion at Database Management System",
    description:
      "Secured the first position in the UIU CSE Project Show at Database Management System category.",
    icon: faMedal,
  },
  {
    title: "3rd Runner Up Advance Object Oriented Programming",
    description:
      "Secured the 4th position in the UIU CSE Project Show at Advance Object Oriented Programming category.",
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
