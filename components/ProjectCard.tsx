"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { FaCodepen, FaGithub } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ProjectCard = () => {
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
      }, 30) as unknown as number; // Cast the return value of setInterval to a number
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

  return (
    <div
      className="screen w-80 items-center justify-center flex"
      ref={screenRef}
    >
      <div className="screen-image"></div>
      <div className="screen-overlay"></div>
      <div className="screen-content">
        <div className="screen-user">
          <span
            className="name text-4xl font-extrabold pt-6 relative"
            ref={nameRef}
            data-value="AUTOPILOT"
          >
            AUTOPILOT
          </span>
          <p className="my-label truncate text-lg">PERSONAL PROJECT</p>
        </div>
        <div className="flex items-center justify-between space-x-10">
          <div className="flex flex-col items-center space-y-1">
            <a
              href="https://github.com"
              className="flex screen-icon items-center justify-center"
            >
              <FaGithub size={50} />
            </a>
            <p className="my-label text-sm text-center w-full">GitHub</p>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <a
              href="https://youtube.com"
              className="flex screen-icon items-center justify-center"
            >
              <CgWebsite size={50} />
            </a>
            <p className="my-label text-sm text-center w-full">Demo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
