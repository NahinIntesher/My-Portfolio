import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypewriterHeading = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(50); // Speed of typing and deleting

  const fullText = "Problem Solver & Dedicated Developer";

  useEffect(() => {
    let typingTimeout;
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (text !== fullText) {
          setText(fullText.slice(0, text.length + 1));
          setTypingSpeed(50); // Slower for typing
        } else {
          setIsDeleting(true);
          setTypingSpeed(3000); // Pause at the end
        }
      } else {
        // Deleting
        if (text !== "") {
          setText(text.slice(0, -1));
          setTypingSpeed(50); // Faster for deleting
        } else {
          setIsDeleting(false);
          setTypingSpeed(1000); // Pause before typing again
        }
      }
    };

    typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, typingSpeed]);

  // Define variants without TypeScript type
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.6 }, // Move transition into each state
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.h2
      className="text-md text-[#112B13] mb-6 "
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {text}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="text-[#728156]"
      >
        |
      </motion.span>
    </motion.h2>
  );
};

export default TypewriterHeading;
