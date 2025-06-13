import React from "react";
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
    const { chip8, memory, screenAddr, loadFn, playFn, pauseFn, resetFn, isRunning, screenUpdateTrigger
    } = useChip8();
    return (
        <PlaygroundLayout>
            <Card className="lg:w-1/4">
                <div className="flex flex-col justify-between">
                    <GameLibrary />
                    <Separator />
                    <GameUpload loadFn={loadFn} />
                </div>
            </Card>
            <div className="lg:flex-1 flex flex-col">
                {
                    memory && screenAddr !== null ? (
                        <Canvas
                            className="h-[70%]"
                            memory={memory}
                            screen_addr={screenAddr}
                            screenUpdateTrigger={screenUpdateTrigger}
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <div className="text-center">
                                <p>Initializing CHIP-8 processor...</p>
                            </div>
                        </div>
                    )
                }

                <Card className="flex-1">
                    <Controls playFn={playFn} resetFn={resetFn} pauseFn={pauseFn} isRunning={isRunning} />
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