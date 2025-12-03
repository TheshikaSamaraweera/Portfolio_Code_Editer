import React from 'react';
import { VscFiles, VscSearch, VscSourceControl, VscDebugAlt, VscExtensions, VscAccount, VscSettingsGear } from 'react-icons/vsc';

const ActivityBar = () => {
    return (
        <div className="w-12 bg-[#333333] flex flex-col justify-between py-2 border-r border-[#2b2b2c] z-10">
            <div className="flex flex-col items-center space-y-4">
                <div className="cursor-pointer p-2 border-l-2 border-white text-white">
                    <VscFiles size={24} />
                </div>
                <div className="cursor-pointer p-2 border-l-2 border-transparent text-[#858585] hover:text-white transition-colors">
                    <VscSearch size={24} />
                </div>
                <div className="cursor-pointer p-2 border-l-2 border-transparent text-[#858585] hover:text-white transition-colors">
                    <VscSourceControl size={24} />
                </div>
                <div className="cursor-pointer p-2 border-l-2 border-transparent text-[#858585] hover:text-white transition-colors">
                    <VscDebugAlt size={24} />
                </div>
                <div className="cursor-pointer p-2 border-l-2 border-transparent text-[#858585] hover:text-white transition-colors">
                    <VscExtensions size={24} />
                </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
                <div className="cursor-pointer p-2 text-[#858585] hover:text-white transition-colors">
                    <VscAccount size={24} />
                </div>
                <div className="cursor-pointer p-2 text-[#858585] hover:text-white transition-colors">
                    <VscSettingsGear size={24} />
                </div>
            </div>
        </div>
    );
};

export default ActivityBar;
