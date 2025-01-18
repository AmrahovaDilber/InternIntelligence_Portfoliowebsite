import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black bg-opacity-80 text-white py-10 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/path-to-stars-image.jpg')] bg-cover opacity-20 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://github.com/AmrahovaDilber"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition"
            aria-label="GitHub"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://linkedin.com/in/dilber-amrahova"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition"
            aria-label="Twitter"
          >
            <FaTwitter size={30} />
          </a>
        </div>

        <div className="text-sm text-gray-400 space-y-2">
          <p>
            Email:{" "}
            <a
              href="mailto:dilberamrahova1@gmail.com"
              className="hover:text-purple-400"
            >
              dilberamrahova1@gmail.com
            </a>
          </p>
   
        </div>

        <div className="mt-6 text-gray-500 text-xs">
          © {new Date().getFullYear()} Dilber Portfolio. Let's create something
          amazing.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
