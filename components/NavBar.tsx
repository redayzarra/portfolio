"use client";

import { useState } from "react";
import Menu from "./Menu";
import { Button } from "./ui/button";
import Logo from "./Logo";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="flex items-center justify-between">
      <Logo />
      {/* <div className="flex items-center space-x-6">
        <a href="" title="About" className="nav-link">
          About
        </a>
        <a href="" title="Experience" className="nav-link">
          Experience
        </a>
        <a href="" title="Projects" className="nav-link">
          Projects
        </a>
        <Button
          className="rounded-full nav-button"
          variant="outline"
          title="Resume"
        >
          Resume
        </Button>
      </div> */}
      <Menu isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default NavBar;
