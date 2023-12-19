import React from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  label: string;
  githubUrl: string;
  image: string;
  demoUrl: string;
  videoUrl: string;
}

interface Props {
  projects: Project[];
}

const Projects = ({ projects }: Props) => {
  return (
    <div className="flex items-center justify-center">
      <div className="grid gap-14 grid-cols-1 md:grid-cols-2 items-center justify-center">
        {projects.map((project) => {
          const { title, label, githubUrl, image, demoUrl, videoUrl } = project;
          return (
            <ProjectCard
              key={title}
              title={title}
              label={label}
              githubUrl={githubUrl}
              image={image}
              demoUrl={demoUrl}
              videoUrl={videoUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
