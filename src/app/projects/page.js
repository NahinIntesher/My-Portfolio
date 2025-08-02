"use client";
import { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard";
import { motion } from "framer-motion";
import { personalProjects, academicProjects } from "../../components/Projects";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const headerAnimation = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

function Projects() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-gray-800 text-white px-4 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={headerAnimation}
          className="text-4xl sm:text-5xl font-bold mb-12 sm:mb-16 text-center"
        >
          My <span className="text-emerald-500">Projects</span>
        </motion.h1>

        <section className="mb-20">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={headerAnimation}
            className="mb-8"
          >
            <h2 className="text-3xl font-semibold mb-2">Personal Projects</h2>
            <div className="w-24 h-1 bg-emerald-500 rounded-full"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {personalProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="mb-12">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={headerAnimation}
            className="mb-8"
          >
            <h2 className="text-3xl font-semibold mb-2">Academic Projects</h2>
            <div className="w-24 h-1 bg-emerald-500 rounded-full"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {academicProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </main>
  );
}

export default Projects;
