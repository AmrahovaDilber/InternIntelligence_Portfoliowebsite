"use client";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { SparklesPreview } from "./SparklesPreview";

const AboutMe: React.FC = () => {
  return (
    <div id="about" className="lg:px-0 px-8  max-w-7xl mx-auto w-full">
      <SparklesPreview>About me</SparklesPreview>
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row w-full z-[20] gap-8 mt-14"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-center text-start">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border w-full sm:w-[250px] border-[#7042f88b] opacity-[0.9] flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-900 rounded-lg shadow-lg"
          >
            <SparklesIcon className="text-[#ffcc00] h-6 w-6" />
            <h1 className="Welcome-text text-[14px] sm:text-[16px] text-white font-semibold">
              Frontend Developer
            </h1>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-300 my-5 max-w-[600px] sm:max-w-none"
          >
            My name is Dilbər Əmrahova, and I am a front-end developer with a
            passion for creating engaging, user-friendly digital experiences.
            Currently, I am pursuing a degree in Information Technology at the
            University of Economics. Throughout my learning journey, I’ve
            developed a strong command of modern tools and technologies,
            including:
            <ul className="list-disc ml-5 mt-3">
              <li>
                <strong>Core Technologies:</strong> HTML5, CSS3, JavaScript
                (ES6+)
              </li>
              <li>
                <strong>JavaScript Libraries & Frameworks:</strong> React,
                Next.js, Redux, Context API.js
              </li>
              <li>
                <strong>Styling Tools:</strong> SASS/SCSS, Tailwind CSS, Styled
                Components, CSS Modules
              </li>
              <li>
                <strong>Version Control:</strong> Git, GitHub
              </li>
              <li>
                <strong>UI/UX Principles:</strong> Responsive Design,
                Mobile-First Approach
              </li>
              <li>
                <strong>Testing:</strong> Jest, React Testing Library
              </li>
              <li>
                <strong>Performance Optimization:</strong> Web Vitals,
                Lighthouse
              </li>
              <li>
                <strong>Additional Tools:</strong> TypeScript, RESTful APIs
              </li>
              <li>
                <strong>Deployment:</strong> Netlify, Vercel
              </li>
            </ul>
          </motion.p>
        </div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full h-full flex justify-center items-center"
        >
          <img
            src="/mainIconsdark.svg"
            alt="work icons"
            className="w-[500px] lg:w-[600px]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
