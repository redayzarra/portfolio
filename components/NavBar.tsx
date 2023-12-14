import Logo from "./Logo";
import Menu from "./Menu";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between">
      <Logo />
      <Menu />
    </div>
  );
};

export default NavBar;
