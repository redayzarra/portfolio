import React from "react";

export const myLinks = [
  { title: "Home", href: "#home" },
  { title: "About Me", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
];

const NavigationLinks = ({ className }: { className?: string }) => {
  return (
    <div className={`flex text-white space-x-6 ${className}`}>
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
