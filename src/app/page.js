"use client";
import Image from "next/image";
import profile from "@/public/images/ProfilePic1.jpg";
import TypewriterHeading from "@/components/TypewriterHeading";
import { FaBrain, FaMobileAlt, FaLaptopCode, FaRobot } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#E7F5DC] text-[#112B13] px-4">
      <div className="text-center max-w-4xl w-full p-4">
        <div className="mb-8 relative">
          <div className="w-48 h-48 rounded-full overflow-hidden mx-auto border-4 border-[#728156] shadow-lg mt-5">
            <Image
              src={profile}
              alt="Nahin Intesher"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-[#728156]">
          I'm Nahin Intesher
        </h1>
        <TypewriterHeading />
        <div className="flex flex-col gap-2 sm:flex-row justify-center space-x-0 sm:space-x-4 mt-4">
          <Link
            href="/projects"
            className="bg-transparent hover:bg-[#98A77C] text-[#112B13] hover:text-white font-semibold py-2 px-4 border border-[#88976C] hover:border-transparent rounded-lg transition duration-300"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="bg-transparent hover:bg-[#98A77C] text-[#112B13] hover:text-white font-semibold py-2 px-4 border border-[#88976C] hover:border-transparent rounded-lg transition duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>
      <div className="mt-16 mb-5 text-center">
        <p className="text-lg  mb-4">Want to Specialize in</p>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { label: "Mobile App Development", icon: <FaMobileAlt /> },
            { label: "Artificial Intelligence", icon: <FaBrain /> },
            { label: "Machine Learning", icon: <FaRobot /> },
            { label: "Cyber Security", icon: <FaLaptopCode /> },
          ].map(({ label, icon }) => (
            <span
              key={label}
              className="bg-white border border-[#98A77C] px-3 py-2 rounded-lg text-sm flex items-center"
            >
              {icon}
              <span className="ml-2">{label}</span>
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
