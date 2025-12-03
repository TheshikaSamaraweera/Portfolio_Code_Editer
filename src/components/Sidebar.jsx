import React from "react";
import { VscChevronDown, VscFolderOpened, VscJson, VscFileCode, VscStarFull, VscBook, VscMail, VscRocket } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";

const files = [
  { name: "about.jsx", icon: <FaReact className="text-[#61dafb]" /> },
  { name: "skills.jsx", icon: <VscFileCode className="text-yellow-400" /> },
  { name: "projects.jsx", icon: <VscFileCode className="text-blue-400" /> },
  { name: "my_projects.jsx", icon: <VscRocket className="text-green-400" /> },
  { name: "certificates.jsx", icon: <VscFileCode className="text-purple-400" /> },
  { name: "achievements.jsx", icon: <VscStarFull className="text-yellow-500" /> },
  { name: "articles.jsx", icon: <VscBook className="text-orange-400" /> },
  { name: "contact.jsx", icon: <VscMail className="text-red-400" /> },
];

export default function Sidebar({ activeFile, onFileClick }) {
  return (
    <div className="w-64 bg-[#252526] border-r border-[#2b2b2c] flex flex-col">
      <div className="p-4 text-xs text-gray-400 font-semibold tracking-wider">EXPLORER</div>
      <div className="pl-4 text-gray-400 text-sm flex items-center hover:text-gray-300 cursor-pointer">
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
            className={`flex items-center px-8 py-1 cursor-pointer transition-colors ${activeFile === file.name
              ? "bg-[#094771] text-white border-l-2 border-blue-400"
              : "text-gray-400 hover:bg-[#2a2d2e] hover:text-gray-200"
              }`}
          >
            <span className="mr-2">{file.icon}</span>
            <span className="text-sm">{file.name}</span>
          </li>
        ))}
      </ul>

      {/* Assets & Components */}
      <div className="mt-1 pl-8 flex items-center text-gray-400 hover:text-gray-300 cursor-pointer">
        <VscFolderOpened className="mr-2 text-blue-400" /> assets
      </div>
      <div className="mt-1 pl-8 flex items-center text-gray-400 hover:text-gray-300 cursor-pointer">
        <VscFolderOpened className="mr-2 text-green-400" /> components
      </div>
      <div className="mt-1 pl-8 flex items-center text-gray-400 hover:text-gray-300 cursor-pointer">
        <VscFolderOpened className="mr-2 text-purple-400" /> pages
      </div>
      <div className="mt-1 pl-8 flex items-center text-gray-400 hover:text-gray-300 cursor-pointer">
        <VscFolderOpened className="mr-2 text-cyan-400" /> data
      </div>

      {/* JSON File */}
      <div className="mt-1 pl-8 flex items-center text-gray-400 hover:text-gray-300 cursor-pointer">
        <VscJson className="mr-2 text-orange-400" /> package.json
      </div>

      {/* Outline Section */}
      <div className="mt-4 pt-4 border-t border-[#2b2b2c]">
        <div className="p-4 text-xs text-gray-400 font-semibold tracking-wider">OUTLINE</div>
        <div className="pl-8 text-gray-400 text-sm hover:text-gray-300 cursor-pointer flex items-center">
          <VscFileCode className="mr-2 text-blue-400" /> {activeFile || "No file selected"}
        </div>
      </div>
    </div>
  );
}
