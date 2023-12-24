import { motion } from "framer-motion";

const links = [
  { title: "About Me", href: "/" },
  { title: "Experience", href: "/" },
  { title: "Projects", href: "/" },
  { title: "Contact", href: "/" },
];

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (index: number) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + index * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      // opacity: { duration: 0.35 },
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  },
};

const NavLinks = () => {
  return (
    <div className="nav">
      <div className="nav-body">
        {links.map((link, index) => {
          return (
            <div key={index} className="nav-container">
              <motion.div
                custom={index}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <a
                  href={link.href}
                  className="text-2xl font-[500] transition-all"
                >
                  {link.title}
                </a>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavLinks;
