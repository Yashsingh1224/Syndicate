import React from 'react';
import { motion } from 'framer-motion';

const productsData = [
    { name: "AI Writer", description: "Generate high-quality articles, emails, and more." },
    { name: "Code Assistant", description: "Debug, optimize, and write code with an AI partner." },
    { name: "Image Generator", description: "Turn your text prompts into stunning visual art." },
    { name: "Voice Synthesizer", description: "Create realistic text-to-speech audio in any voice." },
    { name: "Data Analyst", description: "Analyze complex datasets and extract valuable insights." },
    { name: "Chatbot Builder", description: "Develop and deploy intelligent conversational AI." },
];

const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: i * 0.15,
            type: "spring",
            stiffness: 100,
        },
    }),
};

const Products = () => {
    return (
        <section id="products" className="py-20 px-4 bg-black/20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-white">Our Suite of AI Products</h2>
                    <p className="text-gray-400 mt-4 text-lg">One subscription. Limitless possibilities.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productsData.map((product, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/5 p-6 rounded-lg text-center cursor-pointer hover:bg-blue-600/20 hover:scale-105 transition-all duration-300 border border-transparent hover:border-blue-500"
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={cardVariants}
                        >
                            <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                            <p className="text-gray-400">{product.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;