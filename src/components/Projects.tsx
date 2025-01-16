import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { projectsData } from "../constant/data";
import Title from "./Title";


interface Project {
  id: number; 
  title: string;
  des: string;
  link: string;
  image: string;
  icons: string[];
}

const Projects = () => {
  return (
    <section id="projects" className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <Title>Featured Projects</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <PinContainer title={project.title} href={project.link}>
      <div className="flex flex-col h-full">
        <div className="relative h-48 rounded-t-2xl overflow-hidden group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="flex-1 p-6 bg-[rgb(23,11,42)] rounded-b-2xl">
          <h3 className="text-xl font-bold text-white mb-3 line-clamp-1">
            {project.title}
          </h3>

          <p className="text-gray-300 text-sm mb-4 line-clamp-3">
            {project.des}
          </p>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex -space-x-2">
              {project.icons.map((icon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative w-8 h-8 rounded-full bg-[#13162d] p-1.5 border border-white/10 hover:border-white/30 transition-colors duration-200"
                >
                  <img src={icon} alt="" className="w-full h-full object-contain" />
                </motion.div>
              ))}
            </div>

            <span className="inline-flex items-center text-sm font-medium text-purple-400 group-hover:text-purple-300 transition-colors duration-200">
              View Project
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </PinContainer>
  );
};


interface PinContainerProps {
  children: React.ReactNode;
  title: string;
  href: string;
  className?: string;
  containerClassName?: string;
}

export const PinContainer = ({
  children,
  title,
  href,
  className = '',
  containerClassName = ''
}: PinContainerProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <motion.a
      href={href}
      className={`group/pin relative block transform transition-all duration-300 hover:-translate-y-2 ${containerClassName}`}
      whileHover={{ scale: 1.02 }}
    >
      <div className={`relative bg-gradient-to-b from-white/5 to-transparent rounded-2xl p-[1px] shadow-lg ${className}`}>
        <div className="relative rounded-2xl overflow-hidden">
          {children}
        </div>
      </div>

      {isHydrated && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-purple-500/10 backdrop-blur-sm rounded-full border border-purple-500/20"
        >
          <span className="text-xs font-medium text-purple-300">
            {title}
          </span>
        </motion.div>
      )}
    </motion.a>
  );
};

export default Projects;
