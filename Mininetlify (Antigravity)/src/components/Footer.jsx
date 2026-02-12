import React from 'react';
import { Github, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8 text-gray-400 text-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                    {/* Column 1: Brand & Social */}
                    <div className="col-span-2 lg:col-span-2">
                        <a href="/" className="inline-block mb-6 group">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gradient-to-tr from-teal-400 to-blue-500 rounded-md flex items-center justify-center transform rotate-3 group-hover:rotate-0 transition-transform">
                                    <span className="text-white font-bold text-lg">N</span>
                                </div>
                                <span className="text-2xl font-bold text-white tracking-tight group-hover:text-teal-400 transition-colors">Netlify</span>
                            </div>
                        </a>
                        <p className="mb-8 max-w-sm leading-relaxed">
                            Netlify is the modern development platform for Enterprises to realize the speed,
                            agility and performance of a modern web architecture.
                        </p>
                        <div className="flex space-x-5">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:-translate-y-1"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:-translate-y-1"><Github className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:-translate-y-1"><Linkedin className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:-translate-y-1"><Facebook className="h-5 w-5" /></a>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h3 className="text-white font-bold mb-6 tracking-wide">Products</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-teal-400 transition-colors">Netlify Connect</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition-colors">Netlify Core</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition-colors">Netlify Create</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition-colors">Netlify SDK</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition-colors">Netlify Graph</a></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h3 className="text-white font-bold mb-6 tracking-wide">Explore</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-teal-400 transition-colors">Docs</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition-colors">Integrations</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition-colors">Jamstack</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition-colors">Community</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition-colors">Resources</a></li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h3 className="text-white font-bold mb-6 tracking-wide">Company</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-teal-400 transition-colors">Jobs</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition-colors">News</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition-colors">Press</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition-colors">Contact Sales</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Netlify. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Trust Center</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Security</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
