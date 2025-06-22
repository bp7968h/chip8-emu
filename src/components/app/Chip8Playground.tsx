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
import useKeyboardInput from "../../hooks/useKeyboardInput";
import useChip8Controller from "../../hooks/useChip8Controller";
import availableGames, { type AvailableGameInfo } from "../../constants/availableGames";

const Chip8Playground: React.FC = () => {
    const { processorRef, memoryRef, animationFrameIdRef } = useChip8();
    const [selectedGameInfo, setSelectedGameInfo] = useState<AvailableGameInfo | null>(null);

    const {
        isGameLoaded,
        isRunning,
        emulatorStatus,
        screenUpdateTrigger,
        fps,
        handleLoadGame,
        handlePlayPause,
        handleReset,
    } = useChip8Controller({ processorRef, animationFrameIdRef, setSelectedGameInfo });

    useKeyboardInput({ processorRef, isRunning });

    const handleGameSelection = async (game: AvailableGameInfo) => {
        try {
            const response = await fetch(`/roms/${game.filename}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch ${game.filename}: ${response.statusText}`);
            }
            const arrayBuffer = await response.arrayBuffer();
            const byteArray = new Uint8Array(arrayBuffer);

            handleLoadGame(byteArray);
            setSelectedGameInfo(game);
            // console.log(`Successfully loaded ${game.title}`);
        } catch (error) {
            console.error("Error loading game from library:", error);
        }
    }

    return (
        <PlaygroundLayout>
            <Card className="lg:w-[25%]">
                <div className="flex flex-col justify-between">
                    <GameLibrary
                        games={availableGames}
                        onGameSelect={handleGameSelection}
                        selectedGameId={selectedGameInfo?.id || null}
                    />
                    <Separator />
                    <GameUpload
                        onLoadGame={handleLoadGame}
                        setUploadedGameInfo={setSelectedGameInfo}
                    />
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
            <Card className="lg:w-[30%] felx flex-col max-h-full">
                <GameInfo
                    className="h-[20%]"
                    availableGameInfo={selectedGameInfo}
                />
                <Separator />
                <CpuStatus
                    className="flex-1"
                    processorRef={processorRef}
                    memoryRef={memoryRef}
                    screenUpdateTrigger={screenUpdateTrigger}
                    emulatorStatus={emulatorStatus}
                    fps={fps}
                />
            </Card>
        </PlaygroundLayout>
    )
}

export default Chip8Playground;