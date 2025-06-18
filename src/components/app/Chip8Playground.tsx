import React, { useCallback, useEffect, useState } from "react";
import PlaygroundLayout from "../layouts/PlaygroundLayout";
import Card from "../ui/Card";
import GameLibrary from "./GameLibrary";
import Canvas from "./Canvas";
import GameUpload from "./GameUpload";
import Controls from "./Controls";
import KeyboardMapping from "./KeyboardMapping";
import GameInfo from "./GameInfo";
import CpuStatus from "./CpuStatus";
import Separator from "../ui/Separator";
import useChip8 from "../../hooks/useChip8";
import useKeyboardInput from "../../hooks/useKeyboardInput";

const CHIP8_CYCLES_PER_FRAME = 10;

const Chip8Playground: React.FC = () => {
    const { processorRef, memoryRef, animationFrameIdRef } = useChip8();
    const [isGameLoaded, setIsGameLoaded] = useState<boolean>(false);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [screenUpdateTrigger, setScreenUpdateTrigger] = useState(0);

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
            animationFrameIdRef.current = requestAnimationFrame(gameLoop);
        } else {
            if (animationFrameIdRef.current !== null) {
                cancelAnimationFrame(animationFrameIdRef.current);
                animationFrameIdRef.current = null;
            }
        }

        return () => {
            if (animationFrameIdRef.current !== null) {
                cancelAnimationFrame(animationFrameIdRef.current);
            }
        };
    }, [isRunning, gameLoop, animationFrameIdRef])

    const handleLoadGame = useCallback((data: Uint8Array) => {
        if (processorRef.current) {
            processorRef.current.load(data);
            setIsGameLoaded(true);
            setIsRunning(false);
            setScreenUpdateTrigger(prev => prev + 1);
            console.log("Game loaded.");
        }
    }, [processorRef]);

    const handlePlayPause = useCallback(() => {
        if (!isGameLoaded) return;
        setIsRunning(prev => !prev);
    }, [isGameLoaded]);

    const handleReset = useCallback(() => {
        if (processorRef.current) {
            setIsRunning(false);
            processorRef.current.reset();
            setIsGameLoaded(false);
            setScreenUpdateTrigger(prev => prev + 1);
            console.log("Emulator reset.");
        }
    }, [processorRef]);

    useKeyboardInput({ processorRef, isRunning });

    return (
        <PlaygroundLayout>
            <Card className="lg:w-1/4">
                <div className="flex flex-col justify-between">
                    <GameLibrary />
                    <Separator />
                    <GameUpload onLoadGame={handleLoadGame} />
                </div>
            </Card>
            <div className="lg:flex-1 flex flex-col">
                <Canvas
                    className="h-[70%]"
                    memoryRef={memoryRef}
                    processorRef={processorRef}
                    screenUpdateTrigger={screenUpdateTrigger}
                />
                <Card className="flex-1">
                    <Controls
                        isGameLoaded={isGameLoaded}
                        isRunning={isRunning}
                        onPlayPause={handlePlayPause}
                        onReset={handleReset}
                    />
                    <Separator />
                    <KeyboardMapping />
                </Card>
            </div>
            <Card className="lg:w-1/4">
                <GameInfo />
                <Separator />
                <CpuStatus />
            </Card>
        </PlaygroundLayout>
    )
}

export default Chip8Playground;