import React from "react";

export const myLinks = [
  { title: "About Me", href: "#home" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

const NavigationLinks = ({ className }: { className?: string }) => {
  return (
    <div className={`flex text-white space-x-6 ${className}`}>
      <div key="home" className="relative">
        <a href="3" className="hover:font-bold transition-all absolute">
          Home
        </a>
        <div className="invisible-bold">Home</div>
      </div>
      {myLinks.map((link) => (
        <div key={link.title} className="relative">
          <a
            href={link.href}
            className="hover:font-bold transition-all absolute"
          >
            {link.title}
          </a>
          <div className="invisible-bold">{link.title}</div>
        </div>
      ))}
    </div>
  );
};

export default NavigationLinks;
