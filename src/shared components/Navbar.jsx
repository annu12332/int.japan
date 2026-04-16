import React, { useState } from 'react';

const Navbar = ({ onLangChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLang, setActiveLang] = useState('en');

    const handleLangSwitch = (lang) => {
        setActiveLang(lang);
        if (onLangChange) onLangChange(lang);
    };

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Courses', href: '#' },
        { name: 'Support', href: '#' },
        { name: 'Access', href: '#' },
        { name: 'Sitemap', href: '#' },
        { name: 'Contact', href: '#' },
    ];

    const languages = [
        { label: '日本語', code: 'jp' },
        { label: 'English', code: 'en' },
        { label: 'বাংলা', code: 'bn' }
    ];

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                                <div className="w-8 h-1 bg-white"></div>
                            </div>
                        </div>
                        <div className="leading-tight">
                            <h1 className="text-xl font-bold text-blue-800 tracking-tighter">INT JAPAN</h1>
                            <p className="text-[10px] text-gray-500 font-medium uppercase tracking-widest">Training Center</p>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 hover:text-blue-700 font-medium text-sm transition-colors"
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
                                className={`px-4 py-2 text-sm rounded-xl transition-all font-medium border ${
                                    activeLang === lang.code
                                        ? 'bg-blue-700 text-white border-blue-700 shadow-md'
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
                            className="text-gray-600 hover:text-blue-700 focus:outline-none p-2"
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

            <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="px-4 pt-2 pb-6 space-y-1 bg-white border-t border-gray-50">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-gray-100">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleLangSwitch(lang.code)}
                                className={`flex-1 py-2 text-sm rounded-lg transition-all border ${
                                    activeLang === lang.code
                                        ? 'bg-blue-700 text-white border-blue-700'
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