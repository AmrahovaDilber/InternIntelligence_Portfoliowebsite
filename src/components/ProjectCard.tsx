import { ProjectType } from "../type/types";
import { PinContainer } from "./3d-pin";

interface ProjectProps{
    project:ProjectType
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="w-full flex items-center justify-center mb-10 lg:mb-0">
      <PinContainer title={project.title} href={project.link || "#"}>
        <div className="flex flex-col   text-slate-100/50 w-[20rem] h-[20rem]  rounded-lg shadow-lg">
          <div className="relative flex items-center justify-center w-full h-40 mb-4 overflow-hidden bg-[#13162d] rounded-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full"
            />
          </div>

          <h1 className="font-bold text-lg text-center text-white line-clamp-1">
            {project.title}
          </h1>
          <p className="text-sm text-gray-400 line-clamp-2">{project.des}</p>
          <div className="flex items-center justify-between mt-5 mb-2">
            <div className="flex items-center">
              {project.icons.map((icon, index) => (
                <div
                  key={index}
                  className="border border-white/[0.2] rounded-full bg-black lg:w-8 lg:h-8 w-6 h-6 flex justify-center items-center text-white"
                  style={{ transform: `translateX(-${index * 8}px)` }}
                >
                  <img src={icon} alt={icon} className="p-1" />
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center">
              <p className="flex lg:text-base md:text-xs text-xs text-purple text-white">
                Check Live Site
              </p>
            </div>
          </div>
        </div>
      </PinContainer>
    </div>
  );
};

export default ProjectCard;
