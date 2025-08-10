import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Tab from "./components/Tab";
import About from "./pages/About";
import Terminal from "./components/Terminal";
import StatusBar from "./components/StatusBar";


const fileComponents = {
  "about.jsx": <About />,
};

export default function App() {
  const [activeTabs, setActiveTabs] = useState(["about.jsx"]);
  const [activeFile, setActiveFile] = useState("about.jsx");
  const [terminalOpen, setTerminalOpen] = useState(false);


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
    <div className="flex flex-col h-screen bg-gray-900 font-mono text-sm text-gray-200">
      <div className="flex flex-1">
        <Sidebar activeFile={activeFile} onFileClick={handleFileClick} />
        <div className="flex-1 flex flex-col">
          <Tab tabs={activeTabs} activeTab={activeFile} onTabClick={setActiveFile} onClose={handleTabClose} />
          <div className="flex-1 overflow-auto p-4 bg-[#1e1e1e] border-t border-gray-800">
            {fileComponents[activeFile] || <p className="text-gray-500">// Select a file to view</p>}
          </div>
        </div>
      </div>
      <Terminal isOpen={terminalOpen} onToggle={() => setTerminalOpen(!terminalOpen)} />
      <StatusBar />
    </div>
  );
}

