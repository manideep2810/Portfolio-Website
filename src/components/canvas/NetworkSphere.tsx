import { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';
import CanvasLoader from '../Loader';

const NetworkNode = ({ position, color }) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.05, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.7}
        metalness={1}
        roughness={0}
      />
    </mesh>
  );
};

const DiscoGlobe = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Generate horizontal lines (latitude)
  const horizontalLines = useMemo(() => {
    const lines = [];
    const radius = 2;
    const segments = 64;
    const latitudes = 12; // Number of horizontal lines
    
    for (let i = 1; i < latitudes; i++) {
      const phi = (i / latitudes) * Math.PI;
      const points = [];
      
      for (let j = 0; j <= segments; j++) {
        const theta = (j / segments) * 2 * Math.PI;
        points.push(new THREE.Vector3(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.cos(phi),
          radius * Math.sin(phi) * Math.sin(theta)
        ));
      }
      
      lines.push(points);
    }
    
    return lines;
  }, []);

  // Generate vertical lines (longitude)
  const verticalLines = useMemo(() => {
    const lines = [];
    const radius = 2;
    const segments = 64;
    const longitudes = 12; // Number of vertical lines (equal spacing)
    
    for (let i = 0; i < longitudes; i++) {
      const theta = (i / longitudes) * 2 * Math.PI;
      const points = [];
      
      for (let j = 0; j <= segments; j++) {
        const phi = (j / segments) * Math.PI;
        points.push(new THREE.Vector3(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.cos(phi),
          radius * Math.sin(phi) * Math.sin(theta)
        ));
      }
      
      lines.push(points);
    }
    
    return lines;
  }, []);

  // Generate random points on a sphere for nodes
  const points = useMemo(() => {
    const temp = [];
    const radius = 2;
    const count = 20; // Reduced node count to avoid cluttering
    
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      
      temp.push(new THREE.Vector3(
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi)
      ));
    }
    return temp;
  }, []);

  // Generate connections between points
  const connections = useMemo(() => {
    const temp = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (points[i].distanceTo(points[j]) < 1.2) {
          temp.push({
            start: points[i],
            end: points[j]
          });
        }
      }
    }
    return temp;
  }, [points]);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* White inner sphere */}
      <mesh>
        <sphereGeometry args={[1.98, 32, 32]} />
        <meshStandardMaterial
          color="#101010"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Horizontal Grid Lines */}
      {horizontalLines.map((line, i) => (
        <Line
          key={`h-${i}`}
          points={line}
          color="#333333"
          lineWidth={2}
        />
      ))}

      {/* Vertical Grid Lines */}
      {verticalLines.map((line, i) => (
        <Line
          key={`v-${i}`}
          points={line}
          color="#333333"
          lineWidth={2}
        />
      ))}

      {/* Nodes */}
      {points.map((point, i) => (
        <NetworkNode
          key={i}
          position={point}
          color="#ffffff"
        />
      ))}

      {/* Connections */}
      {connections.map((connection, i) => (
        <Line
          key={`c-${i}`}
          points={[connection.start, connection.end]}
          color="#ffffff"
          lineWidth={0.6}
          transparent
          opacity={0.2}
        />
      ))}
    </group>
  );
};

const NetworkSphereCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="always"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 0, 6],
      }}
    >
      <color attach="background" args={['#000000']} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5}
          enableZoom={false}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <DiscoGlobe />
      </Suspense>
    </Canvas>
  );
};

export default NetworkSphereCanvas; 