import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faLinkedin,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Define the props type for the SocialButton component
interface SocialButtonProps {
  href: string;
  icon: any; // You can replace 'any' with the specific type if you want more strict typing
  label: string;
  bgColor: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  href,
  icon,
  label,
  bgColor,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center justify-center ${bgColor} text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1`}
  >
    <FontAwesomeIcon icon={icon} className="w-5 h-5 mr-2 text-white" />{" "}
    {/* Keep icon color white */}
    <span className="whitespace-nowrap text-white">{label}</span>{" "}
    {/* Keep text color white */}
  </a>
);

const Contact: React.FC = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-950 to-blue-950 text-white px-4 py-12">
      <div className="max-w-3xl w-full bg-gray-800  rounded-xl shadow-2xl p-8 backdrop-blur-md">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center text-blue-200">
          Let's Connect
        </h1>
        <div className="mb-8 text-center">
          <p className="text-lg mb-4">
            I'm always open to new opportunities and collaborations.
          </p>
          <p className="text-gray-300">
            Feel free to reach out through any of the platforms below:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SocialButton
            href="https://github.com/nahinintesher"
            icon={faGithub}
            label="GitHub"
            bgColor="bg-gray-700 hover:bg-gray-600"
          />
          <SocialButton
            href="https://www.linkedin.com/in/nahin-intesher-903724253/"
            icon={faLinkedin}
            label="LinkedIn"
            bgColor="bg-sky-700 hover:bg-sky-600"
          />
          <SocialButton
            href="https://www.facebook.com/naahin.sikdar"
            icon={faFacebook}
            label="Facebook"
            bgColor="bg-blue-700 hover:bg-blue-600"
          />
          <SocialButton
            href="mailto:nahinsikdar123@gmail.com"
            icon={faEnvelope}
            label="Email"
            bgColor="bg-green-700 hover:bg-green-600"
          />
          <SocialButton
            href="https://www.youtube.com/@nahinintesher1458"
            icon={faYoutube}
            label="YouTube"
            bgColor="bg-red-600 hover:bg-red-500"
          />
          <SocialButton
            href="https://www.instagram.com/yourusername" // Update with your Instagram link
            icon={faInstagram}
            label="Instagram"
            bgColor="bg-pink-600 hover:bg-pink-500"
          />
        </div>
      </div>
    </main>
  );
};

export default Contact;
