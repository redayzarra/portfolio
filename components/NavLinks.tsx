import React from "react";

const links = [
  { title: "About", href: "/" },
  { title: "Experience", href: "/" },
  { title: "Projects", href: "/" },
  { title: "Contact", href: "/" },
];

const NavLinks = () => {
  return (
    <div className="nav">
      <div className="nav-body">
        {links.map((link, index) => {
          return (
            <div key={index}>
              <a href={link.href}>{link.title}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavLinks;
