import { techs } from "../constant/data";
import Title from "./Title";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Skills = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="skills" className="mx-auto max-w-[1280px] mt-20 px-6 sm:px-0">
      <Title>Skills</Title>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12 sm:gap-6">
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={hasScrolled ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col items-center p-4 rounded-lg group transition-transform ease-in-out duration-300"
          >
            <div
              className="w-[170px] h-[170px] bg-[rgb(23,11,42)] flex flex-col items-center justify-center rounded-[25px] border-2 border-transparent group-hover:border-[#6f42c1] transform transition-all duration-500"
            >
              <motion.img
                src={tech.src}
                width={90}
                height={90}
                alt={tech.name}
                className="object-cover rounded-[25px] grayscale group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="mt-4 text-lg text-white group-hover:text-[#6f42c1] transition-colors duration-300">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
