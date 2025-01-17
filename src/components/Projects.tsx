import { projectsData } from "../constant/data";
import ProjectCard from "./ProjectCard";
import Title from "./Title";

export function Projects() {
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
}

