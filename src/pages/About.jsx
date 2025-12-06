import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import ExperienceSection from "../components/ExperienceSection";

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

  // Calculate number of lines for line numbers (approximate)
  const lineCount = 60;

  return (
    <div className="relative min-h-full overflow-hidden flex">
      {/* Line Numbers Column */}
      <div className="w-12 flex-shrink-0 flex flex-col items-end pr-4 pt-8 text-[#858585] select-none bg-[#333333] border-r border-[#252526]">
        {Array.from({ length: lineCount }, (_, i) => (
          <div key={i} className="leading-6 text-xs">
            {i + 1}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Dynamic Background Gradient following mouse */}
        <div
          className="fixed inset-0 pointer-events-none opacity-20"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 122, 204, 0.15), transparent 40%)`,
          }}
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative z-10">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="text-[#569cd6] font-mono text-lg">const</span>{" "}
              <span className="text-[#4fc1ff] font-mono text-lg">developer</span>{" "}
              <span className="text-[#d4d4d4] font-mono text-lg">=</span>{" "}
              <span className="text-[#ce9178] font-mono text-lg">"Theshika Samaraweera";</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007acc] to-[#00b4d8]">Digital</span> <br />
              Experiences
            </h1>

            <div className="text-gray-400 text-lg leading-relaxed mb-8 font-mono">
              <span className="text-[#569cd6]">function</span> <span className="text-[#dcdcaa]">createImpact</span>
              <span className="text-[#d4d4d4]">()</span> <span className="text-[#d4d4d4]">{'{'}</span>
              <br />
              <span className="pl-4 text-[#c586c0]">return</span> <span className="text-[#ce9178]">"Crafting robust, scalable, and beautiful web applications."</span>
              <span className="text-[#d4d4d4]">;</span>
              <br />
              <span className="text-[#d4d4d4]">{'}'}</span>
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

          {/* Right Column: Info Card with Code Snippet */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-[#252526] border border-[#3c3c3c] rounded-lg overflow-hidden shadow-2xl">
              {/* Profile Section */}
              <div className="p-6 border-b border-[#3c3c3c]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#007acc]">
                    <img
                      src="https://interviewschool.com/wp-content/uploads/2019/07/linkedin-profiles.png"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Theshika Samaraweera</h2>
                    <p className="text-[#007acc] text-sm">Full Stack Developer</p>
                  </div>
                </div>

                {/* Info Details */}
                <div className="space-y-3 font-mono text-xs">
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
              </div>

              {/* Code Snippet Window */}
              <div className="bg-[#1e1e1e] p-4">
                {/* Window Chrome */}
                <div className="bg-[#2d2d30] rounded-t-lg px-3 py-2 flex items-center gap-2 mb-1">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 transition-colors cursor-pointer"></div>
                  </div>
                  <span className="text-xs text-gray-400 ml-2 font-mono">developer.js</span>
                </div>

                {/* Code Content */}
                <div className="bg-[#1e1e1e] rounded-b-lg p-4 font-mono text-xs leading-relaxed">
                  <div><span className="text-[#569cd6]">const</span> <span className="text-[#4fc1ff]">user</span> <span className="text-[#d4d4d4]">=</span> <span className="text-[#d4d4d4]">{'{'}</span></div>
                  <div className="pl-4"><span className="text-[#9cdcfe]">id</span><span className="text-[#d4d4d4]">:</span> <span className="text-[#b5cea8]">5678</span><span className="text-[#d4d4d4]">,</span></div>
                  <div className="pl-4"><span className="text-[#9cdcfe]">username</span><span className="text-[#d4d4d4]">:</span> <span className="text-[#ce9178]">'theshika'</span><span className="text-[#d4d4d4]">,</span></div>
                  <div className="pl-4"><span className="text-[#9cdcfe]">name</span><span className="text-[#d4d4d4]">:</span> <span className="text-[#ce9178]">'Theshika S.'</span></div>
                  <div><span className="text-[#d4d4d4]">{'}'}</span><span className="text-[#d4d4d4]">;</span></div>
                  <div className="mt-2"></div>
                  <div><span className="text-[#6a9955]">// Full-stack developer</span></div>
                </div>
              </div>

              {/* Download Button */}
              <div className="p-4 border-t border-[#3c3c3c]">
                <button className="w-full bg-[#007acc] hover:bg-[#005a9e] text-white py-2.5 rounded-lg font-semibold transition-all transform hover:scale-[1.02] active:scale-[0.98] text-sm">
                  Download Resume
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Section - Full Width Below */}
        <div className="max-w-5xl mx-auto mt-8 relative z-10">
          <ExperienceSection />
        </div>
      </div>
    </div>
  );
}
