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
            <Card>
                <GameLibrary />
                <Separator />
                <GameUpload />
            </Card>
            <div>
                <Canvas />
                <Card>
                    <Controls />
                    <Separator />
                    <KeyboardMapping />
                </Card>
            </div>
            <Card>
                <GameInfo />
                <Separator />
                <CpuStatus />
            </Card>
        </PlaygroundLayout>
    )
}

export default Chip8Playground;