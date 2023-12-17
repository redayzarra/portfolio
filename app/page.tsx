import AboutMe from "@/components/AboutMe";
import Backend from "@/components/Backend";
import Frontend from "@/components/Frontend";
import Hello from "@/components/Hello";
import Container from "@/components/MyComponents/Container";
import NavBar from "@/components/NavBar";
import Skills from "@/components/Skills";
import Title from "@/components/Title";
import { Separator } from "@/components/ui/separator";
import { backendSkills, frontendSkills } from "@/lib/constants";

export default function Home() {
  return (
    <div className="">
      <div className="bg-gradient-to-t from-[#e3ffe0] via-white to-white">
        <Container className="">
          <NavBar />
          <Hello className="mt-10" />
        </Container>
      </div>
      {/* Waves */}
      <div className="spacer layer1 pt-4 bg-[#e3ffe0]"></div>
      <div className="bg-black text-background">
        <Container className="-mt-10 space-y-20">
          <div>
            <Title heading="Get to know me" title="About Me" />
            <AboutMe />
          </div>
          <div className="flex flex-col items-center justify-center">
            <Title heading="Explore my" title="Experience" />
            <Frontend />
            <Skills cols={5} title="Frontend Skills" skills={frontendSkills} />
            <Separator className="bg-zinc-800 max-w-5xl my-4 mb-10" />
            <Backend />
            <Skills cols={5} title="Backend Skills" skills={backendSkills} />
            <Separator className="bg-zinc-800 max-w-5xl my-4 mb-10" />
          </div>
        </Container>
      </div>
    </div>
  );
}
