"use client";

import { motion } from "framer-motion";

interface Props {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}

const Menu = ({ isActive, setIsActive }: Props) => {
  return (
    <div onClick={() => setIsActive(!isActive)} className="menu-button">
      <motion.div className="slider" animate={{top: isActive ? "-100%" : "0"}}>
        <div className="elem">
          <p className="text-sm font-semibold">Menu</p>
        </div>
        <div className="elem">
          <p className="text-sm font-semibold">Close</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Menu;
