import React from "react";
import chip8Logo from "/chip8.svg";
import type { NavItemsType } from "../../constants/navItems";

interface HeaderProps {
    navItems: NavItemsType[]
}

const Header: React.FC<HeaderProps> = ({ navItems }) => {
    return (
        <header className="bg-gray-900 text-white p-4 flex items-center justify-between border-b-2 border-gray-700">
            <div className="flex items-center">
                <img src={chip8Logo} alt="CHIP-8 Logo" className="h-10 w-10 invert" />
                <span className="text-3xl font-bold text-purple-400 mr-1.5">CHIP-8</span>
                <span className="sr-only sm:not-sr-only text-sm text-gray-400">Emulator</span>
            </div>

            <nav className="flex items-center space-x-6">
                {
                    navItems.map((item, idx) => {
                        return (
                            <a
                                key={item.text + idx.toString()}
                                href={item.href}
                                className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-200"
                                title={item.title}
                                target={item.external ? "_blank" : undefined}
                                rel={item.external ? "noopener noreferrer" : undefined}
                            >
                                <img src={item.src} alt={item.title} className="h-7 w-7 mr-1" />
                                <span className="sr-only sm:not-sr-only text-lg">{item.text}</span>
                            </a>)
                    })
                }
            </nav>
        </header>
    );
};

export default Header;