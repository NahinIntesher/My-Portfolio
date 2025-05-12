import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion";

// Inline TimelineComponent to fix the import error
function TimelineComponent({ period, title, subtitle, description, index }) {
  // Alternate layout for even/odd items on desktop
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline dot marker (visible on desktop) */}
      <div
        className={`absolute left-0 md:left-1/2 top-8 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transform md:-translate-x-1/2 z-10 hidden md:block
          border-2 border-white dark:border-gray-800 shadow-md`}
      />

      {/* Content card */}
      <div
        className={`md:w-5/12 ${
          isEven ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"
        } relative`}
      >
        <div
          className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-5 shadow-xl border border-blue-100 dark:border-gray-700 
            backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          {/* Top decorative line */}
          <div className="w-full h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 mb-4" />

          {/* Card content */}
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-50">
            {title}
          </h3>
          <h4 className="text-md font-semibold mb-1 text-gray-700 dark:text-gray-300">
            {subtitle}
          </h4>
          <div className="text-sm mb-3 text-blue-600 dark:text-blue-400 font-medium inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            {period}
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-2">{description}</p>
        </div>

        {/* Connector line to timeline (visible on desktop) */}
        <div
          className={`absolute top-8 ${
            isEven ? "right-0 md:left-full" : "left-0 md:right-full"
          } w-10 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 hidden md:block`}
        />
      </div>
    </motion.div>
  );
}

export default function Education() {
  const educationItems = [
    {
      period: "2018 - 2020",
      title: "Higher Secondary Certificate (HSC)",
      subtitle: "Dhaka Residential Model College",
      description:
        "Focused on Physics. Participated in various science fairs and competitions.",
    },
    {
      period: "2022 - Present",
      title: "Bachelor of Science in Computer Science",
      subtitle: "United International University",
      description:
        "Focused on Development and Machine Learning. Participated in various hackathons and coding competitions.",
    },
  ];

  return (
    <Section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute opacity-5 w-96 h-96 rounded-full bg-blue-500 -top-20 -left-20 blur-3xl" />
      <div className="absolute opacity-5 w-96 h-96 rounded-full bg-indigo-500 -bottom-20 -right-20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <SectionTitle>
          My <span className="text-blue-600 dark:text-blue-400">Education</span>
        </SectionTitle>

        <div className="mt-10 container mx-auto px-4">
          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 transform md:-translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {educationItems.map((item, index) => (
                <TimelineComponent
                  key={index}
                  period={item.period}
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
