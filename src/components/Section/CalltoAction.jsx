import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";

export default function CallToAction() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      {/* Background gradient blobs */}
      <div className="absolute opacity-5 w-96 h-96 rounded-full bg-blue-500 -top-20 -left-20 blur-3xl" />
      <div className="absolute opacity-5 w-96 h-96 rounded-full bg-indigo-500 -bottom-20 -right-20 blur-3xl" />

      <motion.div
        className="relative z-10 container mx-auto px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
          variants={fadeIn}
        >
          Ready to{" "}
          <span className="text-blue-600 dark:text-blue-400">
            work together?
          </span>
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 text-gray-700 dark:text-gray-300"
          variants={fadeIn}
        >
          I’m currently available for freelance work and exciting
          collaborations. Let’s create something amazing together!
        </motion.p>

        <motion.div variants={fadeIn} className="flex justify-center">
          <Button
            href="/contact"
            variant="filled"
            className="px-8 py-3 text-lg"
          >
            Get in Touch
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
}
