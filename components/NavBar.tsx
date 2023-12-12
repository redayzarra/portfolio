import React from "react";
import Container from "./Container";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const NavBar = () => {
  return (
    <Container>
      <div className="flex items-center justify-between">
        <h1 className="font-black text-xl">ReDay</h1>
        <div className="flex items-center space-x-6">
          <a href="">About</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
          <ModeToggle />
        </div>
      </div>
    </Container>
  );
};

export default NavBar;
