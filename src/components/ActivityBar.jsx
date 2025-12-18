import React from 'react';
import { VscFiles, VscSearch, VscSourceControl, VscDebugAlt, VscExtensions, VscAccount, VscSettingsGear, VscCommentDiscussion } from 'react-icons/vsc';

const ActivityBar = ({ activeView, onViewChange }) => {
    return (
        <div className="w-12 bg-[#1e1e1e] flex flex-col justify-between py-2 border-r border-[#2b2b2c] h-full">
            <div className="flex flex-col items-center space-y-4">
                <div
                    onClick={() => onViewChange('explorer')}
                    className={`cursor-pointer p-3 border-l-2 transition-colors ${activeView === 'explorer'
                        ? 'border-white text-white'
                        : 'border-transparent text-[#858585] hover:text-white'
                        }`}
                    title="Explorer"
                >
                    <VscFiles size={24} />
                </div>

                {/* Chat Bot Icon - Highlighting it's the new feature */}
                <div
                    onClick={() => onViewChange('chat')}
                    className={`cursor-pointer p-3 border-l-2 transition-colors ${activeView === 'chat'
                        ? 'border-white text-white'
                        : 'border-transparent text-[#858585] hover:text-white'
                        }`}
                    title="Ask AI Assistant"
                >
                    <VscCommentDiscussion size={24} />
                </div>

                <div className="cursor-pointer p-3 border-l-2 border-transparent text-[#858585] hover:text-white transition-colors opacity-50 cursor-not-allowed">
                    <VscSearch size={24} />
                </div>
                <div className="cursor-pointer p-3 border-l-2 border-transparent text-[#858585] hover:text-white transition-colors opacity-50 cursor-not-allowed">
                    <VscSourceControl size={24} />
                </div>
                <div className="cursor-pointer p-3 border-l-2 border-transparent text-[#858585] hover:text-white transition-colors opacity-50 cursor-not-allowed">
                    <VscExtensions size={24} />
                </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
                <div className="cursor-pointer p-3 text-[#858585] hover:text-white transition-colors">
                    <VscAccount size={24} />
                </div>
                <div className="cursor-pointer p-3 text-[#858585] hover:text-white transition-colors">
                    <VscSettingsGear size={24} />
                </div>
            </div>
        </div>
    );
};

export default ActivityBar;
