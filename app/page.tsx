import AboutMe from "@/components/AboutMe";
import Backend from "@/components/Backend";
import Frontend from "@/components/Frontend";
import MachineLearning from "@/components/MachineLearning";
import Container from "@/components/MyComponents/Container";
import NavBar from "@/components/ARCHIVE/NavBar";
import NewHello from "@/components/Hello";
import NewNavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Title from "@/components/Title";
import { Separator } from "@/components/ui/separator";
import {
  backendSkills,
  frontendSkills,
  machineLearningSkills,
  projects,
} from "@/lib/constants";
import { BsMouse } from "react-icons/bs";

export default function Home() {
  return (
    <div className="">
      <div className="bg-black">
        <Container>
          <NewNavBar />
          <NewHello className="mt-64" />
        </Container>
      </div>
      {/* Waves */}
      {/* <div className="spacer layer1 pt-4 bg-[#e3ffe0]"></div> */}
      <div className="bg-black text-background">
        <Container className="space-y-20">
          <div>
            <Title heading="Get to know me" title="About Me" />
            <AboutMe />
          </div>
          <div className="flex flex-col items-center justify-center">
            <Title heading="Explore my" title="Experience" />
            <Frontend />
            <Skills title="Frontend Skills" skills={frontendSkills} />
            <Separator className="bg-zinc-800 max-w-5xl my-4 mb-10" />
            <Backend />
            <Skills title="Backend Skills" skills={backendSkills} />
            <Separator className="bg-zinc-800 max-w-5xl my-4" />
            {/* <MachineLearning />
            <Skills
              title="Machine Learning Skills"
              skills={machineLearningSkills}
            /> */}
          </div>
          <div>
            <Title heading="Browse My Recent" title="Projects" />
            <Projects projects={projects} />
          </div>
        </Container>
      </div>
    </div>
  );
}
