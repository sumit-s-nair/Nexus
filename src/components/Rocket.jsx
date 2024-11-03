import { useGLTF, useAnimations } from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

export const Rocket = () => {
  const { scene, animations } = useGLTF('./models/model.glb');
  const { actions } = useAnimations(animations, scene);
  const rocketRef = useRef(null);
  const [scale, setScale] = useState([0.1, 0.1, 0.1]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setScale([0.05, 0.05, 0.05]);
      } else {
        setScale([0.1, 0.1, 0.1]);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (actions && actions[0]) {
      actions[0].play();
      actions[0].setLoop(THREE.LoopRepeat, Infinity);
    }
  }, [actions]);

  return (
    <primitive
      object={scene}
      ref={rocketRef}
      scale={scale}
      rotation={[-89, 0, 0]}
    />
  );
};
