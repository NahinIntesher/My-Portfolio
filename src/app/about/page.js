import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faMicrochip,
  faPalette,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

const skills = [
  {
    category: "Programming Languages",
    items: "Java, C, C++, Python, Dart, JavaScript, Go",
    icon: faCode,
  },
  {
    category: "Frameworks",
    items:
      "JavaFX, React JS, Node.js, Next JS, Flutter, React Native, Tailwind CSS",
    icon: faTools,
  },
  { category: "Databases", items: "MySQL, PostgreSQL", icon: faDatabase },
  { category: "Web Technologies", items: "HTML, CSS, JS, JSON", icon: faCode },
  { category: "Version Control", items: "Git & GitHub", icon: faTools },
  { category: "Microcontrollers", items: "Arduino, ESP32", icon: faMicrochip },
  {
    category: "Graphics Technology",
    items: "Photoshop, Illustrator, PowerPoint, Premier Pro",
    icon: faPalette,
  },
];

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 p-10 bg-[#E7F5DC] text-[#728156]">
      <h1 className="text-4xl sm:text-5xl font-bold mb-14 text-center text-[#728156]">
        About Me
      </h1>

      {/* Personal Info Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start mb-10">
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-[#444c35] underline">
            Personal Info
          </h2>
          <p className="mb-6 leading-relaxed text-[#444c35]">
            Hello everyone I am{" "}
            <span className="font-bold text-[#728156]">Nahin Intesher</span>. I
            am currently pursuing my BSCSE at United International University.
            With a strong academic background and a passion for technology, I am
            constantly seeking new challenges and opportunities to grow in the
            field of computer science and engineering.
          </p>
          <p className="leading-relaxed text-[#444c35]">
            My interests include{" "}
            <span className="font-bold text-[#444c35] ">
              mobile app development
            </span>
            , <span className="font-bold text-[#444c35]">cyber security</span>,{" "}
            <span className="font-bold text-[#444c35]">machine learning</span>{" "}
            and{" "}
            <span className="font-bold text-[#444c35]">problem-solving</span>. I
            am highly motivated to teach others and conduct research in these
            areas.
          </p>
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-[#444c35] underline">
          Education
        </h3>
        <p className="leading-relaxed text-[#444c35]">
          <strong>BSCSE</strong> - United International University
          <br />
          October 2022 - Present
          <br />
          CGPA: **** / 4.00 (Till 7th Trimester)
        </p>
      </div>

      {/* Skills Section */}
      <h3 className="text-2xl font-semibold mb-4 text-black underline">
        Skills
      </h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-start">
            <div>
              <strong className="text-[#728156] ">
                {index + 1}. {skill.category}:{" "}
              </strong>
              <span className="text-black">{skill.items}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
