import me from "@/public/images/Me.jpg";
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";
import { Button } from "./ui/button";

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
        <div className="text-white flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <p className="text-md text-muted-foreground font-base">
              Hello&#44; I&apos;m
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
                className="dark rounded-full border-[1px] border-muted-foreground font-bold"
                variant="outline"
              >
                Resume <IoOpenOutline className="ml-1" size={15} />
              </Button>
            </a>
          </div>
          <div className="mt-4 flex items-center justify-center space-x-4">
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
