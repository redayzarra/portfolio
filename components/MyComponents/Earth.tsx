"use client";

import { Canvas, ThreeEvent, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh, TextureLoader } from "three";

const EarthMesh = () => {
  const meshRef = useRef<Mesh>();
  const [isHovering, setIsHovering] = useState(false); // New state to track cursor hovering
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const animationSpeed = 0.001;

  useFrame(() => {
    if (meshRef.current) {
      if (isHovering) {
        // Apply cursor-based rotation when hovering
        meshRef.current.rotation.x += rotation.x;
        meshRef.current.rotation.y += rotation.y;
      } else {
        // Apply default rotation when not hovering
        meshRef.current.rotation.y += animationSpeed;
        meshRef.current.rotation.x += animationSpeed;
      }
    }
  });

  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "/images/Earth/color.webp",
    "/images/Earth/normal.webp",
    "/images/Earth/occlusion.webp",
  ]);

  const handlePointerEnter = () => setIsHovering(true); // Set hovering to true
  const handlePointerLeave = () => setIsHovering(false); // Set hovering to false

  const handleMouseMove = (event: ThreeEvent<PointerEvent>) => {
    const { clientX, clientY } = event;
    const mouseX = clientX;
    const mouseY = clientY;

    setRotation({
      x: mouseY / 100_100,
      y: mouseX / 100_100,
    });
  };

  return (
    <mesh
      ref={meshRef as any}
      scale={3}
      onPointerMove={handleMouseMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <sphereGeometry args={[1, 100, 100]} />
      <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
    </mesh>
  );
};

const Earth = () => {
  return (
    <Canvas>
      <ambientLight intensity={5} />
      <directionalLight intensity={3} position={[1, 0, -0.25]} />
      <EarthMesh />
    </Canvas>
  );
};

export default Earth;
