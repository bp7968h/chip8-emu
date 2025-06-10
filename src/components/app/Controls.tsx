import React from "react";
import CardContent from "../ui/CardContent"

const Controls: React.FC = () => {
    return (
        <CardContent title="Controls">
            <div className="flex flex-wrap items-center gap-4 justify-center">
                <button
                    className="hover:bg-cgreen bg-green-700
            text-white font-bold py-2 px-4 rounded-md shadow-md flex items-center hover:cursor-pointer
          "
                    aria-label="Play Emulator"
                >
                    <span className="mr-1 text-base">▶</span> PLAY
                </button>
                <button
                    className="hover:bg-cyellow bg-yellow-700 text-white font-bold py-2 px-4 rounded-md flex items-center hover:cursor-pointer"
                    aria-label="Pause Emulator"
                >
                    <span className="mr-1 text-base">⏸</span> PAUSE
                </button>
                <button
                    className="hover:bg-cred bg-red-700 text-white font-bold py-2 px-4 rounded-md flex items-center hover:cursor-pointer"
                    aria-label="Reset Emulator"
                >
                    <span className="mr-1 text-base">↻</span> RESET
                </button>
            </div>
        </CardContent>
    )
}

export default Controls;