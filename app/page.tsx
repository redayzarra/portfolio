import Container from "@/components/Container";
import Hello from "@/components/Hello";
import NavBar from "@/components/NavBar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="">
      <Container>
        <NavBar />
        <Hello className="mt-10" />
      </Container>
      <div className="spacer layer1 mt-4"></div>
    </div>
  );
}
