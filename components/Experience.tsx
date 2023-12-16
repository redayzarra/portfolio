import React from "react";
import MagIcon from "./SpringyDiv";
import { FaHtml5 } from "react-icons/fa6";
import GlassyCard from "./GlassyCard";

const Experience = () => {
  return (
    <div className="flex flex-col justify center">
      - Frontend - Backend - Machine Learning
      <div className="flex gap-2 text-zinc-500">
        <GlassyCard
          gradientSize={200}
          gradientPower={0.25}
          className=" h-24 w-24 rounded-lg p-2"
        >
          This is a glassy card
        </GlassyCard>
        <GlassyCard
          gradientSize={200}
          gradientPower={0.25}
          className="h-24 w-24 rounded-lg p-2"
        >
          This is my second card
        </GlassyCard>
        <GlassyCard
          gradientSize={200}
          gradientPower={0.25}
          className="h-24 w-24 rounded-lg p-2"
        >
          This is the third card
        </GlassyCard>
        <GlassyCard
          gradientSize={200}
          gradientPower={0.25}
          className="h-24 w-24 rounded-lg p-2"
        >
          Lorem ipsum dolor.
        </GlassyCard>
      </div>
      <div className="flex mt-24 items-center justify-center">
        <MagIcon>
          <FaHtml5 size={200} className="p-10" />
        </MagIcon>
        <MagIcon>
          <FaHtml5 size={200} className="p-10" />
        </MagIcon>
        <MagIcon>
          <FaHtml5 size={200} className="p-10" />
        </MagIcon>
      </div>
    </div>
  );
};

export default Experience;
