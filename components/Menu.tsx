"use client";

import React, { useState } from "react";
import MenuButton from "./MenuButton";
import { motion } from "framer-motion";

const variants = {
  open: { width: 480, height: 650 },
  closed: { width: 80, height: 40 },
};

const Menu = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="relative">
      <motion.div
        className="menu relative"
        variants={variants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <MenuButton isActive={isActive} setIsActive={setIsActive} />
      </motion.div>
    </div>
  );
};

export default Menu;
