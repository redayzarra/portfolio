import me from "@/public/images/Me.jpg";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { Button } from "./ui/button";
import { MdEmail } from "react-icons/md";

const Hello = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="flex md:space-x-12">
        {/* My photo */}
        <div className="hidden md:block relative h-80 w-80 rounded-full overflow-hidden">
          <Image
            src={me}
            alt="My Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        {/* Greeting */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm text-muted-foreground font-base">
              Hello, I'm
            </p>
            <p className="mt-2 text-3xl font-black">ReDay Zarra</p>
            <p className="mt-1 text-[19px] font-base tracking-wider text-muted-foreground/90">
              Software Engineer
            </p>
          </div>

          {/* Resume and Contact Buttons */}
          <div className="mt-4 space-x-2">
            <a href="">
              <Button
                className="rounded-full border-[2px] border-foreground font-bold"
                variant="outline"
              >
                Resume
              </Button>
            </a>
            <a href="">
              <Button className="rounded-full">Contact</Button>
            </a>
          </div>
          <div className="mt-4 flex items-center justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/redayzarra/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail size={32} className="rounded-full" />
            </a>
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
