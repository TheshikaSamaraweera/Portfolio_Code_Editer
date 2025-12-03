import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const TypewriterText = ({ text, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
        if (index === text.length) clearInterval(interval);
      }, 50);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, delay]);

  return <span>{displayedText}</span>;
};

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-full p-8 overflow-hidden">
      {/* Dynamic Background Gradient following mouse */}
      <div
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 122, 204, 0.15), transparent 40%)`,
        }}
      />

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <span className="text-[#007acc] font-mono text-lg">const developer = </span>
            <span className="text-[#ce9178] font-mono text-lg">"Theshika Samaraweera";</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007acc] to-[#00b4d8]">Digital</span> <br />
            Experiences
          </h1>

          <div className="text-gray-400 text-lg leading-relaxed mb-8 font-mono">
            <span className="text-[#569cd6]">function</span> <span className="text-[#dcdcaa]">createImpact</span>() {'{'}
            <br />
            <span className="pl-4 text-[#9cdcfe]">return</span> <span className="text-[#ce9178]">"Crafting robust, scalable, and beautiful web applications."</span>;
            <br />
            {'}'}
          </div>

          <div className="flex gap-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, color: "#ffffff" }}
              className="text-gray-400 text-2xl transition-colors"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, color: "#0077b5" }}
              className="text-gray-400 text-2xl transition-colors"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, color: "#1da1f2" }}
              className="text-gray-400 text-2xl transition-colors"
            >
              <FaTwitter />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column: Glassmorphism Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#007acc] to-[#00b4d8] rounded-2xl blur opacity-30 animate-pulse" />
          <div className="relative bg-[#1e1e1e]/80 backdrop-blur-xl border border-[#ffffff]/10 rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center gap-4 mb-6 border-b border-[#ffffff]/10 pb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#007acc]">
                <img
                  src="https://interviewschool.com/wp-content/uploads/2019/07/linkedin-profiles.png" // Replace with actual image
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Theshika Samaraweera</h2>
                <p className="text-[#007acc]">Full Stack Developer</p>
              </div>
            </div>

            <div className="space-y-4 font-mono text-sm">
              <div className="flex justify-between items-center group">
                <span className="text-gray-500 group-hover:text-[#007acc] transition-colors">01. Location</span>
                <span className="text-gray-300">Sri Lanka</span>
              </div>
              <div className="flex justify-between items-center group">
                <span className="text-gray-500 group-hover:text-[#007acc] transition-colors">02. Experience</span>
                <span className="text-gray-300">3+ Years</span>
              </div>
              <div className="flex justify-between items-center group">
                <span className="text-gray-500 group-hover:text-[#007acc] transition-colors">03. Stack</span>
                <span className="text-gray-300">MERN, Next.js, AWS</span>
              </div>
              <div className="flex justify-between items-center group">
                <span className="text-gray-500 group-hover:text-[#007acc] transition-colors">04. Status</span>
                <span className="text-green-400 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Open for work
                </span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#ffffff]/10">
              <button className="w-full bg-[#007acc] hover:bg-[#0063a5] text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                Download Resume
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
