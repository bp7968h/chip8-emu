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
import useChip8Controller from "../../hooks/useChip8Controller";

const Chip8Playground: React.FC = () => {
    const { processorRef, memoryRef, animationFrameIdRef } = useChip8();

    const {
        isGameLoaded,
        isRunning,
        screenUpdateTrigger,
        handleLoadGame,
        handlePlayPause,
        handleReset,
    } = useChip8Controller({ processorRef, animationFrameIdRef });

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