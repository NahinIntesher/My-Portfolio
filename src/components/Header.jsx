"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  "Home",
  "About",
  "Projects",
  "Achievements",
  "Contact",
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
    <nav className="bg-gray-950 bg-transparent backdrop-blur-3xl shadow-2xl sticky top-0 z-50 w-full border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
        <div className="relative group">
          <Link
            href="/"
            className="group relative text-2xl md:text-3xl font-extrabold text-amber-400 px-2 py-3 md:px-4 md:py-2 transition duration-300 ease-in-out"
            onMouseEnter={() => setShowLogoPopup(true)}
            onMouseLeave={() => setShowLogoPopup(false)}
          >
            <span className="text-amber-400 group-hover:text-amber-500 transition-all duration-300">
              Nahin
            </span>
            <span className="block absolute left-0 bottom-0 h-0.5 bg-amber-500 w-0 group-hover:w-full transition-all duration-300"></span>
          </Link>
          {showLogoPopup && (
            <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-2 top-full mt-2 bg-amber-400 shadow-lg p-4 rounded-lg min-w-max z-50">
              <p className="text-sm font-medium text-black ">
                Hello, I'm Nahin! Welcome to my portfolio page.
              </p>
            </div>
          )}
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
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
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`block px-3 py-2 md:px-2 md:py-1 lg:px-3 lg:py-2 xl:px-4 xl:py-2 text-white hover:text-indigo-300 transition-colors ${
                  activeItem === item ? "text-indigo-300" : ""
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item}
                <span className="block absolute left-0 bottom-0 h-0.5 bg-indigo-500 w-0 group-hover:w-full transition-all duration-300"></span>
              </Link>
              {item !== "Home" && (
                <div className="hidden group-hover:block absolute left-1/2 transform -translate-x-1/2 translate-y-2 top-full mt-1 bg-indigo-300 shadow-lg p-3 rounded-lg min-w-max z-50">
                  <p className="text-sm font-medium text-black">
                    {item === "About"
                      ? "Know about myself here"
                      : `Know about my ${item} here.`}
                  </p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;