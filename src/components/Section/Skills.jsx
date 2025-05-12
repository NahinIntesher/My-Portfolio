import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/Card";
import { ProgressBar } from "@/components/ProgressBar";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { skill: "JavaScript", level: 70, color: "#f7df1e" },
    { skill: "React", level: 75, color: "#61dafb" },
    { skill: "Next.js", level: 75, color: "#000000" },
    { skill: "Node.js", level: 75, color: "#339933" },
    { skill: "Python", level: 20, color: "#3776ab" },
    { skill: "SQL", level: 80, color: "#f29111" },
    { skill: "C/C++", level: 80, color: "#00599c" },
    { skill: "Java", level: 80, color: "#007396" },
    { skill: "Flutter", level: 55, color: "#02569b" },
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <Section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="container mx-auto px-4"
      >
        <SectionTitle>
          <span className="inline-block">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </span>
        </SectionTitle>

        <p className="text-gray-600 dark:text-gray-300 mb-10 text-center max-w-2xl mx-auto">
          I've developed expertise across multiple technologies throughout my
          journey as a developer. Each skill represents my commitment to
          mastering the tools that drive innovation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={skill.skill} accentColor={skill.color}>
              <ProgressBar
                skill={skill.skill}
                level={skill.level}
                index={index}
                color={skill.color}
              />
            </Card>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
