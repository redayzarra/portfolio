import me from "@/public/images/Me2.jpg";
import Image from "next/image";
import { FaCode, FaMedal, FaUserGraduate } from "react-icons/fa6";
import AboutCard from "./AboutCard";

const AboutMe = () => {
  return (
    <div className="max-w-4xl mx-auto justify-center grid md:gap-2 gap-8 md:grid-cols-2 sm:grid-cols-1">
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
            description="Over 1+ years of experience"
          />
          <AboutCard
            href="youtube.com"
            title="Projects"
            icon={FaCode}
            description="Built over a dozen projects"
          />
          <AboutCard
            href="youtube.com"
            title="Education"
            icon={FaUserGraduate}
            description="Earned 30+ certificates"
          />
        </div>
        {/* About Me */}
        <p className="text-muted-foreground">
          I have over a year of hands&hyphen;on experience in software engineering&comma;
          I&apos;ve sharpened my skills primarily through a range of open&hyphen;source
          projects&period; I have a MicroMasters in Data Science &amp; ML from MIT&comma; along
          with professional certificates in computer science from Harvard&period;
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
