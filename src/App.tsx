import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Rocket from './components/Rocket';
import ParticleEffect from './components/ParticleEffects';

const App = () => {
  return (
    <Canvas style={{ height: '100vh' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Rocket />
      <ParticleEffect />
      <OrbitControls />
      <Stars />
    </Canvas>
  );
};

export default App;
