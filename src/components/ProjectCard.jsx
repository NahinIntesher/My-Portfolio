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
  NodeJS: faNodeJs,
  PostgreSQL: faDatabase,
  Java: faJava,
  Python: faPython,
  HTML: faHtml5,
  CSS: faCss3Alt,
  Flutter: faAndroid,
  "Next JS": faReact,
  NextJS: faReact,
  JavaFX: faJava,
  JavaScript: faJsSquare,
  MySQL: faDatabase,
};

const ProjectCard = ({
  title,
  description,
  technologies,
  githubLink,
  date,
  image,
}) => {
  // Enhanced card hover animation
  const cardHover = {
    rest: {
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  // Enhanced image hover animation
  const imageHover = {
    rest: { scale: 1, brightness: 1 },
    hover: { scale: 1.1, brightness: 1.1 },
  };

  // Enhanced tech badges animation
  const techBadge = {
    rest: { y: 0, scale: 1 },
    hover: { y: -2, scale: 1.05 },
  };

  return (
    <div className="group relative">
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-emerald-400/20 to-emerald-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Main card */}
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={cardHover}
        className="relative bg-gray-800/95 backdrop-blur-sm border border-gray-700/50 text-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 hover:border-emerald-500/30"
      >
        {/* Image Container with Overflow Hidden */}
        <div className="relative w-full h-56 overflow-hidden">
          <motion.div
            variants={imageHover}
            className="w-full h-full"
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {image ? (
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-white drop-shadow-lg">
                  {title.charAt(0)}
                </span>
              </div>
            )}
          </motion.div>

          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Project status badge */}
          <div className="absolute top-4 right-4">
            <div className="bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 rounded-2xl px-3 py-1.5">
              <span className="text-emerald-300 text-xs font-semibold flex items-center gap-1.5">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                Project
              </span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative p-8 bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-sm">
          {/* Date badge */}
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1.5 text-xs font-semibold text-gray-300 bg-gray-700/50 border border-gray-600/50 rounded-xl backdrop-blur-sm">
              {date}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl text-white font-bold mb-3 group-hover:text-emerald-100 transition-colors duration-300 leading-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 mb-6 leading-relaxed h-12 overflow-hidden group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>

          {/* Technologies Section */}
          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-white flex items-center gap-2">
              <div className="w-1 h-4 bg-emerald-400 rounded-full"></div>
              Technologies:
            </h4>
            <div className="flex flex-wrap gap-2 text-white">
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  variants={techBadge}
                  className="flex items-center bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-400/40 px-3 py-2 rounded-xl text-sm transition-all duration-300 backdrop-blur-sm group-hover:text-emerald-100"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <FontAwesomeIcon
                    icon={technologyIcons[tech] || faCode}
                    className="mr-2 w-4 h-4 text-emerald-400"
                  />
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Footer with Date and Button */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-700/50">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              <span className="text-white">{date}</span>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="transform transition-transform duration-200"
            >
              <CustomButtonTargetBlanK
                text="View on GitHub"
                link={githubLink}
              />
            </motion.div>
          </div>
        </div>

       
      </motion.div>
    </div>
  );
};

export default ProjectCard;
