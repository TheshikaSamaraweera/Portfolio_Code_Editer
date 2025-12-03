import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffect = () => {
    // Code snippets for floating effect
    const codeSnippets = [
        '{ }', '< >', '[ ]', '( )', '=>', '===', '!==', '&&', '||',
        'const', 'let', 'function', 'return', 'import', 'export'
    ];

    // Generate floating code elements
    const floatingCode = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 25 + 15,
        delay: Math.random() * 5,
    }));

    // Line numbers effect
    const lineNumbers = Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        number: i + 1,
        delay: i * 0.05,
    }));

    // Accent lines (like cursor blink zones)
    const accentLines = Array.from({ length: 5 }).map((_, i) => ({
        id: i,
        top: Math.random() * 80 + 10,
        delay: Math.random() * 2,
    }));

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Base VS Code Dark Background */}
            <div className="absolute inset-0 bg-[#1e1e1e]" />

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e1e1e] via-[#252526] to-[#1e1e1e] opacity-80" />

            {/* Left sidebar simulation */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-[#333333] opacity-20 border-r border-[#007acc]/10" />

            {/* Line numbers column */}
            <div className="absolute left-12 top-0 bottom-0 w-16 bg-[#1e1e1e] opacity-40">
                {lineNumbers.map((line) => (
                    <motion.div
                        key={line.id}
                        className="text-[#858585] text-xs font-mono px-2 py-0.5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.2, 0.4, 0.2] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: line.delay,
                        }}
                    >
                        {line.number}
                    </motion.div>
                ))}
            </div>

            {/* Floating code snippets */}
            {floatingCode.map((code) => (
                <motion.div
                    key={code.id}
                    className="absolute font-mono text-sm"
                    style={{
                        left: `${code.x}%`,
                        top: `${code.y}%`,
                        color: code.text.length > 3 ? '#569cd6' : '#d4d4d4',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{
                        y: [0, -150, 0],
                        opacity: [0, 0.15, 0],
                    }}
                    transition={{
                        duration: code.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: code.delay,
                    }}
                >
                    {code.text}
                </motion.div>
            ))}

            {/* Horizontal accent lines (like active line highlight) */}
            {accentLines.map((line) => (
                <motion.div
                    key={line.id}
                    className="absolute left-0 right-0 h-8 bg-gradient-to-r from-transparent via-[#007acc]/5 to-transparent"
                    style={{ top: `${line.top}%` }}
                    animate={{
                        opacity: [0, 0.5, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        delay: line.delay,
                    }}
                />
            ))}

            {/* Cursor blink effect */}
            <motion.div
                className="absolute w-0.5 h-5 bg-[#007acc]"
                style={{
                    left: '30%',
                    top: '40%',
                    boxShadow: '0 0 10px #007acc',
                }}
                animate={{
                    opacity: [1, 0, 1],
                }}
                transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "steps(2)",
                }}
            />

            {/* Syntax highlight dots */}
            {Array.from({ length: 50 }).map((_, i) => (
                <motion.div
                    key={`dot-${i}`}
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        backgroundColor: [
                            '#569cd6', // Blue
                            '#4ec9b0', // Teal
                            '#dcdcaa', // Yellow
                            '#ce9178', // Orange
                            '#c586c0', // Purple
                        ][Math.floor(Math.random() * 5)],
                    }}
                    animate={{
                        opacity: [0, 0.3, 0],
                        scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: Math.random() * 4 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                    }}
                />
            ))}

            {/* Grid overlay (subtle) */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: 'linear-gradient(#007acc 1px, transparent 1px), linear-gradient(90deg, #007acc 1px, transparent 1px)',
                    backgroundSize: '100px 100px'
                }}
            />

            {/* Vignette effect */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#1e1e1e]/50" />
        </div>
    );
};

export default BackgroundEffect;