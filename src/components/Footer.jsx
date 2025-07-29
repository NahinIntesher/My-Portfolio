import React from "react";
import Link from "next/link";
import Image from "next/image";
import profile from "@/style/images/profilePic1.jpg";
import { Linkedin, Github, Facebook } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Achievements", path: "/achievements" },
  { label: "Contact", path: "/contact" },
  { label: "Blogs", path: "/blogs" },
  { label: "Resume", path: "/resume" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/nahinintesher/",
      label: "LinkedIn",
      icon: <Linkedin size={18} />,
    },
    {
      href: "https://github.com/nahinintesher",
      label: "GitHub",
      icon: <Github size={18} />,
    },
    {
      href: "https://www.facebook.com/nahinnintesher",
      label: "Facebook",
      icon: <Facebook size={18} />,
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-auto border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and copyright */}
          <div className="flex flex-col space-y-3">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={profile}
                alt="Nahin Intesher"
                className="rounded-full h-8 w-8  border border-gray-700"
                width={35}
                height={35}
              />
              <span className="text-xl font-bold text-emerald-400">
                Nahin Intesher
              </span>
            </Link>
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Nahin Intesher. All rights reserved.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-medium text-emerald-400">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {navItems.slice(0, 6).map((item) => (
                <Link
                  key={item.label}
                  href={item.path}
                  className="text-sm text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-medium text-emerald-400">Connect</h3>
            <div className="flex flex-col space-y-2">
              {socialLinks.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                >
                  <span className="mr-2">{icon}</span>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-4 border-t border-gray-800 text-sm text-center text-gray-500">
          <p>
            Designed & Developed with Next JS by{" "}
            <span className="text-emerald-400">Nahin Intesher</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
