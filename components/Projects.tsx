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
      <div className="grid w-auto gap-10 grid-cols-1 md:grid-cols-2 items-center justify-center">
        <ProjectCard
          title="ChatPDF"
          label="In progress"
          githubUrl="https://github.com/redayzarra/ChatPDF"
          image=""
          demoUrl=""
          videoUrl=""
        />
        <div className="flex flex-col w-80 space-y-3">
          <h1 className="text-xl font-semibold mt-4 md:mt-0 flex items-center justify-center md:block">
            Hands-On Learning
          </h1>
          <p className="text-muted-foreground">
            I love building personal projects that challenge my understanding of
            good software engineering practices and computer science
            fundamentals. My goal is to write clean, efficient code while
            working on projects that inspire and excite me.
          </p>
        </div>
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
