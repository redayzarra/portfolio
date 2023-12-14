"use client";

import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { PiSealCheckFill } from "react-icons/pi";

const EmailButton = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <button onClick={() => setIsClicked(!isClicked)}>
      {isClicked ? (
        <PiSealCheckFill size={32} />
      ) : (
        <MdEmail size={32} className="rounded-full" />
      )}
    </button>
  );
};

export default EmailButton;
