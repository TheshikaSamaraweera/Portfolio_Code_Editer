import React from "react";

export default function Tab({ tabs, activeTab, onTabClick, onClose }) {
  return (
    <div className="flex bg-gray-800 border-b border-gray-700">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`flex items-center px-4 py-2 cursor-pointer border-r border-gray-700 ${
            activeTab === tab ? "bg-gray-900 text-white" : "text-gray-400 hover:bg-gray-700"
          }`}
          onClick={() => onTabClick(tab)}
        >
          {tab}
          <button
            className="ml-2 text-xs hover:text-red-500"
            onClick={(e) => {
              e.stopPropagation();
              onClose(tab);
            }}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
