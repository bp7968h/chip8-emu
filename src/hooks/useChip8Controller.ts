import type { Processor } from "chip8_core";
import { useCallback, useEffect, useRef, useState, type RefObject } from "react";
import type { AvailableGameInfo } from "../constants/availableGames";

export const CHIP8_CYCLES_PER_FRAME = 10;
const FPS_SAMPLE_SIZE = 60;

export type EmulatorStatus = 'stopped' | 'paused' | 'running';

interface UseChip8ControllerProps {
    processorRef: RefObject<Processor | null>;
    animationFrameIdRef: RefObject<number | null>;
    setSelectedGameInfo: React.Dispatch<React.SetStateAction<AvailableGameInfo | null>>
}

interface UseChip8ControllerReturn {
    isGameLoaded: boolean;
    isRunning: boolean;
    emulatorStatus: EmulatorStatus;
    screenUpdateTrigger: number;
    fps: number,
    handleLoadGame: (data: Uint8Array) => void;
    handlePlayPause: () => void;
    handleReset: () => void;
}

const useChip8Controller = ({ processorRef, animationFrameIdRef, setSelectedGameInfo }: UseChip8ControllerProps): UseChip8ControllerReturn => {
    const [isGameLoaded, setIsGameLoaded] = useState<boolean>(false);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [emulatorStatus, setEmulatorStatus] = useState<EmulatorStatus>('stopped');
    const [screenUpdateTrigger, setScreenUpdateTrigger] = useState(0);
    const [fps, setFps] = useState(0);

    const lastFrameTimeRef = useRef<DOMHighResTimeStamp>(0);
    const frameTimesRef = useRef<number[]>([]);

    // Game Loop Logic
    const gameLoop = useCallback((currentTime: DOMHighResTimeStamp) => {
        if (processorRef.current === null) {
            return;
        }

        const deltaTime = currentTime - lastFrameTimeRef.current;
        lastFrameTimeRef.current = currentTime;

        if (deltaTime > 0) {
            frameTimesRef.current.push(deltaTime);
            if (frameTimesRef.current.length > FPS_SAMPLE_SIZE) {
                frameTimesRef.current.shift();
            }

            const totalDelta = frameTimesRef.current.reduce((acc, time) => acc + time, 0);
            const calculatedFps = 1000 / (totalDelta / frameTimesRef.current.length);
            setFps(Math.round(calculatedFps));
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
            lastFrameTimeRef.current = performance.now();
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
        setIsRunning(prev => {
            if (!prev) {
                lastFrameTimeRef.current = performance.now();
            }
            return !prev;
        });
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
            setSelectedGameInfo(null);
            // Force redraw after reset
            setScreenUpdateTrigger(prev => prev + 1);
        }
    }, [processorRef]);

    return {
        isGameLoaded,
        isRunning,
        emulatorStatus,
        screenUpdateTrigger,
        fps,
        handleLoadGame,
        handlePlayPause,
        handleReset,
    };
}

export default useChip8Controller;