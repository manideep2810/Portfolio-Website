import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Cylinder } from '@react-three/drei';
import * as THREE from 'three';
import CanvasLoader from '../Loader';

const Monitor = () => {
  const monitorRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (monitorRef.current) {
      // Gentle floating animation
      monitorRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
      // Subtle rotation
      monitorRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return (
    <group ref={monitorRef}>
      {/* Monitor Screen */}
      <mesh position={[0, 0.5, 0]}>
        <Box args={[3, 2, 0.1]}>
          <meshStandardMaterial
            color="#000000"
            metalness={0.9}
            roughness={0.1}
            emissive="#4A6FF3"
            emissiveIntensity={0.3}
          />
        </Box>
      </mesh>

      {/* Screen Content (glowing blue) */}
      <mesh position={[0, 0.5, 0.06]}>
        <Box args={[2.8, 1.8, 0.01]}>
          <meshStandardMaterial
            color="#000000"
            emissive="#4A6FF3"
            emissiveIntensity={0.7}
            transparent
            opacity={0.95}
          />
        </Box>
      </mesh>

      {/* Additional screen glow layer */}
      <mesh position={[0, 0.5, 0.05]}>
        <Box args={[2.85, 1.85, 0.01]}>
          <meshStandardMaterial
            color="#000000"
            emissive="#2E4FD4"
            emissiveIntensity={0.4}
            transparent
            opacity={0.6}
          />
        </Box>
      </mesh>

      {/* Monitor Stand Base */}
      <mesh position={[0, -0.8, 0]}>
        <Cylinder args={[0.3, 0.4, 0.1, 32]}>
          <meshStandardMaterial
            color="#000000"
            metalness={0.9}
            roughness={0.1}
            emissive="#4A6FF3"
            emissiveIntensity={0.2}
          />
        </Cylinder>
      </mesh>

      {/* Monitor Stand Neck */}
      <mesh position={[0, -0.2, 0]}>
        <Box args={[0.1, 1.2, 0.1]}>
          <meshStandardMaterial
            color="#000000"
            metalness={0.9}
            roughness={0.1}
            emissive="#4A6FF3"
            emissiveIntensity={0.2}
          />
        </Box>
      </mesh>

      {/* Keyboard */}
      <mesh position={[0, -0.8, 0.8]}>
        <Box args={[2, 0.1, 0.6]}>
          <meshStandardMaterial
            color="#000000"
            metalness={0.8}
            roughness={0.2}
            emissive="#4A6FF3"
            emissiveIntensity={0.25}
          />
        </Box>
      </mesh>

      {/* Mouse */}
      <mesh position={[1.2, -0.8, 0.8]}>
        <Box args={[0.2, 0.1, 0.3]}>
          <meshStandardMaterial
            color="#000000"
            metalness={0.8}
            roughness={0.2}
            emissive="#4A6FF3"
            emissiveIntensity={0.25}
          />
        </Box>
      </mesh>

      {/* Ambient glow effect */}
      <pointLight position={[0, 0.5, 2]} intensity={1} color="#4A6FF3" distance={5} decay={2} />
    </group>
  );
};

const DesktopCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="always"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 2, 6],
      }}
    >
      <color attach="background" args={['#000000']} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 3, 5]} intensity={0.6} color="#ffffff" />
        <pointLight position={[-5, -3, 2]} intensity={0.5} color="#4A6FF3" />
        <Monitor />
        <fog attach="fog" args={["#000000", 7, 15]} />
      </Suspense>
    </Canvas>
  );
};

export default DesktopCanvas; 