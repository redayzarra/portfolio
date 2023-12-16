"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useState } from "react";

const Cursor = () => {
  const cursorSize = 20;
  const [isWhite, setIsWhite] = useState(false);

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  const handleMouseEnter = () => setIsWhite(true);
  const handleMouseLeave = () => setIsWhite(false);

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    const blackSections = document.querySelectorAll(".black-section");
    blackSections.forEach((section) => {
      section.addEventListener("mouseenter", handleMouseEnter);
      section.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      blackSections.forEach((section) => {
        section.removeEventListener("mouseenter", handleMouseEnter);
        section.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  });

  return (
    <motion.div
      className={`cursor z-100 ${isWhite ? "white-cursor" : ""}`}
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
    />
  );
};

export default Cursor;
