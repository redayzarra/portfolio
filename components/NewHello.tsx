import me from "@/public/images/Me.jpg";
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { IoOpenOutline } from "react-icons/io5";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const NewHello = ({ className }: { className: string }) => {
  return (
    <div
      className={`${className} items-center text-white justify-center grid md:gap-2 gap-4 md:grid-cols-2 sm:grid-cols-1 xl:px-16`}
    >
      <div className="flex flex-col space-y-3">
        <h1 className="text-7xl truncate font-semibold mt-4 md:mt-0 flex items-center justify-center md:block">
          ReDay Zarra
        </h1>
        <div className="flex items-center justify-center md:justify-normal space-x-2">
          <h2 className="flex-shrink-0 text-xl text-muted-foreground">
            Software Engineer
          </h2>
          <Separator className="bg-muted-foreground max-w-[250px] hidden md:block" />
        </div>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          quaerat fugit quod minima distinctio ratione possimus impedit. Quam,
          fugiat. Atque.
        </p>
      </div>
      <div className="flex items-center justify-center relative mx-auto h-[20rem] w-[22rem] overflow-hidden">
        <Image
          src={me}
          alt="My Picture"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default NewHello;
