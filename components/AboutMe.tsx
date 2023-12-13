import Image from "next/image";
import React from "react";
import me from "@/public/images/Me2.jpg";
import { FaCode, FaGears, FaMedal, FaUserGraduate } from "react-icons/fa6";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AboutCard from "./AboutCard";

const AboutMe = () => {
  return (
    <div className="flex justify-center space-x-8">
      <div className="relative h-72 w-72 overflow-hidden">
        <Image
          src={me}
          alt="My Picture"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-2">
        <AboutCard
          href="youtube.com"
          title="Projects"
          icon={FaCode}
          description="Over 600 projects."
        />
        <AboutCard
          href="youtube.com"
          title="Experience"
          icon={FaMedal}
          description="Over 600 projects."
        />
        <AboutCard
          href="youtube.com"
          title="Education"
          icon={FaUserGraduate}
          description="Over 600 projects."
        />
      </div>
    </div>
  );
};

export default AboutMe;
