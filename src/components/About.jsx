import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-4xl font-extrabold text-white mb-4">About Syndicate-AI</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Founded with the vision to democratize access to artificial intelligence, Syndicate-AI is on a mission to build a centralized hub for the world's best AI technologies. We believe in empowering creators, developers, and businesses by providing powerful, intuitive tools that drive innovation and simplify complex problems. Our platform is more than just a collection of products; it's a launchpad for the next generation of ideas.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;