import React from 'react';
import { VscShield, VscClose } from 'react-icons/vsc';

export default function TrustDialog({ onTrust, onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

            {/* Dialog */}
            <div className="relative bg-[#252526] border border-[#454545] rounded-lg shadow-2xl w-full max-w-xl mx-4 animate-fade-in">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-[#454545]">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#007acc] flex items-center justify-center">
                            <VscShield className="text-white text-xl" />
                        </div>
                        <h2 className="text-lg font-semibold text-white">
                            Do you trust the author of this portfolio?
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white hover:bg-[#3c3c3c] p-1 rounded transition-colors"
                    >
                        <VscClose className="text-xl" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                        Welcome to <span className="text-[#4ec9b0] font-semibold">Theshika's Portfolio</span> -
                        an interactive VS Code themed demo portfolio.
                    </p>

                    <div className="bg-[#1e1e1e] border border-[#3c3c3c] rounded-lg p-4 space-y-2">
                        <p className="text-gray-400 text-sm">
                            <span className="text-[#569cd6]">Features:</span>
                        </p>
                        <ul className="text-gray-300 text-sm space-y-1 ml-4">
                            <li className="flex items-start gap-2">
                                <span className="text-[#4ec9b0]">•</span>
                                <span>Full <span className="text-[#ce9178]">VS Code theme</span> with authentic styling</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#4ec9b0]">•</span>
                                <span>Interactive <span className="text-[#ce9178]">terminal</span> with real commands (pwd, cd, ls, code)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#4ec9b0]">•</span>
                                <span>Navigate using <span className="text-[#ce9178]">sidebar</span> or <span className="text-[#ce9178]">terminal commands</span></span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#4ec9b0]">•</span>
                                <span>Resizable terminal, minimap, and more!</span>
                            </li>
                        </ul>
                    </div>

                    <p className="text-gray-400 text-sm">
                        If you don't trust the author, we do not recommend continuing as the files may be malicious.
                        See <a href="https://code.visualstudio.com/docs/editor/workspace-trust" target="_blank" rel="noopener noreferrer" className="text-[#3794ff] hover:underline">our docs</a> to learn more.
                    </p>

                    <div className="bg-[#2d2d30] border border-[#454545] rounded p-3">
                        <p className="text-gray-400 text-xs">
                            <span className="text-[#4ec9b0]">💡 Tip:</span> After continuing, check out README.md for a complete user guide!
                        </p>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-end gap-3 p-4 border-t border-[#454545] bg-[#2d2d30]">
                    <button
                        className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-[#3c3c3c] rounded transition-colors"
                        disabled
                    >
                        Manage
                    </button>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-[#3c3c3c] rounded transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onTrust}
                        className="px-4 py-2 text-sm bg-[#007acc] hover:bg-[#005a9e] text-white rounded font-medium transition-colors"
                    >
                        Trust Folder & Continue
                    </button>
                </div>
            </div>
        </div>
    );
}
