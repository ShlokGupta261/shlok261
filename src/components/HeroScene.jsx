import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

function SecurityCore() {
  const groupRef = useRef(null);
  const ringRef = useRef(null);

  const particles = useMemo(() => {
    const points = [];
    for (let i = 0; i < 220; i += 1) {
      const radius = THREE.MathUtils.randFloat(1.35, 2.6);
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(0, Math.PI);
      points.push(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta),
      );
    }
    return new Float32Array(points);
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.3;
      groupRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.4;
      ringRef.current.rotation.x = Math.sin(t * 0.4) * 0.6;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1.4} floatIntensity={1.1}>
        <mesh>
          <icosahedronGeometry args={[1.1, 1]} />
          <meshStandardMaterial
            color="#73f2ff"
            emissive="#1a6fa8"
            emissiveIntensity={0.45}
            metalness={0.5}
            roughness={0.25}
          />
        </mesh>
      </Float>

      <mesh ref={ringRef}>
        <torusGeometry args={[1.7, 0.045, 12, 128]} />
        <meshStandardMaterial color="#9f7aea" emissive="#5d3fd3" />
      </mesh>

      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particles, 3]}
            count={particles.length / 3}
          />
        </bufferGeometry>
        <pointsMaterial color="#9be9ff" size={0.025} sizeAttenuation />
      </points>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4.3], fov: 48 }}>
      <color attach="background" args={["#070914"]} />
      <fog attach="fog" args={["#070914", 5, 10]} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[2, 4, 3]} intensity={1.2} color="#b1d5ff" />
      <pointLight position={[-2, -1.5, 2]} intensity={1.4} color="#9f7aea" />

      <Stars radius={40} depth={35} count={1600} factor={4} saturation={0} fade />
      <SecurityCore />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 2.6}
        autoRotate
        autoRotateSpeed={0.8}
      />
    </Canvas>
  );
}
