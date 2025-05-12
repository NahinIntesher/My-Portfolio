import { motion } from "framer-motion";
import Image from "next/image";
import profile from "@/style/images/profilePic1.jpg";
import TypewriterHeading from "@/components/TypewriterHeading";
import { Button } from "@/components/Button";

export default function Hero() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
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

  // Background blob animations
  const blobVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.05, 0.08, 0.05],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-0 right-0 w-1/3 sm:w-1/4 h-1/3 bg-emerald-900 rounded-bl-full"
        initial={{ opacity: 0.05 }}
        animate={blobVariants.animate}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-1/4 sm:w-1/5 h-1/4 bg-emerald-800 rounded-tr-full"
        initial={{ opacity: 0.05 }}
        animate={blobVariants.animate}
      />
      <motion.div
        className="absolute top-1/3 left-10 w-16 h-16 sm:w-24 sm:h-24 bg-emerald-700 rounded-full hidden sm:block"
        initial={{ opacity: 0.03 }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.06, 0.03],
          transition: { duration: 6, repeat: Infinity, repeatType: "reverse" },
        }}
      />

      {/* Main content container */}
      <motion.div
        className="text-center max-w-5xl w-full p-4 sm:p-6 z-10"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Profile image without rotation */}
        <motion.div
          className="mb-6 sm:mb-8 lg:mb-10 relative mx-auto"
          variants={profileVariants}
        >
          <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full overflow-hidden mx-auto border-4 border-emerald-500 shadow-xl relative">
            <Image
              src={profile}
              alt="Nahin Intesher"
              fill
              sizes="(max-width: 768px) 160px, 208px"
              className="object-cover"
              priority
            />
          </div>

          {/* Subtle accent circles */}
          <motion.div
            className="absolute -bottom-2 -right-2 w-6 h-6 bg-emerald-400 rounded-full opacity-70 hidden sm:block"
            animate={{
              scale: [1, 1.2, 1],
              transition: { duration: 2, repeat: Infinity },
            }}
          />
          <motion.div
            className="absolute -top-2 -left-2 w-4 h-4 bg-emerald-600 rounded-full opacity-70 hidden sm:block"
            animate={{
              scale: [1, 1.3, 1],
              transition: { duration: 2.5, repeat: Infinity, delay: 0.5 },
            }}
          />
        </motion.div>

        {/* Name heading with gradient */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600 tracking-tight"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          I'm Nahin Intesher
        </motion.h1>

        {/* Typewriter effect */}
        <motion.div
          variants={fadeIn}
          transition={{ delay: 0.4 }}
          className="mb-4 sm:mb-6"
        >
          <TypewriterHeading />
        </motion.div>

        {/* Bio text */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed"
          variants={fadeIn}
          transition={{ delay: 0.5 }}
        >
          I craft innovative digital solutions with a focus on human-centered
          design and cutting-edge technologies. Let's build something
          extraordinary together.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-6 sm:mt-8"
          variants={fadeIn}
          transition={{ delay: 0.6 }}
        >
          <Button
            href="/projects"
            className="transform transition-transform hover:scale-105"
          >
            View Projects
          </Button>
          <Button
            href="/contact"
            className="transform transition-transform hover:scale-105"
          >
            Contact Me
          </Button>
        </motion.div>
      </motion.div>

      {/* Scrolling indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 10, 0],
          transition: { delay: 1.5, duration: 1.5, repeat: Infinity },
        }}
      >
        <div className="w-3 h-3 rounded-full bg-emerald-500 opacity-70"></div>
      </motion.div>
    </section>
  );
}
