"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import profile from "@/style/images/CodeScriba.png";

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
  const [activeItem, setActiveItem] = useState("Home"); // Default to Home
  const [showLogoPopup, setShowLogoPopup] = useState(false);

  useEffect(() => {
    // Set active item based on current path
    const currentPath = window.location.pathname;
    const activeNav = navItems.find((item) => item.path === currentPath);
    if (activeNav) {
      setActiveItem(activeNav.label);
    }

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
    <nav className="bg-gray-900 bg-opacity-90 backdrop-blur-lg sticky top-0 z-50 w-full border-b border-gray-700">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="relative group">
          <Link
            href="/"
            className="group flex items-center gap-2 text-2xl font-bold text-gray-200 transition duration-300 ease-in-out"
            onMouseEnter={() => setShowLogoPopup(true)}
            onMouseLeave={() => setShowLogoPopup(false)}
          >
            <span className="text-gray-200 group-hover:text-emerald-400 transition-all duration-300">
              Nahin Intesher
            </span>
            <span className="block absolute left-0 bottom-0 h-0.5 bg-emerald-500 w-0 group-hover:w-full transition-all duration-300"></span>
          </Link>

          {showLogoPopup && (
            <div className="absolute left-0 top-full mt-2 bg-gray-800 text-gray-200 shadow-lg p-3 rounded-lg z-50 w-64 border border-gray-700">
              <p className="text-sm font-medium">A Computer Science Student</p>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-400 hover:text-emerald-400 focus:outline-none p-2 transition-colors"
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
              ? "flex absolute top-full left-0 right-0 bg-gray-900 bg-opacity-95 backdrop-blur-lg border-t border-gray-700"
              : "hidden md:block"
          } w-full md:w-auto transition-all duration-300`}
        >
          <ul className="flex flex-col md:flex-row w-full md:w-auto md:items-center md:space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <li key={item.label} className="relative group">
                <Link
                  href={item.path}
                  className={`block px-4 py-3 md:px-3 md:py-2 lg:px-4 lg:py-2 transition-colors duration-300 ${
                    activeItem === item.label
                      ? "text-emerald-400 font-medium"
                      : "text-gray-300 hover:text-emerald-400"
                  }`}
                  onClick={() => handleItemClick(item.label)}
                >
                  {item.label}
                  <span
                    className={`block absolute left-0 bottom-0 h-0.5 bg-emerald-500 transition-all duration-300 ${
                      activeItem === item.label
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
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
