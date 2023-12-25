import React from "react";

const NavigationLinks = () => {
  return (
    <div className="flex text-white space-x-6">
      {["Home", "About", "Experience", "Projects", "Education", "Contact"].map(
        (link) => (
          <div className="relative">
            <a href="" className="hover:font-bold transition-all absolute">
              {link}
            </a>
            <div className="invisible-bold">{link}</div>
          </div>
        )
      )}
    </div>
  );
};

export default NavigationLinks;
