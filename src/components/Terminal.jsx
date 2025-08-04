import { useState } from "react";
import { filesystem } from "../data/filesystem";

export default function Terminal({ isOpen, onToggle }) {
  const [history, setHistory] = useState([
    "Welcome to the Portfolio Terminal!",
    "Type `help` to see available commands.",
  ]);
  const [input, setInput] = useState("");
  const [currentDir, setCurrentDir] = useState("/");

  const handleCommand = () => {
    const args = input.trim().split(" ");
    const command = args[0];
    let output = "";

    switch (command) {
      case "help":
        output = "Available commands: ls, cd <dir>, help, clear";
        break;

      case "ls":
        output = filesystem[currentDir]
          ? filesystem[currentDir].join("  ")
          : "No such directory";
        break;

      case "cd":
        const target = args[1];
        if (!target) {
          output = "Usage: cd <directory>";
          break;
        }
        let newPath = currentDir;
        if (target === "..") {
          if (currentDir !== "/") {
            newPath = currentDir.substring(0, currentDir.lastIndexOf("/"));
            if (newPath === "") newPath = "/";
          }
        } else if (target.startsWith("/")) {
          newPath = target;
        } else {
          newPath = currentDir === "/" ? `/${target}` : `${currentDir}/${target}`;
        }
        if (filesystem[newPath]) {
          setCurrentDir(newPath);
          output = `Changed directory to ${newPath}`;
        } else {
          output = "No such directory";
        }
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        output = `Command not found: ${command}`;
    }

    setHistory([...history, `$ ${input}`, output]);
    setInput("");
  };

  if (!isOpen) {
    return (
      <div
        className="bg-gray-800 text-gray-400 text-xs px-4 py-2 cursor-pointer border-t border-gray-700"
        onClick={onToggle}
      >
        ⬆ Terminal
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-black text-green-400 text-xs border-t border-gray-700">
      <div
        className="flex items-center justify-between bg-gray-800 text-gray-400 px-4 py-2 cursor-pointer"
        onClick={onToggle}
      >
        <span>Terminal — {currentDir}</span>
        <span>⬇</span>
      </div>
      <div className="flex-1 p-2 font-mono h-40 overflow-y-auto">
        {history.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
      <div className="flex p-2 border-t border-gray-700">
        <span className="mr-2"> $</span>
        <input
          type="text"
          className="flex-1 bg-black focus:outline-none text-green-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleCommand();
          }}
          autoFocus
        />
      </div>
    </div>
  );
}
