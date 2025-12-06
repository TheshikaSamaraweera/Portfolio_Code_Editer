import React from 'react';
import { VscChromeMinimize, VscChromeMaximize, VscChromeClose } from 'react-icons/vsc';

const Header = () => {
    return (
        <div className="h-8 bg-[#1e1e1e] flex items-center justify-between select-none border-b border-[#2b2b2c]">
            {/* Menu Bar */}
            <div className="flex items-center px-2">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
                    alt="VS Code"
                    className="w-4 h-4 mr-3"
                />
                <div className="flex text-[13px] text-[#cccccc] space-x-3 font-sans">
                    <span className="hover:bg-[#3c3c3c] px-1 rounded cursor-pointer">File</span>
                    <span className="hover:bg-[#3c3c3c] px-1 rounded cursor-pointer">Edit</span>
                    <span className="hover:bg-[#3c3c3c] px-1 rounded cursor-pointer">Selection</span>
                    <span className="hover:bg-[#3c3c3c] px-1 rounded cursor-pointer">View</span>
                    <span className="hover:bg-[#3c3c3c] px-1 rounded cursor-pointer">Go</span>
                    <span className="hover:bg-[#3c3c3c] px-1 rounded cursor-pointer">Run</span>
                    <span className="hover:bg-[#3c3c3c] px-1 rounded cursor-pointer">Terminal</span>
                    <span className="hover:bg-[#3c3c3c] px-1 rounded cursor-pointer">Help</span>
                </div>
            </div>

            {/* Title */}
            <div className="text-[#cccccc] text-[13px] font-sans opacity-80 absolute left-1/2 transform -translate-x-1/2">
                Theshika Samaraweera - Portfolio
            </div>

            {/* Window Controls */}
            <div className="flex h-full">
                <div className="w-11 flex items-center justify-center hover:bg-[#3c3c3c] cursor-pointer text-[#cccccc]">
                    <VscChromeMinimize />
                </div>
                <div className="w-11 flex items-center justify-center hover:bg-[#3c3c3c] cursor-pointer text-[#cccccc]">
                    <VscChromeMaximize />
                </div>
                <div className="w-11 flex items-center justify-center hover:bg-[#e81123] hover:text-white cursor-pointer text-[#cccccc]">
                    <VscChromeClose />
                </div>
            </div>
        </div>
    );
};

export default Header;
