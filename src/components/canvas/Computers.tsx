// @ts-nocheck
import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, Text, RoundedBox, MeshReflectorMaterial } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const SimpleComputer = ({ isMobile }: { isMobile: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  const monitorRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.15;
    }
    
    if (monitorRef.current) {
      monitorRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.03;
    }
  });

  return (
    <group ref={groupRef} position={[0, isMobile ? -3 : -2.5, 0]} scale={isMobile ? 1.2 : 1.5}>
      {/* Ambient and spot lights */}
      <ambientLight intensity={0.2} />
      <spotLight position={[5, 8, 5]} angle={0.3} penumbra={1} intensity={1.5} castShadow shadow-mapSize={2048} />
      <spotLight position={[-5, 8, -5]} angle={0.3} penumbra={1} intensity={0.5} castShadow />
      
      {/* Desk - reflective surface */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.8, 0]} receiveShadow>
        <planeGeometry args={[12, 8]} />
        <MeshReflectorMaterial
          attach="material"
          blur={[300, 100]}
          resolution={1024}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#101010"
          metalness={0.8}
          mirror={0.75}
        />
      </mesh>
      
      {/* Modern monitor with stand */}
      <group ref={monitorRef}>
        {/* Monitor frame */}
        <RoundedBox 
          args={[4, 2.4, 0.1]} 
          radius={0.05} 
          smoothness={4} 
          position={[0, 0.5, 0]}
        >
          <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.1} />
        </RoundedBox>
        
        {/* Monitor screen */}
        <RoundedBox 
          args={[3.8, 2.2, 0.02]} 
          radius={0.02} 
          smoothness={4} 
          position={[0, 0.5, 0.06]}
        >
          <meshBasicMaterial color="#0a101f" />
        </RoundedBox>
        
        {/* Monitor stand */}
        <RoundedBox 
          args={[0.6, 0.15, 0.6]} 
          radius={0.05} 
          position={[0, -0.9, 0.2]} 
          smoothness={4}
        >
          <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.1} />
        </RoundedBox>
        
        <RoundedBox 
          args={[0.1, 0.6, 0.1]} 
          radius={0.02} 
          position={[0, -0.55, 0]} 
          smoothness={4}
        >
          <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.1} />
        </RoundedBox>
      </group>

      {/* Text display always visible */}
      <Text
        position={[0, 0.5, 0.07]}
        fontSize={0.25}
        color="#4db5ff"
        anchorX="center"
        anchorY="middle"
        maxWidth={3}
        textAlign="center"
        font="/fonts/Inter-Bold.woff"
        fontWeight="bold"
      >
        {`MANIDEEP\n< Web Developer />`}
      </Text>
      
      {/* Keyboard */}
      <RoundedBox 
        args={[2.2, 0.1, 0.8]} 
        radius={0.05} 
        position={[0, -0.75, 1.5]} 
        smoothness={4}
      >
        <meshStandardMaterial color="#222222" metalness={0.5} roughness={0.2} />
      </RoundedBox>
      
      {/* Mouse */}
      <RoundedBox 
        args={[0.3, 0.1, 0.5]} 
        radius={0.1} 
        position={[1.5, -0.75, 1.5]} 
        smoothness={4}
      >
        <meshStandardMaterial color="#333333" metalness={0.5} roughness={0.2} />
      </RoundedBox>
      
      {/* Coffee mug */}
      <group position={[-1.5, -0.6, 1]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.15, 0.15, 0.35, 32]} />
          <meshStandardMaterial color="#ffffff" roughness={0.2} />
        </mesh>
        <mesh position={[0.15, 0, 0]}>
          <torusGeometry args={[0.07, 0.03, 16, 32, Math.PI * 1.3]} />
          <meshStandardMaterial color="#ffffff" roughness={0.2} />
        </mesh>
      </group>
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, -2, 10], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <SimpleComputer isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas; 