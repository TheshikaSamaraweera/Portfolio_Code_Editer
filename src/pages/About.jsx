import React from "react";

export default function About() {
  return (
    <div className="text-sm">
      <p className="text-green-400">// Welcome to my developer portfolio</p>
      <p className="text-green-400">// Feel free to explore and navigate through the tabs</p>

      {/* Profile */}
     <div className="h-[40%] flex items-center space-x-6 border-b border-gray-700 pb-4">
        <img
          src="https://interviewschool.com/wp-content/uploads/2019/07/linkedin-profiles.png"
          alt="Profile"
          className="rounded-full border-2 border-blue-400 w-32 h-32 shadow-lg transform transition-transform hover:scale-110 hover:shadow-xl cursor-pointer"
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
        <div className="h-[60%] overflow-y-auto p-6">
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

           {/* Quick Facts Box */}
      <div className="absolute bottom-16 right-6 w-64 bg-gray-800 border border-gray-600 rounded-lg shadow-lg p-4 text-xs">
        <h3 className="text-blue-400 font-bold mb-2">💡 Quick Facts</h3>
        <ul className="list-disc pl-4 text-gray-300 space-y-1">
          <li>Use the tabs to explore my projects</li>
          <li>Click profile image to view LinkedIn</li>
          <li>Download my resume for details</li>
          <li>Dark mode friendly design</li>
          <li>Optimized for desktop & mobile</li>
        </ul>
      </div>

    </div>
  );
}
