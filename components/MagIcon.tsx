"use client";

import React, { PropsWithChildren, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MagIcon = ({ children }: PropsWithChildren<{}>) => {
  const ref = useRef<HTMLDivElement>(null);

  // Using useMotionValue for x and y
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth animation options
  const smoothOptions = { damping: 15, stiffness: 150, mass: 0.1 };
  const smoothX = useSpring(x, smoothOptions);
  const smoothY = useSpring(y, smoothOptions);

  const mouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const currentRef = ref.current;

    // Calculate where the icon should move
    if (currentRef) {
      const { width, height, left, top } = currentRef.getBoundingClientRect();
      const newX = clientX - (left + width / 2);
      const newY = clientY - (top + height / 2);
      x.set(newX);
      y.set(newY);
    }
  };

  // Reset the icon's position when the mouse stops bothering it.
  const mouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Clean up function
  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener("mousemove", mouseMove);
      currentRef.addEventListener("mouseleave", mouseLeave);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("mousemove", mouseMove);
        currentRef.removeEventListener("mouseleave", mouseLeave);
      }
    };
  }, []);

  return (
    <motion.div ref={ref} style={{ x: smoothX, y: smoothY }}>
      {children}
    </motion.div>
  );
};

export default MagIcon;
