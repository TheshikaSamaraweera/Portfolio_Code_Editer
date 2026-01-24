import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaMedium, FaTwitter } from "react-icons/fa";
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
      {/* Line Numbers Column - Hidden on mobile */}
      <div className="hidden md:flex w-12 flex-shrink-0 flex-col items-end pr-4 pt-8 text-[#858585] select-none bg-[#333333] border-r border-[#252526]">
        {Array.from({ length: lineCount }, (_, i) => (
          <div key={i} className="leading-6 text-xs">
            {i + 1}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 md:p-8">
        {/* Dynamic Background Gradient following mouse */}
        <div
          className="fixed inset-0 pointer-events-none opacity-20"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 122, 204, 0.15), transparent 40%)`,
          }}
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start relative z-10">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="text-[#569cd6] font-mono text-lg">const</span>{" "}
              <span className="text-[#4fc1ff] font-mono text-lg">Computer Engineer</span>{" "}
              <span className="text-[#d4d4d4] font-mono text-lg">=</span>{" "}
              <span className="text-[#ce9178] font-mono text-lg">"Theshika Navod";</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Engineering  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007acc] to-[#00b4d8]">Scalable</span> <br />
              Solutions
            </h1>

            <div className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 font-mono">
              <span className="text-[#569cd6]">function</span>{" "}
              <span className="text-[#dcdcaa]">aboutTheshika</span>
              <span className="text-[#d4d4d4]">()</span>{" "}
              <span className="text-[#d4d4d4]">{'{'}</span>
              <br />

              <span className="pl-4 text-[#c586c0]">return</span>{" "}
              <span className="text-[#ce9178]">
                "
                <span className="text-[#dcdcaa]">A hybrid Engineer specializing in </span>

                <span className="text-[#d7ba7d] font-semibold">backend development</span>,
                enhanced with
                <span className="text-[#9cdcfe] font-semibold"> frontend skills</span>,
                <span className="text-[#4ec9b0] font-semibold"> DevOps skills</span>, and
                high-end
                <span className="text-[#c586c0] font-semibold"> AI engineering knowledge</span>."
              </span>
              <span className="text-[#d4d4d4]">;</span>
              <br />

              <span className="text-[#d4d4d4]">{'}'}</span>
            </div>


            <div className="flex gap-6">
              <motion.a
                href="https://github.com/TheshikaSamaraweera"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#ffffff" }}
                className="text-gray-400 text-2xl transition-colors"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/theshika-navod-a6a22a254"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#0077b5" }}
                className="text-gray-400 text-2xl transition-colors"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://medium.com/@theshikanavod"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#1da1f2" }}
                className="text-gray-400 text-2xl transition-colors"
              >
                <FaMedium />
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
            <div className="relative bg-[#1e1e1e] border border-[#3c3c3c] rounded-lg overflow-hidden shadow-2xl">
              {/* Profile Section */}
              {/* Window Chrome */}
              <div className="bg-[#2d2d30] rounded-t-lg px-3 py-2 flex items-center gap-2 mb-1">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 transition-colors cursor-pointer"></div>
                </div>
                <span className="text-xs text-gray-400 ml-2 font-mono">developer.js</span>
              </div>
              <div className="p-6 border-b border-[#3c3c3c]">
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden hover:scale-110 transition-transform flex-shrink-0">
                    <img
                      src="../assets/img/heshika.png"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h2 className="text-lg sm:text-xl font-bold text-white">Theshika Samaraweera</h2>
                    <p className="text-[#007acc] text-xs sm:text-sm">Computer Engineer</p>
                  </div>
                </div>

                {/* Info Details */}
                <div className="space-y-2 sm:space-y-3 font-mono text-[10px] sm:text-xs">
                  <div className="flex justify-between items-center group">
                    <span className="text-whitw-500 group-hover:text-[#007acc] transition-colors">01. Location</span>
                    <span className="text-gray-300">Sri Lanka</span>
                  </div>
                  <div className="flex justify-between items-center group">
                    <span className="text-whitw-500 group-hover:text-[#007acc] transition-colors">02. Experience</span>
                    <span className="text-gray-300">1+ Years</span>
                  </div>
                  <div className="flex justify-between items-center group">
                    <span className="text-whitw-500 group-hover:text-[#007acc] transition-colors">03. looking for</span>
                    <span className="text-gray-300">Backend Engineering Role</span>
                  </div>
                  <div className="flex justify-between items-center group">
                    <span className="text-whitw-500 group-hover:text-[#007acc] transition-colors"></span>
                    <span className="text-gray-300">Full-Stack Engineering Role</span>
                  </div>
                  <div className="flex justify-between items-center group">
                    <span className="text-whitw-500 group-hover:text-[#007acc] transition-colors"></span>
                    <span className="text-gray-300">AI Engineering Role</span>
                  </div>
                  <div className="flex justify-between items-center group">
                    <span className="text-whitw-500 group-hover:text-[#007acc] transition-colors">04. Status</span>
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
                {/* <div className="bg-[#2d2d30] rounded-t-lg px-3 py-2 flex items-center gap-2 mb-1">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 transition-colors cursor-pointer"></div>
                  </div>
                  <span className="text-xs text-gray-400 ml-2 font-mono">developer.js</span>
                </div> */}

                {/* Code Content */}
                <div className="bg-[#1e1e1e] rounded-b-lg p-4 font-mono text-xs leading-relaxed">
                  <span className="text-[#569cd6]">function</span>{" "}
                  <span className="text-[#dcdcaa]">personalIdentity</span>
                  <span className="text-[#d4d4d4]">()</span>{" "}
                  <span className="text-[#d4d4d4]">{'{'}</span>
                  <br />

                  <span className="pl-4 text-[#c58c0]">return</span>{" "}
                  <span className="text-[#ce9178]">
                    "
                    <span className="text-[#dcdcaa]">A researcher, fast learner, hard worker,</span> and

                    <span className="text-[#d7ba7d] font-semibold"> a strategic gamer</span>,
                    who
                    <span className="text-[#9cdcfe] font-semibold"> leads teams with clarity, adaptability, and purpose.</span>
                    <span className="text-[#4ec9b0] font-semibold"> Crafting scalable, reliable</span>,
                    and
                    <span className="text-[#c586c0] font-semibold"> meaningful digital solutions</span>."
                  </span>
                  <span className="text-[#d4d4d4]">;</span>
                  <br />

                  <span className="text-[#d4d4d4]">{'}'}</span>
                </div>
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
