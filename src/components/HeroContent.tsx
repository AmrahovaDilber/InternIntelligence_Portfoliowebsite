"use client";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const HeroContent:React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className=" flex flex-row  mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border w-[250px] border-[#7042f88b] opacity-[0.9] flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-900 rounded-lg shadow-lg"
        >
          <SparklesIcon className="text-[#ffcc00] h-6 w-6" />
          <h1 className="Welcome-text text-[14px] text-white font-semibold">
            Frontend Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project exprience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I'm a Frontend Developer passionate about creating visually stunning
          and highly interactive user experiences. With expertise in modern web
          technologies like React, Next.js, and Tailwind CSS, I bring designs to
          life with precision and creativity.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-3 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-center text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <img
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
