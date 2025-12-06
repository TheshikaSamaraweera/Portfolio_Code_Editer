import React from 'react';

const Minimap = ({ show = false }) => {
  if (!show) return null;

  // Real code from About page for minimap
  const realCodeLines = [
    "import React from 'react';",
    "import { motion } from 'framer';",
    "import { FaGithub } from 'react';",
    "",
    "const TypewriterText = ({",
    "  text, delay = 0",
    "}) => {",
    "  const [displayedText,",
    "    setDisplayedText] = useState",
    "  useEffect(() => {",
    "    let index = 0;",
    "    const timer = setTimeout",
    "      const interval = setInter",
    "        setDisplayedText((prev",
    "        index++;",
    "        if (index === text.len",
    "      }, 50);",
    "      return () => clearInterval",
    "    }, delay);",
    "  }, [text, delay]);",
    "  return <span>{displayed",
    "};",
    "",
    "export default function About(",
    "  const [mousePosition,",
    "    setMousePosition] = useSt",
    "  useEffect(() => {",
    "    const handleMouseMove = (",
    "      setMousePosition({ x: e",
    "    };",
    "    window.addEventListener(",
    "    return () => window.remove",
    "  }, []);",
    "  const lineCount = 60;",
    "  return (",
    "    <div className=\"relative",
    "      <div className=\"w-12",
    "        {Array.from({ length:",
    "          <div key={i} classNa",
    "            {i + 1}",
    "          </div>",
    "        ))}",
    "      </div>",
    "      <div className=\"flex-1",
    "        <div className=\"fixed",
    "          style={{",
    "            background: `radial",
    "          }}",
    "        />",
    "        <div className=\"max-w",
    "          <motion.div",
    "            initial={{ opacity:",
  ];

  return (
    <div className="w-32 bg-[#1e1e1e] border-l border-[#2b2b2c] h-full hidden md:block overflow-y-auto opacity-70 flex-shrink-0">
      <div className="p-2 text-[7px] font-mono leading-tight">
        {realCodeLines.map((line, i) => {
          // Determine color based on content
          let colorClass = 'text-[#858585]'; // default gray

          if (line.includes('import') || line.includes('export') || line.includes('return')) {
            colorClass = 'text-[#c586c0]'; // purple for keywords
          } else if (line.includes('const') || line.includes('function') || line.includes('let')) {
            colorClass = 'text-[#569cd6]'; // blue for declarations
          } else if (line.includes("'") || line.includes('"') || line.includes('`')) {
            colorClass = 'text-[#ce9178]'; // orange for strings
          } else if (line.includes('className') || line.includes('useState') || line.includes('useEffect')) {
            colorClass = 'text-[#4fc1ff]'; // light blue for hooks/props
          }

          return (
            <div
              key={i}
              className={`whitespace-pre overflow-hidden ${colorClass}`}
              style={{
                textOverflow: 'clip',
                maxWidth: '100%',
                height: '10px'
              }}
            >
              {line}
            </div>
          );
        })}
      </div>

      {/* Minimap Slider - represents visible area */}
      <div className="sticky top-12 left-0 w-full h-20 bg-white/5 border border-white/10 pointer-events-none" />
    </div>
  );
};

export default Minimap;
