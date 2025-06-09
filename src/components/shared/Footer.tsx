import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="px-4 py-2 text-center text-sm text-gray-400 border-t-2 border-gray-700">
            <div className="flex flex-wrap items-center justify-center">
                <span>Built by </span>
                <a
                    href="https://github.com/bp7968h"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 font-semibold mx-1"
                >
                    bp7968h
                </a>
                <span>using </span>
                <span className="text-orange-400 font-semibold mx-1">Rust</span>
                <span>,</span>
                <span className="text-indigo-400 font-semibold mx-1">WebAssembly</span>
                <span> & </span>
                <span className="text-cyan-400 font-semibold mx-1">React</span>
            </div>
        </footer>
    )
}

export default Footer;