import me from "@/public/images/Me.jpg";
import Image from "next/image";
import { BsLinkedin, BsMouse } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { IoOpenOutline } from "react-icons/io5";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Hello = ({ className }: { className: string }) => {
  return (
    <div
      className={`${className} text-white flex max-w-4xl mx-auto justify-center md:justify-between`}
    >
      {/* My information */}
      <div className="flex flex-col space-y-4">
        <h1 className="text-6xl font-bold truncate pb-1.5">ReDay Zarra</h1>
        <div className="flex space-x-2 items-center">
          <h2 className="flex-shrink-0 text-lg text-muted-foreground">
            Software Engineer
          </h2>
          <div className="flex-grow">
            <Separator className="bg-muted-foreground hidden md:block" />
          </div>
        </div>
        <p className="max-w-sm">
          I'm a software engineer from Boston, MA. I love turning complex
          problems into beautiful simple solutions. I'm also looking for job
          opportunities.
        </p>

        {/* Buttons */}
        <div className="flex pt-9 space-x-6 items-center justify-center md:justify-normal">
          <a href="" className="w-fit">
            <Button
              className="dark border-[1px] text-md border-muted-foreground font-bold"
              variant="outline"
              size="lg"
            >
              Resume <IoOpenOutline className="ml-1" size={15} />
            </Button>
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

        <div className="hidden md:flex text-white items-center text-lg pt-40">
          <BsMouse className="mr-2" size={20} />
          <p>Scroll down &darr;</p>
        </div>
      </div>

      {/* My image */}
      <div className="h-72 w-[350px] hidden md:block relative mx-auto md:mx-0">
        <Image
          objectFit="cover"
          layout="fill"
          src={me}
          alt="My Picture"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hello;
