import type { Processor } from "chip8_core";
import { useCallback, useEffect, useState, type RefObject } from "react";

export const CHIP8_CYCLES_PER_FRAME = 10;

export type EmulatorStatus = 'stopped' | 'paused' | 'running';

interface UseChip8ControllerProps {
    processorRef: RefObject<Processor | null>;
    animationFrameIdRef: RefObject<number | null>;
}

interface UseChip8ControllerReturn {
    isGameLoaded: boolean;
    isRunning: boolean;
    emulatorStatus: EmulatorStatus;
    screenUpdateTrigger: number;
    handleLoadGame: (data: Uint8Array) => void;
    handlePlayPause: () => void;
    handleReset: () => void;
}

const useChip8Controller = ({ processorRef, animationFrameIdRef }: UseChip8ControllerProps): UseChip8ControllerReturn => {
    const [isGameLoaded, setIsGameLoaded] = useState<boolean>(false);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [emulatorStatus, setEmulatorStatus] = useState<EmulatorStatus>('stopped');
    const [screenUpdateTrigger, setScreenUpdateTrigger] = useState(0);

    // Game Loop Logic
    const gameLoop = useCallback(() => {
        if (processorRef.current === null) {
            return;
        }

        for (let i = 0; i < CHIP8_CYCLES_PER_FRAME; i++) {
            processorRef.current.cycle();
        }
        processorRef.current.tick_timers();
        setScreenUpdateTrigger(prev => prev + 1);

        if (isRunning) {
            animationFrameIdRef.current = requestAnimationFrame(gameLoop);
        }
    }, [isRunning, animationFrameIdRef, processorRef]);


    useEffect(() => {
        if (isRunning) {
            setEmulatorStatus("running");
            animationFrameIdRef.current = requestAnimationFrame(gameLoop);
        } else {
            if (animationFrameIdRef.current !== null) {
                cancelAnimationFrame(animationFrameIdRef.current);
                animationFrameIdRef.current = null;
            }

            // If a game is loaded, it means it's now paused.
            // If no game is loaded, it means it's stopped.
            if (isGameLoaded) {
                setEmulatorStatus('paused');
            } else {
                setEmulatorStatus('stopped');
            }
        }

        // Cleanup
        return () => {
            if (animationFrameIdRef.current !== null) {
                cancelAnimationFrame(animationFrameIdRef.current);
            }
        };
    }, [isRunning, gameLoop, animationFrameIdRef]);

    // Handlers
    const handleLoadGame = useCallback((data: Uint8Array) => {
        if (processorRef.current) {
            processorRef.current.load(data);
            setIsGameLoaded(true);
            // Pause after loading a new game, user will press play
            setIsRunning(false);
            setEmulatorStatus('paused');
            // Force redraw after loading
            setScreenUpdateTrigger(prev => prev + 1);
            console.log("Game loaded.");
        }
    }, [processorRef]);

    const handlePlayPause = useCallback(() => {
        // Cannot play if no game is loaded
        if (!isGameLoaded) return;
        // Toggle isRunning state
        setIsRunning(prev => !prev);
    }, [isGameLoaded]);

    const handleReset = useCallback(() => {
        if (processorRef.current) {
            // Stop the loop
            setIsRunning(false);
            // Reset Chip-8 state
            processorRef.current.reset();
            // A reset means no game is currently "loaded and ready to play"
            setEmulatorStatus('stopped');
            setIsGameLoaded(false);
            // Force redraw after reset
            setScreenUpdateTrigger(prev => prev + 1);
            console.log("Emulator reset.");
        }
    }, [processorRef]);

    return {
        isGameLoaded,
        isRunning,
        emulatorStatus,
        screenUpdateTrigger,
        handleLoadGame,
        handlePlayPause,
        handleReset,
    };
}

export default useChip8Controller;