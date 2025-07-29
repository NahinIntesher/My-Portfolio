// src/components/LearningPath.jsx
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
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
        topic: "Machine Learning *Currently Learning*",
        resources: "Coursera, Youtube, Blogs, Books",
      },
      {
        topic: "Quantum Computing *Currently Learning*",
        resources: "Coursera, Youtube, Books",
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

function LearningTimelineItem({ topic, resources, index = 0, isEven = false }) {
  const cardAnimation = {
    hidden: {
      opacity: 0,
      x: isEven ? -30 : 30,
      y: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        type: "spring",
        stiffness: 70,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={cardAnimation}
      className="relative"
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
    >
      <div className="absolute hidden md:block h-px w-12 bg-gradient-to-r from-blue-400 to-transparent top-10 left-1/2 transform -translate-x-1/2"></div>

      <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-4 sm:p-5 md:p-6 shadow-xl border border-blue-100 dark:border-gray-700 backdrop-blur-sm hover:shadow-blue-500/10 transition-all duration-300">
        <div className="w-full h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 mb-4"></div>

        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-gray-50 line-clamp-2">
          {topic}
        </h3>

        <div className="flex items-start gap-2 mt-2">
          <div className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3.586l2.707 2.707a1 1 0 01-1.414 1.414l-3-3A1 1 0 019 10V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Resources:
            </span>{" "}
            {resources}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
