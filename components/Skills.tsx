import { ReactNode } from "react";
import SpringyDiv from "./MyComponents/SpringyDiv";

interface Skill {
  icon: ReactNode;
  name: string;
}

interface Props {
  skills: Skill[];
  title: string;
  cols?: number;
}

const Skills = ({ skills = [], title, cols = 5 }: Props) => {
  return (
    <div className="mt-6 dark text-muted-foreground border-1 flex flex-col items-center p-4 justify-center rounded-md space-y-4">
      <h2 className="flex items-center justify-center font-semibold text-lg text-white">
        {title}
      </h2>
      <div className={`grid grid-cols-4 md:grid-cols-6 gap-3`}>
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center p-2">
            <SpringyDiv className="hover:text-white mb-1 hidden md:flex">
              {skill.icon}
            </SpringyDiv>
            <div className="flex md:hidden">{skill.icon}</div>
            <p className="truncate text-sm">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
