import { useState, useRef, useEffect } from "react";
import { VscClose, VscChevronUp, VscAdd, VscTrash, VscSplitHorizontal } from 'react-icons/vsc';
import { TerminalCommandHandler } from './TerminalCommands';

export default function Terminal({ isOpen, onToggle, onFileOpen }) {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to Portfolio Terminal v1.0.0' },
    { type: 'system', text: "Type 'help' to see available commands." },
    { type: 'system', text: '' }
  ]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [height, setHeight] = useState(300);
  const [isResizing, setIsResizing] = useState(false);

  const terminalRef = useRef(null);
  const inputRef = useRef(null);
  const commandHandlerRef = useRef(new TerminalCommandHandler(onFileOpen));
  const resizeStartY = useRef(0);
  const resizeStartHeight = useRef(0);

  // Auto-scroll to bottom when history changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input when terminal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Handle resize drag
  const handleResizeStart = (e) => {
    e.preventDefault();
    setIsResizing(true);
    resizeStartY.current = e.clientY;
    resizeStartHeight.current = height;
  };

  useEffect(() => {
    const handleResizeMove = (e) => {
      if (!isResizing) return;

      const delta = resizeStartY.current - e.clientY;
      const newHeight = Math.max(100, Math.min(800, resizeStartHeight.current + delta));
      setHeight(newHeight);
    };

    const handleResizeEnd = () => {
      setIsResizing(false);
    };

    if (isResizing) {
      document.addEventListener('mousemove', handleResizeMove);
      document.addEventListener('mouseup', handleResizeEnd);

      return () => {
        document.removeEventListener('mousemove', handleResizeMove);
        document.removeEventListener('mouseup', handleResizeEnd);
      };
    }
  }, [isResizing]);

  const handleCommand = () => {
    if (!input.trim()) return;

    const cmd = input.trim();
    const handler = commandHandlerRef.current;

    // Add command to history
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);

    // Add command to display
    const promptPath = handler.currentPath.replace('/home/user', '~');
    setHistory(prev => [...prev,
    { type: 'prompt', text: `${promptPath} $`, command: cmd }
    ]);

    // Execute command
    const result = handler.execute(cmd);

    // Handle special cases
    if (result.clearScreen) {
      setHistory([]);
      setInput("");
      return;
    }

    if (result.exit) {
      onToggle();
      setInput("");
      return;
    }

    // Add output
    if (result.output) {
      setHistory(prev => [...prev, {
        type: result.error ? 'error' : 'output',
        text: result.output
      }]);
    }

    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'c' && e.ctrlKey) {
      e.preventDefault();
      setHistory(prev => [...prev, { type: 'cancelled', text: `${input}^C` }]);
      setInput('');
    }
  };

  if (!isOpen) {
    return (
      <div
        className="bg-[#1e1e1e] text-gray-400 text-xs px-4 py-2 cursor-pointer border-t border-[#2b2b2c] hover:bg-[#252526] flex items-center justify-between"
        onClick={onToggle}
      >
        <span>⬆ Terminal</span>
        <span className="text-[#858585]">Ctrl+`</span>
      </div>
    );
  }

  const currentPath = commandHandlerRef.current.currentPath.replace('/home/user', '~');

  return (
    <div
      className="flex flex-col bg-[#1e1e1e] border-t border-[#2b2b2c]"
      style={{ height: `${height}px` }}
    >
      {/* Resize Handle */}
      <div
        className="h-1 bg-[#2b2b2c] hover:bg-[#007acc] cursor-ns-resize transition-colors"
        onMouseDown={handleResizeStart}
      />

      {/* Terminal Header/Tabs */}
      <div className="flex items-center justify-between bg-[#252526] border-b border-[#2b2b2c] h-9">
        <div className="flex items-center">
          {/* Active Tab */}
          <div className="flex items-center gap-2 px-4 py-1 bg-[#1e1e1e] border-r border-[#2b2b2c] text-sm text-gray-300">
            <span>bash</span>
            <VscClose className="w-3 h-3 hover:bg-[#3c3c3c] cursor-pointer rounded" onClick={onToggle} />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1 px-2">
            <VscAdd className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer p-0.5 hover:bg-[#3c3c3c] rounded" title="New Terminal" />
            <VscSplitHorizontal className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer p-0.5 hover:bg-[#3c3c3c] rounded" title="Split Terminal" />
            <VscTrash className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer p-0.5 hover:bg-[#3c3c3c] rounded" onClick={onToggle} title="Kill Terminal" />
          </div>
        </div>

        {/* Minimize/Close */}
        <div className="flex items-center pr-2">
          <VscChevronUp
            className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer p-0.5 hover:bg-[#3c3c3c] rounded"
            onClick={onToggle}
            title="Hide Terminal"
          />
        </div>
      </div>

      {/* Terminal Content */}
      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto p-2 font-mono text-sm bg-[#1e1e1e] text-[#cccccc]"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((line, i) => (
          <div key={i} className="leading-relaxed">
            {line.type === 'prompt' ? (
              <div className="flex gap-2">
                <span className="text-[#4ec9b0]">{line.text}</span>
                <span className="text-[#cccccc]">{line.command}</span>
              </div>
            ) : line.type === 'error' ? (
              <div className="text-[#f48771]">{line.text}</div>
            ) : line.type === 'system' ? (
              <div className="text-[#858585]">{line.text}</div>
            ) : line.type === 'cancelled' ? (
              <div className="text-gray-500">{line.text}</div>
            ) : (
              <div className="whitespace-pre-wrap">{line.text}</div>
            )}
          </div>
        ))}

        {/* Input Line */}
        <div className="flex gap-2">
          <span className="text-[#4ec9b0] flex-shrink-0">{currentPath} $</span>
          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-transparent focus:outline-none text-[#cccccc] font-mono caret-[#007acc]"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck="false"
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
}
