
import React, { useState, useEffect, useRef } from 'react';
import { VscSend, VscClearAll, VscRobot } from "react-icons/vsc";
import { sendMessageToGemini } from '../utils/gemini';

export default function ChatSidebar() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        { role: "model", text: "Hi! I'm the portfolio AI assistant. Ask me anything about the developer's experience, skills, or projects." }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Format history for Gemini (excluding the initial system prompt setup which is handled in the util)
    const getGeminiHistory = () => {
        // Filter out initial greeting if needed, or map strictly to API format
        return messages.slice(1).map(msg => ({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }]
        }));
    };

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput("");

        // Optimistic UI update
        const newMessages = [...messages, { role: "user", text: userMessage }];
        setMessages(newMessages);
        setIsLoading(true);

        // Get history only up to newMessages (excluding the one we just added? 
        // No, sendMessageToGemini expects 'history' BEFORE the current message.
        // So we pass the formatted history of previous messages.)
        const history = newMessages.slice(1, -1).map(msg => ({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }]
        }));

        const responseText = await sendMessageToGemini(history, userMessage);

        setMessages(prev => [...prev, { role: "model", text: responseText }]);
        setIsLoading(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="w-80 bg-[#1e1e1e] border-r border-[#2b2b2c] flex flex-col h-full">
            <div className="p-4 flex justify-between items-center text-xs text-gray-400 font-semibold tracking-wider border-b border-[#2b2b2c]">
                <span>AI CHAT ASSISTANT</span>
                <button
                    onClick={() => setMessages([{ role: "model", text: "Chat cleared. How can I help?" }])}
                    className="hover:text-white"
                    title="Clear Chat"
                >
                    <VscClearAll size={16} />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans text-sm">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div
                            className={`max-w-[85%] rounded p-3 ${msg.role === 'user'
                                ? 'bg-[#094771] text-white'
                                : 'bg-[#252526] text-gray-200 border border-[#3e3e42]'
                                }`}
                        >
                            {msg.role === 'model' && (
                                <div className="flex items-center gap-2 mb-1 text-xs text-blue-400 font-bold mb-1">
                                    <VscRobot /> Assistant
                                </div>
                            )}
                            <div className="whitespace-pre-wrap leading-relaxed">{msg.text}</div>
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-[#252526] border border-[#3e3e42] rounded p-3 text-gray-400 text-xs flex items-center gap-2">
                            <div className="animate-spin h-3 w-3 border-2 border-blue-500 rounded-full border-t-transparent"></div>
                            Thinking...
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-[#2b2b2c]">
                <div className="relative bg-[#3c3c3c] rounded border border-transparent focus-within:border-[#007fd4]">
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask about my skills..."
                        className="w-full bg-transparent text-gray-200 p-2 pr-10 text-sm focus:outline-none resize-none h-12 py-3"
                        style={{ minHeight: '40px', maxHeight: '120px' }}
                    />
                    <button
                        onClick={handleSend}
                        disabled={isLoading || !input.trim()}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white disabled:opacity-50"
                    >
                        <VscSend size={18} />
                    </button>
                </div>
                <div className="mt-2 text-[10px] text-gray-500 text-center">
                    Powered by Google Gemini 2.5 Flash
                </div>
            </div>
        </div>
    );
}
