"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, TextureLoader } from "three";

const EarthMesh = () => {
  const meshRef = useRef<Mesh>();
  const animationSpeed = 0.004;

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y -= animationSpeed;
      // meshRef.current.rotation.x -= animationSpeed / 10;
    }
  });

  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "/images/Earth/color.webp",
    "/images/Earth/normal.webp",
    "/images/Earth/occlusion.webp",
  ]);

  return (
    <mesh ref={meshRef as any} scale={3}>
      <sphereGeometry args={[1, 100, 100]} />
      <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
    </mesh>
  );
};

const Earth = () => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <directionalLight intensity={5} position={[1, 0, 0.25]} />
      <EarthMesh />
      <OrbitControls />
    </Canvas>
  );
};

export default Earth;
