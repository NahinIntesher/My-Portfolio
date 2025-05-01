import React from "react";
import Link from "next/link";
import Image from "next/image";
import profile from "@/style/images/CodeScriba.png";
import { Linkedin, Github, Facebook } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Achievements", path: "/achievements" },
  { label: "Contact", path: "/contact" },
  { label: "Blogs", path: "/blogs" },
  { label: "Resume", path: "/resume" },
];
// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/nahin-intesher-903724253/",
      label: "LinkedIn",
      icon: <Linkedin size={18} />,
    },
    {
      href: "https://github.com/nahinintesher",
      label: "GitHub",
      icon: <Github size={18} />,
    },
    {
      href: "https://www.facebook.com/naahin.sikdar",
      label: "Facebook",
      icon: <Facebook size={18} />,
    },
  ];

  return (
    <footer className="bg-[#112B13] text-[#E7F5DC] py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and copyright */}
          <div className="flex flex-col space-y-3">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={profile}
                alt="Nahin Intesher"
                className="rounded-full h-8 w-8"
                width={32}
                height={32}
              />
              <span className="text-xl font-bold text-[#98A77C]">
                Nahin Intesher
              </span>
            </Link>
            <p className="text-sm text-gray-300">
              &copy; {currentYear} Nahin Intesher. All rights reserved.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-medium text-[#98A77C]">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {navItems.slice(0, 6).map((item) => (
                <Link
                  key={item.label}
                  href={item.path}
                  className="text-sm text-[#E7F5DC] hover:text-[#B6C99B] transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-medium text-[#98A77C]">Connect</h3>
            <div className="flex flex-col space-y-2">
              {socialLinks.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#E7F5DC] hover:text-[#B6C99B] transition-colors duration-300"
                >
                  <span className="mr-2">{icon}</span>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-4 border-t border-gray-700 text-sm text-center text-gray-400">
          <p>
            Designed & Developed by{" "}
            <span className="text-[#98A77C]">Nahin Intesher</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
