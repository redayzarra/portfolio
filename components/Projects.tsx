import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="grid gap-14 grid-cols-1 md:grid-cols-2 items-center justify-center">
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
