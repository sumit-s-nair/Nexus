import { useGLTF, useAnimations } from '@react-three/drei';
import { useRef, useEffect } from 'react';

import * as THREE from 'three';

const Rocket = () => {
    const { scene, animations } = useGLTF('src/assets/complete_rocket.glb');
    const { actions } = useAnimations(animations, scene);
    const rocketRef = useRef<any>(null);

    useEffect(() => {
        if (actions && actions[0]) {
            actions[0].play();
            actions[0].setLoop(THREE.LoopRepeat, Infinity);
        }
    }, [actions]);

    return <primitive object={scene} ref={rocketRef} scale={[0.3, 0.3, 0.3]} />;
};

export default Rocket;
