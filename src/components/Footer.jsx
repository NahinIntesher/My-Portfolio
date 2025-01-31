import React from "react";
import { Linkedin, Github, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#728156] text-[#E7F5DC] text-sm py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm">
            <p>&copy; {currentYear} Nahin Intesher. All rights reserved.</p>
          </div>
          <div className="text-sm flex gap-1">
            <p>Build by</p>
            <p className="text-[#98A77C]">Nahin Intesher</p>
          </div>
          {/* Social Links */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            {[
              {
                href: "https://www.linkedin.com/in/nahin-intesher-903724253/",
                label: "LinkedIn",
                icon: <Linkedin size={20} />,
              },
              {
                href: "https://github.com/nahinintesher",
                label: "GitHub",
                icon: <Github size={20} />,
              },
              {
                href: "https://www.facebook.com/naahin.sikdar",
                label: "Facebook",
                icon: <Facebook size={20} />,
              },
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[#E7F5DC] hover:text-[#B6C99B] transition-colors duration-300"
              >
                {icon}
                <span className="ml-1">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
