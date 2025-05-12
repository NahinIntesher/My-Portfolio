"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faMicrochip,
  faPalette,
  faTools,
  faGraduationCap,
  faUserTie,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Programming Languages",
    items: "Java, C, C++, Python, Dart, JavaScript",
    icon: faCode,
  },
  {
    category: "Frameworks & Libraries",
    items: "React, Next.js, Node.js, Flutter, Tailwind CSS, Express",
    icon: faTools,
  },
  {
    category: "Databases",
    items: "MySQL, PostgreSQL",
    icon: faDatabase,
  },
  {
    category: "Web Technologies",
    items: "HTML5, CSS3, JavaScript",
    icon: faCode,
  },
  {
    category: "Version Control",
    items: "Git, GitHub",
    icon: faTools,
  },
  {
    category: "IoT & Hardware",
    items: "Arduino, ESP32, Raspberry Pi",
    icon: faMicrochip,
  },
  {
    category: "Design & Multimedia",
    items: "Adobe Photoshop, Illustrator, Figma, Premier Pro, PowerPoint, Jira",
    icon: faPalette,
  },
];

const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "United International University",
    period: "2022 - Present",
    details: "CGPA: 3.**/4.00 (Till 7th Trimester)",
    icon: faGraduationCap,
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "Dhaka Residential Model College, Dhaka",
    period: "2018 - 2020",
    details: "GPA: 5.00/5.00 in Science",
    icon: faGraduationCap,
  },
];

export default function About() {
  return (
    <div className="mx-auto px-6 py-16 bg-gradient-to-b from-gray-800 to-gray-900 text-gray-200">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold mb-16 text-center"
      >
        About <span className="text-emerald-400">Me</span>
      </motion.h1>

      {/* Personal Info Section */}
      <motion.section
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-center gap-12 mb-20 p-8 bg-gray-600 rounded-xl shadow-lg border border-gray-700"
      >
        <div className="flex-1">
          <motion.h2
            className="text-3xl font-semibold mb-6 border-b-2 border-emerald-500 pb-2"
            whileHover={{ x: 5 }}
          >
            <FontAwesomeIcon
              icon={faUserTie}
              className="mr-3 text-emerald-400"
            />
            Personal Profile
          </motion.h2>
          <p className="mb-6 leading-relaxed text-lg text-gray-300">
            Hello! I'm{" "}
            <span className="font-bold text-emerald-400">Nahin Intesher</span>,
            a passionate Computer Science student and full-stack developer with
            expertise in mobile app development, AI, and cybersecurity. I thrive
            on solving complex problems and building innovative solutions that
            make a real impact.
          </p>
          <p className="leading-relaxed text-lg text-gray-300">
            My journey in technology began at a young age, and I've since
            developed a diverse skill set spanning multiple programming
            languages and frameworks. When I'm not coding, you can find me
            contributing to open-source projects, mentoring junior developers,
            or exploring the latest advancements in machine learning.
          </p>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20 p-8 bg-gray-600 rounded-xl shadow-lg border border-gray-700"
      >
        <motion.h3
          className="text-2xl font-semibold mb-8 border-b-2 border-emerald-500 pb-2"
          whileHover={{ x: 5 }}
        >
          <FontAwesomeIcon
            icon={faGraduationCap}
            className="mr-3 text-emerald-400"
          />
          Education
        </motion.h3>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="text-emerald-400 text-xl mt-1">
                <FontAwesomeIcon icon={edu.icon} />
              </div>
              <div>
                <h4 className="text-xl font-bold">{edu.degree}</h4>
                <p className="text-lg font-medium text-emerald-400">
                  {edu.institution}
                </p>
                <p className="text-gray-400">{edu.period}</p>
                <p className="text-gray-300 mt-2">{edu.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-8 bg-gray-600 rounded-xl shadow-lg border border-gray-700"
      >
        <motion.h3
          className="text-2xl font-semibold mb-8 border-b-2 border-emerald-500 pb-2"
          whileHover={{ x: 5 }}
        >
          <FontAwesomeIcon
            icon={faLightbulb}
            className="mr-3 text-emerald-400"
          />
          Technical Skills
        </motion.h3>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-start gap-4 p-4 bg-gray-700 rounded-lg border border-gray-600"
            >
              <div className="text-emerald-400 text-xl mt-1">
                <FontAwesomeIcon icon={skill.icon} />
              </div>
              <div>
                <h4 className="text-lg font-bold">{skill.category}</h4>
                <p className="text-gray-300">{skill.items}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Additional Personal Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 p-8 bg-gray-700 rounded-xl shadow-lg border border-gray-600"
      >
        <h3 className="text-2xl font-semibold mb-6">Beyond Coding</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-medium mb-3">Interests & Hobbies</h4>
            <ul className="space-y-2">
              {[
                "Open Source Contributions",
                "Technical Writing",
                "Mentoring & Teaching",
                "Machine Learning",
                "Exploring New Technologies",
              ].map((item, i) => (
                <li key={i} className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-medium mb-3">
              Professional Philosophy
            </h4>
            <p className="mb-4 text-gray-300">
              I believe in continuous learning and sharing knowledge. Technology
              should solve real problems while being accessible to everyone.
            </p>
            <p className="text-gray-300">
              "Write code that humans can understand and machines can execute
              efficiently."
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
