import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white/5 border-t border-white/10 mt-20">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-gray-400">
                    &copy; {new Date().getFullYear()} Syndicate-AI. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;