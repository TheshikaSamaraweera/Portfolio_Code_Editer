import React from "react";

export default function StatusBar() {
  return (
    <div className="flex justify-between items-center bg-[#007acc] text-white text-xs px-4 py-1">
      <div className="flex space-x-4">
        <span>Portfolio</span>
        <span>main</span>
        <span>0</span>
        <span>0</span>
      </div>
      <div>Ln 1, Col 1 | Spaces: 2 | UTF-8 | JSX</div>
    </div>
  );
}
