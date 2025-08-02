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
    <main className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-10 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-100 mb-10 drop-shadow-lg"
      >
        Explore My <span className="text-emerald-400">Resume and CV</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gray-800 border border-gray-700 p-6 sm:p-8 rounded-3xl shadow-2xl w-full max-w-4xl hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)] transition-all duration-300"
      >
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-4"
          >
            Welcome to my resume page! Discover my professional journey, from
            skills and experience to achievements and education.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm sm:text-base text-gray-400 mb-8"
          >
            Click below to download or view my latest resume and CV in PDF
            format.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5">
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-gray-100 text-base sm:text-lg font-semibold rounded-2xl shadow-lg hover:from-emerald-600 hover:to-emerald-500 hover:shadow-emerald-500/20 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              Download My Resume
            </motion.a>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-gray-100 text-base sm:text-lg font-semibold rounded-2xl shadow-lg hover:from-emerald-600 hover:to-emerald-500 hover:shadow-emerald-500/20 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              Download My CV
            </motion.a>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default ResumePage;
