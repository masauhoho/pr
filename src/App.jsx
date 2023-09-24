// 例: src/App.js

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';

function App() {
  return (
    <Canvas>
      <ambientLight />
      <Box args={[1, 1, 1]}>
        <meshStandardMaterial color={'skyblue'} />
      </Box>
      <OrbitControls />
    </Canvas>
  );
}

export default App;

