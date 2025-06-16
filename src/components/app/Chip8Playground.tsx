import React, { useState } from "react";
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

const Chip8Playground: React.FC = () => {
    const { processorRef, memoryRef } = useChip8();
    const [isGameLoaded, setIsGameLoaded] = useState<boolean>(false);
    const [isRunning, setIsRunning] = useState<boolean>(false);

    if (processorRef.current === null || memoryRef.current === null) {
        return (
            <div>
                <p>Initializing WASM...</p>
            </div>
        )
    }

    return (
        <PlaygroundLayout>
            <Card className="lg:w-1/4">
                <div className="flex flex-col justify-between">
                    <GameLibrary />
                    <Separator />
                    <GameUpload setIsGameLoaded={setIsGameLoaded} processorRef={processorRef} />
                </div>
            </Card>
            <div className="lg:flex-1 flex flex-col">
                <Canvas
                    className="h-[70%]"
                    memoryRef={memoryRef}
                    processorRef={processorRef}
                    isRunning={isRunning}
                />
                <Card className="flex-1">
                    <Controls
                        isGameLoaded={isGameLoaded}
                        isRunning={isRunning}
                        processorRef={processorRef}
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