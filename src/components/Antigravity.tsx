"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface ParticlesProps {
  count?: number;
}

function Particles({ count = 250 }: ParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const { viewport, pointer } = useThree();

  // Create random particles
  const [positions, speeds, noiseOffsets] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    const noise = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Spread particles across the viewport width and height
      pos[i * 3] = (Math.random() - 0.5) * viewport.width * 1.5;
      pos[i * 3 + 1] = (Math.random() - 0.5) * viewport.height * 1.5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5; // depth

      spd[i] = 0.05 + Math.random() * 0.15; // upward speed

      noise[i * 3] = Math.random() * 100;
      noise[i * 3 + 1] = Math.random() * 100;
      noise[i * 3 + 2] = Math.random() * 100;
    }
    return [pos, spd, noise];
  }, [count, viewport]);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const time = state.clock.getElapsedTime();
    const posArray = pointsRef.current.geometry.attributes.position.array as Float32Array;

    // Convert normalized mouse pointer to viewport coordinates
    const mouseX = (pointer.x * viewport.width) / 2;
    const mouseY = (pointer.y * viewport.height) / 2;

    for (let i = 0; i < count; i++) {
      const idx3 = i * 3;
      // 1. Antigravity motion: Move upward
      posArray[idx3 + 1] += speeds[i] * 0.03;

      // Wrap around screen when floating past the top
      const limitY = (viewport.height * 1.5) / 2;
      if (posArray[idx3 + 1] > limitY) {
        posArray[idx3 + 1] = -limitY;
        posArray[idx3] = (Math.random() - 0.5) * viewport.width * 1.5;
      }

      // 2. Add organic waving motion (using sine waves)
      posArray[idx3] += Math.sin(time + noiseOffsets[idx3]) * 0.002;
      posArray[idx3 + 2] += Math.cos(time + noiseOffsets[idx3 + 2]) * 0.001;

      // 3. Mouse repulsion/interaction
      const dx = posArray[idx3] - mouseX;
      const dy = posArray[idx3 + 1] - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 3) {
        const force = (3 - dist) * 0.01;
        posArray[idx3] += (dx / dist) * force;
        posArray[idx3 + 1] += (dy / dist) * force;
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#8ab4f8"
        transparent
        opacity={0.6}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function Antigravity() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent", width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.5} />
        <Particles count={150} />
      </Canvas>
    </div>
  );
}
