import { useRef } from 'react';
import { BufferGeometry, Points, PointsMaterial, BufferAttribute } from 'three';
import { useFrame } from '@react-three/fiber';

const ParticleEffect = () => {
  const particlesRef = useRef<Points>(null);
  const particleCount = 500;
  const positions = new Float32Array(particleCount * 3);
  
  // Initialize positions with the particles starting lower
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 0.5; // X position
    positions[i * 3 + 1] = Math.random() * 2;       // Start lower for downward movement
    positions[i * 3 + 2] = (Math.random() - 0.5) * 0.5; // Z position
  }
  
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new BufferAttribute(positions, 3));

  const material = new PointsMaterial({ color: 0xff4500, size: 0.1, transparent: true, opacity: 0.8 });

  useFrame(() => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array;

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] -= 0.02; // Move down
        if (positions[i * 3 + 1] < -2) { // Adjust this threshold for reset
          positions[i * 3 + 1] = Math.random() * 2; // Reset to the top but lower
        }
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true; // Update positions
    }
  });

  return <points ref={particlesRef} geometry={geometry} material={material} />;
};

export default ParticleEffect;

