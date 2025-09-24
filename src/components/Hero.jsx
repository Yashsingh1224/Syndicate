import React from 'react';
import { motion } from 'framer-motion';
import ThreeScene from './ui/ThreeScene'; // Import your new component

const Hero = () => {
    return (
        <div className="relative h-screen flex flex-col items-center justify-center text-center px-4">
            {/* 3D Model in the background */}
            <div className="absolute inset-0 z-0 opacity-70">
                <ThreeScene />
            </div>

            {/* Text content on top */}
            <motion.div
                className="relative z-10"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">
                    The Future of AI, <br />
                    <span className="text-blue-500">All in One Place.</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                    Syndicate-AI integrates the world's most powerful AI tools into a single, seamless platform. Unleash your creativity and productivity.
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition duration-300 shadow-lg shadow-blue-500/50"
                >
                    Explore Products
                </motion.button>
            </motion.div>
        </div>
    );
};

export default Hero;