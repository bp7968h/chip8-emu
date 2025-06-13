import React, { useCallback, useEffect, useRef } from "react";
import useCanvasSizing from "../../hooks/useCanvasSizing";


const CHIP8_WIDTH = 64;
const CHIP8_HEIGHT = 32;
const PIXEL_ON_COLOR = "#fff";
const PIXEL_OFF_COLOR = "#000";

interface CanvasProps {
    memory: WebAssembly.Memory,
    screen_addr: number,
    className?: string,
}

const Canvas: React.FC<CanvasProps> = ({ className, memory, screen_addr }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { pixelSize } = useCanvasSizing(canvasRef, CHIP8_WIDTH, CHIP8_HEIGHT);
    const screen = new Uint8Array(memory.buffer, screen_addr, CHIP8_WIDTH * CHIP8_HEIGHT);

    const drawDisplay = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas || pixelSize === 0 || !memory || screen_addr === null) {
            return;
        }

        const ctx = canvas.getContext('2d');
        if (!ctx) {
            return;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = PIXEL_OFF_COLOR;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let h = 0; h < CHIP8_HEIGHT; h++) {
            for (let w = 0; w < CHIP8_WIDTH; w++) {
                const pixelIndex = h * CHIP8_WIDTH + w;
                ctx.fillStyle = screen[pixelIndex] ? PIXEL_ON_COLOR : PIXEL_OFF_COLOR;
                ctx.fillRect(w * pixelSize, h * pixelSize, pixelSize, pixelSize);
            }
        }
    }, [screen]);

    useEffect(() => {
        drawDisplay();
    }, [screen]);

    return (
        <canvas ref={canvasRef} className={`bg-card rounded-xl w-full mb-2 ${className || ''}`}>
            Your browser does not support the canvas element.
        </canvas>
    )
}

export default Canvas;