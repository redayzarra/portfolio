import AboutMe from "@/components/AboutMe";
import Container from "@/components/Container";
import Hello from "@/components/Hello";
import NavBar from "@/components/NavBar";
import Title from "@/components/Title";

export default function Home() {
  return (
    <div className="">
      <Container>
        <NavBar />
        <Hello className="mt-10" />
      </Container>
      {/* Waves */}
      <div className="spacer layer1 mt-4"></div>

      <div className="bg-black text-background">
        <Container className="-mt-10">
          <Title heading="Get to know me" title="About Me" />
          <AboutMe />
        </Container>
      </div>
    </div>
  );
}
