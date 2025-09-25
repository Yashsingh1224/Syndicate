import React from 'react';
import { motion } from 'framer-motion';
import { ChatbotIcon, ImageIcon, DataIcon, VoiceIcon } from './ProductIcons';

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

// New Feature Icons for the improved sections
const CustomizedSolutionsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 16v-2m0-8v-2m0 16V4m6 8h2m-16 0h2m14 0h2M4 12H2m18 0h-2m-8 6v2m-6-8h2m8 0h2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
);

const CommunityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

// New, more visually engaging component for feature sections
const FeatureSection = ({ title, description, icon, ctaLink, ctaText }) => (
    <div className="max-w-4xl bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-white/10 w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Icon Column */}
            {icon && (
                <div className="flex-shrink-0 text-blue-400">
                    {icon}
                </div>
            )}
            {/* Text & CTA Column */}
            <div className="text-center md:text-left flex-grow">
                <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
                <p className="text-lg text-gray-300 mt-4 max-w-xl">
                    {description}
                </p>
                {ctaText && ctaLink && (
                    <a
                        href={ctaLink}
                        className="mt-8 inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-500 transition-colors duration-300 shadow-lg transform hover:scale-105"
                    >
                        {ctaText}
                    </a>
                )}
            </div>
        </div>
    </div>
);

// New variation: Product Card component for grid card display
const ProductCard = ({ title, description, icon, link }) => (
    <div className=" rounded-lg bg-black/50 p-6 rounded-lg backdrop-blur-sm border border-white/10 shadow-lg p-6 m-4 flex flex-col max-w-xs">
        {/* Card content */}
        <div className="flex-grow">
            {icon && <div className="flex justify-center text-4xl mb-4">{icon}</div>}
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-300 text-sm">{description}</p>
            {link && (
                <a
                    href={link}
                    target="_blank" // Opens in a new tab, remove if not needed
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                    View tool
                    {/* Right Arrow SVG Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>
            )}
        </div>

        {/* "View more" link - Conditionally rendered */}

    </div>
);

// Product grid section
const ProductGridSection = () => (
    <motion.section
        className="min-h-screen w-full flex flex-col items-center justify-center p-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4 }} // Trigger animation when 40% of the section is in view
        transition={{ duration: 0.75 }}
    >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            A Universe of AI Tools
        </h2>
        <div className="flex flex-wrap justify-center max-w-6xl">
            <ProductCard
                icon={<ChatbotIcon />}
                title="AI Chatbot"
                description="Engage in natural conversations powered by our latest NLP models."
                link="/products/ai-chatbot"
            />
            <ProductCard
                icon={<ImageIcon />}
                title="Image Generator"
                description="Create stunning visuals from text prompts using cutting-edge GANs."
                link="/products/image-generator"
            />
            <ProductCard
                icon={<DataIcon />}
                title="Data Analyzer"
                description="Unlock insights from complex datasets with advanced AI tools."
                link="/products/data-analyzer"
            />
            <ProductCard
                icon={<VoiceIcon />}
                title="Voice Synthesis"
                description="Generate human-like speech for any text input with customizable voices."
                link="/products/voice-synthesis"
            />
        </div>
    </motion.section>
);

// Data heavy section
const DataSection = () => (
    <motion.section
        className="h-auto w-full flex flex-col justify-start p-12 text-left max-w-4xl mx-auto overflow-y-auto bg-black/50 rounded-lg backdrop-blur-sm border border-white/10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6 }}
        transition={{ duration: 0.75 }}
    >
        <h2 className="text-4xl font-bold text-white mb-6">Industry Impact <span className='text-blue-500'>Highlights</span></h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 text-lg">
            <li className='marker:text-blue-500'>100K+ users across multiple industries leveraging Syndicate-AI tools.</li>
            <li className='marker:text-blue-500' >30% increase in productivity observed by companies using our AI chatbots.</li>
            <li className='marker:text-blue-500'>Generated over 1M images using our AI-driven multimedia tools.</li>
            <li className='marker:text-blue-500'>Industry-proven voice synthesis used in top podcasts and customer support.</li>
            <li className='marker:text-blue-500'>Efficient data analysis reducing decision-making time by up to 40%.</li>
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
                <h1 className="font-extrabold text-white leading-tight
    text-3xl sm:text-3xl md:text-5xl lg:text-5xl
">
                    The Future of AI,<br />
                    <span className="text-blue-500">All in One Place.</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 mt-8">Scroll down to explore</p>
            </Section>

            <Section>
                <FeatureSection
                    title="Customized AI Solutions"
                    description="Whether you need NLP, vision, or data analysis tools, Syndicate-AI tailors AI product recommendations and integrations to your unique needs."
                    icon={<CustomizedSolutionsIcon />}
                />
            </Section>

            <ProductGridSection />

            <DataSection />

            {/* --- IMPROVED SECTION --- */}


            {/* --- IMPROVED SECTION --- */}
            <Section>
                <FeatureSection
                    title="Community & Support"
                    description="Join a growing community of AI professionals and enthusiasts supported by expert teams to help you stay ahead in AI innovation."
                    icon={<CommunityIcon />}
                />
            </Section>

            {/* --- IMPROVED SECTION WITH CTA BUTTON --- */}
            <Section>
                <FeatureSection
                    title="Start Your AI Journey Today"
                    description="Explore Syndicate-AI’s comprehensive suite of AI solutions and empower your business or research with world-class technologies in one place."
                    ctaText="Get Started Now"
                    ctaLink="/signup" // Example link
                />
            </Section>
        </div>
    </div>
);
