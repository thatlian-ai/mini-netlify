import React, { useState } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Platform', hasDropdown: true },
        { name: 'Solutions', hasDropdown: true },
        { name: 'Integrations', hasDropdown: true },
        { name: 'Start Building', hasDropdown: true },
        { name: 'Docs', hasDropdown: false },
        { name: 'Pricing', hasDropdown: false },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="/" className="flex items-center gap-2">
                            {/* Simple geometric logo representation if no SVG available, or text */}
                            <div className="w-8 h-8 bg-gradient-to-tr from-teal-400 to-blue-500 rounded-md flex items-center justify-center transform rotate-3">
                                <span className="text-white font-bold text-lg">N</span>
                            </div>
                            <span className="text-xl font-bold text-gray-900 tracking-tight">
                                Netlify
                            </span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex space-x-6 xl:space-x-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                <button className="flex items-center text-gray-600 hover:text-teal-600 font-medium transition-colors duration-200 text-sm xl:text-base">
                                    {link.name}
                                    {link.hasDropdown && (
                                        <ChevronDown className="ml-1 h-4 w-4 opacity-50 group-hover:opacity-100" />
                                    )}
                                </button>
                            </div>
                        ))}
                    </nav>

                    {/* Right Side Buttons */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <button className="text-gray-500 hover:text-teal-600 p-1">
                            <Search className="h-5 w-5" />
                        </button>
                        <a href="#" className="text-gray-600 font-medium hover:text-teal-600 text-sm">
                            Contact Sales
                        </a>
                        <a href="#" className="text-gray-600 font-medium hover:text-teal-600 text-sm">
                            Log in
                        </a>
                        <a
                            href="#"
                            className="px-4 py-2 rounded-md bg-teal-500 hover:bg-teal-600 text-white font-bold transition-all shadow-[0_2px_0_0_#1e8a9d] active:shadow-none active:translate-y-[2px] text-sm"
                        >
                            Sign Up
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-teal-600 focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-lg animate-in slide-in-from-top-2 duration-200">
                    <div className="px-4 pt-2 pb-6 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href="#"
                                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 border-b border-gray-50 last:border-0"
                            >
                                <div className="flex justify-between items-center">
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
                                </div>
                            </a>
                        ))}
                        <div className="border-t border-gray-100 pt-4 mt-4 space-y-3">
                            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700">
                                Contact Sales
                            </a>
                            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700">
                                Log in
                            </a>
                            <a href="#" className="block w-full text-center px-4 py-3 rounded-md bg-teal-500 text-white font-bold shadow-[0_2px_0_0_#1e8a9d] active:shadow-none active:translate-y-[2px]">
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
