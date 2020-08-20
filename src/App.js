import React, { useRef } from 'react';
import './App.scss';

import { Canvas, useFrame } from 'react-three-fiber'


// import { Box } from 'drei'

const SpinningBox = ({ position, color, args }) => {
  const mesh = useRef(null)
  //adding 0.01 to x and y rotation each frame
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return (
    <mesh position={position} ref={mesh} >
      <boxBufferGeometry attach='geometry' args={args} />
      <meshStandardMaterial attach='material' color={color} />
    </mesh >
  )
}

function App() {
  return (
    <>
      <Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 60 }}>
        // ambientLight globally illuminating all objects on the sceen equally
        <ambientLight intenisty={0.3} />
        <SpinningBox position={[0, 1, 0]} args={[3,1,1]} color='pink'/>
        <SpinningBox position={[-2, 1, -5]} args={[1,1,1]} color='green'/>
        <SpinningBox position={[5, 1, -2]} args={[1,1,1]} color='blue'/>
      </Canvas>
    </>
  );
}

export default App;
