"use client";

import React, { PropsWithChildren, MouseEvent } from "react";

interface Props {
  className: string;
  gradientSize?: number;
  gradientPower?: number;
}

const GlassyCard = ({
  children,
  className,
  gradientSize = 80,
  gradientPower = 0.2,
}: PropsWithChildren<Props>) => {
  const handleOnMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;

    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
    target.style.setProperty("--circle-size", `${gradientSize}px`);
    target.style.setProperty("--gradient-power", `${gradientPower}`);
  };

  return (
    <div className={`glassy-card ${className}`} onMouseMove={handleOnMouseMove}>
      {children}
    </div>
  );
};

export default GlassyCard;
