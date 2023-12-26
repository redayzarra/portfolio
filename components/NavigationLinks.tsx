import React from "react";

const NavigationLinks = () => {
  return (
    <div className="flex text-white space-x-6">
      {["Home", "About", "Experience", "Projects", "Education", "Contact"].map(
        (link) => (
          <div key={link} className="relative"> {/* Added key prop here */}
            <a href="#" className="hover:font-bold transition-all absolute">
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

