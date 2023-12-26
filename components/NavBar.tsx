import Menu from "./Menu";
import Logo from "./MyComponents/Logo";
import NavigationLinks from "./NavigationLinks";
const NavBar = () => {
  return (
    <div className="shadow-md fixed top-0 left-0 right-0 py-2 z-50 flex items-center backdrop-blur-[8px]">
      <div className="mx-auto max-w-7xl py-3 px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Nav Menu Links - Larger screens only */}
          {/* <div className="hidden md:block text-white">something here</div> */}

          {/* Dark Mode and LogIn */}
          <div className="gap-x-2 flex items-center justify-center">
            <NavigationLinks className="hidden md:flex" />
            <div className="flex md:hidden">
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
