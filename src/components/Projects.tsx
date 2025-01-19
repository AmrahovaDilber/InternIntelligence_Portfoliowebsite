import { projectsData } from "../constant/data";
import ProjectCard from "./ProjectCard";
import { SparklesPreview } from "./SparklesPreview";

export function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-0">
        <SparklesPreview>Featured Projects</SparklesPreview>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 sm:mt-14">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

