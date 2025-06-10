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

const Chip8Playground: React.FC = () => {
    return (
        <PlaygroundLayout>
            <Card className="lg:w-1/4">
                <GameLibrary />
                <Separator />
                <GameUpload />
            </Card>
            <div className="lg:flex-1 flex flex-col">
                <Canvas className="h-[70%]" />
                <Card className="flex-1">
                    <Controls />
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