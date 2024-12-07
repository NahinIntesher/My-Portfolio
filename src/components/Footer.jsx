import React from "react";
import { Linkedin, Github, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 text-sm py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm">
            <p>&copy; {currentYear} Nahin Intesher. All rights reserved.</p>
          </div>
          <div className="text-sm flex gap-1">
            <p className=""> Build by </p>
            <p className="text-indigo-300"> Nahin Intesher</p>
          </div>
          {/* Social Links */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <a
              href="https://www.linkedin.com/in/nahin-intesher-903724253/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-indigo-400 transition-colors duration-300"
            >
              <Linkedin size={20} />
              <span className="ml-1">LinkedIn</span>
            </a>
            <a
              href="https://github.com/nahinintesher"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-indigo-400 transition-colors duration-300"
            >
              <Github size={20} />
              <span className="ml-1">GitHub</span>
            </a>
            <a
              href="https://www.facebook.com/naahin.sikdar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-indigo-400 transition-colors duration-300"
            >
              <Facebook size={20} />
              <span className="ml-1">Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;