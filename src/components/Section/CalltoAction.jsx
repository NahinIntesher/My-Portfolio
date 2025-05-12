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
    <section className="py-16 w-full bg-gradient-to-r from-[#728156] to-[#98A77C] bg-opacity-10">
      <motion.div
        className="container mx-auto px-6 text-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800 dark:text-gray-50"
          variants={fadeIn}
        >
          Ready to work together?
        </motion.h2>
        <motion.p
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 text-gray-700 dark:text-gray-300"
          variants={fadeIn}
        >
          I'm currently available for freelance work and exciting
          collaborations. Let's create something amazing together!
        </motion.p>
        <motion.div
          variants={fadeIn}
          className="flex justify-center items-center"
        >
          <Button
            href="/contact"
            variant="filled"
            className="px-8 py-3 text-lg"
          >
            Get in Touch
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
