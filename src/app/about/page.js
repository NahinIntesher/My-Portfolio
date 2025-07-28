"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FloatingParticles = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const newPositions = Array.from({ length: 20 }, () => ({
        initial: {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        },
        animate: {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        },
        duration: Math.random() * 10 + 20,
      }));
      setPositions(newPositions);
    }
  }, []);

  // Prevent rendering on server (and before useEffect runs)
  if (typeof window === "undefined" || positions.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {positions.map((pos, idx) => (
        <motion.div
          key={idx}
          className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
          initial={pos.initial}
          animate={pos.animate}
          transition={{
            duration: pos.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const GlowingCard = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.25)",
      }}
      className={`relative overflow-hidden bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-2xl ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-cyan-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

const AnimatedIcon = ({ icon, className = "" }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        rotate: 360,
        color: "#10b981",
      }}
      transition={{ duration: 0.3 }}
      className={`text-2xl ${className}`}
    >
      {icon}
    </motion.div>
  );
};

const TypewriterText = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }
    }, 50 + delay);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay]);

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="text-emerald-400"
      >
        |
      </motion.span>
    </span>
  );
};

const SkillBar = ({ skill, percentage, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="mb-4"
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-300">{skill}</span>
        <span className="text-sm text-emerald-400">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: delay + 0.3 }}
          className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full shadow-lg"
        />
      </div>
    </motion.div>
  );
};

export default function About() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const skills = [
    {
      category: "Programming Languages",
      items: "Java, C, C++, Python, Dart, JavaScript",
      icon: "💻",
      percentage: 90,
    },
    {
      category: "Frameworks & Libraries",
      items: "React, Next.js, Node.js, Flutter, Tailwind CSS",
      icon: "🛠️",
      percentage: 85,
    },
    {
      category: "Databases",
      items: "MySQL, PostgreSQL",
      icon: "🗄️",
      percentage: 80,
    },
    {
      category: "Web Technologies",
      items: "HTML5, CSS3, JavaScript",
      icon: "🌐",
      percentage: 92,
    },
    {
      category: "Version Control",
      items: "Git, GitHub",
      icon: "📊",
      percentage: 88,
    },
    {
      category: "IoT & Hardware",
      items: "Arduino, ESP32, Raspberry Pi",
      icon: "🔧",
      percentage: 75,
    },
    {
      category: "Design & Multimedia",
      items: "Adobe Creative Suite, Figma",
      icon: "🎨",
      percentage: 82,
    },
  ];

  const achievements = [
    { number: "3.91", label: "CGPA", suffix: "/4.00" },
    { number: "15+", label: "Projects", suffix: "" },
    { number: "2+", label: "Years", suffix: " Experience" },
    { number: "100%", label: "Dedication", suffix: "" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      <FloatingParticles />

      {/* Animated Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            About Me
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            <TypewriterText
              text="Passionate Developer & Problem Solver"
              delay={1000}
            />
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {achievements.map((achievement, index) => (
            <GlowingCard
              key={index}
              delay={index * 0.1}
              className="p-6 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1 + 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
                className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2"
              >
                {achievement.number}
                <span className="text-lg text-gray-400">
                  {achievement.suffix}
                </span>
              </motion.div>
              <div className="text-gray-300 font-medium">
                {achievement.label}
              </div>
            </GlowingCard>
          ))}
        </motion.div>

        {/* Personal Profile */}
        <GlowingCard className="p-8 md:p-12 mb-16">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-1">
              <motion.h2
                className="text-4xl font-bold mb-6 flex items-center gap-3"
                whileHover={{ x: 10 }}
              >
                <AnimatedIcon icon="👨‍💼" />
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Personal Profile
                </span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-6 text-gray-300 text-lg leading-relaxed"
              >
                <p>
                  Hello! I'm{" "}
                  <span className="font-bold text-emerald-400 text-xl">
                    Nahin Intesher
                  </span>
                  , a passionate Computer Science student and full-stack
                  developer with expertise in mobile app development, AI, and
                  cybersecurity. I thrive on solving complex problems and
                  building innovative solutions that make a real impact.
                </p>
                <p>
                  My journey in technology began at a young age, and I've since
                  developed a diverse skill set spanning multiple programming
                  languages and frameworks. When I'm not coding, you can find me
                  contributing to open-source projects, mentoring junior
                  developers, or exploring the latest advancements in machine
                  learning.
                </p>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="w-64 h-64 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-full flex items-center justify-center text-6xl border-4 border-emerald-400/30"
            >
              👨‍💻
            </motion.div>
          </div>
        </GlowingCard>

        {/* Education */}
        <GlowingCard className="p-8 md:p-12 mb-16">
          <motion.h3
            className="text-3xl font-bold mb-8 flex items-center gap-3"
            whileHover={{ x: 10 }}
          >
            <AnimatedIcon icon="🎓" />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Education
            </span>
          </motion.h3>

          <div className="space-y-8">
            {[
              {
                degree: "B.Sc. in Computer Science & Engineering",
                institution: "United International University",
                period: "2022 - Present",
                details: "CGPA: 3.90/4.00 (Till 7th Trimester)",
                icon: "🏛️",
              },
              {
                degree: "Higher Secondary Certificate",
                institution: "Dhaka Residential Model College, Dhaka",
                period: "2018 - 2020",
                details: "GPA: 5.00/5.00 in Science",
                icon: "📚",
              },
            ].map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-start gap-6 p-6 bg-gray-700/50 rounded-xl border border-gray-600/50"
              >
                <AnimatedIcon icon={edu.icon} className="text-3xl mt-2" />
                <div>
                  <h4 className="text-xl font-bold text-emerald-400">
                    {edu.degree}
                  </h4>
                  <p className="text-lg font-medium text-cyan-400 mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-gray-400 mb-2">{edu.period}</p>
                  <p className="text-gray-300">{edu.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </GlowingCard>

        {/* Skills Section */}
        <GlowingCard className="p-8 md:p-12 mb-16">
          <motion.h3
            className="text-3xl font-bold mb-8 flex items-center gap-3"
            whileHover={{ x: 10 }}
          >
            <AnimatedIcon icon="💡" />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </motion.h3>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Skills Cards */}
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 30px rgba(16, 185, 129, 0.2)",
                  }}
                  className="p-6 bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-xl border border-gray-600/50"
                >
                  <div className="flex items-start gap-4">
                    <AnimatedIcon icon={skill.icon} className="text-2xl mt-1" />
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-emerald-400 mb-2">
                        {skill.category}
                      </h4>
                      <p className="text-gray-300 mb-3">{skill.items}</p>
                      <SkillBar
                        skill={skill.category}
                        percentage={skill.percentage}
                        delay={index * 0.1}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 3D Skills Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="relative w-80 h-80">
                {skills.map((skill, index) => {
                  const angle = (index * 360) / skills.length;
                  const radius = 120;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      whileHover={{ scale: 1.3, zIndex: 10 }}
                      className="absolute w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-xl cursor-pointer shadow-lg"
                      style={{
                        left: `calc(50% + ${x}px - 24px)`,
                        top: `calc(50% + ${y}px - 24px)`,
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                  );
                })}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center text-2xl">
                  🚀
                </div>
              </div>
            </motion.div>
          </div>
        </GlowingCard>

        {/* Beyond Coding */}
        <GlowingCard className="p-8 md:p-12">
          <motion.h3
            className="text-3xl font-bold mb-8 flex items-center gap-3"
            whileHover={{ x: 10 }}
          >
            <AnimatedIcon icon="🌟" />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Beyond Coding
            </span>
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-2xl font-bold mb-6 text-emerald-400">
                Interests & Hobbies
              </h4>
              <div className="space-y-4">
                {[
                  { item: "Open Source Contributions", icon: "🌐" },
                  { item: "Technical Writing", icon: "✍️" },
                  { item: "Mentoring & Teaching", icon: "👨‍🏫" },
                  { item: "Machine Learning", icon: "🤖" },
                  { item: "Exploring New Technologies", icon: "🔬" },
                ].map((hobby, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center gap-4 p-3 rounded-lg bg-gray-700/30 border border-gray-600/30"
                  >
                    <span className="text-2xl">{hobby.icon}</span>
                    <span className="text-lg">{hobby.item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-2xl font-bold mb-6 text-cyan-400">
                Professional Philosophy
              </h4>
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  I believe in continuous learning and sharing knowledge.
                  Technology should solve real problems while being accessible
                  to everyone.
                </p>
                <motion.blockquote
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="border-l-4 border-emerald-400 pl-6 py-4 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-r-lg"
                >
                  <p className="text-xl font-medium italic text-emerald-300">
                    "Write code that humans can understand and machines can
                    execute efficiently."
                  </p>
                  <footer className="text-gray-400 mt-2">
                    — My Coding Mantra
                  </footer>
                </motion.blockquote>
              </div>
            </motion.div>
          </div>
        </GlowingCard>
      </div>
    </div>
  );
}
