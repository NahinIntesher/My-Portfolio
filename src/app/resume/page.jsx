"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import resume from "@/public/images/resume.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const ResumePage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Function to trigger image download
  const handleDownload = (imageSrc, filename) => {
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 bg-[#E7F5DC] to-[#98A77C]">
      <h1 className="text-5xl text-center text-[#98A77C] font-bold mb-10">
        My Resume
      </h1>
      <div className="bg-[#98A77C] rounded-lg shadow-md p-5 max-w-4xl">
        {/* Scrollable Container */}
        <div className="mb-4">
          <div className="text-center flex flex-col items-center">
            {isClient && (
              <>
                <Image
                  src={resume}
                  width={900}
                  alt="Resume Preview"
                  className="rounded-md"
                />
              </>
            )}
          </div>
        </div>
        {/* Download Buttons */}
        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={() => handleDownload(resume.src, "resume.png")}
            className="bg-amber-400 hover:bg-amber-500 text-gray-900 px-4 py-2 rounded-lg shadow-md flex items-center"
          >
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            Download
          </button>
        </div>
      </div>
    </main>
  );
};

export default ResumePage;
