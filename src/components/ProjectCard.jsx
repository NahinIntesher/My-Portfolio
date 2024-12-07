import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faJava,
  faPython,
  faHtml5,
  faCss3Alt,
  faAndroid,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons"; // Fallback icon

const technologyIcons = {
  "React JS": faReact,
  "Node JS": faNodeJs,
  Java: faJava,
  Python: faPython,
  HTML: faHtml5,
  CSS: faCss3Alt,
  Flutter: faAndroid,
  "Next JS": faReact, // Use React icon for Next.js
  JavaFX: faJava, // Use Java icon for JavaFX
  JavaScript: faJsSquare, // JavaScript icon
};

const ProjectCard = ({ title, description, technologies, githubLink, date }) => {
  return (
    <div className="bg-gray-800 shadow-lg rounded-lg p-6 mb-6">
      <h3 className="text-xl text-amber-300 font-semibold mb-2">{title}</h3>
      <p className="text-gray-200 text-sm mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Technologies:</h4>
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
            >
              <FontAwesomeIcon
                icon={technologyIcons[tech] || faCode}
                className="mr-1 w-5 h-5"
              />
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-300">{date}</span>
        <Link
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 text-white px-3 py-1 rounded hover:bg-gray-950 hover:text-white transition-colors "
        >
          View on GitHub
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;