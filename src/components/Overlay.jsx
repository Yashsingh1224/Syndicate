import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ children }) => (
    <motion.section
        className="h-screen w-full flex flex-col justify-center items-center p-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6 }}
        transition={{ duration: 0.75 }}
    >
        <div className="max-w-3xl bg-black/50 p-6 rounded-lg backdrop-blur-sm border border-white/10">
            {children}
        </div>
    </motion.section>
);

// New variation: Product Card component for grid card display
const ProductCard = ({ title, description, icon }) => (
    <div className="bg-gray-900 bg-opacity-80 rounded-lg shadow-lg p-6 m-4 max-w-xs">
        {icon && <div className="text-blue-500 text-4xl mb-4">{icon}</div>}
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
    </div>
);

// Product grid section
const ProductGridSection = () => (
    <motion.section
        className="h-screen w-full flex flex-col items-center p-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6 }}
        transition={{ duration: 0.75 }}
    >
        <h2 className="text-4xl font-bold text-white mb-8">Our AI Products</h2>
        <div className="flex flex-wrap justify-center max-w-5xl">
            <ProductCard
                icon="🤖"
                title="AI Chatbot"
                description="Engage in natural conversations powered by our latest NLP models."
            />
            <ProductCard
                icon="🖼️"
                title="Image Generator"
                description="Create stunning visuals from text prompts using cutting-edge GANs."
            />
            <ProductCard
                icon="📊"
                title="Data Analyzer"
                description="Unlock insights from complex datasets with advanced AI tools."
            />
            <ProductCard
                icon="🎙️"
                title="Voice Synthesis"
                description="Generate human-like speech for any text input with customizable voices."
            />
        </div>
    </motion.section>
);

// Data heavy section
const DataSection = () => (
    <motion.section
        className="h-screen w-full flex flex-col justify-start p-12 text-left max-w-4xl mx-auto overflow-y-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6 }}
        transition={{ duration: 0.75 }}
    >
        <h2 className="text-4xl font-bold text-white mb-6">Industry Impact Highlights</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 text-lg">
            <li>100K+ users across multiple industries leveraging Syndicate-AI tools.</li>
            <li>30% increase in productivity observed by companies using our AI chatbots.</li>
            <li>Generated over 1M images using our AI-driven multimedia tools.</li>
            <li>Industry-proven voice synthesis used in top podcasts and customer support.</li>
            <li>Efficient data analysis reducing decision-making time by up to 40%.</li>
        </ul>
    </motion.section>
);

export const Overlay = () => (
    <div
        className="fixed inset-0 w-full h-full pointer-events-none z-50"
        style={{
            left: 0,
            top: 0,
            width: "100vw",
            height: "100vh",
            pointerEvents: "none",
            zIndex: 50,
        }}
    >
        <div className="pointer-events-auto w-full h-full">
            <Section>
                <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
                    The Future of AI, <br />
                    <span className="text-blue-500">All in One Place.</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mt-8">Scroll down to explore</p>
            </Section>

            <ProductGridSection />

            <Section>
                <h2 className="text-4xl font-bold text-white">Customized AI Solutions</h2>
                <p className="text-lg text-gray-400 mt-4">
                    Whether you need NLP, vision, or data analysis tools, Syndicate-AI tailors AI product recommendations and integrations to your unique needs.
                </p>
            </Section>

            <DataSection />

            <Section>
                <h2 className="text-4xl font-bold text-white">Community & Support</h2>
                <p className="text-lg text-gray-400 mt-4">
                    Join a growing community of AI professionals and enthusiasts supported by expert teams to help you stay ahead in AI innovation.
                </p>
            </Section>

            <Section>
                <h2 className="text-4xl font-bold text-white">Start Your AI Journey Today</h2>
                <p className="text-lg text-gray-400 mt-4">
                    Explore Syndicate-AI’s comprehensive suite of AI solutions and empower your business or research with world-class technologies in one place.
                </p>
            </Section>
        </div>
    </div>
);
