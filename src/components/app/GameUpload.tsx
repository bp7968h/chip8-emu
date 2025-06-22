import React, { useRef } from "react";
import CardContent from "../ui/CardContent"
import type { AvailableGameInfo } from "../../constants/availableGames";

interface GameUploadProps {
    onLoadGame: (data: Uint8Array) => void,
    setUploadedGameInfo: React.Dispatch<React.SetStateAction<AvailableGameInfo | null>>,
}

const GameUpload: React.FC<GameUploadProps> = ({ onLoadGame, setUploadedGameInfo }) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleUpload = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const rom = files[0];

            const reader = new FileReader();

            reader.onload = (e) => {
                if (e.target && e.target.result) {
                    const arrayBuffer = e.target.result as ArrayBuffer;
                    const byteArray = new Uint8Array(arrayBuffer);
                    onLoadGame(byteArray);
                    let uploadedGameName = rom.name.split(".")[0];
                    if (uploadedGameName.includes("_")) {
                        uploadedGameName = uploadedGameName
                            .split("_")
                            .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
                            .join(" ");
                    } else {
                        uploadedGameName = uploadedGameName.charAt(0).toUpperCase() + uploadedGameName.slice(1).toLowerCase();
                    }
                    setUploadedGameInfo({
                        author: "Unknown",
                        description: [{ key: "info", action: "No data available" }],
                        filename: rom.name,
                        id: uploadedGameName,
                        size: rom.size / 1000,
                        title: uploadedGameName,
                        year: 0
                    })
                }
            };

            reader.onerror = (error) => {
                console.error("Error reading file:", error);
            };

            reader.readAsArrayBuffer(rom);
        }
    }

    return (
        <CardContent title="Upload Game">
            <div className="border-2 border-dashed border-purple-500 rounded-lg p-8 text-center text-purple-400 flex-shrink-0">
                <button
                    onClick={handleUpload}
                    className="
            bg-gradient-to-b from-[#6366f1] to-[#4f46e5]
            hover:from-[#4f46e5] hover:to-[#6366f1]
            text-white font-bold py-2 px-4 rounded-md shadow-md transition-colors duration-200
          "
                >
                    Browse Files
                    <input
                        type="file"
                        accept=".ch8,.chip8"
                        ref={inputRef}
                        onChange={handleFileChange}
                        className="hidden"
                    />
                </button>
                <p className="text-xs font-mono text-gray-400 mt-4">Supports: .ch8, .chip8</p>
            </div>
        </CardContent>
    )
}

export default GameUpload;