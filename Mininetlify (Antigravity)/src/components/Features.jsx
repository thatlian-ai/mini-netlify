import React from 'react';
import { Layout, Globe, Zap, Shield, Database, Terminal } from 'lucide-react';

const features = [
    {
        icon: <Globe className="h-6 w-6 text-teal-400" />,
        title: "Deploy to a global Edge network",
        description: "Your site is automatically deployed to our global Edge network, ensuring fast load times for users everywhere."
    },
    {
        icon: <Zap className="h-6 w-6 text-yellow-400" />,
        title: "Instant Rollbacks",
        description: "Mistakes happen. Roll back to any previous version of your site in a single click."
    },
    {
        icon: <Layout className="h-6 w-6 text-purple-400" />,
        title: "Deploy Previews",
        description: "Every pull request gets its own live URL. Share progress with your team before merging."
    },
    {
        icon: <Shield className="h-6 w-6 text-green-400" />,
        title: "Enterprise-grade Security",
        description: "Fully managed SSL, SSO, and role-based access control to keep your projects secure."
    },
    {
        icon: <Database className="h-6 w-6 text-blue-400" />,
        title: "Serverless Functions",
        description: "Add backend logic to your frontend with zero configuration. Just write your code and deploy."
    },
    {
        icon: <Terminal className="h-6 w-6 text-red-400" />,
        title: "Command Line Interface",
        description: "Manage your sites and deployments directly from your terminal with Netlify CLI."
    }
];

const Features = () => {
    return (
        <section className="py-24 bg-[#0E1E25] relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-900/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Everything you need to ship
                    </h2>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                        Netlify brings together the best developer tools in one platform,
                        so you can focus on building.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/50 border border-gray-700/50 p-8 rounded-xl hover:bg-gray-800 transition-colors duration-300 group hover:-translate-y-1 transform"
                        >
                            <div className="bg-gray-900/50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/10 group-hover:ring-teal-500/50">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a href="#" className="inline-flex items-center text-teal-400 font-bold hover:text-teal-300 transition-colors text-lg">
                        Explore the Platform <span className="ml-2">&rarr;</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Features;
