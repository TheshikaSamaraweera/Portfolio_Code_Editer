import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Tab from "./components/Tab";
import About from "./pages/About";

const fileComponents = {
  "about.jsx": <About />,
};

export default function App() {
  const [activeTabs, setActiveTabs] = useState(["about.jsx"]);
  const [activeFile, setActiveFile] = useState("about.jsx");

  const handleFileClick = (file) => {
    if (!activeTabs.includes(file)) {
      setActiveTabs([...activeTabs, file]);
    }
    setActiveFile(file);
  };

  const handleTabClose = (file) => {
    const updatedTabs = activeTabs.filter((f) => f !== file);
    setActiveTabs(updatedTabs);
    if (activeFile === file) {
      setActiveFile(updatedTabs[updatedTabs.length - 1] || "");
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 font-mono text-sm text-gray-200">
      <Sidebar activeFile={activeFile} onFileClick={handleFileClick} />
      <div className="flex-1 flex flex-col">
        <Tab
          tabs={activeTabs}
          activeTab={activeFile}
          onTabClick={setActiveFile}
          onClose={handleTabClose}
        />
        <div className="flex-1 overflow-auto p-4 bg-gray-900 border-t border-gray-800">
          {fileComponents[activeFile] || (
            <p className="text-gray-500">// Select a file to view</p>
          )}
        </div>
      </div>
    </div>
  );
}
