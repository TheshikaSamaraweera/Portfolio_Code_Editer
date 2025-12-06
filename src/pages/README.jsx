import React from 'react';
import { motion } from 'framer-motion';
import { VscBook, VscTerminal, VscFiles, VscCode, VscColorMode } from 'react-icons/vsc';

export default function README() {
    return (
        <div className="max-w-4xl mx-auto p-8 text-gray-300">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Header */}
                <div className="mb-8 pb-6 border-b border-[#2b2b2c]">
                    <div className="flex items-center gap-3 mb-4">
                        <VscBook className="text-4xl text-[#007acc]" />
                        <h1 className="text-4xl font-bold text-white">Portfolio README</h1>
                    </div>
                    <p className="text-xl text-gray-400">
                        Welcome to Theshika Samaraweera's Interactive VS Code Portfolio
                    </p>
                </div>

                {/* Introduction */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-[#4ec9b0]">📖</span> Introduction
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        This is an interactive portfolio designed to look and feel like Visual Studio Code.
                        You can navigate through my projects, skills, certificates, and more using both the
                        traditional UI and terminal commands.
                    </p>
                    <div className="bg-[#1e1e1e] border border-[#2b2b2c] rounded-lg p-4">
                        <p className="font-mono text-sm text-[#ce9178]">
                            "A developer's portfolio should reflect their craft." - Thus, a VS Code themed portfolio! 🚀
                        </p>
                    </div>
                </section>

                {/* Navigation */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <VscFiles className="text-[#007acc]" /> Navigation Guide
                    </h2>

                    <div className="space-y-4">
                        <div className="bg-[#252526] border border-[#2b2b2c] rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                <span className="text-[#4ec9b0]">1.</span> Sidebar Navigation
                            </h3>
                            <ul className="space-y-2 text-gray-300 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#569cd6]">•</span>
                                    <span>Click on any <code className="bg-[#1e1e1e] px-2 py-0.5 rounded text-[#ce9178]">.jsx</code> file in the sidebar</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#569cd6]">•</span>
                                    <span>Files will open as tabs at the top</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#569cd6]">•</span>
                                    <span>Click the <code className="bg-[#1e1e1e] px-2 py-0.5 rounded">×</code> on tabs to close them</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-[#252526] border border-[#2b2b2c] rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                <VscTerminal className="text-[#4ec9b0]" /> 2. Terminal Navigation
                            </h3>
                            <p className="text-gray-300 mb-3">Open the terminal from the bottom bar and use these commands:</p>
                            <div className="bg-[#1e1e1e] rounded-lg p-4 font-mono text-sm space-y-2">
                                <div><span className="text-[#4ec9b0]">$</span> <span className="text-[#569cd6]">pwd</span> <span className="text-gray-500"># Show current directory</span></div>
                                <div><span className="text-[#4ec9b0]">$</span> <span className="text-[#569cd6]">ls</span> <span className="text-gray-500"># List all files</span></div>
                                <div><span className="text-[#4ec9b0]">$</span> <span className="text-[#569cd6]">ls -la</span> <span className="text-gray-500"># List with details</span></div>
                                <div><span className="text-[#4ec9b0]">$</span> <span className="text-[#569cd6]">cd ..</span> <span className="text-gray-500"># Go up one directory</span></div>
                                <div><span className="text-[#4ec9b0]">$</span> <span className="text-[#569cd6]">code about.jsx</span> <span className="text-gray-500"># Open file in editor</span></div>
                                <div><span className="text-[#4ec9b0]">$</span> <span className="text-[#569cd6]">clear</span> <span className="text-gray-500"># Clear terminal</span></div>
                                <div><span className="text-[#4ec9b0]">$</span> <span className="text-[#569cd6]">help</span> <span className="text-gray-500"># Show all commands</span></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <VscCode className="text-[#007acc]" /> Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-[#252526] border border-[#2b2b2c] rounded-lg p-4">
                            <h4 className="font-semibold text-white mb-2">🎨 VS Code Theme</h4>
                            <p className="text-sm text-gray-400">Authentic Visual Studio Code dark theme with accurate colors and styling</p>
                        </div>
                        <div className="bg-[#252526] border border-[#2b2b2c] rounded-lg p-4">
                            <h4 className="font-semibold text-white mb-2">💻 Interactive Terminal</h4>
                            <p className="text-sm text-gray-400">Fully functional terminal with real command execution</p>
                        </div>
                        <div className="bg-[#252526] border border-[#2b2b2c] rounded-lg p-4">
                            <h4 className="font-semibold text-white mb-2">🗺️ Minimap</h4>
                            <p className="text-sm text-gray-400">Code minimap for quick navigation (visible on About page)</p>
                        </div>
                        <div className="bg-[#252526] border border-[#2b2b2c] rounded-lg p-4">
                            <h4 className="font-semibold text-white mb-2">📐 Resizable Terminal</h4>
                            <p className="text-sm text-gray-400">Drag the terminal handle to resize vertically</p>
                        </div>
                    </div>
                </section>

                {/* Sections */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-4">📂 Portfolio Sections</h2>
                    <div className="space-y-2">
                        <div className="bg-[#1e1e1e] border border-[#2b2b2c] rounded p-3 hover:border-[#007acc] transition-colors">
                            <code className="text-[#4fc1ff]">about.jsx</code> <span className="text-gray-500">→</span> <span className="text-gray-300">My background and introduction</span>
                        </div>
                        <div className="bg-[#1e1e1e] border border-[#2b2b2c] rounded p-3 hover:border-[#007acc] transition-colors">
                            <code className="text-[#4fc1ff]">skills.jsx</code> <span className="text-gray-500">→</span> <span className="text-gray-300">Technical skills and expertise</span>
                        </div>
                        <div className="bg-[#1e1e1e] border border-[#2b2b2c] rounded p-3 hover:border-[#007acc] transition-colors">
                            <code className="text-[#4fc1ff]">projects.jsx</code> <span className="text-gray-500">→</span> <span className="text-gray-300">GitHub projects and contributions</span>
                        </div>
                        <div className="bg-[#1e1e1e] border border-[#2b2b2c] rounded p-3 hover:border-[#007acc] transition-colors">
                            <code className="text-[#4fc1ff]">my_projects.jsx</code> <span className="text-gray-500">→</span> <span className="text-gray-300">Featured portfolio projects</span>
                        </div>
                        <div className="bg-[#1e1e1e] border border-[#2b2b2c] rounded p-3 hover:border-[#007acc] transition-colors">
                            <code className="text-[#4fc1ff]">certificates.jsx</code> <span className="text-gray-500">→</span> <span className="text-gray-300">Professional certifications</span>
                        </div>
                        <div className="bg-[#1e1e1e] border border-[#2b2b2c] rounded p-3 hover:border-[#007acc] transition-colors">
                            <code className="text-[#4fc1ff]">achievements.jsx</code> <span className="text-gray-500">→</span> <span className="text-gray-300">Accomplishments and awards</span>
                        </div>
                        <div className="bg-[#1e1e1e] border border-[#2b2b2c] rounded p-3 hover:border-[#007acc] transition-colors">
                            <code className="text-[#4fc1ff]">articles.jsx</code> <span className="text-gray-500">→</span> <span className="text-gray-300">Published articles and blog posts</span>
                        </div>
                        <div className="bg-[#1e1e1e] border border-[#2b2b2c] rounded p-3 hover:border-[#007acc] transition-colors">
                            <code className="text-[#4fc1ff]">contact.jsx</code> <span className="text-gray-500">→</span> <span className="text-gray-300">Get in touch</span>
                        </div>
                    </div>
                </section>

                {/* Tips */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-4">💡 Pro Tips</h2>
                    <div className="bg-[#264f78] border border-[#3794ff] rounded-lg p-4 space-y-2">
                        <p className="text-white"><strong>Tip 1:</strong> Use ↑/↓ arrow keys in terminal to navigate command history</p>
                        <p className="text-white"><strong>Tip 2:</strong> Drag the terminal resize handle for better view</p>
                        <p className="text-white"><strong>Tip 3:</strong> Try <code className="bg-[#1e1e1e] px-2 py-0.5 rounded">code about.jsx</code> in terminal to open files</p>
                        <p className="text-white"><strong>Tip 4:</strong> Press Ctrl+C in terminal to cancel current input</p>
                    </div>
                </section>

                {/* Footer */}
                <div className="mt-12 pt-6 border-t border-[#2b2b2c] text-center">
                    <p className="text-gray-400">
                        Made with ❤️ by <span className="text-[#4ec9b0] font-semibold">Theshika Samaraweera</span>
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                        Powered by React, Tailwind CSS, and Framer Motion
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
