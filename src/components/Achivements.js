import {
    faMedal,
    faStar,
    faCode,
    faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const achievements = [
    {
        title: "Champion at System Analysis and Design",
        description:
            "Secured the first position in the UIU CSE Project Show at System Analysis and Design category in Spring1 2025.",
        icon: faMedal,
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1064&q=80",
    },
    {
        title: "Champion at Database Management System",
        description:
            "Secured the first position in the UIU CSE Project Show at Database Management System category in Summer 2024.",
        icon: faMedal,
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1064&q=80",
    },
    {
        title: "2rd Runner Up Software Engineering",
        description:
            "Secured the 3th position in the UIU CSE Project Show at Software Engineering category in Summer 2025.",
        icon: faMedal,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1064&q=80",
    },
    {
        title: "3rd Runner Up Advance Object Oriented Programming",
        description:
            "Secured the 4th position in the UIU CSE Project Show at Advance Object Oriented Programming category in Fall 2024.",
        icon: faMedal,
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1064&q=80",
    },
    {
        title: "1st runner up at UIU juniors programming",
        description:
            "Secured the first runner-up position in the UIU juniors programming competition.",
        icon: faMedal,
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1064&q=80",
    },
    {
        title: "100% scholarship in 6 trimesters",
        description:
            "Received a 100% scholarship for academic excellence in six trimesters.",
        icon: faStar,
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1064&q=80",
    },
    {
        title: "50% scholarship in 3 trimesters",
        description:
            "Received a 50% scholarship for academic performance in three trimesters.",
        icon: faStar,
        image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&w=1064&q=80",
    },
    {
        title: "260+ problems solved on Codeforces",
        description: (
            <div>
                <p className="mb-2">
                    Demonstrated strong problem-solving skills by solving over
                    260 problems on Codeforces.
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
        image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=1064&q=80",
    },
    {
        title: "40+ problems solved on LeetCode",
        description: (
            <div>
                <p className="mb-2">
                    Improved algorithmic thinking by solving more than 40
                    problems on LeetCode.
                </p>
                <a
                    href="https://leetcode.com/u/NahinIntesher"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-emerald-400 underline hover:text-emerald-300 transition-colors duration-200"
                >
                    <FontAwesomeIcon
                        icon={faPuzzlePiece}
                        className="w-5 h-5 mr-2"
                    />
                    Visit my LeetCode profile
                </a>
            </div>
        ),
        icon: faPuzzlePiece,
        image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&w=1064&q=80",
    },
];
