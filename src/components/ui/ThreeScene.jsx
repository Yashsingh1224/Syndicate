import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

// This component loads and displays the 3D model
function Model(props) {
    // useGLTF is a hook from drei that loads the model
    const { scene } = useGLTF('/robot.glb'); // Path is relative to the 'public' folder
    return <primitive object={scene} {...props} />;
}

const ThreeScene = () => {
    return (
        <div className="w-full h-full">
            <Canvas camera={{ position: [2, 2, 5], fov: 50 }}>
                {/* Suspense is needed to handle the loading time of the model */}
                <Suspense fallback={null}>
                    {/* Add some lights to see the model */}
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />

                    <Model scale={0.5} />

                    {/* OrbitControls allow the user to rotate the model with the mouse */}
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate />
                </Suspense>
            </Canvas>
        </div>
    );
};

// Preload the model to improve performance
useGLTF.preload('/robot.glb');

export default ThreeScene;