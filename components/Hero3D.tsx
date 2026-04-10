"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial, Sphere } from "@react-three/drei";

function AnimatedSphere() {
  return (
    <Sphere args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#E76F51"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

export default function Hero3D() {
  return (
    <div className="h-full min-h-[220px] w-full sm:min-h-[280px]" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.65} />
        <directionalLight position={[10, 10, 5]} intensity={1.1} />
        <pointLight position={[-10, -10, -5]} intensity={0.65} color="#F4A261" />
        <AnimatedSphere />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.65}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
