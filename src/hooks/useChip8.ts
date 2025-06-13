import init, { Processor } from "chip8_core";
import { useCallback, useEffect, useRef, useState } from "react";

const useChip8 = () => {
    const [chip8, setChip8] = useState<null | Processor>(null);
    const [memory, setMemory] = useState<WebAssembly.Memory | null>(null);
    const [screenAddr, setScreenAddr] = useState<number | null>(null);
    const [loadFn, setLoadFn] = useState<null | ((data: Uint8Array) => void)>(null);
    const [playFn, setPlayFn] = useState<null | (() => void)>(null);
    const [pauseFn, setPauseFn] = useState<null | (() => void)>(null);
    const [resetFn, setResetFn] = useState<null | (() => void)>(null);
    const [isRunning, setIsRunning] = useState(false);
    const [screenUpdateTrigger, setScreenUpdateTrigger] = useState(0);

    const gameLoopRef = useRef<number | null>(null);
    const processorRef = useRef<Processor | null>(null);

    const gameLoop = useCallback(() => {
        if (processorRef.current && isRunning) {
            console.log("g loop ");
            processorRef.current.cycle();
            processorRef.current.tick_timers();
            setScreenUpdateTrigger(prev => prev + 1);
            gameLoopRef.current = requestAnimationFrame(gameLoop);
        }
    }, [isRunning]);

    const startGame = useCallback(() => {
        if (processorRef.current && !isRunning) {
            setIsRunning(true);
        }
    }, [isRunning]);

    const pauseGame = useCallback(() => {
        setIsRunning(false);
        if (gameLoopRef.current) {
            cancelAnimationFrame(gameLoopRef.current);
            gameLoopRef.current = null;
        }
    }, []);

    const resetGame = useCallback(() => {
        pauseGame();
        if (processorRef.current) {
            processorRef.current.reset();
            setScreenUpdateTrigger(prev => prev + 1);
        }
    }, [pauseGame]);

    useEffect(() => {
        if (isRunning && processorRef.current) {
            gameLoopRef.current = requestAnimationFrame(gameLoop);
        } else if (gameLoopRef.current) {
            cancelAnimationFrame(gameLoopRef.current);
            gameLoopRef.current = null;
        }

        return () => {
            if (gameLoopRef.current) {
                cancelAnimationFrame(gameLoopRef.current);
            }
        };
    }, [isRunning, gameLoop]);

    useEffect(() => {
        const initChip8 = async () => {
            try {
                const wasm = await init();
                const processor = new Processor();

                setChip8(processor);
                processorRef.current = processor;
                setMemory(wasm.memory);
                setScreenAddr(processor.screen());

                setLoadFn(() => (data: Uint8Array) => {
                    processor.load(data);
                    // Trigger screen update after loading
                    setScreenUpdateTrigger(prev => prev + 1);
                });
                setPlayFn(() => startGame);
                setPauseFn(() => pauseGame);
                setResetFn(() => resetGame);

                console.log("Chip8 processor initialized successfully.");
            } catch (err) {
                console.error("Failed to initialize Chip8 processor: ", err);
            }
        };

        initChip8();
    }, [startGame, pauseGame, resetGame]);

    useEffect(() => {
        return () => {
            if (gameLoopRef.current) {
                cancelAnimationFrame(gameLoopRef.current);
            }
        };
    }, []);

    return {
        chip8,
        memory,
        screenAddr,
        loadFn,
        playFn,
        pauseFn,
        resetFn,
        isRunning,
        screenUpdateTrigger
    };
};

export default useChip8;