import React from "react";
import CardContent from "../ui/CardContent"

interface ControlsProps {
    isGameLoaded: boolean,
    isRunning: boolean,
    onPlayPause: () => void;
    onReset: () => void;
}

const Controls: React.FC<ControlsProps> = ({ isGameLoaded, isRunning, onPlayPause, onReset }) => {
    return (
        <CardContent title="Controls">
            <div className="flex flex-wrap items-center gap-4 justify-center">
                <button
                    className={`
                        text-white font-bold py-2 px-4 rounded-md shadow-md flex items-center
                        ${isRunning
                            ? "bg-yellow-700 hover:bg-yellow-600 focus:ring-yellow-500" // Use a slightly different hover for better feedback
                            : "bg-green-700 hover:bg-green-600 focus:ring-green-500"
                        }
                        disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none // Styles for disabled state
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 // Focus styles for accessibility
                    `}
                    aria-label="Play Emulator"
                    onClick={onPlayPause}
                    disabled={!isGameLoaded && !isRunning}
                >
                    <span className="mr-1 text-base">{isRunning ? "⏸" : "▶"}</span> {isRunning ? "PAUSE" : "PLAY"}
                </button>
                <button
                    className={`
                        bg-red-700 hover:bg-red-600 focus:ring-red-500 // Use a slightly different hover
                        text-white font-bold py-2 px-4 rounded-md flex items-center
                        disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none // Styles for disabled state
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 // Focus styles for accessibility
                    `}
                    aria-label="Reset Emulator"
                    onClick={onReset}
                    disabled={!isGameLoaded}
                >
                    <span className="mr-1 text-base">↻</span> RESET
                </button>
            </div>
        </CardContent>
    );
}

export default Controls;