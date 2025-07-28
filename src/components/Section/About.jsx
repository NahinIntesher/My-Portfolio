import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { StatCard } from "@/components/StartCard";
import Image from "next/image";

export default function About() {
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

  return (
    <Section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="relative z-10 container mx-auto px-4"
      >
        <motion.div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div className="md:w-1/2" variants={fadeInFromLeft}>
            <SectionTitle center={false}>
              About <span className="text-blue-600 dark:text-blue-400">Me</span>
            </SectionTitle>

            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400" />

              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 leading-relaxed pl-4">
                Hello! I'm{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Nahin
                </span>
                , a passionate developer with a keen interest in building
                innovative solutions that solve real-world problems. My journey
                in technology began with a curiosity about how digital systems
                work, which has evolved into a professional path focused on
                creating impactful applications.
              </p>

              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 leading-relaxed pl-4">
                With experience across various technology stacks, I enjoy the
                challenges of both frontend and backend development. I believe
                in clean, efficient code and user-centered design principles
                that make technology accessible and enjoyable for everyone.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed pl-4">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>

            <motion.div
              className="mt-8 flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-blue-500/30 dark:shadow-blue-600/20"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-white hover:bg-gray-50 text-blue-600 font-medium rounded-lg border border-blue-200 transition-all shadow-lg hover:shadow-gray-200/50 dark:bg-gray-800 dark:border-gray-700 dark:text-blue-400 dark:hover:bg-gray-700"
              >
                See My Work
              </a>
            </motion.div>
          </motion.div>

          <motion.div className="md:w-1/2 relative" variants={fadeInFromRight}>
            <div className="absolute w-full h-full rounded-2xl bg-gradient-to-br from-blue-600/10 to-indigo-600/10 transform rotate-3 scale-105" />

            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <StatCard
                  number="2"
                  label="Years of Experience"
                  icon="⏳"
                  color="from-blue-500 to-blue-600"
                />
                <StatCard
                  number="15+"
                  label="Projects Completed"
                  icon="🚀"
                  color="from-indigo-500 to-indigo-600"
                />
                <StatCard
                  number="3"
                  label="Heavy Projects Completed"
                  icon="💪"
                  color="from-purple-500 to-purple-600"
                />
                <StatCard
                  number="3+"
                  label="Achievements and Awards"
                  icon="🏆"
                  color="from-cyan-500 to-cyan-600"
                />
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-8" />

              <div className="flex flex-wrap justify-center gap-4">
                <Skill name="React" />
                <Skill name="Next.js" />
                <Skill name="Node.js" />
                <Skill name="MongoDB" />
                <Skill name="Flutter" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
}

// Mini skill component for the bottom of the stats card
function Skill({ name }) {
  return (
    <div className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 text-sm font-medium">
      {name}
    </div>
  );
}
