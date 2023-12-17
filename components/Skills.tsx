import { ReactNode } from "react";
import SpringyDiv from "./MyComponents/SpringyDiv";
import { Card } from "./ui/card";

interface Skill {
  icon: ReactNode;
  name: string;
}

const Skills = ({ skills = [], title }: { skills: Skill[]; title: string }) => {
  return (
    <Card className="mt-6 bg-black text-muted-foreground border-1 flex flex-col items-center p-4 justify-center rounded-md space-y-4">
      <h2 className="flex items-center justify-center font-semibold text-lg text-white">
        {title}
      </h2>
      <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center p-2">
            <SpringyDiv className="hover:text-red-500 mb-1">
              {skill.icon}
            </SpringyDiv>
            <p className="truncate">{skill.name}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Skills;
