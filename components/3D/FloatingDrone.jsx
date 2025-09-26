import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Float } from '@react-three/drei';
import { motion } from 'framer-motion';

const RotatingDrone = () => {
  const meshRef = useRef();
  const propellerRefs = [useRef(), useRef(), useRef(), useRef()];

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
    
    // Rotate propellers
    propellerRefs.forEach(ref => {
      if (ref.current) {
        ref.current.rotation.y += 0.3;
      }
    });
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group ref={meshRef}>
        {/* Drone body */}
        <Box args={[2, 0.3, 2]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#2563eb" metalness={0.8} roughness={0.2} />
        </Box>
        
        {/* Drone arms */}
        <Box args={[3, 0.1, 0.1]} position={[0, 0.1, 0]}>
          <meshStandardMaterial color="#1e40af" />
        </Box>
        <Box args={[0.1, 0.1, 3]} position={[0, 0.1, 0]}>
          <meshStandardMaterial color="#1e40af" />
        </Box>
        
        {/* Propellers */}
        {[
          [-1.4, 0.2, -1.4],
          [1.4, 0.2, -1.4],
          [-1.4, 0.2, 1.4],
          [1.4, 0.2, 1.4]
        ].map((position, index) => (
          <group key={index} position={position}>
            <Sphere args={[0.1]} position={[0, 0.1, 0]}>
              <meshStandardMaterial color="#374151" />
            </Sphere>
            <Box ref={propellerRefs[index]} args={[0.8, 0.02, 0.1]} position={[0, 0.15, 0]}>
              <meshStandardMaterial color="#6b7280" />
            </Box>
          </group>
        ))}
        
        {/* Camera gimbal */}
        <Sphere args={[0.3]} position={[0, -0.3, 0]}>
          <meshStandardMaterial color="#111827" metalness={0.9} roughness={0.1} />
        </Sphere>
      </group>
    </Float>
  );
};

const FloatingDrone = ({ className = "" }) => {
  return (
    <motion.div 
      className={`w-64 h-64 ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} />
        <RotatingDrone />
      </Canvas>
    </motion.div>
  );
};

export default FloatingDrone;