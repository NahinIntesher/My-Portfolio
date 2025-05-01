"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import profile from "@/style/images/profilePic1.jpg";
import TypewriterHeading from "@/components/TypewriterHeading";
import { FaBrain, FaMobileAlt, FaLaptopCode, FaRobot } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const specialtiesRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, type: "spring", stiffness: 70 },
    },
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, type: "spring", stiffness: 70 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const specialtyVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#98A77C",
      color: "#FFFFFF",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  const profileVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  };

  return (
    <main className="flex flex-col items-center bg-gradient-to-b from-[#E7F5DC] to-[#D8E9C9] text-[#112B13]">
      {/* Hero Section */}
      <section className="min-h-screen w-full flex items-center justify-center px-4 relative">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#98A77C] opacity-5 rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#728156] opacity-5 rounded-tr-full" />

        <motion.div
          className="text-center max-w-4xl w-full p-4 z-10"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.div className="mb-8 relative" variants={profileVariants}>
            <div className="w-52 h-52 rounded-full overflow-hidden mx-auto border-4 border-[#728156] shadow-xl mt-5 relative">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <Image
                  src={profile}
                  alt="Nahin Intesher"
                  width={400}
                  height={400}
                  className="object-cover"
                  priority
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 rounded-full border-t-4 border-[#98A77C] border-opacity-0"
                animate={{
                  rotate: 360,
                  borderOpacity: [0.2, 0.5, 0.2],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  ease: "linear",
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div>

          <motion.h1
            className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#5A6D41] to-[#8FA877]"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            I'm Nahin Intesher
          </motion.h1>

          <motion.div
            variants={fadeIn}
            transition={{ delay: 0.4 }}
            className="mb-4"
          >
            <TypewriterHeading />
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-[#3B4E33] max-w-2xl mx-auto mb-6"
            variants={fadeIn}
            transition={{ delay: 0.5 }}
          >
            I craft innovative digital solutions with a focus on human-centered
            design and cutting-edge technologies. Let's build something
            extraordinary together.
          </motion.p>

          <motion.div
            className="flex flex-col gap-3 sm:flex-row justify-center space-x-0 sm:space-x-6 mt-8"
            variants={fadeIn}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href="/projects"
                className="inline-block bg-transparent text-[#112B13] font-semibold py-3 px-8 border-2 border-[#88976C] rounded-lg transition duration-300 shadow-md"
              >
                View Projects
              </Link>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href="/contact"
                className="inline-block bg-transparent text-[#112B13] font-semibold py-3 px-8 border-2 border-[#88976C] rounded-lg transition duration-300 shadow-md"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Me Section */}
      <section
        className="py-20 w-full bg-white bg-opacity-40 backdrop-blur-sm"
        ref={aboutRef}
      >
        <motion.div
          className="container mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div className="md:w-1/2" variants={fadeInFromLeft}>
              <h2 className="text-3xl font-bold mb-6 inline-block relative">
                About Me
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-1 bg-[#728156]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </h2>
              <p className="text-lg mb-4">
                Hello! I'm Nahin, a passionate developer with a keen interest in
                building innovative solutions that solve real-world problems. My
                journey in technology began with a curiosity about how digital
                systems work, which has evolved into a professional path focused
                on creating impactful applications.
              </p>
              <p className="text-lg mb-4">
                With experience across various technology stacks, I enjoy the
                challenges of both frontend and backend development. I believe
                in clean, efficient code and user-centered design principles
                that make technology accessible and enjoyable for everyone.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </motion.div>

            <motion.div className="md:w-1/2" variants={fadeInFromRight}>
              <div className="grid grid-cols-2 gap-5">
                <motion.div
                  className="bg-white bg-opacity-80 p-5 rounded-lg shadow-md border border-[#98A77C] border-opacity-40"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(114, 129, 86, 0.3)",
                  }}
                  transition={{ duration: 0.2 }}
                  variants={cardVariants}
                >
                  <h3 className="font-semibold text-xl mb-2 text-[#5A6D41]">
                    4+
                  </h3>
                  <p>Years of Experience</p>
                </motion.div>

                <motion.div
                  className="bg-white bg-opacity-80 p-5 rounded-lg shadow-md border border-[#98A77C] border-opacity-40"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(114, 129, 86, 0.3)",
                  }}
                  transition={{ duration: 0.2 }}
                  variants={cardVariants}
                >
                  <h3 className="font-semibold text-xl mb-2 text-[#5A6D41]">
                    25+
                  </h3>
                  <p>Projects Completed</p>
                </motion.div>

                <motion.div
                  className="bg-white bg-opacity-80 p-5 rounded-lg shadow-md border border-[#98A77C] border-opacity-40"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(114, 129, 86, 0.3)",
                  }}
                  transition={{ duration: 0.2 }}
                  variants={cardVariants}
                >
                  <h3 className="font-semibold text-xl mb-2 text-[#5A6D41]">
                    15+
                  </h3>
                  <p>Satisfied Clients</p>
                </motion.div>

                <motion.div
                  className="bg-white bg-opacity-80 p-5 rounded-lg shadow-md border border-[#98A77C] border-opacity-40"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(114, 129, 86, 0.3)",
                  }}
                  transition={{ duration: 0.2 }}
                  variants={cardVariants}
                >
                  <h3 className="font-semibold text-xl mb-2 text-[#5A6D41]">
                    5+
                  </h3>
                  <p>Research Papers</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 w-full" ref={skillsRef}>
        <motion.div
          className="container mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl font-bold mb-12 text-center relative inline-block mx-auto"
            variants={fadeIn}
          >
            <span className="relative">
              My Skills
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-[#728156]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { skill: "JavaScript", level: 90 },
              { skill: "React", level: 85 },
              { skill: "Next.js", level: 80 },
              { skill: "Node.js", level: 75 },
              { skill: "Python", level: 70 },
              { skill: "TensorFlow", level: 65 },
              { skill: "SQL", level: 80 },
              { skill: "MongoDB", level: 75 },
              { skill: "Docker", level: 60 },
            ].map((skill, index) => (
              <motion.div
                key={skill.skill}
                className="bg-white bg-opacity-60 p-6 rounded-lg shadow-md"
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(114, 129, 86, 0.2)",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-lg">{skill.skill}</h3>
                  <span className="text-sm font-medium text-[#5A6D41]">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div
                    className="bg-[#728156] h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Specialization Section */}
      <section
        className="py-20 w-full bg-white bg-opacity-40 backdrop-blur-sm"
        ref={specialtiesRef}
      >
        <motion.div
          className="container mx-auto px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl font-bold mb-12 relative inline-block"
            variants={fadeIn}
          >
            <span className="relative">
              Want to Specialize in
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-[#728156]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
          >
            {[
              {
                label: "Mobile App Development",
                icon: <FaMobileAlt className="text-3xl" />,
                description:
                  "Creating seamless, responsive applications for iOS and Android platforms using React Native and Flutter.",
              },
              {
                label: "Artificial Intelligence",
                icon: <FaBrain className="text-3xl" />,
                description:
                  "Building intelligent systems that can learn from data, adapt to new inputs, and perform human-like tasks.",
              },
              {
                label: "Machine Learning",
                icon: <FaRobot className="text-3xl" />,
                description:
                  "Developing algorithms and statistical models that enable systems to improve their performance over time.",
              },
              {
                label: "Cyber Security",
                icon: <FaLaptopCode className="text-3xl" />,
                description:
                  "Protecting systems, networks, and programs from digital attacks and ensuring data integrity.",
              },
            ].map(({ label, icon, description }) => (
              <motion.div
                key={label}
                className="bg-white border-2 border-[#98A77C] p-6 rounded-xl flex flex-col items-center group backdrop-blur-sm bg-opacity-80 shadow-md hover:shadow-lg"
                variants={specialtyVariants}
                whileHover={{
                  y: -8,
                  backgroundColor: "rgba(152, 167, 124, 0.1)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="text-[#728156] mb-4 p-4 bg-[#E7F5DC] rounded-full"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                >
                  {icon}
                </motion.div>
                <h3 className="font-bold text-xl mb-3">{label}</h3>
                <p className="text-[#3B4E33]">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section className="py-20 w-full" ref={educationRef}>
        <motion.div
          className="container mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl font-bold mb-12 text-center relative inline-block mx-auto"
            variants={fadeIn}
          >
            <span className="relative">
              Education & Certifications
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-[#728156]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-[#728156] pl-8 ml-4">
              {[
                {
                  period: "2019 - 2023",
                  degree: "Bachelor of Science in Computer Science",
                  institution: "University of Technology",
                  description:
                    "Focused on AI and Machine Learning. Graduated with honors.",
                },
                {
                  period: "2023 - Present",
                  degree: "Master of Science in Artificial Intelligence",
                  institution: "Tech Institute",
                  description:
                    "Conducting research on neural networks and deep learning applications.",
                },
                {
                  period: "2022",
                  degree: "AWS Certified Solutions Architect",
                  institution: "Amazon Web Services",
                  description:
                    "Professional certification for designing distributed systems on AWS.",
                },
                {
                  period: "2021",
                  degree: "TensorFlow Developer Certificate",
                  institution: "Google",
                  description:
                    "Specialized in building and training neural network models using TensorFlow.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="mb-12 relative"
                  variants={fadeIn}
                  custom={index}
                >
                  <div className="absolute -left-12 w-6 h-6 bg-[#728156] rounded-full border-4 border-[#E7F5DC]" />
                  <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
                    <span className="text-sm font-semibold text-[#5A6D41] bg-[#E7F5DC] py-1 px-3 rounded-full inline-block mb-2">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                    <h4 className="text-[#5A6D41] font-medium mb-3">
                      {item.institution}
                    </h4>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Call to action */}
      <section className="py-16 w-full bg-[#728156] bg-opacity-10">
        <motion.div
          className="container mx-auto px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <motion.h2 className="text-3xl font-bold mb-6" variants={fadeIn}>
            Ready to work together?
          </motion.h2>
          <motion.p
            className="text-lg max-w-2xl mx-auto mb-8"
            variants={fadeIn}
          >
            I'm currently available for freelance work and exciting
            collaborations. Let's create something amazing together!
          </motion.p>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              href="/contact"
              className="inline-block bg-[#728156] text-white font-semibold py-3 px-10 rounded-lg transition duration-300 shadow-md"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
