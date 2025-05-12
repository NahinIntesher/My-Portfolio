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
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
  },
  {
    title: "3rd Runner Up Advance Object Oriented Programming",
    description:
      "Secured the 4th position in the UIU CSE Project Show at Advance Object Oriented Programming category.",
    icon: faMedal,
    image:
      "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    title: "1st runner up at UIU juniors programming",
    description:
      "Secured the first runner-up position in the UIU juniors programming competition.",
    icon: faMedal,
    image:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "100% scholarship in 3 trimesters",
    description:
      "Received a 100% scholarship for academic excellence in three trimesters.",
    icon: faStar,
    image:
      "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "100% scholarship in 3 trimesters",
    description:
      "Received a 100% scholarship for academic excellence in three trimesters.",
    icon: faStar,
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  {
    title: "50% scholarship in 3 trimesters",
    description:
      "Received a 50% scholarship for academic performance in three trimesters.",
    icon: faStar,
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
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
          className="inline-flex items-center text-emerald-400 underline hover:text-emerald-300 transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faCode} className="w-5 h-5 mr-2" />
          View my Codeforces profile
        </a>
      </div>
    ),
    icon: faCode,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
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
          className="inline-flex items-center text-emerald-400 underline hover:text-emerald-300 transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faPuzzlePiece} className="w-5 h-5 mr-2" />
          Visit my LeetCode profile
        </a>
      </div>
    ),
    icon: faPuzzlePiece,
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
];
