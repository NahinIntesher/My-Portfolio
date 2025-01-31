"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const ResumePage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 bg-[#E7F5DC] to-[#98A77C]">
      <h1 className="text-5xl text-center text-[#98A77C] font-bold mb-10">
        My Resume
      </h1>
      <div className="bg-white border border-[#728156] p-6 rounded-lg shadow-md hover:shadow-lg cursor-default max-w-4xl">
        {/* Scrollable Container */}
        <div className="mb-4">
          <div className="text-center flex flex-col items-center">
            <p className="text-lg  mb-4">
              Welcome to my resume page! Here, you can find a detailed overview
              of my professional journey, including my skills, work experience,
              education, and achievements. My resume highlights my expertise in
              areas such as web development, project management, and
              problem-solving. It also showcases my commitment to continuous
              learning and my ability to adapt to new challenges.
            </p>
            <p className="text-lg text-gray-500">
              Click the button below to access my resume in PDF format. Thank
              you for visiting!
            </p>
          </div>
        </div>
        {/* View Resume Button */}
        <div className="flex flex-col items-center space-y-4">
          <a
            href="/resume.pdf" // Reference the PDF file in the public folder
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-400 hover:bg-amber-500 text-gray-900 hover:text-gray-900 px-4 py-2 rounded-lg shadow-md flex items-center "
          >
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            Download Resume
          </a>
        </div>
      </div>
    </main>
  );
};

export default ResumePage;
