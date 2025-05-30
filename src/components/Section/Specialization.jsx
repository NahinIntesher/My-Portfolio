import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { SpecialtyCard } from "@/components/SpecialtyCard";
import { motion } from "framer-motion";
import { FaMobileAlt, FaRobot, FaLaptopCode, FaBrain } from "react-icons/fa";

export default function Specialization() {
  const specialties = [
    {
      label: "Web Development",
      icon: <FaLaptopCode className="text-3xl" />,
      description:
        "Building modern, responsive web applications using React, Next.js and Node.js with clean, maintainable code.",
      color: "#3b82f6", // blue-500
      technologies: ["React", "Next.js", "Tailwind CSS", "Node.js"]
    },
    {
      label: "Mobile App Development",
      icon: <FaMobileAlt className="text-3xl" />,
      description:
        "Creating seamless, responsive applications for iOS and Android platforms using React Native and Flutter.",
      color: "#8b5cf6", // violet-500
      technologies: ["React Native", "Flutter", "Firebase", "Redux"]
    },
    {
      label: "Backend Development",
      icon: <FaBrain className="text-3xl" />,
      description:
        "Developing robust server-side applications with Node.js, Express, and modern database technologies.",
      color: "#10b981", // emerald-500
      technologies: ["Node.js", "Express", "MongoDB", "GraphQL"]
    },
    {
      label: "Machine Learning",
      icon: <FaRobot className="text-3xl" />,
      description:
        "Developing algorithms and statistical models that enable systems to improve their performance over time.",
      color: "#f59e0b", // amber-500
      technologies: ["Python", "TensorFlow", "PyTorch", "scikit-learn"]
    },
  ];
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const staggerItems = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <Section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-20" />
        <div className="absolute top-1/2 right-0 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-green-500 rounded-full filter blur-3xl opacity-20" />
      </div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="text-center relative z-10 container mx-auto px-4"
      >
        <SectionTitle>
          What I <span className="text-blue-600 dark:text-blue-400">Specialize</span> In
        </SectionTitle>
        
        <motion.p 
          className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg mb-12"
          variants={staggerItems}
        >
          I focus on building efficient, scalable, and user-friendly solutions across various domains of software development.
          Each specialization represents areas where I deliver exceptional value through technical expertise and creative problem-solving.
        </motion.p>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
        >
          {specialties.map((specialty, index) => (
            <motion.div key={specialty.label} variants={staggerItems}>
              <SpecialtyCard
                label={specialty.label}
                icon={specialty.icon}
                description={specialty.description}
                color={specialty.color}
                technologies={specialty.technologies}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <a 
            href="#projects" 
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-blue-500/30 dark:shadow-blue-600/20"
          >
            Explore My Projects
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </Section>
  );
}