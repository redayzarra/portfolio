import Steve from "@/public/images/SteveRodgers.jpg";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { Button } from "./ui/button";

const Hello = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="flex space-x-10">
        {/* My photo */}
        <div className="relative h-48 w-48 rounded-full overflow-hidden">
          <Image
            src={Steve}
            alt="My Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        {/* Greeting */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm text-muted-foreground">Hello! I'm</p>
            <p className="mt-1 text-3xl font-bold">ReDay Zarra</p>
            <p className="mt-2 text-xl font-medium text-muted-foreground">
              Software Engineer
            </p>
          </div>

          {/* Resume and Contact Buttons */}
          <div className="mt-4 space-x-2">
            <Button
              className="rounded-full border-[2px] border-foreground"
              variant="outline"
            >
              Resume
            </Button>
            <Button className="rounded-full">Contact</Button>
          </div>
          <div className="mt-2 flex items-center justify-center space-x-2">
            <a
              href="https://www.linkedin.com/in/redayzarra/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin size={30} className="rounded-full" />
            </a>
            <a
              href="https://github.com/redayzarra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} className="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hello;
