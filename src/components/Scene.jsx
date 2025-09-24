import React, { Suspense, useRef, useMemo } from 'react';
import { useGLTF, useScroll, Environment, Html, Float, Points, PointMaterial, Line } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Vector3, Color, MathUtils } from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { IcosahedronGeometry, MeshStandardMaterial } from 'three';

// Loader for model
function Loader() {
    return <Html center><span className="text-blue-700 text-lg font-semibold">Loading AI Model...</span></Html>;
}

// Helper to generate a random position within a certain range
const randomVec3 = (scale) => new Vector3(
    (Math.random() - 0.5) * scale,
    (Math.random() - 0.5) * scale,
    (Math.random() - 0.5) * scale
);


function AIBrainNetwork(props) {
    const numNodes = 30;

    // CORRECTED PART 1: Create node refs correctly at the top level
    const nodeRefs = useRef([]);
    // Ensure the refs array is populated
    if (nodeRefs.current.length !== numNodes) {
        nodeRefs.current = Array(numNodes).fill().map((_, i) => nodeRefs.current[i] || React.createRef());
    }

    // CORRECTED PART 2: Memoize only the static node data (without refs)
    const nodes = useMemo(() => Array.from({ length: numNodes }, () => ({
        initialPosition: randomVec3(3),
        targetPosition: randomVec3(3),
        speed: Math.random() * 0.005 + 0.002
    })), [numNodes]);

    const centralProcessorRef = useRef();

    useFrame((state, delta) => {
        const pulse = Math.sin(state.clock.getElapsedTime() * 2) * 0.08 + 1.0;
        if (centralProcessorRef.current) {
            centralProcessorRef.current.scale.set(pulse, pulse, pulse);
            centralProcessorRef.current.rotation.y += delta * 0.1;
        }

        // Animate nodes using the separate refs array
        nodes.forEach((node, i) => {
            const ref = nodeRefs.current[i];
            if (ref.current) {
                ref.current.position.lerp(node.targetPosition, node.speed);
                if (ref.current.position.distanceTo(node.targetPosition) < 0.1) {
                    node.targetPosition.copy(randomVec3(3));
                }
            }
        });
    });

    // Connections are now based on the memoized initial positions
    const connections = useMemo(() => {
        const lines = [];
        for (let i = 0; i < numNodes; i++) {
            // Connect each node to the central processor
            lines.push({ start: nodes[i].initialPosition, end: new Vector3(0, 0, 0) });
            // Connect nearby nodes
            for (let j = i + 1; j < numNodes; j++) {
                const dist = nodes[i].initialPosition.distanceTo(nodes[j].initialPosition);
                if (dist < 1.5) {
                    lines.push({ start: nodes[i].initialPosition, end: nodes[j].initialPosition });
                }
            }
        }
        return lines;
    }, [numNodes, nodes]);

    return (
        <Float floatIntensity={0.8} rotationIntensity={0.2} speed={1.8}>
            <group {...props}>
                {/* Central Processor */}
                <mesh ref={centralProcessorRef}>
                    <icosahedronGeometry args={[0.3, 0]} />
                    <meshStandardMaterial color="#ffffff" emissive="#88ceff" emissiveIntensity={2.5} toneMapped={false} />
                </mesh>

                {/* Nodes (Neurons) */}
                {nodes.map((node, i) => (
                    <mesh key={i} ref={nodeRefs.current[i]} position={node.initialPosition} castShadow>
                        <sphereGeometry args={[0.07, 8, 8]} />
                        <meshStandardMaterial color="#33aaff" emissive="#0090ff" emissiveIntensity={1.0} toneMapped={false} />
                    </mesh>
                ))}

                {/* Connections (Neural Pathways) */}
                {connections.map((connection, i) => (
                    <Line key={i} points={[connection.start, connection.end]} color="#0070ff" lineWidth={1.5} transparent opacity={0.6} />
                ))}
            </group>
        </Float>
    );
}

// Robot model with emissive blue for LEDs
function MainModel(props) {
    const { scene } = useGLTF('/robot-2.glb');
    scene.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.material) {
                child.material.color = new Color('#fff');
                if (child.name.includes('LED') || child.name.includes('Eye')) {
                    child.material.emissive = new Color('#0090ff');
                    child.material.emissiveIntensity = 0.8;
                } else {
                    child.material.emissiveIntensity = 0.8;
                }
            }
        }
    });
    return <primitive object={scene} {...props} />;
}

function AICore(props) { // Accept props
    const outerShellRef = useRef();
    const innerCoreRef = useRef();
    const kernelRef = useRef();

    useFrame((state, delta) => {
        if (outerShellRef.current && innerCoreRef.current && kernelRef.current) {
            outerShellRef.current.rotation.y += delta * 0.2;
            outerShellRef.current.rotation.x += delta * 0.1;
            innerCoreRef.current.rotation.y -= delta * 0.8;
            innerCoreRef.current.rotation.x += delta * 0.5;
            const pulse = Math.sin(state.clock.getElapsedTime() * 2) * 0.05 + 0.95;
            kernelRef.current.scale.set(pulse, pulse, pulse);
        }
    });

    return (
        // Pass all incoming props directly to the group
        <Float floatIntensity={0.6} rotationIntensity={0.3} speed={1.5}>
            <group {...props}>
                {/* 1. Outer Glassy Shell */}
                <mesh ref={outerShellRef} castShadow>
                    <dodecahedronGeometry args={[0.7, 0]} />
                    <meshStandardMaterial
                        color="#d1e0ff"
                        transparent
                        opacity={0.15}
                        roughness={0.1}
                        metalness={0.9}
                    />
                </mesh>
                {/* 2. Inner Wireframe Core */}
                <mesh ref={innerCoreRef}>
                    <dodecahedronGeometry args={[0.4, 0]} />
                    <meshStandardMaterial
                        color="#209cff"
                        emissive="#33aaff"
                        emissiveIntensity={1.5}
                        wireframe={true}
                    />
                </mesh>
                {/* 3. Central Pulsing Kernel */}
                <mesh ref={kernelRef}>
                    <sphereGeometry args={[0.1, 16, 16]} />
                    <meshStandardMaterial
                        color="#ffffff"
                        emissive="#e0f7ff"
                        emissiveIntensity={3.0}
                        toneMapped={false}
                    />
                </mesh>
            </group>
        </Float>
    );
}
// Floating geometric shapes in blue and white
function FloatingShapes() {
    const blueMat = {
        color: '#156fff',
        emissive: '#50b8ff',
        emissiveIntensity: 0.7,
        roughness: 0.4,
        metalness: 0.4,
    };

    const whiteMat = {
        color: '#fff',
        emissive: '#e0f7ff',
        emissiveIntensity: 0.3,
        roughness: 0.6,
        metalness: 0.1,
    };

    return (
        <>
            <Float floatIntensity={0.8} rotationIntensity={0.4} speed={1.2}>
                <mesh position={[-2, 1.7, -1]} castShadow receiveShadow>
                    <boxGeometry args={[0.37, 0.37, 0.37]} />
                    <meshStandardMaterial {...blueMat} />
                </mesh>
            </Float>
            <Float floatIntensity={0.67} rotationIntensity={0.4} speed={0.9}>
                <mesh position={[2.3, 2.1, 0.8]} castShadow receiveShadow>
                    <octahedronGeometry args={[0.32]} />
                    <meshStandardMaterial {...whiteMat} />
                </mesh>
            </Float>
            <Float floatIntensity={0.7} rotationIntensity={0.5} speed={1.1}>
                <mesh position={[0.2, 2.8, -1.1]} castShadow receiveShadow>
                    <torusGeometry args={[0.41, 0.09, 16, 80]} />
                    <meshStandardMaterial {...blueMat} />
                </mesh>
            </Float>
        </>
    );
}

// Floating point particles in space
function FloatingParticles() {
    const count = 130;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        positions[i * 3] = MathUtils.randFloatSpread(10);
        positions[i * 3 + 1] = MathUtils.randFloatSpread(6) + 1;
        positions[i * 3 + 2] = MathUtils.randFloatSpread(10);
    }
    return (
        <Points positions={positions} limit={count} stride={3}>
            <PointMaterial color="#3fbfff" size={0.045} sizeAttenuation depthWrite={false} />
        </Points>
    );
}

export function Scene() {
    const scroll = useScroll();
    const modelRef = useRef();

    useFrame((state) => {
        const offset = scroll.offset;
        // Start closer but high, end at waist height and very close
        const startCamPos = new Vector3(0, 4, 10);      // closer at start
        const endCamPos = new Vector3(0, -2.9, 7);    // very close at end

        // Update camera position
        state.camera.position.lerp(
            startCamPos.clone().lerp(endCamPos, offset),
            0.05
        );
        // Camera looks slightly higher for half-body framing
        state.camera.lookAt(0, 0.5, 0);

        // Make model scale down as scrolling progresses
        if (modelRef.current) {
            const scale = 1 + 0.25 * (1 - offset); // scale = 1.25 at start, 1 at end
            modelRef.current.scale.set(scale, scale, scale);
            modelRef.current.rotation.y = offset * Math.PI * 2;
        }
    });


    return (
        <>
            <color attach="background" args={['#10182a']} />
            <Environment preset="night" background={false} blur={0.9} />

            {/* Lights */}
            <ambientLight intensity={0.36} color="#4066aa" />
            <directionalLight position={[8, 11, 8]} intensity={1.08} color="#0070ff" castShadow />
            <pointLight position={[-4, 3, -2]} intensity={0.7} color="#0090ff" />

            {/* Main robot 3D model */}
            <Suspense fallback={<Loader />}>
                <MainModel ref={modelRef} position={[0, -1.5, 0]} scale={0.7} />
            </Suspense>


            <AICore position={[2.8, 1.3, 0]} />

            {/* <AICore position={[-2.8, -0.6, -0.5]} scale={0.8} /> */}
            <AICore position={[-2.6, 1.8, -0.3]} scale={0.6} />

            <AIBrainNetwork position={[1.9, -2.8, 0]} scale={0.4} /> {/* Original position */}
            <AIBrainNetwork position={[-3.2, -0.6, -0.5]} scale={0.6} /> {/* Second, smaller network */}


            {/* <FloatingShapes /> */}
            <FloatingParticles />

            {/* Bloom effect for glow */}
            <EffectComposer>
                <Bloom
                    luminanceThreshold={0.36}
                    luminanceSmoothing={0.68}
                    height={280}
                    intensity={1.18}
                />
            </EffectComposer>
        </>
    );
}

useGLTF.preload('/robot.glb-2');
