import Image from "next/image";
import React from "react";
import Steve from "@/public/images/SteveRodgers.jpg";
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
        <div className="flex flex-col items-center justify-center space-y-2">
          <p>Hello! I'm</p>
          <p className="text-3xl font-black">ReDay Zarra</p>
          <p className="text-muted-foreground">Software Engineer</p>

          {/* Resume and Contact Buttons */}
          <div className="space-x-2">
            <Button
              className="rounded-full border-[2px] border-foreground"
              variant="outline"
            >
              Resume
            </Button>
            <Button className="rounded-full">Contact</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hello;
