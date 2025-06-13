import React from "react";
import CardContent from "../ui/CardContent"

interface ControlsProps {
    playFn: (() => void) | null,
    pauseFn: (() => void) | null,
    resetFn: (() => void) | null,
    isRunning: boolean,
}

const Controls: React.FC<ControlsProps> = ({ playFn, pauseFn, resetFn, isRunning }) => {

    const handlePlayPause = () => {
        if (isRunning && pauseFn) {
            pauseFn();
        } else if (!isRunning && playFn) {
            playFn();
        }
    };

    const handleReset = () => {
        if (resetFn) {
            resetFn();
        }
    };

    return (
        <CardContent title="Controls">
            <div className="flex flex-wrap items-center gap-4 justify-center">
                <button
                    className={`${isRunning ? "hover:bg-cyellow bg-yellow-700" : "hover:bg-cgreen bg-green-700 "}
            text-white font-bold py-2 px-4 rounded-md shadow-md flex items-center hover:cursor-pointer`}
                    aria-label="Play Emulator"
                    onClick={handlePlayPause}
                    disabled={!playFn && !pauseFn}
                >
                    <span className="mr-1 text-base">{isRunning ? "⏸" : "▶"}</span> {isRunning ? "PAUSE" : "PLAY"}
                </button>
                <button
                    className="hover:bg-cred bg-red-700 text-white font-bold py-2 px-4 rounded-md flex items-center hover:cursor-pointer"
                    aria-label="Reset Emulator"
                    onClick={handleReset}
                    disabled={!resetFn}
                >
                    <span className="mr-1 text-base">↻</span> RESET
                </button>
            </div>
        </CardContent>
    )
}

export default Controls;