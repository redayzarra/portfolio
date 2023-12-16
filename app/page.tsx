import AboutMe from "@/components/AboutMe";
import Container from "@/components/MyComponents/Container";
import Experience from "@/components/Experience";
import Hello from "@/components/Hello";
import NavBar from "@/components/NavBar";
import Title from "@/components/Title";

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
          <div>
            <Title heading="Explore my" title="Experience" />
            <Experience />
          </div>
        </Container>
      </div>
    </div>
  );
}
