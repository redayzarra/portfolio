import React from "react";
import MagIcon from "./MyComponents/SpringyDiv";
import { FaHtml5 } from "react-icons/fa6";
import GlassCard from "./MyComponents/GlassCard";

const Experience = () => {
  return (
    <div className="flex flex-col justify center">
      - Frontend - Backend - Machine Learning
      <div className="flex gap-2 text-zinc-500">
        <GlassCard className="rounded-lg p-2">
          Lorem ipsum dolor sit amet.
        </GlassCard>
        <GlassCard className="rounded-lg p-2">
          Quos nesciunt fuga perspiciatis neque.
        </GlassCard>
        <GlassCard className="rounded-lg p-2">
          Autem modi accusamus consequuntur quaerat?
        </GlassCard>
        <GlassCard className="rounded-lg p-2">
          Modi aspernatur optio vitae nobis.
        </GlassCard>
        <GlassCard className="rounded-lg p-2">
          Repellat eius placeat porro est?
        </GlassCard>
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
