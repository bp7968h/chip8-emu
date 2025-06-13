import React, { useCallback, useEffect, useRef } from "react";
import useCanvasSizing from "../../hooks/useCanvasSizing";

const CHIP8_WIDTH = 64;
const CHIP8_HEIGHT = 32;
const PIXEL_ON_COLOR = "#fff";
const PIXEL_OFF_COLOR = "#000";

interface CanvasProps {
    memory: WebAssembly.Memory,
    screen_addr: number,
    screenUpdateTrigger: number,
    className?: string,
}

const Canvas: React.FC<CanvasProps> = ({ className, memory, screenUpdateTrigger, screen_addr }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { pixelSize } = useCanvasSizing(canvasRef, CHIP8_WIDTH, CHIP8_HEIGHT);

    const drawDisplay = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas || pixelSize === 0 || !memory || screen_addr === null) {
            return;
        }

        const ctx = canvas.getContext('2d');
        if (!ctx) {
            return;
        }

        const screen = new Uint8Array(memory.buffer, screen_addr, CHIP8_WIDTH * CHIP8_HEIGHT);

        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = PIXEL_OFF_COLOR;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let y = 0; y < CHIP8_HEIGHT; y++) {
            for (let x = 0; x < CHIP8_WIDTH; x++) {
                const pixelIndex = y * CHIP8_WIDTH + x;

                // Check if pixel is on (non-zero value means true)
                if (screen[pixelIndex]) {
                    ctx.fillStyle = PIXEL_ON_COLOR;
                    ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
                }
            }
        }

        console.log("drawn i canvas");
    }, [memory, screen_addr, pixelSize]);

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