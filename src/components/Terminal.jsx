export default function Terminal({ isOpen, onToggle }) {
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
        <span>Terminal</span>
        <span>⬇</span>
      </div>
      <div className="p-2 font-mono h-40 overflow-y-auto">
        <p>user@portfolio:~$ npm start</p>
        <p>Starting the development server...</p>
        <p>Compiled successfully!</p>
        <p>Local: http://localhost:5173</p>
        <p>Happy hacking!</p>
        <p className="text-yellow-400">^C to exit</p>
      </div>
    </div>
  );
}
