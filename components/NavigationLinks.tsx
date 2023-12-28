import React from "react";

const NavigationLinks = ({ className }: { className?: string }) => {
  return (
    <div className={`flex text-white space-x-6 ${className}`}>
      {["Home", "About", "Experience", "Projects", "Contact"].map(
        (link) => (
          <div key={link} className="relative">
            {" "}
            {/* Added key prop here */}
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
