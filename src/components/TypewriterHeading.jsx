"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TypewriterHeading() {
  const titles = [
    "Computer Science Student",
    "React Developer",
    "Backend Developer",
    "Machine Learning Enthusiast",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentTitle = titles[currentIndex];

    // Typing effect
    if (!isDeleting && displayText !== currentTitle) {
      timeout = setTimeout(() => {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
      }, 100); // Typing speed
    }
    // Deletion effect
    else if (isDeleting && displayText !== "") {
      timeout = setTimeout(() => {
        setDisplayText(displayText.substring(0, displayText.length - 1));
      }, 50); // Deletion speed (faster than typing)
    } else if (!isDeleting && displayText === currentTitle) {
      // Pause at the end of the word before starting to delete
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
      timeout = setTimeout(() => {}, 500);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, titles]);

  return (
    <motion.p
      className="text-2xl font-bold text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-teal-700 text-center">{displayText}</span>
      <span className="ml-1 inline-block w-1 h-6 bg-teal-600 animate-pulse">
        |
      </span>
    </motion.p>
    );
}
