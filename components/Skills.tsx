import { ReactNode } from "react";
import SpringyDiv from "./MyComponents/SpringyDiv";

interface Skill {
  icon: ReactNode;
  name: string;
}

const Skills = ({
  skills = [],
  title,
  cols = 5,
}: {
  skills: Skill[];
  title: string;
  cols?: number;
}) => {
  return (
    <div className="mt-6 bg-black text-muted-foreground border-1 flex flex-col items-center p-4 justify-center rounded-md space-y-4">
      <h2 className="flex items-center justify-center font-semibold text-lg text-white">
        {title}
      </h2>
      <div className={`grid grid-cols-3 md:grid-cols-${cols} gap-2`}>
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center p-2">
            <SpringyDiv className="hover:text-red-500 mb-1">
              {skill.icon}
            </SpringyDiv>
            <p className="truncate">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
