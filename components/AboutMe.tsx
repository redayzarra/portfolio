import me from "@/public/images/Me2.jpg";
import Image from "next/image";
import { FaCode, FaMedal, FaUserGraduate } from "react-icons/fa6";
import AboutCard from "./AboutCard";

const AboutMe = () => {
  return (
    <div className="px-0 md:px-0 max-w-4xl mx-auto justify-center grid md:gap-2 gap-8 md:grid-cols-2 sm:grid-cols-1">
      {/* My Image */}
      <div className="h-72 w-[350px] relative mx-auto md:mx-0">
        <Image
          objectFit="cover"
          layout="fill"
          src={me}
          alt="My Picture"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col space-y-6 md:space-y-10">
        {/* About Cards */}
        <div className="grid grid-cols-3 gap-4">
          <AboutCard
            href="youtube.com"
            title="Experience"
            icon={FaMedal}
            description="Discover my experience and skills"
          />
          <AboutCard
            href="youtube.com"
            title="Projects"
            icon={FaCode}
            description="Explore my personal projects"
          />
          <AboutCard
            href="youtube.com"
            title="Education"
            icon={FaUserGraduate}
            description="Learn about my education and achievements"
          />
        </div>
        {/* About Me */}
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          voluptate nostrum a culpa provident quae in molestiae vero ea illum!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
