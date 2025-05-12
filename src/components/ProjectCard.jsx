"use client";

import Link from "next/link";
import Image from "next/image";
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
import { faCode, faDatabase } from "@fortawesome/free-solid-svg-icons";
import CustomButtonTargetBlanK from "./CustomButtonTargetBlank";
import { motion } from "framer-motion";

const technologyIcons = {
  "React JS": faReact,
  "Express JS": faNodeJs,
  "Tailwind CSS": faCss3Alt,
  "Node JS": faNodeJs,
  PostgreSQL: faDatabase,
  Java: faJava,
  Python: faPython,
  HTML: faHtml5,
  CSS: faCss3Alt,
  Flutter: faAndroid,
  "Next JS": faReact, // Use React icon for Next.js
  JavaFX: faJava, // Use Java icon for JavaFX
  JavaScript: faJsSquare, // JavaScript icon
  MySQL: faDatabase, // Database icon for MySQL
};

const ProjectCard = ({
  title,
  description,
  technologies,
  githubLink,
  date,
  image,
}) => {
  // Card hover animation
  const cardHover = {
    rest: {
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  // Image hover animation
  const imageHover = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
  };

  // Tech badges animation
  const techBadge = {
    rest: { y: 0 },
    hover: { y: -3 },
  };

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={cardHover}
      className="bg-white border border-[#728156] shadow-lg rounded-lg overflow-hidden text-[#112B13]"
    >
      {/* Image Container with Overflow Hidden */}
      <div className="relative w-full h-48 overflow-hidden">
        <motion.div variants={imageHover} className="w-full h-full">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-[#B6C99B] flex items-center justify-center">
              <span className="text-2xl font-bold text-white">
                {title.charAt(0)}
              </span>
            </div>
          )}
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl text-[#728156] font-semibold mb-2">{title}</h3>
        <p className="text-sm mb-4 h-12 overflow-hidden">{description}</p>

        <div className="mb-4">
          <h4 className="font-semibold mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                variants={techBadge}
                className="flex items-center bg-[#B6C99B] px-2 py-1 rounded text-sm transition-all"
              >
                <FontAwesomeIcon
                  icon={technologyIcons[tech] || faCode}
                  className="mr-1 w-5 h-5"
                />
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-[#88976C]">{date}</span>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <CustomButtonTargetBlanK text="View on GitHub" link={githubLink} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
