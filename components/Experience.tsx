import React from "react";
import MagIcon from "./MyComponents/SpringyDiv";
import { FaHtml5 } from "react-icons/fa6";
import GlassCard from "./MyComponents/GlassCard";
import FakeEarth from "./MyComponents/Earth";
import dynamic from "next/dynamic";

const Earth = dynamic(() => import("@/components/MyComponents/Earth"), {
  ssr: false,
});

const Experience = () => {
  return (
    <div className="flex flex-col justify center">
      - Frontend - Backend - Machine Learning
      <div className="flex gap-2 text-zinc-500">
        
      </div>
      <div className="flex mt-24 items-center justify-center">
        <MagIcon>
          <FaHtml5 size={200} className="p-10" />
        </MagIcon>
      </div>
      <div className="flex bg-red-400">
        <Earth />
      </div>
    </div>
  );
};

export default Experience;
