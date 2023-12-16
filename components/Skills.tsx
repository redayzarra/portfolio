import { FaHtml5 } from "react-icons/fa6";
import SpringyDiv from "./MyComponents/SpringyDiv";
import { Card } from "./ui/card";

const Skills = () => {
  return (
    <Card className="mt-6 bg-black text-muted-foreground border-1 flex flex-col items-center p-4 justify-center rounded-md space-y-4">
      <h2 className="flex items-center justify-center font-semibold text-lg text-white">
        Skills
      </h2>
      <div className="grid grid-cols-4 md:grid-cols-5 gap-3">
        <div className="flex flex-col items-center p-2">
          <SpringyDiv className="hover:text-red-500">
            <FaHtml5 size={80} />
          </SpringyDiv>
          Name
        </div>
        <div className="flex flex-col items-center p-2">
          <SpringyDiv className="hover:text-red-500">
            <FaHtml5 size={80} />
          </SpringyDiv>
          Name
        </div>
        <div className="flex flex-col items-center p-2">
          <SpringyDiv className="hover:text-red-500">
            <FaHtml5 size={80} />
          </SpringyDiv>
          Name
        </div>
        <div className="flex flex-col items-center p-2">
          <SpringyDiv className="hover:text-red-500">
            <FaHtml5 size={80} />
          </SpringyDiv>
          Name
        </div>
        <div className="flex flex-col items-center p-2">
          <SpringyDiv className="hover:text-red-500">
            <FaHtml5 size={80} />
          </SpringyDiv>
          Name
        </div>
        <div className="flex flex-col items-center p-2">
          <SpringyDiv className="hover:text-red-500">
            <FaHtml5 size={80} />
          </SpringyDiv>
          Name
        </div>
      </div>
    </Card>
  );
};

export default Skills;
