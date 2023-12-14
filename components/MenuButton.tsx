"use client";

import { motion } from "framer-motion";

interface Props {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}

const MenuButton = ({ isActive, setIsActive }: Props) => {
  return (
    <div onClick={() => setIsActive(!isActive)} className="menu-button">
      <motion.div
        className="slider"
        animate={{ top: isActive ? "-100%" : "0" }}
        transition={{ duration: 0.75, ease: [0.75, 0, 0.24, 1] }}
      >
        <div className="elem">
          <PerspectiveText label="Menu" />
        </div>
        <div className="elem">
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
};

function PerspectiveText({ label }: { label: string }) {
  return (
    <div className="perspective-text text-sm font-semibold">
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}

export default MenuButton;
