import React, { useCallback, useEffect, useRef, type RefObject } from "react";
import useCanvasSizing from "../../hooks/useCanvasSizing";
import { Pixel, type Processor } from "chip8_core";

const CHIP8_WIDTH = 64;
const CHIP8_HEIGHT = 32;
const PIXEL_ON_COLOR = "#fff";
const PIXEL_OFF_COLOR = "#000";

interface CanvasProps {
    processorRef: RefObject<Processor | null>,
    memoryRef: RefObject<WebAssembly.Memory | null>,
    screenUpdateTrigger: number;
    className?: string,
}


const Canvas: React.FC<CanvasProps> = ({ className, processorRef, memoryRef, screenUpdateTrigger }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { pixelSize } = useCanvasSizing(canvasRef, CHIP8_WIDTH, CHIP8_HEIGHT);

    const drawDisplay = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas || pixelSize === 0 || !memoryRef.current || !processorRef.current) {
            return;
        }

        const ctx = canvas.getContext('2d');
        if (!ctx) {
            return;
        }

        const screenPtr = processorRef.current.screen();
        if (screenPtr === null) {
            console.warn("Screen pointer is null, cannot draw display.");
            return;
        }
        const displayPixels = new Uint8Array(memoryRef.current.buffer, screenPtr, CHIP8_WIDTH * CHIP8_HEIGHT);
        ctx.fillStyle = PIXEL_OFF_COLOR;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let row = 0; row < CHIP8_HEIGHT; row++) {
            for (let col = 0; col < CHIP8_WIDTH; col++) {
                const pixelIndex = row * CHIP8_WIDTH + col;

                ctx.fillStyle = displayPixels[pixelIndex] == Pixel.Off
                    ? PIXEL_OFF_COLOR
                    : PIXEL_ON_COLOR;
                ctx.fillRect(
                    col * pixelSize,
                    row * pixelSize,
                    pixelSize,
                    pixelSize
                );
            }
        }
    }, [pixelSize, processorRef, memoryRef]);

    useEffect(() => {
        drawDisplay();
    }, [drawDisplay, screenUpdateTrigger]);

    return (
        <canvas ref={canvasRef} className={`bg-card rounded-xl w-full mb-2 ${className || ''}`}>
            Your browser does not support the canvas element.
        </canvas>
    )
}

export default Canvas;