import React from "react";

const files = [
  "home.jsx",
  "about.jsx",
  "skills.jsx",
  "projects.jsx",
];

export default function Sidebar({ activeFile, onFileClick }) {
  return (
    <div className="w-64 bg-gray-950 border-r border-gray-800">
      <div className="p-4 text-xs text-gray-400">EXPLORER</div>
      <div className="pl-4 text-gray-500 text-sm">PORTFOLIO</div>
      <ul className="mt-2">
        {files.map((file) => (
          <li
            key={file}
            onClick={() => onFileClick(file)}
            className={`px-4 py-1 cursor-pointer hover:bg-gray-800 ${
              activeFile === file ? "bg-gray-800 text-white" : "text-gray-400"
            }`}
          >
            {file}
          </li>
        ))}
      </ul>
    </div>
  );
}
