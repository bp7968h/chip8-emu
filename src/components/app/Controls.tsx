import React, { type RefObject } from "react";
import CardContent from "../ui/CardContent"
import type { Processor } from "chip8_core";

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
                    className={`${isRunning ? "hover:bg-cyellow bg-yellow-700" : "hover:bg-cgreen bg-green-700 "}
            text-white font-bold py-2 px-4 rounded-md shadow-md flex items-center hover:cursor-pointer`}
                    aria-label="Play Emulator"
                    onClick={onPlayPause}
                    // disabled={isGameLoaded}
                    disabled={!isGameLoaded && !isRunning}
                >
                    <span className="mr-1 text-base">{isRunning ? "⏸" : "▶"}</span> {isRunning ? "PAUSE" : "PLAY"}
                </button>
                <button
                    className="hover:bg-cred bg-red-700 text-white font-bold py-2 px-4 rounded-md flex items-center hover:cursor-pointer"
                    aria-label="Reset Emulator"
                    onClick={onReset}
                    disabled={!isGameLoaded}
                >
                    <span className="mr-1 text-base">↻</span> RESET
                </button>
            </div>
        </CardContent >
    )
}

export default Controls;