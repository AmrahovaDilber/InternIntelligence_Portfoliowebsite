"use client";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";
import DownloadCv from "./DownloadCv";

const HeroSection = () => {
  return (
    <div
      id="home"
      className="flex items-center justify-between mt-32 max-w-[1280px] w-full mx-auto  px-6 lg:px-0"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex flex-col lg:flex-row items-center gap-10 max-w-[1280px] w-full mx-auto"
      >
        <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left lg:max-w-[52%]">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white text-5xl sm:text-6xl font-extrabold tracking-tight"
          >
            Hi, I'm Dilber Amrahova
          </motion.div>

          <motion.p
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-300 text-lg"
          >
            Passionate Front-End Developer with a love for crafting engaging
            user experiences and pixel-perfect designs.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="text-gray-400 leading-relaxed"
          >
            I specialize in React, Next.js, and modern design frameworks like
            TailwindCSS. My goal is to turn ideas into stunning, functional web
            applications that leave a lasting impression. Let's create something
            amazing together!
          </motion.p>

          <div className="flex items-center gap-5 mt-4">
            <div className="bg-transparent border-4 border-gradient-to-r border-violet-500 from-indigo-500 to-purple-600 text-xl flex w-10 h-10 sm:w-12 sm:h-12 rounded-full justify-center items-center">
              <a
                href="https://github.com/AmrahovaDilber"
                className="text-lg sm:text-xl font-semibold"
              >
                <FaGithub size={24} />
              </a>
            </div>
            <div className="bg-transparent border-4 border-gradient-to-r border-violet-500 from-indigo-500 to-purple-600 text-xl flex w-10 h-10 sm:w-12 sm:h-12 rounded-full justify-center items-center">
              <a
                href="https://www.linkedin.com/in/dilb%C9%99r-%C9%99mrahova"
                className="text-lg sm:text-xl font-semibold"
              >
                <SiLinkedin size={24} />
              </a>
            </div>

            <div className="bg-transparent border-4 border-gradient-to-r border-violet-500 from-indigo-500 to-purple-600 text-xl flex w-10 h-10 sm:w-12 sm:h-12 rounded-full justify-center items-center">
              <a
                href="mailto:dilberamrahova1@gmail.com"
                className="text-lg sm:text-xl font-semibold"
              >
                <MdOutlineEmail size={24} />
              </a>
            </div>
          </div>

          <DownloadCv />
        </div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] "
        >
          <img
            src="/myphoto.jpg"
            alt="Dilber Amrahova"
            className="rounded-full w-full h-full shadow-2xl object-cover border-[12px] border-double bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 p-1 hover:shadow-indigo-500/80 transition-all duration-300"
          />
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-[60px] h-[60px] bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full shadow-md animate-pulse"></div>
          <div className="absolute -bottom-6 -left-6 w-[60px] h-[60px] bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full shadow-md animate-pulse"></div>
          <div className="absolute top-8 right-8 w-[40px] h-[40px] bg-white rounded-full opacity-20"></div>
          <div className="absolute bottom-10 left-10 w-[30px] h-[30px] bg-purple-500 rounded-full opacity-40 animate-bounce"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
