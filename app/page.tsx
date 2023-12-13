import Container from "@/components/Container";
import Hello from "@/components/Hello";
import NavBar from "@/components/NavBar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="">
      <section className="bubble">
        <Container>
          <NavBar />
          <Hello className="mt-10" />
        </Container>
      </section>
    </div>
  );
}
