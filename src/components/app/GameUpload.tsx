import React, { useRef, type RefObject } from "react";
import CardContent from "../ui/CardContent"
import type { Processor } from "chip8_core";

interface GameUploadProps {
    processorRef: RefObject<Processor | null>,
    setIsGameLoaded: React.Dispatch<React.SetStateAction<boolean>>,
}

const GameUpload: React.FC<GameUploadProps> = ({ processorRef, setIsGameLoaded }) => {
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
                if (e.target && e.target.result && processorRef) {
                    const arrayBuffer = e.target.result as ArrayBuffer;
                    const byteArray = new Uint8Array(arrayBuffer);
                    // console.log(byteArray);
                    processorRef.current?.load(byteArray);
                    setIsGameLoaded(true);
                    console.log("File Name:", rom.name);
                    console.log("File Type:", rom.type);
                    console.log("File Size:", rom.size, "bytes");
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
                <p className="text-lg mb-2">Drop ROM file here</p>
                <p className="text-sm text-gray-400 mb-4">or</p>
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