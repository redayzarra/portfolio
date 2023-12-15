"use client";

import React, { useState } from "react";
import MenuButton from "./MenuButton";
import { AnimatePresence, motion } from "framer-motion";
import NavLinks from "./NavLinks";

const variants = {
  open: {
    width: 275,
    height: 300,
    top: "-30px",
    right: "-10px",
    transition: { duration: 0.75, ease: [0.75, 0, 0.24, 1] },
  },
  closed: {
    width: 80,
    height: 40,
    top: "-20px",
    right: "0px",
    transition: { duration: 0.75, delay: 0.15, ease: [0.75, 0, 0.24, 1] },
  },
};

const Menu = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative">
      <motion.div
        className="menu shadow-2xl"
        variants={variants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
        style={{ position: "absolute", top: 0, right: 0 }}
      >
        <AnimatePresence />
        {isActive && <NavLinks />}
      </motion.div>
      <MenuButton isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default Menu;
