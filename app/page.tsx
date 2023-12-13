import Container from "@/components/Container";
import Hello from "@/components/Hello";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <Container>
        <NavBar />
        <Hello className="mt-10" />
      </Container>
    </div>
  );
}
