import { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

const Stars = () => {
  const starCount = 15000;
  const stars = useMemo(() => {
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 1000; // X position
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1000; // Y position
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1000; // Z position
    }
    return positions;
  }, [starCount]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={starCount}
          itemSize={3}
          array={stars}
        />
      </bufferGeometry>
      <pointsMaterial color={0xffffff} size={0.5} sizeAttenuation={true} />
    </points>
  );
};

export default Stars;
