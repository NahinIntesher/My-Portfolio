"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import profile from "@/style/images/CodeScriba.png";
const navItems = [
  "Home",
  "About",
  "Projects",
  "Achievements",
  "Contact",
  "Blogs",
  "Resume",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [showLogoPopup, setShowLogoPopup] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-950 bg-transparent backdrop-blur-3xl  sticky top-0 z-50 w-full border-b border-gray-400">
      <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
        <div className="relative group flex">
          <Link
            href="/"
            className="group flex gap-2 relative text-2xl md:text-3xl font-extrabold text-[#728156] px-2 py-3 md:px-4 md:py-2 transition duration-300 ease-in-out"
            onMouseEnter={() => setShowLogoPopup(true)}
            onMouseLeave={() => setShowLogoPopup(false)}
          >
            <Image
              src={profile}
              alt="Nahin Intesher"
              className="rounded-xl h-8 w-8"
            />
            <span className="text-[#728156] group-hover:text-[#88976C] transition-all duration-300">
              Nahin
            </span>
            <span className="block absolute left-0 bottom-0 h-0.5 bg-[#B6C99B] w-0 group-hover:w-full transition-all duration-300"></span>
          </Link>
          {showLogoPopup && (
            <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-2 top-full mt-2 bg-[#B6C99B] shadow-lg p-4 rounded-lg min-w-max z-50">
              <p className="text-sm font-medium text-[#112B13]">
                Hello, I'm Nahin! Welcome to my portfolio page.
              </p>
            </div>
          )}
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#112B13] focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row w-full md:w-auto mt-4 md:mt-0 md:space-x-1 lg:space-x-2 xl:space-x-4`}
        >
          {navItems.map((item) => (
            <li key={item} className="relative group">
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase().trim()}`}
                className={`block px-3 py-2 md:px-2 md:py-1 lg:px-3 lg:py-2 xl:px-4 xl:py-2 text-[#112B13] hover:text-[#728156] transition-colors ${
                  activeItem === item
                    ? "text-amber-900 border-b-2 border-[#98A77C]"
                    : ""
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item}
                <span className="block absolute left-0 bottom-0 h-0.5 bg-[#98A77C] w-0 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
