"use client";

import React, { useState } from "react";
import MenuButton from "./MenuButton";

const Menu = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="relative">
      <div className="menu relative">
        <MenuButton isActive={isActive} setIsActive={setIsActive} />
      </div>
    </div>
  );
};

export default Menu;
