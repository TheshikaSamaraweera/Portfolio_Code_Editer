import React from "react";
import { VscChevronDown, VscFolderOpened, VscJson, VscFileCode } from "react-icons/vsc";

const files = [
  { name: "home.jsx", icon: <VscFileCode /> },
  { name: "about.jsx", icon: <VscFileCode /> },
  { name: "skills.jsx", icon: <VscFileCode /> },
  { name: "projects.jsx", icon: <VscFileCode /> },
];

export default function Sidebar({ activeFile, onFileClick }) {
  return (
    <div className="w-64 bg-[#1e1e1e] border-r border-gray-800 flex flex-col">
      <div className="p-4 text-xs text-gray-400">EXPLORER</div>
      <div className="pl-4 text-gray-500 text-sm flex items-center">
        <VscChevronDown className="mr-1" /> PORTFOLIO
      </div>

      {/* Folder */}
      <div className="mt-2 pl-8 flex items-center text-gray-400">
        <VscFolderOpened className="mr-2 text-yellow-500" /> src
      </div>

      {/* Files */}
      <ul className="mt-1">
        {files.map((file) => (
          <li
            key={file.name}
            onClick={() => onFileClick(file.name)}
            className={`flex items-center px-8 py-1 cursor-pointer hover:bg-gray-800 ${
              activeFile === file.name
                ? "bg-gray-800 text-white"
                : "text-gray-400"
            }`}
          >
            <span className="mr-2">{file.icon}</span>
            {file.name}
          </li>
        ))}
      </ul>

      {/* Assets & Components */}
      <div className="mt-2 pl-8 flex items-center text-gray-400">
        <VscFolderOpened className="mr-2 text-blue-400" /> assets
      </div>
      <div className="mt-1 pl-8 flex items-center text-gray-400">
        <VscFolderOpened className="mr-2 text-green-400" /> components
      </div>

      {/* JSON File */}
      <div className="mt-1 pl-8 flex items-center text-gray-400">
        <VscJson className="mr-2 text-orange-400" /> package.json
      </div>
    </div>
  );
}
