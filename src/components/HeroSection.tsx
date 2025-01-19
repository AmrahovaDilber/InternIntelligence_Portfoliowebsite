import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";
import DownloadCv from "./DownloadCv";

const HeroSection: React.FC = () => {
  return (
    <div
      id="home"
      className="flex items-center justify-between mt-24 lg:mt-32 max-w-[1280px] w-full mx-auto px-6 lg:px-0"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex flex-col lg:flex-row items-center gap-10 max-w-[1280px] w-full mx-auto"
      >

        <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left lg:max-w-[54%]">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
          >
            Hi, I'm <span className="text-purple-500">Dilber Amrahova</span>
          </motion.h1>

          <TypeAnimation
            sequence={[
              "Front-End Developer.",
              1000,
              "Creative Problem Solver.",
              1000,
              "Innovative Thinker.",
              1000,
             
              
            ]}
            speed={63}
            style={{ fontSize: "1.8em",fontWeight:500,fontStyle:"italic"  }}
            repeat={Infinity}
          />

<motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="text-gray-200 text-base sm:text-lg leading-relaxed"
          >
            My goal is to turn ideas into stunning, functional web applications
            that leave a lasting impression. Let's create something amazing
            together!
          </motion.p>
          <div className="flex items-center gap-5  mt-6">
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

        {/* Image Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[500px] md:h-[500px]"
        >
          <img
            src="/myphoto.jpg"
            alt="Dilber Amrahova"
            className="rounded-full w-full h-full shadow-2xl object-cover border-[12px] border-double bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 p-1 shadow-indigo-500/80 transition-all duration-300"
          />
        <div className="absolute -top-6 -right-6 w-[60px] h-[60px] bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full shadow-md "></div>
          <div className="absolute -bottom-6 -left-6 w-[60px] h-[60px] bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full shadow-md "></div>
          <div className="absolute top-8 right-8 w-[40px] h-[40px] bg-white rounded-full opacity-20"></div>
          <div className="absolute bottom-10 left-10 w-[30px] h-[30px] bg-purple-500 rounded-full opacity-40 animate-bounce"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
