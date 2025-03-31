import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import CanvasLoader from '../Loader';

const Earth = () => {
  const earthRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <mesh ref={earthRef}>
      <Sphere args={[1.7, 64, 64]}>
        <meshStandardMaterial
          color="#4444ff"
          metalness={0.7}
          roughness={0.2}
        />
      </Sphere>
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="always"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={3}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} intensity={2} />
        <pointLight position={[-2, -2, 2]} intensity={1} />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas; 