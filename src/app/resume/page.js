"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const ResumePage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-gradient-to-tr from-[#DDEECD] via-[#E7F5DC] to-[#A6B98F]">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center text-[#3C5A3A] mb-10 drop-shadow"
      >
        Explore My Resume
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white border border-[#9EB37C] p-8 rounded-3xl shadow-2xl max-w-3xl w-full hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-shadow duration-300"
      >
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-700 mb-4"
          >
            Welcome to my resume page! Discover my professional journey, from
            skills and experience to achievements and education. I'm committed to
            continuous learning and tech innovation.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-md text-gray-500 mb-8"
          >
            Click below to download or view my latest resume in PDF format.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-7 py-3 bg-gradient-to-r from-amber-300 to-yellow-400 text-gray-900 text-lg font-semibold rounded-full shadow-lg hover:from-yellow-400 hover:to-amber-500 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            Download Resume
          </motion.a>
        </div>
      </motion.div>
    </main>
  );
};

export default ResumePage;
