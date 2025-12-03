import React from "react";

export default function Tab({ tabs, activeTab, onTabClick, onClose }) {
  const getFileIcon = (fileName) => {
    if (fileName.includes('about')) return '📄';
    if (fileName.includes('project')) return '💻';
    if (fileName.includes('certificate')) return '🏆';
    if (fileName.includes('achievement')) return '⭐';
    if (fileName.includes('home')) return '🏠';
    if (fileName.includes('skill')) return '⚙️';
    return '📄';
  };

  return (
    <div className="flex bg-[#252526] border-b border-[#2b2b2c] items-center overflow-x-auto">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`flex items-center px-3 py-2 cursor-pointer border-r border-[#2b2b2c] transition-all duration-200 group ${
            activeTab === tab 
              ? "bg-[#1e1e1e] text-white" 
              : "text-gray-400 hover:bg-[#2a2d2e] hover:text-gray-200"
          }`}
          onClick={() => onTabClick(tab)}
        >
          <span className="mr-2 text-sm">{getFileIcon(tab)}</span>
          <span className="text-sm font-medium">{tab}</span>
          <button
            className="ml-2 text-xs opacity-0 group-hover:opacity-100 hover:bg-[#2a2d2e] hover:text-red-400 rounded px-1 py-0.5 transition-all duration-200"
            onClick={(e) => {
              e.stopPropagation();
              onClose(tab);
            }}
          >
            ✕
          </button>
        </div>
      ))}
      
      {/* Tab actions */}
      <div className="flex items-center ml-auto px-2">
        <button 
          className="text-gray-400 hover:text-white p-1 rounded hover:bg-[#2a2d2e] transition-colors"
          title="New Tab"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  );
}
