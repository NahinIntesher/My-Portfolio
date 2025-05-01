"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import profile from "@/style/images/CodeScriba.png";

// Navigation item definitions with paths and labels
const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Achievements", path: "/achievements" },
  { label: "Contact", path: "/contact" },
  { label: "Blogs", path: "/blogs" },
  { label: "Resume", path: "/resume" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [showLogoPopup, setShowLogoPopup] = useState(false);

  // Close mobile menu when screen is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle scroll to set active menu item based on current section
  useEffect(() => {
    const handleScroll = () => {
      // Logic to determine active section could be implemented here
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-950 bg-opacity-80 backdrop-blur-lg sticky top-0 z-50 w-full border-b border-gray-800">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="relative group">
          <Link
            href="/"
            className="group flex items-center gap-2 text-2xl font-bold text-[#728156] transition duration-300 ease-in-out"
            onMouseEnter={() => setShowLogoPopup(true)}
            onMouseLeave={() => setShowLogoPopup(false)}
          >
            <Image
              src={profile}
              alt="Nahin Intesher"
              className="rounded-full h-10 w-10 object-cover"
              width={40}
              height={40}
            />
            <span className="text-[#728156] group-hover:text-[#98A77C] transition-all duration-300">
              Nahin Intesher
            </span>
            <span className="block absolute left-0 bottom-0 h-0.5 bg-[#B6C99B] w-0 group-hover:w-full transition-all duration-300"></span>
          </Link>

          {showLogoPopup && (
            <div className="absolute left-0 top-full mt-2 bg-[#112B13] text-[#E7F5DC] shadow-lg p-3 rounded-lg z-50 w-64">
              <p className="text-sm font-medium">
                Full-Stack Developer & UI/UX Designer
              </p>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#728156] focus:outline-none p-2"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
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

        {/* Navigation items */}
        <div
          className={`${
            isOpen
              ? "flex absolute top-16 left-0 right-0 bg-gray-950 bg-opacity-95 backdrop-blur-lg"
              : "hidden md:block"
          } w-full md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row w-full md:w-auto md:items-center md:space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <li key={item.label} className="relative group">
                <Link
                  href={item.path}
                  className={`block px-4 py-3 md:px-3 md:py-2 lg:px-4 lg:py-2 text-[#E7F5DC] hover:text-[#B6C99B] transition-colors duration-300 ${
                    activeItem === item.label
                      ? "text-[#B6C99B] font-medium"
                      : ""
                  }`}
                  onClick={() => handleItemClick(item.label)}
                >
                  {item.label}
                  <span className="block absolute left-0 bottom-0 h-0.5 bg-[#98A77C] w-0 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
