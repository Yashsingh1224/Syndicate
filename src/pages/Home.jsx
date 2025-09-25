import React from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';

import { Scene } from '../components/Scene';
import { Overlay } from '../components/Overlay';

const Home = () => {
    return (
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}> {/* Added shadows prop */}
            <color attach="background" args={['#0a0a1a']} /> {/* Set background color of the canvas */}
            <ScrollControls pages={7} damping={0.25}>
                <Scene />
                <Scroll html fullscreen="true">
                    <Overlay />
                </Scroll>
            </ScrollControls>
        </Canvas>
    )
};

export default Home;