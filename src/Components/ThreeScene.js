// src/ThreeScene.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

const ThreeScene = () => {
    return (
        <Canvas style={{ height: '100vh', background: '#282c34' }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Box position={[-1.2, 0, 0]} args={[1, 1, 1]}>
                <meshStandardMaterial attach="material" color="orange" />
            </Box>
            <Box position={[1.2, 0, 0]} args={[1, 1, 1]}>
                <meshStandardMaterial attach="material" color="lightblue" />
            </Box>
            <OrbitControls />
        </Canvas>
    );
};

export default ThreeScene;
