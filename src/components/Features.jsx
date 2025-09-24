import React from 'react';
import { motion } from 'framer-motion';

const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.5,
        },
    }),
};

const featuresData = [
    {
        icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
        ),
        title: "Unified Platform",
        description: "Access a diverse suite of top-tier AI tools without switching between different websites. Everything you need, under one roof."
    },
    {
        icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        ),
        title: "Cutting-Edge Models",
        description: "Leverage the latest advancements in artificial intelligence. We constantly update our platform with state-of-the-art models."
    },
    {
        icon: (
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        ),
        title: "Simple & Intuitive",
        description: "Our user-friendly interface ensures a seamless experience, allowing you to focus on your work, not on learning new tools."
    }
];

const Features = () => {
    return (
        <section id="features" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-white">Why Choose Syndicate-AI?</h2>
                    <p className="text-gray-400 mt-4 text-lg">The ultimate toolkit for modern innovation.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {featuresData.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10"
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={featureVariants}
                        >
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;