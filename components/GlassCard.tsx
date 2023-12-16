"use client";

import React, { PropsWithChildren, MouseEvent, useRef, useEffect } from "react";

interface Props {
  className?: string;
  backgroundColor?: string;
  gradientSize?: number;
  gradientPower?: number;
}

const GlassCard = ({
  children,
  className,
  backgroundColor = "bg-zinc-950", 
  gradientSize = 200,
  gradientPower = 0.2,
}: PropsWithChildren<Props>) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.style.setProperty("--circle-size", `${gradientSize}px`);
      cardRef.current.style.setProperty("--gradient-power", `${gradientPower}`);
    }
  }, [gradientSize, gradientPower]);

  const handleOnMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      className={`glass-card ${className} ${backgroundColor}`}
      onMouseMove={handleOnMouseMove}
    >
      {children}
    </div>
  );
};

export default GlassCard;

