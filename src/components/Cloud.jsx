import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { fadeOnBeforeCompile } from "../utils/fadeMaterial";

export function Cloud({ sceneOpacity, ...props }) {
  const { nodes, materials } = useGLTF("./models/rock_model.glb");

  const materialRef = useRef();

  useFrame(() => {
    if (materialRef.current) {
      materialRef.current.opacity = sceneOpacity.current;
    }
  });

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Rock_LOD_0_Rock_0.geometry}>
        <meshStandardMaterial
          ref={materialRef}
          onBeforeCompile={fadeOnBeforeCompile}
          transparent
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("./models/rock_model.glb");

