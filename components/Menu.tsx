"use client";

import React, { useState } from "react";
import MenuButton from "./MenuButton";
import { motion } from "framer-motion";
import NavLinks from "./NavLinks";

const variants = {
  open: {
    width: 300,
    height: 400,
    top: "-35px",
    right: "-15px",
    transition: { duration: 0.75, ease: [0.75, 0, 0.24, 1] },
  },
  closed: {
    width: 80,
    height: 40,
    top: "-20px",
    right: "0px",
    transition: { duration: 0.75, ease: [0.75, 0, 0.24, 1] },
  },
};

const Menu = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative">
      <motion.div
        className="menu"
        variants={variants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
        style={{ position: "absolute", top: 0, right: 0 }}
      >
        <NavLinks />
      </motion.div>
      <MenuButton isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default Menu;
