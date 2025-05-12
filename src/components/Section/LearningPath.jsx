// src/components/LearningPath.jsx
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { LearningTimelineItem } from "@/components/LearningTimelineItem";
import { motion } from "framer-motion";

export default function LearningPath() {
  const learningItemsByYear = {
    2022: [
      {
        topic: "C Programming",
        resources:
          "Youtube - (Apna College, Code with Harry, College Wallah), Blogs, Books, W3Resources",
      },
    ],
    2023: [
      {
        topic: "C++",
        resources: "Youtube - (Love Babbar, Apna College), Blogs",
      },
      {
        topic: "Object-Oriented Programming with Java",
        resources: "Youtube - (Kunal Kushwaha), Books",
      },
      {
        topic: "Data Structures and Algorithms",
        resources:
          "Youtube - (Abdul Bari, Love Babbar, One Step Forward), Books, Blogs, LeetCode",
      },
      {
        topic: "HTML, CSS, JavaScript",
        resources: "Youtube, Blogs, W3Schools",
      },
      {
        topic: "React.js",
        resources:
          "Youtube - (Learn with Sumit, Chai aur Code and etc), Blogs, W3Schools",
      },
    ],
    2024: [
      {
        topic: "Node.js and Express.js",
        resources: "Youtube - (Learn with Sumit only), Blogs, W3Schools",
      },
      {
        topic: "Flutter",
        resources: "Youtube - (Azraf Al Monzim), Flutter Documentation",
      },
      {
        topic: "Next.js",
        resources:
          "Youtube - (Learn with Sumit, Codeevolution), Next JS Documentation",
      },
      {
        topic: "MySQL and PostgreSQL",
        resources: "Youtube - (Apna College), W3Schools, Blogs",
      },
    ],
    2025: [
      {
        topic: "Machine Learning - *** Currently Learning ***",
        resources: "Youtube - (Codebasics, Simplilearn), Blogs, Books",
      },
    ],
  };

  const years = Object.keys(learningItemsByYear).sort();

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const yearAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 70 },
    },
  };

  return (
    <Section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="absolute opacity-5 w-96 h-96 rounded-full bg-blue-500 -top-20 -left-20 blur-3xl" />
      <div className="absolute opacity-5 w-96 h-96 rounded-full bg-indigo-500 -bottom-20 -right-20 blur-3xl" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <SectionTitle>
          My{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Learning Path
          </span>
        </SectionTitle>

        <div className="mt-12 relative">
          <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 transform -translate-x-1/2 hidden sm:block" />

          {years.map((year, yearIndex) => (
            <motion.div
              key={year}
              variants={yearAnimation}
              className="mb-16 last:mb-0"
            >
              <div className="relative flex justify-center mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg">
                  {year}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {learningItemsByYear[year].map((item, itemIndex) => (
                  <LearningTimelineItem
                    key={`${year}-${itemIndex}`}
                    topic={item.topic}
                    resources={item.resources}
                    index={yearIndex + itemIndex * 0.2}
                    isEven={itemIndex % 2 === 0}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
