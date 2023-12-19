"use client";

import { useEffect, useRef } from "react";
import { FaGithub, FaYoutube } from "react-icons/fa6";
import { MdWeb } from "react-icons/md";

interface Props {
  title: string;
  label: string;
  githubUrl: string;
  image: string;
  demoUrl: string;
  videoUrl: string;
}

const ProjectCard = ({
  title,
  label,
  githubUrl,
  image,
  demoUrl,
  videoUrl,
}: Props) => {
  const screenRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval: number | null = null;

    const handleMouseEnter = () => {
      let iteration = 0;

      if (interval !== null) clearInterval(interval);

      interval = setInterval(() => {
        if (nameRef.current) {
          nameRef.current.innerText = nameRef.current.innerText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return nameRef.current!.dataset.value![index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iteration >= nameRef.current.dataset.value!.length) {
            if (interval !== null) clearInterval(interval);
          }

          iteration += 1 / 3;
        }
      }, 30) as unknown as number;
    };

    const screenElement = screenRef.current;
    screenElement?.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      if (screenElement) {
        screenElement.removeEventListener("mouseenter", handleMouseEnter);
      }
      if (interval) clearInterval(interval);
    };
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div
      className="screen w-80 items-center justify-center flex"
      ref={screenRef}
    >
      <div className="screen-image" style={backgroundImageStyle}></div>
      <div className="screen-overlay"></div>
      <div className="screen-content">
        <div className="screen-user">
          <span
            className="name text-4xl font-extrabold pt-6 relative truncate"
            ref={nameRef}
            data-value={title}
          >
            {title}
          </span>
          <p className="my-label truncate text-lg">{label}</p>
        </div>
        <div className="flex items-center justify-between space-x-10">
          <div className="flex flex-col items-center space-y-1">
            <a
              href={githubUrl}
              className="flex screen-icon items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={50} />
            </a>
            <p className="my-label text-sm text-center w-full">GitHub</p>
          </div>
          {!videoUrl ? (
            <div className="flex flex-col items-center space-y-1">
              <a
                href={demoUrl}
                className="flex screen-icon items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdWeb size={50} />
              </a>
              <p className="my-label text-sm text-center w-full">Demo</p>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-1">
              <a
                href={videoUrl}
                className="flex screen-icon items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={50} />
              </a>
              <p className="my-label text-sm text-center w-full">video</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
