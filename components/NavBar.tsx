import Logo from "./Logo";
import Menu from "./Menu";

const NavBar = () => {
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
      <Menu />
    </div>
  );
};

export default NavBar;
