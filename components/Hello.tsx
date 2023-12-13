import Image from "next/image";
import React from "react";
import Steve from "@/public/images/SteveRodgers.jpg";

const Hello = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="flex space-x-10">
        {/* My photo */}
        <div className="relative h-32 w-32 rounded-full overflow-hidden">
          <Image
            src={Steve}
            alt="My Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        {/* My introduction */}
        <div className="flex flex-col items-center justify-center">
          <p>Hello! I'm</p>
          <p className="text-3xl font-black">ReDay Zarra</p>
        </div>
      </div>
    </div>
  );
};

export default Hello;
