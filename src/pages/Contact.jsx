import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle submission
    };

    return (
        <div className="min-h-full p-8 flex items-center justify-center relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                {/* Left Side: Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl font-bold text-white mb-6">Let's Talk</h1>
                    <p className="text-gray-400 text-lg mb-12">
                        Have a project in mind or just want to say hi? Feel free to send me a message.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-center gap-6 group">
                            <div className="w-14 h-14 bg-[#252526] rounded-2xl flex items-center justify-center text-[#007acc] text-2xl group-hover:scale-110 transition-transform border border-[#2b2b2c] group-hover:border-[#007acc]">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className="text-gray-400 text-sm font-mono mb-1">Email</h3>
                                <p className="text-white text-lg font-medium">hello@example.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group">
                            <div className="w-14 h-14 bg-[#252526] rounded-2xl flex items-center justify-center text-[#007acc] text-2xl group-hover:scale-110 transition-transform border border-[#2b2b2c] group-hover:border-[#007acc]">
                                <FaPhone />
                            </div>
                            <div>
                                <h3 className="text-gray-400 text-sm font-mono mb-1">Phone</h3>
                                <p className="text-white text-lg font-medium">+1 (555) 123-4567</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group">
                            <div className="w-14 h-14 bg-[#252526] rounded-2xl flex items-center justify-center text-[#007acc] text-2xl group-hover:scale-110 transition-transform border border-[#2b2b2c] group-hover:border-[#007acc]">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h3 className="text-gray-400 text-sm font-mono mb-1">Location</h3>
                                <p className="text-white text-lg font-medium">San Francisco, CA</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <form onSubmit={handleSubmit} className="bg-[#1e1e1e]/50 backdrop-blur-xl border border-[#ffffff]/10 p-8 rounded-3xl shadow-2xl">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-gray-400 text-sm font-mono mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-[#252526] border border-[#2b2b2c] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#007acc] transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm font-mono mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-[#252526] border border-[#2b2b2c] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#007acc] transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm font-mono mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-[#252526] border border-[#2b2b2c] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#007acc] transition-colors resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#007acc] to-[#00b4d8] text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                            >
                                Send Message
                                <FaPaperPlane />
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
