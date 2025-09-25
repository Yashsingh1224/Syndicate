import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const navLinks = [
        { title: "Home", path: "/home" },
        { title: "Products", path: "/products" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
    ];

    const handleMobileLinkClick = (path) => {
        navigate(path);
        setMenuOpen(false);
    };

    const menuVariants = {
        closed: { opacity: 0, height: 0 },
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
    };

    const menuItemVariants = {
        closed: { opacity: 0, y: -20 },
        open: { opacity: 1, y: 0 },
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#10182a]/80 backdrop-blur-lg border-b border-blue-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}

                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center space-x-3 cursor-pointer"
                        aria-label="Go to home"
                    >
                        {/* <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div> */}

                        <img src="/favicon.png" alt="Syndicate AI Logo" style={{ height: "40px" }} />
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            Syndicate <span className='text-white'>AI</span>
                        </span>
                    </button>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center space-x-8 text-gray-300 text-base font-medium">
                        {navLinks.map((link) => (
                            <li key={link.title} className="relative">
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `relative px-2 py-1 transition-all duration-300 ${isActive
                                            ? "text-white font-extrabold z-10"
                                            : "text-gray-300 hover:text-white z-10"
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            {isActive && (
                                                <span
                                                    className="absolute top-1/2 left-1/2 w-14 h-14 rounded-full bg-blue-500 opacity-50 blur-[14px] -z-10 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                                                    aria-hidden="true"
                                                />
                                            )}
                                            {link.title}
                                        </>
                                    )}
                                </NavLink>

                            </li>
                        ))}
                    </ul>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden text-gray-300 hover:text-white focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="md:hidden overflow-hidden"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        <ul className="px-2 pt-2 pb-4 space-y-2 flex flex-col items-center">

                            {navLinks.map((link) => (
                                <motion.li key={link.title} variants={menuItemVariants}>
                                    <NavLink
                                        to={link.path}
                                        end={link.path === '/home'} // Use 'end' for exact matching on home or root paths if needed
                                        onClick={() => setMenuOpen(false)} // close menu on click
                                        className={({ isActive }) =>
                                            `block px-3 py-2 rounded-md text-left font-medium transition-colors duration-300 ${isActive
                                                ? "text-white bg-blue-900/80"
                                                : "text-gray-300 hover:text-white hover:bg-blue-900/30"
                                            }`
                                        }
                                    >
                                        {link.title}
                                    </NavLink>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

        </nav>
    );
}