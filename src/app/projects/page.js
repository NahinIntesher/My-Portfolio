"use client";
import { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard";
import { motion } from "framer-motion";

const personalProjects = [
  {
    title: "WEARQO",
    description: "WearQo is a fashion e-commerce company, sells brand stuff.",
    technologies: ["Next JS"],
    githubLink: "https://github.com/orgs/Wearqo/repositories",
    date: "07/2024 - Present",
    image:
      "https://images.unsplash.com/photo-1561069934-eee225952461?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Diganta",
    description:
      "Diganta is my Coaching Center. I made a website for my coaching.",
    technologies: ["Next JS"],
    githubLink: "https://github.com/NahinIntesher/Diganta",
    date: "05/2025 - Present",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Nahin Portfolio",
    description: "My portfolio website to know more about myself.",
    technologies: ["Next JS"],
    githubLink: "https://github.com/nahinintesher/My-Portfolio",
    date: "07/2024 - Present",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop",
  },
  {
    title: "START TO DO",
    description: "Simple Todo App to maintain daily workflow.",
    technologies: ["Flutter"],
    githubLink:
      "https://github.com/nahinintesher/Flutter-Projects/tree/main/todo_app",
    date: "05/2024 - 06/2024",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop",
  },
  {
    title: "ABOHAWA",
    description: "Simple Weather App to know the weather of any city.",
    technologies: ["Flutter"],
    githubLink:
      "https://github.com/nahinintesher/Flutter-Projects/tree/main/abohawa",
    date: "05/2024 - 06/2024",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "SIMPLE CALCULATOR",
    description: "Simple Calculator App for doing daily life calculations.",
    technologies: ["Java", "JavaFX"],
    githubLink:
      "https://github.com/nahinintesher/Java_Projects/tree/main/normalcalculator",
    date: "01/2023 - 02/2023",
    image:
      "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=2080&auto=format&fit=crop",
  },
  {
    title: "UNIT CONVERTER",
    description: "A Unit Converter app to convert length, time, temperature.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink:
      "https://github.com/nahinintesher/Dev/tree/main/Java%20Script/Converter",
    date: "01/2023 - 02/2023",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
  },
];

const academicProjects = [
  {
    title: "DISCOVERYOU",
    description:
      "DiscoverYou is a platform where users can discover and develop their talents.",
    technologies: ["React JS", "Node JS", "MySQL"],
    githubLink: "https://github.com/nahinintesher/DiscoverYou",
    date: "08/2024 - Present",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Jiggasha",
    description: "Jiggasha is an online gamified educational platform",
    technologies: ["NextJS", "NodeJS", "PostgreSQL"],
    githubLink: "https://github.com/NahinIntesher/Jiggasha",
    date: "05/2025 - Present",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "TIC TAC TOE",
    description:
      "A Tic Tac Toe game where two people can play with each other.",
    technologies: ["Java", "JavaFX"],
    githubLink: "https://github.com/nahinintesher/Tic-Tac-Toe-Game",
    date: "03/2023 - 04/2023",
    image:
      "https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=2070&auto=format&fit=crop",
  },
];

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
          My <span className="text-white">Projects</span>
        </motion.h1>

        <section className="mb-20">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={headerAnimation}
            className="mb-8"
          >
            <h2 className="text-3xl font-semibold mb-2">Personal Projects</h2>
            <div className="w-24 h-1 bg-[#728156] rounded-full"></div>
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
            <div className="w-24 h-1 bg-[#B6C99B] rounded-full"></div>
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
