import { motion } from "framer-motion";
import { techs } from "../constant/data";
import { SparklesPreview } from "./SparklesPreview";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

const Skills: React.FC = () => {
  return (
    <div id="skills" className="mx-auto max-w-[1280px] mt-20 px-6 sm:px-0">
      <SparklesPreview>Skills</SparklesPreview>
      
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12 sm:gap-6 mt-6 sm:mt-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-4 rounded-lg group transition-transform ease-in-out duration-300"
            variants={fadeInUp}
          >
            <div
              className="w-[170px] h-[170px] bg-[rgb(23,11,42)] flex flex-col items-center justify-center rounded-[25px] border-2 border-transparent group-hover:border-[#6f42c1] transform transition-all duration-500"
            >
              <img
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
      </motion.div>
    </div>
  );
};

export default Skills;
