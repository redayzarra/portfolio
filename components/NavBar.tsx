import Container from "./Container";
import { ModeToggle } from "./ModeToggle";

const NavBar = () => {
  return (
      <div className="flex items-center justify-between">
        <h1 className="font-black text-xl">ReDay</h1>
        <div className="flex items-center space-x-6">
          <a href="">About</a>
          <a href="">Experience</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
          <ModeToggle />
        </div>
      </div>
  );
};

export default NavBar;
