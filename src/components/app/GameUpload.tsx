import React from "react";
import CardContent from "../ui/CardContent"

const GameUpload: React.FC = () => {
    return (
        <CardContent title="Upload Game">
            <div className="border-2 border-dashed border-purple-500 rounded-lg p-8 text-center text-purple-400 flex-shrink-0">
                <p className="text-lg mb-2">Drop ROM file here</p>
                <p className="text-sm text-gray-400 mb-4">or</p>
                <button
                    className="
            bg-gradient-to-b from-[#6366f1] to-[#4f46e5]
            hover:from-[#4f46e5] hover:to-[#6366f1]
            text-white font-bold py-2 px-4 rounded-md shadow-md transition-colors duration-200
          "
                >
                    Browse Files
                </button>
                <p className="text-xs font-mono text-gray-400 mt-4">Supports: .ch8, .chip8</p>
            </div>
        </CardContent>
    )
}

export default GameUpload;