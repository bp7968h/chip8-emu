import React from "react";
import chip8Logo from "/chip8.svg";
import githubLogo from "../../assets/github.svg";
import helpLogo from "../../assets/help.svg";

const Header: React.FC = () => {
    return (
        <header className="bg-gray-900 text-white p-4 flex items-center justify-between border-b-2 border-gray-700">
            <div className="flex items-center space-x-2">
                <img src={chip8Logo} alt="CHIP-8 Logo" className="h-10 w-10 invert" />
                <span className="text-3xl font-bold text-purple-400">CHIP-8</span>
                <span className="hidden sm:block text-sm text-gray-400">Emulator</span>
            </div>

            <nav className="flex items-center space-x-6">
                <a
                    href="#"
                    className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-200"
                    title="About / Help"
                >
                    <img src={helpLogo} alt="Help" className="h-7 w-7 mr-1" />
                    <span className="hidden sm:block text-lg">About</span>
                </a>

                <a
                    href="https://github.com/bp7968h/chip8-emu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-200"
                    title="GitHub Repository"
                >
                    <img src={githubLogo} alt="GitHub Repository" className="h-7 w-7 mr-1" />
                    <span className="hidden sm:block text-lg">GitHub</span>
                </a>
            </nav>
        </header>
    );
};

export default Header;