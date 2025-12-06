import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Tab from "./components/Tab";
import About from "./pages/About";
import Terminal from "./components/Terminal";
import StatusBar from "./components/StatusBar";
import Certificates from "./pages/Certificates";
import GitHubProjects from "./pages/GitHubProjects";
import ActivityBar from "./components/ActivityBar";
import Achievements from "./pages/Achievements";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Minimap from "./components/Minimap";
import { VscMenu } from "react-icons/vsc";

const fileComponents = {
  "about.jsx": <About />,
  "certificates.jsx": <Certificates />,
  "projects.jsx": <GitHubProjects />,
  "achievements.jsx": <Achievements />,
  "my_projects.jsx": <Projects />,
  "skills.jsx": <Skills />,
  "articles.jsx": <Articles />,
  "contact.jsx": <Contact />,
};

export default function App() {
  const [activeTabs, setActiveTabs] = useState(["about.jsx"]);
  const [activeFile, setActiveFile] = useState("about.jsx");
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Auto-hide sidebar on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Init
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleFileClick = (file) => {
    if (!activeTabs.includes(file)) {
      setActiveTabs([...activeTabs, file]);
    }
    setActiveFile(file);
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  const handleTabClose = (file) => {
    const updatedTabs = activeTabs.filter((f) => f !== file);
    setActiveTabs(updatedTabs);
    if (activeFile === file) {
      setActiveFile(updatedTabs[updatedTabs.length - 1] || "");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#1e1e1e] font-mono text-sm text-gray-200 relative overflow-hidden">
      <Header />

      {/* Mobile Menu Button */}
      <button
        className="md:hidden absolute top-10 left-4 z-50 p-2 bg-[#333] rounded text-white"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <VscMenu />
      </button>

      <div className="flex flex-1 overflow-hidden z-10 relative">
        {/* Activity Bar - Hidden on mobile */}
        <div className="hidden md:block h-full">
          <ActivityBar />
        </div>

        {/* Sidebar - Responsive */}
        <div className={`${sidebarOpen ? 'block' : 'hidden'} md:block absolute md:relative z-40 h-full flex flex-col`}>
          <Sidebar activeFile={activeFile} onFileClick={handleFileClick} />
        </div>

        <div className="flex-1 flex flex-col min-w-0 bg-[#1e1e1e] w-full">
          <Tab tabs={activeTabs} activeTab={activeFile} onTabClick={setActiveFile} onClose={handleTabClose} />
          <div className="flex-1 flex overflow-hidden bg-[var(--vscode-editor-background)] relative z-20">
            <div className="flex-1 overflow-auto">
              {fileComponents[activeFile] || <p className="text-gray-500 p-4">// Select a file to view</p>}
            </div>
            {/* Minimap on the right - only for About page */}
            <Minimap show={activeFile === 'about.jsx'} />
          </div>
        </div>
      </div>
      <div className="z-20 relative hidden md:block">
        <Terminal isOpen={terminalOpen} onToggle={() => setTerminalOpen(!terminalOpen)} />
        <StatusBar />
      </div>
    </div>
  );
}

