import React from "react";

export default function About() {
  return (
    <div className="text-sm">
      <p className="text-green-400">// Welcome to my developer portfolio</p>
      <p className="text-green-400">// Feel free to explore and navigate through the tabs</p>

      {/* Profile */}
      <div className="mt-6 flex items-center space-x-6">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="rounded-full border-2 border-blue-400"
        />
        <div>
          <h1 className="text-white text-3xl font-bold">John Doe</h1>
          <p className="text-gray-400">Full Stack Developer</p>
          <div className="mt-3 flex space-x-2">
            <span className="bg-gray-800 px-2 py-1 rounded-full text-xs">React</span>
            <span className="bg-gray-800 px-2 py-1 rounded-full text-xs">Node.js</span>
            <span className="bg-gray-800 px-2 py-1 rounded-full text-xs">Docker</span>
            <span className="bg-gray-800 px-2 py-1 rounded-full text-xs">AWS</span>
          </div>
          <div className="mt-3 flex space-x-2">
            <button className="bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded text-xs">
              Download Resume
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-xs">
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-6">
        <p className="text-green-400">/**</p>
        <p className="text-green-400"> * About Me Component</p>
        <p className="text-green-400"> * A brief introduction about myself and my journey</p>
        <p className="text-green-400">*/</p>
        <h2 className="text-blue-400 text-xl mt-4">About Me</h2>
        <p className="mt-2">
          I'm a passionate <span className="text-yellow-300">Full Stack Developer</span> with
          experience building scalable web apps.
        </p>
        <p className="mt-2">
          I specialize in <span className="text-purple-400">React</span>,{" "}
          <span className="text-green-400">Node.js</span>, and{" "}
          <span className="text-blue-300">Cloud</span>.
        </p>
      </div>
    </div>
  );
}
