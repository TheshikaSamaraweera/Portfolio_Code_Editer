import React, { useState } from 'react';
import { VscShield, VscClose } from 'react-icons/vsc';
import demoVideo from '/demo.mp4';

export default function TrustDialog({ onTrust, onClose }) {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    const handleVideoLoad = () => {
        setIsVideoLoaded(true);
    };
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
                            How works this portfolio?
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white hover:bg-[#3c3c3c] p-1 rounded transition-colors"
                    >
                        <VscClose className="text-xl" />
                    </button>
                </div>

                <div className="p-0 relative min-h-[300px] flex items-center justify-center bg-[#1e1e1e]">
                    {!isVideoLoaded && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 z-10">
                            <div className="w-8 h-8 border-2 border-[#007acc] border-t-transparent rounded-full animate-spin"></div>
                            <p className="text-gray-400 text-sm">Loading demo video...</p>
                        </div>
                    )}
                    <video
                        src={demoVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        onLoadedData={handleVideoLoad}
                        className={`w-full h-auto object-cover transition-opacity duration-500 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
                    />
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-end gap-3 p-4 border-t border-[#454545] bg-[#2d2d30]">
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
                        Trust & Continue
                    </button>
                </div>
            </div>
        </div>
    );
}
