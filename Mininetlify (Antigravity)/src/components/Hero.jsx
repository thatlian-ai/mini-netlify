import React from 'react';

const Hero = () => {
    return (
        <section className="bg-[#0E1E25] text-white pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
                {/* Text Content */}
                <div className="md:w-1/2 z-10 text-center md:text-left">
                    <div className="mb-6 inline-block">
                        <span className="inline-flex items-center py-1 px-3 rounded-full bg-teal-900/30 text-teal-400 text-sm font-semibold border border-teal-800/50 hover:bg-teal-900/50 transition-colors cursor-pointer">
                            <span className="mr-2">New</span> Netlify Connect &rarr;
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
                        Push your ideas <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                            to the web
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
                        The modern development platform for shipping websites and apps.
                        Build, deploy, and scale without managing infrastructure.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a href="#" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-[#0E1E25] bg-teal-400 rounded-md hover:bg-teal-300 transition-all shadow-[0_0_20px_rgba(60,199,214,0.3)] hover:shadow-[0_0_30px_rgba(60,199,214,0.5)] transform hover:-translate-y-1">
                            Get started for free
                        </a>
                        <a href="#" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white bg-transparent border border-gray-600 rounded-md hover:border-gray-400 transition-all hover:bg-white/5">
                            Request a demo
                        </a>
                    </div>
                </div>

                {/* Visual/Illustration */}
                <div className="md:w-1/2 mt-16 md:mt-0 relative z-10 w-full pl-0 md:pl-12">
                    {/* Abstract shapes or placeholder for illustration */}
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="relative bg-gray-800/80 border border-gray-700/50 rounded-xl p-6 backdrop-blur-md shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 ring-1 ring-white/10">
                            {/* Code snippet simulation */}
                            <div className="flex gap-2 mb-6 border-b border-gray-700/50 pb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="space-y-4 font-mono text-sm md:text-base text-gray-300">
                                <div className="flex"><span className="text-purple-400 mr-2">const</span> app <span className="text-blue-400 mx-2">=</span> <span className="text-yellow-300">new</span> Netlify();</div>
                                <div className="flex"><span className="text-purple-400 mr-2">await</span> app.<span className="text-blue-400">deploy</span>(<span className="text-green-400">"production"</span>);</div>
                                <div className="text-gray-500 italic">// Optimization in progress...</div>
                                <div className="w-full bg-gray-700/50 rounded-full h-1.5 mt-2 overflow-hidden">
                                    <div className="bg-teal-400 h-1.5 rounded-full w-3/4 animate-[shimmer_2s_infinite]"></div>
                                </div>
                                <div className="text-teal-400 font-bold flex items-center mt-4">
                                    <span className="mr-2">✔</span> Site is live!
                                </div>
                                <div className="text-gray-500 text-xs">https://brilliant-site-123.netlify.app</div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute -top-10 -right-10 bg-gray-800/90 p-4 rounded-lg border border-gray-700 shadow-xl backdrop-blur-sm animate-[float_4s_ease-in-out_infinite] hidden sm:block">
                            <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Deploy time</div>
                            <div className="text-2xl font-bold text-white">12s</div>
                        </div>

                        <div className="absolute -bottom-5 -left-5 bg-gray-800/90 p-4 rounded-lg border border-gray-700 shadow-xl backdrop-blur-sm animate-[float_5s_ease-in-out_infinite_1s] hidden sm:block">
                            <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Visitors</div>
                            <div className="text-2xl font-bold text-teal-400">1.2M</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Gradients/Effects */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-900/10 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0E1E25] to-transparent pointer-events-none"></div>
        </section>
    );
};

export default Hero;
