import React from "react";

import { useState, useEffect } from 'react';
import { VscSourceControl, VscError, VscWarning, VscInfo } from 'react-icons/vsc';

export default function StatusBar() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-between items-center bg-[#1e1e1e] text-white text-xs px-4 py-1 border-t border-[#2b2b2c]">
      {/* Left side */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <VscSourceControl className="w-3 h-3" />
          <span>main</span>
          <span className="text-green-300">↑↓ 0</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <VscError className="w-3 h-3 text-red-400" />
            <span className="text-red-300">0</span>
          </div>
          <div className="flex items-center space-x-1">
            <VscWarning className="w-3 h-3 text-yellow-300" />
            <span className="text-yellow-300">0</span>
          </div>
          <div className="flex items-center space-x-1">
            <VscInfo className="w-3 h-3 text-blue-300" />
            <span className="text-blue-300">0</span>
          </div>
        </div>
      </div>

      {/* Center */}
      <div className="flex items-center space-x-4">
        <span>Portfolio</span>
        <span>⚡ React</span>
        <span>Prettier</span>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        <span>Ln 1, Col 1</span>
        <span>Spaces: 2</span>
        <span>UTF-8</span>
        <span>JSX</span>
        <span>{currentTime.toLocaleTimeString()}</span>
      </div>
    </div>
  );
}
