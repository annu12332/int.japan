import React, { useState, useEffect } from 'react';

const Navbar = ({ onLangChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLang, setActiveLang] = useState('en');
    const [activeSection, setActiveSection] = useState('/');

    // Hash change monitor korar jonno jeno click korle link highlight hoy
    useEffect(() => {
        const handleHashChange = () => {
            setActiveSection(window.location.hash || '/');
        };
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const handleLangSwitch = (lang) => {
        setActiveLang(lang);
        if (onLangChange) onLangChange(lang);
    };

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '#wcu' },
        { name: 'Courses', href: '#course' },
        { name: 'Support', href: '#cta' },
        { name: 'Access', href: '#access' },
        { name: 'Sitemap', href: '#' },
        { name: 'Contact', href: '#contact' }, // Apnar Contact section id onujayi contact deya holo
    ];

    const languages = [
        { label: '日本語', code: 'jp' },
        { label: 'English', code: 'en' },
        { label: 'বাংলা', code: 'bn' }
    ];

    return (
        // Glassmorphism effect: backdrop-blur and bg-white/70
        <nav className="bg-white/70 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo Section styled as per image logo */}
                    <div className="flex items-center gap-3">
                        <div className="flex-shrink-0">
                            <div className="relative w-11 h-11 flex flex-col items-center justify-center">
                                {/* Red Circle with top line like image logo */}
                                <div className="absolute top-1 w-6 h-[2px] bg-[#EE1D23]"></div>
                                <div className="w-9 h-9 bg-[#EE1D23] rounded-full"></div>
                            </div>
                        </div>
                        <div className="leading-tight">
                            <h1 className="text-xl font-bold text-[#1A3673] tracking-tighter">INT JAPAN</h1>
                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">Training Center</p>
                        </div>
                    </div>

                    {/* Desktop NavLinks with Active Highlight */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setActiveSection(link.href)}
                                className={`text-sm font-bold transition-all duration-300 relative py-1
                                    ${activeSection === link.href 
                                        ? 'text-[#EE1D23] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#EE1D23]' 
                                        : 'text-gray-600 hover:text-[#1A3673]'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-2">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleLangSwitch(lang.code)}
                                className={`px-4 py-2 text-sm rounded-xl transition-all font-bold border ${
                                    activeLang === lang.code
                                        ? 'bg-[#1A3673] text-white border-[#1A3673] shadow-md'
                                        : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                                }`}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>

                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-[#1A3673] focus:outline-none p-2"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="px-4 pt-2 pb-6 space-y-1 bg-white/90 backdrop-blur-lg border-t border-gray-50">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => {
                                setActiveSection(link.href);
                                setIsOpen(false);
                            }}
                            className={`block px-3 py-3 text-base font-bold rounded-lg ${
                                activeSection === link.href 
                                    ? 'bg-red-50 text-[#EE1D23]' 
                                    : 'text-gray-700 hover:bg-blue-50 hover:text-[#1A3673]'
                            }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-gray-100">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleLangSwitch(lang.code)}
                                className={`flex-1 py-2 text-sm rounded-lg transition-all border font-bold ${
                                    activeLang === lang.code
                                        ? 'bg-[#1A3673] text-white border-[#1A3673]'
                                        : 'border-gray-200 text-gray-600'
                                }`}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;